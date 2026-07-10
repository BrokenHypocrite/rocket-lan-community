// Snapshots GitHub Releases download counters into docs/assets/stats.json.
//
// Two pure functions do the real work (tallyCounts, weeklyLaunches); the
// rest of the file is I/O glue (fetch, read, write) guarded behind an
// import.meta.url check so the pure functions stay importable from tests
// or ad hoc node -e checks without hitting the network.
//
// Hand-verification (no test runner in this repo; run these from the repo
// root and rerun any time the pure functions change):
//
// 1) tallyCounts, two releases with mixed assets -> { downloads: 8, launches: 10 }
//   node -e "import('./scripts/collect-stats.mjs').then(({ tallyCounts }) => { const releases = [ { assets: [ { name: 'RocketLAN-0.10.0-setup.exe', download_count: 5 }, { name: 'latest.json', download_count: 8 } ] }, { assets: [ { name: 'RocketLAN-0.10.1-setup.exe', download_count: 3 }, { name: 'latest.json', download_count: 2 } ] }, ]; console.log(tallyCounts(releases)); });"
//
// 2) weeklyLaunches with 0 days of history and with 3 days of history -> null, null
//   node -e "import('./scripts/collect-stats.mjs').then(({ weeklyLaunches }) => { console.log(weeklyLaunches([{ date: '2026-07-10', downloads: 10, launches: 10 }], '2026-07-10')); const threeDays = [ { date: '2026-07-08', downloads: 8, launches: 8 }, { date: '2026-07-09', downloads: 9, launches: 9 }, { date: '2026-07-10', downloads: 10, launches: 10 }, ]; console.log(weeklyLaunches(threeDays, '2026-07-10')); });"
//
// 3) weeklyLaunches with 10 days of history -> a positive delta
//   node -e "import('./scripts/collect-stats.mjs').then(({ weeklyLaunches }) => { const history = []; for (let i = 10; i >= 0; i--) { const d = new Date('2026-07-10T00:00:00Z'); d.setUTCDate(d.getUTCDate() - i); history.push({ date: d.toISOString().slice(0, 10), downloads: 100 - i, launches: 100 - i }); } console.log(weeklyLaunches(history, '2026-07-10')); });"

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const REPO = "BrokenHypocrite/rocket-lan-community";
const RELEASES_URL = `https://api.github.com/repos/${REPO}/releases?per_page=100`;
const MAX_HISTORY_DAYS = 730;
const MIN_LOOKBACK_DAYS = 7;
const MAX_LOOKBACK_DAYS = 14;
const MS_PER_DAY = 24 * 60 * 60 * 1000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STATS_PATH = path.join(__dirname, "..", "docs", "assets", "stats.json");

// Pure: given the releases API payload, sum installer + manifest counters.
// Installer assets are the NSIS bundles (*-setup.exe); the launch counter
// is the updater manifest (latest.json), fetched once per app start by
// builds >= 0.10.0. Neither number dedupes people; see the plan's
// "Accuracy caveats".
//
// IMPORTANT: latest.json exists on EVERY release, not just the newest one,
// and the app's updater always hits releases/latest/download/latest.json,
// which resolves to the newest release's copy. Summing download_count
// across ALL releases' latest.json assets is still correct as a
// cumulative launch counter: once a release stops being "latest", its
// copy of latest.json stops receiving new hits and its count freezes, so
// the sum only ever goes up. It is not double-counting; it is adding a
// frozen historical total to a currently-moving one.
export function tallyCounts(releases) {
  let downloads = 0;
  let launches = 0;
  for (const release of releases) {
    for (const asset of release.assets ?? []) {
      if (asset.name.endsWith("-setup.exe")) downloads += asset.download_count;
      if (asset.name === "latest.json") launches += asset.download_count;
    }
  }
  return { downloads, launches };
}

// Pure: weekly launches = today's total minus the snapshot closest to 7
// days back, searched in the 7..14 day window so a slightly late or early
// cron run still finds a usable comparison point. Null until history
// covers at least 7 days, so the site only shows this stat once it means
// something (see "Accuracy caveats": this is fetches of latest.json, not
// unique users, and it undercounts pre-0.10.0 or sideloaded installs).
export function weeklyLaunches(history, todayIso) {
  if (!Array.isArray(history) || history.length === 0) return null;

  const todayEntry = history.find((entry) => entry.date === todayIso);
  if (!todayEntry) return null;

  const today = new Date(`${todayIso}T00:00:00Z`);
  let best = null;
  let bestDiffFromWeek = Infinity;

  for (const entry of history) {
    if (entry.date === todayEntry.date) continue;
    const entryDate = new Date(`${entry.date}T00:00:00Z`);
    const daysAgo = Math.round((today - entryDate) / MS_PER_DAY);
    if (daysAgo < MIN_LOOKBACK_DAYS || daysAgo > MAX_LOOKBACK_DAYS) continue;
    const diffFromWeek = Math.abs(daysAgo - MIN_LOOKBACK_DAYS);
    if (diffFromWeek < bestDiffFromWeek) {
      bestDiffFromWeek = diffFromWeek;
      best = entry;
    }
  }

  if (!best) return null;
  return todayEntry.launches - best.launches;
}

async function fetchReleases() {
  const headers = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  const response = await fetch(RELEASES_URL, { headers });
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function readExistingStats() {
  try {
    const raw = await readFile(STATS_PATH, "utf8");
    return JSON.parse(raw);
  } catch {
    return { history: [] };
  }
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");

  const releases = await fetchReleases();
  const { downloads, launches } = tallyCounts(releases);

  const existing = await readExistingStats();
  const history = Array.isArray(existing.history) ? existing.history.slice() : [];

  const todayIso = new Date().toISOString().slice(0, 10);
  const todayEntry = { date: todayIso, downloads, launches };
  const existingIndex = history.findIndex((entry) => entry.date === todayIso);
  if (existingIndex >= 0) {
    history[existingIndex] = todayEntry;
  } else {
    history.push(todayEntry);
  }
  history.sort((a, b) => a.date.localeCompare(b.date));
  const cappedHistory = history.slice(-MAX_HISTORY_DAYS);

  const stats = {
    updated: new Date().toISOString(),
    downloads_total: downloads,
    launches_total: launches,
    weekly_launches: weeklyLaunches(cappedHistory, todayIso),
    history: cappedHistory,
  };

  const json = `${JSON.stringify(stats, null, 2)}\n`;

  if (dryRun) {
    console.log(json);
    return;
  }

  await writeFile(STATS_PATH, json, "utf8");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
  });
}

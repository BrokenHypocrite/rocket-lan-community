# Placeholder assets — fill in before going public

This directory is where Pages-side images, videos, and icons live. The site
currently references the following placeholders, in priority order:

## High priority — visible on landing

- **`assets/favicon.svg`** — site favicon, referenced by `index.html`. A
  minimal "RL" or rocket-trail mark in the brand cyan (`oklch(0.82 0.13 205)`)
  works. Keep it abstract; **do not** use anything resembling Rocket League's
  official branding.
- **Hero screenshot** on `index.html` — currently a striped CSS placeholder
  with the alt text:

  > [TODO: hero screenshot of the Session view with a custom map loaded —
  > ideally with a roster of 3–4 peers and the map preview visible]

  Drop a PNG or WebP into this directory (e.g. `session-hero.png`) and
  replace the `.screenshot-placeholder` div in `docs/index.html` with an
  `<img>` tag.

## Medium priority — nice-to-have

- **Feature-section screenshots** on `features.html` (none referenced yet,
  but the page has 5 sections that would each benefit from one). Suggested
  shots: Session roster with overlay open, the Map Library with the
  sticky-controls bar visible, the Map Maker card mid-sync, the
  community-browser modal, the in-game overlay docked to a corner.
- **Walkthrough clip** on `index.html` — a 20-30 second screen recording
  of "host → invite friend → friend joins → pick custom map → play". Host
  as MP4/WebM here, or embed an unlisted YouTube/Vimeo link. Strip official
  RL UI/branding from the clip where possible (the in-game footage itself
  is harder; use shots that focus on the custom map rather than RL's
  default chrome).

## Lower priority — polish

- **Open Graph image** — referenced by no page currently. Add a 1200×630
  PNG here (`og.png`) and wire `<meta property="og:image">` into the
  page heads when ready. Useful for link previews on Discord, Reddit, etc.
- **Twitter/Bluesky cards** — same as OG, can reuse the same image.

## Things to avoid

- **Psyonix or Epic Games logos, trademarks, or marketing art.**
- **Screenshots of Rocket League's official UI** that read as official
  branding (the lobby chrome, the match HUD with the score banner, etc.).
  Use shots that focus on the *custom map gameplay* or the Rocket LAN UI
  itself. The Rocket LAN UI itself is fine — that's our own design.
- **Real player Steam IDs / persona names / avatars** in screenshots,
  unless those players have explicitly OK'd it. The roster and overlay
  show this info; consider blurring or substituting test names.

## Where the placeholder shows in the rendered site

Open `docs/index.html` in a browser and scroll to the "See it in action"
section. The striped diagonal box is the placeholder. Same visual treatment
is reused via the `.screenshot-placeholder` CSS class if you add more.

**This file is excluded from the published site** via `_config.yml`'s
`exclude` list, so leaving it here doesn't surface a "PLACEHOLDERS.md" page
on the live URL.

# Rocket LAN, Community

**Coming soon on Steam.** Custom-map LAN nights for Rocket League, with friends.

[**Wishlist on Steam &rarr;**](https://store.steampowered.com/app/3183610/Rocket_LAN)

This repository is the **community-facing hub** for Rocket LAN. The app itself
is a separate, closed-source Steam app; here you'll find:

- **The website**, [`/docs`](./docs/), served at the project's GitHub Pages URL.
- **Issues**, for [bug reports](../../issues/new?template=bug_report.yml) and
  [feature requests](../../issues/new?template=feature_request.yml).
- **Discussions**, for questions, ideas, and showing off sessions you've run.
- **Project documents**, [Terms of Use](./TERMS.md),
  [Third-Party Notices](./THIRD-PARTY-NOTICES.md),
  [Security policy](./SECURITY.md).

## What Rocket LAN does

Rocket LAN is a Steam companion app that lets you and friends play Rocket
League **custom maps** together without anyone setting up a real LAN,
port-forwarding their router, or fighting Windows networking. It spins up
a private virtual network on each player's machine, downloads and syncs
custom maps between players, then lets Rocket League's own built-in LAN
match mode do the rest.

- **Steam-friend invites.** Host a session, invite friends from your Steam
  list, they join in a click.
- **Map sync.** Bring any custom map you have; Rocket LAN streams it to
  everyone in the lobby on the fly.
- **Workshop textures handled.** Cooked Workshop texture set auto-downloads
  and stays in sync peer-to-peer for any map that needs it.
- **EAC-compatible.** Works whether you launch with Easy Anti-Cheat on or off.
  Rocket LAN does not inject into the game.
- **Map Maker mode.** Iterate on your own `.udk` / `.upk`; the file is
  hot-swapped into the slot every time it changes on disk.
- **Community map browser.** Pull from the BakkesPlugins community library
  without leaving the app.

## Status

Rocket LAN is **feature-complete for launch** and currently in Steam's review
queue (typically a 1, 2 week window). The
[roadmap page](https://BrokenHypocrite.github.io/rocket-lan-community/roadmap.html)
covers what ships at launch and what's planned after. Wishlist the Steam
page to be notified the moment it goes live:
**<https://store.steampowered.com/app/3183610/Rocket_LAN>**.

Rocket LAN is distributed on Steam, and only on Steam right now. No plans to
ship outside Steam; open to it if there's enough demand.

## Contributing

The app source isn't open, but **bug reports, feature ideas, and feedback
absolutely are welcome here**. Pick the right channel:

| You want to... | Open... |
|---|---|
| Report something broken | An [Issue → Bug report](../../issues/new?template=bug_report.yml) |
| Suggest a new feature | An [Issue → Feature request](../../issues/new?template=feature_request.yml) |
| Ask a question | A [Discussion → Q&A](../../discussions/new?category=q-a) |
| Share a session / map / setup | A [Discussion → Show and tell](../../discussions/new?category=show-and-tell) |
| Float a half-formed idea | A [Discussion → Ideas](../../discussions/new?category=ideas) |
| Report a security issue | See [`SECURITY.md`](./SECURITY.md), **not** a public issue |

See [`NOTICE.md`](./NOTICE.md) for copyright and licensing details for the
content in this repo.

---

*Rocket LAN is an independent, fan-made tool. It is not affiliated with,
endorsed, sponsored, or approved by Psyonix LLC or Epic Games, Inc.*

# Rocket LAN, Terms of Use

_Last updated: 26 May 2026_

By installing or using Rocket LAN (the "Software"), you agree to these Terms
of Use. If you do not agree, do not install or use the Software.

## 1. What Rocket LAN is

Rocket LAN is a free, independent desktop application that lets you and
people you invite play Rocket League custom-map matches together over the
internet. It works by creating a private virtual local network so that
separate copies of Rocket League can discover and connect to one another as
they would on a real LAN. Rocket LAN does not modify, attach to, or inject
code into Rocket League; custom-map play happens through Rocket League's own
built-in LAN match feature. Rocket LAN is compatible with Easy Anti-Cheat
(EAC) whether enabled or disabled and does not interfere with EAC's
operation.

## 2. Not affiliated with Psyonix or Epic Games

Rocket LAN is an independent, fan-made tool. It is **not** affiliated with,
endorsed, sponsored, or approved by Psyonix LLC or Epic Games, Inc. "Rocket
League" is a trademark of Psyonix LLC. Rocket LAN is designed to be used
alongside a copy of Rocket League that you legally own; it does not include,
provide, distribute, or replace the game.

## 3. License

Rocket LAN's application software is **proprietary** and is licensed, not
sold, to you for personal use on your own systems. Copyright © 2026 Bryan J
Miller. All rights reserved. Subject to your compliance with these Terms,
you are granted a non-exclusive, non-transferable, revocable license to
install and use the Software on devices you own or control.

You may **not**: redistribute, resell, sublicense, rent, lease, modify,
reverse-engineer, decompile, disassemble, or create derivative works of the
Software, except to the extent such restriction is prohibited by applicable
law.

Rocket LAN bundles several third-party components, each governed by its own
license. The notable components, including OpenVPN's **tap-windows6**
virtual network driver, licensed under the **GNU General Public License,
version 2**, with corresponding source pointers; Valve's Steamworks SDK;
and the bundled fonts under the SIL Open Font License, are listed in the
in-app **Settings → Third-Party Notices** screen and reproduced publicly in
the project's [Third-Party Notices](./THIRD-PARTY-NOTICES.md) document.

## 4. Changes Rocket LAN makes to your system

To create the virtual LAN and play custom maps, Rocket LAN will, with your
permission:

- install a virtual network adapter driver, as a one-time elevated install
  step;
- create a virtual network adapter and assign it an address while a session
  is active;
- add Windows Firewall rules that permit its own network traffic;
- temporarily swap custom-map files into your Rocket League installation
  so a custom map can be loaded, and restore the original files afterward.

By installing and using the Software you consent to these changes. They are
necessary for the Software to function.

## 5. Privacy

Rocket LAN has no servers operated by its developer. It does not collect,
store, or transmit your personal data to the developer, and it contains no
analytics, telemetry, or automatic crash reporting.

- **Steam data.** Rocket LAN reads your Steam friends list, Steam IDs,
  persona names, and avatars through the Steamworks SDK so it can show
  your friends and let you host, invite, and join sessions. This
  information is used on your own computer. Your own Steam persona name is
  shared peer-to-peer with the other players in a session you host or
  join, so the session roster can show who is present. Rocket LAN also
  sets Steam "rich presence" while you host a session open to friends, so
  your Steam friends can see and join it through Steam.
- **Connectivity.** Sessions connect players peer-to-peer. When a direct
  connection is not possible, traffic is relayed through the public relay
  infrastructure of the iroh networking project (operated by its
  maintainers, not by Rocket LAN's developer); that project's discovery
  service is used to locate peers. All session traffic is end-to-end
  encrypted, so relays carry only encrypted data.
- **Local data.** Your settings and a local diagnostic log are stored only
  on your own computer. Nothing is uploaded.
- The developer does not sell, share, rent, or otherwise monetize any data.

## 6. Provided "as is", no warranty

The Software is provided free of charge, on an "AS IS" and "AS AVAILABLE"
basis, **without warranty of any kind**, express or implied, including but
not limited to the warranties of merchantability, fitness for a particular
purpose, and non-infringement. You use the Software at your own risk.

## 7. Limitation of liability

To the maximum extent permitted by applicable law, the developer of Rocket
LAN shall not be liable for any direct, indirect, incidental, special, or
consequential damages, including but not limited to loss of data,
interruption of service, damage to your Rocket League installation, or any
other computer or system problems, arising out of or in connection with
the Software or its use, even if advised of the possibility of such damages.

## 8. Acceptable use

Rocket LAN is intended for private custom-map matches among people you
invite. You are responsible for your own conduct and for the people you
invite into your sessions. Do not use Rocket LAN to violate the terms of
service of Rocket League, Steam, the Epic Games Store, or any applicable
law. Rocket LAN is not a cheat, provides no advantage in ranked or online
matchmaking, and does not enable mods in official online play.

## 9. Your accounts and game

Rocket LAN connects you with friends through Steam and requires a Steam
account. To use Rocket LAN for its intended purpose you must own a legal
copy of Rocket League, on Steam or the Epic Games Store.

## 10. Price

Rocket LAN is free.

## 11. Changes to these terms

These Terms of Use may be updated from time to time. The "Last updated"
date at the top of this document reflects the current version. Continued
use of the Software after an update constitutes acceptance of the revised
terms.

## 12. Severability

If any provision of these Terms is found to be invalid or unenforceable,
the remaining provisions remain in full force and effect.

## 13. Governing law

These Terms of Use are governed by the laws of the State of California,
United States, without regard to its conflict-of-laws principles. Any
dispute arising out of or relating to these Terms or the Software shall be
brought exclusively in the state or federal courts located in Yolo County,
California.

## 14. Contact

Questions about these Terms can be raised in the Rocket LAN community
repository's [Discussions](../../discussions) tab. Security issues should
follow the [Security Policy](./SECURITY.md) instead.

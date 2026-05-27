# Third-Party Notices

Rocket LAN's application redistributes the third-party components listed
below. The notable components — the bundled GPLv2 network driver, Valve's
Steamworks SDK, and the bundled fonts — warrant individual explanation
here. The full auto-generated dependency lists (every Rust crate and every
production npm package compiled into the shipped binary, with verbatim
license text) ship inside the application and are reachable from
**Settings → Third-Party Notices → Full third-party notices**.

This public document is the canonical version of the notable-component
notices. It is reproduced verbatim from the in-app notices screen.

---

## tap-windows6 — virtual network adapter driver

Rocket LAN bundles and installs OpenVPN's **tap-windows6** NDIS 6 TAP
virtual network driver. It is the layer-2 virtual Ethernet adapter over
which Rocket LAN carries Rocket League's native LAN traffic.

- **Component:** tap-windows6 (driver `tap0901`)
- **Upstream:** <https://github.com/OpenVPN/tap-windows6>
- **Version redistributed:** 9.27.0 (release tag `9.27.0`)
- **Copyright:** © OpenVPN Inc. and the tap-windows6 contributors
- **License:** GNU General Public License, version 2 (GPLv2)

### License

The tap-windows6 driver is licensed under the **GNU General Public
License, version 2**. The full GPLv2 text is in the file `COPYING` in the
upstream repository:
<https://github.com/OpenVPN/tap-windows6/blob/master/COPYING>

The driver is a separate, pre-signed kernel component. It runs in its own
address space and is **not linked into** Rocket LAN's user-space
application, so GPLv2 does not extend to Rocket LAN's own source code.
Redistributing the unmodified signed driver binary does, however, carry
GPLv2's obligation to make the corresponding source available.

### Corresponding source code

Rocket LAN ships the tap-windows6 driver **unmodified**. The complete
corresponding source code for the redistributed version (9.27.0) is the
upstream tagged release, publicly and permanently available at:

> **<https://github.com/OpenVPN/tap-windows6/releases/tag/9.27.0>**

The vendored header `tap-windows.h` is additionally available under the
MIT license; it is included only as developer reference for the driver's
IOCTL constants and is not compiled into Rocket LAN.

### Signing

`tap0901.sys` and `tap0901.cat` are signed by Microsoft through the
Windows Hardware Compatibility Program. Because the driver is WHQL-signed,
Rocket LAN does **not** need its own kernel-driver signing certificate or
a WHQL submission.

---

## Steamworks SDK — Valve's Steam integration library

Rocket LAN integrates with Steam (friends list, identities, invites, rich
presence, ownership checks) through Valve's **Steamworks SDK**. It links
the `steamworks` and `steamworks-sys` Rust crates, and the shipped
application bundles Valve's redistributable runtime library
**`steam_api64.dll`**.

- **Component:** Steamworks SDK (incl. `steam_api64.dll`)
- **Copyright:** © Valve Corporation. All rights reserved.
- **License:** Valve's **Steamworks SDK Access Agreement** — this is
  Valve's own proprietary SDK license. It is **not** an open-source
  license.

The Steamworks SDK is provided by Valve to Steamworks partners for the
purpose of integrating their applications with Steam. `steam_api64.dll`
is Valve's redistributable component and is shipped unmodified. The SDK
and its redistributable are used under, and remain governed by, the
Steamworks SDK Access Agreement:
<https://partner.steamgames.com/documentation/sdk_access_agreement>

The `steamworks` and `steamworks-sys` Rust crates are open-source Rust
*bindings* to the SDK (MIT licensed — see the in-app full notices); the
underlying Steamworks SDK itself remains under Valve's terms above.

---

## Bundled fonts — SIL Open Font License

Rocket LAN ships two typeface families as application assets. The font
files themselves are licensed under the **SIL Open Font License, Version
1.1 (OFL-1.1)**, which requires the copyright notice and license to be
reproduced with any redistribution of the Font Software:

- **Space Grotesk** — © 2020 The Space Grotesk Project Authors
  (<https://github.com/floriankarsten/space-grotesk>). Delivered via the
  npm package `@fontsource/space-grotesk`.
- **JetBrains Mono** — © 2020 The JetBrains Mono Project Authors
  (<https://github.com/JetBrains/JetBrainsMono>). Delivered via the npm
  package `@fontsource/jetbrains-mono`.

The full SIL Open Font License v1.1 text for both fonts is reproduced
verbatim in the in-app full notices screen, under the
`@fontsource/space-grotesk` and `@fontsource/jetbrains-mono` entries.

---

## Rocket LAN application

The Rocket LAN application itself is **proprietary** software, copyright
© 2026 Bryan J Miller. All rights reserved. See the project [Terms of
Use](./TERMS.md) for the license that governs your use of the application.

---

*If you spot an attribution that's missing or out of date, please open an
[issue](../../issues) — we'd rather hear about it than not.*

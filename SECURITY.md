# Security Policy

## Reporting a vulnerability

**Please do not report security vulnerabilities through public GitHub issues
or discussions.** Anything that could put Rocket LAN users at risk if known
publicly before a fix ships should come to us through a private channel
instead.

### Preferred: GitHub Security Advisories (private reporting)

Open a draft advisory using GitHub's built-in private vulnerability
reporting:

**[Report a vulnerability →](../../security/advisories/new)**

This is the fastest path. The report is visible only to the project
maintainer; we'll coordinate a fix and a disclosure timeline with you from
there.

### Email fallback

If GitHub Security Advisories isn't workable for you, email:

> **`brokenhypocrite@gmail.com`**

### What to include

The more of this you can hand us, the faster we can act:

- A description of the issue and the version of Rocket LAN it affects.
- Step-by-step instructions to reproduce it, ideally with a minimal setup.
- An assessment of the potential impact (who is at risk, what can the
  attacker do).
- Any proof-of-concept code, log excerpts, or screenshots that help.
- Whether you've already disclosed the issue to anyone else.

## Scope

We're particularly interested in reports involving:

- **Network and peer-to-peer**, anything that lets a remote peer execute
  code, read or modify files outside the session sandbox, or escalate from
  a connected peer to a fuller attack on the host.
- **The bundled tap-windows6 driver installation flow**, abuse of the
  one-time elevated install step.
- **Steam integration**, confused-deputy attacks via the rich-presence
  `connect` field, invite handling, or Steam ID spoofing.
- **Map sync**, path traversal or file-overwrite attacks via the
  custom-map bundle stream.
- **Local privilege escalation** during install, uninstall, or update.

Out of scope: bugs that require local administrator access to exploit;
reports against third-party services (Steam, the iroh relay network); and
reports against components clearly under upstream maintainers'
control (we'll forward those to the right project).

## Response timeline

We aim to:

- Acknowledge the report within **3 business days**.
- Provide an initial assessment within **7 business days**.
- Ship a fix or share a mitigation timeline within **30 days** for any
  confirmed high-severity issue.

We'll credit researchers in release notes if you'd like (and stay quiet if
you'd prefer that instead).

## Safe harbor

Good-faith security research on Rocket LAN is welcome. We won't pursue
legal action against you for reports that follow this policy. Please do
not access user data beyond what's strictly needed to demonstrate the
issue, and please don't disrupt the service for other users while testing.

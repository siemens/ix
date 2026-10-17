---
'@siemens/ix': major
---

Migrate card, action card, push card, card accordion, and blind to the shared `StatusVariant` API with boolean `outline`. Neutral chrome uses `variant="base"` (host classes `card-base` / `blind-base`). Cards and blind use a uniform frame plus a status `::before` strip via SDL `si-sys-*` tokens (card: top strip; blind: left strip). Cards also use `clickable` instead of `passive` (basic/push default non-clickable; action cards stay clickable when `clickable` is omitted). Omit `outline` for outline chrome; `outline="false"` for filled. See `BREAKING_CHANGES/v6.md` for migration.

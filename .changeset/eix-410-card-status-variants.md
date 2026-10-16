---
'@siemens/ix': major
---

Migrate card, action card, push card, card accordion, and blind to the shared `StatusVariant` API with boolean `outline`. Neutral chrome uses `variant="base"` (host classes `card-base` / `blind-base`). Cards use a filled status top color strip via SDL `si-sys-*` tokens and `clickable` instead of `passive` (basic/push default non-clickable; action cards stay clickable when `clickable` is omitted). Blind status uses a 4px left indicator on a neutral header; omit `outline` for outline chrome, `outline="false"` for filled. See `BREAKING_CHANGES/v6.md` for migration.

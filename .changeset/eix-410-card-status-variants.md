---
'@siemens/ix': major
---

Migrate card, action card, push card, and card accordion to the shared `StatusVariant` API: boolean `outline` (replacing layout variants), filled status top color strip via SDL `si-sys-*` tokens, and `clickable` instead of `passive`. Basic and push cards default to non-clickable; action cards remain clickable when `clickable` is omitted. Blind is unchanged (Figma not ready). See `BREAKING_CHANGES/v6.md` for migration.

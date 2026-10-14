---
'@siemens/ix': major
---

Migrate blind to the shared `StatusVariant` API and boolean `outline`. Status blinds use a 4px left indicator on a neutral surface instead of a status-colored header. Omitting `outline` selects outline chrome; set `outline="false"` for the previous filled surface. See `BREAKING_CHANGES/v6.md` for migration.

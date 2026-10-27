---
'@siemens/ix': major
---

Migrate **ix-toast** `type` and `toast.*` helpers to the shared status set. Rename `info` → `information` (default); add `danger`, `caution`, and `critical`. `warning` now denotes the new warning status (previous yellow meaning moves to `caution`). `error` stays next to `danger`. Status icons use `border/*` colors. See `BREAKING_CHANGES/v6.md`.

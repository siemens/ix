---
'@siemens/ix': major
---

Migrate **ix-progress-indicator** `status` to the shared status subset. Rename `default` → `base` (new default) and `info` → `information`; keep `success`, `error`, `warning`, and `paused`. Helper status icons use `border/*` colors and are decorative. See `BREAKING_CHANGES/v6.md`.

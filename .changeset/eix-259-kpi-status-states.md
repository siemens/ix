---
'@siemens/ix': major
---

Migrate **ix-kpi** `state` to the shared status set. Rename `alarm` → `danger`; add `success`, `information`, `accent`, and `critical`. The previous `warning` meaning moves to `caution`, and `warning` now denotes the new warning status. Icon-bearing states show a decorative status icon (`aria-hidden`); `ariaLabelAlarmIcon` and `ariaLabelWarningIcon` are removed. The neutral indicator line now uses a system token. See `BREAKING_CHANGES/v6.md`.

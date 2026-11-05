---
'@siemens/ix': major
---

Migrate **ix-flip-tile** `variant` to the shared status set. Rename `alarm` → `danger`, `info` → `information`, and `primary` → `accent`; add `neutral`, `success`, `caution`, and `critical`. The previous `warning` meaning moves to `caution`, and `warning` now denotes the new warning status. `outline`, `filled`, and the `filled` default are unchanged. See `BREAKING_CHANGES/v6.md`.

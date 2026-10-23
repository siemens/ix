---
'@siemens/ix': major
---

Migrate **ix-toast** `type` and the **message modal** (`showMessage`) to the shared status set. Rename `info` → `information` (toast default, `toast.information`, `showMessage.information`); add `danger`, `caution`, and `critical`. `error` stays next to `danger`, and `showMessage.question` is unchanged. The previous `warning` meaning moves to `caution`, and `warning` now denotes the new warning status. See `BREAKING_CHANGES/v6.md`.

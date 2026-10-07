---
'@siemens/ix': major
---

New `requireConfirmation` property for `ix-date-dropdown`, `ix-date-input`, `ix-datetime-input`, `ix-date-picker` and `ix-datetime-picker` - when `true` a selection is only applied on **Confirm**, with **Cancel** to discard it. 

`ix-time-picker` and `ix-time-input` always require confirmation (as they did before).

There is some minor new behavior when `requireConfirmation` is `false` (default).

See `BREAKING_CHANGES/v6.md` for details and migration.

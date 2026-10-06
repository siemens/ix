---
'@siemens/ix': major
---

Align how the date and time components apply a selection, depending on `requireConfirmation`.

- `ix-time-picker` and `ix-time-input` now require confirmation by default (`requireConfirmation` defaults to `true`). The picker shows **Cancel** and **Confirm**, and `timeChange` is emitted only on Confirm. Set `require-confirmation="false"` to apply every picked time immediately. The picker then shows a **Done** button with the label from the new `i18nDone` property.
- `ix-date-dropdown` without `requireConfirmation` no longer shows a **Done** button. The dropdown closes once a complete date or range, or a predefined range, is picked. Closing it while only a start date is picked reverts to the range from when it was opened. `i18nDone` is deprecated.
- `ix-date-dropdown` shows a trailing ` - ` after the start date in range mode while no end date is set, so users know to pick one.
- `ix-datetime-input` without `requireConfirmation` updates its value for every date or time picked, and stays open until **Done** is clicked.
- The **Done** button of `ix-date-picker`, `ix-time-picker` and `ix-datetime-picker` is disabled until something different is picked, and while a range has only a start date.

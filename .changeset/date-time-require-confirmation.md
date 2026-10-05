---
'@siemens/ix': minor
---

Add an opt-in `requireConfirmation` property to `ix-date-dropdown`, `ix-date-input`, `ix-time-input`, `ix-datetime-input`, `ix-date-picker`, `ix-time-picker` and `ix-datetime-picker`.

When `requireConfirmation` is enabled, a selection is applied only when the user clicks **Confirm**. Until then the trigger label and input value stay unchanged and no change events are emitted. **Cancel**, pressing <kbd>Escape</kbd> or clicking outside the dropdown discards the pending selection, and reopening the dropdown shows the last confirmed value. The default is `false`, which keeps the existing behavior.

- New `i18nConfirm` and `i18nCancel` properties set the button labels in confirmation mode. `ix-time-input` keeps using `i18nSelectTime` for its confirm label.
- New `dateCancel` event on `ix-date-picker` and `ix-datetime-picker`, and `timeCancel` event on `ix-time-picker`, emitted when the user clicks Cancel.
- New `dateSelect` event on `ix-date-dropdown`, emitted when the user selects a date range. With `requireConfirmation` it is emitted only on Confirm. Without it, it is emitted for every picked date or predefined range and when the dropdown closes. It is not emitted for programmatic changes.
- `ix-datetime-input`: the default of `i18nDone` changes from `'Confirm'` to `'Done'`, aligning it with the other date and time components. Set `i18n-done="Confirm"` to keep the previous label.
- New exported `DateRangeValue` type (`from`, `to`, `isoFrom`, `isoTo`). `DateChangeEvent`, `DateRangeChangeEvent`, `DateTimeSelectEvent` and `DateDropdownOption` are now based on it; their shapes are unchanged.

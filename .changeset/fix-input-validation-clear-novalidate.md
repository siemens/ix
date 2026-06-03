---
'@siemens/ix': minor
---

Added `clear()` method to `ix-date-input` to reset the value and all validation state to its initial pristine condition. Unlike setting the `value` property directly, `clear()` removes visible error indicators even after the field has been touched.

Added `reportValidity()` method to `ix-date-input` to programmatically trigger validation and show visual error state immediately — equivalent to calling `reportValidity()` on a native `<input>` element.

Added `i18nErrorRequired` prop (`i18n-error-required`, default `"This field is required"`) to `ix-date-input`. When a required field is emptied after `reportValidity()` has surfaced an error, the error text now switches from "Date is not valid" to the required-missing message instead of disappearing — keeping both the red border and the text description visible.

Fixed validation behavior for `ix-date-input`:

- Emptying a required field (via keyboard or programmatically) now correctly shows `ix-invalid--required` and a required-missing error message after the field has been touched
- After `reportValidity()` surfaces an error, setting a valid value programmatically now correctly clears all error state (red border and message) — previously the field stayed red despite holding a valid date
- Clicking a calendar day while the calendar is open no longer causes a momentary red-border flash on the input
- `novalidate` forms now fully suppress visual validation feedback (red border and error messages); date parsing continues internally to keep the calendar picker state consistent
- Dynamically toggling the `required` attribute now immediately reflects the correct validation state

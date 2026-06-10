---
'@siemens/ix': minor
---

Added `clear()` method to reset the value and all validation state to its initial state, removing visual error indicators even after the field has been touched.

Added `reportValidity()` method to programmatically trigger validation and show visual error state immediately.

Added `i18nErrorRequired` prop (`i18n-error-required`) to show required-missing error message when a required field is emptied after validation has been triggered.

Validation behavior: Values are always validated internally regardless of source. Visual validation errors only appear after the field has been touched (after first blur).

Fixed validation behavior for `ix-date-input`:

- Non-required field now correctly validates as valid when the value is removed (both keyboard deletion and programmatic empty string)
- `novalidate` forms now fully suppress visual validation feedback while maintaining internal date parsing

Additionally covered:

- Dynamically toggling the `required` attribute now immediately reflects correct validation state
- Removed momentary red-border flash when clicking a calendar day
- Picker automatically opens when focusing the date-input via keyboard navigation (Tab key)
- Keyboard navigation within the calendar (e.g., `PageUp`/`PageDown` for months) does not trigger validation errors


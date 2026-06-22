---
'@siemens/ix': minor
---

Added `clear()` method to reset value and validation state, removing all visual error indicators even after the field has been touched.

Added `reportValidity()` method to programmatically trigger validation and show visual error state immediately.

Added `i18nErrorRequired` prop (`i18n-error-required`) to customize the required-field error message.

Fixed validation behavior for `ix-date-input`:

- Non-required field is now valid when the value is removed (keyboard deletion or programmatic empty string).
- Required field shows required-missing error only when empty and touched, or after `reportValidity()`.
- Visual validation errors only appear after first blur; programmatic value changes are validated internally without visual feedback until interaction.
- `novalidate` forms suppress all visual validation while `reportValidity()` overrides this suppression.
- Dynamically toggling the `required` attribute immediately reflects correct validation state.
- Picker auto-opens when navigating to the date-input via keyboard (Tab key).
- Clicking and holding calendar dates does not trigger validation errors on required empty fields; removed momentary red-border flash when selecting a calendar date


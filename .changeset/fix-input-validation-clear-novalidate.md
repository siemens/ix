---
'@siemens/ix': minor
---

Added `clear()` method to `ix-date-input` to reset the value and validation state to pristine.

Fixed validation behavior:
- Required fields set to empty programmatically now correctly show as invalid
- `novalidate` forms no longer show validation errors on blur or invalid input
- Calling `clear()` removes all validation errors even after the field has been touched

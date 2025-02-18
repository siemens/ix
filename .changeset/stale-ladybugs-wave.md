---
'@siemens/ix': patch
---

Prevent input elements like (`ix-input`, `ix-number-input`, `ix-date-input`, `ix-select`, `ix-textarea`) to show `required` validation error without any user interaction.

If the class `ix-invalid` is applied programmatically an error message is still shown even without a user interaction.

Fixes #1638, #1680

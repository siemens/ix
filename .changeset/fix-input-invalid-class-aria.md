---
'@siemens/ix': patch
---

Expose custom validation (`ix-invalid` class) of `ix-input` and `ix-textarea` to assistive technology: `aria-errormessage` now only references the id of the error message element instead of containing the error text, `ix-textarea` links its error message like `ix-input`, and the ARIA attributes follow when `ix-invalid` is added or removed without user interaction.

Fixes #2863

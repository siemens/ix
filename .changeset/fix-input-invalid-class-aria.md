---
'@siemens/ix': patch
---

Expose custom validation (`ix-invalid` class) of `ix-input` and `ix-textarea` to assistive technology: the native control keeps `aria-invalid="true"`, and `aria-errormessage` now references the id of the error message element instead of containing the error text.

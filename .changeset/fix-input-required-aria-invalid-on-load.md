---
'@siemens/ix': patch
---

Stop marking an untouched, empty required `ix-input` as invalid for assistive technology on load: the native control gets `aria-invalid` and `aria-errormessage` only once the field is touched, together with the visible error.

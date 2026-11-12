---
'@siemens/ix-angular': minor
---

Expose `clear()` on input, number-input, textarea, and date-input, and `getValidityState()` on number-input and textarea in both NgModule and standalone components.

Calling `clear()` also marks the bound Angular form control as untouched. Required validation feedback stays hidden until the field is touched again, without removing validators or resetting dirty state.

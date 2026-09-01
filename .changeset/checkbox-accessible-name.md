---
'@siemens/ix': patch
---

Fix `ix-checkbox` so the host exposes the checkbox name and ARIA state directly while the internal label wrapper stays hidden from assistive technology. Screen readers now announce the control as a checkbox, preserve `aria-checked="mixed"` for indeterminate state, and expose `aria-required` when needed.

Fixes IX-4455

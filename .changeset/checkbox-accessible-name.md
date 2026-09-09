---
'@siemens/ix': patch
---

Fix `ix-checkbox` so the host exposes the checkbox name and ARIA state directly while the internal label wrapper stays hidden from assistive technology. Screen readers now announce the control as a checkbox, preserve `aria-checked="mixed"` for indeterminate state, and expose `aria-required` when needed.

Additionally, holding down Space or Enter no longer repeatedly toggles the checked state, and a real pointer click is no longer ignored after a keyboard activation whose `keyup` was missed (e.g. focus moved mid-press).

Fixes IX-4455

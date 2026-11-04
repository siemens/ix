---
'@siemens/ix': patch
---

`showModal` and `showMessage` now only apply known modal properties from the configuration object (`size`, `centered`, `closeOnBackdropClick`, `beforeDismiss`, `isNonBlocking`, `disableAnimation`, `hideBackdrop`, and for message headers `icon`, `iconColor`, `hideClose`, `ariaLabelIcon`, `ariaLabelCloseIconButton`). Unknown keys such as `innerHTML` are ignored and can no longer inject markup into the modal.

The documented `animation` and `backdrop` options now take effect (`animation: false` disables the animation and `backdrop: false` hides the backdrop), and the passed configuration object is no longer mutated.

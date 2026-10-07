---
'@siemens/ix': patch
---

Remove the `animejs` and `animate.css` dependencies. Component animations now use the native Web Animations API and CSS keyframes, so consumers of the Stencil collection no longer need to install `animejs`.

This also restores animations that did not run as intended: `ix-modal` now waits for its close animation before closing the dialog and emitting events, and `ix-toast` and `ix-category-filter` tokens now fade in and out as intended.

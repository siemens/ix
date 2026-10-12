---
'@siemens/ix': patch
---

Remove the `animejs` and `animate.css` dependencies. Component animations now use the native Web Animations API and CSS keyframes, so consumers of the Stencil collection no longer need to install `animejs`.

This also restores animations that did not run as intended: `ix-modal` now waits for its close animation before closing the dialog and emitting events, and `ix-toast` now fades in and out and is removed only after its fade-out animation ended.

Animations started by components now respect `prefers-reduced-motion`. The decorative `ix-toast` icon is now hidden from assistive technologies.

---
'@siemens/ix': patch
---

**ix-breadcrumb-item:** Remove the slide-in (`translateX` + opacity) enter animation, and propagate `aria-label` (and other host-level ARIA attributes) to the inner button via `InheritAriaAttributesMixin` so the accessible name is always set correctly.

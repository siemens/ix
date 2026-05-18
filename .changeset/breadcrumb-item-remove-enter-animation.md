---
'@siemens/ix': patch
---

**ix-breadcrumb-item:** Remove the slide-in (`translateX` + opacity) enter animation. The aria-label is now assigned directly in `componentDidLoad` instead of in the animation's `onComplete` callback.

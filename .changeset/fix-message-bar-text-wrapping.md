---
'@siemens/ix': patch
---

fix(message-bar): remove text truncation and fix action button alignment for examples

- Remove text-truncation ellipsis mixin to allow text wrapping
- Fix CSS class name from .message-bar-danger to .message-bar-alarm
- Action buttons are now correctly right-aligned with justify-content: space-between

Fixes #2258

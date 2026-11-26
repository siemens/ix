---
'@siemens/ix': minor
---

Add press and hold to the `ix-number-input` stepper buttons. Holding the increment or decrement button keeps stepping the value after a short delay and speeds up the longer it is held. It works for mouse, pen and touch, and stops on release, when the pointer leaves the button, or when `min`/`max` is reached.

Fixes #2593

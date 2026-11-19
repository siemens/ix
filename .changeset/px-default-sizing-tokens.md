---
'@siemens/ix': major
---

Size and spacing tokens (`--si-sys-sizing-size-*`, `--si-sys-sizing-spacing-*`) now resolve to `px` instead of `rem`, so component dimensions no longer scale with the root font size. Add `data-ix-sizing="rem"` to an element to switch these tokens back to `rem` for the element and its descendants; nested density scopes inside it keep `rem` sizing. Every token also has a `--si-sys-sizing-rem-*` twin. Icon and avatar tokens are unchanged and still use `rem`.

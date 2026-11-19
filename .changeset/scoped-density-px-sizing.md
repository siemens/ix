---
'@siemens/ix': minor
---

Set `data-ix-density` on any element, not only on the themed root. Density scopes can be nested, and the closest `data-ix-density` ancestor wins.

Add `data-ix-sizing="px"` to switch size, spacing, icon, and avatar tokens from `rem` to `px` values for an element and its descendants. Nested density scopes inside a `px` scope keep `px` sizing.

---
'@siemens/ix': patch
---

Let rem-based icons and text define the size of their containers instead of clipping them when the root font size differs from 16px. This affects `ix-menu`, `ix-menu-item`, `ix-menu-category`, `ix-application`, `ix-card-accordion`, `ix-list-item` (drag gripper), `ix-category-filter` and `ix-date-picker`. Rendering at the default 16px root font size is unchanged.

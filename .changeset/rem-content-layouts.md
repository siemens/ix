---
'@siemens/ix': patch
---

Let rem-based icons and text define the size of their containers instead of clipping them when the root font size differs from 16px. This affects `ix-menu`, `ix-menu-item`, `ix-menu-category`, `ix-application`, `ix-card-accordion`, `ix-list-item` (drag gripper), `ix-category-filter`, `ix-date-picker` (weekday columns), `ix-button` and the button family, `ix-pill`, `ix-filter-chip`, `ix-badge`, `ix-tab-item` (counter), `ix-kpi`, `ix-group`, `ix-action-card`, `ix-push-card`, `ix-card-list` (show-all card), `ix-workflow-step` and `ix-avatar` (image and initials now use the rem avatar size token, except inside `ix-application-header`, where the avatar keeps its fixed px size so the header height stays constant). The expand/collapse icon of `ix-menu` and `ix-application-header` now scales with the root font size like the menu item icons, and its button grows with it. Rendering at the default 16px root font size is unchanged.

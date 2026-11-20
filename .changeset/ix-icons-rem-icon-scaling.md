---
'@siemens/ix': patch
'@siemens/ix-angular': patch
'@siemens/ix-react': patch
'@siemens/ix-vue': patch
---

Update `@siemens/ix-icons` to `0.0.0-beta-20261120131425`. `ix-icon` sizes now use the rem icon tokens, so icons scale with the root font size (for example the icon inside `ix-button`). Containers that hold an icon now grow with it instead of clipping it when the root font size is larger than 16px: `ix-icon-button`, `ix-icon-toggle-button`, `ix-chip` (including the close button), the `ix-tree-item` expand toggle, `ix-dropdown-button`, `ix-split-button`, `ix-expanding-search`, `ix-group-context-menu` and the `ix-card-list` title. Rendering at the default 16px root font size is unchanged.

---
'@siemens/ix': patch
'@siemens/ix-angular': patch
'@siemens/ix-react': patch
'@siemens/ix-vue': patch
---

Update `@siemens/ix-icons` to `0.0.0-beta-20261120131425`. `ix-icon` sizes now use the rem icon tokens, so icons scale with the root font size (for example the icon inside `ix-button`). Containers that hold an icon now grow with it instead of clipping it when the root font size is larger than 16px: `ix-icon-button`, `ix-icon-toggle-button`, `ix-chip` (including the close button), the `ix-tree-item` expand toggle, `ix-dropdown-button`, `ix-split-button`, `ix-expanding-search`, `ix-group-context-menu` and the `ix-card-list` title. Rendering at the default 16px root font size is unchanged.

The collapsed bar of `ix-pane` (and the mobile minimum height inside `ix-pane-layout`) is now built from spacing tokens and the icon-button size instead of fixed 40px/48px values, so it grows with its content at larger root font sizes. In compact density the collapsed bar becomes correspondingly smaller.

The `ix-menu-about` header now grows with its heading instead of using a fixed height, so the heading no longer overlaps the tabs at larger root font sizes. The `ix-menu-about-news` banner, header offset and popover position now follow the banner icon and the menu rail width, so the popover no longer overlaps the menu or its own content.

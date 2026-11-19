---
'@siemens/ix': major
'@siemens/ix-aggrid': patch
---

Component styles, global styles, and the AG Grid theme now use `px` instead of `rem`. Input slot padding, badge anchor offsets, the menu about popover position, and tree indentation are also set in `px`. At the default 16px root font size the rendered output is unchanged, but these dimensions no longer scale with the root font size.

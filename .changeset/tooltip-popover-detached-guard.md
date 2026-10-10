---
'@siemens/ix': patch
---

Fix `ix-tooltip` to skip `showPopover()` / `hidePopover()` when the dialog is detached, the host is gone, or those methods are missing. Fixes #2559

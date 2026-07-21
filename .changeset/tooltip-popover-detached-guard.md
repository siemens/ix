---
'@siemens/ix': patch
---

Fix `ix-tooltip` to guard `showPopover()` / `hidePopover()` calls against a detached dialog, avoiding errors when the tooltip is disconnected before the deferred callback runs. Fixes #2559

---
'@siemens/ix-angular': patch
---

Fix modal closing race condition where `close()` or `dismiss()` called before modal element initialization would silently fail. Pending actions are now queued and executed once the modal element is set.

Fixes #2595

---
'@siemens/ix': patch
---

Prevent outdated asynchronous dropdown triggers from attaching listeners or changing submenu state after the trigger changes or the dropdown is disconnected. Clean up trigger listeners on disconnect and restore them on reconnect.

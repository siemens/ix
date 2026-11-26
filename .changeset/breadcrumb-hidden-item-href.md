---
'@siemens/ix': patch
---

Follow the `href` of breadcrumb items that are hidden in the previous-items dropdown, respecting `target` and `rel`, after emitting `itemClick`. Like a visible item's link, <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>-click, <kbd>Shift</kbd>-click and middle-click open the `href` in another browsing context.

Fixes #2857

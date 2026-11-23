---
'@siemens/ix': patch
---

Fix **ix-menu-category** so it keeps following the active state of its nested **ix-menu-item**s after it is moved in the DOM, instead of keeping a stale active mark.

Fixes #3021

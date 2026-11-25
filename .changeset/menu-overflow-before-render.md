---
'@siemens/ix': patch
---

`ix-menu` no longer throws an uncaught error when a window resize arrives before the menu is rendered. The overflow indicator update is now skipped until the menu items container exists.

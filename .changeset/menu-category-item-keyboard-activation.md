---
'@siemens/ix': patch
---

Pressing <kbd>Enter</kbd> or <kbd>Space</kbd> on an `ix-menu-item` inside an `ix-menu-category` now activates the item the same way a mouse click does. Its `click` handlers, `href` navigation, and router links (for example Angular `routerLink`) now run. In the collapsed menu, the category dropdown closes and focus returns to the category.

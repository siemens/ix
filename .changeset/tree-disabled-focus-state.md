---
'@siemens/ix': patch
---

Expose the accessible disabled state on treeitems and keep disabled items reachable
with arrow-key navigation while preserving a single tree Tab stop. Disabled items
remain non-selectable and cannot be expanded or collapsed.
Prevent Space from scrolling when a disabled treeitem is focused.

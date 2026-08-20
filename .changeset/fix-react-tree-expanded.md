---
'@siemens/ix-react': major
---

Correct the `onNodeToggled` event payload type by renaming `isExpaned` to `isExpanded`.

Update event handlers to access `event.detail.isExpanded` instead of
`event.detail.isExpaned`.

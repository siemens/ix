---
"@siemens/ix": patch
---

fix(core/tree-item): improve keyboard accessibility for tree item interactions

Tree item chevron and node container are now properly activatable via Enter and
Space keys. Focus is preserved across tree refreshes. Added `aria-expanded` and
`aria-disabled` attributes to interactive controls for correct screen-reader
announcement.

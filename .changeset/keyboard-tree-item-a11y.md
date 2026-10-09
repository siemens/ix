---
"@siemens/ix": patch
---

fix(core/tree-item): improve keyboard accessibility for tree item interactions

Tree item chevron and node container are now properly activatable via Enter and
Space keys. Focus is preserved across tree refreshes. The expand/collapse icon
uses a size-neutral control with button semantics, `aria-expanded`, and disabled
state for correct screen-reader announcement without increasing the icon's size.

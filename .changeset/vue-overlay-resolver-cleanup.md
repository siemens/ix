---
'@siemens/ix-vue': patch
---

Release the internal portal resolver for Vue-rendered overlays once the view is attached or removed, so repeatedly opening modals no longer accumulates memory.

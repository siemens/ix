---
'@siemens/ix': patch
---

Fix `ix-pane` staying in mobile mode after the window is maximized when a pane is created while the layout is held at desktop (for example a pinned `ix-menu`, or `ix-application` with `forceBreakpoint`). Nested panes now follow that application layout. Standalone panes still follow the viewport.

Fixes #2849

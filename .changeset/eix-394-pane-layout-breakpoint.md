---
'@siemens/ix': patch
---

Fix `ix-pane` staying in mobile mode after the window is maximized when a nested pane is created while the application layout is held at desktop. Nested panes now follow `ix-application` layout (`forceBreakpoint` when set). Standalone panes still follow the viewport.

Fixes #2849

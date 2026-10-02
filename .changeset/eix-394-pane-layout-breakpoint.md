---
'@siemens/ix': patch
---

Keep pane mobile/desktop mode aligned with layout controls: a pinned menu no longer freezes shared breakpoint updates for panes, and panes under `ix-application` with `forceBreakpoint` follow that forced layout instead of only the raw viewport. Standalone panes still follow the viewport.

Fixes #2849

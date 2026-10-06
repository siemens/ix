---
'@siemens/ix': patch
---

Keep pane mobile/desktop mode aligned with the application layout: nested panes follow `ix-application` `forceBreakpoint` and the shared layout breakpoint, so a pinned menu (desktop layout) no longer leaves a newly mounted pane stuck in mobile mode. Standalone panes still follow the viewport.

Fixes #2849

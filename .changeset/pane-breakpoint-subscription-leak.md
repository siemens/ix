---
'@siemens/ix': patch
---

Dispose the breakpoint subscription of **ix-pane**, **ix-pane-layout** and **ix-menu** and the application layout context subscription of **ix-menu** when they are removed, so removed elements and their content can be garbage collected. A reattached **ix-pane**, **ix-pane-layout** or **ix-menu** follows breakpoint, slot, size, pane and theme changes again.

Fixes #2904

---
'@siemens/ix': patch
---

Dispose the breakpoint subscription of **ix-pane**, **ix-pane-layout** and **ix-menu** when they are removed, so removed elements and their content can be garbage collected.

Fixes #2904

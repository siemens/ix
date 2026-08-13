---
'@siemens/ix': patch
---

Fix internal form validation so a missing or unmounted native input (e.g. `ix-select` during connect/teardown) no longer causes an unhandled `Input element not found` promise rejection. Fixes #2669

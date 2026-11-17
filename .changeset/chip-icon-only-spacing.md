---
'@siemens/ix': patch
---

Fix `ix-chip` so an icon-only chip no longer keeps the gap reserved for a label, and so server rendering does not throw while detecting that label. Fixes #2996

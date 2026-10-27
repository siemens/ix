---
'@siemens/ix': patch
---

Fix `ix-upload` ignoring files dropped from sources that only allow copying, such as Chrome's Downloads panel. The drop zone now requests a copy instead of a move, so the drop is accepted and `filesChanged` is emitted.

Fixes #2923

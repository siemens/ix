---
'@siemens/ix': patch
---

Fix `ix-upload` ignoring files dropped from sources that only allow copying, such as Chrome's Downloads panel. The drop zone now requests a copy, or a move when the source allows only moving, so the drop is accepted and `filesChanged` is emitted. A single file that is dragged together with text data is no longer rejected when `multiple` is not set.

Fixes #2923

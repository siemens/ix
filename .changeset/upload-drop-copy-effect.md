---
'@siemens/ix': patch
---

Fix `ix-upload` not emitting `filesChanged` when a file is dropped from a source that only allows copying, such as Chrome's Downloads panel. A single file dragged together with text data is also no longer rejected when `multiple` is not set. Dragging text or links without files onto the drop zone no longer emits `filesChanged` with an empty list.

Fixes #2923

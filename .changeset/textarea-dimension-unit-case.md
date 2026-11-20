---
'@siemens/ix': patch
---

**ix-textarea**: Accept `textareaHeight` and `textareaWidth` units in any case (e.g. `200PX`, `10REM`). Such values were ignored before, so the textarea fell back to its default size.

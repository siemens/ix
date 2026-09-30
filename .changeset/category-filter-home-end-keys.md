---
'@siemens/ix': patch
---

Fix `ix-category-filter` so <kbd>Home</kbd> and <kbd>End</kbd> no longer open the dropdown or move focus out of the input, preserving native caret movement and text selection with <kbd>Shift</kbd>.

Fixes #2844

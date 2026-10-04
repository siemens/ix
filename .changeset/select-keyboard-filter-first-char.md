---
'@siemens/ix': patch
---

Fix **ix-select** dropping the first typed character when the select has a value and receives focus via keyboard (e.g. <kbd>Tab</kbd>) before filtering.

Fixes #2845

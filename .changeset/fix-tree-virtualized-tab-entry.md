---
'@siemens/ix': patch
---

Fix keyboard entry into trees to focus the selected item, or the first item when none is selected, as described by the WAI-ARIA tree-view pattern. Tab and Shift+Tab render and scroll to the entry item when it is outside the virtualized range, without changing selection.

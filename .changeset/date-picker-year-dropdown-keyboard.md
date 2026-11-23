---
'@siemens/ix': patch
---

Fix `ix-date-picker` year dropdown keyboard navigation: pressing <kbd>ArrowDown</kbd> on the last year (or <kbd>ArrowUp</kbd> on the first) now extends the year list and moves to the adjacent year instead of jumping to the other end of the list. 

While the new years render, the year list is marked busy and further key presses or clicks in it are ignored, so they cannot act on the previously active year.

---
'@siemens/ix': patch
---

Fix the month dropdown in `ix-date-picker` (and the `ix-date-input`, `ix-date-dropdown` and `ix-datetime-picker` components that embed it) disabling the wrong months when `minDate` / `maxDate` are set. Months were matched off by one, and a range spanning a year boundary constrained the months of the wrong year.

Fixes #2780

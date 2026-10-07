---
'@siemens/ix': patch
---

Fix the day grid in `ix-date-picker` (and the `ix-date-input`, `ix-date-dropdown` and `ix-datetime-picker` components that embed it) rendering in the wrong columns when `weekStartIndex` is set to a non-zero value.

Also fix the weekday headers not being rebuilt when `weekStartIndex` changes after the component has rendered, which left the header labels in the previous order while the day cells moved to their new columns.


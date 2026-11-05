---
'@siemens/ix': patch
---

Fix `ix-date-input` ignoring its `weekStartIndex` prop. The value was never forwarded to the nested `ix-date-picker`, so the calendar always started the week on Monday. `ix-date-dropdown` and `ix-datetime-picker` already forwarded it correctly.

Note for consumers who already set `weekStartIndex` on `ix-date-input`: the prop previously had no effect, and now takes effect, so the first day of the week in the dropdown calendar may change. The index is a 0-based index into Luxon's `Info.weekdays()` array, which is always Monday-first regardless of locale (0 is Monday, 6 is Sunday).

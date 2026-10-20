---
'@siemens/ix': minor
---

Add a `displayFormat` property to `ix-date-input`, `ix-datetime-input` and `ix-date-dropdown` to show dates in a different format than the value is stored in.  

`value`, `from`, `to`, `minDate`, `maxDate` and emitted values keep using `format`, so e.g. `format="yyyy/LL/dd"` with `displayFormat="yy/LL/dd"` displays a two-digit year without changing the century of the value. When a date is typed, parts missing in `displayFormat` (e.g. the century of a two-digit year or seconds) are kept from the current value.  

`displayFormat` defaults to `format`.

Fixes #2908

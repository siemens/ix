---
"@siemens/ix": major
---

All IX date and time components now apply the `locale` prop when formatting event values and displaying labels (e.g. month names).

**Breaking change:** The `from` and `to` fields on `DateChangeEvent` (emitted by `ix-date-picker`, `ix-date-dropdown`) and `from`, `to`, and `time` on `DateTimeSelectEvent` (emitted by `ix-datetime-picker`) were previously always formatted using the `en-US` locale, regardless of the `locale` prop. They now reflect the locale set on the component.

If your code reads these fields and expects locale-neutral strings, migrate to the new `isoFrom`, `isoTo`, and `isoTime` fields, which always contain ISO 8601 values independent of locale.

Please see our migration guide for more details on specific fields added/changed, and how to ensure the `format` string supports locale-specific strings.

Fixes #2414

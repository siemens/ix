---
"@siemens/ix": major
---

All IX date and time components now apply the `locale` prop when formatting event values and displaying labels (e.g. month names).

**Breaking change:** The `from` and `to` fields on `DateChangeEvent` (emitted by `ix-date-picker`, `ix-date-dropdown`) and `from`, `to`, and `time` on `DateTimeSelectEvent` (emitted by `ix-datetime-picker`) were previously always formatted using the `en-US` locale, regardless of the `locale` prop. They now reflect the locale set on the component.

If your code reads these fields and expects locale-neutral strings, migrate to the new `isoFrom`, `isoTo`, and `isoTime` fields, which always contain ISO 8601 values independent of locale.

**New fields added to event types:**
- `DateChangeEvent`: `isoFrom?: string`, `isoTo?: string`
- `DateRangeChangeEvent`: `isoFrom?: string`, `isoTo?: string`
- `DateTimeSelectEvent`: `isoFrom?: string`, `isoTo?: string`, `isoTime?: string`

 **New props:**
 - `ix-time-picker` and `ix-time-input`: `locale`, `i18nAm`, and `i18nPm` 
 - `ix-datetime-picker`: `i18nAm`, `i18nPm`, `i18nHourColumnHeader`, `i18nMinuteColumnHeader`, `i18nSecondColumnHeader`, and `i18nMillisecondColumnHeader`

 **New methods:**
 - `ix-time-picker`: `getCurrentIsoTime(): Promise<string | undefined>` — returns the current time as an ISO 8601 string, independent of the `locale` prop

**Updated `ix-date-input` locale behavior:**
The `locale` prop now explicitly affects input parsing and the values emitted via `valueChange`. Previous documentation incorrectly stated that locale does not affect returned values.

Fixes #2414

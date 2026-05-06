---
'@siemens/ix': minor
---

Extend time bounds to **`ix-time-input`** and **`ix-datetime-picker`** with optional **`minTime`** / **`maxTime`** (same string shape as each component’s time format tokens). For **`ix-datetime-picker`**, validation and UI stay aligned: with **`minDate`** / **`maxDate`**, **`minTime`** applies on the minimum day, **`maxTime`** on the maximum day, and days in between are not time-clamped by those props; with no date bounds, **`minTime`** / **`maxTime`** act as a daily time window.

**`ix-time-picker`:** constraint checks use the full span of each hour, minute, and second candidate so disabled states match inclusive bounds (for example, an hour remains selectable when **`minTime`** falls mid-hour).

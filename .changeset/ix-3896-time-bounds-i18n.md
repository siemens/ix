---
'@siemens/ix': major
'@siemens/ix-angular': major
'@siemens/ix-react': major
'@siemens/ix-vue': major
---

**`ix-time-picker`:** optional **`minTime`** and **`maxTime`** constrain selectable values (same string shape as **`format`** / **`time`**). Values outside the inclusive range are disabled in the picker rings.

**Breaking (v5):** the hour column header **attribute** is renamed from **`i18n-column-header`** to **`i18n-hour-column-header`**. The **`i18nHourColumnHeader`** property is unchanged—update static HTML or attribute-based markup. Migration: **`BREAKING_CHANGES/v5.md`**.

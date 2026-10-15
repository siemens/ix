---
'@siemens/ix': patch
---

Fix `ix-date-picker` weekday column headers so they use the locale's own abbreviated weekday names instead of cutting the full name after three characters, which was wrong or unreadable in many languages (for example Chinese). Locales whose abbreviations are too long for a column (for example Arabic) use the narrow names. Each header now exposes the full weekday name as its accessible name.

Fixes #2591

---
'@siemens/ix': patch
---

Fix `invalidText` property not being applied to **ix-date-input** and **ix-time-input** when internal validation fails.

The `invalidText` property now correctly takes precedence over the i18n error messages when both are set. Previously, the i18n message would always be shown for internal validation errors (unparsable dates/times or min/max violations), ignoring the user's custom `invalidText`.

Fixes #2183.

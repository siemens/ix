---
'@siemens/ix': patch
---

Discard pending custom date ranges when `ix-date-dropdown` is dismissed, and emit a confirmed range only once when Done is clicked. Explicit preset selections and programmatic range updates remain applied.

Fixes #2772.

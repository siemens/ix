---
'@siemens/ix': patch
---

Fix `ix-datetime-input` splitting its `format` into date and time parts when a quoted literal contains time token letters (for example `dd.MM.yyyy 'um' HH:mm` or `LL/dd/yyyy 'at' hh:mm a`). Previously the literal was cut in half, so selecting a value in the picker could commit a wrong hour.

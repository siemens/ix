---
"@siemens/ix": patch
---

Move `aria-*` attributes set on `ix-input`, `ix-number-input` and `ix-textarea` to the native control, so screen readers announce the accessible name and required state. `role`, `aria-hidden` and ID-reference attributes such as `aria-labelledby` and `aria-describedby` stay on the host. Fixes #2913

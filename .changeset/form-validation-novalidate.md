---
'@siemens/ix': major
---

Form components inside a `<form novalidate>` no longer show any built-in validation feedback, so your own validation fully controls the invalid state:

- **ix-input**, **ix-number-input**, **ix-textarea**, **ix-date-input**, **ix-time-input** and **ix-datetime-input** no longer apply invalid styling after a value change.
- **ix-date-input**, **ix-time-input** and **ix-datetime-input** no longer show their "not valid" message for unparseable input. `validityStateChange` is still emitted (`patternMismatch` for date and time inputs, `typeMismatch` for datetime input), so you can set `ix-invalid` and `invalid-text` yourself.

**Breaking change (/bugfix):** apps that relied on built-in error feedback inside `novalidate` forms must now set it themselves. See the migration guide for details.

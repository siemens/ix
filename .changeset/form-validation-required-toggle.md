---
'@siemens/ix': patch
---

Toggling `required` on **ix-input**, **ix-number-input**, **ix-textarea**, **ix-select**, **ix-date-input**, **ix-time-input** and **ix-datetime-input** now updates the validation state immediately instead of waiting for the next blur or value change. Removing `required` from a field that shows a required error now clears the error.

---
'@siemens/ix': patch
---

Required `ix-date-input`, `ix-datetime-input` and `ix-time-input` fields no longer show the required error while a value is being picked. Using the picker (selecting, navigating months, or opening it from the calendar or clock icon) no longer counts as leaving the field. The field is validated when focus leaves it or when the picker is closed without a value.

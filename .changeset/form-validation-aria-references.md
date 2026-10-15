---
'@siemens/ix': patch
---

Form fields now remove the error message reference from screen readers once the field is valid or inside a `<form novalidate>`, and keep other `aria-describedby` references intact.

---
'@siemens/ix': patch
---

Fix **ix-dropdown** briefly showing at a different position on its first open before moving to its final position. A fully visible trigger is no longer treated as clipped because of sub-pixel offsets (e.g. inside an iframe or with fractional zoom levels). This also applies to components based on **ix-dropdown**, like **ix-date-input**, **ix-time-input**, **ix-date-dropdown**, **ix-select** and **ix-dropdown-button**.

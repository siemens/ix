---
'@siemens/ix': patch
---

Pages with many date, time and datetime inputs load faster. `ix-dropdown-item` no longer forces a browser layout on every render when it has no icon, which used to block the page for several seconds when many date pickers were rendered at once.

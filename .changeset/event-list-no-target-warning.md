---
'@siemens/ix': patch
---

Fix `ix-event-list` so child mutations no longer call anime.js with a missing target, which stopped the console `"No target found"` warning (including when `animated` is unset).

Fixes #2689

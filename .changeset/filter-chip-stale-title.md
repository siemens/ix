---
'@siemens/ix': patch
---

Fix `ix-filter-chip` (and the `ix-select` overflow chip) showing a stale native tooltip (`title`) after its slotted label content changed, e.g. the overflow chip tooltip kept showing an outdated count instead of the current one.

---
'@siemens/ix': patch
---

Fix `convertToAbbreviationString` returning `1000K` (or `1000M`, `1000B`, `1000t`) when rounding reaches the next unit. For example `999950` now returns `1M` instead of `1000K`.

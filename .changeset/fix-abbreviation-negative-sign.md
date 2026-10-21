---
'@siemens/ix': patch
---

Fix `convertToAbbreviationString` dropping the minus sign of negative numbers (e.g. `-1500` returned `1.5K` instead of `-1.5K`).

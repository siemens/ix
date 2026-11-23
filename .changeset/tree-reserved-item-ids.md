---
'@siemens/ix': patch
---

**ix-tree**: Only resolve own `model` and `context` entries so reserved item ids such as `__proto__` can no longer modify `Object.prototype`. A child key without a matching model entry now raises a descriptive `TypeError`.

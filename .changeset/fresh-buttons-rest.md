---
'@siemens/ix': patch
---

Forward updated and removed ARIA attributes to each component's accessible element without leaving invalid host copies. `ix-toggle` now keeps its component managed attributes (`role`, `aria-checked`, `aria-disabled`, `aria-required`) intact while still accepting custom ARIA attributes such as `aria-label`.

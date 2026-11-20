---
'@siemens/ix': patch
---

Fix invalid `aria-controls` and `aria-labelledby` references between tabs and tab panels. Every tab is now linked to its panel, not only the initially active one, and no empty references are written. In `ix-menu-settings`, the generated tabs live in a different DOM tree than their panels, so these cross-tree references are no longer set because they could not resolve (axe `aria-valid-attr-value`).

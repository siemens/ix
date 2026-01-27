---
'@siemens/ix': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
'@siemens/ix-angular': minor
---

**feat(dropdown): add enableTopLayer prop for Popover API rendering**

Introduces a new `enableTopLayer` prop for `ix-dropdown` and all consuming components to enable rendering in the browser's top layer using the Popover API. This resolves z-index and stacking context issues, particularly with AG Grid and other complex layouts.

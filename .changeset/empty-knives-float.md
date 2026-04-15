---
'@siemens/ix': major
---

Update `ix-application` theming inputs to use the new `colorSchema` API.

The `themeSystemAppearance` property has been replaced by `colorSchema`, and consumers using `theme` or theme-related configuration on `ix-application` have to migrate to the updated theme-switching behavior.

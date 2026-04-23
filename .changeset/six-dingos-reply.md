---
'@siemens/ix': major
---

Migrate the public theming API from legacy theme classes to `data-ix-theme` and `data-ix-color-schema`, including explicit `system` color schema handling.

Consumers must stop using legacy theme classes such as `theme-classic-dark` and `theme-classic-light` and move to attribute-based theming on `<html>`.

---
'@siemens/ix': patch
---

Fix `TS2307: Cannot find module '@stencil/core/internal'` when a consuming project compiles with `"skipLibCheck": false`. Published type declarations no longer reference `@stencil/core` or `@stencil/core/internal`, which are not installed in consumer projects. Fixes #2730

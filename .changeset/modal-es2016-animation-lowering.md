---
'@siemens/ix': patch
---

Fix modals opening off-center and not closing during `ng serve` in Angular apps using zone.js (works around an upstream oxc/rolldown issue, see oxc-project/oxc#27376).

Fixes #2874

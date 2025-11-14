---
"angular-standalone-test-app": patch
"@siemens/ix-angular": patch
"@siemens/ix-react": patch
---

`defineCustomElement` is now called for modal related functions in **ix-angular/standalone**, fixing production builds. Fixes #2263, make sure to swap to the ModalService from **ix-angular/standalone** instead of **ix-angular** for this fix.

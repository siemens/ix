---
'@siemens/ix': patch
---

Fix Angular NgModule menu initialization so interpolated ARIA attributes no longer cause `ariaAttributeChanged` runtime errors. Reliably forward dynamic ARIA attribute updates and removals to internal elements, and keep an explicit `role` on `ix-tabs` from overriding its internal `tablist` role.

Fixes #2716

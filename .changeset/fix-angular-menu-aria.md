---
'@siemens/ix': patch
---

Fix Angular NgModule menu initialization so interpolated ARIA attributes no longer cause `ariaAttributeChanged` runtime errors. Forward dynamic ARIA attribute changes in microtask batches, and keep an explicit `role` on `ix-tabs` from overriding its internal `tablist` role.

Fixes #2716

---
'@siemens/ix': patch
'@siemens/ix-react': patch
'@siemens/ix-vue': patch
'@siemens/ix-angular': patch
---

Update `@stencil/core` to 4.45.2 and the Stencil output targets (`@stencil/react-output-target` 1.6.5, `@stencil/vue-output-target` 0.14.6, `@stencil/angular-output-target` 1.5.2). The optional `@stencil/core` peer dependency of `@siemens/ix` is now `^4.45.2`.

Component metadata (`component-doc.json`) no longer lists the default slot twice for `ix-application-header`, `ix-content-header`, `ix-popover`, `ix-popover-header`, `ix-popover-content`, and `ix-popover-footer`, and now documents the `end` slot of `ix-dropdown-item`.

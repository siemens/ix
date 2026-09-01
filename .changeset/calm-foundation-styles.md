---
'@siemens/ix': major
---

Change the default IX stylesheet to include the classic theme, foundation styles, and the button-group, link, table, and typography utilities. Native element normalization, the body margin reset, scoped scrollbars, utility shadows and input-group styles, and native form styles are no longer applied by default. Import `@siemens/ix/css/globals.css` for the complete supported global styles, or combine `@siemens/ix/css/default.css` with `@siemens/ix/css/legacy.css` to retain the previous behavior while migrating.

Replace deep Sass imports with the explicit foundation, global, theme, token, mixin, or deprecated compatibility entry points. Unsupported legacy component modules and implementation-specific mixins have been removed; migration guidance is available in `BREAKING_CHANGES/v6.md`.

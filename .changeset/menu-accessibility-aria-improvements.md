---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Improved accessibility for the following components: `ix-menu`, `ix-menu-item`, `ix-menu-settings`, `ix-menu-about`, `ix-menu-expand-icon`, `ix-icon-button`, `base-button`.

**API changes:**

- `ix-menu-settings`: Added `ariaLabelCloseButton` prop (default: "Close Settings")
- `ix-menu-about`: Added `ariaLabelCloseButton` prop (default: "Close About")

**Deprecations (will be removed in 5.0.0):**

- `ix-menu`: `i18nExpandSidebar` prop
- `ix-application-header`: `ariaLabelMenuExpandIconButton` prop

---
'@siemens/ix': patch
'@siemens/ix-angular': patch
'@siemens/ix-react': patch
'@siemens/ix-vue': patch
---

feat(accessibility): Hide menu expand/collapse button from screen readers

The menu expand/collapse button is now hidden from assistive technology using `aria-hidden="true"` since it's redundant for screen readers - they can navigate menu items directly without needing to visually expand the menu.

**Changes:**

- **DEPRECATED**: `i18nExpandSidebar` prop on `ix-menu` - Will be removed in 5.0.0 (the expand button is now hidden from screen readers)
- **DEPRECATED**: `ariaLabelMenuExpandIconButton` prop on `ix-application-header` - Will be removed in 5.0.0 (no longer passed to the expand button)
- **DEPRECATED**: `ixAriaLabel` prop on `ix-menu-expand-icon` (internal) - Will be removed in 5.0.0 (component is aria-hidden)

**Changes to `ix-menu-expand-icon` (internal component):**

- Added `aria-hidden="true"` to component host (hides from screen readers only)
- Removed unused `ixAriaLabel` prop (component is hidden from screen readers)
- Button remains keyboard accessible for sighted keyboard users

**Changes to `ix-icon-button`:**

- Now properly passes `tabindex` from host element to internal button element
- Enables non-focusable icon buttons when needed (e.g., when `aria-hidden` is used)

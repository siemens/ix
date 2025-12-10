---
'@siemens/ix': patch
'@siemens/ix-angular': patch
'@siemens/ix-react': patch
'@siemens/ix-vue': patch
---

feat(accessibility): Improve ARIA roles and labels for menu components

**Menu Component (`ix-menu`):**

- Added `aria-label` to `<nav>` element using `applicationName` for proper landmark identification
- Settings and Legal items now properly announce as disclosure buttons with `aria-expanded` and `aria-controls`
- Changed overlay from `<div role="region">` to semantic `<section>` element
- Theme toggle already has correct `role="switch"` with `aria-checked`

**Menu Item Component (`ix-menu-item`):**

- Enhanced to automatically pass ARIA attributes from host element to internal button/anchor
- Uses `a11yHostAttributes()` to support `aria-expanded`, `aria-controls`, and `role` without new props
- Icon already has `aria-hidden="true"` for decorative icons
- Maintains full backward compatibility - no API changes

**Menu Settings Component (`ix-menu-settings`):**

- Added `ariaLabelCloseButton` prop for accessible close button label (default: "Close Settings")

**Menu About Component (`ix-menu-about`):**

- Added `ariaLabelCloseButton` prop for accessible close button label (default: "Close About")

**Icon Button Component (`ix-icon-button`):**

- Now properly passes `tabindex` from host element to internal button for improved focus management

**Base Button Component (`base-button`):**

- All icons in buttons now have `aria-hidden="true"` (marked as decorative since the button text or aria-label provides the accessible name)

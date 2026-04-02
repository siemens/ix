---
'@siemens/ix-angular': major
'@siemens/ix-react': major
'@siemens/ix': major
'@siemens/ix-vue': major
---

**Refactor keyboard navigation for dropdown-related components**

Refactors keyboard navigation to align with W3C accessibility patterns for dropdown-related components, significantly improving accessibility and user experience:

## Component Changes

### Date Picker

- Added comprehensive keyboard navigation support:
  - `Home`/`End`: Navigate to first/last day of week
  - `PageUp`/`PageDown`: Navigate to previous/next month
  - `Shift+PageUp`/`Shift+PageDown`: Navigate to previous/next year
  - `ArrowLeft`/`ArrowRight`/`ArrowUp`/`ArrowDown`: Navigate between days
  - `Enter`/`Space`: Select focused day
  - `Escape`: Close picker
- Replaced manual year/month dropdown with accessible `ix-dropdown-button` components
- Implemented visual focus mode with `aria-activedescendant` for embedded pickers
- Added infinite scrolling for year selection with IntersectionObserver
- Improved ARIA labels: `ariaLabelMonthSelection` and `ariaLabelYearSelection` props
- Calendar days now have proper `role="button"` and descriptive `aria-label` attributes

### Date Input

- Implemented `aria-activedescendant` pattern for combobox interaction
- Added keyboard forwarding to embedded date picker
- `ArrowDown` opens picker and activates keyboard navigation
- `Escape` closes picker and returns focus to input
- Focus management improved with `delegatesFocus` shadow DOM option

### Date Dropdown

- Enhanced focus handling with `onFocusout` to close dropdown when focus leaves
- Auto-focus date picker when opened via keyboard
- Added `suppressOverflowBehavior` to prevent unwanted repositioning

### Dropdown & Dropdown Button

- New props: `disableFocusHandling`, `disableFocusTrap`
- New events: `showChange` (preventable), `showChanged` (post-change)
- Improved focus proxy for dropdown items with proper `role="menuitem"`
- Better keyboard navigation with arrow keys, Home, End, Enter, Escape

### Breadcrumb

- Complete refactor using `ix-dropdown-button` for previous/next items
- Added `role="navigation"` and `role="listitem"` for proper semantics
- Improved ARIA labels (default: "Show previous breadcrumb items")
- Each breadcrumb item now has `aria-current="page"` for the current page
- Keyboard navigation now works consistently across all breadcrumb dropdowns

### Avatar

- Implemented focus proxy pattern for dropdown menu items
- Added `aria-activedescendant` support
- Button now has `role="combobox"` with proper `aria-controls` and `aria-expanded`
- Menu items properly labeled with `role="menuitem"`

### Button

- Added `.ix-focused` class for programmatic focus indication
- Fixed focus-visible styles to work consistently
- Disabled buttons now have `tabindex="-1"`

### Application Header

- Added `role="banner"` for proper landmark semantics
- Fixed overflow context menu visibility logic for small viewports

## Breaking Changes

- `ix-breadcrumb-item`: `ariaLabelButton` prop deprecated in favor of direct `aria-label` attribute
- Date picker month/year selection UI completely redesigned (visual breaking change)
- Internal structure for all `ix-dropdown` related components are changed

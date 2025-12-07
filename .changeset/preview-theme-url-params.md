---
'html-test-app': patch
---

**Preview Examples: Fix theme URL parameter handling**

Fixed a bug where preview example iframes didn't properly apply theme from URL parameters, causing eCharts and other components to display incorrect theme colors when embedded in documentation.

**Changes:**

- Import `themeSwitcher` from `@siemens/ix` in `init.js`
- Call `themeSwitcher.setTheme()` when URL parameters are present
- Ensure `themeSwitcher.getCurrentTheme()` returns correct value in iframes
- Update body class for backwards compatibility

**Before:**

- URL parameters were read but only set as data attributes
- `themeSwitcher.setTheme()` was never called
- `getCurrentTheme()` returned hardcoded `"theme-classic-dark"` regardless of URL params
- eCharts always displayed classic colors, even with `?theme=brand` in URL

**After:**

- URL parameters trigger `themeSwitcher.setTheme(fullTheme)`
- `getCurrentTheme()` returns correct theme from URL params
- eCharts displays brand colors when `?theme=brand` is in URL
- Backwards compatible: defaults to `theme-classic-dark` when no params

**Impact:**

- All HTML preview examples now respect theme URL parameters
- Documentation iframes display correct theme
- eCharts components render with proper brand/classic colors
- Defaults to `theme-classic-dark` when no parameters provided (backwards compatible)

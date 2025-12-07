---
'html-test-app': patch
---

**Preview Examples: Fix eCharts theme initialization from URL parameters**

Fixed a bug where eCharts examples in preview iframes always displayed classic theme colors, even when `?theme=brand&colorSchema=dark` URL parameters were present in the iframe URL.

**Root Cause:**

The `init.js` script was reading URL parameters but only setting them as data attributes (`data-ix-theme`, `data-ix-color-schema`). It never called `themeSwitcher.setTheme()`, so the theme switcher's internal state remained at the hardcoded default. When eCharts components call `themeSwitcher.getCurrentTheme()` during initialization, they received `"theme-classic-dark"` instead of the theme specified in URL parameters.

Regular components (buttons, inputs, etc.) worked correctly because they only rely on CSS variables, which were properly set via data attributes.

**Changes:**

- Import `themeSwitcher` from `@siemens/ix` in `init.js`
- Call `themeSwitcher.setTheme(fullTheme)` with theme name constructed from URL params
- Update `document.body.className` for backwards compatibility with legacy CSS selectors
- Default to `theme-classic-dark` when no URL parameters provided

**Impact:**

- eCharts examples now correctly render with brand theme colors in documentation iframes
- `themeSwitcher.getCurrentTheme()` returns correct value within iframe context
- `themeSwitcher.themeChanged` event fires properly on initialization
- Backwards compatible with existing preview examples that don't use URL parameters

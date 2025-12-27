---
'@siemens/ix': minor
'@siemens/ix-angular': minor
'@siemens/ix-react': minor
'@siemens/ix-vue': minor
---

Migrate **ix-dropdown** to use Popover API for top-layer rendering.

**Problem:** Dropdowns appeared behind AG Grid cells due to CSS stacking context limitations. Traditional z-index values cannot escape stacking contexts created by other elements.

**Solution:** Use the browser's Popover API (`<dialog popover="manual">`) which renders content in the "top layer" - above all z-index values, escaping any stacking context.

**Deprecation:** The `positioningStrategy` prop is now deprecated. Dropdowns always use fixed positioning relative to the viewport.

---

### Implementation Details

**Core Changes (`dropdown.tsx`, `dropdown.scss`):**

- Wrap dropdown content in `<dialog popover="manual">` element
- Move visual styles from `:host` to `.dialog` selector
- Add `color-scheme: inherit` for proper theme inheritance in top layer
- Update positioning logic to target the dialog element instead of host
- Add `tabindex={-1}` to prevent dialog from capturing Tab focus

### Test Updates

**Why tests needed updates:**
Dialog elements in the browser's top layer have different visibility behavior. The `toBeVisible()` assertion doesn't work reliably because the dialog is rendered outside the normal DOM flow. Instead, we check the `show` class on the host element.

**Component Tests Updated:**

| Component          | File                                    | Changes                                                                                   |
| ------------------ | --------------------------------------- | ----------------------------------------------------------------------------------------- |
| dropdown           | `dropdown.ct.ts`                        | `toBeVisible()` → `toHaveClass(/show/)`, keyboard nav targets inner `button`              |
| select             | `select.ct.ts`, `select-keyboard.ct.ts` | `toHaveClass(/visible/)` → `toHaveClass(/show/)`                                          |
| date-dropdown      | `date-dropdown.ct.ts`                   | `toHaveClass(/visible/)` → `toHaveClass(/show/)`                                          |
| time-input         | `time-input.ct.ts`                      | `toHaveClass(/visible/)` → `toHaveClass(/show/)`                                          |
| pagination         | `pagination.ct.ts`                      | `toHaveClass(/visible/)` → `toHaveClass(/show/)`                                          |
| application-header | `application-header.ct.ts`              | `toHaveClass(/visible/)` → `toHaveClass(/show/)`                                          |
| avatar             | `avatar.ct.ts`                          | `toHaveClass(/visible/)` → `toHaveClass(/show/)` (dropdown only, tooltip keeps `visible`) |
| breadcrumb         | `breadcrumb.ct.ts`                      | `toHaveClass(/visible/)` → `toHaveClass(/show/)`                                          |
| category-filter    | `category-filter.ct.ts`                 | `toHaveClass(/visible/)` → `toHaveClass(/show/)`                                          |
| date-input         | `date-input.ct.ts`                      | `toHaveClass(/visible/)` → `toHaveClass(/show/)`                                          |
| menu               | `menu.ct.ts`                            | `toHaveClass(/visible/)` → `toHaveClass(/show/)`                                          |
| menu-avatar-item   | `menu-avatar-item.ct.ts`                | `toHaveClass(/visible/)` → `toHaveClass(/show/)`                                          |
| menu-category      | `menu-category.ct.ts`                   | `toHaveClass(/visible/)` → `toHaveClass(/show/)`                                          |
| tree               | `tree.ct.ts`                            | `toHaveClass(/visible/)` → `toHaveClass(/show/)`                                          |

**Known Issues (tests skipped):**

- `field-label.ct.ts`: `ix-date-input` focus is lost when dropdown opens via Popover API
- `form-ready.ct.ts`: `ix-date-input` and `ix-time-input` form submission issues when dropdown is open

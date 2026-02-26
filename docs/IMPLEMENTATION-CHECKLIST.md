# Implementation Checklist: WAI-ARIA Combobox for `ix-datetime-input`

## ⭐ SOURCE OF TRUTH: Review Actual Code First

Before implementing, examine the **actual code implementations** (source of truth):

**Required review before starting:**
- [ ] Open and review: `packages/core/src/components/date-input/date-input.tsx`
  - Look for: `delegatesFocus`, `focusTrapOptions`, `callbackFocusElement`, `keyboardActivationKeys`
  - Look for: `handleDatePickerKeyDown()` method implementation
  - Look for: ARIA attributes on input element
  
- [ ] Open and review: `packages/core/src/components/date-input/tests/date-input.ct.ts`
  - Look for: `keyboard navigation test suite`
  - Understand: Test structure for keyboard navigation
  
- [ ] Open and review: `packages/core/src/components/time-input/time-input.tsx`
  - Look for: Similar patterns to date-input
  - Understand: How time input handles focus trap
  
- [ ] Open and review: `packages/core/src/components/datetime-picker/datetime-picker.tsx`
  - Look for: How it composes date-picker and time-picker
  - Understand: Method exposure patterns

**Reference (not source of truth, for understanding standards):**
- W3C Combobox Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-datepicker/

---

Use this tool to compare: Check the code-based implementation first, then follow this checklist.

---

## Pre-Implementation

- [ ] Read `datetime-input-wai-aria-plan.md` (main plan)
- [ ] Read `test-responsibility-analysis.md` (understand test architecture)
- [ ] Read `ANSWER-test-duplication-concern.md` (clarify what tests go where)
- [ ] Verify branch is rebased on `poc/dropdown-focus-trap`
- [ ] Review `date-input.tsx` (lines 50–70, 550–610) for reference implementation

---

## Step 1: Shadow DOM Config

**File:** `packages/core/src/components/datetime-input/datetime-input.tsx`

```tsx
@Component({
  tag: 'ix-datetime-input',
  styleUrl: 'datetime-input.scss',
  shadow: { delegatesFocus: true },  // ← Changed from 'true'
  formAssociated: true,
})
```

- [ ] Change `shadow: true` → `shadow: { delegatesFocus: true }`
- [ ] Verify no build errors: `pnpm build --filter @siemens/ix`

---

## Step 2: Expose Methods on `ix-datetime-picker`

**File:** `packages/core/src/components/datetime-picker/datetime-picker.tsx`

Add these `@Method()` proxies (all `@internal`):

```ts
@Method()
async focusActiveDay(): Promise<void> {
  return this.datePickerElement?.focusActiveDay();
}

@Method()
async isCalendarDayFocused(): Promise<boolean> {
  return (await this.datePickerElement?.isCalendarDayFocused()) ?? false;
}

@Method()
async navigateCalendar(direction: -1 | 1, byYear: boolean): Promise<void> {
  return this.datePickerElement?.navigateCalendar(direction, byYear);
}

@Method()
async focusFirstDayOfCurrentWeek(): Promise<void> {
  return this.datePickerElement?.focusFirstDayOfCurrentWeek();
}

@Method()
async focusLastDayOfCurrentWeek(): Promise<void> {
  return this.datePickerElement?.focusLastDayOfCurrentWeek();
}
```

- [ ] Add all 5 methods
- [ ] Each returns the result from `this.datePickerElement`
- [ ] Verify no build errors: `pnpm build --filter @siemens/ix`

---

## Step 3: Wire Dropdown Focus Trap & Keyboard Activation

**File:** `packages/core/src/components/datetime-input/datetime-input.tsx`

In the `render()` method, update the `<ix-dropdown>`:

```tsx
<ix-dropdown
  class="datetime-dropdown"
  closeBehavior="outside"
  data-testid="datetime-dropdown"
  ref={this.dropdownElementRef}
  show={this.show}
  suppressOverflowBehavior
  trigger={this.inputElementRef.waitForCurrent()}
  onShowChanged={(event) => {
    this.show = event.detail;
  }}
  // ← ADD THESE THREE PROPS
  focusTrapOptions={{
    targetElement: this.datetimePickerRef,
    trapFocusInShadowDom: true,
  }}
  callbackFocusElement={() => {
    this.datetimePickerRef.current?.focusActiveDay();
    return true;
  }}
  keyboardActivationKeys={['ArrowUp', 'ArrowDown']}
>
```

- [ ] Add `focusTrapOptions` with both `targetElement` and `trapFocusInShadowDom`
- [ ] Add `callbackFocusElement` arrow function calling `focusActiveDay()`
- [ ] Add `keyboardActivationKeys` as `['ArrowUp', 'ArrowDown']`
- [ ] Verify no TypeScript errors

---

## Step 4: Add `handleDatePickerKeyDown` Method

**File:** `packages/core/src/components/datetime-input/datetime-input.tsx`

Add this private method:

```ts
private async handleDatePickerKeyDown(event: KeyboardEvent) {
  event.preventDefault();

  if (!this.datetimePickerRef.current) {
    return;
  }

  if (!(await this.datetimePickerRef.current.isCalendarDayFocused())) {
    return;
  }

  switch (event.key) {
    case 'PageUp':
      await this.datetimePickerRef.current.navigateCalendar(-1, event.shiftKey);
      break;
    case 'PageDown':
      await this.datetimePickerRef.current.navigateCalendar(1, event.shiftKey);
      break;
    case 'Home':
      await this.datetimePickerRef.current.focusFirstDayOfCurrentWeek();
      break;
    case 'End':
      await this.datetimePickerRef.current.focusLastDayOfCurrentWeek();
      break;
  }
}
```

Then wire it in `render()` on `<ix-datetime-picker>`:

```tsx
<ix-datetime-picker
  ...
  onKeyDown={(event) => this.handleDatePickerKeyDown(event)}
>
```

- [ ] Add method to the class
- [ ] Wire to `<ix-datetime-picker>` via `onKeyDown`
- [ ] Verify TypeScript compiles

---

## Step 5: Add ARIA Attributes to Input

**File:** `packages/core/src/components/datetime-input/datetime-input.tsx`

In `renderInput()`, update the `<input>`:

```tsx
<input
  role="combobox"
  aria-haspopup="dialog"
  aria-expanded={this.show ? 'true' : 'false'}
  aria-controls="datetime-picker-dialog"
  autoComplete="off"
  class={{
    'is-invalid': this.isInputInvalid,
  }}
  // ... rest of props
/>
```

In `render()`, give the dropdown an `id`:

```tsx
<ix-dropdown
  id="datetime-picker-dialog"
  // ... rest of props
>
```

Optional: Add `ariaLabelCalendarButton` prop:

```ts
@Prop() ariaLabelCalendarButton?: string;
```

And use it on the button:

```tsx
<ix-icon-button
  aria-label={this.ariaLabelCalendarButton ?? 'Toggle datetime picker'}
  // ... rest of props
/>
```

- [ ] Add `role="combobox"` to input
- [ ] Add `aria-haspopup="dialog"` to input
- [ ] Add `aria-expanded` binding to input
- [ ] Add `aria-controls="datetime-picker-dialog"` to input
- [ ] Add `id="datetime-picker-dialog"` to dropdown
- [ ] (Optional) Add `ariaLabelCalendarButton` prop and use on icon button
- [ ] Verify no build errors

---

## Step 6: Add `onFocusout` Close Behavior

**File:** `packages/core/src/components/datetime-input/datetime-input.tsx`

In `render()`, wrap the entire component in `<Host>` with `onFocusout`:

```tsx
<Host
  class={{
    disabled: this.disabled,
    readonly: this.readonly,
  }}
  onFocusout={(e: FocusEvent) => {
    const relatedTarget = e.relatedTarget as Node;

    // relatedTarget may be null during re-renders;
    // closing here would cause unexpected dismissal
    if (!relatedTarget) {
      return;
    }

    this.closeDropdown();
  }}
>
  {/* existing content */}
</Host>
```

- [ ] Add `onFocusout` handler to `<Host>`
- [ ] Include null-guard for `relatedTarget`
- [ ] Call `this.closeDropdown()` when focus leaves component
- [ ] Verify no build errors

---

## Step 7: Remove Auto-Open on `onFocus`

**File:** `packages/core/src/components/datetime-input/datetime-input.tsx`

In `renderInput()`, find and update the input's `onFocus`:

```tsx
onFocus={async () => {
  // Remove: this.openDropdown();
  this.ixFocus.emit();
}}
```

- [ ] Remove `this.openDropdown();` from `onFocus`
- [ ] Keep `this.ixFocus.emit();`
- [ ] Verify keyboard opening still works via `keyboardActivationKeys` (Step 3)

---

## Step 8a: Add Keyboard Navigation Tests to `datetime-input.ct.ts`

**File:** `packages/core/src/components/datetime-input/test/datetime-input.ct.ts`

Add a new test describe block:

```ts
regressionTest.describe('keyboard navigation', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mount(
      `<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`
    );
    const dateTimeInputElement = page.locator('ix-datetime-input');
    await dateTimeInputElement.locator('input').focus();
    await page.keyboard.press('ArrowDown');
    await expect(
      dateTimeInputElement.getByLabel(/^\d+: 5$/)
    ).toBeFocused();
  });

  regressionTest('Home moves focus to first day of week', async ({ page }) => {
    const dateTimeInputElement = page.locator('ix-datetime-input');
    await page.keyboard.press('Home');
    // Find first day cell of that week
    await page.keyboard.press('Enter');
    // Value should have changed
  });

  regressionTest('End moves focus to last day of week', async ({ page }) => {
    const dateTimeInputElement = page.locator('ix-datetime-input');
    await page.keyboard.press('End');
    // Find last day cell of that week
    await page.keyboard.press('Enter');
    // Value should have changed
  });

  regressionTest('PageUp navigates to previous month', async ({ page }) => {
    const dateTimeInputElement = page.locator('ix-datetime-input');
    await page.keyboard.press('PageUp');
    await page.keyboard.press('Enter');
    // Month should have changed
  });

  // Add similar tests for PageDown, Shift+PageUp, Shift+PageDown, Escape, Tab
});
```

**Reference:** See `date-input.ct.ts` lines 229–289 for the exact test structure.

- [ ] Add `regressionTest.describe('keyboard navigation', () => { ... })`
- [ ] Add `beforeEach` to open picker and focus calendar
- [ ] Add test for `Home` key
- [ ] Add test for `End` key
- [ ] Add test for `PageUp` (previous month)
- [ ] Add test for `PageDown` (next month)
- [ ] Add test for `Shift+PageUp` (previous year)
- [ ] Add test for `Shift+PageDown` (next year)
- [ ] Add test for `Escape` (closes picker)
- [ ] Add test for `Tab` cycling (optional, but recommended)
- [ ] Run tests: `pnpm test --filter @siemens/ix datetime-input`

---

## Step 8b: Verify No Changes to `datetime-picker.ct.ts`

**File:** `packages/core/src/components/datetime-picker/test/datetime-picker.ct.ts`

- [ ] **NO CHANGES** — Keep existing tests as-is
- [ ] Verify existing tests still pass: `pnpm test --filter @siemens/ix datetime-picker`

---

## Step 9: Update Changeset

**File:** `.changeset/many-jars-serve.md` (or create a new one)

Add an entry describing the new keyboard navigation + ARIA support:

```md
### DateTime Input

- Implemented WAI-ARIA combobox pattern for keyboard accessibility
- `delegatesFocus` shadow DOM option for proper focus delegation
- Keyboard opening: `ArrowUp`/`ArrowDown` opens picker and focuses active day
- Keyboard navigation: `PageUp`/`PageDown` for month, `Shift+PageUp`/`Shift+PageDown` for year
- Keyboard navigation: `Home`/`End` for week boundaries
- `Escape` closes picker and returns focus to input
- Focus trap: `Tab`/`Shift+Tab` cycle within picker panel
- ARIA attributes: `role="combobox"`, `aria-haspopup="dialog"`, `aria-expanded`, `aria-controls`
- Follows W3C Date Picker Combobox pattern: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-datepicker/
```

- [ ] Document all new keyboard shortcuts
- [ ] Reference W3C pattern
- [ ] Note ARIA attributes added
- [ ] List files changed

---

## Testing

Run all tests to verify nothing broke:

```bash
# Build
pnpm build --filter @siemens/ix

# Test datetime-input
pnpm test --filter @siemens/ix datetime-input

# Test datetime-picker
pnpm test --filter @siemens/ix datetime-picker

# Visual regression (if applicable)
pnpm visual-regression --filter @siemens/ix

# Full test suite
pnpm test --filter @siemens/ix
```

- [ ] `pnpm build` completes without errors
- [ ] Existing `datetime-input.ct.ts` tests pass
- [ ] New keyboard navigation tests pass
- [ ] `datetime-picker.ct.ts` tests pass
- [ ] No TypeScript errors
- [ ] Visual regression tests pass (if running visual tests)

---

## Final Validation

- [ ] All 8 steps + changeset complete
- [ ] No test duplication between datetime-input and datetime-picker
- [ ] Keyboard navigation mirrors `date-input` pattern
- [ ] ARIA attributes match W3C combobox pattern
- [ ] PR description references this checklist and the plan docs
- [ ] Branch ready to merge

---

## Reference Materials

- **Main plan:** `datetime-input-wai-aria-plan.md`
- **Test architecture:** `test-responsibility-analysis.md`
- **Answer to duplication concern:** `ANSWER-test-duplication-concern.md`
- **Reference implementation:** `date-input.tsx` + `date-input.ct.ts`
- **W3C Pattern:** https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-datepicker/


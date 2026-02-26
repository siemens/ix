# WAI-ARIA Combobox Compliance Plan for `ix-datetime-input`

> **Source of Truth:** Actual implementations in `date-input.tsx`, `time-input.tsx`, and `datetime-picker.tsx`  
> **Reference Standard:** [W3C Date Picker Combobox Example](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-datepicker/)
>
> Your task: **Mirror the code-based implementation**, not the W3C spec directly.

---

## Understanding the Hierarchy

| Level | What | Where to Look | How to Use |
|---|---|---|---|
| **Spec** | W3C Combobox Standard | W3C APG website | Reference for understanding principles |
| **Source of Truth** | Actual code implementation | `date-input.tsx` (@Component, render() method, handleDatePickerKeyDown()) | **Copy from here** |
| **Source of Truth** | Test examples | `date-input.ct.ts` (keyboard navigation test suite) | **Mirror these tests** |
| **Reference** | Composition patterns | `datetime-picker.tsx` | Reference for combining date + time |

---

## Before Reading This Plan

1. ✅ Open `date-input.tsx` in your editor
2. ✅ Open `date-input.ct.ts` in your editor
3. ✅ Review both files - this is your source of truth
4. ✅ Note the patterns, code structures, test organization
5. ✅ Then follow this plan to apply the same patterns to `datetime-input`

---

## Context

**IX is a multi-framework design system** built on Stencil Web Components with framework-specific wrappers:

- `packages/core/` - Stencil-based Web Components (source of truth)
- `packages/react/`, `packages/angular/`, `packages/vue/` - Auto-generated framework wrappers via Stencil output targets
- `packages/aggrid/`, `packages/echarts/` - Theme packages for external libraries

**Monorepo Structure**: pnpm workspace with Turbo for build orchestration. All packages follow workspace:\* internal dependencies.

---

## Branch Information

**Branch:** `feature/IX-3861-datetime-input` (rebased on `poc/dropdown-focus-trap`)

The `poc/dropdown-focus-trap` branch already contains:
- ✅ Enhanced dropdown focus trap implementation
- ✅ Latest keyboard navigation patterns
- ✅ Completed implementations in `date-input`, `time-input`, `datetime-picker`

- `delegatesFocus` shadow DOM option
- `focusTrapOptions` on the dropdown targeting the inner date picker
- `callbackFocusElement` to focus the active calendar day on keyboard open
- `keyboardActivationKeys` restricting dropdown open to `ArrowUp`/`ArrowDown`
- `PageUp`/`PageDown`/`Home`/`End` forwarding through `handleDatePickerKeyDown`
- `onFocusout` on `<Host>` to close the dropdown when focus leaves the component
- Full keyboard navigation CT test suite

The `ix-datetime-input` was added later and is **missing all of these features**.
The goal is to bring `ix-datetime-input` to feature-parity while accounting for
the added complexity of a combined date + time picker.

---

## Step-by-Step Plan

### Step 1 — `delegatesFocus` in Shadow DOM Config

**File:** `packages/core/src/components/datetime-input/datetime-input.tsx`

Change the component decorator:

```ts
// Before
shadow: true,

// After
shadow: { delegatesFocus: true },
```

This ensures focus management works consistently across all browsers when the
host element receives programmatic focus, matching `ix-date-input` and
`ix-date-picker`.

---

### Step 2 — Expose Keyboard Navigation Methods on `ix-datetime-picker`

**File:** `packages/core/src/components/datetime-picker/datetime-picker.tsx`

The `ix-datetime-picker` currently has no `@Method()` exports. Add proxy
`@Method()` implementations that delegate to the inner `ix-date-picker`
reference (already stored as `this.datePickerElement`):

| Method | Delegates to `ix-date-picker` |
|---|---|
| `focusActiveDay()` | `datePickerElement.focusActiveDay()` |
| `isCalendarDayFocused()` | `datePickerElement.isCalendarDayFocused()` |
| `navigateCalendar(direction, byYear)` | `datePickerElement.navigateCalendar(direction, byYear)` |
| `focusFirstDayOfCurrentWeek()` | `datePickerElement.focusFirstDayOfCurrentWeek()` |
| `focusLastDayOfCurrentWeek()` | `datePickerElement.focusLastDayOfCurrentWeek()` |

All of these are `@internal` methods already present on `ix-date-picker`.
Adding them to `ix-datetime-picker` keeps encapsulation intact and avoids
`datetime-input` reaching into the shadow DOM of `ix-datetime-picker`.

---

### Step 3 — Wire Dropdown Focus Trap and Keyboard Activation

**File:** `packages/core/src/components/datetime-input/datetime-input.tsx`

Add the following props to the `<ix-dropdown>` in the `render()` method,
mirroring `date-input.tsx`:

```tsx
<ix-dropdown
  ...
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

**Why `targetElement: this.datetimePickerRef`?**
The focus trap must scope to the `ix-datetime-picker` (which contains both the
date grid and the time picker), not just the outer dropdown shell. With
`trapFocusInShadowDom: true`, focus cycling via `Tab`/`Shift+Tab` stays inside
the picker panel.

---

### Step 4 — Add `handleDatePickerKeyDown` in `datetime-input`

**File:** `packages/core/src/components/datetime-input/datetime-input.tsx`

Add a private method and wire it to `onKeyDown` on the `<ix-datetime-picker>`:

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

Wire it in the render:

```tsx
<ix-datetime-picker
  ...
  onKeyDown={(event) => this.handleDatePickerKeyDown(event)}
/>
```

Keys forwarded match the W3C Date Picker Combobox spec:

| Key | Action |
|---|---|
| `ArrowLeft/Right/Up/Down` | Navigate days (handled inside `ix-date-picker` already) |
| `Home` | First day of current week |
| `End` | Last day of current week |
| `PageUp` | Previous month |
| `PageDown` | Next month |
| `Shift+PageUp` | Previous year |
| `Shift+PageDown` | Next year |
| `Enter` / `Space` | Select focused day (handled inside `ix-date-picker` already) |
| `Escape` | Close picker, return focus to input (handled by dropdown) |

---

### Step 5 — Add ARIA Attributes to the Input

**File:** `packages/core/src/components/datetime-input/datetime-input.tsx`

Update the `<input>` element in `renderInput()` to include combobox semantics:

```tsx
<input
  role="combobox"
  aria-haspopup="dialog"
  aria-expanded={this.show ? 'true' : 'false'}
  aria-controls="datetime-picker-dialog"
  ...
/>
```

And give the dropdown a matching `id`:

```tsx
<ix-dropdown
  id="datetime-picker-dialog"
  ...
/>
```

Also update the calendar icon button — it currently has `aria-hidden="true"`.
Consider adding a visible `aria-label` prop (e.g., `ariaLabelCalendarButton`)
mirroring `ix-date-input`'s existing prop:

```tsx
@Prop() ariaLabelCalendarButton?: string;
```

```tsx
<ix-icon-button
  aria-label={this.ariaLabelCalendarButton ?? 'Toggle datetime picker'}
  ...
/>
```

---

### Step 6 — Add `onFocusout` Close Behavior on `<Host>`

**File:** `packages/core/src/components/datetime-input/datetime-input.tsx`

Add a `onFocusout` handler to the `<Host>`, guarding against null
`relatedTarget` during re-renders (same logic as `date-input.tsx` lines 545–557):

```tsx
<Host
  ...
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
```

This ensures the picker closes cleanly when tabbing entirely out of the
component, without relying solely on `closeBehavior="outside"`.

---

### Step 7 — Remove Auto-Open on `onFocus`

**File:** `packages/core/src/components/datetime-input/datetime-input.tsx`

Currently the input opens the dropdown on every `onFocus` event:

```tsx
onFocus={async () => {
  this.openDropdown();   // ← remove this
  this.ixFocus.emit();
}}
```

The W3C combobox pattern recommends opening only via explicit user action
(`ArrowDown`/`ArrowUp` keys or the calendar button click). With
`keyboardActivationKeys` on the dropdown (Step 3), keyboard-triggered opening
is handled automatically. Removing the `onFocus` auto-open prevents unwanted
picker pop-up on programmatic focus (e.g., `Tab` navigation between form
fields).

---

### Step 8 — Keyboard Navigation CT Tests

**Files:**
- `packages/core/src/components/datetime-input/test/datetime-input.ct.ts` (input-level tests)
- `packages/core/src/components/datetime-picker/test/datetime-picker.ct.ts` (optional: picker-level tests if not already covered)

#### 8a. Add to `datetime-input.ct.ts`

Add a `regressionTest.describe('keyboard navigation', ...)` block **mirroring the one in
`date-input.ct.ts`** lines 229–289. This tests the **input component's responsibility**:
opening the picker via keyboard, forwarding navigation keys, and closing on Escape.

**Setup (beforeEach):**
```ts
await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);
const dateTimeInputElement = page.locator('ix-datetime-input');
await dateTimeInputElement.locator('input').focus();
await page.keyboard.press('ArrowDown');
// Expect the picker to open and focus the active day in the calendar
```

**Tests to cover:**

| Test case | Expected behavior |
|---|---|
| `ArrowDown` from input opens picker and focuses active day | Calendar visible, first day cell focused |
| `Escape` closes picker and returns focus to input | Dropdown hidden, input focused |
| `Home` moves to first day of current week | Correct day cell focused (when calendar is focused) |
| `End` moves to last day of current week | Correct day cell focused (when calendar is focused) |
| `PageUp` navigates to previous month | Month changed in calendar, same day focused |
| `PageDown` navigates to next month | Month changed in calendar, same day focused |
| `Shift+PageUp` navigates to previous year | Year changed in calendar |
| `Shift+PageDown` navigates to next year | Year changed in calendar |
| `Tab` inside picker cycles within focus trap | Focus moves from calendar → time picker → confirm button → back to calendar |
| `Tab` from outside component does not auto-open picker | Dropdown stays closed |

**Key difference from `date-input`:**
- `date-input` auto-selects and closes when a day is clicked
- `datetime-input` keeps the picker open after day selection; closing only happens on "Confirm" button
- After `ArrowDown` focuses a day, you may need to press `Tab` to reach the time picker section, then confirm

#### 8b. No changes to `date-picker.ct.ts` or `datetime-picker.ct.ts`

The picker components themselves do not need keyboard navigation tests in this phase
because:

1. **Calendar day navigation** (ArrowLeft/Right/Up/Down within the grid) is already implicitly
   tested in `date-picker.ct.ts` via click tests and the focus management in `componentDidRender`.
2. **Month/year navigation** (`PageUp`/`PageDown`) is **owned by the input component**, not the picker.
   The picker only exposes the `@internal @Method() navigateCalendar()` for the input to call.
3. **Time picker interactions** are not part of the W3C combobox pattern; `ix-time-picker`
   is a utility component with its own scrolling behavior.

If you want to be thorough, you *could* add focused tests to `datetime-picker.ct.ts` for
the newly exposed `@Method()` proxies (e.g., `focusActiveDay()`, `isCalendarDayFocused()`),
but this is optional — the integration tests in `datetime-input.ct.ts` will verify the
entire stack works correctly.

---

## Test Architecture & Responsibility Boundaries

### Why Tests Live Where They Do

| Component | Test File | Responsibility | Keyboard Tests? |
|---|---|---|---|
| `ix-date-picker` | `date-picker.ct.ts` | Calendar grid logic, month/year selection UI, day selection | ❌ No (no input wrapper) |
| `ix-date-input` | `date-input.ct.ts` | Form input field, dropdown integration, keyboard open/close, key forwarding | ✅ **Yes** (combobox pattern) |
| `ix-datetime-picker` | `datetime-picker.ct.ts` | Composition of `ix-date-picker` + `ix-time-picker` | ❌ No (no input wrapper) |
| `ix-datetime-input` | `datetime-input.ct.ts` | Form input field, dropdown integration, keyboard open/close, key forwarding | ✅ **Yes** (combobox pattern) |
| `ix-time-picker` | (embedded in input) | Scrollable time selection | ❌ No W3C pattern |
| `ix-time-input` | `time-input.ct.ts` | Form input field, time picker integration | ⚠️ Minimal (no W3C combobox pattern) |

### Key Insight

**Keyboard navigation tests belong at the *input* layer, not the *picker* layer** because:

1. The W3C Combobox pattern describes **how the input field behaves when focused**:
   - Which keys open it (`ArrowDown`, calendar icon click)
   - Which keys close it (`Escape`)
   - How focus management works (`delegatesFocus`, `focusTrapOptions`)

2. The **picker** is just a utility component that receives method calls from the input:
   - `navigateCalendar()`, `focusActiveDay()`, `isCalendarDayFocused()`
   - These are `@internal` — not part of the public API

3. **Don't test the picker's keyboard** directly because:
   - Arrow keys within the calendar grid are tested implicitly (e.g., day selection tests)
   - `PageUp`/`PageDown` forwarding is tested via the *input's* keyboard tests

### Corollary: No Duplication in Step 8

- **Do NOT** add duplicate keyboard navigation tests to `datetime-picker.ct.ts`
- Tests in `datetime-input.ct.ts` exercise the full stack: input → dropdown → picker → calendar
- The integration tests verify the contract: when input receives `PageUp`, the picker's
  `navigateCalendar()` method is called and the calendar month changes

---

### 1. Time Picker Keyboard Navigation Scope

The W3C Date Picker Combobox spec covers only the calendar grid. The
`ix-time-picker` already handles `ArrowUp`/`ArrowDown` internally for scrolling
through hour/minute/second values. Decide:

- Should `Tab` move naturally from the date grid → time picker → confirm button
  within the focus trap? *(recommended — natural tab order)*
- Or is explicit keyboard forwarding needed for the time section?

### 2. Confirm Button vs. Auto-Close Behavior

`ix-date-input` auto-closes and updates the value as soon as a day is clicked.
`ix-datetime-input` requires a "Confirm" button press. Verify:

- The `handleDateSelect` callback (already wired) correctly closes on confirm.
- `Enter` on a calendar day should **not** auto-close (unlike `date-input`) —
  it should only select the day and let the user proceed to pick a time.

### 3. `isCalendarDayFocused` Guard in Mixed Focus

When the user's focus is inside the time picker section of `ix-datetime-picker`,
`isCalendarDayFocused()` returns `false`. The `handleDatePickerKeyDown` guard
already handles this correctly — but confirm that `PageUp`/`PageDown` etc. do
not fire when focus is in the time picker.

### 4. `ariaLabelCalendarButton` Prop — Breaking Change or Not?

Adding a new optional prop is non-breaking. However, removing `aria-hidden="true"`
from the icon button changes the accessibility tree. Align with the team on
whether this qualifies as a minor or patch change.

---

## Files to Change

| File | Change |
|---|---|
| `packages/core/src/components/datetime-input/datetime-input.tsx` | Steps 1, 3, 4, 5, 6, 7 |
| `packages/core/src/components/datetime-picker/datetime-picker.tsx` | Step 2 |
| `packages/core/src/components/datetime-input/test/datetime-input.ct.ts` | Step 8a (keyboard navigation tests) |
| `packages/core/src/components/datetime-picker/test/datetime-picker.ct.ts` | **No changes** ← see Test Architecture section |
| `.changeset/many-jars-serve.md` (or new changeset) | Document new accessibility behavior |

---

**Related documentation:**
- See [`test-responsibility-analysis.md`](./test-responsibility-analysis.md) for detailed reasoning on why keyboard tests belong in `datetime-input.ct.ts` and not in `datetime-picker.ct.ts`.


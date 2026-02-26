# Test Responsibility Analysis: Picker vs Input Components

## Source of Truth

**This documentation is based on:**
1. ⭐ **Actual code implementations** in `date-input.tsx`, `time-input.tsx`, `datetime-picker.tsx`
2. ✅ **W3C Combobox Pattern** (reference for understanding the architecture)
3. ✅ **Proven test patterns** in `date-input.ct.ts`

**Your approach:** Examine the actual code first, then understand why it follows W3C pattern.

---

## Executive Summary

Keyboard navigation tests for **combobox patterns** belong in the **input component tests**, not the picker tests. The picker is a utility component called by the input; the input owns the W3C accessibility behavior.

---

## Current Test Landscape

### What Exists Today

| Component | File | Type | Keyboard Nav Tests? | Status |
|---|---|---|---|---|
| `ix-date-picker` | `date-picker.ct.ts` | Picker utility | ❌ No | Minimal (render + event tests) |
| `ix-date-input` | `date-input.ct.ts` | Input field | ✅ **Yes** (lines 229–289) | **Complete** |
| `ix-datetime-picker` | `datetime-picker.ct.ts` | Picker utility | ❌ No | Minimal (render + event tests) |
| `ix-datetime-input` | `datetime-input.ct.ts` | Input field | ❌ **Missing** | Needs Step 8 |
| `ix-time-picker` | — | Picker utility | ❌ N/A | Scrolling only |
| `ix-time-input` | `time-input.ct.ts` | Input field | ⚠️ Minimal | No W3C pattern |

---

## Why Keyboard Navigation Tests Belong in the Input

### 1. W3C Combobox Pattern is *Input* Behavior

The [W3C Date Picker Combobox Example](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-datepicker/) defines:

- **Input responsibility:**
  - `role="combobox"`
  - `aria-haspopup="dialog"`
  - `aria-expanded` (toggles when picker opens)
  - `aria-controls` (points to picker)
  - Opens on `ArrowUp`/`ArrowDown`
  - Closes on `Escape`
  - Forwards special keys to picker (`PageUp`, `Home`, `End`)

- **Picker responsibility:**
  - Receives and processes navigation calls
  - Manages internal day/month/year selection
  - Emits selection events

### 2. Picker Methods Are `@internal`

All keyboard-forwarding methods on the picker are marked `@internal`:
- `navigateCalendar()`
- `focusActiveDay()`
- `isCalendarDayFocused()`
- `focusFirstDayOfCurrentWeek()`
- `focusLastDayOfCurrentWeek()`

These are **not public API**; they're only exposed for the input to call. Thus, their behavior is **tested through the input's tests**.

### 3. Test Isolation + Integration

```
Picker tests (date-picker.ct.ts):
├─ Click a day → selection works
├─ Click month button → month changes
└─ Click year button → year changes
   (Arrow keys within grid are implicit)

Input tests (date-input.ct.ts) ✅ Keyboard navigation:
├─ Focus input, press ArrowDown → picker opens
├─ Press PageUp → calls navigateCalendar(-1, false)
├─ Press Home → calls focusFirstDayOfCurrentWeek()
└─ Press Escape → picker closes
   (Tests the *contract* between input and picker)

(No duplication: don't test the picker's arrow keys separately)
```

---

## Example: `date-input.ct.ts` Keyboard Navigation (lines 229–289)

```ts
regressionTest.describe('keyboard navigation', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    // Setup: mount input and focus the calendar
    await mount(`<ix-date-input value="2023/09/05"></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await dateInputElement.locator('input').focus();
    await page.keyboard.press('ArrowDown');
    // Now the calendar is open and focused
  });

  // Test input → picker contract
  regressionTest('Home moves focus to first day of week', async ({ page }) => {
    const dateInputElement = page.locator('ix-date-input');
    await page.keyboard.press('Home');
    // Verifies that:
    // 1. Input received the Home key
    // 2. Input called picker.focusFirstDayOfCurrentWeek()
    // 3. Picker's focus state changed
    await expect(page.locator('[data-calendar-day="4"]')).toBeFocused();
    await page.keyboard.press('Enter');
    // Verifies that selecting the day updates input value
    await expect(dateInputElement).toHaveAttribute('value', '2023/09/04');
  });

  regressionTest('PageUp navigates to previous month', async ({ page }) => {
    const dateInputElement = page.locator('ix-date-input');
    await page.keyboard.press('PageUp');
    // Verifies that:
    // 1. Input received PageUp
    // 2. Input called picker.navigateCalendar(-1, false)
    // 3. Picker's month changed
    await page.keyboard.press('Enter');
    await expect(dateInputElement).toHaveAttribute('value', '2023/08/05');
  });
});
```

**This tests the W3C contract**, not the picker's internal logic.

---

## For `datetime-input`: Same Pattern, No Duplication

### Step 8a: Add keyboard navigation tests to `datetime-input.ct.ts`

Mirror `date-input.ct.ts` structure:

```ts
regressionTest.describe('keyboard navigation', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);
    const dateTimeInputElement = page.locator('ix-datetime-input');
    await dateTimeInputElement.locator('input').focus();
    await page.keyboard.press('ArrowDown');
    // Calendar should be open and focused
  });

  regressionTest('Home moves focus to first day of week', async ({ page }) => {
    // Same as date-input
    await page.keyboard.press('Home');
    await expect(page.locator('[data-calendar-day="5"]')).toBeFocused();
    await page.keyboard.press('Enter');
    // In datetime-input, Enter just selects the day, doesn't close
    // (Close only on Confirm button)
  });

  regressionTest('PageUp navigates to previous month', async ({ page }) => {
    // Same as date-input
    await page.keyboard.press('PageUp');
    await page.keyboard.press('Enter');
    await expect(dateTimeInputElement).toHaveAttribute(
      'value',
      '2024/04/05 09:10:11'
    );
  });

  // Additional: Tab navigation within the focus trap
  regressionTest('Tab moves focus to time picker', async ({ page }) => {
    // After calendar is focused, Tab should move to time picker
    await page.keyboard.press('Tab');
    // Verify time picker section is now focused
    // (Time selection, then confirm)
  });
});
```

### Step 8b: **Do NOT** duplicate tests in `datetime-picker.ct.ts`

The picker tests stay focused on:
- ✅ Selection logic (click day → value changes)
- ✅ Event emission (dateChange, timeChange)
- ✅ Composition (date picker + time picker rendering)

The picker **does not test keyboard navigation** because it's the input's responsibility.

---

## Summary Table

| Responsibility | Owner | Tested Where |
|---|---|---|
| **Open picker on ArrowDown** | `ix-date-input` | `date-input.ct.ts` ✅ |
| **Forward PageUp to picker** | `ix-date-input` | `date-input.ct.ts` ✅ |
| **Close on Escape** | `ix-date-input` | *Not explicitly tested, but can be* |
| **Render calendar grid** | `ix-date-picker` | `date-picker.ct.ts` ✅ |
| **Calculate focused day** | `ix-date-picker` | `date-picker.ct.ts` ✅ (implicit) |
| **Change month on navigateCalendar()** | `ix-date-picker` | *Not directly tested (but verified via input tests)* |
| **Compose date + time** | `ix-datetime-picker` | `datetime-picker.ct.ts` ✅ |
| **Manage form lifecycle** | `ix-datetime-input` | `datetime-input.ct.ts` ✅ (needs Step 8) |

---

## Key Takeaway

**Do NOT add keyboard navigation tests to `datetime-picker.ct.ts`.**

Instead:
1. Add `@Method()` proxies to `datetime-picker.tsx` (Step 2)
2. Add keyboard navigation tests to `datetime-input.ct.ts` (Step 8)
3. The input tests verify the entire stack works correctly

This avoids duplication and keeps responsibility boundaries clean.


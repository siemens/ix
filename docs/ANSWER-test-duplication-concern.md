# Answer: Test Duplication Concern for `datetime-input` Keyboard Navigation

## Your Question

> `Step 8 — Keyboard Navigation CT Tests` has `Add a regressionTest.describe('keyboard navigation', ...) block mirroring the one in date-input.ct.ts. Tests to cover:` does other components (date-input, time-input) have such tests? asking as datetime-input uses datetime-picker under the hood. seems some tests should be added to datetime-picker, and should not be duplicated for datetime-input

## The Answer

**Do NOT add keyboard navigation tests to `datetime-picker.ct.ts`.** Only add them to `datetime-input.ct.ts`.

### Why?

The W3C Combobox pattern keyboard behavior is **an input component responsibility**, not a picker responsibility.

#### Test Landscape Today

```
date-input.ct.ts:
  ✅ Has keyboard navigation tests (lines 229–289)
  ✅ Tests: ArrowDown opens, PageUp/PageDown navigate, Home/End move week, Escape closes

date-picker.ct.ts:
  ❌ NO keyboard navigation tests
  ✅ Tests: Click-based selection, month/year changes, range logic

time-input.ct.ts:
  ✅ Has dropdown integration tests
  ❌ NO keyboard navigation tests (time picker doesn't follow W3C combobox pattern)

datetime-picker.ct.ts:
  ❌ NO keyboard navigation tests
  ✅ Tests: Event emission, render

datetime-input.ct.ts:
  ❌ MISSING keyboard navigation tests ← **Step 8 adds these**
```

#### Architecture

```
The W3C Combobox Pattern:
├─ Input (ix-datetime-input)
│  ├─ role="combobox"
│  ├─ aria-haspopup="dialog"
│  ├─ aria-expanded={this.show}
│  ├─ Owns keyboard behavior:
│  │  ├─ ArrowUp/ArrowDown → open picker
│  │  ├─ PageUp → call picker.navigateCalendar(-1, false)
│  │  ├─ Escape → close picker
│  │  └─ Tested in: datetime-input.ct.ts ✅
│  │
│  └─ Has-a Dropdown
│     └─ Has-a Picker (ix-datetime-picker)
│        └─ Has-a Date Picker (ix-date-picker)
│           ├─ Method: @internal navigateCalendar()
│           ├─ Method: @internal focusActiveDay()
│           ├─ Method: @internal isCalendarDayFocused()
│           └─ NOT tested directly for keyboard
│              (tested indirectly via input contract)
```

### What Gets Tested Where

| Behavior | Component | Test File | How |
|---|---|---|---|
| **User presses ArrowDown** | `ix-datetime-input` | `datetime-input.ct.ts` | ✅ Explicit keyboard test |
| **Picker opens + day focused** | `ix-datetime-picker` + `ix-date-picker` | `datetime-input.ct.ts` | ✅ Verified as side-effect |
| **User presses PageUp** | `ix-datetime-input` | `datetime-input.ct.ts` | ✅ Explicit keyboard test |
| **Picker calls navigateCalendar()** | `ix-datetime-picker` proxy | `datetime-input.ct.ts` | ✅ Verified via assertion |
| **Month changes in calendar** | `ix-date-picker` | `datetime-input.ct.ts` + `date-picker.ct.ts` | ✅ Via click test in date-picker.ct.ts |
| **User clicks day in picker** | `ix-datetime-picker` | `datetime-input.ct.ts` | ✅ Integration test |

---

## The Correct Approach (Step 8)

### Only Update `datetime-input.ct.ts`

Add keyboard navigation tests **at the input level**:

```ts
// datetime-input.ct.ts
regressionTest.describe('keyboard navigation', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);
    const dateTimeInputElement = page.locator('ix-datetime-input');
    await dateTimeInputElement.locator('input').focus();
    await page.keyboard.press('ArrowDown');  // Opens picker
    // Calendar day cell should be focused here
  });

  regressionTest('Home moves to first day of week', async ({ page }) => {
    await page.keyboard.press('Home');
    // Assertion proves: input received key → called picker.focusFirstDayOfCurrentWeek()
    // → calendar day focus changed
    await expect(page.locator('[data-calendar-day="5"]')).toBeFocused();
  });

  regressionTest('PageUp navigates to previous month', async ({ page }) => {
    await page.keyboard.press('PageUp');
    // Assertion proves: input received key → called picker.navigateCalendar(-1, false)
    // → calendar month changed
    await page.keyboard.press('Enter');
    await expect(dateTimeInputElement).toHaveAttribute(
      'value',
      '2024/04/05 09:10:11'
    );
  });

  // etc.
});
```

### Do NOT Update `datetime-picker.ct.ts`

Keep picker tests focused on composition and event logic:

```ts
// datetime-picker.ct.ts (unchanged)
regressionTest('change time', async ({ page }) => {
  // Click to select time
  await page.locator('[data-element-container-id="hour-12"]').click();
  // Verify event fired
  expect(await timeChangeEvent).toBeTruthy();
});

regressionTest('change date', async ({ page }) => {
  // Click to select date
  await page.getByText(/^17$/).click();
  // Verify event fired
  expect(await dateChangeEvent).toBeTruthy();
});

// No keyboard tests here — that's the input's job
```

---

## Why This Avoids Duplication

1. **Single source of truth**: Keyboard behavior is tested at one level (the input)
2. **Clear responsibility**: Picker tests = "Can I select a date by clicking?" Input tests = "Can I use keyboard to open/navigate?"
3. **Composition verification**: Input tests verify the contract: when I press PageUp, does the picker respond correctly?
4. **No test redundancy**: Arrow keys within the calendar grid are implicitly tested (if day selection works, the focus model works)

---

## Comparison: date-input Pattern (Already Done)

`ix-date-input` follows this exact pattern:

| File | Has Keyboard Tests? | Coverage |
|---|---|---|
| `date-input.ct.ts` | ✅ **Yes** (lines 229–289) | ArrowDown, Home, End, PageUp, PageDown, Shift+PageUp, Shift+PageDown, Escape |
| `date-picker.ct.ts` | ❌ **No** | Only click-based selection tests |

**Result:** No duplication, full coverage, clean responsibility boundaries.

---

## For `datetime-input`: Apply the Same Pattern

| File | Change | Keyboard Tests? |
|---|---|---|
| `datetime-input.ct.ts` | **Add Step 8** | ✅ **Yes** (same as date-input) |
| `datetime-picker.ct.ts` | **No change** | ❌ **No** (same as date-picker) |

This is **not duplication** — it's proper layering of component tests.

---

## Summary

- ✅ **datetime-input.ct.ts** needs keyboard navigation tests (Step 8a)
- ❌ **datetime-picker.ct.ts** should NOT have keyboard navigation tests
- The W3C Combobox pattern lives at the **input** layer
- The **picker** is a utility component called by the input
- Tests verify the **contract** between input and picker, not the picker's internal logic alone


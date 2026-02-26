# Source of Truth: Code-Based Reference

## The Hierarchy

```
W3C Standard (Reference)
↓
date-input/time-input/datetime-picker CODE (Source of Truth) ⭐
↓
This Documentation (Guidance)
↓
Your Implementation (datetime-input)
```

---

## What This Means

### W3C Combobox Pattern
**Purpose:** Understand the PRINCIPLES behind the keyboard navigation  
**Where:** https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-datepicker/  
**Use for:** Understanding WHY certain decisions were made  
**Don't use for:** Exact implementation details (may differ from IX codebase)

### Actual Code in date-input/time-input/datetime-picker
**Purpose:** See the actual implementation details  
**Where:** `packages/core/src/components/`  
**Use for:** Copy patterns, understand exact approaches  
**This is:** The source of truth for how IX implements keyboard navigation

### This Documentation
**Purpose:** Explain the patterns and guide implementation  
**Where:** `/docs/` directory  
**Use for:** Understanding what to do and why  
**Don't use for:** Direct copy-paste of all code (some snippets are simplified)

---

## How to Use the Code as Source of Truth

### Step 1: Open the Reference Files
```bash
# Terminal
cd /Users/okaduk/Documents/projects/siemens/ix

# Open these in your editor (side-by-side)
packages/core/src/components/date-input/date-input.tsx
packages/core/src/components/date-input/tests/date-input.ct.ts
packages/core/src/components/time-input/time-input.tsx
packages/core/src/components/datetime-picker/datetime-picker.tsx
```

### Step 2: Review the Code

**In `date-input.tsx`, look for:**
- `@Component()` decorator: `shadow: { delegatesFocus: true }` configuration
- `handleInputKeyDown()` method: Input-level keyboard handling
- `handleDatePickerKeyDown()` method: **THE KEY ONE** - Forwards PageUp, PageDown, Home, End to picker
- `onFocusout` handler: Closes dropdown when focus leaves the component
- `render()` method: `<ix-dropdown>` element with focus trap configuration
- Input element: ARIA attributes (role="combobox", aria-expanded, aria-controls)

**In `date-input.ct.ts`, look for:**
- `keyboard navigation test suite` description block
- Test structure: Setup → action (key press) → assertion → optional select → verify result
- Tests cover: ArrowDown, Home, End, PageUp, PageDown, Shift+PageUp, Shift+PageDown, Escape

**In `time-input.tsx`, look for:**
- Similar input wrapper pattern
- How it handles time picker focus trap
- ARIA attribute patterns

**In `datetime-picker.tsx`, look for:**
- How it composes `ix-date-picker` and `ix-time-picker`
- No keyboard tests needed (picker tests are in the input wrapper)

### Step 3: Take Notes

Create a quick notes file with patterns:
```
date-input.tsx Implementation Pattern:
- delegatesFocus: true (@Component decorator)
- handleDatePickerKeyDown() method
  - Handles: PageUp, PageDown, Home, End, Shift combinations
  - Returns: void (calls preventDefault on event)
- focusTrapOptions: { targetElement: ..., trapFocusInShadowDom: true }
- callbackFocusElement: () => this.datepickerRef.current?.focusActiveDay()
- keyboardActivationKeys: ['ArrowUp', 'ArrowDown']
- onFocusout handler: closes dropdown when focus leaves

date-input.ct.ts Test Pattern:
- beforeEach: Setup with mounted input, focus it, press ArrowDown to open
- Tests: Home, End, PageUp, PageDown, Shift+PageUp, Shift+PageDown, Escape
- Pattern: [setup] → [key press] → [assertion] → [select/confirm] → [verify value]
```

### Step 4: Apply to datetime-input

Use your notes when implementing:
- Copy the exact pattern from `date-input.tsx`
- Replace `datepickerRef` with `datetimePickerRef`
- Mirror test structure from `date-input.ct.ts` keyboard tests
- Replace `date-input.ct.ts` test pattern with `datetime-input.ct.ts`
- Remember: `datetime-picker` adds time picker, same pattern applies

---

## What to Copy vs Adapt

### Copy Exactly
✅ Structure of `delegatesFocus` setting (@Component decorator)
✅ Pattern of `focusTrapOptions` props (render method)
✅ Structure of `handleDatePickerKeyDown()` method
✅ Test structure from `date-input.ct.ts` (keyboard navigation test suite)
✅ ARIA attributes approach (input element)

### Adapt (Don't Copy Exactly)
⚠️ Component names: `date-input` → `datetime-input`
⚠️ Ref names: `datepickerRef` → `datetimePickerRef`
⚠️ Method names: Stay the same, but call `datetimePickerRef`
⚠️ Test focus elements: Calendar days same, but watch for time picker interference

### Don't Copy (Different Responsibility)
❌ `datetime-picker.ct.ts` - No keyboard tests here
❌ Event names/payloads that differ between pickers
❌ Time-specific logic (that's handled by `ix-time-picker` internally)

---

## Reference Files Map

```
Date Input (Source of Truth for Input Pattern):
├─ packages/core/src/components/date-input/
│  ├─ date-input.tsx ⭐
│  │   ├─ @Component decorator: delegatesFocus config
│  │   ├─ render() method: dropdown configuration
│  │   ├─ handleDatePickerKeyDown() method: keyboard forwarding
│  │   └─ Input element: ARIA attributes
│  ├─ date-input.scss
│  └─ tests/
│     └─ date-input.ct.ts ⭐ (keyboard navigation test suite)

Time Input (Reference for Time-Specific Patterns):
├─ packages/core/src/components/time-input/
│  ├─ time-input.tsx ⭐ (similar input wrapper patterns)
│  ├─ time-input.scss
│  └─ test/
│     └─ time-input.ct.ts

DateTime Picker (Reference for Composition):
├─ packages/core/src/components/datetime-picker/
│  ├─ datetime-picker.tsx ⭐ (composition, no keyboard tests)
│  ├─ datetime-picker.scss
│  └─ test/
│     └─ datetime-picker.ct.ts (Event tests only)

Your Target (What You're Implementing):
├─ packages/core/src/components/datetime-input/
│  ├─ datetime-input.tsx (MIRROR: date-input.tsx pattern)
│  ├─ datetime-input.scss
│  └─ test/
│     └─ datetime-input.ct.ts (MIRROR: date-input.ct.ts pattern)
```

---

## Verification Against Source of Truth

After implementing each step, verify:

### Step 1: delegatesFocus
```ts
// date-input.tsx line ~50:
shadow: { delegatesFocus: true },

// datetime-input.tsx should have:
shadow: { delegatesFocus: true },  ✅ SAME
```

### Step 2: focusTrapOptions
```ts
// date-input.tsx line ~597:
focusTrapOptions={{
  targetElement: this.datepickerRef,
  trapFocusInShadowDom: true,
}}

// datetime-input.tsx should have:
focusTrapOptions={{
  targetElement: this.datetimePickerRef,  ✅ ADAPTED NAME
  trapFocusInShadowDom: true,
}}
```

### Step 4: handleDatePickerKeyDown Pattern
```ts
// date-input.tsx lines ~401-420:
private async handleDatePickerKeyDown(event: KeyboardEvent) {
  event.preventDefault();

  if (!this.datepickerRef.current) {
    return;
  }

  if (!(await this.datepickerRef.current.isCalendarDayFocused())) {
    return;
  }

  switch (event.key) {
    case 'PageUp':
      await this.datepickerRef.current.navigateCalendar(-1, event.shiftKey);
      break;
    // ... etc
  }
}

// datetime-input.tsx should be:
// SAME STRUCTURE, just replace datepickerRef with datetimePickerRef
```

### Step 8: Test Pattern
```ts
// date-input.ct.ts line ~229:
regressionTest.describe('keyboard navigation', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mount(`<ix-date-input value="2023/09/05"></ix-date-input>`);
    const dateInputElement = page.locator('ix-date-input');
    await dateInputElement.locator('input').focus();
    await page.keyboard.press('ArrowDown');
    await expect(page.locator('[data-calendar-day="5"]')).toBeFocused();
  });

  regressionTest('Home moves focus to first day of week', async ({ page }) => {
    const dateInputElement = page.locator('ix-date-input');
    await page.keyboard.press('Home');
    await expect(page.locator('[data-calendar-day="4"]')).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(dateInputElement).toHaveAttribute('value', '2023/09/04');
  });
  // ... more tests
});

// datetime-input.ct.ts should be:
// SAME PATTERN, just change:
// - 'ix-date-input' → 'ix-datetime-input'
// - value="2023/09/05" → value="2024/05/05 09:10:11"
// - date expectations → datetime expectations
```

---

## When Documentation and Code Differ

**Resolution Priority:**

1. ⭐ **Trust the code** (date-input/time-input/datetime-picker)
2. ✅ **Then check documentation** (these docs)
3. ✅ **Then reference W3C** (for understanding)

If you find a discrepancy:
- Assume the code is correct
- The documentation might be simplified
- W3C is the standard, but code shows IX's specific implementation

---

## Quick Reference While Implementing

Keep this side-by-side with `date-input.tsx`:

| Component | File Location | Key Section to Review |
|---|---|---|
| Shadow config | `date-input.tsx` | @Component decorator |
| Input ARIA attrs | `date-input.tsx` | Input element in render() |
| onFocus handler | `date-input.tsx` | Input's onFocus attribute |
| onFocusout handler | `date-input.tsx` | Host element's onFocusout attribute |
| Keyboard method | `date-input.tsx` | handleDatePickerKeyDown() method |
| Dropdown props | `date-input.tsx` | render() method, dropdown configuration |
| Tests | `date-input.ct.ts` | keyboard navigation test suite |

---

## You're Ready

Now that you understand the hierarchy:

1. ✅ Open the actual code files
2. ✅ Review the patterns (copy them to your notes)
3. ✅ Follow IMPLEMENTATION-CHECKLIST.md (referencing code)
4. ✅ Verify your work against source of truth

**Start by:** Opening `date-input.tsx` in your editor right now.


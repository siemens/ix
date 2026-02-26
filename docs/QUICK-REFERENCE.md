# Quick Reference: Implement `ix-datetime-input` Component

## Your PR Goal

**Implement a new `ix-datetime-input` component based on proven patterns from `date-input`, `time-input`, and `datetime-picker`**

The PR is building a new input component that:
- ✅ Combines date and time selection (like `datetime-picker`)
- ✅ Wraps it in an input field (like `date-input` and `time-input`)
- ✅ Follows the same architectural patterns as `date-input`
- ✅ Adopts the latest keyboard navigation from `poc/dropdown-focus-trap`
- ✅ Complies with W3C ARIA combobox pattern

## Context: Why Rebase on poc/dropdown-focus-trap?

Your PR was initially from `origin/main`, but **a parallel implementation** added comprehensive keyboard navigation support to the IX codebase. By rebasing on `poc/dropdown-focus-trap`, the new `datetime-input` component automatically gets:

- ✅ Latest keyboard navigation patterns (`date-input` has them)
- ✅ Latest focus trap improvements (the whole point of the POC)
- ✅ Latest ARIA compliance patterns
- ✅ Proven approach from `date-input`, `time-input`, `datetime-picker`

So the new `datetime-input` can be built correctly from the start, instead of adding keyboard support after the fact.

---

## What datetime-input Should Do

The new `datetime-input` component should:

1. ✅ Combine date selection (from `datetime-picker`) + time selection
2. ✅ Provide an input field wrapper (like `date-input` does for `date-picker`)
3. ✅ Support full keyboard navigation (from `poc/dropdown-focus-trap`)
4. ✅ Have proper ARIA attributes (W3C combobox pattern)
5. ✅ Have comprehensive tests (including keyboard tests)
6. ✅ Mirror `date-input` architecture (proven pattern)

---

## Source of Truth

| Reference | Purpose |
|---|---|
| **`date-input.tsx` code** | ⭐ **SOURCE OF TRUTH** - Input wrapper architecture |
| **`date-input.ct.ts` tests** | ⭐ **SOURCE OF TRUTH** - Test patterns (including keyboard) |
| **`time-input.tsx` code** | ⭐ **SOURCE OF TRUTH** - Time input implementation |
| **`datetime-picker.tsx` code** | ⭐ **SOURCE OF TRUTH** - Date+time composition |
| **`poc/dropdown-focus-trap` branch** | Latest keyboard navigation patterns |
| **W3C Combobox Pattern** | Standard reference: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-datepicker/ |

**Your approach:** Build `datetime-input` by mirroring the architecture from `date-input`, adopting the keyboard patterns from `poc/dropdown-focus-trap`.

---

## Implementation Approach

The new `datetime-input` should combine:

1. **Architecture from `date-input`:** How to wrap a picker in an input field
2. **Content from `datetime-picker`:** Date + time selection logic
3. **Keyboard navigation from `poc/dropdown-focus-trap`:** Latest patterns
4. **Tests pattern from `date-input.ct.ts`:** Including keyboard navigation tests

```
datetime-input = 
  date-input structure (input wrapper)
  + datetime-picker content (date + time)
  + poc/dropdown-focus-trap keyboard patterns
  + date-input test patterns (including keyboard)
```

---

## The Pattern

| Component | Role | What datetime-input Should Do |
|---|---|---|
| **date-input** | Input wrapper for date picker | Mirror this architecture |
| **datetime-picker** | Combines date + time pickers | Use this as content |
| **date-input keyboard** | Full W3C combobox keyboard nav | Adopt this approach |
| **time-input** | Input wrapper for time picker | Reference for time patterns |
| **poc/dropdown-focus-trap** | Latest focus trap + keyboard | Use latest patterns |

---

## Not Just Keyboard Navigation

While keyboard navigation is **part** of this PR, the full goal includes:

✅ **Component structure** - Input field wrapper (from `date-input`)  
✅ **Content** - Date + time selection (from `datetime-picker`)  
✅ **Keyboard navigation** - Full W3C pattern support (from `poc/dropdown-focus-trap`)  
✅ **ARIA compliance** - Proper attributes (W3C standard)  
✅ **Tests** - All test types including keyboard (from `date-input` pattern)  
✅ **Architecture** - Clean separation of concerns (from `date-input`)  
✅ **Documentation** - Clear implementation guide (these docs)  

---

## Key Points

1. **This is a new component** - Not just adding keyboard to existing component
2. **It's based on proven patterns** - From `date-input`, `time-input`, `datetime-picker`
3. **It adopts latest keyboard support** - From `poc/dropdown-focus-trap` POC
4. **It combines date + time** - Like `datetime-picker`, but with input wrapper
5. **It's comprehensive** - Structure, content, keyboard, ARIA, tests, all together

---

## Files to Change

The complete implementation requires changes to:

1. **Create new component:** `packages/core/src/components/datetime-input/datetime-input.tsx`
2. **Create tests:** `packages/core/src/components/datetime-input/test/datetime-input.ct.ts`
3. **Update picker:** `packages/core/src/components/datetime-picker/datetime-picker.tsx` (expose methods)
4. **Update changeset:** Document new component and its features

---

## Next Steps

1. **Review actual code** first (use SOURCE-OF-TRUTH.md)
2. **Understand the architecture** (how `date-input` wraps `date-picker`)
3. **Understand the composition** (how `datetime-picker` combines date + time)
4. **Understand the keyboard patterns** (from `poc/dropdown-focus-trap`)
5. **Build the component** - following all proven patterns

---

## Documentation Files

| File | Purpose |
|---|---|
| `SOURCE-OF-TRUTH.md` | Code review guide - start here |
| `datetime-input-wai-aria-plan.md` | Full implementation plan with details |
| `test-responsibility-analysis.md` | Detailed reasoning on test architecture |
| `ANSWER-test-duplication-concern.md` | Your specific question answered |
| `IMPLEMENTATION-CHECKLIST.md` | Step-by-step checklist for implementation |
| `QUICK-REFERENCE.md` | This file — overview only |

---

## Summary

This PR is **building a complete new component** that combines:

✅ Input wrapper pattern (from `date-input`)  
✅ Date + time composition (from `datetime-picker`)  
✅ Latest keyboard navigation (from `poc/dropdown-focus-trap`)  
✅ Comprehensive testing (from `date-input` pattern)  
✅ W3C ARIA compliance (standard reference)  

**Not just keyboard navigation - full component implementation.**

---

## The Pattern

| Component | Role | Keyboard Tests? | Example File |
|---|---|---|---|
| **Input** (ix-date-input) | Combobox behavior | ✅ Yes | `date-input.ct.ts` lines 229–289 |
| **Picker** (ix-date-picker) | Utility component | ❌ No | `date-picker.ct.ts` (click tests only) |
| **Input** (ix-time-input) | Form field | ⚠️ Minimal | `time-input.ct.ts` (no combobox pattern) |
| **Picker** (ix-time-picker) | Scrolling utility | ❌ N/A | No dedicated tests |
| **Composite** (ix-datetime-picker) | Container | ❌ No | `datetime-picker.ct.ts` (minimal tests) |
| **Input** (ix-datetime-input) | **Combobox behavior** | ✅ **Add tests** | `datetime-input.ct.ts` ← Step 8 |

---

## Files to Change

### Step 2: Expose Methods (datetime-picker)

```tsx
// packages/core/src/components/datetime-picker/datetime-picker.tsx
@Method()
async focusActiveDay(): Promise<void> {
  return this.datePickerElement?.focusActiveDay();
}
// ... (add 4 more similar methods)
```

### Steps 1, 3, 4, 5, 6, 7: Core Implementation (datetime-input)

```tsx
// packages/core/src/components/datetime-input/datetime-input.tsx

// Step 1: delegatesFocus
@Component({
  shadow: { delegatesFocus: true },  // ← Changed from 'true'
})

// Step 3: Wire dropdown
<ix-dropdown
  focusTrapOptions={{
    targetElement: this.datetimePickerRef,
    trapFocusInShadowDom: true,
  }}
  callbackFocusElement={() => {
    this.datetimePickerRef.current?.focusActiveDay();
    return true;
  }}
  keyboardActivationKeys={['ArrowUp', 'ArrowDown']}
/>

// Step 4: Keyboard forwarding
private async handleDatePickerKeyDown(event: KeyboardEvent) {
  // Forwards PageUp, PageDown, Home, End to picker
}

// Step 5: ARIA attributes on input
<input
  role="combobox"
  aria-haspopup="dialog"
  aria-expanded={this.show ? 'true' : 'false'}
  aria-controls="datetime-picker-dialog"
/>

// Step 6: onFocusout handler
<Host onFocusout={(e) => { /* close on blur */ }}>

// Step 7: Remove auto-open
onFocus={() => {
  // Remove: this.openDropdown();
  this.ixFocus.emit();
}}
```

### Step 8a: Keyboard Tests (datetime-input.ct.ts)

```ts
// packages/core/src/components/datetime-input/test/datetime-input.ct.ts

regressionTest.describe('keyboard navigation', () => {
  regressionTest.beforeEach(async ({ mount, page }) => {
    await mount(`<ix-datetime-input value="2024/05/05 09:10:11"></ix-datetime-input>`);
    // Focus input and open picker via ArrowDown
    await page.locator('input').focus();
    await page.keyboard.press('ArrowDown');
    // Calendar should be open and focused
  });

  regressionTest('Home moves focus to first day of week', async ({ page }) => {
    await page.keyboard.press('Home');
    await expect(page.locator('[data-calendar-day="5"]')).toBeFocused();
    await page.keyboard.press('Enter');
    // Value should have changed
  });

  regressionTest('PageUp navigates to previous month', async ({ page }) => {
    await page.keyboard.press('PageUp');
    await page.keyboard.press('Enter');
    // Month should change in value
  });

  // Add PageDown, Shift+PageUp, Shift+PageDown, End, Escape, Tab tests
});
```

### Step 8b: No Changes to datetime-picker.ct.ts

```ts
// packages/core/src/components/datetime-picker/test/datetime-picker.ct.ts
// ❌ NO KEYBOARD TESTS ADDED
// Keep existing click/event tests only
```

---

## Implementation Checklist

- [ ] Step 1: Change `shadow: true` → `shadow: { delegatesFocus: true }`
- [ ] Step 2: Add 5 `@Method()` proxies to `datetime-picker`
- [ ] Step 3: Add `focusTrapOptions`, `callbackFocusElement`, `keyboardActivationKeys` to dropdown
- [ ] Step 4: Add `handleDatePickerKeyDown` method and wire it
- [ ] Step 5: Add combobox ARIA attributes to input + dropdown id
- [ ] Step 6: Add `onFocusout` handler to `<Host>`
- [ ] Step 7: Remove auto-open from `onFocus`
- [ ] Step 8a: Add keyboard navigation tests to `datetime-input.ct.ts`
- [ ] Step 8b: Verify NO changes to `datetime-picker.ct.ts`
- [ ] Step 9: Update changeset

---

## Key Points

1. **Code is the source of truth** — Review actual `date-input`/`time-input` code first
2. **W3C is the standard reference** — Explains why the pattern is correct
3. **This documentation is guidance** — Helps you understand what to do
4. **No duplication** — Only the *input* tests keyboard behavior, not the picker
5. **Same pattern as `date-input`** — Follow the existing, proven architecture
6. **Tests verify the contract** — When input sends a key, does the picker respond correctly?
7. **Picker methods are `@internal`** — They're only for the input to call, not public API

---

## Documentation Files

| File | Purpose |
|---|---|
| `datetime-input-wai-aria-plan.md` | Full 8-step implementation plan with details |
| `test-responsibility-analysis.md` | Detailed reasoning on test architecture |
| `ANSWER-test-duplication-concern.md` | Your specific question answered with examples |
| `IMPLEMENTATION-CHECKLIST.md` | Step-by-step checklist for implementation |
| `QUICK-REFERENCE.md` | This file — overview only |

---

## References

- **W3C Date Picker Combobox:** https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-datepicker/
- **Branch:** `feature/IX-3861-datetime-input` (rebased on `poc/dropdown-focus-trap`)
- **Reference impl:** `date-input.tsx` + `date-input.ct.ts` (already complete)
- **Related:** `CONTRIBUTING.md` in the Siemens IX repo

---

## Summary

This is **not just about adding tests**. It's about implementing the full **W3C Combobox pattern** for keyboard navigation:

✅ All keyboard interaction logic in the **input component** (`datetime-input`)  
✅ Picker components provide **methods** that input calls  
✅ Comprehensive **keyboard tests** in the input test file  
✅ Proper **ARIA attributes** for accessibility  
✅ **Focus management** with trap and delegation  

**Result:** `datetime-input` aligns with `date-input` and other picker components using the same proven architecture.

The test duplication concern is **part of this larger picture** - tests belong in the input because the input owns the keyboard navigation responsibility.


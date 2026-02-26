# Implementation Guide: `ix-datetime-input` Component

## Overview

This directory contains comprehensive documentation for implementing a **new `ix-datetime-input` component** for the Siemens IX design system.

**The PR goal is:** Build a complete new input component that combines date + time selection, based on proven patterns from `date-input`, `time-input`, and `datetime-picker`, with the latest keyboard navigation from `poc/dropdown-focus-trap`.

**Branch:** `feature/IX-3861-datetime-input` (rebased on `poc/dropdown-focus-trap`)

**Why rebased on `poc/dropdown-focus-trap`?** The POC branch contains latest keyboard navigation patterns developed in parallel. By rebasing, the new `datetime-input` adopts these patterns from the start, ensuring it aligns with the latest IX keyboard accessibility approach.

---

## What You're Building

The new `datetime-input` component should:

✅ Combine date + time selection (like `datetime-picker`)  
✅ Wrap them in an input field (like `date-input` wraps `date-picker`)  
✅ Support full keyboard navigation (from `poc/dropdown-focus-trap`)  
✅ Have W3C ARIA combobox compliance  
✅ Have comprehensive tests including keyboard tests  
✅ Follow the clean architecture of `date-input`

---

## The Documents

### 0. **EXECUTIVE-SUMMARY.md** ⭐ Management Overview
   - **What:** High-level project summary
   - **For whom:** Management, stakeholders, new team members
   - **Contents:** Goals, timeline, approach, success criteria
   - **Read time:** 5 minutes

### 1. **QUICK-REFERENCE.md** ⭐ Start here
   - **What:** TL;DR version of everything
   - **For whom:** Anyone who wants the summary
   - **Contents:** Pattern explanation, file changes, checklist
   - **Read time:** 5 minutes

### 2. **SOURCE-OF-TRUTH.md** 📚 Reference hierarchy
   - **What:** Explains what to trust (code vs docs vs W3C)
   - **For whom:** All developers
   - **Contents:** Hierarchy of references, code review guide, line numbers
   - **Read time:** 3 minutes

### 3. **ANSWER-test-duplication-concern.md** ⭐ Read if you asked the question
   - **What:** Addresses your concern about test duplication
   - **For whom:** You (the original asker)
   - **Contents:** Why tests go in `datetime-input.ct.ts`, not `datetime-picker.ct.ts`
   - **Example:** Comparison of `date-input` pattern
   - **Read time:** 8 minutes

### 4. **datetime-input-wai-aria-plan.md** ⭐ Complete implementation guide
   - **What:** Full 8-step plan with code examples
   - **For whom:** Developers implementing the feature
   - **Contents:** 
     - Step 1–8 (detailed)
     - Code snippets for each step
     - Open questions/decisions
     - Files to change
     - Test architecture section
   - **Read time:** 15 minutes

### 5. **test-responsibility-analysis.md** 📚 Deep dive on testing
   - **What:** Explanation of test architecture across all picker/input components
   - **For whom:** QA engineers, architects, curious developers
   - **Contents:**
     - Test landscape table
     - Why keyboard tests belong at input layer
     - Example: How `date-input` tests work
     - Architecture diagram
   - **Read time:** 12 minutes

### 6. **IMPLEMENTATION-CHECKLIST.md** ✅ Step-by-step checklist
   - **What:** Checkbox-based implementation guide
   - **For whom:** Developers actively implementing
   - **Contents:**
     - Checkbox for each step (1–9)
     - Code to copy/paste
     - Verification commands
     - Test execution commands
   - **Read time:** 10 minutes (reference guide)

### 7. **INDEX.md** (this file)
   - **What:** Navigation and overview
   - **For whom:** Everyone
   - **Contents:** This index, reading paths, file structure

---

## Reading Paths

### For Project Managers / Leads
1. EXECUTIVE-SUMMARY.md (5 min overview)
2. QUICK-REFERENCE.md (5 min summary)
3. datetime-input-wai-aria-plan.md (context + timeline)

### For Developers (Recommended Path)
1. SOURCE-OF-TRUTH.md (understand hierarchy + review actual code)
2. QUICK-REFERENCE.md (summary)
3. IMPLEMENTATION-CHECKLIST.md (follow step-by-step)
4. datetime-input-wai-aria-plan.md (reference for details)

### For QA / Testing
1. ANSWER-test-duplication-concern.md (test architecture overview)
2. test-responsibility-analysis.md (why tests are structured this way)
3. IMPLEMENTATION-CHECKLIST.md (Step 8 validation)

### For Code Reviewers
1. EXECUTIVE-SUMMARY.md (context)
2. QUICK-REFERENCE.md (summary)
3. datetime-input-wai-aria-plan.md (what changed and why)
4. IMPLEMENTATION-CHECKLIST.md (files to audit)

### For Understanding Test Architecture
1. ANSWER-test-duplication-concern.md (directly addresses test placement)
2. test-responsibility-analysis.md (architectural reasoning)
3. QUICK-REFERENCE.md (summary of pattern)

---

## Quick Facts

| Question | Answer | Reference |
|---|---|---|
| What's the project about? | Build new `datetime-input` component | EXECUTIVE-SUMMARY.md, QUICK-REFERENCE.md |
| What is source of truth? | Actual code in `date-input`, `time-input`, `datetime-picker` | SOURCE-OF-TRUTH.md |
| Where should I review code? | `date-input.tsx`, `date-input.ct.ts`, `time-input.tsx`, `datetime-picker.tsx` | SOURCE-OF-TRUTH.md |
| Do other components have keyboard tests? | ✅ Yes, `date-input` does | test-responsibility-analysis.md |
| Should I add tests to `datetime-picker`? | ❌ No | ANSWER-test-duplication-concern.md |
| Where do keyboard tests go? | `datetime-input.ct.ts` | QUICK-REFERENCE.md |
| Why not duplicate in both? | Responsibility separation | test-responsibility-analysis.md |
| How many steps? | 8 implementation steps | datetime-input-wai-aria-plan.md |
| What pattern to follow? | Same as `date-input` | QUICK-REFERENCE.md |
| Why rebased on `poc/dropdown-focus-trap`? | Latest keyboard patterns | QUICK-REFERENCE.md, EXECUTIVE-SUMMARY.md |
| Is there a checklist? | ✅ Yes | IMPLEMENTATION-CHECKLIST.md |

---

## Implementation Timeline

**Estimated effort:** 4–6 hours

| Step | Complexity | Time | Notes |
|---|---|---|---|
| Step 1 (shadow config) | 🟢 Easy | 5 min | One-line change |
| Step 2 (methods) | 🟢 Easy | 10 min | Copy-paste 5 methods |
| Step 3 (dropdown props) | 🟢 Easy | 10 min | Three props |
| Step 4 (key forwarding) | 🟡 Medium | 15 min | Switch statement |
| Step 5 (ARIA) | 🟡 Medium | 15 min | Four attributes + optional prop |
| Step 6 (onFocusout) | 🟢 Easy | 10 min | Single handler |
| Step 7 (remove auto-open) | 🟢 Easy | 5 min | One-line removal |
| Step 8a (tests) | 🟡 Medium | 90 min | ~10 test cases |
| Step 8b (no changes) | 🟢 Easy | 0 min | Verification only |
| Step 9 (changeset) | 🟢 Easy | 5 min | Document changes |

**Total:** ~3.5 hours coding + ~0.5–1 hours testing + ~0.5 hours documentation

---

## Key Concepts

### W3C Combobox Pattern
A specific accessibility pattern for input controls with dropdowns. Defines:
- **Opening:** Arrow keys, click
- **Navigation:** Home, End, Page Up/Down
- **Selection:** Enter, Space
- **Closing:** Escape
- **Focus trap:** Tab/Shift+Tab cycle
- **ARIA:** `role="combobox"`, `aria-expanded`, `aria-controls`

### Responsibility Separation
- **Input (`ix-datetime-input`):** W3C combobox behavior (keyboard, ARIA, focus management)
- **Picker (`ix-datetime-picker`):** Utility component (composition of date + time)
- **Calendar (`ix-date-picker`):** Grid logic (day selection, month/year navigation)

### Test Layer Ownership
| Behavior | Owner | Tested Via |
|---|---|---|
| Press ArrowDown → picker opens | Input | `datetime-input.ct.ts` |
| Picker opens → calendar focused | Input | `datetime-input.ct.ts` |
| Press PageUp → month changes | Input | `datetime-input.ct.ts` |
| Click day → value updates | Picker | `datetime-picker.ct.ts` or `datetime-input.ct.ts` |

### Example Test Cases (from Step 8)

These are the types of keyboard navigation tests you'll implement in `datetime-input.ct.ts`:

```typescript
// Test 1: Open picker with ArrowDown + verify focus on active day
regressionTest('ArrowDown opens picker and focuses active day', async ({ page }) => {
  const input = page.locator('ix-datetime-input input');
  await input.focus();
  await page.keyboard.press('ArrowDown');
  
  // Verify picker is visible and day is focused
  await expect(page.locator('[data-calendar-day="5"]')).toBeFocused();
});

// Test 2: Navigate month with PageUp (previous month)
regressionTest('PageUp navigates to previous month', async ({ page }) => {
  const input = page.locator('ix-datetime-input input');
  await input.focus();
  await page.keyboard.press('ArrowDown'); // Open picker
  
  await page.keyboard.press('PageUp'); // Go to previous month
  await page.keyboard.press('Enter'); // Select day
  
  await expect(input).toHaveValue(/2023\/08\/05/); // Month changed
});

// Test 3: Home moves to first day of week
regressionTest('Home moves focus to first day of current week', async ({ page }) => {
  const input = page.locator('ix-datetime-input input');
  await input.focus();
  await page.keyboard.press('ArrowDown'); // Open picker
  
  await page.keyboard.press('Home'); // Go to first day of week
  await expect(page.locator('[data-calendar-day="4"]')).toBeFocused();
});

// Test 4: Escape closes picker and returns focus to input
regressionTest('Escape closes picker and returns focus to input', async ({ page }) => {
  const input = page.locator('ix-datetime-input input');
  const dropdown = page.locator('ix-dropdown');
  
  await input.focus();
  await page.keyboard.press('ArrowDown'); // Open picker
  await expect(dropdown).toHaveClass(/show/);
  
  await page.keyboard.press('Escape'); // Close picker
  await expect(dropdown).not.toHaveClass(/show/);
  await expect(input).toBeFocused(); // Focus back to input
});

// Test 5: Shift+PageDown navigates to next year
regressionTest('Shift+PageDown navigates to next year', async ({ page }) => {
  const input = page.locator('ix-datetime-input input');
  await input.focus();
  await page.keyboard.press('ArrowDown'); // Open picker
  
  await page.keyboard.press('Shift+PageDown'); // Go to next year
  await page.keyboard.press('Enter');
  
  await expect(input).toHaveValue(/2024\/05\/05/); // Year changed
});
```

---

## Cross-Reference Standards

When referencing code in other documentation files, use **stable references** instead of fragile line numbers:

### ❌ Don't Use Line Numbers (They Drift Over Time)
```
❌ date-input.tsx (lines 50–70)
❌ date-input.tsx (lines 550–610)
❌ date-input.ct.ts (lines 229–289)
❌ time-input.tsx (lines 100–150)
```

### ✅ Use Stable References (Survive Code Changes)
```
✅ date-input.tsx (@Component decorator with shadow config)
✅ date-input.tsx (render() method, dropdown configuration section)
✅ date-input.tsx (handleDatePickerKeyDown() method)
✅ date-input.ct.ts (keyboard navigation test suite)
✅ time-input.tsx (input wrapper implementation)
✅ datetime-picker.tsx (composition pattern for date + time)
```

### Time-Sensitive Reference

**Note:** Line numbers and code examples current as of **February 26, 2026**. Use them as approximate guides only. When referencing code:

1. ✅ **Primary:** Use method names or section descriptions
2. ✅ **Secondary:** Use file names and feature areas
3. ⚠️ **Tertiary:** Line numbers as verification only (they may have shifted)

### Example Corrections

| What We Said | Better Way |
|---|---|
| `date-input.tsx (line 50)` | `date-input.tsx (@Component decorator)` |
| `date-input.tsx (lines 550-610)` | `date-input.tsx (render() method, dropdown configuration)` |
| `date-input.ct.ts (lines 229-289)` | `date-input.ct.ts (keyboard navigation test suite)` |
| `date-input.tsx (line 401)` | `date-input.tsx (handleDatePickerKeyDown() method)` |

---

## Key Concepts

Before considering implementation complete:

- [ ] All 8 steps implemented
- [ ] `pnpm build --filter @siemens/ix` passes
- [ ] `pnpm test --filter @siemens/ix datetime-input` passes (all tests)
- [ ] `pnpm test --filter @siemens/ix datetime-picker` passes (unchanged)
- [ ] New keyboard navigation tests added to `datetime-input.ct.ts`
- [ ] **No** keyboard tests added to `datetime-picker.ct.ts`
- [ ] ARIA attributes match W3C pattern
- [ ] TypeScript compiles without errors
- [ ] Changeset documented
- [ ] All 8 documentation files reviewed by team

---

## Related Resources

### External
- **W3C Date Picker Combobox:** https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-datepicker/
- **MDN Combobox:** https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role

### Internal (Siemens IX)
- **Reference:** `packages/core/src/components/date-input/` (already complete)
- **Reference:** `packages/core/src/components/date-input/tests/date-input.ct.ts` (keyboard tests example)
- **Branch:** `poc/dropdown-focus-trap` (foundation)
- **Contributing:** `CONTRIBUTING.md`

---

## FAQ

**Q: Do I need to change `datetime-picker.ct.ts`?**
A: No. Keep it unchanged. Keyboard tests go in `datetime-input.ct.ts`.

**Q: Why isn't this in the picker?**
A: The W3C Combobox pattern is input-level behavior. Picker is a utility. See `test-responsibility-analysis.md`.

**Q: Can I copy code from `date-input`?**
A: Yes! The code is very similar. Just replace `datepickerRef` with `datetimePickerRef` and adjust for the extra time picker.

**Q: How many tests should I write?**
A: Aim for the same set as `date-input.ct.ts` (lines 229–289): ArrowDown, Home, End, PageUp, PageDown, Shift+PageUp, Shift+PageDown, Escape, Tab.

**Q: What about the time picker keyboard?**
A: The W3C pattern doesn't cover time pickers. Tab should move naturally between date grid → time picker → confirm button (inside the focus trap). The time picker's own scroll behavior is separate.

---

## Contact / Questions

If you have questions after reading these docs:
1. Check the relevant section again
2. Review the code examples in `QUICK-REFERENCE.md` or `IMPLEMENTATION-CHECKLIST.md`
3. Look at `date-input.tsx` for the reference implementation
4. Reach out to the team with specifics

---

## File Structure

```
docs/
├── EXECUTIVE-SUMMARY.md (management overview)
├── QUICK-REFERENCE.md (5 min summary)
├── SOURCE-OF-TRUTH.md (code review hierarchy)
├── ANSWER-test-duplication-concern.md (your question)
├── datetime-input-wai-aria-plan.md (full plan)
├── test-responsibility-analysis.md (testing architecture)
├── IMPLEMENTATION-CHECKLIST.md (step-by-step guide)
└── INDEX.md (this file - navigation)
```

---

**Last Updated:** February 26, 2026  
**Status:** Ready for implementation  
**Branch:** `feature/IX-3861-datetime-input`


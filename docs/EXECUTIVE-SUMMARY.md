# Executive Summary: Implement `ix-datetime-input` Component

**Status:** ✅ Ready for Implementation  
**Date:** February 26, 2026  
**Branch:** `feature/IX-3861-datetime-input` (rebased on `poc/dropdown-focus-trap`)

---

## The PR Goal

### What You're Building

**A new `ix-datetime-input` component** for the Siemens IX design system that:

- ✅ Combines date + time selection (from `datetime-picker`)
- ✅ Wraps them in an input field (from `date-input` pattern)
- ✅ Supports full keyboard navigation (from `poc/dropdown-focus-trap`)
- ✅ Has W3C ARIA combobox compliance
- ✅ Has comprehensive tests
- ✅ Follows clean architecture principles

### Why Rebase on poc/dropdown-focus-trap?

Your PR was originally from `origin/main`, but:
- A **parallel implementation** added keyboard navigation support to `date-input`, `time-input`, and other components
- This keyboard support is now available in the `poc/dropdown-focus-trap` branch
- By rebasing, the new `datetime-input` **adopts these latest patterns from the start**
- Instead of building the component first, then adding keyboard support later

**Result:** The new component can be implemented correctly from day one with latest best practices.

---

## Not Just Keyboard Navigation

While keyboard navigation is **part** of this work, the full implementation includes:

✅ **Component structure** (input wrapper pattern from `date-input`)
✅ **Content logic** (date + time from `datetime-picker`)
✅ **Keyboard support** (latest from `poc/dropdown-focus-trap`)
✅ **ARIA compliance** (W3C Combobox pattern)
✅ **Comprehensive tests** (all types including keyboard)
✅ **Clean architecture** (input owns keyboard, picker is utility)

---

## The Pattern (Simple Summary)

```
PRINCIPLE: Keyboard navigation tests belong at the INPUT layer

INPUT COMPONENT (ix-date-input)
└─ ✅ Has keyboard navigation tests
   Tests: ArrowDown opens, PageUp/Down navigate, Home/End move, Escape closes

PICKER COMPONENT (ix-date-picker)
└─ ❌ NO keyboard navigation tests
   Tests: Click-based selection, month/year changes, range logic only

Same pattern as date-input:
- ix-date-input    ✅ Has keyboard tests (keyboard navigation test suite)
- ix-date-picker   ❌ No keyboard tests (selection/composition only)
```

---

## Implementation Scope

### 8 Steps + Changeset

| Step | Component | Action | Time | Complexity |
|---|---|---|---|---|
| 1 | datetime-input | Change `shadow: true` → `shadow: { delegatesFocus: true }` | 5 min | 🟢 Easy |
| 2 | datetime-picker | Add 5 `@Method()` proxies | 10 min | 🟢 Easy |
| 3 | datetime-input | Wire dropdown (focusTrapOptions, callbackFocusElement, keyboardActivationKeys) | 10 min | 🟢 Easy |
| 4 | datetime-input | Add keyboard forwarding method (PageUp/PageDown/Home/End) | 15 min | 🟡 Medium |
| 5 | datetime-input | Add ARIA attributes (role, aria-*, aria-controls) | 15 min | 🟡 Medium |
| 6 | datetime-input | Add onFocusout handler | 10 min | 🟢 Easy |
| 7 | datetime-input | Remove auto-open on focus | 5 min | 🟢 Easy |
| 8a | datetime-input.ct.ts | Add keyboard navigation test suite | 90 min | 🟡 Medium |
| 8b | datetime-picker.ct.ts | ✅ NO CHANGES (verified) | 0 min | ✅ N/A |
| 9 | Changeset | Document changes | 5 min | 🟢 Easy |

**Total Effort:** 3.5–4 hours

---

## Key Files to Change

### Step 2: datetime-picker.tsx
```tsx
// Add these 5 @Method() proxies:
@Method() async focusActiveDay(): Promise<void>
@Method() async isCalendarDayFocused(): Promise<boolean>
@Method() async navigateCalendar(direction: -1 | 1, byYear: boolean): Promise<void>
@Method() async focusFirstDayOfCurrentWeek(): Promise<void>
@Method() async focusLastDayOfCurrentWeek(): Promise<void>
```

### Steps 1, 3–7: datetime-input.tsx
```tsx
// Step 1: Change shadow config
shadow: { delegatesFocus: true }

// Step 3: Wire dropdown
focusTrapOptions={{ targetElement: this.datetimePickerRef, trapFocusInShadowDom: true }}
callbackFocusElement={() => { this.datetimePickerRef.current?.focusActiveDay(); return true; }}
keyboardActivationKeys={['ArrowUp', 'ArrowDown']}

// Step 4: Add handleDatePickerKeyDown method
// Step 5: Add role="combobox", aria-haspopup, aria-expanded, aria-controls
// Step 6: Add onFocusout handler
// Step 7: Remove this.openDropdown() from onFocus
```

### Step 8a: datetime-input.ct.ts
```tsx
// Add regressionTest.describe('keyboard navigation', () => { ... })
// Tests: ArrowDown, Home, End, PageUp, PageDown, Shift+PageUp, Shift+PageDown, Escape, Tab
```

### Step 8b: datetime-picker.ct.ts
```tsx
// ✅ NO CHANGES
```

---

## Test Responsibility Matrix

| Behavior | Input Tests? | Picker Tests? | Reason |
|---|---|---|---|
| Press ArrowDown → picker opens | ✅ | | Input owns opening |
| Picker opens → day focused | ✅ | | Input owns focus mgmt |
| Press PageUp → month changes | ✅ | | Input forwards key to picker |
| Click day → value updates | ✅ (result) | ✅ (mechanism) | Both verify their part |
| Escape → picker closes | ✅ | | Input owns closing |
| Tab cycles focus | ✅ | | Input owns focus trap |

**Key insight:** Input tests verify the *contract* between input and picker. Picker tests verify selection logic. No duplication.

---

## Why This Architecture

### W3C Combobox Pattern Definition
The pattern defines **input field behavior**:
- Which keys open the picker (ArrowUp, ArrowDown, calendar click)
- Which keys close it (Escape)
- How focus is managed (delegatesFocus, focusTrap, aria-expanded)
- How keys are forwarded to the picker (PageUp, Home, End, etc.)

### Therefore
- **Input component** owns keyboard navigation (W3C pattern)
- **Picker component** is a utility (selection, composition)
- **Tests** verify input behavior, not picker behavior in isolation

### Comparison to date-input (Proven Pattern)
```
date-input.ct.ts       ✅ Has keyboard tests (lines 229-289)
date-picker.ct.ts      ❌ No keyboard tests (only click tests)

Apply same pattern to:
datetime-input.ct.ts   ✅ ADD keyboard tests (Step 8)
datetime-picker.ct.ts  ❌ NO keyboard tests (unchanged)
```

---

## How to Get Started

### For Quick Understanding (5 min)
1. Read: **QUICK-REFERENCE.md**
2. Go to: "Implementation Overview" section

### For Your Specific Question (8 min)
1. Read: **ANSWER-test-duplication-concern.md**
2. See: "The Correct Approach" section

### For Implementation (4 hours)
1. Read: **IMPLEMENTATION-CHECKLIST.md** (read as you code)
2. Reference: **datetime-input-wai-aria-plan.md** (code details)
3. Check: **INDEX.md** → "Verification Checklist" (confirm completion)

### For Architecture Deep Dive (25 min)
1. Read: **test-responsibility-analysis.md**
2. See: Tables on "Why tests live where they do"

---

## Deliverables Checklist

✅ **Questions Answered**
- Why tests go only in datetime-input.ct.ts
- No duplication is needed
- Pattern mirrors date-input

✅ **Architecture Documented**
- Responsibility boundaries (input vs picker)
- Test layering strategy
- W3C Combobox pattern explanation

✅ **Implementation Planned**
- 8 detailed steps
- Code snippets for each step
- File-by-file changes documented

✅ **Tests Strategized**
- Where tests go: datetime-input.ct.ts
- What tests cover: keyboard navigation
- Why no picker tests: picker is utility component

✅ **Verification Ready**
- Checklist for each step
- Build commands provided
- Test execution commands provided

✅ **References Compiled**
- Link to W3C pattern
- Reference to date-input implementation
- Cross-links between documents

---

## Files Location

```
/Users/okaduk/Documents/projects/siemens/ix/docs/

✅ INDEX.md
✅ QUICK-REFERENCE.md
✅ ANSWER-test-duplication-concern.md
✅ datetime-input-wai-aria-plan.md
✅ test-responsibility-analysis.md
✅ IMPLEMENTATION-CHECKLIST.md
✅ EXECUTIVE-SUMMARY.md (this file)
```

---

## Next Steps

### For Development Team
1. Read **QUICK-REFERENCE.md** (team overview)
2. Developer uses **IMPLEMENTATION-CHECKLIST.md** (step-by-step)
3. Reference **datetime-input-wai-aria-plan.md** (for code details)
4. Run verification commands when complete

### For Review
1. Check **INDEX.md** → Verification Checklist
2. Audit files in "Files to Change" section
3. Verify: keyboard tests in datetime-input.ct.ts ONLY
4. Verify: NO changes to datetime-picker.ct.ts

### For Documentation
1. Link to these docs from PR description
2. Reference **ANSWER-test-duplication-concern.md** for architecture
3. Update team wiki with link to **INDEX.md**

---

## Key Takeaways

| Point | Answer |
|---|---|
| Where do keyboard tests go? | `datetime-input.ct.ts` only |
| Why not `datetime-picker.ct.ts`? | W3C pattern is input responsibility |
| How do I know this is correct? | Same pattern as `date-input` (proven) |
| How much code to write? | 8 steps, ~3.5–4 hours |
| Do I need to duplicate tests? | No, input tests verify entire stack |
| Where's the implementation guide? | `IMPLEMENTATION-CHECKLIST.md` |
| Where's the architecture explanation? | `test-responsibility-analysis.md` |
| What if I have questions? | See **INDEX.md** → FAQ section |

---

## Success Criteria

✅ All 8 steps implemented  
✅ Keyboard tests added to `datetime-input.ct.ts`  
✅ NO changes to `datetime-picker.ct.ts`  
✅ `pnpm build` succeeds  
✅ `pnpm test` passes (all datetime tests)  
✅ ARIA attributes present  
✅ TypeScript compiles without errors  
✅ Changeset documented  

---

## Resources

**W3C Reference:**
- [W3C Date Picker Combobox Example](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-datepicker/)

**Code References:**
- `date-input.tsx` → Already complete (reference implementation)
- `date-input.ct.ts` → Keyboard tests example (lines 229–289)
- `date-picker.tsx` → Picker implementation (reference)

**Documentation:**
- All 7 files in `/docs/` directory

---

## Questions?

**Q: Should I add tests to datetime-picker.ct.ts?**
A: No. See `ANSWER-test-duplication-concern.md`

**Q: How do I know which files to change?**
A: See `datetime-input-wai-aria-plan.md` → "Files to Change" section

**Q: What's the implementation order?**
A: Follow `IMPLEMENTATION-CHECKLIST.md` (in step order)

**Q: How long will this take?**
A: 3.5–4 hours. See `INDEX.md` → "Implementation Timeline"

**Q: Can I copy code from date-input?**
A: Yes! Just replace `datepickerRef` with `datetimePickerRef`. See code snippets in all docs.

---

## Summary

Everything you need to implement WAI-ARIA Combobox for `ix-datetime-input` is documented and ready. 

**Your question about test duplication has been thoroughly answered:** Tests go ONLY in `datetime-input.ct.ts`, following the proven `date-input` pattern.

**You're ready to proceed!** 🚀

---

**Created:** February 26, 2026  
**Status:** Ready for Implementation  
**Documentation:** Complete (7 files)  
**Code Snippets:** Included  
**Verification:** Checklist provided  


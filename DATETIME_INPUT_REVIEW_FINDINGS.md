# DateTime Input Implementation Review

**Date:** January 25, 2026  
**Reviewer:** Based on DATE_INPUT_FLOW_ANALYSIS.md and TIME_INPUT_FLOW_ANALYSIS.md

---

## Executive Summary

✅ **Overall Status:** Implementation follows correct patterns from date-input and time-input  
⚠️ **Issues Found:** 3 issues that should be addressed  
📋 **Recommendations:** 3 suggestions for alignment with established patterns

---

## ✅ What's Working Well

### 1. Core Architecture ✅

- Follows date-input structure (form-associated, slots, validation lifecycle)
- Uses `makeRef()` for DOM references
- Implements `@AttachInternals()` for form integration
- Uses same utility functions (`picker-input.util.ts`)

### 2. Value Format Strategy ✅

- Correctly uses display format throughout (not ISO internally)
- Combines `dateFormat + ' ' + timeFormat` for parsing
- Matches date-input pattern: value = display format

### 3. Validation Logic ✅

- Three-layer validation: format + range (min/max) + required
- Correctly sets `invalidReason` for specific error types
- Uses `DateTime.fromFormat()` for parsing (like both inputs)
- Emits proper `DateTimeInputValidityState` with all fields

### 4. Picker Integration ✅

- Splits value into `from` (date) and `time` for picker
- Passes separate `dateFormat` and `timeFormat` to picker
- Handles `onDateSelect` event with combined date+time
- Auto-closes on valid selection (matches date-input)

### 5. Lifecycle & State Management ✅

- `componentWillLoad()` initializes picker values
- `watchValue()` syncs picker state
- `connectedCallback()`/`disconnectedCallback()` handle observers
- State cleared when invalid (matches date-input)

---

## ⚠️ Critical Issues Found

### Issue 1: Missing `ariaLabelCalendarButton` Prop ♿

**Current Code (Line ~629):**

```typescript
<ix-icon-button
  data-testid="open-datetime-picker"
  class={{ 'calendar-hidden': this.disabled || this.readonly }}
  variant="subtle-tertiary"
  icon={iconCalendar}
  onClick={(event) => this.onCalendarClick(event)}
  aria-expanded={this.show}
  // ❌ Missing aria-label!
></ix-icon-button>
```

**Date-Input Has (Line 132 + 423):**

```typescript
@Prop() ariaLabelCalendarButton?: string;

<ix-icon-button
  aria-label={this.ariaLabelCalendarButton}
  aria-expanded={this.show}
/>
```

**Fix:**

1. Add prop after line 147:

```typescript
/** ARIA label for the calendar icon button */
@Prop() ariaLabelCalendarButton?: string;
```

2. Use in button (line 629):

```typescript
aria-label={this.ariaLabelCalendarButton || 'Toggle datetime picker'}
```

---

### Issue 2: Missing `@Watch('value')` for Picker Sync ⚠️

**Current Code:**

```typescript
@Watch('value')
watchValuePropHandler(newValue: string) {
  this.onInput(newValue);
}

// watchValue() is called manually from componentWillLoad
watchValue() {
  if (!this.value) {
    this.from = null;
    this.time = null;
    return;
  }
  // ... parse and sync
}
```

**Problem:**

- `watchValue()` is NOT a `@Watch` decorator method
- It's only called once in `componentWillLoad()`
- If `value` prop changes externally, picker state won't update

**Date-Input Pattern:**

```typescript
@Watch('value')
watchValue() {
  this.from = this.value;  // Simple sync
}
```

**Recommendation:**
Add second `@Watch('value')` decorator to `watchValue()` method OR rename to avoid confusion:

```typescript
@Watch('value')
watchValuePropHandler(newValue: string) {
  this.onInput(newValue);
  this.syncPickerState();  // Also sync picker
}

private syncPickerState() {
  if (!this.value) {
    this.from = null;
    this.time = null;
    return;
  }

  const dateTime = DateTime.fromFormat(
    this.value,
    `${this.dateFormat} ${this.timeFormat}`,
    { locale: this.locale }
  );

  if (dateTime.isValid) {
    this.from = dateTime.toFormat(this.dateFormat);
    this.time = dateTime.toFormat(this.timeFormat);
  }
}
```

---

### Issue 3: MinDate/MaxDate Format Ambiguity 📋

**Current JSDoc (Lines 100-104):**

```typescript
/** Minimum allowed datetime in display format (matching dateFormat + timeFormat) */
@Prop() minDate?: string;

/** Maximum allowed datetime in display format (matching dateFormat + timeFormat) */
@Prop() maxDate?: string;
```

**DateTime-Picker Component Shows (datetime-picker.tsx lines 29-37):**

```typescript
/**
 * The earliest date that can be selected by the date picker.
 * If not set there will be no restriction.
 */
@Prop() minDate?: string;

/**
 * The latest date that can be selected by the date picker.
 * If not set there will be no restriction.
 */
@Prop() maxDate?: string;
```

**Investigation:** DateTime-picker passes minDate/maxDate directly to `ix-date-picker` (line 193):

```typescript
<ix-date-picker
  minDate={this.minDate}
  maxDate={this.maxDate}
  format={this.dateFormat} // ← Date format only!
/>
```

**Conclusion:** minDate/maxDate should be **DATE-ONLY** format (matching `dateFormat`), not full datetime.

**Fix:** Update JSDoc (lines 100-104):

```typescript
/** Minimum allowed date in date format (matching dateFormat, e.g., "2026/01/20") */
@Prop() minDate?: string;

/** Maximum allowed date in date format (matching dateFormat, e.g., "2026/12/31") */
@Prop() maxDate?: string;
```

And update parsing in `onInput()` (lines 255-268):

```typescript
const minDateTime = this.minDate ? DateTime.fromFormat(this.minDate, this.dateFormat, { locale: this.locale }) : null;
const maxDateTime = this.maxDate ? DateTime.fromFormat(this.maxDate, this.dateFormat, { locale: this.locale }) : null;
```

---

---

## 📋 Additional Recommendations

### Recommendation 1: Consider Adding `hideHeader` Prop

**Time-Input Has (line 215):**

```typescript
/**
 * Hides the header of the picker.
 *
 * @since 4.0.0
 */
@Prop() hideHeader: boolean = false;
```

**Consideration:**

- Time-input exposes this to hide time picker header
- DateTime-picker doesn't expose this prop
- Would need to be added to datetime-picker first

**Priority:** Low (nice to have, requires datetime-picker changes)

---

### Recommendation 2: Add Time Picker Interval Props (Future Enhancement)

**Current:** DateTime-input doesn't expose interval props (hourInterval, minuteInterval, etc.)

**Time-Input Has:**

```typescript
@Prop() hourInterval: number = 1;
@Prop() minuteInterval: number = 1;
@Prop() secondInterval: number = 1;
@Prop() millisecondInterval: number = 100;
```

**Consideration:**

- DateTime-picker might not support intervals (need to verify)
- If supported, should be added for consistency with time-input
- If not supported, document this limitation

**Priority:** Low (not blocking, future enhancement)

---

### Recommendation 3: Default Value Strategy

**Current:** DateTime-input starts with empty value

**Time-Input:** Initializes with current time if no value

```typescript
componentWillLoad() {
  if (!this.value) {
    const now = DateTime.now();
    if (now.isValid) {
      this.value = now.toFormat(this.format);
    }
  }
  // ...
}
```

**Consideration:**

- Date-input: Empty (user must select)
- Time-input: Current time (reasonable default)
- DateTime-input: Empty (follows date-input pattern) ✅

**Conclusion:** Current approach is correct - datetime selection should be explicit, not defaulted.

---

## Comparison with Reference Implementations

### vs Date-Input

| Feature               | Date-Input                   | DateTime-Input                       | Status      |
| --------------------- | ---------------------------- | ------------------------------------ | ----------- |
| **Format Prop**       | Single `format`              | Separate `dateFormat` + `timeFormat` | ✅ Correct  |
| **Default Value**     | Empty                        | Empty                                | ✅ Match    |
| **Auto-Close**        | ✅ On valid                  | ✅ On valid                          | ✅ Match    |
| **Range Validation**  | ✅ Min/max                   | ✅ Min/max                           | ✅ Match    |
| **Picker State Sync** | `@Watch('value')`            | Manual `watchValue()`                | ⚠️ Issue #2 |
| **ARIA Label**        | ✅ `ariaLabelCalendarButton` | ❌ Missing                           | ⚠️ Issue #1 |

### vs Time-Input

| Feature              | Time-Input          | DateTime-Input                       | Status                          |
| -------------------- | ------------------- | ------------------------------------ | ------------------------------- |
| **Format Prop**      | Single `format`     | Separate `dateFormat` + `timeFormat` | ✅ Correct                      |
| **Default Value**    | Current time        | Empty                                | ✅ Correct (follows date-input) |
| **Auto-Close**       | ❌ Manual (Confirm) | ✅ Auto                              | ✅ Correct (follows date-input) |
| **Interval Props**   | ✅ All 4            | ❌ None                              | ℹ️ Rec #2                       |
| **Range Validation** | ❌ None             | ✅ Min/max                           | ✅ Correct                      |

---

## Critical Path Items (Must Fix)

### 🔴 CRITICAL Priority (Breaks Functionality)

1. **Issue #3: MinDate/MaxDate Wrong Format** (⚠️ Validation bug)
   - Change parsing from `dateFormat + timeFormat` to `dateFormat` only
   - Update JSDoc
   - **Impact:** Range validation compares incorrectly (includes time in comparison)

### 🔴 HIGH Priority (Important Bugs)

2. **Issue #1: Missing ARIA Label** (♿ Accessibility)

   - Add `ariaLabelCalendarButton` prop
   - Use in icon button
   - **Impact:** Screen reader users can't identify button purpose

3. **Issue #2: Fix Picker State Sync** (⚠️ State management bug)

   - Add `@Watch('value')` to picker sync method
   - OR call sync in existing watch handler
   - **Impact:** Picker won't update if value prop changes externally

### 🟢 LOW Priority (Future Enhancements)

4. **Recommendation #1: `hideHeader` Prop**

   - Requires datetime-picker component changes first
   - **Impact:** Can't hide time picker header

5. **Recommendation #2: Interval Props**
   - Verify if datetime-picker supports intervals
   - Add props if supported
   - **Impact:** Missing feature parity with time-input

---

## Code Quality Assessment

### ✅ Strengths

- Clean separation of concerns
- Good error handling with specific `invalidReason`
- Comprehensive JSDoc comments
- Follows established patterns
- Proper TypeScript types

### ⚠️ Areas for Improvement

- Picker state synchronization logic
- ARIA accessibility attributes
- Documentation alignment

---

## Conclusion

The datetime-input implementation is **solid and follows correct patterns** from both date-input and time-input. The identified issues are minor and can be fixed quickly:

**CRITICAL (Must Fix Before Any Testing):**

1. ✅ Fix minDate/maxDate format (date-only, not datetime)

**HIGH Priority (Must Fix):**

2. ✅ Add `ariaLabelCalendarButton` prop
3. ✅ Fix picker state sync on value prop changes

**LOW Priority (Future Enhancements):**

4. ❓ Consider adding `hideHeader` prop (needs picker support)
5. ❓ Consider adding interval props (verify picker support)

**Estimated Fix Time:** 30-45 minutes for critical + high priority items

---

## Next Steps

**CRITICAL (Do First):**

1. ✅ Fix minDate/maxDate parsing to use date-only format (Issue #3)

**HIGH Priority:**

2. ✅ Add `ariaLabelCalendarButton` prop (Issue #1)
3. ✅ Fix picker state sync in `@Watch('value')` (Issue #2)

**Testing:**

4. ✅ Test minDate/maxDate validation with date-only values
5. ✅ Test screen reader with calendar button
6. ✅ Test picker state sync after external value changes

---

**Review Status:** ✅ Complete (Corrected - Issue #1 Removed)  
**Overall Assessment:** 🟡 Needs Critical Fixes  
**Blocker Issues:** 1 (minDate/maxDate format)  
**Can Proceed to Testing:** ❌ NO - Fix blocker first, then HIGH priority items

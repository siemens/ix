# DateTime Input Implementation Review

**Date:** January 25, 2026  
**Status:** ⚠️ **MISALIGNMENT DETECTED**

---

## Summary

Comparing the implementation in `datetime-input.tsx` against the reference document `DATETIME_INPUT_PROPS_REFERENCE.md`, I found **3 props that should NOT be included** in the implementation.

---

## ❌ Props That Should Be REMOVED from Implementation

### 1. `showTimeReference` (Line 95-96)

```typescript
/** Show AM/PM selector for 12-hour time format */
@Prop() showTimeReference: boolean = false;
```

**Status:** ❌ **SHOULD BE REMOVED**

**Reason:** This prop was explicitly removed from the specification (see "Props NOT Included" section in reference doc):

> "From `ix-datetime-picker` - 2 props omitted: `showTimeReference` - Not in `time-input` - users handle AM/PM via `timeFormat` (e.g., `'hh:mm a'`)"

**Impact:** Currently at line 721 in render method, this prop is passed to `ix-datetime-picker`

---

### 2. `timeReference` (Line 98-99)

```typescript
/** Set time reference (AM/PM) when using 12-hour format */
@Prop() timeReference?: 'AM' | 'PM';
```

**Status:** ❌ **SHOULD BE REMOVED**

**Reason:** This prop was explicitly removed from the specification:

> "From `ix-datetime-picker` - 2 props omitted: `timeReference` - Not in `time-input` - controlled by format string only"

**Impact:** Currently at line 722 in render method, this prop is passed to `ix-datetime-picker`

---

### 3. `ariaLabelCalendarButton` (Line 152-153)

```typescript
/** ARIA label for the calendar icon button */
@Prop() ariaLabelCalendarButton?: string;
```

**Status:** ⚠️ **SHOULD BE REMOVED** (but currently used in implementation)

**Reason:** This prop was explicitly omitted from the specification:

> "From `ix-date-input` - 2 props omitted: `ariaLabelCalendarButton` - Not needed - we have `ariaLabelPreviousMonthButton` and `ariaLabelNextMonthButton` instead."

**Impact:** Currently used at line 694 in render method for the calendar icon button

**Note:** However, the implementation actually USES this prop at line 694, so we need to decide:

- Option A: Remove the prop and the usage (align with spec)
- Option B: Add it back to the spec (makes sense for accessibility)

---

## ✅ Props Correctly Implemented (24 props)

All other 24 props from the reference document are correctly implemented:

| #   | Prop Name                      | ✅ Status                                                                           |
| --- | ------------------------------ | ----------------------------------------------------------------------------------- |
| 1   | `name`                         | ✅ Line 66                                                                          |
| 2   | `value`                        | ✅ Line 71                                                                          |
| 3   | `placeholder`                  | ✅ Line 68                                                                          |
| 4   | `dateFormat`                   | ✅ Line 76                                                                          |
| 5   | `timeFormat`                   | ✅ Line 79                                                                          |
| 6   | `locale`                       | ✅ Line 82                                                                          |
| 7   | `required`                     | ✅ Line 104                                                                         |
| 8   | `disabled`                     | ✅ Line 107                                                                         |
| 9   | `readonly`                     | ✅ Line 110                                                                         |
| 10  | `minDate`                      | ✅ Line 113                                                                         |
| 11  | `maxDate`                      | ✅ Line 116                                                                         |
| 12  | `label`                        | ✅ Line 122                                                                         |
| 13  | `helperText`                   | ✅ Line 125                                                                         |
| 14  | `invalidText`                  | ✅ Line 128                                                                         |
| 15  | `infoText`                     | ✅ Line 131                                                                         |
| 16  | `warningText`                  | ✅ Line 134                                                                         |
| 17  | `validText`                    | ✅ Line 137                                                                         |
| 18  | `showTextAsTooltip`            | ✅ Line 140                                                                         |
| 19  | `i18nErrorDateTimeUnparsable`  | ✅ Line 146                                                                         |
| 20  | `i18nDone`                     | ✅ Line 149                                                                         |
| 21  | `i18nTime`                     | ✅ Line 152 (prop name in spec, but should be line 149 in code - typo in my review) |
| 22  | `ariaLabelPreviousMonthButton` | ✅ Line 155                                                                         |
| 23  | `ariaLabelNextMonthButton`     | ✅ Line 158                                                                         |
| 24  | `showWeekNumbers`              | ✅ Line 164                                                                         |
| 25  | `weekStartIndex`               | ✅ Line 167                                                                         |
| 26  | `suppressSubmitOnEnter`        | ✅ Line 173                                                                         |
| 27  | `textAlignment`                | ✅ Line 176                                                                         |

---

## 📋 Required Actions

### Action 1: Remove `showTimeReference` prop

- **File:** `datetime-input.tsx`
- **Lines to remove:** 95-96
- **Lines to update:** 721 (remove from render method)

### Action 2: Remove `timeReference` prop

- **File:** `datetime-input.tsx`
- **Lines to remove:** 98-99
- **Lines to update:** 722 (remove from render method)

### Action 3: Decision needed on `ariaLabelCalendarButton`

**Option A (Recommended):** Remove from implementation

- Remove lines 152-153
- Remove usage at line 694
- Align with specification

**Option B:** Add back to specification

- Update `DATETIME_INPUT_PROPS_REFERENCE.md`
- Add as prop #28
- Update "Props NOT Included" section

---

## 🔍 Impact Analysis

### Render Method Changes Required (lines 705-730)

**Current Code:**

```typescript
<ix-datetime-picker
  ref={this.datetimePickerRef}
  dateFormat={this.dateFormat}
  timeFormat={this.timeFormat}
  locale={this.locale}
  singleSelection
  from={this.from ?? ''}
  time={this.time ?? ''}
  minDate={this.minDate}
  maxDate={this.maxDate}
  showTimeReference={this.showTimeReference} // ❌ REMOVE
  timeReference={this.timeReference} // ❌ REMOVE
  i18nDone={this.i18nDone}
  i18nTime={this.i18nTime}
  showWeekNumbers={this.showWeekNumbers}
  weekStartIndex={this.weekStartIndex}
  ariaLabelPreviousMonthButton={this.ariaLabelPreviousMonthButton}
  ariaLabelNextMonthButton={this.ariaLabelNextMonthButton}
  onDateSelect={this.handleDateSelect}
></ix-datetime-picker>
```

**Should Be:**

```typescript
<ix-datetime-picker ref={this.datetimePickerRef} dateFormat={this.dateFormat} timeFormat={this.timeFormat} locale={this.locale} singleSelection from={this.from ?? ''} time={this.time ?? ''} minDate={this.minDate} maxDate={this.maxDate} i18nDone={this.i18nDone} i18nTime={this.i18nTime} showWeekNumbers={this.showWeekNumbers} weekStartIndex={this.weekStartIndex} ariaLabelPreviousMonthButton={this.ariaLabelPreviousMonthButton} ariaLabelNextMonthButton={this.ariaLabelNextMonthButton} onDateSelect={this.handleDateSelect}></ix-datetime-picker>
```

---

## ✅ What's Correct

1. **All 27 core props** from the spec are present (plus the 3 extras)
2. **Default values match** the specification
3. **Types match** the specification
4. **Events** are correctly implemented
5. **Form integration** looks correct
6. **Validation logic** appears sound
7. **Picker integration** is well-structured

---

## 📊 Final Count

| Category                        | Count    |
| ------------------------------- | -------- |
| **Spec requires**               | 27 props |
| **Implementation has**          | 30 props |
| **Extra props (should remove)** | 3 props  |
| **Correctly aligned**           | 24 props |

---

## 🎯 Recommendations

### Priority 1: Remove the 2 time reference props

These are clearly documented as omitted in the spec and contradict the design decision to handle AM/PM via format strings only.

### Priority 2: Decide on `ariaLabelCalendarButton`

Need to choose:

- **Remove it** (align with spec's reasoning)
- **Keep it** (update spec, makes sense for accessibility)

My recommendation: **Keep it and update the spec** because:

- It's actually used in the implementation
- It improves accessibility for the calendar icon button
- It's a common pattern in form components
- The reasoning for omission was weak ("not needed" vs "improves UX")

---

## Document Status

- ✅ Review complete
- ⚠️ 3 misalignments found
- 📝 Recommendations provided
- ⏳ Awaiting decision on corrective actions

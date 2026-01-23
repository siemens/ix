# Date Input Component - Implementation Guide

**Component:** `ix-date-input` | **File:** `packages/core/src/components/date-input/date-input.tsx`

---

## Architecture Overview

### Core Components

1. **Input Field** - Text input with manual entry
2. **Calendar Icon** - Opens picker dropdown
3. **Date Picker** - Visual selection UI in dropdown
4. **Field Wrapper** - Labels, validation messages
5. **Form Internals** - Native form integration

### State Management

```typescript
@State() show = false;              // Dropdown visibility
@State() from?: string | null;      // Picker date value
@State() isInputInvalid = false;    // Validation state
```

### Value Format & Props

**`format` Prop:**

- Default: `'yyyy/LL/dd'` → displays as `"2026/01/25"`
- Luxon format string for date parsing and display
- Same format used for: input display, picker display, validation, form submission
- Examples: `'dd.MM.yyyy'` → "25.01.2026", `'MM/dd/yyyy'` → "01/25/2026"
- See: https://moment.github.io/luxon/#/formatting?id=table-of-tokens

**`minDate` / `maxDate` Props:**

- Optional date range constraints in **same format** as `format` prop
- Examples: `minDate="2026/01/01"`, `maxDate="2026/12/31"` (for default format)
- Used in validation: `date < minDate` → invalid, `date > maxDate` → invalid
- **Passed to picker:** Dates outside range are **visually disabled** in calendar
- Empty string (`''`) = no constraint

---

## Core Flows

### 1. Component Initialization Flow

```
┌─────────────────────────────────────────────────────────┐
│ connectedCallback()                                     │
│  - Create class mutation observer                       │
│  - Add slot visibility observers                        │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│ componentWillLoad()                                     │
│  - onInput(this.value)  // Validate                    │
│  - if invalid: from = null                              │
│  - if valid: watchValue() // Sync picker                │
│  - updateFormInternalValue() // Register with form      │
└─────────────────────────────────────────────────────────┘
```

### 2. Value Change Flow (Manual Input or Picker Selection)

```
User types / Picker selects
        │
        ▼
    onInput(value)
        │
        ▼
┌─────────────────────────────┐
│ Parse with Luxon            │
│ DateTime.fromFormat()       │
└──────────┬──────────────────┘
           │
    ┌──────┴──────┐
    │             │
    ▼ Valid       ▼ Invalid
┌─────────────┐ ┌──────────────────┐
│ Update form │ │ isInputInvalid   │
│ Close picker│ │ from = undefined │
└─────────────┘ └──────────────────┘
        │             │
        └──────┬──────┘
               ▼
      valueChange.emit()
```

**Code:**

```typescript
async onInput(value: string | undefined) {
  if (!value) return;

  const date = DateTime.fromFormat(value, this.format);
  const minDate = DateTime.fromFormat(this.minDate, this.format);
  const maxDate = DateTime.fromFormat(this.maxDate, this.format);

  // Three-layer validation
  this.isInputInvalid = !date.isValid || date < minDate || date > maxDate;

  if (this.isInputInvalid) {
    this.invalidReason = date.invalidReason;
    this.from = undefined;                // Clear picker
  } else {
    this.updateFormInternalValue(value);  // Update form
    this.closeDropdown();                 // Auto-close on valid
  }

  this.valueChange.emit(value);
}
```

### 3. Picker Integration

```tsx
<ix-date-picker
  format={this.format}
  from={this.from ?? ''}
  minDate={this.minDate}
  maxDate={this.maxDate}
  onDateChange={(event) => {
    const { from } = event.detail;
    this.onInput(from); // ← Same validation path as manual input
  }}
/>
```

### 4. Validation Flow

```
                onInput(value) triggers
                        │
                        ▼
        ┌───────────────────────────┐
        │ DateTime.fromFormat()     │
        └────────┬──────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
        ▼ Valid           ▼ Invalid
  Check range      isInputInvalid = true
        │            invalidReason set
        ├─ < minDate? → rangeUnderflow
        ├─ > maxDate? → rangeOverflow
        └─ else → Valid
                 │
                 ▼
        Update states & emit events
```

### 5. Dropdown Management

```
Input focus
    │
    ▼
openDropdown()
    │
    └─→ dropdown.show = true


Calendar icon click
    │
    ▼
handleIconClick()
    │
    ├─→ If closed: openDropdown()
    └─→ If open: focus input


Valid selection
    │
    ▼
closeDropdown() // Auto-close
```

**Code:**

```typescript
// Auto-open on focus
onFocus={() => {
  this.openDropdown();
  this.ixFocus.emit();
}}

// Auto-close on valid selection (in onInput)
if (!this.isInputInvalid) {
  this.closeDropdown();
}
```

### 6. Form Integration

```typescript
updateFormInternalValue(value: string | undefined) {
  this.formInternals.setFormValue(value || null);
  this.value = value;
}

getValidityState(): ValidityState {
  return createValidityState(
    this.isInputInvalid,  // patternMismatch
    !!this.required,      // valueMissing
    this.value
  );
}
```

---

## Key Design Patterns

### Single Source of Truth

- All changes go through `onInput(value)` - whether manual input or picker selection
- Ensures consistent validation and state updates

### Auto-Close Behavior

```typescript
if (this.isInputInvalid) {
  this.from = undefined; // Clear picker, keep dropdown open
} else {
  this.closeDropdown(); // Auto-close on valid selection
}
```

### State Synchronization

```typescript
// Input → Picker: Watch value changes
@Watch('value')
watchValue() {
  this.from = this.value;
}

// Picker → Input: Event handler
onDateChange={(event) => {
  this.onInput(event.detail.from);
}}
```

### Validation Layers

1. **Format:** `DateTime.fromFormat().isValid`
2. **Range:** `date < minDate || date > maxDate`
3. **Required:** Handled by form internals
4. **External:** Via `isInvalid` class observer

---

## Error Handling

### Invalid Scenarios

- **Unparsable:** `date.invalidReason` captured from Luxon
- **Below Min:** `date < minDate`
- **Above Max:** `date > maxDate`

### Error Display

```typescript
const invalidText = getValidationText(
  this.isInputInvalid,
  this.invalidText, // Custom message
  this.i18nErrorDateUnparsable // Default fallback
);
```

---

## Performance & Accessibility

### Optimizations

- **Refs:** Avoid repeated DOM queries via `makeRef()`
- **Observers:** Track slot visibility, class mutations
- **Disposables:** Auto-cleanup on disconnect

### Accessibility

```typescript
<ix-icon-button aria-label={this.ariaLabelCalendarButton} aria-expanded={this.show} />
```

- Keyboard: Enter (submit), Focus (open), Tab (navigate)

---

## Critical Implementation Notes

1. **Format Prop Usage:**

   - `this.format` is used for **all** date operations: parsing, validation, display
   - Same format throughout: input field, picker, min/max constraints, form submission
   - Example: If `format="dd.MM.yyyy"`, then value="25.01.2026", minDate="01.01.2026"

2. **Min/Max Date Constraints:**

   - Must be in **same format** as `format` prop (not ISO, not timestamp)
   - Parsed using `DateTime.fromFormat(this.minDate, this.format)`
   - Passed to picker → dates outside range are **visually disabled** in calendar
   - Validation: `date < minDate` → rangeUnderflow, `date > maxDate` → rangeOverflow
   - Empty string (`''`) = no constraint

3. **Value Format:** ALWAYS in display format (not ISO, not timestamp)

   ```typescript
   this.value = '2026/01/25'; // Same format as picker
   ```

4. **Validation Path:** Both input modes use same `onInput()` method

   - Manual typing → `onInput(target.value)`
   - Picker selection → `onInput(event.detail.from)`

5. **Picker State:** Cleared when input becomes invalid

   ```typescript
   this.from = this.isInputInvalid ? undefined : this.value;
   ```

6. **Form Ready:** Uses `@AttachInternals()` for native form integration
   - Participates in FormData
   - Supports validation API
   - Responds to form.reset()

---

## Component Behavior Summary

**Lifecycle:** Initialize → Validate → Sync → Integrate with form  
**Input Modes:** Manual text entry + Visual picker selection  
**Validation:** Format + Range + Required (three layers)  
**Auto-Close:** Picker closes on valid selection, stays open on invalid  
**Form Integration:** Full native form support via ElementInternals

---

**Status:** ✅ Complete | **Lines:** ~290 (balanced: schemas + concise text)

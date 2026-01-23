# Time Input Component - Implementation Guide

**Component:** `ix-time-input` | **File:** `packages/core/src/components/time-input/time-input.tsx`

---

## Architecture Overview

### Core Components

1. **Input Field** - Text input with manual entry
2. **Clock Icon** - Opens picker dropdown
3. **Time Picker** - Visual selection UI in dropdown (scrollable columns)
4. **Field Wrapper** - Labels, validation messages
5. **Form Internals** - Native form integration

### State Management

```typescript
@State() show = false;              // Dropdown visibility
@State() time: string | null;       // Picker time value
@State() isInputInvalid = false;    // Validation state
```

### Value Format & Props

**`format` Prop:**

- Default: `'TT'` → localized 24-hour time with seconds (e.g., `"13:07:04"`)
- Luxon format string for time parsing and display
- Same format used for: input display, picker display, validation, form submission
- Examples: `'HH:mm:ss'` → "13:07:04", `'HH:mm:ss.SSS'` → "13:07:04.123", `'hh:mm a'` → "01:07 PM"
- See: https://moment.github.io/luxon/#/formatting?id=table-of-tokens

**Interval Props:**

- `hourInterval` (default: `1`) - Step between hours in picker (e.g., 1, 2, 3)
- `minuteInterval` (default: `1`) - Step between minutes (e.g., 1, 5, 15)
- `secondInterval` (default: `1`) - Step between seconds
- `millisecondInterval` (default: `100`) - Step between milliseconds (e.g., 0, 100, 200)
- **Passed to picker:** Only values matching intervals are shown in scrollable columns
- Validation: Input component does **NOT** validate intervals (any valid time format is accepted)

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
│  - if (!value): set to DateTime.now()                  │
│  - onInput(this.value)  // Validate                    │
│  - if invalid: time = null                              │
│  - if valid: watchValue() // Sync picker                │
│  - updateFormInternalValue() // Register with form      │
└─────────────────────────────────────────────────────────┘
```

**Key Difference from date-input:**

- Time input initializes with **current time** if no value is provided
- Date input leaves value empty by default

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
│ (no close)  │ │ invalidReason    │
└─────────────┘ └──────────────────┘
        │             │
        └──────┬──────┘
               ▼
      valueChange.emit()
```

**Key Difference from date-input:**

- Time input does **NOT** auto-close on valid input
- Picker closes only via "Confirm" button (`onTimeSelect` event)

**Code:**

```typescript
async onInput(value: string) {
  this.value = value;
  if (!value) {
    this.isInputInvalid = false;
    this.updateFormInternalValue(value);
    this.valueChange.emit(value);
    return;
  }

  const time = DateTime.fromFormat(value, this.format);
  if (time.isValid) {
    this.isInputInvalid = false;
  } else {
    this.isInputInvalid = true;
    this.invalidReason = time.invalidReason;
  }

  this.updateFormInternalValue(value);
  this.valueChange.emit(value);
}
```

### 3. Picker Integration

```tsx
<ix-time-picker
  format={this.format}
  time={this.time ?? ''}
  hourInterval={this.hourInterval}
  minuteInterval={this.minuteInterval}
  secondInterval={this.secondInterval}
  millisecondInterval={this.millisecondInterval}
  onTimeSelect={(event) => {
    this.onInput(event.detail); // Update value
    this.show = false; // Close picker
  }}
/>
```

**Key Behavior:**

- Picker emits `timeSelect` event when "Confirm" button is clicked
- Input component closes picker manually after updating value
- No auto-close on scrolling/selection (unlike date-input)

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
  isInputInvalid      isInputInvalid
      = false              = true
                      invalidReason set
                 │
                 ▼
        Update form & emit events
```

**Key Difference from date-input:**

- **NO range validation** (no min/max time constraints)
- **NO interval validation** (input accepts any valid time)
- Only checks format validity via Luxon parsing

### 5. Dropdown Management

```
Input focus
    │
    ▼
openDropdown()
    │
    ├─→ dropdown.show = true
    └─→ this.time = this.value  // Sync picker


Clock icon click
    │
    ▼
handleIconClick()
    │
    ├─→ If closed: openDropdown()
    └─→ If open: focus input


Picker "Confirm" button click
    │
    ▼
onTimeSelect(event)
    │
    ├─→ onInput(event.detail)
    └─→ this.show = false  // Manual close
```

**Code:**

```typescript
async openDropdown() {
  // Keep picker in sync with input
  this.time = this.value;
  return openDropdownUtil(this.dropdownElementRef);
}

onTimeSelect={(event) => {
  this.onInput(event.detail);
  this.show = false;  // Manual close
}}
```

### 6. Form Integration

```typescript
updateFormInternalValue(value: string) {
  this.formInternals.setFormValue(value);
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

### Manual Close Behavior

```typescript
// Picker has "Confirm" button
onTimeSelect={(event) => {
  this.onInput(event.detail);  // Update value
  this.show = false;            // Manually close picker
}}
```

**Key Difference from date-input:**

- Date input: Auto-closes on valid selection
- Time input: Closes only when "Confirm" button clicked

### State Synchronization

```typescript
// Input → Picker: Watch value changes
@Watch('value')
watchValue() {
  this.time = this.value;
}

// Also sync on dropdown open
async openDropdown() {
  this.time = this.value;  // Ensure picker shows current value
  return openDropdownUtil(this.dropdownElementRef);
}

// Picker → Input: Event handler
onTimeSelect={(event) => {
  this.onInput(event.detail);
}}
```

### Validation Layers

1. **Format:** `DateTime.fromFormat().isValid`
2. **Required:** Handled by form internals
3. **External:** Via `isInvalid` class observer

**Note:** NO range or interval validation (unlike date-input)

---

## Error Handling

### Invalid Scenarios

- **Unparsable:** `time.invalidReason` captured from Luxon (e.g., "unparseable")

**No other validation errors:**

- No min/max time constraints
- No interval validation in input (picker restricts UI only)

### Error Display

```typescript
const invalidText = getValidationText(
  this.isInputInvalid,
  this.invalidText, // Custom message
  this.i18nErrorTimeUnparsable // Default: "Time is not valid"
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
<ix-icon-button icon={iconClock} aria-label="Toggle time picker" aria-expanded={this.show} />
```

- Keyboard: Enter (submit), Focus (open), Tab (navigate)

---

## Critical Implementation Notes

1. **Format Prop Usage:**

   - `this.format` is used for **all** time operations: parsing, validation, display
   - Same format throughout: input field, picker, form submission
   - Example: If `format="HH:mm:ss.SSS"`, then value="13:07:04.123"

2. **Interval Props (Picker UI Only):**

   - Intervals control what values appear in picker's **scrollable columns**
   - Example: `minuteInterval={15}` → picker shows 00, 15, 30, 45
   - **Input does NOT validate intervals** - user can type any valid time
   - Validation only checks format correctness, not interval compliance

3. **Default Value:**

   - If no value provided, initializes to **current time** (`DateTime.now()`)
   - Different from date-input which starts empty
   - Format: `DateTime.now().toFormat(this.format)`

4. **Value Format:** ALWAYS in display format (not ISO, not timestamp)

   ```typescript
   this.value = '13:07:04'; // Same format as picker
   ```

5. **Validation Path:** Both input modes use same `onInput()` method

   - Manual typing → `onInput(target.value)`
   - Picker selection → `onInput(event.detail)` (on Confirm click)

6. **Picker Closing:** Manual close via "Confirm" button

   ```typescript
   onTimeSelect={(event) => {
     this.onInput(event.detail);
     this.show = false;  // Must manually close
   }}
   ```

7. **No Range Validation:**

   - Unlike date-input (min/max dates), time-input has no min/max time props
   - Only format validation applies

8. **Form Ready:** Uses `@AttachInternals()` for native form integration
   - Participates in FormData
   - Supports validation API
   - Responds to form.reset()

---

## Component Behavior Summary

**Lifecycle:** Initialize (with current time) → Validate → Sync → Integrate with form  
**Input Modes:** Manual text entry + Visual picker selection (scrollable columns)  
**Validation:** Format only (no range, no interval validation)  
**Closing:** Manual via "Confirm" button (no auto-close)  
**Default Value:** Current time if not specified  
**Form Integration:** Full native form support via ElementInternals

---

## Key Differences from Date Input

| Feature                 | Date Input                | Time Input                   |
| ----------------------- | ------------------------- | ---------------------------- |
| **Default Value**       | Empty                     | Current time                 |
| **Auto-Close**          | ✅ On valid selection     | ❌ Only via "Confirm" button |
| **Range Validation**    | ✅ Min/max dates          | ❌ No min/max time           |
| **Interval Validation** | N/A                       | ❌ No (picker UI only)       |
| **Picker UI**           | Calendar grid             | Scrollable columns           |
| **Icon**                | Calendar (`iconCalendar`) | Clock (`iconClock`)          |
| **Validation Layers**   | Format + Range + Required | Format + Required only       |

---

**Status:** ✅ Complete | **Lines:** ~350 (with comparison table)

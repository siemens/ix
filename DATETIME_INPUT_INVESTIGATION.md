# Date-Time Input Component Investigation

**Story:** [Forms] Dev: New date time input (input type datetime-local)

**Date:** January 8, 2026

**Figma Specification:** https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=69781-31295

---

## Executive Summary

The task is to implement a new `ix-datetime-input` component that combines date and time selection in a compact, unified input field. This component should follow the HTML5 `datetime-local` input pattern and leverage existing `ix-date-input` and `ix-time-input` components.

**Key Finding:** The library already has a `ix-datetime-picker` component, but it's a **picker** (dropdown UI), not an **input** component. We need to create a new `ix-datetime-input` that combines the input field pattern with datetime selection capabilities.

### Quick Reference

| **Aspect**           | **Specification**                                             |
| -------------------- | ------------------------------------------------------------- |
| **Component Tag**    | `ix-datetime-input`                                           |
| **Value Format**     | ISO 8601 datetime-local: `YYYY-MM-DDTHH:mm:ss.SSS`            |
| **Display Format**   | Default: `yyyy/LL/dd HH:mm:ss` ("2026/01/20 13:07:04")<br/>Customizable via `dateFormat` + `timeFormat` props |
| **Icon**             | `iconCalendar` from `@siemens/ix-icons/icons`                 |
| **Picker Component** | Reuse `ix-datetime-picker` in dropdown                        |
| **Picker Layout**    | Side-by-side (Date \| Time)                                   |
| **Confirm Button**   | Prop: `i18nDone`, Default: `'Confirm'`                        |
| **Milliseconds**     | Optional via `timeFormat="HH:mm:ss.SSS"`                      |
| **Timezone**         | ❌ Out of scope                                               |
| **Range Selection**  | ❌ Single selection only (use `singleSelection={true}`)       |
| **Form Ready**       | ✅ Yes (form-associated)                                      |
| **Frameworks**       | Angular, React, Vue, HTML                                     |
| **Pattern**          | Match `ix-datetime-picker` API exactly                        |
| **Estimated Effort** | 26-38 hours (3.5-5 days)                                      |

---

## Current State Analysis

### Existing Components

#### 1. **ix-date-input** (`packages/core/src/components/date-input/`)

- **Location:** `packages/core/src/components/date-input/date-input.tsx`
- **Tag:** `ix-date-input`
- **Key Features:**
  - Form-associated component (`formAssociated: true`)
  - Uses Luxon's DateTime library for date handling
  - Has integrated date-picker dropdown (uses `ix-date-picker`)
  - Calendar icon button to open picker
  - Validation support (required, min/max date, format validation)
  - Supports locale, format customization
  - Input field with text display of selected date
  - Uses utility functions from `picker-input.util.ts`

**Properties:**

```typescript
- name, placeholder, value
- minDate, maxDate
- locale, format (default: 'yyyy/LL/dd')
- required, disabled, readonly
- helperText, label, invalidText, infoText, warningText, validText
- showTextAsTooltip
- i18nErrorDateUnparsable
- showWeekNumbers, weekStartIndex
- ariaLabelCalendarButton
- suppressSubmitOnEnter
- textAlignment
```

**Events:**

- `valueChange` - emits string | undefined
- `validityStateChange` - emits DateInputValidityState
- `ixFocus`, `ixBlur`

#### 2. **ix-time-input** (`packages/core/src/components/time-input/`)

- **Location:** `packages/core/src/components/time-input/time-input.tsx`
- **Tag:** `ix-time-input`
- **Since:** v3.2.0
- **Key Features:**
  - Form-associated component
  - Uses Luxon's DateTime library
  - Has integrated time-picker dropdown (uses `ix-time-picker`)
  - Clock icon button to open picker
  - Validation support
  - Input field with text display of selected time
  - Similar pattern to date-input

**Properties:**

```typescript
- name, placeholder, value
- format (default: 'TT' - localized time with seconds)
- hideHeader
- hourInterval, minuteInterval, secondInterval, millisecondInterval
- i18nErrorTimeUnparsable, i18n*ColumnHeader, i18nSelectTime, i18nTime
- required, disabled, readonly
- helperText, label, invalidText, infoText, warningText, validText
- showTextAsTooltip
- suppressSubmitOnEnter
- textAlignment
```

**Events:**

- `valueChange` - emits string
- `validityStateChange` - emits TimeInputValidityState
- `ixFocus`, `ixBlur`

#### 3. **ix-datetime-picker** (`packages/core/src/components/datetime-picker/`)

- **Location:** `packages/core/src/components/datetime-picker/datetime-picker.tsx`
- **Tag:** `ix-datetime-picker`
- **Key Features:**
  - **NOT an input component** - it's a standalone picker UI
  - Combines `ix-date-picker` and `ix-time-picker` side-by-side in a grid layout
  - Has "Done" button to confirm selection
  - Used for embedded datetime selection scenarios
  - Does NOT have an input field or icon button

**Structure:**

```tsx
<ix-layout-grid>
  <ix-row>
    <ix-col>
      <ix-date-picker />
    </ix-col>
    <ix-col>
      <ix-time-picker />
    </ix-col>
  </ix-row>
  <ix-row>
    <ix-button>Done</ix-button>
  </ix-row>
</ix-layout-grid>
```

### Common Patterns Identified

All input components follow a consistent pattern:

1. **Form Association:** Use `@AttachInternals()` and `formAssociated: true`
2. **Luxon for Date/Time:** All use Luxon's DateTime library
3. **Validation Lifecycle:** Use `@HookValidationLifecycle()` decorator
4. **Dropdown Integration:** Use dropdown controller for picker display
5. **Utility Functions:** Share utilities from `packages/core/src/components/utils/input/picker-input.util.ts`
6. **Slots:** Support `start` and `end` slots for custom content
7. **Icon Button:** Calendar/Clock icon to open picker dropdown
8. **Input Element:** Text input with formatting/parsing logic
9. **Validation:** Support for required, custom validation messages, and validity states
10. **Accessibility:** ARIA labels, focus/blur events

### Shared Utilities

**File:** `packages/core/src/components/utils/input/picker-input.util.ts`

Functions:

- `openDropdown(dropdownElementRef)` - Opens picker dropdown
- `closeDropdown(dropdownElementRef)` - Closes picker dropdown
- `handleIconClick(event, show, openFn, inputRef)` - Handles icon button clicks
- `createValidityState(isInvalid, required, value)` - Creates ValidityState object

---

## HTML5 datetime-local Reference

The HTML5 `<input type="datetime-local">` input provides:

- Combined date and time selection
- Format: `YYYY-MM-DDThh:mm` (ISO 8601 without timezone)
- Example: `2026-01-08T14:30`
- Native browser controls vary by browser/platform
- Form submission sends ISO format string

Our implementation should:

- Accept/emit ISO 8601 datetime-local format as the value
- Provide custom UI that works consistently across browsers
- Allow format customization for display (using Luxon)

---

## Requirements Analysis

### From User Story

- **Goal:** Allow users to choose date and time together in a compact and combined way
- **Specification:** Follow Figma design at node-id=69781-31295
- **Out-of-scope:** Timezone selection

### Inferred Requirements

1. Create `ix-datetime-input` component
2. Combine functionality of `ix-date-input` and `ix-time-input`
3. Single input field showing both date and time
4. Icon button to open picker (calendar + clock combined icon?)
5. Dropdown shows combined date-time picker (similar to existing `ix-datetime-picker`)
6. Form-ready with validation support
7. Consistent API with other input components
8. Support min/max datetime validation
9. Localization support
10. Format customization

---

## Design Decisions

### Architecture Options

#### Option A: Reuse ix-datetime-picker in Dropdown

**Approach:** Create input component that opens `ix-datetime-picker` in a dropdown

**Pros:**

- Reuses existing `ix-datetime-picker` component
- Less code duplication
- Consistent with `date-input` and `time-input` patterns

**Cons:**

- `ix-datetime-picker` is quite large (side-by-side layout)
- Might need styling adjustments for dropdown context

#### Option B: Create Custom Combined Picker

**Approach:** Build new picker UI specifically for input dropdown

**Pros:**

- Optimized for dropdown size
- Can create more compact layout

**Cons:**

- More code duplication
- More maintenance overhead

**RECOMMENDATION:** **Option A** - Reuse `ix-datetime-picker` with potential styling adjustments. This maintains consistency and reduces duplication.

### Value Format

**Decision:** Use ISO 8601 datetime-local format internally (`YYYY-MM-DDTHH:mm:ss`)

- Matches HTML5 standard
- Easy to parse/validate
- Can be converted to/from Luxon DateTime
- Display format can be customized via props

### Component Structure

```
ix-datetime-input/
├── datetime-input.tsx          # Main component
├── datetime-input.scss         # Styles
├── datetime-input.types.ts     # TypeScript types
├── readme.md                   # Documentation
└── test/
    └── datetime-input.ct.ts    # Component tests
```

---

## API Design (Step 1) 📐

### Component Tag

```html
<ix-datetime-input></ix-datetime-input>
```

### Props (Attributes)

#### Basic Properties

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string?` | `undefined` | Name of the form control for form submission |
| `value` | `string?` | `undefined` | Value in ISO 8601 datetime-local format: `YYYY-MM-DDTHH:mm:ss.SSS` |
| `placeholder` | `string?` | `undefined` | Placeholder text when input is empty |

#### Date/Time Formatting

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `dateFormat` | `string` | `'yyyy/LL/dd'` | Luxon date format for display (e.g., `'yyyy/LL/dd'` → "2026/01/20", `'LLL-dd-yyyy'` → "May-22-2026") |
| `timeFormat` | `string` | `'HH:mm:ss'` | Luxon time format for display (e.g., `'HH:mm:ss'` → "13:07:04", `'HH:mm:ss.SSS'` → "13:07:04.000") |
| `locale` | `string?` | `undefined` | Locale for date/time formatting (e.g., 'en-US', 'de-DE') |
| `showTimeReference` | `boolean` | `false` | Show AM/PM selector for 12-hour time format |
| `timeReference` | `'AM' \| 'PM'?` | `undefined` | Set time reference (AM/PM) when using 12-hour format |

#### Validation & Constraints

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `required` | `boolean` | `false` | Whether the field is required |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `readonly` | `boolean` | `false` | Whether the input is read-only (calendar icon hidden) |
| `minDate` | `string?` | `undefined` | Minimum allowed date in ISO format |
| `maxDate` | `string?` | `undefined` | Maximum allowed date in ISO format |

#### Labels & Messages

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string?` | `undefined` | Label text displayed above the input |
| `helperText` | `string?` | `undefined` | Helper text displayed below the input |
| `invalidText` | `string?` | `undefined` | Validation message for invalid state |
| `infoText` | `string?` | `undefined` | Informational message |
| `warningText` | `string?` | `undefined` | Warning message |
| `validText` | `string?` | `undefined` | Success/valid message |
| `showTextAsTooltip` | `boolean` | `false` | Show helper text as tooltip instead of below input |

#### Internationalization (i18n)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `i18nErrorDateTimeUnparsable` | `string` | `'Date time is not valid'` | Error message when datetime cannot be parsed |
| `i18nDone` | `string` | `'Confirm'` | Text for confirm button in picker. **Note:** Prop name is `i18nDone` (matches `datetime-picker` API), but default value is `'Confirm'` (modern terminology, matches documentation). |
| `i18nTime` | `string` | `'Time'` | Header text for time picker section |

#### Accessibility (ARIA)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ariaLabelCalendarButton` | `string?` | `undefined` | ARIA label for the calendar icon button |
| `ariaLabelPreviousMonthButton` | `string?` | `undefined` | ARIA label for previous month navigation |
| `ariaLabelNextMonthButton` | `string?` | `undefined` | ARIA label for next month navigation |

#### Picker Configuration

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showWeekNumbers` | `boolean` | `false` | Show week numbers in date picker |
| `weekStartIndex` | `number` | `0` | First day of week (0=Sunday, 1=Monday, etc.) |

#### Behavior

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `suppressSubmitOnEnter` | `boolean` | `false` | Prevent form submission when Enter is pressed |
| `textAlignment` | `'start' \| 'end'` | `'start'` | Text alignment within the input field |

### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `valueChange` | `CustomEvent<string \| undefined>` | Emitted when the datetime value changes. Payload is ISO 8601 format or undefined |
| `validityStateChange` | `CustomEvent<DateTimeInputValidityState>` | Emitted when validation state changes |
| `ixFocus` | `CustomEvent<void>` | Emitted when the input receives focus |
| `ixBlur` | `CustomEvent<void>` | Emitted when the input loses focus |

#### DateTimeInputValidityState Interface

```typescript
interface DateTimeInputValidityState {
  valid: boolean;
  valueMissing: boolean;      // Required field is empty
  rangeUnderflow: boolean;    // Value < minDate
  rangeOverflow: boolean;     // Value > maxDate
  typeMismatch: boolean;      // Invalid datetime format
  customError: boolean;       // Custom validation error
}
```

### Methods

*No public methods planned - component is fully prop/event driven*

### Slots

| Slot | Description |
|------|-------------|
| `start` | Content to display at the start (left) of the input field |
| `end` | Content to display at the end (right) of the input field, before the calendar icon |

### CSS Custom Properties

*Uses standard iX design tokens - no component-specific CSS variables needed*

### Form Integration

**Form-Associated Component:**
- Automatically integrates with HTML forms
- Supports `FormData` with `name` attribute
- Participates in form validation
- Supports `form.reset()`
- Value submitted as ISO 8601 string

### Usage Examples

#### Basic Usage

```html
<ix-datetime-input
  label="Appointment Date & Time"
  placeholder="Select date and time"
  helper-text="Choose your preferred appointment slot"
></ix-datetime-input>
```

#### With Validation

```html
<ix-datetime-input
  label="Start Date & Time*"
  name="startDateTime"
  required="true"
  min-date="2026-01-20T00:00:00"
  invalid-text="Please select a valid future date and time"
></ix-datetime-input>
```

#### Custom Format (Figma Style with Milliseconds)

```html
<ix-datetime-input
  label="Event Date & Time"
  date-format="LLL-dd-yyyy"
  time-format="HH:mm:ss.SSS"
  value="2026-05-22T20:00:00.000"
></ix-datetime-input>
```
<!-- Displays: "May-22-2022 20:00:00.000" -->

#### Default Format (Standard)

```html
<ix-datetime-input
  label="Appointment"
  value="2026-01-20T13:07:04"
></ix-datetime-input>
```
<!-- Displays: "2026/01/20 13:07:04" (using default dateFormat='yyyy/LL/dd' and timeFormat='HH:mm:ss') -->

#### With 12-Hour Time Format (AM/PM)

```html
<ix-datetime-input
  label="Meeting Time"
  time-format="hh:mm:ss a"
  show-time-reference="true"
></ix-datetime-input>
```
<!-- Displays time with AM/PM selector -->

#### In a Form

```html
<form id="scheduleForm">
  <ix-datetime-input
    name="scheduleStart"
    label="Start Time*"
    required="true"
  ></ix-datetime-input>
  
  <ix-datetime-input
    name="scheduleEnd"
    label="End Time*"
    required="true"
  ></ix-datetime-input>
  
  <button type="submit">Schedule</button>
</form>
```

#### Disabled & Read-only States

```html
<!-- Disabled: Calendar icon visible but grayed out -->
<ix-datetime-input
  label="Disabled"
  disabled="true"
  value="2026-01-20T10:00:00"
></ix-datetime-input>

<!-- Read-only: Calendar icon HIDDEN -->
<ix-datetime-input
  label="Read Only"
  readonly="true"
  value="2026-01-20T10:00:00"
></ix-datetime-input>
```

#### With Validation States

```html
<!-- Invalid -->
<ix-datetime-input
  label="Invalid Example"
  invalid-text="This date and time is not valid"
></ix-datetime-input>

<!-- Warning -->
<ix-datetime-input
  label="Warning Example"
  warning-text="This time slot is almost full"
></ix-datetime-input>

<!-- Info -->
<ix-datetime-input
  label="Info Example"
  info-text="Times are displayed in your local timezone"
></ix-datetime-input>

<!-- Valid -->
<ix-datetime-input
  label="Valid Example"
  valid-text="Great choice!"
></ix-datetime-input>
```

#### React Example

```tsx
import { IxDatetimeInput } from '@siemens/ix-react';
import { useState } from 'react';

function AppointmentBooking() {
  const [datetime, setDatetime] = useState<string>();
  
  return (
    <IxDatetimeInput
      label="Appointment Date & Time"
      value={datetime}
      onValueChange={(e) => setDatetime(e.detail)}
      required
      dateFormat="LLL-dd-yyyy"
      timeFormat="HH:mm:ss"
    />
  );
}
```
<!-- Displays: "May-22-2022 13:07:04" -->

#### Angular Example

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  template: `
    <ix-datetime-input
      [label]="'Appointment Date & Time'"
      [(value)]="datetime"
      [required]="true"
      [dateFormat]="'LLL-dd-yyyy'"
      [timeFormat]="'HH:mm:ss'"
      (valueChange)="onDateTimeChange($event)"
    ></ix-datetime-input>
  `
})
export class BookingComponent {
  datetime?: string;
  
  onDateTimeChange(event: CustomEvent<string | undefined>) {
    console.log('New datetime:', event.detail);
  }
}
```
<!-- Displays: "May-22-2022 13:07:04" -->

#### Vue Example

```vue
<template>
  <ix-datetime-input
    label="Appointment Date & Time"
    :value="datetime"
    @valueChange="datetime = $event.detail"
    required
    date-format="LLL-dd-yyyy"
    time-format="HH:mm:ss"
  />
</template>

<script setup>
import { ref } from 'vue';

const datetime = ref<string>();
</script>
```
<!-- Displays: "May-22-2022 13:07:04" -->

### API Compatibility Matrix

| Feature | `date-input` | `time-input` | `datetime-input` | Notes |
|---------|-------------|-------------|------------------|-------|
| `name` | ✅ | ✅ | ✅ | Identical |
| `value` | ✅ | ✅ | ✅ | Different format (ISO datetime-local) |
| `placeholder` | ✅ | ✅ | ✅ | Identical |
| `required` | ✅ | ✅ | ✅ | Identical |
| `disabled` | ✅ | ✅ | ✅ | Identical |
| `readonly` | ✅ | ✅ | ✅ | Identical |
| `label` | ✅ | ✅ | ✅ | Identical |
| `helperText` | ✅ | ✅ | ✅ | Identical |
| `dateFormat` | ✅ | ❌ | ✅ | From date-input |
| `timeFormat` | ❌ | ✅ | ✅ | From time-input |
| `locale` | ✅ | ✅ | ✅ | Identical |
| `minDate` / `maxDate` | ✅ | ❌ | ✅ | From date-input |
| `*Interval` props | ❌ | ✅ | ❌ | NOT in v1.0 (datetime-picker doesn't support) |
| `showTimeReference` | ❌ | ❌ | ✅ | From datetime-picker (AM/PM) |
| `showWeekNumbers` | ✅ | ❌ | ✅ | From date-input |
| `weekStartIndex` | ✅ | ❌ | ✅ | From date-input |
| `hideHeader` | ❌ | ✅ | ❌ | Not needed (picker always has header) |
| `validityStateChange` event | ✅ | ✅ | ✅ | Identical pattern |

### ✅ Design Decisions - APPROVED (REVISED)

The following decisions have been confirmed and locked for implementation:

1. **Format Props:** ✅ **TWO separate props** (matches `datetime-picker`)
   - `dateFormat: string = 'yyyy/LL/dd'`
   - `timeFormat: string = 'HH:mm:ss'`
   - Default displays: `"2026/01/20 13:07:04"` (numeric date + time with seconds)
   - Figma example: `dateFormat="LLL-dd-yyyy"` + `timeFormat="HH:mm:ss.SSS"` → `"May-22-2022 20:00:00.000"`
   - **Rationale:** Matches `datetime-picker` API exactly, simpler to pass through
   
2. **Default Time Format:** ✅ **`'HH:mm:ss'`** (NO milliseconds)
   - Matches `datetime-picker` default
   - Users can customize to add milliseconds: `timeFormat="HH:mm:ss.SSS"`
   
3. **Confirm Button Text:** ✅ **`"Confirm"`**
   - Prop: `i18nDone = 'Confirm'`
   - Uses "Confirm" (not "Done") to match documentation intent
   
4. **Range Selection:** ✅ **Single value ONLY**
   - No from/to props (consistent with date-input and time-input)
   - Always pass `singleSelection={true}` to `datetime-picker`
   
5. **Calendar Icon:** ✅ **`iconCalendar`**
   - From `@siemens/ix-icons/icons`
   - Hidden in readonly state, visible but disabled in disabled state

6. **Interval Props:** ✅ **OMITTED in v1.0**
   - `hourInterval`, `minuteInterval`, `secondInterval`, `millisecondInterval`
   - Reason: `datetime-picker` doesn't expose these (though `time-picker` has them)
   - Can be added in v2.0 if needed

7. **Column Header i18n:** ✅ **OMITTED in v1.0**
   - `i18nHourColumnHeader`, etc.
   - Reason: `datetime-picker` doesn't expose these

### API Design Status: ✅ **APPROVED & LOCKED**

All critical design decisions have been made. API is ready for implementation.

**Note:** API has been revised to match the actual `ix-datetime-picker` implementation. See `API_ALIGNMENT_ANALYSIS.md` for detailed comparison and rationale.

### Key API Principles

1. **Match `datetime-picker` exactly** - Simpler implementation, proven pattern
2. **Value handling** - ISO 8601 for component value, split to date/time strings for picker
3. **Single selection only** - Always pass `singleSelection={true}` to picker
4. **Omit unsupported features** - No intervals in v1.0 (picker doesn't expose them)
5. **Use "Confirm" text** - Modern terminology (prop name: `i18nDone`, default: `'Confirm'`)

---

## Implementation Plan

### Phase 0: API Review & Approval (CURRENT STEP) 

**Tasks:**
1. Review complete API design above
2. Confirm all prop names, types, and defaults
3. Approve event signatures
4. Validate usage examples
5. Make any necessary adjustments

**Expected Outcome:** ✅ Approved API specification

**Estimated Effort:** 0.5-1 hour (review meeting)

### Phase 1: Component Setup and Structure

**Tasks:**

1. Create component directory structure

   - `packages/core/src/components/datetime-input/`
   - Files: `.tsx`, `.scss`, `.types.ts`, `readme.md`

2. Define component skeleton with Stencil decorators

   ```typescript
   @Component({
     tag: 'ix-datetime-input',
     styleUrl: 'datetime-input.scss',
     shadow: true,
     formAssociated: true,
   })
   ```

3. Define TypeScript types
   - `DateTimeInputValidityState` interface
   - Value type: `string | undefined` (ISO 8601 datetime-local format)

**Estimated Effort:** 1-2 hours

### Phase 2: Props and Events Definition

**Props to implement:**

```typescript
// Basic
@Prop() name?: string;
@Prop() placeholder?: string;
@Prop() value?: string; // ISO 8601 datetime-local format

// Date constraints
@Prop() minDate?: string;
@Prop() maxDate?: string;

// Formatting (matches datetime-picker)
@Prop() dateFormat: string = 'yyyy/LL/dd';
@Prop() timeFormat: string = 'HH:mm:ss';
@Prop() locale?: string;
@Prop() showTimeReference: boolean = false; // AM/PM selector
@Prop() timeReference?: 'AM' | 'PM';

// Validation
@Prop() required?: boolean;
@Prop() disabled: boolean = false;
@Prop() readonly: boolean = false;

// Labels and messages
@Prop() label?: string;
@Prop() helperText?: string;
@Prop() invalidText?: string;
@Prop() infoText?: string;
@Prop() warningText?: string;
@Prop() validText?: string;
@Prop() showTextAsTooltip?: boolean;

// i18n (matches datetime-picker)
@Prop() i18nErrorDateTimeUnparsable = 'Date time is not valid';
@Prop() i18nDone: string = 'Confirm'; // Button text (uses 'Confirm' not 'Done')
@Prop() i18nTime: string = 'Time'; // Time picker header
@Prop() ariaLabelPreviousMonthButton?: string;
@Prop() ariaLabelNextMonthButton?: string;

// Picker options
@Prop() showWeekNumbers = false;
@Prop() weekStartIndex = 0;
@Prop() suppressSubmitOnEnter?: boolean;
@Prop() textAlignment?: 'start' | 'end';
```

**Events:**

```typescript
@Event() valueChange: EventEmitter<string | undefined>;
@Event() validityStateChange: EventEmitter<DateTimeInputValidityState>;
@Event() ixFocus: EventEmitter<void>;
@Event() ixBlur: EventEmitter<void>;
```

**Estimated Effort:** 2 hours

### Phase 3: Input Field Implementation

**Tasks:**

1. Create input element structure (similar to date-input/time-input)
2. Implement value parsing (ISO 8601 → Luxon DateTime → formatted display)
3. Implement value formatting (user input → validation → ISO 8601)
4. Add icon button (calendar icon, or custom datetime icon if available)
5. Implement slots (start/end)
6. Handle focus/blur events
7. Handle keyboard navigation (Enter to submit, Escape to close)

**Estimated Effort:** 4-6 hours

### Phase 4: Picker Dropdown Integration

**Tasks:**

1. Integrate `ix-datetime-picker` in dropdown
2. Configure dropdown positioning and styling
3. Implement open/close dropdown logic using `picker-input.util.ts`
4. Connect picker date/time changes to input value
5. Handle "Done" button click to apply selection
6. Sync input value with picker state
7. Handle dropdown dismiss (click outside, Escape key)

**Estimated Effort:** 4-6 hours

### Phase 5: Validation Implementation

**Tasks:**

1. **Implement form internals integration**
   - Use `@AttachInternals()` decorator
   - Implement `formAssociated: true`
   - Set up form value and validity state

2. **Add datetime parsing validation**
   - Validate typed input (display format → ISO)
   - Validate prop value (ISO format)
   - Handle parse failures gracefully (see Error Handling Strategy)

3. **Add min/max datetime validation**
   - Check `minDate` constraint (rangeUnderflow)
   - Check `maxDate` constraint (rangeOverflow)
   - Use Luxon comparison operators

4. **Implement required field validation**
   - Check `valueMissing` state
   - Validate on blur and form submit

5. **Create validity state object**
   - Implement `DateTimeInputValidityState` interface
   - Map to HTML5 ValidityState
   - Emit `validityStateChange` event

6. **Hook validation lifecycle**
   - Use `@HookValidationLifecycle()` decorator
   - Validate on value change
   - Validate on blur
   - Re-validate on prop changes

7. **Display validation messages**
   - Show `invalidText` for errors
   - Show `infoText`, `warningText`, `validText` as appropriate
   - Use validation message helper component

8. **Test with forms**
   - Test form submission
   - Test form reset
   - Test native validation API
   - Test required field validation

**See "Technical Considerations" > "Validation Logic" for detailed implementation**

**Estimated Effort:** 3-4 hours

### Phase 6: Styling

**Tasks:**

1. Create SCSS file
2. Style input wrapper
3. Style dropdown container
4. Ensure picker fits well in dropdown
5. Handle responsive behavior
6. Add validation state styles (invalid, valid, warning, info)
7. Test theming compatibility

**Estimated Effort:** 3-4 hours

### Phase 7: Framework Integration

**Tasks:**

1. Verify auto-generation for Angular wrapper
2. Verify auto-generation for React wrapper
3. Verify auto-generation for Vue wrapper
4. Test in Angular test app
5. Test in React test app
6. Test in Vue test app
7. Create usage examples

**Estimated Effort:** 3-4 hours

### Phase 8: Documentation and Testing

**Tasks:**

1. Write component README with examples
2. Add JSDoc comments to all props/methods
3. Create component tests (`.ct.ts`)
4. Test keyboard navigation
5. Test accessibility (ARIA, screen readers)
6. Test form submission
7. Test validation scenarios
8. Test min/max constraints
9. Test localization
10. Add to HTML test app (`packages/html-test-app/src/preview-examples/`)
11. Update component documentation

**Estimated Effort:** 4-6 hours

### Phase 9: Review and Polish

**Tasks:**

1. Code review
2. Accessibility audit
3. Cross-browser testing
4. Performance check
5. Fix bugs and issues
6. Update CHANGELOG
7. Create PR

**Estimated Effort:** 2-4 hours

---

## Total Estimated Effort

**26-38 hours** (approximately 3.5-5 days of focused development)

---

## Technical Considerations

### 1. Luxon DateTime Handling

- Parse ISO 8601: `DateTime.fromISO(value)`
- Format display: `dateTime.toFormat(dateFormat + ' ' + timeFormat)`
- Combine date + time: Need to merge separate date/time selections

### 2. Value Synchronization

Challenge: `ix-datetime-picker` emits separate date and time values, but we need a single combined value.

Solution:

```typescript
private combineDateTime(date: string, time: string): string {
  const dateTime = DateTime.fromFormat(
    `${date} ${time}`,
    `${this.dateFormat} ${this.timeFormat}`
  );
  return dateTime.toISO(); // Returns ISO 8601 format
}
```

### 3. Picker State Management

```typescript
// State management
@State() show: boolean = false;           // Dropdown open/closed
@State() touched: boolean = false;        // User has interacted
@State() isInputInvalid: boolean = false; // Validation state
@State() pickerDate?: string;             // Date string for picker
@State() pickerTime?: string;             // Time string for picker
@State() displayValue: string = '';       // Formatted value in input

// Sync picker values when opening dropdown
private openPicker() {
  // Initialize picker from current value
  this.initPickerValues();
  
  // Open dropdown
  this.show = true;
  openDropdown(this.dropdownElementRef);
}

// Initialize picker values from ISO value
private initPickerValues() {
  if (!this.value) {
    this.pickerDate = undefined;
    this.pickerTime = undefined;
    return;
  }

  const dateTime = DateTime.fromISO(this.value);
  if (!dateTime.isValid) {
    console.warn('Invalid ISO value, cannot initialize picker:', this.value);
    return;
  }

  // Convert ISO to picker format
  this.pickerDate = dateTime.toFormat(this.dateFormat);
  this.pickerTime = dateTime.toFormat(this.timeFormat);
}

// Update display value when value changes
@Watch('value')
watchValueHandler(newValue?: string) {
  if (!newValue) {
    this.displayValue = '';
    return;
  }

  const dateTime = DateTime.fromISO(newValue);
  if (dateTime.isValid) {
    this.displayValue = dateTime.toFormat(`${this.dateFormat} ${this.timeFormat}`);
  } else {
    this.displayValue = newValue; // Show invalid value as-is
  }

  // Validate and update validity state
  const validityState = this.validateDateTime(newValue);
  this.isInputInvalid = !validityState.valid;
  this.validityStateChange.emit(validityState);
}

// Handle picker selection (Confirm button clicked)
private onPickerSelect(event: CustomEvent<DateTimeSelectEvent>) {
  const { from, time } = event.detail;

  if (!from || !time) {
    console.warn('Incomplete picker selection');
    return;
  }

  // Combine date + time back to ISO 8601
  const combined = DateTime.fromFormat(
    `${from} ${time}`,
    `${this.dateFormat} ${this.timeFormat}`,
    { locale: this.locale }
  );

  if (combined.isValid) {
    // Update value (will trigger @Watch)
    this.value = combined.toISO();
    this.valueChange.emit(this.value);
    
    // Close dropdown
    this.closePicker();
  } else {
    console.error('Failed to combine picker date/time:', { from, time });
  }
}

private closePicker() {
  this.show = false;
  closeDropdown(this.dropdownElementRef);
  this.touched = true;
}
```

### 4. Validation Logic

```typescript
private validateDateTime(value: string): DateTimeInputValidityState {
  const validityState: DateTimeInputValidityState = {
    valid: true,
    valueMissing: false,
    rangeUnderflow: false,
    rangeOverflow: false,
    typeMismatch: false,
    customError: false,
  };

  // Check required field
  if (this.required && !value) {
    validityState.valid = false;
    validityState.valueMissing = true;
    return validityState;
  }

  // If empty and not required, it's valid
  if (!value) {
    return validityState;
  }

  // Parse ISO 8601 value
  const dateTime = DateTime.fromISO(value);
  if (!dateTime.isValid) {
    validityState.valid = false;
    validityState.typeMismatch = true;
    return validityState;
  }

  // Check min date constraint
  if (this.minDate) {
    const min = DateTime.fromISO(this.minDate);
    if (min.isValid && dateTime < min) {
      validityState.valid = false;
      validityState.rangeUnderflow = true;
    }
  }

  // Check max date constraint
  if (this.maxDate) {
    const max = DateTime.fromISO(this.maxDate);
    if (max.isValid && dateTime > max) {
      validityState.valid = false;
      validityState.rangeOverflow = true;
    }
  }

  return validityState;
}

// Validate user-typed input (display format → ISO)
private validateTypedInput(displayValue: string): string | null {
  if (!displayValue.trim()) return null;

  try {
    // Parse display format: "2026/01/20 13:07:04"
    const dateTime = DateTime.fromFormat(
      displayValue,
      `${this.dateFormat} ${this.timeFormat}`,
      { locale: this.locale }
    );

    if (!dateTime.isValid) {
      throw new Error(this.i18nErrorDateTimeUnparsable);
    }

    // Convert to ISO 8601
    return dateTime.toISO();
  } catch (error) {
    console.error('Invalid datetime input:', error);
    return null;
  }
}
```

### 5. Icon Selection ✅

**Decision:** Use `iconCalendar` from `@siemens/ix-icons/icons` (confirmed from Figma design)

### 6. Dropdown Sizing ✅

**Confirmed from Figma:**

- Side-by-side layout (Date picker | vertical divider | Time picker)
- Picker dropdown appears below input field
- Total width accommodates both date and time pickers
- Styling matches existing `ix-datetime-picker` component

### 7. Error Handling Strategy

**Principle:** Graceful degradation - never crash, always provide feedback

#### Parse Errors (User Input)

```typescript
private handleInputChange(event: Event) {
  const input = event.target as HTMLInputElement;
  const displayValue = input.value.trim();

  if (!displayValue) {
    this.value = undefined;
    this.valueChange.emit(this.value);
    return;
  }

  // Try to parse display format
  const dateTime = DateTime.fromFormat(
    displayValue,
    `${this.dateFormat} ${this.timeFormat}`,
    { locale: this.locale }
  );

  if (dateTime.isValid) {
    // Success - convert to ISO
    this.value = dateTime.toISO();
    this.valueChange.emit(this.value);
  } else {
    // Parse failed - show error state
    console.warn('Unable to parse datetime input:', displayValue);
    this.isInputInvalid = true;
    this.setFormValidity(false, this.i18nErrorDateTimeUnparsable);
  }
}
```

#### Invalid ISO Value (from parent component)

```typescript
@Watch('value')
watchValueHandler(newValue?: string) {
  if (!newValue) {
    this.displayValue = '';
    this.isInputInvalid = false;
    return;
  }

  const dateTime = DateTime.fromISO(newValue);
  
  if (dateTime.isValid) {
    // Success - update display
    this.displayValue = dateTime.toFormat(`${this.dateFormat} ${this.timeFormat}`);
    this.isInputInvalid = false;
  } else {
    // Invalid ISO - show raw value and warn
    console.error('Invalid ISO datetime value:', newValue);
    this.displayValue = newValue;
    this.isInputInvalid = true;
    this.setFormValidity(false, this.i18nErrorDateTimeUnparsable);
  }
}
```

#### Picker Combination Errors

```typescript
private onPickerSelect(event: CustomEvent<DateTimeSelectEvent>) {
  const { from, time } = event.detail;

  // Validate picker output
  if (!from || !time) {
    console.error('Picker returned incomplete values:', { from, time });
    // Keep picker open, let user try again
    return;
  }

  // Try to combine
  const combined = DateTime.fromFormat(
    `${from} ${time}`,
    `${this.dateFormat} ${this.timeFormat}`,
    { locale: this.locale }
  );

  if (combined.isValid) {
    this.value = combined.toISO();
    this.valueChange.emit(this.value);
    this.closePicker();
  } else {
    // Should never happen if formats are consistent
    console.error('Failed to combine picker values:', {
      from,
      time,
      dateFormat: this.dateFormat,
      timeFormat: this.timeFormat,
    });
    // Show error in input, close picker
    this.isInputInvalid = true;
    this.closePicker();
  }
}
```

#### Min/Max Constraint Violations

```typescript
private validateDateTime(value: string): DateTimeInputValidityState {
  // ... (validation logic from above)
  
  // If validation fails, update form internals
  if (!validityState.valid) {
    let errorMessage = this.invalidText;
    
    if (validityState.typeMismatch) {
      errorMessage = this.i18nErrorDateTimeUnparsable;
    } else if (validityState.rangeUnderflow) {
      errorMessage = this.invalidText || `Date time must be after ${this.minDate}`;
    } else if (validityState.rangeOverflow) {
      errorMessage = this.invalidText || `Date time must be before ${this.maxDate}`;
    } else if (validityState.valueMissing) {
      errorMessage = this.invalidText || 'This field is required';
    }
    
    this.setFormValidity(false, errorMessage);
  }
  
  return validityState;
}
```

#### Error Handling Summary

| Error Type | Strategy | User Feedback |
|------------|----------|---------------|
| **Invalid typed input** | Keep in input field, mark invalid | Red border + error message |
| **Invalid ISO prop** | Show raw value, log error | Red border + error message |
| **Parse failure** | Keep partial input, mark invalid | Red border + error message |
| **Picker combination error** | Close picker, log error | Console warning (shouldn't happen) |
| **Min/Max violation** | Update validity state | Red border + constraint message |
| **Required field empty** | Update validity state | Error message on blur/submit |

**Key Principles:**
- ✅ Never throw exceptions that crash the component
- ✅ Always log errors to console with context
- ✅ Provide clear user feedback via validation messages
- ✅ Preserve user input when possible (don't clear on error)
- ✅ Use form validation API for proper form integration

---

## Figma Design Analysis ✅

**Source:** [All variants view](https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=70048-132621&m=dev) - 160+ variants

### Complete Variant Matrix

The design includes **200 total variants** covering:

- **5 States:** Default, Hover, Focused, ReadOnly, Disabled
- **5 Validation States:** Default, Invalid, Warning, Info, Valid
- **2 Filled States:** True (with value), False (empty with placeholder)
- **2 Text Alignments:** Start (left), End (right)
- **2 Helper Text Modes:** Below input, As tooltip

### Input Field Design (Base Structure)

- **Display Value:** `May-22-2022 20:00:00.000` (includes milliseconds)
- **Placeholder:** `Enter date and time` (when empty)
- **Icon:** Calendar icon button (from `@siemens/ix-icons/icons`)
- **Structure:**
  - Optional label above input (e.g., "Label\*")
  - Input field with formatted datetime text
  - Calendar icon button on the right
  - Optional helper/validation text below (or as tooltip)

### State-Specific Behaviors

**Default State:**

- Normal border and text colors
- Calendar icon button visible and interactive

**Hover State:**

- Subtle hover effect on input field
- Icon button shows hover state

**Focused State:**

- Blue focus ring around input (`--border-color-focus-bdr`)
- Input becomes active for editing
- Picker can be opened

**ReadOnly State:**

- **Calendar icon button is HIDDEN** (no picker access)
- Text appears normal (not dimmed)
- Input cannot be edited
- Value is displayed but not interactive

**Disabled State:**

- Text and icon appear faded/dimmed (reduced opacity)
- Calendar icon button is grayed out but still visible
- No hover or focus effects
- Cannot open picker or edit

### Validation States

**Invalid (Error):**

- **Red border** around input
- **Red error message** below with ⊗ icon
- Text: "Invalid text" (customizable via `invalidText` prop)

**Warning:**

- **Orange/yellow message** below with ⚠ icon
- Text: "Warning text" (customizable via `warningText` prop)

**Info:**

- **Blue message** below with ⓘ icon
- Text: "Info text" (customizable via `infoText` prop)

**Valid (Success):**

- **Green message** below with ✓ icon
- Text: "Valid text" (customizable via `validText` prop)

### Picker Dropdown Design

- **Layout:** Side-by-side (Date picker | Time picker)
- **Date Picker (Left):**

  - Calendar header with previous/next month navigation
  - Month/year dropdown selector ("May 2026")
  - Standard 7-column calendar grid (Mon-Sun)
  - Selected date highlighted in cyan (#00ffb9)
  - Today's date has border outline

- **Time Picker (Right):**

  - Header: "Time" label
  - Column headers: `hr | min | sec | ms`
  - Scrollable columns for each time unit
  - Separators: `:` between hr/min/sec, `.` before ms
  - Selected values highlighted in cyan (#00ffb9)
  - Supports milliseconds (0, 100, 200, 300, ...)

- **Footer:**
  - Divider line
  - "Confirm" button (primary cyan button) aligned to right

---

## Dependencies

### Required Packages (already in use)

- `@stencil/core` - Component framework
- `luxon` - Date/time handling
- `@siemens/ix-icons` - Icons

### Required Components (already exist)

- `ix-datetime-picker` - Picker UI
- `ix-dropdown` - Dropdown container
- `ix-icon-button` - Icon button for opening picker
- `ix-input` utilities - Slot handling, padding adjustments

---

## Risks and Mitigation

### Risk 1: Dropdown Size

**Risk:** `ix-datetime-picker` might be too large for dropdown context
**Mitigation:**

- Test early in implementation
- Add CSS to constrain size if needed
- Consider compact layout option

### Risk 2: Value Format Complexity

**Risk:** Converting between ISO 8601, Luxon, and display formats may introduce bugs
**Mitigation:**

- Write comprehensive unit tests for format conversion
- Document format requirements clearly
- Validate formats on input

### Risk 3: Validation Edge Cases

**Risk:** Min/max datetime validation across timezones can be complex
**Mitigation:**

- Use Luxon's comparison operators
- Document timezone behavior (no timezone = local time)
- Add tests for edge cases

### Risk 4: Framework Integration Issues

**Risk:** Auto-generated wrappers might not work correctly
**Mitigation:**

- Follow existing component patterns exactly
- Test early in all frameworks
- Check Stencil docs for form-associated components

---

## Success Criteria

✅ Component passes all tests
✅ Works in all supported frameworks (Angular, React, Vue, HTML)
✅ Form submission works correctly
✅ Validation works as expected
✅ Accessible (keyboard navigation, ARIA, screen readers)
✅ Matches Figma design specification
✅ Consistent API with other input components
✅ Documentation complete with examples
✅ Cross-browser compatibility
✅ Passes code review

---

## Next Steps

1. **Review this document** with the team/stakeholders
2. **Clarify open questions** (especially Figma design details)
3. **Create feature branch** from main
4. **Start Phase 1** implementation
5. **Iterative development** with regular testing

---

## References

### Design Specifications

- **Figma (Main):** https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=69781-31295
- **Figma (All Variants):** https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=70048-132621&m=dev (200 variants)
- **Figma (Input - Focused State):** https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=70048-132758&m=dev
- **Figma (Input - Default State):** https://www.figma.com/design/r2nqdNNXXZtPmWuVjIlM1Q/iX-Components?node-id=70048-132656&m=dev

### Official iX Documentation

- **Date Input:** https://ix.siemens.io/docs/controls/date-input
- **Time Input:** https://ix.siemens.io/docs/controls/time-input
- **Date Time Picker:** https://ix.siemens.io/docs/components/date-time-picker/code
- **Forms Field:** https://ix.siemens.io/docs/controls/forms/forms-field
- **Validation:** https://ix.siemens.io/docs/controls/forms/forms-validation

### Technical Documentation

- **Luxon Docs:** https://moment.github.io/luxon/
- **HTML5 datetime-local:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local
- **Stencil Form-Associated:** https://stenciljs.com/docs/form-associated

### Existing Components Reference

- `packages/core/src/components/date-input/` - Input pattern reference
- `packages/core/src/components/time-input/` - Time handling reference
- `packages/core/src/components/datetime-picker/` - Picker UI to reuse
- `packages/core/src/components/utils/input/picker-input.util.ts` - Shared utilities

---

## Summary & Key Takeaways

### ✅ Official Documentation Guidelines

**From Date Input & Time Input Official Docs:**

**Purpose:**

- Used in forms, filters, and scheduling tools
- Ensures consistent and accurate datetime entries
- Maintains data integrity

**Required Features:**

1. **Form-associated component** (Form ready)
2. **5 Component States:** Default, Hover, Focused, Read-only, Disabled
3. **Validation System:**
   - Valid, Info, Warning, Invalid feedback types
   - Auto-invalid when datetime is not parsable
   - Custom error message prop for unparsable input
4. **Interaction Pattern:**
   - Click or focus opens picker
   - Mouse/keyboard navigation in picker
   - **"Confirm" button closes picker** (not auto-close)
   - Escape key closes picker
   - Typing valid datetime also closes picker
5. **Standard Form Field Props:**
   - Label (optional)
   - Required indicator
   - Helper text
   - Feedback text
   - Show text as tooltip option
   - Placeholder
   - Text alignment (default: start/left)
6. **Overflow Handling:** Input wide enough for full datetime display
7. **Format Props:**
   - Two separate props: `dateFormat` (default: `yyyy/LL/dd`) and `timeFormat` (default: `HH:mm:ss`)
   - Matches `datetime-picker` API
   - Users can customize for milliseconds: `timeFormat="HH:mm:ss.SSS"`
   - Custom error message for unparsable values

**Icon Behavior:**

- Calendar icon for datetime-input (like date-input)
- Icon button to open picker
- Icon hidden in read-only state
- Icon visible but disabled in disabled state

**Alignment:**

- Always left-aligned by default
- Text alignment prop available

**Dos:**

- Use consistent formats throughout application
- Provide clear format instructions
- Consider localization
- Validate input with clear feedback

**Don'ts:**

- Don't use ambiguous formats without context
- Don't allow free text without validation

---

### ✅ Confirmed Specifications (from Figma)

1. **Component Tag:** `ix-datetime-input`
2. **Value Format:** ISO 8601 datetime-local (`YYYY-MM-DDTHH:mm:ss.SSS`)
3. **Display Format:** Two separate props matching `datetime-picker`
   - `dateFormat = 'yyyy/LL/dd'` (e.g., "2026/01/20")
   - `timeFormat = 'HH:mm:ss'` (e.g., "13:07:04")
4. **Milliseconds Support:** Optional via custom `timeFormat="HH:mm:ss.SSS"`
5. **Icon:** Calendar icon from `@siemens/ix-icons/icons`
6. **Picker:** Reuse `ix-datetime-picker` component in dropdown with `singleSelection={true}`
7. **Layout:** Side-by-side (Date | Time)
8. **Confirm Button:** "Confirm" text (prop: `i18nDone`)
9. **Validation:** Same pattern as date-input and time-input
10. **Form Ready:** Form-associated component with full form integration
11. **Intervals:** NOT supported in v1.0 (datetime-picker limitation)

### ❌ Out of Scope (Confirmed)

**The following features are explicitly OUT OF SCOPE:**

1. **❌ Timezone Support**

   - Neither `date-input` nor `time-input` support timezone
   - User story explicitly states: "Out-of-scope: timezone selection"
   - Component uses local/system timezone only

2. **❌ Range Selection (from/to)**
   - Neither `date-input` nor `time-input` support range selection
   - Both are single-value components only
   - Even though `date-picker` has range support, `date-input` doesn't expose it
   - Datetime range would require a separate component (e.g., `ix-datetime-range-input`)

**Consistency Pattern:**

| Feature             | `date-input` | `time-input` | `datetime-input` |
| ------------------- | ------------ | ------------ | ---------------- |
| **Timezone**        | ❌ No        | ❌ No        | ❌ **No**        |
| **Range Selection** | ❌ No        | ❌ No        | ❌ **No**        |
| **Single Value**    | ✅ Yes       | ✅ Yes       | ✅ **Yes**       |
| **Form-associated** | ✅ Yes       | ✅ Yes       | ✅ **Yes**       |
| **5 States**        | ✅ Yes       | ✅ Yes       | ✅ **Yes**       |
| **Validation**      | ✅ Yes       | ✅ Yes       | ✅ **Yes**       |

---

### 🎯 Implementation Approach

**Strategy:** Follow the exact pattern of `ix-date-input` and `ix-time-input`:

- Same props structure (adapted for datetime)
- Same validation approach
- Same dropdown integration pattern
- Same styling approach
- Reuse `ix-datetime-picker` as the picker UI

**Key Files to Reference:**

- `packages/core/src/components/date-input/date-input.tsx` - Structure and pattern
- `packages/core/src/components/time-input/time-input.tsx` - Time handling and intervals
- `packages/core/src/components/datetime-picker/datetime-picker.tsx` - Picker UI
- `packages/core/src/components/utils/input/picker-input.util.ts` - Shared utilities

### 📋 Implementation Checklist

#### Pre-Implementation

- [ ] Create feature branch from `main`
- [ ] Review investigation document with team

#### Phase 1: Component Setup (1-2 hours)

- [ ] Create directory: `packages/core/src/components/datetime-input/`
- [ ] Create files: `.tsx`, `.scss`, `.types.ts`, `readme.md`, `test/datetime-input.ct.ts`
- [ ] Define component with Stencil decorators
- [ ] Define `DateTimeInputValidityState` interface

#### Phase 2: Props & Events (2 hours)

- [ ] Define all @Prop decorators
- [ ] Define all @Event emitters
- [ ] Add @Watch handlers
- [ ] Add JSDoc comments

#### Phase 3: Input Field (4-6 hours)

- [ ] Implement input element structure
- [ ] Add calendar icon button
- [ ] Implement value formatting (ISO → display)
- [ ] Implement value parsing (display → ISO)
- [ ] Add slots (start/end)
- [ ] Handle focus/blur events
- [ ] Handle keyboard events

#### Phase 4: Picker Integration (4-6 hours)

- [ ] Add `ix-datetime-picker` in dropdown
- [ ] Configure dropdown positioning
- [ ] Implement open/close logic
- [ ] Sync input value ↔ picker state
- [ ] Handle "Confirm" button
- [ ] Handle dropdown dismiss

#### Phase 5: Validation (3-4 hours)

- [ ] Implement form internals
- [ ] Add datetime parsing validation
- [ ] Add min/max validation
- [ ] Add required validation
- [ ] Create validity state
- [ ] Hook validation lifecycle

#### Phase 6: Styling (3-4 hours)

- [ ] Create SCSS file
- [ ] Style input wrapper
- [ ] Style dropdown container
- [ ] Add validation states
- [ ] Test theming

#### Phase 7: Framework Integration (3-4 hours)

- [ ] Verify Angular wrapper
- [ ] Verify React wrapper
- [ ] Verify Vue wrapper
- [ ] Test in all test apps
- [ ] Create usage examples

#### Phase 8: Documentation & Testing (4-6 hours)

- [ ] Write README with examples
- [ ] Add JSDoc comments
- [ ] Create component tests
- [ ] Test keyboard navigation
- [ ] Test accessibility
- [ ] Test forms
- [ ] Add to HTML test app

#### Phase 9: Review & Polish (2-4 hours)

- [ ] Code review
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Fix issues
- [ ] Update CHANGELOG
- [ ] Create PR

### 🎯 Ready to Implement

All questions have been answered. The specification is complete and ready for implementation.

**Estimated Timeline:** 26-38 hours (3.5-5 days)

**Next Action:** Create feature branch and begin Phase 1 (Component Setup)

---

**Document Version:** 2.0  
**Last Updated:** January 8, 2026 (Updated with Figma specifications)  
**Author:** AI Assistant (Investigation)  
**Status:** ✅ Complete - Ready for Implementation

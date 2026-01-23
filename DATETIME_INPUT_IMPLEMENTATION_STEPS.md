# DateTime Input Implementation - Step-by-Step Guide

**Component**: `ix-datetime-input`  
**Status**: Ready for Implementation  
**Approach**: Micro-steps (10-30 lines per step)  
**Review**: Each step requires approval before proceeding

---

## 📋 Table of Contents

- [Phase 0: Prerequisites (1 step)](#phase-0-prerequisites)
- [Phase 1: Component Setup (6 steps)](#phase-1-component-setup)
- [Phase 2: Props & Events Definition (10 steps)](#phase-2-props--events-definition)
- [Phase 3: Input Field Implementation (12 steps)](#phase-3-input-field-implementation)
- [Phase 4: Picker Integration (10 steps)](#phase-4-picker-integration)
- [Phase 5: Validation Implementation (9 steps)](#phase-5-validation-implementation)
- [Phase 6: Styling (5 steps)](#phase-6-styling)
- [Phase 7: Framework Integration (4 steps)](#phase-7-framework-integration)
- [Phase 8: Documentation & Testing (8 steps)](#phase-8-documentation--testing)
- [Phase 9: Review & Polish (4 steps)](#phase-9-review--polish)

---

## 🛠️ Development Setup & Workflow

### Commands to Run

**1. Build Core Library (first step - required):**

```bash
cd packages/core
pnpm run build
```

- **What it does**: Production build of the component library
- **When**: Run this FIRST before starting dev servers
- **Required**: Must complete successfully before proceeding

**2. Start Core Development Server (with hot-reload):**

```bash
cd packages/core
pnpm run start
```

- **What it does**: Builds the core library in watch mode with dev server
- **URL**: Open `http://localhost:3333/` in your browser
- **Hot-reload**: ✅ Yes - changes rebuild automatically

**3. Start HTML Test App (recommended for testing):**

```bash
# In a separate terminal
cd packages/html-test-app
pnpm start
```

- **What it does**: Runs Vite dev server for the HTML test app
- **URL**: Open `http://localhost:5173/preview-examples/datetime-input-test.html`
- **Hot-reload**: ✅ Yes - instant updates

### Testing During Development

**Option 1: HTML Test App (Recommended) ✅**

1. Create test file: `packages/html-test-app/src/preview-examples/datetime-input-test.html`
2. Start HTML test app: `pnpm start` in `packages/html-test-app/`
3. Navigate to: `http://localhost:5173/preview-examples/datetime-input-test.html`

**Option 2: Core Dev Server**

1. Start core server: `pnpm run start` in `packages/core/`
2. Open: `http://localhost:3333/`
3. View component documentation page

### When to Check Results in Browser

| Phase       | Step      | When to Check Browser                                               |
| ----------- | --------- | ------------------------------------------------------------------- |
| **Phase 0** | Step 0.1  | ✅ **Prerequisites** - Verify dependencies exist                    |
| **Phase 1** | Step 1.5  | ✅ **First check** - After basic render method (component compiles) |
| **Phase 1** | Step 1.6  | ✅ **TypeScript** - Verify component appears in components.d.ts     |
| **Phase 3** | Step 3.7  | ✅ Check input element renders                                      |
| **Phase 3** | Step 3.10 | ✅ Check updated render with slots                                  |
| **Phase 4** | Step 4.4  | ✅ Check dropdown appears                                           |
| **Phase 4** | Step 4.7  | ✅ **Important** - Test picker selection works                      |
| **Phase 5** | Step 5.12 | ✅ Check validation messages display                                |
| **Phase 6** | Step 6.5  | ✅ **Theme test** - Check dark/light themes                         |
| **Phase 7** | Step 7.1  | ✅ **Final test** - Full functionality check                        |

### Recommended Workflow

**First time setup:**

```bash
# Step 1: Build core library (required first!)
cd packages/core
pnpm run build

# Step 2: Terminal 1 - Core library with hot-reload
cd packages/core
pnpm run start

# Step 3: Terminal 2 - HTML test app
cd packages/html-test-app
pnpm start
```

**During development:**

1. Edit code in `packages/core/src/components/datetime-input/`
2. Core rebuilds automatically (Terminal 1)
3. Refresh browser at `http://localhost:5173/preview-examples/datetime-input-test.html`
4. See changes instantly!

**Key milestones to check browser:**

- ✅ **Step 0.1** - Prerequisites verified
- ✅ **Step 1.5** - Component compiles and renders placeholder
- ✅ **Step 1.6** - TypeScript integration confirmed
- ✅ **Step 3.10** - Input field appears with icon button
- ✅ **Step 4.7** - Picker opens and selection works
- ✅ **Step 5.12** - Validation messages show correctly
- ✅ **Step 7.1** - Complete component works in HTML test app

---

## Phase 0: Prerequisites

### Step 0.1: Verify Dependencies ✅ READY

**Action**: Verify required utility files exist  
**Commands**:

```bash
# Run from project root (/Users/okaduk/Documents/projects/siemens/ix)
ls packages/core/src/components/utils/input/picker-input.util.ts
ls packages/core/src/utils/make-ref.ts
ls packages/core/src/components/input/input.fc.tsx
ls packages/core/src/components/utils/input/index.ts
```

**Expected Result**: All files exist (no errors)

**If missing**:

- Check if you're on the correct branch
- Verify files haven't been moved/renamed
- Run `git status` to check repository state

**Review Point**: ✅ All dependencies exist?  
**Status**: ⏳ Pending

---

## Phase 1: Component Setup

### Step 1.1: Create Directory Structure ✅ READY

**Action**: Create empty files and directories  
**Commands**:

```bash
# Run from project root
mkdir -p packages/core/src/components/datetime-input/test
touch packages/core/src/components/datetime-input/datetime-input.tsx
touch packages/core/src/components/datetime-input/datetime-input.scss
touch packages/core/src/components/datetime-input/datetime-input.types.ts
touch packages/core/src/components/datetime-input/readme.md
touch packages/core/src/components/datetime-input/test/datetime-input.ct.ts
```

**Expected Structure**:

```
packages/core/src/components/datetime-input/
├── datetime-input.tsx          (empty file)
├── datetime-input.scss         (empty file)
├── datetime-input.types.ts     (empty file)
├── readme.md                   (empty file)
└── test/
    └── datetime-input.ct.ts    (empty file)
```

**Review Point**: ✅ Structure created?  
**Status**: ⏳ Pending

---

### Step 1.2: Define Types Interface ✅ READY

**File**: `datetime-input.types.ts`  
**Lines**: ~8 lines  
**Code**:

```typescript
/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 * SPDX-License-Identifier: MIT
 */

export interface DateTimeInputValidityState extends ValidityState {
  invalidReason?: string;
}
```

**Purpose**: Define TypeScript types for validation state  
**Review Point**: ✅ Types look correct?  
**Status**: ⏳ Pending

---

### Step 1.3: Component Shell - Imports ✅ READY

**File**: `datetime-input.tsx`  
**Lines**: ~8 lines  
**Code**:

```typescript
/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 * SPDX-License-Identifier: MIT
 */

import { iconCalendar } from '@siemens/ix-icons/icons';
import { AttachInternals, Component, Element, Host, h } from '@stencil/core';
import { DateTime } from 'luxon';
```

**Purpose**: Import required dependencies  
**Review Point**: ✅ All imports needed?  
**Status**: ⏳ Pending

---

### Step 1.4: Component Decorator ✅ READY

**File**: `datetime-input.tsx` (append)  
**Lines**: ~10 lines  
**Code**:

```typescript
@Component({
  tag: 'ix-datetime-input',
  styleUrl: 'datetime-input.scss',
  shadow: true,
  formAssociated: true,
})
export class DatetimeInput {
  @Element() hostElement!: HTMLIxDatetimeInputElement;
  @AttachInternals() formInternals!: ElementInternals;
}
```

**Purpose**: Define component metadata and attach form internals  
**Review Point**: ✅ Component shell ready?  
**Status**: ⏳ Pending

---

### Step 1.5: Basic Render Method ✅ READY

**File**: `datetime-input.tsx` (inside class)  
**Lines**: ~8 lines  
**Code**:

```typescript
render() {
  return (
    <Host>
      <div>DateTime Input Placeholder</div>
    </Host>
  );
}
```

**Purpose**: Basic render to verify component compiles  
**Commands to test**:

```bash
cd packages/core
npm run build
```

**Expected Result**: Build succeeds without errors  
**Review Point**: ✅ Component compiles without errors?  
**Status**: ⏳ Pending

---

### Step 1.6: Verify TypeScript Integration ✅ READY

**Action**: Verify component appears in TypeScript definitions  
**Commands**:

```bash
# After successful build from Step 1.5
ls packages/core/components.d.ts
grep "IxDatetimeInput" packages/core/components.d.ts
```

**Expected Result**:

- `components.d.ts` file exists
- Contains `HTMLIxDatetimeInputElement` interface
- Contains component type definitions

**If missing**:

- Re-run build: `npm run build`
- Check Stencil configuration in `stencil.config.ts`

**Review Point**: ✅ TypeScript definitions generated?  
**Status**: ⏳ Pending

---

## Phase 2: Props & Events Definition

### Step 2.1: Basic Props ✅ READY

**File**: `datetime-input.tsx` (inside class, before render)  
**Lines**: ~14 lines  
**Code**:

```typescript
/**
 * Name of the input element
 */
@Prop({ reflect: true }) name?: string;

/**
 * Placeholder of the input element
 */
@Prop({ reflect: true }) placeholder?: string;

/**
 * Value of the input element in ISO 8601 datetime-local format (e.g. '2026-01-20T13:07:04')
 */
@Prop({ reflect: true, mutable: true }) value?: string = '';
```

**Purpose**: Define core input properties  
**Review Point**: ✅ Basic props added correctly?  
**Status**: ⏳ Pending

---

### Step 2.2: Format Props ✅ READY

**File**: `datetime-input.tsx` (after basic props)  
**Lines**: ~15 lines  
**Code**:

```typescript
/**
 * Date format string for display.
 * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
 * @example 'yyyy/LL/dd' → "2026/01/20", 'LLL-dd-yyyy' → "May-22-2026"
 */
@Prop() dateFormat: string = 'yyyy/LL/dd';

/**
 * Time format string for display.
 * See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
 * @example 'HH:mm:ss' → "13:07:04", 'HH:mm:ss.SSS' → "13:07:04.000"
 */
@Prop() timeFormat: string = 'HH:mm:ss';

/**
 * Locale identifier for date/time formatting (e.g. 'en-US', 'de-DE')
 */
@Prop() locale?: string;
```

**Purpose**: Control date and time display formatting  
**Note**: Matches `datetime-picker` API exactly  
**Review Point**: ✅ Format props match datetime-picker API?  
**Status**: ⏳ Pending

---

### Step 2.3: Date Constraint Props ✅ READY

**File**: `datetime-input.tsx` (after format props)  
**Lines**: ~10 lines  
**Code**:

```typescript
/**
 * The earliest date that can be selected in ISO 8601 format.
 * If not set there will be no restriction.
 */
@Prop() minDate = '';

/**
 * The latest date that can be selected in ISO 8601 format.
 * If not set there will be no restriction.
 */
@Prop() maxDate = '';
```

**Purpose**: Set min/max date constraints for validation  
**Review Point**: ✅ Constraints defined?  
**Status**: ⏳ Pending

---

### Step 2.4: Boolean State Props ✅ READY

**File**: `datetime-input.tsx` (after constraints)  
**Lines**: ~15 lines  
**Code**:

```typescript
/**
 * Required attribute - field must have a value
 */
@Prop() required?: boolean;

/**
 * Readonly attribute - input cannot be edited, calendar icon is hidden
 */
@Prop() readonly: boolean = false;

/**
 * Disabled attribute - input is disabled and grayed out
 */
@Prop() disabled: boolean = false;
```

**Purpose**: Control input state (required, readonly, disabled)  
**Review Point**: ✅ State props correct?  
**Status**: ⏳ Pending

---

### Step 2.5: Label & Message Props ✅ READY

**File**: `datetime-input.tsx` (after state props)  
**Lines**: ~32 lines  
**Code**:

```typescript
/**
 * Label of the input field
 */
@Prop() label?: string;

/**
 * Helper text below the input field
 */
@Prop() helperText?: string;

/**
 * Error text below the input field (shown when invalid)
 */
@Prop({ reflect: true }) invalidText?: string;

/**
 * Info text below the input field
 */
@Prop() infoText?: string;

/**
 * Warning text below the input field
 */
@Prop() warningText?: string;

/**
 * Valid text below the input field (shown when valid)
 */
@Prop() validText?: string;

/**
 * Show text as tooltip instead of below input
 */
@Prop() showTextAsTooltip?: boolean;
```

**Purpose**: Define label and validation message props  
**Review Point**: ✅ Message props complete?  
**Status**: ⏳ Pending

---

### Step 2.6: i18n Props ✅ READY

**File**: `datetime-input.tsx` (after message props)  
**Lines**: ~16 lines  
**Code**:

```typescript
/**
 * I18n string for error when datetime cannot be parsed
 */
@Prop({ attribute: 'i18n-error-date-time-unparsable' })
  i18nErrorDateTimeUnparsable = 'Date time is not valid';

/**
 * Text of confirm button in picker (uses 'Confirm' not 'Done')
 */
@Prop({ attribute: 'i18n-done' }) i18nDone: string = 'Confirm';

/**
 * Top label of time picker section
 */
@Prop({ attribute: 'i18n-time' }) i18nTime: string = 'Time';
```

**Purpose**: Internationalization strings  
**Note**: Prop name is `i18nDone` but default is 'Confirm' (modern terminology)  
**Review Point**: ✅ i18n props ready?  
**Status**: ⏳ Pending

---

### Step 2.7: ARIA Props ✅ READY

**File**: `datetime-input.tsx` (after i18n props)  
**Lines**: ~16 lines  
**Code**:

```typescript
/**
 * ARIA label for the calendar icon button
 * Will be set as aria-label on the button element
 */
@Prop() ariaLabelCalendarButton?: string;

/**
 * ARIA label for the previous month icon button in date picker
 */
@Prop() ariaLabelPreviousMonthButton?: string;

/**
 * ARIA label for the next month icon button in date picker
 */
@Prop() ariaLabelNextMonthButton?: string;
```

**Purpose**: Accessibility labels for screen readers  
**Review Point**: ✅ ARIA props added?  
**Status**: ⏳ Pending

---

### Step 2.8: Picker Configuration Props ✅ READY

**File**: `datetime-input.tsx` (after ARIA props)  
**Lines**: ~28 lines  
**Code**:

```typescript
/**
 * Shows week numbers displayed on the left side of the date picker
 */
@Prop() showWeekNumbers = false;

/**
 * The index of which day to start the week on (0=Sunday, 1=Monday, etc.)
 * Based on Locale#weekdays array
 */
@Prop() weekStartIndex = 0;

/**
 * Show time reference input (AM/PM selector for 12-hour format)
 */
@Prop() showTimeReference: boolean = false;

/**
 * Set time reference (AM/PM) when using 12-hour format
 */
@Prop() timeReference?: 'AM' | 'PM';

/**
 * If false, pressing Enter will submit the form (if inside a form).
 * Set to true to suppress submit on Enter.
 */
@Prop({ reflect: true }) suppressSubmitOnEnter: boolean = false;

/**
 * Text alignment within the input ('start' for left, 'end' for right)
 */
@Prop() textAlignment: 'start' | 'end' = 'start';
```

**Purpose**: Configure picker behavior  
**Review Point**: ✅ Config props complete?  
**Status**: ⏳ Pending

---

### Step 2.9: Events ✅ READY

**File**: `datetime-input.tsx` (after all props)  
**Lines**: ~20 lines  
**Code**:

```typescript
/**
 * Input change event - emitted when datetime value changes
 */
@Event({ cancelable: false }) valueChange!: EventEmitter<string | undefined>;

/**
 * Validation state change event - emitted when validation state changes
 */
@Event() validityStateChange!: EventEmitter<DateTimeInputValidityState>;

/** @internal */
@Event() ixFocus!: EventEmitter<void>;

/** @internal */
@Event() ixBlur!: EventEmitter<void>;
```

**Update imports at top of file** - Change the existing import line from Step 1.3:

```typescript
// BEFORE (from Step 1.3):
import { AttachInternals, Component, Element, Host, h } from '@stencil/core';

// AFTER (add Event, EventEmitter):
import { AttachInternals, Component, Element, Event, EventEmitter, Host, h } from '@stencil/core';
```

**Also add this import**:

```typescript
import type { DateTimeInputValidityState } from './datetime-input.types';
```

**Purpose**: Define component events  
**Review Point**: ✅ Events defined correctly?  
**Status**: ⏳ Pending

---

### Step 2.10: State Variables ✅ READY

**File**: `datetime-input.tsx` (after events)  
**Lines**: ~12 lines  
**Code**:

```typescript
@State() show = false;
@State() from?: string | null = null;
@State() time?: string | null = null;
@State() isInputInvalid = false;
@State() isInvalid = false;
@State() isValid = false;
@State() isInfo = false;
@State() isWarning = false;
@State() focus = false;
```

**Update imports at top of file** - Add State to the @stencil/core import:

```typescript
// Update existing import to add State:
import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  h,
  State, // Add this
} from '@stencil/core';
```

**Purpose**: Internal component state  
**Review Point**: ✅ State variables complete?  
**Status**: ⏳ Pending

---

## Phase 3: Input Field Implementation

### Step 3.1: Add Refs ✅ READY

**File**: `datetime-input.tsx` (after state variables)  
**Lines**: ~8 lines  
**Code**:

```typescript
private readonly inputElementRef = makeRef<HTMLInputElement>();
private readonly dropdownElementRef = makeRef<HTMLIxDropdownElement>();
private readonly slotStartRef = makeRef<HTMLDivElement>();
private readonly slotEndRef = makeRef<HTMLDivElement>();
private invalidReason?: string;
private touched = false;
```

**Add import at top of file**:

```typescript
import { makeRef } from '../utils/make-ref';
```

**Purpose**: Create references to DOM elements  
**Review Point**: ✅ Refs added?  
**Status**: ⏳ Pending

---

### Step 3.2: Form Value Update Method ✅ READY

**File**: `datetime-input.tsx` (after refs)  
**Lines**: ~10 lines  
**Code**:

```typescript
updateFormInternalValue(value: string | undefined): void {
  if (value) {
    this.formInternals.setFormValue(value);
  } else {
    this.formInternals.setFormValue(null);
  }
  this.value = value;
}
```

**Purpose**: Sync component value with form internals  
**Review Point**: ✅ Form integration works?  
**Status**: ⏳ Pending

---

### Step 3.3: Display Value Helper ✅ READY

**File**: `datetime-input.tsx` (after form method)  
**Lines**: ~14 lines  
**Code**:

```typescript
private getDisplayValue(): string {
  if (!this.value) return '';

  const dateTime = DateTime.fromISO(this.value, { zone: 'local' });

  if (dateTime.isValid) {
    return dateTime.toFormat(`${this.dateFormat} ${this.timeFormat}`);
  }

  // Show invalid value as-is for user to see/fix
  return this.value;
}
```

**Purpose**: Convert ISO 8601 value to display format  
**Review Point**: ✅ Display formatting correct?  
**Status**: ⏳ Pending

---

### Step 3.4: Value Watch Handler ✅ READY

**File**: `datetime-input.tsx` (after display helper)  
**Lines**: ~18 lines  
**Code**:

```typescript
@Watch('value')
watchValue() {
  if (!this.value) {
    this.from = null;
    this.time = null;
    return;
  }

  const dateTime = DateTime.fromISO(this.value, { zone: 'local' });

  if (dateTime.isValid) {
    // Split ISO value into date/time strings for picker
    this.from = dateTime.toFormat(this.dateFormat);
    this.time = dateTime.toFormat(this.timeFormat);
  }
}
```

**Update imports at top** - Add Watch to @stencil/core import:

```typescript
import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  h,
  State,
  Watch, // Add this
} from '@stencil/core';
```

**Purpose**: Split ISO value into date/time for picker  
**Review Point**: ✅ Value watcher works?  
**Status**: ⏳ Pending

---

### Step 3.5: Dropdown Open/Close Methods ✅ READY

**File**: `datetime-input.tsx` (after watch handler)  
**Lines**: ~8 lines  
**Code**:

```typescript
async openDropdown() {
  return openDropdownUtil(this.dropdownElementRef);
}

async closeDropdown() {
  return closeDropdownUtil(this.dropdownElementRef);
}
```

**Add imports at top of file**:

```typescript
import { closeDropdown as closeDropdownUtil, handleIconClick, openDropdown as openDropdownUtil } from '../utils/input/picker-input.util';
```

**Purpose**: Manage dropdown visibility  
**Review Point**: ✅ Dropdown methods ready?  
**Status**: ⏳ Pending

---

### Step 3.6: Icon Click Handler ✅ READY

**File**: `datetime-input.tsx` (after dropdown methods)  
**Lines**: ~10 lines  
**Code**:

```typescript
onCalendarClick(event: Event) {
  handleIconClick(
    event,
    this.show,
    () => this.openDropdown(),
    this.inputElementRef
  );
}
```

**Purpose**: Handle calendar icon button clicks  
**Review Point**: ✅ Icon handler works?  
**Status**: ⏳ Pending

---

### Step 3.7: Basic Input Element ✅ READY

**File**: `datetime-input.tsx` (after icon handler)  
**Lines**: ~30 lines  
**Code**:

```typescript
private renderInput() {
  const displayValue = this.getDisplayValue();

  return (
    <div class="input-wrapper">
      <input
        ref={this.inputElementRef}
        type="text"
        value={displayValue}
        placeholder={this.placeholder}
        name={this.name}
        disabled={this.disabled}
        readOnly={this.readonly}
        readonly={this.readonly}
        required={this.required}
        autoComplete="off"
        class={{ 'is-invalid': this.isInputInvalid }}
        onFocus={() => {
          this.openDropdown();
          this.ixFocus.emit();
        }}
        onBlur={() => {
          this.ixBlur.emit();
          this.touched = true;
        }}
        style={{ textAlign: this.textAlignment }}
      />
    </div>
  );
}
```

**Purpose**: Render basic input element  
**Review Point**: ✅ Input renders?  
**Status**: ⏳ Pending

---

### Step 3.8: Add Slots to Input ✅ READY

**File**: `datetime-input.tsx` (modify renderInput method)  
**Lines**: ~25 lines  
**Code** - Replace the entire `return` statement in `renderInput()`:

```typescript
return (
  <div class="input-wrapper">
    <SlotStart slotStartRef={this.slotStartRef}></SlotStart>
    <input
      ref={this.inputElementRef}
      type="text"
      value={displayValue}
      placeholder={this.placeholder}
      name={this.name}
      disabled={this.disabled}
      readOnly={this.readonly}
      readonly={this.readonly}
      required={this.required}
      autoComplete="off"
      class={{ 'is-invalid': this.isInputInvalid }}
      onFocus={() => {
        this.openDropdown();
        this.ixFocus.emit();
      }}
      onBlur={() => {
        this.ixBlur.emit();
        this.touched = true;
      }}
      style={{ textAlign: this.textAlignment }}
    />
    <SlotEnd slotEndRef={this.slotEndRef}>{/* Icon button will go here in next step */}</SlotEnd>
  </div>
);
```

**Add imports at top of file**:

```typescript
import { SlotEnd, SlotStart } from '../input/input.fc';
```

**Purpose**: Add start/end slot support  
**Review Point**: ✅ Slots render?  
**Status**: ⏳ Pending

---

### Step 3.9: Add Calendar Icon Button ✅ READY

**File**: `datetime-input.tsx` (inside `<SlotEnd>` in renderInput)  
**Lines**: ~12 lines  
**Code** - Replace the comment inside `<SlotEnd>`:

```typescript
<ix-icon-button data-testid="open-calendar" class={{ 'calendar-hidden': this.disabled || this.readonly }} variant="subtle-tertiary" icon={iconCalendar} onClick={(event) => this.onCalendarClick(event)} aria-label={this.ariaLabelCalendarButton}></ix-icon-button>
```

**Purpose**: Add calendar icon button to open picker  
**Note**: Icon hidden when readonly, visible but disabled when disabled  
**Review Point**: ✅ Icon button appears and is clickable?  
**Status**: ⏳ Pending

---

### Step 3.10: Update Main Render ✅ READY

**File**: `datetime-input.tsx` (replace render method)  
**Lines**: ~12 lines  
**Code**:

```typescript
render() {
  return (
    <Host
      class={{
        disabled: this.disabled,
        readonly: this.readonly,
      }}
    >
      {this.renderInput()}
    </Host>
  );
}
```

**Purpose**: Update main render to use input renderer  
**Review Point**: ✅ Component renders correctly?  
**Status**: ⏳ Pending

---

### Step 3.11: Add Input Change Handler ✅ READY

**File**: `datetime-input.tsx` (after icon click handler)  
**Lines**: ~15 lines  
**Code**:

```typescript
private handleInputChange(event: Event) {
  const input = event.target as HTMLInputElement;
  const displayValue = input.value.trim();

  if (!displayValue) {
    this.value = undefined;
    this.updateFormInternalValue(undefined);
    this.valueChange.emit(undefined);
    this.isInputInvalid = false;
    return;
  }

  // Parsing logic will be completed in Phase 5 (Validation)
}
```

**Purpose**: Handle user typing in input field  
**Review Point**: ✅ Handler ready for parsing logic?  
**Status**: ⏳ Pending

---

### Step 3.12: Connect Input Handler ✅ READY

**File**: `datetime-input.tsx` (in renderInput, add to input element)  
**Lines**: ~1 line  
**Code** - Add this prop to the `<input>` element (after `style=...`):

```typescript
onInput={(event) => this.handleInputChange(event)}
```

**Purpose**: Connect input event to handler  
**Review Point**: ✅ Input changes trigger handler?  
**Status**: ⏳ Pending

---

## Phase 4: Picker Integration

### Step 4.1: Add Picker Ref ✅ READY

**File**: `datetime-input.tsx` (after other refs in Step 3.1)  
**Lines**: ~1 line  
**Code**:

```typescript
private readonly datetimePickerRef = makeRef<HTMLIxDatetimePickerElement>();
```

**Purpose**: Reference to datetime picker component  
**Review Point**: ✅ Ref added?  
**Status**: ⏳ Pending

---

### Step 4.2: Picker Selection Handler - Part 1 ✅ READY

**File**: `datetime-input.tsx` (after handleInputChange)  
**Lines**: ~15 lines  
**Code**:

```typescript
private async onPickerSelect(date?: string, time?: string) {
  if (!date || !time) {
    console.warn('Incomplete picker selection', { date, time });
    return;
  }

  // Combine date + time to ISO 8601
  const combined = DateTime.fromFormat(
    `${date} ${time}`,
    `${this.dateFormat} ${this.timeFormat}`,
    { locale: this.locale, zone: 'local' }
  );

  // === CONTINUED IN STEP 4.3 BELOW ===
}
```

**Purpose**: Start of picker selection handler  
**Review Point**: ✅ Handler structure correct?  
**Status**: ⏳ Pending

---

### Step 4.3: Picker Selection Handler - Part 2 ✅ READY

**File**: `datetime-input.tsx` (continue onPickerSelect method from Step 4.2)  
**Lines**: ~18 lines  
**Code** - Add after the `DateTime.fromFormat(...)` line:

```typescript
  if (combined.isValid) {
    this.value = combined.toISO();
    this.updateFormInternalValue(this.value);
    this.valueChange.emit(this.value);

    // Validation will be added in Phase 5

    this.closeDropdown();
  } else {
    console.error('Failed to combine picker values:', { date, time });
    this.isInputInvalid = true;
    this.closeDropdown();
  }
}
```

**Purpose**: Complete picker selection handler  
**Review Point**: ✅ Handler logic complete?  
**Status**: ⏳ Pending

---

### Step 4.4: Add Dropdown Container ✅ READY

**File**: `datetime-input.tsx` (in render method, after renderInput() call)  
**Lines**: ~18 lines  
**Code** - Add before closing `</Host>`:

```typescript
<ix-dropdown
  data-testid="datetime-dropdown"
  trigger={this.inputElementRef.waitForCurrent()}
  ref={this.dropdownElementRef}
  closeBehavior="outside"
  suppressOverflowBehavior={true}
  show={this.show}
  onShowChanged={(event) => {
    this.show = event.detail;
  }}
>
  {/* Picker will be added in Step 4.5 */}
</ix-dropdown>
```

**Purpose**: Add dropdown container  
**Note**: `trigger={this.inputElementRef.waitForCurrent()}` is correct (verified from date-input.tsx)  
**Review Point**: ✅ Dropdown renders?  
**Status**: ⏳ Pending

---

### Step 4.5: Add DateTime Picker - Part 1 ✅ READY

**File**: `datetime-input.tsx` (inside dropdown from Step 4.4)  
**Lines**: ~15 lines  
**Code** - Replace the comment inside `<ix-dropdown>`:

```typescript
<ix-datetime-picker
  ref={this.datetimePickerRef}
  singleSelection={true}
  from={this.from ?? ''}
  time={this.time ?? ''}
  dateFormat={this.dateFormat}
  timeFormat={this.timeFormat}
  locale={this.locale}
  minDate={this.minDate}
  maxDate={this.maxDate}
  {/* === MORE PROPS IN STEP 4.6 BELOW THIS LINE === */}
</ix-datetime-picker>
```

**Purpose**: Add datetime picker with basic props  
**Review Point**: ✅ Picker appears in dropdown?  
**Status**: ⏳ Pending

---

### Step 4.6: Add DateTime Picker - Part 2 ✅ READY

**File**: `datetime-input.tsx` (continue datetime-picker props from Step 4.5)  
**Lines**: ~12 lines  
**Code** - Add these props after `maxDate={this.maxDate}`:

```typescript
  showTimeReference={this.showTimeReference}
  timeReference={this.timeReference}
  i18nDone={this.i18nDone}
  i18nTime={this.i18nTime}
  showWeekNumbers={this.showWeekNumbers}
  weekStartIndex={this.weekStartIndex}
  ariaLabelPreviousMonthButton={this.ariaLabelPreviousMonthButton}
  ariaLabelNextMonthButton={this.ariaLabelNextMonthButton}
  {/* === EVENT HANDLER IN STEP 4.7 BELOW THIS LINE === */}
```

**Purpose**: Add remaining picker configuration  
**Review Point**: ✅ All picker props passed?  
**Status**: ⏳ Pending

---

### Step 4.7: Connect Picker Event ✅ READY

**File**: `datetime-input.tsx` (add to datetime-picker from Step 4.6)  
**Lines**: ~6 lines  
**Code** - Add after the last prop (ariaLabelNextMonthButton):

```typescript
  onDateSelect={(event) => {
    const { from, time } = event.detail;
    this.onPickerSelect(from, time);
  }}
```

**Purpose**: Connect picker selection to handler  
**Test**: Open picker, select date/time, click Confirm button  
**Expected**: Picker closes and input shows selected datetime  
**Review Point**: ✅ Picker selection works?  
**Status**: ⏳ Pending

---

### Step 4.8: Add Click Outside Handler ✅ READY

**File**: `datetime-input.tsx` (in renderInput, add to input element)  
**Lines**: ~8 lines  
**Code** - Add this prop to `<input>` (after `onInput=...`):

```typescript
onClick={(event) => {
  if (this.show) {
    event.stopPropagation();
    event.preventDefault();
  }
}}
```

**Purpose**: Prevent dropdown close when clicking input while open  
**Review Point**: ✅ Click behavior correct?  
**Status**: ⏳ Pending

---

### Step 4.9: Add Keyboard Handler ✅ READY

**File**: `datetime-input.tsx` (after onPickerSelect method)  
**Lines**: ~10 lines  
**Code**:

```typescript
private handleInputKeyDown(event: KeyboardEvent) {
  if (this.suppressSubmitOnEnter && event.key === 'Enter') {
    event.preventDefault();
    return;
  }

  // Additional keyboard handling can be added here if needed
}
```

**Purpose**: Handle keyboard events (Enter key for form submission)  
**Review Point**: ✅ Keyboard handling works?  
**Status**: ⏳ Pending

---

### Step 4.10: Connect Keyboard Handler ✅ READY

**File**: `datetime-input.tsx` (in renderInput, add to input)  
**Lines**: ~1 line  
**Code** - Add this prop to `<input>` (after `onClick=...`):

```typescript
onKeyDown={(event) => this.handleInputKeyDown(event)}
```

**Purpose**: Connect keyboard event to handler  
**Review Point**: ✅ Enter key behavior correct?  
**Status**: ⏳ Pending

---

## Phase 5: Validation Implementation

### Step 5.1: Add Validation Imports ✅ READY

**File**: `datetime-input.tsx` (at top of file)  
**Lines**: ~10 lines  
**Code** - Add these imports:

```typescript
import { ClassMutationObserver, HookValidationLifecycle, IxInputFieldComponent, ValidationResults, createClassMutationObserver, getValidationText } from '../utils/input';
import { createValidityState } from '../utils/input/picker-input.util';
```

**Purpose**: Import validation utilities  
**Review Point**: ✅ Imports added?  
**Status**: ⏳ Pending

---

### Step 5.2: Implement IxInputFieldComponent ✅ READY

**File**: `datetime-input.tsx` (update class declaration)  
**Lines**: ~2 lines  
**Code** - Change the class declaration:

```typescript
// BEFORE:
export class DatetimeInput {

// AFTER:
export class DatetimeInput implements IxInputFieldComponent<string | undefined> {
```

**Purpose**: Implement input field interface for validation  
**Review Point**: ✅ Interface implemented?  
**Status**: ⏳ Pending

---

### Step 5.3: Add Validation State Variable ✅ READY

**File**: `datetime-input.tsx` (after refs)  
**Lines**: ~1 line  
**Code** - Add after `private touched = false;`:

```typescript
private classObserver?: ClassMutationObserver;
```

**Purpose**: Track class mutations for validation  
**Review Point**: ✅ Variable added?  
**Status**: ⏳ Pending

---

### Step 5.4: Add Lifecycle Hooks ✅ READY

**File**: `datetime-input.tsx` (after updateFormInternalValue method)  
**Lines**: ~16 lines  
**Code**:

```typescript
connectedCallback(): void {
  this.classObserver = createClassMutationObserver(
    this.hostElement,
    () => this.checkClassList()
  );
}

componentWillLoad(): void {
  this.watchValue();
  this.updateFormInternalValue(this.value);
}

disconnectedCallback(): void {
  this.classObserver?.destroy();
}
```

**Purpose**: Initialize and cleanup validation observer  
**Review Point**: ✅ Lifecycle hooks added?  
**Status**: ⏳ Pending

---

### Step 5.5: Check Class List Method ✅ READY

**File**: `datetime-input.tsx` (after lifecycle hooks)  
**Lines**: ~4 lines  
**Code**:

```typescript
private checkClassList() {
  this.isInvalid = this.hostElement.classList.contains('ix-invalid');
}
```

**Purpose**: Check if component has invalid class  
**Review Point**: ✅ Class check works?  
**Status**: ⏳ Pending

---

### Step 5.6: Validation Lifecycle Hook ✅ READY

**File**: `datetime-input.tsx` (after checkClassList)  
**Lines**: ~12 lines  
**Code**:

```typescript
@HookValidationLifecycle()
hookValidationLifecycle({
  isInfo,
  isInvalid,
  isInvalidByRequired,
  isValid,
  isWarning,
}: ValidationResults) {
  this.isInvalid = isInvalid || isInvalidByRequired || this.isInputInvalid;
  this.isInfo = isInfo;
  this.isValid = isValid;
  this.isWarning = isWarning;
}
```

**Purpose**: Hook into validation lifecycle  
**Review Point**: ✅ Validation hook ready?  
**Status**: ⏳ Pending

---

### Step 5.7: Get Validity State Method ✅ READY

**File**: `datetime-input.tsx` (after validation hook)  
**Lines**: ~10 lines  
**Code**:

```typescript
@Method()
getValidityState(): Promise<ValidityState> {
  return Promise.resolve(
    createValidityState(this.isInputInvalid, !!this.required, this.value)
  );
}
```

**Update imports at top** - Add Method to @stencil/core import:

```typescript
import {
  AttachInternals,
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  h,
  Method, // Add this
  State,
  Watch,
} from '@stencil/core';
```

**Purpose**: Expose validity state as public method  
**Review Point**: ✅ Method works?  
**Status**: ⏳ Pending

---

### Step 5.8: Emit Validation Change ✅ READY

**File**: `datetime-input.tsx` (after getValidityState)  
**Lines**: ~10 lines  
**Code**:

```typescript
@Watch('isInputInvalid')
async onInputValidationChange() {
  const state = await this.getValidityState();
  this.validityStateChange.emit({
    ...state,
    invalidReason: this.invalidReason,
  });
}
```

**Purpose**: Emit event when validation state changes  
**Review Point**: ✅ Validation events emit?  
**Status**: ⏳ Pending

---

### Step 5.9: Complete Input Parsing ✅ READY

**File**: `datetime-input.tsx` (update handleInputChange method)  
**Lines**: ~35 lines (full replacement)  
**Code** - Replace the entire `handleInputChange` method:

```typescript
private async handleInputChange(event: Event) {
  const input = event.target as HTMLInputElement;
  const displayValue = input.value.trim();

  if (!displayValue) {
    this.value = undefined;
    this.updateFormInternalValue(undefined);
    this.valueChange.emit(undefined);
    this.isInputInvalid = false;
    return;
  }

  // Parse display format to DateTime
  const dateTime = DateTime.fromFormat(
    displayValue,
    `${this.dateFormat} ${this.timeFormat}`,
    { locale: this.locale, zone: 'local' }
  );

  // Parse constraints for validation
  const minDate = this.minDate ? DateTime.fromISO(this.minDate) : null;
  const maxDate = this.maxDate ? DateTime.fromISO(this.maxDate) : null;

  // Validate: format + constraints
  this.isInputInvalid =
    !dateTime.isValid ||
    (minDate && dateTime < minDate) ||
    (maxDate && dateTime > maxDate);

  if (this.isInputInvalid) {
    this.invalidReason = dateTime.invalidReason || undefined;
  } else {
    this.value = dateTime.toISO();
    this.updateFormInternalValue(this.value);
    this.closeDropdown();
  }

  this.valueChange.emit(this.value);
}
```

**Purpose**: Complete input parsing with validation  
**Review Point**: ✅ Parsing validates correctly?  
**Status**: ⏳ Pending

---

### Step 5.10: Update Picker Selection Validation ✅ READY

**File**: `datetime-input.tsx` (update onPickerSelect method)  
**Lines**: ~10 lines  
**Code** - Add after `this.valueChange.emit(this.value);` in the `if (combined.isValid)` block:

```typescript
// Validate immediately after picker selection
const validityState = await this.getValidityState();
this.isInputInvalid = !validityState.valid;
if (!validityState.valid) {
  this.invalidReason = 'Selected value is outside allowed range';
}
```

**Purpose**: Validate picker selection against constraints  
**Review Point**: ✅ Picker selection validates?  
**Status**: ⏳ Pending

---

### Step 5.11: Add Form Reset Callback ✅ READY

**File**: `datetime-input.tsx` (after getValidityState method)  
**Lines**: ~8 lines  
**Code**:

```typescript
/**
 * Form reset callback - called when parent form is reset
 * @internal
 */
formResetCallback(): void {
  this.value = '';
  this.updateFormInternalValue(undefined);
}
```

**Purpose**: Handle form reset properly (form-associated standard)  
**Review Point**: ✅ Form reset works?  
**Status**: ⏳ Pending

---

### Step 5.12: Add Field Wrapper ✅ READY

**File**: `datetime-input.tsx` (update render method)  
**Lines**: ~55 lines (full replacement)  
**Code** - Replace the entire `render()` method:

```typescript
render() {
  const invalidText = getValidationText(
    this.isInputInvalid,
    this.invalidText,
    this.i18nErrorDateTimeUnparsable
  );

  return (
    <Host
      class={{
        disabled: this.disabled,
        readonly: this.readonly,
      }}
    >
      <ix-field-wrapper
        label={this.label}
        helperText={this.helperText}
        isInvalid={this.isInvalid}
        invalidText={invalidText}
        infoText={this.infoText}
        isInfo={this.isInfo}
        isWarning={this.isWarning}
        warningText={this.warningText}
        isValid={this.isValid}
        validText={this.validText}
        showTextAsTooltip={this.showTextAsTooltip}
        required={this.required}
        controlRef={this.inputElementRef}
      >
        {this.renderInput()}
      </ix-field-wrapper>
      <ix-dropdown
        data-testid="datetime-dropdown"
        trigger={this.inputElementRef.waitForCurrent()}
        ref={this.dropdownElementRef}
        closeBehavior="outside"
        suppressOverflowBehavior={true}
        show={this.show}
        onShowChanged={(event) => {
          this.show = event.detail;
        }}
      >
        <ix-datetime-picker
          ref={this.datetimePickerRef}
          singleSelection={true}
          from={this.from ?? ''}
          time={this.time ?? ''}
          dateFormat={this.dateFormat}
          timeFormat={this.timeFormat}
          locale={this.locale}
          minDate={this.minDate}
          maxDate={this.maxDate}
          showTimeReference={this.showTimeReference}
          timeReference={this.timeReference}
          i18nDone={this.i18nDone}
          i18nTime={this.i18nTime}
          showWeekNumbers={this.showWeekNumbers}
          weekStartIndex={this.weekStartIndex}
          ariaLabelPreviousMonthButton={this.ariaLabelPreviousMonthButton}
          ariaLabelNextMonthButton={this.ariaLabelNextMonthButton}
          onDateSelect={(event) => {
            const { from, time } = event.detail;
            this.onPickerSelect(from, time);
          }}
        ></ix-datetime-picker>
      </ix-dropdown>
    </Host>
  );
}
```

**Purpose**: Wrap input in field wrapper for validation display  
**Note**: Shows complete code without placeholders  
**Review Point**: ✅ Validation messages display?  
**Status**: ⏳ Pending

---

## Phase 6: Styling

### Step 6.1: Basic SCSS Structure ✅ READY

**File**: `datetime-input.scss`  
**Lines**: ~15 lines  
**Code**:

```scss
@import '../input/input';

:host {
  display: block;
}

:host(.disabled) {
  pointer-events: none;
}

:host(.readonly) {
  .calendar-hidden {
    display: none;
  }
}
```

**Purpose**: Basic component styles  
**Review Point**: ✅ Basic styles applied?  
**Status**: ⏳ Pending

---

### Step 6.2: Input Wrapper Styles ✅ READY

**File**: `datetime-input.scss` (append)  
**Lines**: ~12 lines  
**Code**:

```scss
.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;

  input {
    flex: 1;

    &.is-invalid {
      // Validation styles handled by field-wrapper
    }
  }
}
```

**Purpose**: Style input wrapper  
**Review Point**: ✅ Input layout correct?  
**Status**: ⏳ Pending

---

### Step 6.3: Calendar Icon Styles ✅ READY

**File**: `datetime-input.scss` (append)  
**Lines**: ~8 lines  
**Code**:

```scss
ix-icon-button {
  margin-left: var(--theme-btn-sm--padding-horizontal);
}

.calendar-hidden {
  visibility: hidden;
  pointer-events: none;
}
```

**Purpose**: Style calendar icon button  
**Review Point**: ✅ Icon positioned correctly?  
**Status**: ⏳ Pending

---

### Step 6.4: Dropdown Styles ✅ READY

**File**: `datetime-input.scss` (append)  
**Lines**: ~8 lines  
**Code**:

```scss
ix-dropdown {
  ix-datetime-picker {
    // Picker styles are handled by datetime-picker component
    // No additional styling needed
  }
}
```

**Purpose**: Ensure dropdown renders properly  
**Review Point**: ✅ Dropdown appears correctly?  
**Status**: ⏳ Pending

---

### Step 6.5: Test Dark Theme ✅ READY

**Action**: Manual testing  
**Test Cases**:

1. Switch to dark theme in browser
2. Check input field visibility and colors
3. Check calendar icon visibility
4. Check dropdown background and colors
5. Check validation message colors (red, green, yellow, blue)

**Purpose**: Ensure theme compatibility  
**Review Point**: ✅ Works in both light and dark themes?  
**Status**: ⏳ Pending

---

## Phase 7: Framework Integration

### Step 7.1: Test in HTML ✅ READY

**File**: Create `packages/html-test-app/src/preview-examples/datetime-input-test.html`  
**Code**: ~40 lines

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DateTime Input Test</title>
    <script type="module" src="@siemens/ix/dist/siemens-ix/siemens-ix.esm.js"></script>
    <link rel="stylesheet" href="@siemens/ix/dist/siemens-ix/siemens-ix.css" />
  </head>
  <body>
    <div style="padding: 2rem;">
      <h1>DateTime Input Test</h1>

      <ix-datetime-input label="Appointment" placeholder="Select date and time" helper-text="Choose your preferred slot"></ix-datetime-input>

      <ix-datetime-input label="Required Field*" required invalid-text="This field is required" style="margin-top: 1rem;"></ix-datetime-input>

      <ix-datetime-input label="With Value" value="2026-01-20T13:07:04" style="margin-top: 1rem;"></ix-datetime-input>
    </div>
  </body>
</html>
```

**Purpose**: Test in vanilla HTML  
**Review Point**: ✅ Works in HTML test app?  
**Status**: ⏳ Pending

---

### Step 7.2: Test Framework Wrappers ✅ READY

**Action**: Verify auto-generated wrappers exist  
**Commands**:

```bash
# After build
ls packages/angular/src/datetime-input.ts
ls packages/react/src/datetime-input.ts
ls packages/vue/src/datetime-input.ts
```

**Expected Result**: All wrapper files exist  
**If missing**: Re-run build with `npm run build` in packages/core  
**Purpose**: Ensure framework integration works  
**Review Point**: ✅ Wrappers generated correctly?  
**Status**: ⏳ Pending

---

### Step 7.3: Verify Component Exports ✅ READY

**Action**: Verify component is exported properly  
**Commands**:

```bash
# Check TypeScript definitions
grep "DatetimeInput" packages/core/components.d.ts

# Check index exports
grep "datetime-input" packages/core/src/index.ts
```

**Expected Result**:

- `components.d.ts` contains `HTMLIxDatetimeInputElement`
- `index.ts` exports the component (or exports all from components)

**If missing**: Component should auto-export, but verify Stencil config  
**Purpose**: Export component for consumption  
**Review Point**: ✅ Component exported?  
**Status**: ⏳ Pending

---

### Step 7.4: Add Export to Index (if needed) ✅ READY

**File**: `packages/core/src/index.ts`  
**Action**: Verify component is exported

**If exports are manual** (check existing pattern in file):

```typescript
export { Components, JSX } from './components';
// Component should be included automatically in Components
```

**If exports are explicit** (less common):

```typescript
export { DatetimeInput } from './components/datetime-input/datetime-input';
```

**Note**: Most likely auto-exported through Components namespace  
**Purpose**: Ensure component is consumable by users  
**Review Point**: ✅ Export verified?  
**Status**: ⏳ Pending

---

## Phase 8: Documentation & Testing

### Step 8.1: Write Component README - Basic ✅ READY

**File**: `packages/core/src/components/datetime-input/readme.md`  
**Lines**: ~35 lines  
**Code**:

```markdown
# ix-datetime-input

Combines date and time selection in a single input field with calendar picker dropdown.

## Usage

### Basic

\`\`\`html
<ix-datetime-input
label="Appointment"
placeholder="Select date and time"

> </ix-datetime-input>
> \`\`\`

### With Validation

\`\`\`html
<ix-datetime-input
label="Start Date & Time\*"
name="startDateTime"
required
invalid-text="Please select a valid date and time"

> </ix-datetime-input>
> \`\`\`

## Properties

| Property     | Attribute     | Description                             | Type                  | Default        |
| ------------ | ------------- | --------------------------------------- | --------------------- | -------------- |
| `value`      | `value`       | Value in ISO 8601 datetime-local format | `string \| undefined` | `''`           |
| `dateFormat` | `date-format` | Date format string (Luxon tokens)       | `string`              | `'yyyy/LL/dd'` |
| `timeFormat` | `time-format` | Time format string (Luxon tokens)       | `string`              | `'HH:mm:ss'`   |

<!-- More properties in next step -->
```

**Purpose**: Start documentation  
**Review Point**: ✅ README structure correct?  
**Status**: ⏳ Pending

---

### Step 8.2: Complete README Properties ✅ READY

**File**: `readme.md` (append to Properties table)  
**Lines**: ~60 lines  
**Action**: Add all remaining properties from the investigation document

**Reference**: Copy properties from `DATETIME_INPUT_INVESTIGATION.md` section "API Design (Step 1)" - Properties table (lines 290-380)

**Properties to add**:

- `name`, `placeholder`, `locale`
- `minDate`, `maxDate`
- `required`, `disabled`, `readonly`
- `label`, `helperText`, `invalidText`, `infoText`, `warningText`, `validText`
- `showTextAsTooltip`
- `i18nErrorDateTimeUnparsable`, `i18nDone`, `i18nTime`
- `ariaLabelCalendarButton`, `ariaLabelPreviousMonthButton`, `ariaLabelNextMonthButton`
- `showWeekNumbers`, `weekStartIndex`
- `showTimeReference`, `timeReference`
- `suppressSubmitOnEnter`, `textAlignment`

**Purpose**: Complete property documentation  
**Review Point**: ✅ All properties documented?  
**Status**: ⏳ Pending

---

### Step 8.3: Add README Events ✅ READY

**File**: `readme.md` (append)  
**Lines**: ~15 lines  
**Code**:

```markdown
## Events

| Event                 | Description                           | Type                                      |
| --------------------- | ------------------------------------- | ----------------------------------------- |
| `valueChange`         | Emitted when datetime value changes   | `CustomEvent<string \| undefined>`        |
| `validityStateChange` | Emitted when validation state changes | `CustomEvent<DateTimeInputValidityState>` |
| `ixFocus`             | Emitted when input receives focus     | `CustomEvent<void>`                       |
| `ixBlur`              | Emitted when input loses focus        | `CustomEvent<void>`                       |
```

**Purpose**: Document events  
**Review Point**: ✅ Events documented?  
**Status**: ⏳ Pending

---

### Step 8.4: Add README Examples ✅ READY

**File**: `readme.md` (append)  
**Lines**: ~150 lines  
**Action**: Add framework-specific examples

**Reference**: Copy examples from `DATETIME_INPUT_INVESTIGATION.md` lines 510-680:

- React example with useState
- Angular example with template-driven form
- Vue example with v-model binding
- Custom format examples
- Disabled/readonly states
- Validation states

**Purpose**: Provide framework-specific examples  
**Review Point**: ✅ Examples helpful and accurate?  
**Status**: ⏳ Pending

---

### Step 8.5: Create Basic Component Test ✅ READY

**File**: `test/datetime-input.ct.ts`  
**Lines**: ~35 lines  
**Code**:

```typescript
import { expect } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input
      label="Test Label"
      value="2026-01-20T13:07:04"
    ></ix-datetime-input>
  `);

  const input = page.locator('ix-datetime-input');
  await expect(input).toBeVisible();
});

test('displays formatted value', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input value="2026-01-20T13:07:04"></ix-datetime-input>
  `);

  const input = page.locator('ix-datetime-input input');
  await expect(input).toHaveValue('2026/01/20 13:07:04');
});

test('displays custom format', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input
      value="2026-05-22T20:00:00.000"
      date-format="LLL-dd-yyyy"
      time-format="HH:mm:ss.SSS"
    ></ix-datetime-input>
  `);

  const input = page.locator('ix-datetime-input input');
  await expect(input).toHaveValue('May-22-2026 20:00:00.000');
});
```

**Purpose**: Basic component tests  
**Review Point**: ✅ Tests pass?  
**Status**: ⏳ Pending

---

### Step 8.6: Add Interaction Tests ✅ READY

**File**: `test/datetime-input.ct.ts` (append)  
**Lines**: ~25 lines  
**Code**:

```typescript
test('opens picker on focus', async ({ mount, page }) => {
  await mount(`<ix-datetime-input></ix-datetime-input>`);

  await page.locator('ix-datetime-input input').focus();

  const dropdown = page.locator('ix-dropdown[data-testid="datetime-dropdown"]');
  await expect(dropdown).toHaveAttribute('show', 'true');
});

test('opens picker on icon click', async ({ mount, page }) => {
  await mount(`<ix-datetime-input></ix-datetime-input>`);

  await page.locator('ix-icon-button[data-testid="open-calendar"]').click();

  const picker = page.locator('ix-datetime-picker');
  await expect(picker).toBeVisible();
});

test('closes picker on confirm', async ({ mount, page }) => {
  await mount(`<ix-datetime-input value="2026-01-20T13:07:04"></ix-datetime-input>`);

  await page.locator('ix-datetime-input input').focus();
  await page.locator('ix-datetime-picker button:has-text("Confirm")').click();

  const dropdown = page.locator('ix-dropdown[data-testid="datetime-dropdown"]');
  await expect(dropdown).toHaveAttribute('show', 'false');
});
```

**Purpose**: Test user interactions  
**Review Point**: ✅ Interaction tests pass?  
**Status**: ⏳ Pending

---

### Step 8.7: Add Validation Tests ✅ READY

**File**: `test/datetime-input.ct.ts` (append)  
**Lines**: ~70 lines  
**Code**:

```typescript
test('shows error for invalid input', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input
      invalid-text="Invalid datetime"
    ></ix-datetime-input>
  `);

  await page.locator('ix-datetime-input input').fill('invalid text');
  await page.locator('ix-datetime-input input').blur();

  const errorText = page.locator('text=Invalid datetime');
  await expect(errorText).toBeVisible();
});

test('validates required field', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input
      required
      invalid-text="Required field"
    ></ix-datetime-input>
  `);

  await page.locator('ix-datetime-input input').focus();
  await page.locator('ix-datetime-input input').blur();

  const errorText = page.locator('text=Required field');
  await expect(errorText).toBeVisible();
});

test('validates min/max date constraints', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input
      min-date="2026-01-20T00:00:00"
      max-date="2026-01-25T23:59:59"
      invalid-text="Date out of range"
    ></ix-datetime-input>
  `);

  // Try to enter date before minDate
  await page.locator('ix-datetime-input input').fill('2026/01/15 10:00:00');
  await page.locator('ix-datetime-input input').blur();

  const errorText = page.locator('text=Date out of range');
  await expect(errorText).toBeVisible();
});

test('formats with custom locale', async ({ mount, page }) => {
  await mount(`
    <ix-datetime-input
      value="2026-01-20T13:07:04"
      locale="de-DE"
      date-format="dd.LL.yyyy"
    ></ix-datetime-input>
  `);

  const input = page.locator('ix-datetime-input input');
  // German format: 20.01.2026 13:07:04
  await expect(input).toHaveValue('20.01.2026 13:07:04');
});
```

**Purpose**: Test validation scenarios and locale support  
**Review Point**: ✅ Validation tests pass?  
**Status**: ⏳ Pending

---

### Step 8.8: Run All Tests ✅ READY

**Action**: Run test suite  
**Commands**:

```bash
cd packages/core
npm run test
```

**Expected Result**: All tests pass  
**If tests fail**:

- Check error messages
- Verify component implementation matches tests
- Debug failing tests one by one

**Purpose**: Verify all tests pass  
**Review Point**: ✅ All tests passing?  
**Status**: ⏳ Pending

---

## Phase 9: Review & Polish

### Step 9.1: Code Review Checklist ✅ READY

**Review Items**:

- [ ] All props have JSDoc comments with descriptions
- [ ] All methods have JSDoc comments
- [ ] No console.log statements (only console.warn/error for actual issues)
- [ ] All imports are used (no unused imports)
- [ ] No unused variables
- [ ] Consistent naming conventions (camelCase for variables, PascalCase for components)
- [ ] Follows existing component patterns (check date-input, time-input)
- [ ] No TypeScript errors
- [ ] No linter warnings

**Commands to check**:

```bash
cd packages/core
npm run lint
npm run build
```

**Purpose**: Code quality check  
**Review Point**: ✅ Code review complete?  
**Status**: ⏳ Pending

---

### Step 9.2: Accessibility Audit ✅ READY

**Test Items**:

- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] ARIA labels are present and accurate
- [ ] Screen reader announces component correctly
- [ ] Screen reader announces value changes
- [ ] Focus management works (focus visible, trapped in picker)
- [ ] Color contrast is sufficient (WCAG AA minimum 4.5:1)
- [ ] Works with VoiceOver (macOS/iOS)
- [ ] Works with NVDA (Windows)

**Tools to use**:

- Browser DevTools accessibility inspector
- axe DevTools extension
- Screen reader software

**Purpose**: Ensure WCAG AA compliance  
**Review Point**: ✅ Accessibility verified?  
**Status**: ⏳ Pending

---

### Step 9.3: Cross-Browser Testing ✅ READY

**Test Browsers & Scenarios**:

**Chrome/Edge (latest)**:

- [ ] Open picker via focus
- [ ] Open picker via icon click
- [ ] Select date/time, click Confirm
- [ ] Type date/time directly
- [ ] Validate required field
- [ ] Check dropdown positioning

**Firefox (latest)**:

- [ ] Open picker via focus
- [ ] Open picker via icon click
- [ ] Select date/time, click Confirm
- [ ] Type date/time directly
- [ ] Validate required field
- [ ] Check dropdown positioning

**Safari (latest)**:

- [ ] Open picker via focus
- [ ] Open picker via icon click
- [ ] Select date/time, click Confirm
- [ ] Type date/time directly
- [ ] Validate required field
- [ ] Check dropdown positioning

**Mobile Safari (iOS)**:

- [ ] Touch to focus input
- [ ] Tap icon to open picker
- [ ] Select datetime in picker
- [ ] Check keyboard behavior

**Mobile Chrome (Android)**:

- [ ] Touch to focus input
- [ ] Tap icon to open picker
- [ ] Select datetime in picker
- [ ] Check keyboard behavior

**Purpose**: Verify cross-browser compatibility  
**Review Point**: ✅ Works in all browsers?  
**Status**: ⏳ Pending

---

### Step 9.4: Update CHANGELOG ✅ READY

**File**: `packages/core/CHANGELOG.md`  
**Lines**: ~12 lines  
**Code** - Add to top of file under `## [Unreleased]`:

```markdown
## [Unreleased]

### Added

- New `ix-datetime-input` component for combined date and time selection
  - Form-associated component with full validation support
  - ISO 8601 datetime-local value format
  - Customizable date and time display formats
  - Min/max date constraints
  - Consistent API with `ix-date-input` and `ix-time-input`
  - Supports all standard input states (default, hover, focused, readonly, disabled)
  - Validation states (valid, invalid, warning, info)
```

**Purpose**: Document new feature in changelog  
**Review Point**: ✅ CHANGELOG updated?  
**Status**: ⏳ Pending

---

## ✅ Implementation Complete!

After completing all 68 micro-steps across 10 phases, the component should be:

- ✅ Fully functional
- ✅ Form-ready with validation
- ✅ Well-tested (unit + integration)
- ✅ Properly documented
- ✅ Accessible (WCAG AA)
- ✅ Cross-browser compatible
- ✅ Framework-ready (Angular, React, Vue)

---

## 📝 Notes for Review

### Review Workflow

1. **Read step description** - Understand what's being added
2. **Review code snippet** - Check if it makes sense and matches patterns
3. **Approve or provide feedback** - Say "continue" or ask questions
4. **Wait for implementation** - Developer implements the step
5. **Verify result** - Check that it works as expected

### Asking Questions

- ❓ "Why is this needed?" - Explanation of purpose
- ❓ "Is there an alternative?" - Discussion of options
- ❓ "Can we simplify this?" - Always open to improvements
- ❓ "Can you explain X?" - Detailed explanation available

### Providing Feedback

- ✅ "Looks good, continue" - Proceed to next step
- 🔄 "Change X to Y" - Modification requested
- ⏸️ "Let me think about this" - Take time to review
- 📝 "Add a comment explaining X" - Clarification needed

### Step Dependencies

- ⚠️ **Sequential**: Steps must be completed in order
- ⚠️ **Cumulative**: Each step builds on previous steps
- ⚠️ **Critical**: Some steps are prerequisites for later phases

---

## 🎯 Getting Started

**Prerequisites verified?** (Phase 0 complete)

**Ready to start?**

→ Begin with **Phase 1, Step 1.1**: Create Directory Structure

---

**Document Version:** 3.0 (Updated with all feedback improvements)  
**Last Updated:** January 21, 2026  
**Total Steps:** 68 steps across 10 phases  
**Estimated Time:** 26-38 hours (3.5-5 days)

# ix-datetime-input

> Text input for entering and validating a combined date and time value.

## Documentation

- None

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- datetime-input
  - angular:
    - `angular/datetime-input.html`: [file](../../examples/angular/datetime-input.html)
    - `angular/datetime-input.ts`: [file](../../examples/angular/datetime-input.ts)
  - angular-standalone:
    - `angular-standalone/datetime-input.html`: [file](../../examples/angular-standalone/datetime-input.html)
    - `angular-standalone/datetime-input.ts`: [file](../../examples/angular-standalone/datetime-input.ts)
  - html:
    - `html/datetime-input.html`: [file](../../examples/html/datetime-input.html)
  - react:
    - `react/datetime-input.tsx`: [file](../../examples/react/datetime-input.tsx)
  - vue:
    - `vue/datetime-input.vue`: [file](../../examples/vue/datetime-input.vue)
- datetime-input-disabled
  - angular:
    - `angular/datetime-input-disabled.html`: [file](../../examples/angular/datetime-input-disabled.html)
    - `angular/datetime-input-disabled.ts`: [file](../../examples/angular/datetime-input-disabled.ts)
  - angular-standalone:
    - `angular-standalone/datetime-input-disabled.html`: [file](../../examples/angular-standalone/datetime-input-disabled.html)
    - `angular-standalone/datetime-input-disabled.ts`: [file](../../examples/angular-standalone/datetime-input-disabled.ts)
  - html:
    - `html/datetime-input-disabled.html`: [file](../../examples/html/datetime-input-disabled.html)
  - react:
    - `react/datetime-input-disabled.tsx`: [file](../../examples/react/datetime-input-disabled.tsx)
  - vue:
    - `vue/datetime-input-disabled.vue`: [file](../../examples/vue/datetime-input-disabled.vue)
- datetime-input-label
  - angular:
    - `angular/datetime-input-label.html`: [file](../../examples/angular/datetime-input-label.html)
    - `angular/datetime-input-label.ts`: [file](../../examples/angular/datetime-input-label.ts)
  - angular-standalone:
    - `angular-standalone/datetime-input-label.html`: [file](../../examples/angular-standalone/datetime-input-label.html)
    - `angular-standalone/datetime-input-label.ts`: [file](../../examples/angular-standalone/datetime-input-label.ts)
  - html:
    - `html/datetime-input-label.html`: [file](../../examples/html/datetime-input-label.html)
  - react:
    - `react/datetime-input-label.tsx`: [file](../../examples/react/datetime-input-label.tsx)
  - vue:
    - `vue/datetime-input-label.vue`: [file](../../examples/vue/datetime-input-label.vue)
- datetime-input-min-max-date
  - angular:
    - `angular/datetime-input-min-max-date.html`: [file](../../examples/angular/datetime-input-min-max-date.html)
    - `angular/datetime-input-min-max-date.ts`: [file](../../examples/angular/datetime-input-min-max-date.ts)
  - angular-standalone:
    - `angular-standalone/datetime-input-min-max-date.html`: [file](../../examples/angular-standalone/datetime-input-min-max-date.html)
    - `angular-standalone/datetime-input-min-max-date.ts`: [file](../../examples/angular-standalone/datetime-input-min-max-date.ts)
  - html:
    - `html/datetime-input-min-max-date.html`: [file](../../examples/html/datetime-input-min-max-date.html)
  - react:
    - `react/datetime-input-min-max-date.tsx`: [file](../../examples/react/datetime-input-min-max-date.tsx)
  - vue:
    - `vue/datetime-input-min-max-date.vue`: [file](../../examples/vue/datetime-input-min-max-date.vue)
- datetime-input-readonly
  - angular:
    - `angular/datetime-input-readonly.html`: [file](../../examples/angular/datetime-input-readonly.html)
    - `angular/datetime-input-readonly.ts`: [file](../../examples/angular/datetime-input-readonly.ts)
  - angular-standalone:
    - `angular-standalone/datetime-input-readonly.html`: [file](../../examples/angular-standalone/datetime-input-readonly.html)
    - `angular-standalone/datetime-input-readonly.ts`: [file](../../examples/angular-standalone/datetime-input-readonly.ts)
  - html:
    - `html/datetime-input-readonly.html`: [file](../../examples/html/datetime-input-readonly.html)
  - react:
    - `react/datetime-input-readonly.tsx`: [file](../../examples/react/datetime-input-readonly.tsx)
  - vue:
    - `vue/datetime-input-readonly.vue`: [file](../../examples/vue/datetime-input-readonly.vue)
- datetime-range
  - angular:
    - `angular/datetime-range.ts`: [file](../../examples/angular/datetime-range.ts)
  - angular-standalone:
    - `angular-standalone/datetime-range.ts`: [file](../../examples/angular-standalone/datetime-range.ts)
  - html:
    - `html/datetime-range.html`: [file](../../examples/html/datetime-range.html)
  - react:
    - `react/datetime-range.tsx`: [file](../../examples/react/datetime-range.tsx)
  - vue:
    - `vue/datetime-range.vue`: [file](../../examples/vue/datetime-range.vue)
- range-field
  - angular:
    - `angular/range-field.ts`: [file](../../examples/angular/range-field.ts)
  - angular-standalone:
    - `angular-standalone/range-field.ts`: [file](../../examples/angular-standalone/range-field.ts)
  - html:
    - `html/range-field.html`: [file](../../examples/html/range-field.html)
  - react:
    - `react/range-field.tsx`: [file](../../examples/react/range-field.tsx)
  - vue:
    - `vue/range-field.vue`: [file](../../examples/vue/range-field.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `ariaLabelCalendarButton`; attr: `aria-label-calendar-button`; type: `string | undefined`; default: `'Toggle calendar'` - ARIA label for the calendar icon button Will be set as aria-label on the nested HTML button element
- `ariaLabelNextMonthButton`; attr: `aria-label-next-month-button`; type: `string | undefined`; default: `'Next month'` - ARIA label for next month navigation button
- `ariaLabelPreviousMonthButton`; attr: `aria-label-previous-month-button`; type: `string | undefined`; default: `'Previous month'` - ARIA label for previous month navigation button
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Whether the input is disabled
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `format`; attr: `format`; type: `string`; default: `'yyyy/LL/dd HH:mm:ss'` - Luxon date and time format for display (e.g., 'yyyy/LL/dd HH:mm:ss' → "2026/01/20 13:07:04"). See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
- `helperText`; attr: `helper-text`; type: `string | undefined` - Helper text displayed below the input
- `i18nDone`; attr: `i-1-8n-done`; type: `string`; default: `'Confirm'` - Text for confirm button in picker (prop name matches datetime-picker)
- `i18nErrorDateTimeUnparsable`; attr: `i-1-8n-error-date-time-unparsable`; type: `string`; default: `'Date time is not valid'` - Error message when datetime cannot be parsed
- `i18nTime`; attr: `i-1-8n-time`; type: `string`; default: `'Time'` - Header text for time picker section
- `infoText`; attr: `info-text`; type: `string | undefined` - Informational message
- `invalidText`; attr: `invalid-text`; type: `string | undefined` - Validation message for invalid state
- `label`; attr: `label`; type: `string | undefined` - Label text displayed above the input
- `locale`; attr: `locale`; type: `string | undefined` - Locale for date/time formatting (e.g., 'en-US', 'de-DE')
- `maxDate`; attr: `max-date`; type: `string | undefined` - Maximum allowed date (matching format or date-only, e.g., "2026/12/31")
- `maxTime`; attr: `max-time`; type: `string | undefined` - Latest selectable time (tokens matching the time portion of `format`). Invalid non-empty values are ignored.
- `minDate`; attr: `min-date`; type: `string | undefined` - Minimum allowed date (matching format or date-only, e.g., "2026/01/20")
- `minTime`; attr: `min-time`; type: `string | undefined` - Earliest selectable time (tokens matching the time portion of `format`). Invalid non-empty values are ignored.
- `name`; attr: `name`; type: `string | undefined` - Name of the form control for form submission
- `placeholder`; attr: `placeholder`; type: `string | undefined` - Placeholder text when input is empty
- `readonly`; attr: `readonly`; type: `boolean`; default: `false` - Whether the input is read-only (calendar icon hidden)
- `required`; attr: `required`; type: `boolean`; default: `false` - Whether the field is required
- `showTextAsTooltip`; attr: `show-text-as-tooltip`; type: `boolean`; default: `false` - Show helper text as tooltip instead of below input
- `showWeekNumbers`; attr: `show-week-numbers`; type: `boolean`; default: `false` - Show week numbers in date picker
- `suppressSubmitOnEnter`; attr: `suppress-submit-on-enter`; type: `boolean`; default: `false` - Prevent form submission when Enter is pressed
- `textAlignment`; attr: `text-alignment`; type: `"end" | "start"`; default: `'start'` - Text alignment within the input field
- `validText`; attr: `valid-text`; type: `string | undefined` - Success/valid message
- `value`; attr: `value`; type: `string | undefined`; default: `''` - Value in display format (e.g., "2026/01/21 13:07:04" for default format)
- `warningText`; attr: `warning-text`; type: `string | undefined` - Warning message
- `weekStartIndex`; attr: `week-start-index`; type: `number`; default: `0` - First day of week (0=Sunday, 1=Monday, etc.)

## Events

- `ixBlur` - Emitted when the input loses focus
- `ixChange` - Emitted when the date/time value changes via user interaction. Fires in two scenarios: - When the input loses focus (blur) and the value has changed - When a new date/time is selected in the picker and confirmed Does NOT fire when: - The picker is opened/closed without confirming a change - The input is blurred without modifying the value - The value is changed programmatically via the value property
- `ixFocus` - Emitted when the input receives focus
- `validityStateChange` - Emitted when validation state changes
- `valueChange` - Emitted when the datetime value changes. Payload is display format or undefined

## Slots

- `end` - Element will be displayed at the end of the input
- `start` - Element will be displayed at the start of the input

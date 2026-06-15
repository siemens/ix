# ix-datetime-input

> No component summary available.

## Documentation

- None

## Figma IDs

- None

## Related examples

- datetime-input
- datetime-input-disabled
- datetime-input-label
- datetime-input-min-max-date
- datetime-input-readonly
- datetime-input-validation
- datetime-input-with-slots
- datetime-range
- range-field

## Related blocks

- unavailable (not present in registry JSON)

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

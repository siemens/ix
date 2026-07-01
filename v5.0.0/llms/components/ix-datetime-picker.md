# ix-datetime-picker

> Combined calendar and time selector for picking a date and time.

## Documentation

- None

## Figma IDs

- 70466:78415

## Related examples

Example source links are relative to this Markdown file.

- datetimepicker
  - angular:
    - `angular/datetimepicker.ts`: [source](../../examples/angular-examples/src/preview-examples/datetimepicker.ts)
  - angular-standalone:
    - `angular-standalone/datetimepicker.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/datetimepicker.ts)
  - html:
    - `html/datetimepicker.html`: [source](../../examples/html-examples/src/preview-examples/datetimepicker.html)
  - react:
    - `react/datetimepicker.tsx`: [source](../../examples/react-examples/src/preview-examples/datetimepicker.tsx)
  - vue:
    - `vue/datetimepicker.vue`: [source](../../examples/vue-examples/src/preview-examples/datetimepicker.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelNextMonthButton`; attr: `aria-label-next-month-button`; type: `string | undefined`; default: `'Next month'` - ARIA label for the next month icon button. Will be set as aria-label on the nested HTML button element.
- `ariaLabelPreviousMonthButton`; attr: `aria-label-previous-month-button`; type: `string | undefined`; default: `'Previous month'` - ARIA label for the previous month icon button. Will be set as aria-label on the nested HTML button element.
- `dateFormat`; attr: `date-format`; type: `string`; default: `'yyyy/LL/dd'` - Date format string. See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
- `from`; attr: `from`; type: `string | undefined` - The selected starting date. If the picker is not in range mode, this is the selected date. Format has to match the `dateFormat` property.
- `i18nDone`; attr: `i18n-done`; type: `string`; default: `'Done'` - Text of the date select button.
- `i18nTime`; attr: `i18n-time`; type: `string`; default: `'Time'` - Top label of the time picker.
- `locale`; attr: `locale`; type: `string | undefined` - Locale identifier (e.g. 'en' or 'de'). See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
- `maxDate`; attr: `max-date`; type: `string | undefined` - The latest date that can be selected. If not set there will be no restriction.
- `maxTime`; attr: `max-time`; type: `string | undefined` - Latest selectable time (`timeFormat` tokens). Invalid non-empty values are ignored.
- `minDate`; attr: `min-date`; type: `string | undefined` - The earliest date that can be selected. If not set there will be no restriction.
- `minTime`; attr: `min-time`; type: `string | undefined` - Earliest selectable time (`timeFormat` tokens). Invalid non-empty values are ignored.
- `showTimeReference`; attr: `show-time-reference`; type: `boolean`; default: `false` - Show AM/PM time reference control.
- `showWeekNumbers`; attr: `show-week-numbers`; type: `boolean`; default: `false` - Shows week numbers displayed on the left side of the date picker.
- `singleSelection`; attr: `single-selection`; type: `boolean`; default: `false` - If true, disables date range selection (from/to).
- `time`; attr: `time`; type: `string | undefined` - Selected time value for the embedded time picker. Format has to match the `timeFormat` property.
- `timeFormat`; attr: `time-format`; type: `string`; default: `'HH:mm:ss'` - Time format string. See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
- `timeReference`; attr: `time-reference`; type: `"AM" | "PM" | undefined` - Time reference (AM or PM).
- `to`; attr: `to`; type: `string | undefined` - The selected end date. If the picker is not in range mode, this property has no impact. Format has to match the `dateFormat` property.
- `weekStartIndex`; attr: `week-start-index`; type: `number`; default: `0` - The index of which day to start the week on, based on the Locale#weekdays array. E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on Monday.

## Events

- `dateChange` - Date change event. Emitted when the date changes in the embedded date picker.
- `dateSelect` - Datetime selection event. Emitted when the user confirms the selection.
- `timeChange` - Time change event. Emitted when the time changes in the embedded time picker.

## Slots

- None

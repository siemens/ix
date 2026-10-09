# ix-datetime-picker

> Combined calendar and time selector for picking a date and time.

- Web component: `<ix-datetime-picker>`
- React/Vue: `IxDatetimePicker` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-datetime-picker>` (`IxModule` from `@siemens/ix-angular` or `IxDatetimePicker` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/date-time-picker/guide.md

## Figma IDs

- 70466:78415

## Properties

- `ariaLabelNextMonthButton`; attr: `aria-label-next-month-button`; type: `string | undefined`; default: `'Next month'` - ARIA label for the next month icon button. Will be set as aria-label on the nested HTML button element.
- `ariaLabelPreviousMonthButton`; attr: `aria-label-previous-month-button`; type: `string | undefined`; default: `'Previous month'` - ARIA label for the previous month icon button. Will be set as aria-label on the nested HTML button element.
- `dateFormat`; attr: `date-format`; type: `string`; default: `'yyyy/LL/dd'` - Date format string. See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
- `from`; attr: `from`; type: `string | undefined` - The selected starting date. If the picker is not in range mode, this is the selected date. Format has to match the `dateFormat` property.
- `i18nAm`; attr: `i18n-am`; type: `string`; default: `'AM'` - Label for the AM button in 12-hour mode.
- `i18nDone`; attr: `i18n-done`; type: `string`; default: `'Done'` - Text of the date select button.
- `i18nHourColumnHeader`; attr: `i18n-hour-column-header`; type: `string`; default: `'hr'` - Text for the time picker hour column header.
- `i18nMillisecondColumnHeader`; attr: `i18n-millisecond-column-header`; type: `string`; default: `'ms'` - Text for the time picker millisecond column header.
- `i18nMinuteColumnHeader`; attr: `i18n-minute-column-header`; type: `string`; default: `'min'` - Text for the time picker minute column header.
- `i18nPm`; attr: `i18n-pm`; type: `string`; default: `'PM'` - Label for the PM button in 12-hour mode.
- `i18nSecondColumnHeader`; attr: `i18n-second-column-header`; type: `string`; default: `'sec'` - Text for the time picker second column header.
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
- `weekStartIndex`; attr: `week-start-index`; type: `number`; default: `0` - The index of the day the week starts on, as a 0-based index into Luxon's `Info.weekdays()` array. That array is always ordered Monday-first regardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday. E.g. weekStartIndex = 6 results in starting the week on Sunday.

## Events

- `dateChange` - Date change event. Emitted when the date changes in the embedded date picker.
- `dateSelect` - Datetime selection event. Emitted when the user confirms the selection.
- `timeChange` - Time change event. Emitted when the time changes in the embedded time picker.

## Methods

- None

## Slots

- None

## Dependencies

- Renders: `ix-button`, `ix-col`, `ix-date-picker`, `ix-date-time-card`, `ix-layout-grid`, `ix-row`, `ix-time-picker`
- Rendered by: `ix-datetime-input`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- datetimepicker (angular, angular-standalone, html, react, vue)
- datetimepicker-locale (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

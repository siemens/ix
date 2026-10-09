# ix-date-picker

> Calendar for selecting a single date or a date range.

- Web component: `<ix-date-picker>`
- React/Vue: `IxDatePicker` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-date-picker>` (`IxModule` from `@siemens/ix-angular` or `IxDatePicker` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/date-picker/guide.md

## Figma IDs

- 561:6290

## Properties

- `ariaLabelMonthSelection`; attr: `aria-label-month-selection`; type: `string | undefined`; default: `'Select month'` - ARIA label for the next month icon button Will be set as aria-label on the nested HTML button element
- `ariaLabelNextMonthButton`; attr: `aria-label-next-month-button`; type: `string | undefined`; default: `'Change calendar view to next month'` - ARIA label for the next month icon button. Will be set as aria-label on the nested HTML button element.
- `ariaLabelPreviousMonthButton`; attr: `aria-label-previous-month-button`; type: `string | undefined`; default: `'Change calendar view to previous month'` - ARIA label for the previous month icon button. Will be set as aria-label on the nested HTML button element.
- `ariaLabelYearSelection`; attr: `aria-label-year-selection`; type: `string | undefined`; default: `'Select year'` - ARIA label for the next month icon button Will be set as aria-label on the nested HTML button element
- `corners`; attr: `corners`; type: `"left" | "right" | "rounded" | "straight"`; default: `'rounded'` - Corner style.
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `format`; attr: `format`; type: `string`; default: `'yyyy/LL/dd'` - Date format string. See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
- `from`; attr: `from`; type: `string | undefined` - The selected starting date. If the date picker is not in range mode, this is the selected date. Format has to match the `format` property.
- `i18nDone`; attr: `i18n-done`; type: `string`; default: `'Done'` - Text of the date select button.
- `locale`; attr: `locale`; type: `string | undefined` - Locale identifier (e.g. 'en' or 'de'). The locale is used to translate the labels for weekdays and months. When the locale changes, the weekday labels are rotated according to the `weekStartIndex`. The locale is also applied when formatting and parsing date values. For locale-dependent format tokens (e.g. `MMMM`, `MMM`), the output will reflect the locale. Use the `isoFrom` and `isoTo` fields on events for locale-independent values.
- `maxDate`; attr: `max-date`; type: `string`; default: `''` - The latest date that can be selected by the date picker. If not set there will be no restriction.
- `minDate`; attr: `min-date`; type: `string`; default: `''` - The earliest date that can be selected by the date picker. If not set there will be no restriction.
- `showWeekNumbers`; attr: `show-week-numbers`; type: `boolean`; default: `false` - Shows week numbers displayed on the left side of the date picker.
- `singleSelection`; attr: `single-selection`; type: `boolean`; default: `false` - If true, disables date range selection (from/to).
- `to`; attr: `to`; type: `string | undefined` - The selected end date. If the date picker is not in range mode, this property has no impact. Format has to match the `format` property.
- `weekStartIndex`; attr: `week-start-index`; type: `number`; default: `0` - The index of the day the week starts on, as a 0-based index into Luxon's `Info.weekdays()` array. That array is always ordered Monday-first regardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday. E.g. weekStartIndex = 6 results in starting the week on Sunday.

## Events

- `dateChange` - Emitted when the date selection changes. The `DateChangeEvent` contains `from` and `to` properties formatted according to the `format` and `locale` properties. Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings. Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string`
- `dateRangeChange` - Date range change event. Emitted when the date range selection changes and the component is in range mode. The `DateChangeEvent` contains `from` and `to` properties formatted according to the `format` and `locale` properties. Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.
- `dateSelect` - Date selection event. Emitted when the selection is confirmed via the date select button. The `DateChangeEvent` contains `from` and `to` properties formatted according to the `format` and `locale` properties. Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.

## Methods

- `getCurrentDate() => Promise<DateChangeEvent>` - Get the currently selected date or range. The object returned contains `from` and `to` properties formatted according to the `format` and `locale` properties. Use `isoFrom` and `isoTo` for locale-independent ISO 8601 date strings.

## Slots

- None

## Dependencies

- Renders: `ix-button`, `ix-date-time-card`, `ix-dropdown-button`, `ix-dropdown-item`, `ix-icon-button`, `ix-typography`
- Rendered by: `ix-date-dropdown`, `ix-date-input`, `ix-datetime-picker`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- aria-label-properties (html)
- datepicker (angular, angular-standalone, html, react, vue)
- datepicker-locale (angular, angular-standalone, html, react, vue)
- datepicker-range (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

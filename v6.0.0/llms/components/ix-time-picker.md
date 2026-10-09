# ix-time-picker

> Selector for picking a time value.

- Web component: `<ix-time-picker>`
- React/Vue: `IxTimePicker` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-time-picker>` (`IxModule` from `@siemens/ix-angular` or `IxTimePicker` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/time-picker/guide.md

## Figma IDs

- 68801:7500

## Properties

- `corners`; attr: `corners`; type: `"left" | "right" | "rounded" | "straight"`; default: `'rounded'` - Corner style.
- `embedded`; attr: `embedded`; type: `boolean`; default: `false` - Embedded style (for use in other components).
- `format`; attr: `format`; type: `string`; default: `'TT'` - Format of time string. See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens. Note: Formats that combine date and time (like f or F) are not supported. Timestamp tokens x and X are not supported either.
- `hideHeader`; attr: `hide-header`; type: `boolean`; default: `false` - Hides the header of the picker.
- `hourInterval`; attr: `hour-interval`; type: `number`; default: `1` - Interval for hour selection.
- `i18nAm`; attr: `i18n-am`; type: `string | undefined` - Label for the AM button in 12-hour mode. If not set, falls back to the first value of `Info.meridiems()` from Luxon.
- `i18nConfirmTime`; attr: `i18n-confirm-time`; type: `string`; default: `'Confirm'` - Text of the time confirm button.
- `i18nHeader`; attr: `i18n-header`; type: `string`; default: `'Time'` - Text for the top header.
- `i18nHourColumnHeader`; attr: `i18n-hour-column-header`; type: `string`; default: `'hr'` - Text for the hour column header.
- `i18nMillisecondColumnHeader`; attr: `i18n-millisecond-column-header`; type: `string`; default: `'ms'` - Text for the millisecond column header.
- `i18nMinuteColumnHeader`; attr: `i18n-minute-column-header`; type: `string`; default: `'min'` - Text for the minute column header.
- `i18nPm`; attr: `i18n-pm`; type: `string | undefined` - Label for the PM button in 12-hour mode. If not set, falls back to the second value of `Info.meridiems()` from Luxon.
- `i18nSecondColumnHeader`; attr: `i18n-second-column-header`; type: `string`; default: `'sec'` - Text for the second column header.
- `locale`; attr: `locale`; type: `string | undefined` - Locale identifier (e.g. 'en' or 'de'). Passed to Luxon for locale-aware parsing and formatting.
- `maxTime`; attr: `max-time`; type: `string | undefined` - Latest selectable time (`format` tokens). Invalid non-empty values are ignored.
- `millisecondInterval`; attr: `millisecond-interval`; type: `number`; default: `100` - Interval for millisecond selection.
- `minTime`; attr: `min-time`; type: `string | undefined` - Earliest selectable time (`format` tokens). Invalid non-empty values are ignored.
- `minuteInterval`; attr: `minute-interval`; type: `number`; default: `1` - Interval for minute selection.
- `secondInterval`; attr: `second-interval`; type: `number`; default: `1` - Interval for second selection.
- `time`; attr: `time`; type: `string | undefined` - Selected time value. Format has to match the `format` property.

## Events

- `timeChange` - Time change event. Emitted when the selected time changes while interacting with the picker.
- `timeSelect` - Time event. Emitted when the user confirms the selected time.

## Methods

- `getCurrentIsoTime() => Promise<string | undefined>` - Get the current time in ISO format
- `getCurrentTime() => Promise<string | undefined>` - Get the current time based on the wanted format

## Slots

- None

## Dependencies

- Renders: `ix-button`, `ix-date-time-card`, `ix-typography`
- Rendered by: `ix-datetime-picker`, `ix-time-input`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- timepicker (angular, angular-standalone, html, react, vue)
- timepicker-format-adjusted (angular, angular-standalone, html, react, vue)
- timepicker-intervals (angular, angular-standalone, html, react, vue)
- timepicker-min-max-time (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

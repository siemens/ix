# ix-time-picker

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/time-picker/guide.md

## Figma IDs

- 68801:7500

## Related examples

- timepicker
  - angular: [angular/timepicker.html](../../examples/angular-examples/src/preview-examples/timepicker.html), [angular/timepicker.ts](../../examples/angular-examples/src/preview-examples/timepicker.ts)
  - angular-standalone: [angular-standalone/timepicker.html](../../examples/angular-standalone-examples/src/preview-examples/timepicker.html), [angular-standalone/timepicker.ts](../../examples/angular-standalone-examples/src/preview-examples/timepicker.ts)
  - html: [html/timepicker.html](../../examples/html-examples/src/preview-examples/timepicker.html)
  - react: [react/timepicker.tsx](../../examples/react-examples/src/preview-examples/timepicker.tsx)
  - vue: [vue/timepicker.vue](../../examples/vue-examples/src/preview-examples/timepicker.vue)
- timepicker-format-adjusted
  - angular: [angular/timepicker-format-adjusted.html](../../examples/angular-examples/src/preview-examples/timepicker-format-adjusted.html), [angular/timepicker-format-adjusted.ts](../../examples/angular-examples/src/preview-examples/timepicker-format-adjusted.ts)
  - angular-standalone: [angular-standalone/timepicker-format-adjusted.html](../../examples/angular-standalone-examples/src/preview-examples/timepicker-format-adjusted.html), [angular-standalone/timepicker-format-adjusted.ts](../../examples/angular-standalone-examples/src/preview-examples/timepicker-format-adjusted.ts)
  - html: [html/timepicker-format-adjusted.html](../../examples/html-examples/src/preview-examples/timepicker-format-adjusted.html)
  - react: [react/timepicker-format-adjusted.tsx](../../examples/react-examples/src/preview-examples/timepicker-format-adjusted.tsx)
  - vue: [vue/timepicker-format-adjusted.vue](../../examples/vue-examples/src/preview-examples/timepicker-format-adjusted.vue)
- timepicker-intervals
  - angular: [angular/timepicker-intervals.html](../../examples/angular-examples/src/preview-examples/timepicker-intervals.html), [angular/timepicker-intervals.ts](../../examples/angular-examples/src/preview-examples/timepicker-intervals.ts)
  - angular-standalone: [angular-standalone/timepicker-intervals.html](../../examples/angular-standalone-examples/src/preview-examples/timepicker-intervals.html), [angular-standalone/timepicker-intervals.ts](../../examples/angular-standalone-examples/src/preview-examples/timepicker-intervals.ts)
  - html: [html/timepicker-intervals.html](../../examples/html-examples/src/preview-examples/timepicker-intervals.html)
  - react: [react/timepicker-intervals.tsx](../../examples/react-examples/src/preview-examples/timepicker-intervals.tsx)
  - vue: [vue/timepicker-intervals.vue](../../examples/vue-examples/src/preview-examples/timepicker-intervals.vue)
- timepicker-min-max-time
  - angular: [angular/timepicker-min-max-time.html](../../examples/angular-examples/src/preview-examples/timepicker-min-max-time.html), [angular/timepicker-min-max-time.ts](../../examples/angular-examples/src/preview-examples/timepicker-min-max-time.ts)
  - angular-standalone: [angular-standalone/timepicker-min-max-time.html](../../examples/angular-standalone-examples/src/preview-examples/timepicker-min-max-time.html), [angular-standalone/timepicker-min-max-time.ts](../../examples/angular-standalone-examples/src/preview-examples/timepicker-min-max-time.ts)
  - html: [html/timepicker-min-max-time.html](../../examples/html-examples/src/preview-examples/timepicker-min-max-time.html)
  - react: [react/timepicker-min-max-time.tsx](../../examples/react-examples/src/preview-examples/timepicker-min-max-time.tsx)
  - vue: [vue/timepicker-min-max-time.vue](../../examples/vue-examples/src/preview-examples/timepicker-min-max-time.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `corners`; attr: `corners`; type: `"left" | "right" | "rounded" | "straight"`; default: `'rounded'` - Corner style.
- `embedded`; attr: `embedded`; type: `boolean`; default: `false` - Embedded style (for use in other components).
- `format`; attr: `format`; type: `string`; default: `'TT'` - Format of time string. See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens. Note: Formats that combine date and time (like f or F) are not supported. Timestamp tokens x and X are not supported either.
- `hideHeader`; attr: `hide-header`; type: `boolean`; default: `false` - Hides the header of the picker.
- `hourInterval`; attr: `hour-interval`; type: `number`; default: `1` - Interval for hour selection.
- `i18nConfirmTime`; attr: `i18n-confirm-time`; type: `string`; default: `'Confirm'` - Text of the time confirm button.
- `i18nHeader`; attr: `i18n-header`; type: `string`; default: `'Time'` - Text for the top header.
- `i18nHourColumnHeader`; attr: `i18n-hour-column-header`; type: `string`; default: `'hr'` - Text for the hour column header.
- `i18nMillisecondColumnHeader`; attr: `i18n-millisecond-column-header`; type: `string`; default: `'ms'` - Text for the millisecond column header.
- `i18nMinuteColumnHeader`; attr: `i18n-minute-column-header`; type: `string`; default: `'min'` - Text for the minute column header.
- `i18nSecondColumnHeader`; attr: `i18n-second-column-header`; type: `string`; default: `'sec'` - Text for the second column header.
- `maxTime`; attr: `max-time`; type: `string | undefined` - Latest selectable time (`format` tokens). Invalid non-empty values are ignored.
- `millisecondInterval`; attr: `millisecond-interval`; type: `number`; default: `100` - Interval for millisecond selection.
- `minTime`; attr: `min-time`; type: `string | undefined` - Earliest selectable time (`format` tokens). Invalid non-empty values are ignored.
- `minuteInterval`; attr: `minute-interval`; type: `number`; default: `1` - Interval for minute selection.
- `secondInterval`; attr: `second-interval`; type: `number`; default: `1` - Interval for second selection.
- `time`; attr: `time`; type: `string | undefined` - Selected time value. Format has to match the `format` property.

## Events

- `timeChange` - Time change event. Emitted when the selected time changes while interacting with the picker.
- `timeSelect` - Time event. Emitted when the user confirms the selected time.

## Slots

- None

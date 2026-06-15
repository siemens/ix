# ix-date-picker

> No component summary available.

## Documentation

- None

## Figma IDs

- 561:6290

## Related examples

- aria-label-properties
  - html: [html/aria-label-properties.html](../../examples/html-examples/src/preview-examples/aria-label-properties.html)
- datepicker
  - angular: [angular/datepicker.ts](../../examples/angular-examples/src/preview-examples/datepicker.ts)
  - angular-standalone: [angular-standalone/datepicker.ts](../../examples/angular-standalone-examples/src/preview-examples/datepicker.ts)
  - html: [html/datepicker.html](../../examples/html-examples/src/preview-examples/datepicker.html)
  - react: [react/datepicker.tsx](../../examples/react-examples/src/preview-examples/datepicker.tsx)
  - vue: [vue/datepicker.vue](../../examples/vue-examples/src/preview-examples/datepicker.vue)
- datepicker-locale
  - angular: [angular/datepicker-locale.html](../../examples/angular-examples/src/preview-examples/datepicker-locale.html), [angular/datepicker-locale.ts](../../examples/angular-examples/src/preview-examples/datepicker-locale.ts)
  - angular-standalone: [angular-standalone/datepicker-locale.html](../../examples/angular-standalone-examples/src/preview-examples/datepicker-locale.html), [angular-standalone/datepicker-locale.ts](../../examples/angular-standalone-examples/src/preview-examples/datepicker-locale.ts)
  - html: [html/datepicker-locale.html](../../examples/html-examples/src/preview-examples/datepicker-locale.html)
  - react: [react/datepicker-locale.tsx](../../examples/react-examples/src/preview-examples/datepicker-locale.tsx)
  - vue: [vue/datepicker-locale.vue](../../examples/vue-examples/src/preview-examples/datepicker-locale.vue)
- datepicker-range
  - angular: [angular/datepicker-range.ts](../../examples/angular-examples/src/preview-examples/datepicker-range.ts)
  - angular-standalone: [angular-standalone/datepicker-range.ts](../../examples/angular-standalone-examples/src/preview-examples/datepicker-range.ts)
  - html: [html/datepicker-range.html](../../examples/html-examples/src/preview-examples/datepicker-range.html)
  - react: [react/datepicker-range.tsx](../../examples/react-examples/src/preview-examples/datepicker-range.tsx)
  - vue: [vue/datepicker-range.vue](../../examples/vue-examples/src/preview-examples/datepicker-range.vue)

## Related blocks

- unavailable (not present in registry JSON)

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
- `locale`; attr: `locale`; type: `string | undefined` - Locale identifier (e.g. 'en' or 'de'). The locale is used to translate the labels for weekdays and months. It also determines the default order of weekdays based on the locale's conventions. When the locale changes, the weekday labels are rotated according to the `weekStartIndex`. It does not affect the values returned by methods and events.
- `maxDate`; attr: `max-date`; type: `string`; default: `''` - The latest date that can be selected by the date picker. If not set there will be no restriction.
- `minDate`; attr: `min-date`; type: `string`; default: `''` - The earliest date that can be selected by the date picker. If not set there will be no restriction.
- `showWeekNumbers`; attr: `show-week-numbers`; type: `boolean`; default: `false` - Shows week numbers displayed on the left side of the date picker.
- `singleSelection`; attr: `single-selection`; type: `boolean`; default: `false` - If true, disables date range selection (from/to).
- `to`; attr: `to`; type: `string | undefined` - The selected end date. If the date picker is not in range mode, this property has no impact. Format has to match the `format` property.
- `weekStartIndex`; attr: `week-start-index`; type: `number`; default: `0` - The index of which day to start the week on, based on the Locale#weekdays array. E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on Monday.

## Events

- `dateChange` - Emitted when the date selection changes. The `DateChangeEvent` contains `from` and `to` properties. The property strings are formatted according to the `format` property and not affected by the `locale` property. The locale applied is always `en-US`. Note: Since 2.0.0 `dateChange` does not dispatch detail property as `string`
- `dateRangeChange` - Date range change event. Emitted when the date range selection changes and the component is in range mode. The `DateChangeEvent` contains `from` and `to` properties. The property strings are formatted according to the `format` property and not affected by the `locale` property. The locale applied is always `en-US`.
- `dateSelect` - Date selection event. Emitted when the selection is confirmed via the date select button. The `DateChangeEvent` contains `from` and `to` properties. The property strings are formatted according to the `format` property and not affected by the `locale` property. The locale applied is always `en-US`.

## Slots

- None

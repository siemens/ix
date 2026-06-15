# ix-date-dropdown

> No component summary available.

## Documentation

- None

## Figma IDs

- 45886:27067

## Related examples

- date-dropdown
  - angular: [angular/date-dropdown.html](../../examples/angular-examples/src/preview-examples/date-dropdown.html), [angular/date-dropdown.ts](../../examples/angular-examples/src/preview-examples/date-dropdown.ts)
  - angular-standalone: [angular-standalone/date-dropdown.html](../../examples/angular-standalone-examples/src/preview-examples/date-dropdown.html), [angular-standalone/date-dropdown.ts](../../examples/angular-standalone-examples/src/preview-examples/date-dropdown.ts)
  - html: [html/date-dropdown.html](../../examples/html-examples/src/preview-examples/date-dropdown.html)
  - react: [react/date-dropdown.tsx](../../examples/react-examples/src/preview-examples/date-dropdown.tsx)
  - vue: [vue/date-dropdown.vue](../../examples/vue-examples/src/preview-examples/date-dropdown.vue)
- date-dropdown-presets
  - angular: [angular/date-dropdown-presets.html](../../examples/angular-examples/src/preview-examples/date-dropdown-presets.html), [angular/date-dropdown-presets.ts](../../examples/angular-examples/src/preview-examples/date-dropdown-presets.ts)
  - angular-standalone: [angular-standalone/date-dropdown-presets.html](../../examples/angular-standalone-examples/src/preview-examples/date-dropdown-presets.html), [angular-standalone/date-dropdown-presets.ts](../../examples/angular-standalone-examples/src/preview-examples/date-dropdown-presets.ts)
  - html: [html/date-dropdown-presets.html](../../examples/html-examples/src/preview-examples/date-dropdown-presets.html)
  - react: [react/date-dropdown-presets.tsx](../../examples/react-examples/src/preview-examples/date-dropdown-presets.tsx)
  - vue: [vue/date-dropdown-presets.vue](../../examples/vue-examples/src/preview-examples/date-dropdown-presets.vue)
- date-dropdown-user-range
  - angular: [angular/date-dropdown-user-range.html](../../examples/angular-examples/src/preview-examples/date-dropdown-user-range.html), [angular/date-dropdown-user-range.ts](../../examples/angular-examples/src/preview-examples/date-dropdown-user-range.ts)
  - angular-standalone: [angular-standalone/date-dropdown-user-range.html](../../examples/angular-standalone-examples/src/preview-examples/date-dropdown-user-range.html), [angular-standalone/date-dropdown-user-range.ts](../../examples/angular-standalone-examples/src/preview-examples/date-dropdown-user-range.ts)
  - html: [html/date-dropdown-user-range.html](../../examples/html-examples/src/preview-examples/date-dropdown-user-range.html)
  - react: [react/date-dropdown-user-range.tsx](../../examples/react-examples/src/preview-examples/date-dropdown-user-range.tsx)
  - vue: [vue/date-dropdown-user-range.vue](../../examples/vue-examples/src/preview-examples/date-dropdown-user-range.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `dateRangeId`; attr: `date-range-id`; type: `string`; default: `'custom'` - Used to set the initial select date range as well as the button name, if not set or no according date range label is found, nothing will be selected
- `dateRangeOptions`; type: `DateDropdownOption[]`; default: `[]` - An array of predefined date range options for the date picker. Each option is an object with a label describing the range and a function that returns the start and end dates of the range as a DateRangeOption object. Example format: { id: 'some unique id', label: 'Name of the range', from: undefined, to: '2023/03/29' }, // ... other predefined date range options ...
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable the button that opens the dropdown containing the date picker.
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `format`; attr: `format`; type: `string`; default: `'yyyy/LL/dd'` - Date format string. See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
- `from`; attr: `from`; type: `string`; default: `''` - Picker date. If the picker is in range mode this property is the start date. If set to `null` no default start date will be pre-selected. Format is based on `format`
- `i18nDone`; attr: `i18n-done`; type: `string`; default: `'Done'` - Text for the done button. Will be used for translation.
- `i18nNoRange`; attr: `i18n-no-range`; type: `string`; default: `'No range set'` - Text for the done button. Will be used for translation.
- `loading`; attr: `loading`; type: `boolean`; default: `false` - Loading button
- `locale`; attr: `locale`; type: `string | undefined` - Locale identifier (e.g. 'en' or 'de').
- `maxDate`; attr: `max-date`; type: `string`; default: `''` - The latest date that can be selected by the date picker. If not set there will be no restriction.
- `minDate`; attr: `min-date`; type: `string`; default: `''` - The earliest date that can be selected by the date picker. If not set there will be no restriction.
- `showWeekNumbers`; attr: `show-week-numbers`; type: `boolean`; default: `false` - Shows week numbers displayed on the left side of the date picker
- `singleSelection`; attr: `single-selection`; type: `boolean`; default: `false` - If true disables date range selection (from/to).
- `to`; attr: `to`; type: `string`; default: `''` - Picker date. If the picker is in range mode this property is the end date. If the picker is not in range mode leave this value `null` Format is based on `format`
- `variant`; attr: `variant`; type: `"danger-primary" | "danger-secondary" | "danger-tertiary" | "primary" | "secondary" | "subtle-primary" | "subtle-secondary" | "subtle-tertiary" | "tertiary"`; default: `'primary'` - Button variant
- `weekStartIndex`; attr: `week-start-index`; type: `number`; default: `0` - The index of which day to start the week on, based on the Locale#weekdays array. E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on monday.

## Events

- `dateRangeChange` - EventEmitter for date range change events. This event is emitted when the date range changes within the component. The event payload contains information about the selected date range.

## Slots

- None

# ix-date-dropdown

> Dropdown for selecting a date or a relative date range.

- Web component: `<ix-date-dropdown>`
- React: `IxDateDropdown` from `@siemens/ix-react`
- Vue: `IxDateDropdown` from `@siemens/ix-vue`

## Documentation

- https://ix.siemens.io/docs/components/date-dropdown/code.md

## Figma IDs

- 45886:27067

## Properties

- `dateRangeId`; attr: `date-range-id`; type: `string`; default: `'custom'` - Used to set the initial select date range as well as the button name, if not set or no according date range label is found, nothing will be selected
- `dateRangeOptions`; type: `DateDropdownOption[]`; default: `[]` - An array of predefined date range options for the date picker. Each option is an object with a label describing the range and a function that returns the start and end dates of the range as a DateRangeOption object. Example format: { id: 'some unique id', label: 'Name of the range', from: undefined, to: '2023/03/29' }, // ... other predefined date range options ...
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable the button that opens the dropdown containing the date picker.
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `format`; attr: `format`; type: `string`; default: `'yyyy/LL/dd'` - Date format string. See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
- `from`; attr: `from`; type: `string`; default: `''` - Picker date. If the picker is in range mode this property is the start date. If set to `null` no default start date will be pre-selected. Format is based on `format`
- `i18nCancel`; attr: `i18n-cancel`; type: `string`; default: `'Cancel'` - Text of the cancel button shown when `requireConfirmation` is enabled.
- `i18nConfirm`; attr: `i18n-confirm`; type: `string`; default: `'Confirm'` - Text of the confirm button shown when `requireConfirmation` is enabled.
- `i18nDone`; attr: `i18n-done`; type: `string`; default: `'Done'` - Text for the done button. Will be used for translation.
- `i18nNoRange`; attr: `i18n-no-range`; type: `string`; default: `'No range set'` - Text for the done button. Will be used for translation.
- `loading`; attr: `loading`; type: `boolean`; default: `false` - Loading button
- `locale`; attr: `locale`; type: `string | undefined` - Locale identifier (e.g. 'en' or 'de').
- `maxDate`; attr: `max-date`; type: `string`; default: `''` - The latest date that can be selected by the date picker. If not set there will be no restriction.
- `minDate`; attr: `min-date`; type: `string`; default: `''` - The earliest date that can be selected by the date picker. If not set there will be no restriction.
- `requireConfirmation`; attr: `require-confirmation`; type: `boolean`; default: `false` - If true, a date range picked in the dropdown is only applied after the user confirms it with the confirm button, which emits `dateSelect`. The trigger label keeps the applied range until then, while `dateRangeChange` still reports every pick. The cancel button, pressing Escape or clicking outside the dropdown discards the pending selection.
- `showWeekNumbers`; attr: `show-week-numbers`; type: `boolean`; default: `false` - Shows week numbers displayed on the left side of the date picker
- `singleSelection`; attr: `single-selection`; type: `boolean`; default: `false` - If true disables date range selection (from/to).
- `to`; attr: `to`; type: `string`; default: `''` - Picker date. If the picker is in range mode this property is the end date. If the picker is not in range mode leave this value `null` Format is based on `format`
- `variant`; attr: `variant`; type: `"danger-primary" | "danger-secondary" | "danger-tertiary" | "primary" | "secondary" | "subtle-primary" | "subtle-secondary" | "subtle-tertiary" | "tertiary"`; default: `'primary'` - Button variant
- `weekStartIndex`; attr: `week-start-index`; type: `number`; default: `0` - The index of the day the week starts on, as a 0-based index into Luxon's `Info.weekdays()` array. That array is always ordered Monday-first regardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday. E.g. weekStartIndex = 6 results in starting the week on Sunday.

## Events

- `dateRangeChange` - EventEmitter for date range change events. This event is emitted when the date range changes within the component. The event payload contains information about the selected date range. When a pending selection is discarded, it is emitted with the applied range again. Use `dateSelect` to only receive applied ranges.
- `dateSelect` - Emitted when the user applies a changed range: on confirm with `requireConfirmation`, otherwise when a complete range or a predefined range is picked. It is not emitted for programmatic prop input changes.

## Methods

- `getDateRange() => Promise<DateRangeChangeEvent>` - Retrieves the applied date range from the component. This method returns the applied date range as a `DateChangeEvent` object. With `requireConfirmation`, a pending selection is not returned until it is confirmed. Listen to `dateRangeChange` to get every pick.

## Slots

- None

## Dependencies

- Renders: `ix-button`, `ix-date-picker`, `ix-dropdown`, `ix-spinner`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- date-dropdown (angular, angular-standalone, html, react, vue)
- date-dropdown-presets (angular, angular-standalone, html, react, vue)
- date-dropdown-require-confirmation (angular, angular-standalone, html, react, vue)
- date-dropdown-user-range (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

# ix-time-input

> Text input for entering and validating a time value.

- Web component: `<ix-time-input>`
- React/Vue: `IxTimeInput` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-time-input>` (`IxModule` from `@siemens/ix-angular` or `IxTimeInput` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/input-time/guide.md

## Figma IDs

- 68801:5742

## Properties

- `ariaLabelTimeToggleButton`; attr: `aria-label-time-toggle-button`; type: `string | undefined`; default: `'Toggle time picker'` - ARIA label for the time picker toggle button Will be set as aria-label for the nested HTML button element
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disabled attribute.
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `format`; attr: `format`; type: `string`; default: `'TT'` - Format of time string. See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
- `helperText`; attr: `helper-text`; type: `string | undefined` - Helper text below the input field.
- `hideHeader`; attr: `hide-header`; type: `boolean`; default: `false` - Hides the header of the picker.
- `hourInterval`; attr: `hour-interval`; type: `number`; default: `1` - Interval for hour selection.
- `i18nAm`; attr: `i18n-am`; type: `string`; default: `'AM'` - Label for the AM button in 12-hour mode.
- `i18nErrorTimeUnparsable`; attr: `i18n-error-time-unparsable`; type: `string`; default: `'Time is not valid'` - I18n string for the error message when the time is not parsable.
- `i18nHourColumnHeader`; attr: `i18n-hour-column-header`; type: `string`; default: `'hr'` - Text for the time picker hour column header.
- `i18nMillisecondColumnHeader`; attr: `i18n-millisecond-column-header`; type: `string`; default: `'ms'` - Text for the time picker millisecond column header.
- `i18nMinuteColumnHeader`; attr: `i18n-minute-column-header`; type: `string`; default: `'min'` - Text for the time picker minute column header.
- `i18nPm`; attr: `i18n-pm`; type: `string`; default: `'PM'` - Label for the PM button in 12-hour mode.
- `i18nSecondColumnHeader`; attr: `i18n-second-column-header`; type: `string`; default: `'sec'` - Text for the time picker second column header.
- `i18nSelectTime`; attr: `i18n-select-time`; type: `string`; default: `'Confirm'` - Text of the time picker confirm button.
- `i18nTime`; attr: `i18n-time`; type: `string`; default: `'Time'` - Text for the time picker top label.
- `infoText`; attr: `info-text`; type: `string | undefined` - Info text below the input field.
- `invalidText`; attr: `invalid-text`; type: `string | undefined` - Error text below the input field.
- `label`; attr: `label`; type: `string | undefined` - Label of the input field.
- `locale`; attr: `locale`; type: `string | undefined` - Locale identifier (e.g. 'en' or 'de'). Passed to the embedded time picker for locale-aware parsing and formatting.
- `maxTime`; attr: `max-time`; type: `string | undefined` - Latest selectable time (`format` tokens). Invalid non-empty values are ignored.
- `millisecondInterval`; attr: `millisecond-interval`; type: `number`; default: `100` - Interval for millisecond selection.
- `minTime`; attr: `min-time`; type: `string | undefined` - Earliest selectable time (`format` tokens). Invalid non-empty values are ignored.
- `minuteInterval`; attr: `minute-interval`; type: `number`; default: `1` - Interval for minute selection.
- `name`; attr: `name`; type: `string | undefined` - Name of the input element.
- `placeholder`; attr: `placeholder`; type: `string | undefined` - Placeholder of the input element.
- `readonly`; attr: `readonly`; type: `boolean`; default: `false` - Readonly attribute.
- `required`; attr: `required`; type: `boolean | undefined` - Required attribute.
- `secondInterval`; attr: `second-interval`; type: `number`; default: `1` - Interval for second selection.
- `showTextAsTooltip`; attr: `show-text-as-tooltip`; type: `boolean | undefined` - Show text as tooltip.
- `suppressSubmitOnEnter`; attr: `suppress-submit-on-enter`; type: `boolean`; default: `false` - If false, pressing Enter will submit the form (if inside a form). Set to true to suppress submit on Enter.
- `textAlignment`; attr: `text-alignment`; type: `"end" | "start"`; default: `'start'` - Text alignment within the time input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input.
- `validText`; attr: `valid-text`; type: `string | undefined` - Valid text below the input field.
- `value`; attr: `value`; type: `string`; default: `''` - Value of the input element.
- `warningText`; attr: `warning-text`; type: `string | undefined` - Warning text below the input field.

## Events

- `ixChange` - Change event. Emitted when the time input loses focus and the value has changed.
- `validityStateChange` - Validation state change event. Emitted when the validation state changes.
- `valueChange` - Value change event. Emitted when the input value changes.

## Methods

- `focusInput() => Promise<void>` - Focuses the input field
- `getNativeInputElement() => Promise<HTMLInputElement>` - Get the native input element

## Slots

- `end` - Element will be displayed at the end of the input
- `start` - Element will be displayed at the start of the input

## Dependencies

- Renders: `ix-dropdown`, `ix-field-wrapper`, `ix-icon-button`, `ix-time-picker`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- input (angular, angular-standalone, html, react, vue)
- range-field (angular, angular-standalone, html, react, vue)
- time-input (angular, angular-standalone, html, react, vue)
- time-input-disabled (angular, angular-standalone, html, react, vue)
- time-input-label (angular, angular-standalone, html, react, vue)
- time-input-readonly (angular, angular-standalone, html, react, vue)
- time-input-validation (angular, angular-standalone, html, react, vue)
- time-input-with-slots (angular, angular-standalone, html, react, vue)
- time-range (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

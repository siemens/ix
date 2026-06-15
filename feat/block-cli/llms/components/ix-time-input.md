# ix-time-input

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/input-time/guide.md

## Figma IDs

- 68801:5742

## Related examples

- range-field
- time-input
- time-input-disabled
- time-input-label
- time-input-readonly
- time-input-validation
- time-input-with-slots
- time-range

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelTimeToggleButton`; attr: `aria-label-time-toggle-button`; type: `string | undefined`; default: `'Toggle time picker'` - ARIA label for the time picker toggle button Will be set as aria-label for the nested HTML button element
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disabled attribute.
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `format`; attr: `format`; type: `string`; default: `'TT'` - Format of time string. See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
- `helperText`; attr: `helper-text`; type: `string | undefined` - Helper text below the input field.
- `hideHeader`; attr: `hide-header`; type: `boolean`; default: `false` - Hides the header of the picker.
- `hourInterval`; attr: `hour-interval`; type: `number`; default: `1` - Interval for hour selection.
- `i18nErrorTimeUnparsable`; attr: `i18n-error-time-unparsable`; type: `string`; default: `'Time is not valid'` - I18n string for the error message when the time is not parsable.
- `i18nHourColumnHeader`; attr: `i18n-hour-column-header`; type: `string`; default: `'hr'` - Text for the time picker hour column header.
- `i18nMillisecondColumnHeader`; attr: `i18n-millisecond-column-header`; type: `string`; default: `'ms'` - Text for the time picker millisecond column header.
- `i18nMinuteColumnHeader`; attr: `i18n-minute-column-header`; type: `string`; default: `'min'` - Text for the time picker minute column header.
- `i18nSecondColumnHeader`; attr: `i18n-second-column-header`; type: `string`; default: `'sec'` - Text for the time picker second column header.
- `i18nSelectTime`; attr: `i18n-select-time`; type: `string`; default: `'Confirm'` - Text of the time picker confirm button.
- `i18nTime`; attr: `i18n-time`; type: `string`; default: `'Time'` - Text for the time picker top label.
- `infoText`; attr: `info-text`; type: `string | undefined` - Info text below the input field.
- `invalidText`; attr: `invalid-text`; type: `string | undefined` - Error text below the input field.
- `label`; attr: `label`; type: `string | undefined` - Label of the input field.
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

## Slots

- `end` - Element will be displayed at the end of the input
- `start` - Element will be displayed at the start of the input

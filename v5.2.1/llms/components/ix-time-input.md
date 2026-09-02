# ix-time-input

> Text input for entering and validating a time value.

## Documentation

- https://ix.siemens.io//docs/components/input-time/guide.md

## Figma IDs

- 68801:5742

## Related examples

Example file links are relative to this Markdown file.

- range-field
  - angular:
    - `angular/range-field.ts`: [file](../../examples/angular/range-field.ts)
  - angular-standalone:
    - `angular-standalone/range-field.ts`: [file](../../examples/angular-standalone/range-field.ts)
  - html:
    - `html/range-field.html`: [file](../../examples/html/range-field.html)
  - react:
    - `react/range-field.tsx`: [file](../../examples/react/range-field.tsx)
  - vue:
    - `vue/range-field.vue`: [file](../../examples/vue/range-field.vue)
- time-input
  - angular:
    - `angular/time-input.html`: [file](../../examples/angular/time-input.html)
    - `angular/time-input.ts`: [file](../../examples/angular/time-input.ts)
  - angular-standalone:
    - `angular-standalone/time-input.html`: [file](../../examples/angular-standalone/time-input.html)
    - `angular-standalone/time-input.ts`: [file](../../examples/angular-standalone/time-input.ts)
  - html:
    - `html/time-input.html`: [file](../../examples/html/time-input.html)
  - react:
    - `react/time-input.tsx`: [file](../../examples/react/time-input.tsx)
  - vue:
    - `vue/time-input.vue`: [file](../../examples/vue/time-input.vue)
- time-input-disabled
  - angular:
    - `angular/time-input-disabled.html`: [file](../../examples/angular/time-input-disabled.html)
    - `angular/time-input-disabled.ts`: [file](../../examples/angular/time-input-disabled.ts)
  - angular-standalone:
    - `angular-standalone/time-input-disabled.html`: [file](../../examples/angular-standalone/time-input-disabled.html)
    - `angular-standalone/time-input-disabled.ts`: [file](../../examples/angular-standalone/time-input-disabled.ts)
  - html:
    - `html/time-input-disabled.html`: [file](../../examples/html/time-input-disabled.html)
  - react:
    - `react/time-input-disabled.tsx`: [file](../../examples/react/time-input-disabled.tsx)
  - vue:
    - `vue/time-input-disabled.vue`: [file](../../examples/vue/time-input-disabled.vue)
- time-input-label
  - angular:
    - `angular/time-input-label.html`: [file](../../examples/angular/time-input-label.html)
    - `angular/time-input-label.ts`: [file](../../examples/angular/time-input-label.ts)
  - angular-standalone:
    - `angular-standalone/time-input-label.html`: [file](../../examples/angular-standalone/time-input-label.html)
    - `angular-standalone/time-input-label.ts`: [file](../../examples/angular-standalone/time-input-label.ts)
  - html:
    - `html/time-input-label.html`: [file](../../examples/html/time-input-label.html)
  - react:
    - `react/time-input-label.tsx`: [file](../../examples/react/time-input-label.tsx)
  - vue:
    - `vue/time-input-label.vue`: [file](../../examples/vue/time-input-label.vue)
- time-input-readonly
  - angular:
    - `angular/time-input-readonly.html`: [file](../../examples/angular/time-input-readonly.html)
    - `angular/time-input-readonly.ts`: [file](../../examples/angular/time-input-readonly.ts)
  - angular-standalone:
    - `angular-standalone/time-input-readonly.html`: [file](../../examples/angular-standalone/time-input-readonly.html)
    - `angular-standalone/time-input-readonly.ts`: [file](../../examples/angular-standalone/time-input-readonly.ts)
  - html:
    - `html/time-input-readonly.html`: [file](../../examples/html/time-input-readonly.html)
  - react:
    - `react/time-input-readonly.tsx`: [file](../../examples/react/time-input-readonly.tsx)
  - vue:
    - `vue/time-input-readonly.vue`: [file](../../examples/vue/time-input-readonly.vue)
- time-range
  - angular:
    - `angular/time-range.ts`: [file](../../examples/angular/time-range.ts)
  - angular-standalone:
    - `angular-standalone/time-range.ts`: [file](../../examples/angular-standalone/time-range.ts)
  - html:
    - `html/time-range.html`: [file](../../examples/html/time-range.html)
  - react:
    - `react/time-range.tsx`: [file](../../examples/react/time-range.tsx)
  - vue:
    - `vue/time-range.vue`: [file](../../examples/vue/time-range.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

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

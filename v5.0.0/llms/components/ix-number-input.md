# ix-number-input

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/forms-field/guide.md
- https://ix.siemens.io//docs/components/forms-layout/guide.md
- https://ix.siemens.io//docs/components/forms-validation/guide.md
- https://ix.siemens.io//docs/components/input-number/guide.md

## Figma IDs

- 42365:39459

## Related examples

- number-input
- number-input-disabled
- number-input-label
- number-input-readonly
- number-input-stepper-button
- number-input-validation
- number-input-with-slots

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `allowedCharactersPattern`; attr: `allowed-characters-pattern`; type: `string | undefined` - The allowed characters pattern for the input field
- `allowEmptyValueChange`; attr: `allow-empty-value-change`; type: `boolean`; default: `false` - If true, the valueChange event will return null instead of 0 for an empty input state. This property will be removed in 5.0.0 and this behaviour will be default.
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disables the input field
- `helperText`; attr: `helper-text`; type: `string | undefined` - The helper text for the input field
- `infoText`; attr: `info-text`; type: `string | undefined` - The info text for the input field
- `invalidText`; attr: `invalid-text`; type: `string | undefined` - The error text for the input field
- `label`; attr: `label`; type: `string | undefined` - The label for the input field
- `max`; attr: `max`; type: `number | string | undefined` - The maximum value for the input field
- `min`; attr: `min`; type: `number | string | undefined` - The minimum value for the input field
- `name`; attr: `name`; type: `string | undefined` - name of the input element
- `pattern`; attr: `pattern`; type: `string | undefined` - The pattern for the input field
- `placeholder`; attr: `placeholder`; type: `string | undefined` - placeholder of the input element
- `readonly`; attr: `readonly`; type: `boolean`; default: `false` - Indicates if the field is read-only
- `required`; attr: `required`; type: `boolean`; default: `false` - Indicates if the field is required. When required, empty values (undefined) are not accepted.
- `showStepperButtons`; attr: `show-stepper-buttons`; type: `boolean | undefined` - Indicates if the stepper buttons should be shown
- `showTextAsTooltip`; attr: `show-text-as-tooltip`; type: `boolean | undefined` - Indicates if the text should be shown as a tooltip
- `step`; attr: `step`; type: `number | string | undefined`; default: `1` - Step value to increment or decrement the input value. Default step value is 1.
- `suppressSubmitOnEnter`; attr: `suppress-submit-on-enter`; type: `boolean`; default: `false` - If false, pressing Enter will submit the form (if inside a form). Set to true to suppress submit on Enter.
- `textAlignment`; attr: `text-alignment`; type: `"end" | "start"`; default: `'end'` - Text alignment within the number input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input.
- `validText`; attr: `valid-text`; type: `string | undefined` - The valid text for the input field
- `value`; attr: `value`; type: `number | undefined`; default: `0` - The value of the input field. Supports numeric values, scientific notation (1E6, 1E-6), or undefined for empty.
- `warningText`; attr: `warning-text`; type: `string | undefined` - The warning text for the input field

## Events

- `ixBlur` - Event emitted when the input field loses focus
- `ixChange` - Event emitted when the input field loses focus and the value has changed
- `validityStateChange` - Event emitted when the validity state of the input field changes
- `valueChange` - Event emitted when the value of the input field changes

## Slots

- `end` - Element will be displayed at the end of the input
- `start` - Element will be displayed at the start of the input

# ix-number-input

> Text input for entering and validating a numeric value.

## Documentation

- https://ix.siemens.io//docs/components/forms-field/guide.md
- https://ix.siemens.io//docs/components/forms-layout/guide.md
- https://ix.siemens.io//docs/components/forms-validation/guide.md
- https://ix.siemens.io//docs/components/input-number/guide.md

## Figma IDs

- 42365:39459

## Related examples

Example file links are relative to this Markdown file.

- number-input
  - angular:
    - `angular/number-input.html`: [file](../../examples/angular/number-input.html)
    - `angular/number-input.ts`: [file](../../examples/angular/number-input.ts)
  - angular-standalone:
    - `angular-standalone/number-input.html`: [file](../../examples/angular-standalone/number-input.html)
    - `angular-standalone/number-input.ts`: [file](../../examples/angular-standalone/number-input.ts)
  - html:
    - `html/number-input.html`: [file](../../examples/html/number-input.html)
  - react:
    - `react/number-input.tsx`: [file](../../examples/react/number-input.tsx)
  - vue:
    - `vue/number-input.vue`: [file](../../examples/vue/number-input.vue)
- number-input-disabled
  - angular:
    - `angular/number-input-disabled.html`: [file](../../examples/angular/number-input-disabled.html)
    - `angular/number-input-disabled.ts`: [file](../../examples/angular/number-input-disabled.ts)
  - angular-standalone:
    - `angular-standalone/number-input-disabled.html`: [file](../../examples/angular-standalone/number-input-disabled.html)
    - `angular-standalone/number-input-disabled.ts`: [file](../../examples/angular-standalone/number-input-disabled.ts)
  - html:
    - `html/number-input-disabled.html`: [file](../../examples/html/number-input-disabled.html)
  - react:
    - `react/number-input-disabled.tsx`: [file](../../examples/react/number-input-disabled.tsx)
  - vue:
    - `vue/number-input-disabled.vue`: [file](../../examples/vue/number-input-disabled.vue)
- number-input-label
  - angular:
    - `angular/number-input-label.html`: [file](../../examples/angular/number-input-label.html)
    - `angular/number-input-label.ts`: [file](../../examples/angular/number-input-label.ts)
  - angular-standalone:
    - `angular-standalone/number-input-label.html`: [file](../../examples/angular-standalone/number-input-label.html)
    - `angular-standalone/number-input-label.ts`: [file](../../examples/angular-standalone/number-input-label.ts)
  - html:
    - `html/number-input-label.html`: [file](../../examples/html/number-input-label.html)
  - react:
    - `react/number-input-label.tsx`: [file](../../examples/react/number-input-label.tsx)
  - vue:
    - `vue/number-input-label.vue`: [file](../../examples/vue/number-input-label.vue)
- number-input-readonly
  - angular:
    - `angular/number-input-readonly.html`: [file](../../examples/angular/number-input-readonly.html)
    - `angular/number-input-readonly.ts`: [file](../../examples/angular/number-input-readonly.ts)
  - angular-standalone:
    - `angular-standalone/number-input-readonly.html`: [file](../../examples/angular-standalone/number-input-readonly.html)
    - `angular-standalone/number-input-readonly.ts`: [file](../../examples/angular-standalone/number-input-readonly.ts)
  - html:
    - `html/number-input-readonly.html`: [file](../../examples/html/number-input-readonly.html)
  - react:
    - `react/number-input-readonly.tsx`: [file](../../examples/react/number-input-readonly.tsx)
  - vue:
    - `vue/number-input-readonly.vue`: [file](../../examples/vue/number-input-readonly.vue)
- number-input-stepper-button
  - angular:
    - `angular/number-input-stepper-button.html`: [file](../../examples/angular/number-input-stepper-button.html)
    - `angular/number-input-stepper-button.ts`: [file](../../examples/angular/number-input-stepper-button.ts)
  - angular-standalone:
    - `angular-standalone/number-input-stepper-button.html`: [file](../../examples/angular-standalone/number-input-stepper-button.html)
    - `angular-standalone/number-input-stepper-button.ts`: [file](../../examples/angular-standalone/number-input-stepper-button.ts)
  - html:
    - `html/number-input-stepper-button.html`: [file](../../examples/html/number-input-stepper-button.html)
  - react:
    - `react/number-input-stepper-button.tsx`: [file](../../examples/react/number-input-stepper-button.tsx)
  - vue:
    - `vue/number-input-stepper-button.vue`: [file](../../examples/vue/number-input-stepper-button.vue)
- number-input-validation
  - angular:
    - `angular/number-input-validation.html`: [file](../../examples/angular/number-input-validation.html)
    - `angular/number-input-validation.ts`: [file](../../examples/angular/number-input-validation.ts)
  - angular-standalone:
    - `angular-standalone/number-input-validation.html`: [file](../../examples/angular-standalone/number-input-validation.html)
    - `angular-standalone/number-input-validation.ts`: [file](../../examples/angular-standalone/number-input-validation.ts)
  - html:
    - `html/number-input-validation.html`: [file](../../examples/html/number-input-validation.html)
  - react:
    - `react/number-input-validation.tsx`: [file](../../examples/react/number-input-validation.tsx)
  - vue:
    - `vue/number-input-validation.vue`: [file](../../examples/vue/number-input-validation.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

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

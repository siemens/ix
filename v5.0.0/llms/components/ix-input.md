# ix-input

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/forms-field/guide.md
- https://ix.siemens.io//docs/components/forms-layout/guide.md
- https://ix.siemens.io//docs/components/forms-validation/guide.md
- https://ix.siemens.io//docs/components/input/guide.md

## Figma IDs

- 42365:39459

## Related examples

- custom-field
- form-layout-auto
- form-layout-grid
- input
- input-disabled
- input-label
- input-pattern
- input-readonly
- input-types
- input-validation
- input-with-slots
- modal-form-ix-button-submit

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `allowedCharactersPattern`; attr: `allowed-characters-pattern`; type: `string | undefined` - The allowed characters pattern for the text field.
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Specifies whether the text field is disabled.
- `helperText`; attr: `helper-text`; type: `string | undefined` - The helper text for the text field.
- `infoText`; attr: `info-text`; type: `string | undefined` - The info text for the text field.
- `invalidText`; attr: `invalid-text`; type: `string | undefined` - The error text for the text field.
- `label`; attr: `label`; type: `string | undefined` - The label for the text field.
- `maxLength`; attr: `max-length`; type: `number | undefined` - The maximum length of the text field.
- `minLength`; attr: `min-length`; type: `number | undefined` - The minimum length of the text field.
- `name`; attr: `name`; type: `string | undefined` - The name of the text field.
- `pattern`; attr: `pattern`; type: `string | undefined` - The pattern for the text field.
- `placeholder`; attr: `placeholder`; type: `string | undefined` - The placeholder text for the text field.
- `readonly`; attr: `readonly`; type: `boolean`; default: `false` - Specifies whether the text field is readonly.
- `required`; attr: `required`; type: `boolean`; default: `false` - Specifies whether the text field is required.
- `showTextAsTooltip`; attr: `show-text-as-tooltip`; type: `boolean | undefined` - Specifies whether to show the text as a tooltip.
- `suppressSubmitOnEnter`; attr: `suppress-submit-on-enter`; type: `boolean`; default: `false` - If false, pressing Enter will submit the form (if inside a form). Set to true to suppress submit on Enter.
- `textAlignment`; attr: `text-alignment`; type: `"end" | "start"`; default: `'start'` - Text alignment within the input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input.
- `type`; attr: `type`; type: `"email" | "password" | "tel" | "text" | "url"`; default: `'text'` - The type of the text field. Possible values are 'text', 'email', or 'password'.
- `validText`; attr: `valid-text`; type: `string | undefined` - The valid text for the text field.
- `value`; attr: `value`; type: `string`; default: `''` - The value of the text field.
- `warningText`; attr: `warning-text`; type: `string | undefined` - The warning text for the text field.

## Events

- `ixBlur` - Event emitted when the text field loses focus.
- `ixChange` - Event emitted when the text field loses focus and the value has changed.
- `validityStateChange` - Event emitted when the validity state of the text field changes.
- `valueChange` - Event emitted when the value of the text field changes.

## Slots

- `end` - Element will be displayed at the end of the input
- `start` - Element will be displayed at the start of the input

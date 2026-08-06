# ix-custom-field

> Wrapper that adds label, helper text, and validation handling around custom form controls.

## Documentation

- https://ix.siemens.io//docs/components/custom-field/guide.md

## Figma IDs

- 42365:52677

## Related examples

Example source links are relative to this Markdown file.

- custom-field
  - angular:
    - `angular/custom-field.html`: [source](../../examples/angular-examples/src/preview-examples/custom-field.html)
    - `angular/custom-field.ts`: [source](../../examples/angular-examples/src/preview-examples/custom-field.ts)
  - angular-standalone:
    - `angular-standalone/custom-field.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/custom-field.html)
    - `angular-standalone/custom-field.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/custom-field.ts)
  - html:
    - `html/custom-field.html`: [source](../../examples/html-examples/src/preview-examples/custom-field.html)
  - react:
    - `react/custom-field.tsx`: [source](../../examples/react-examples/src/preview-examples/custom-field.tsx)
  - vue:
    - `vue/custom-field.vue`: [source](../../examples/vue-examples/src/preview-examples/custom-field.vue)
- custom-field-validation
  - angular:
    - `angular/custom-field-validation.html`: [source](../../examples/angular-examples/src/preview-examples/custom-field-validation.html)
    - `angular/custom-field-validation.ts`: [source](../../examples/angular-examples/src/preview-examples/custom-field-validation.ts)
  - angular-standalone:
    - `angular-standalone/custom-field-validation.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/custom-field-validation.html)
    - `angular-standalone/custom-field-validation.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/custom-field-validation.ts)
  - html:
    - `html/custom-field-validation.html`: [source](../../examples/html-examples/src/preview-examples/custom-field-validation.html)
  - react:
    - `react/custom-field-validation.tsx`: [source](../../examples/react-examples/src/preview-examples/custom-field-validation.tsx)
  - vue:
    - `vue/custom-field-validation.vue`: [source](../../examples/vue-examples/src/preview-examples/custom-field-validation.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `helperText`; attr: `helper-text`; type: `string | undefined` - Show text below the field component which show additional information
- `infoText`; attr: `info-text`; type: `string | undefined` - Info text for the field component
- `invalidText`; attr: `invalid-text`; type: `string | undefined` - Error text for the field component
- `label`; attr: `label`; type: `string | undefined` - Label for the field component
- `required`; attr: `required`; type: `boolean`; default: `false` - A value is required or must be checked for the form to be submittable
- `showTextAsTooltip`; attr: `show-text-as-tooltip`; type: `boolean | undefined` - Show helper, info, warning, error and valid text as tooltip
- `validText`; attr: `valid-text`; type: `string | undefined` - Valid text for the field component
- `warningText`; attr: `warning-text`; type: `string | undefined` - Warning text for the field component

## Events

- None

## Slots

- `` - Custom form field content.

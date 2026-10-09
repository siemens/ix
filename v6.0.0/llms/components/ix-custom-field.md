# ix-custom-field

> Wrapper that adds label, helper text, and validation handling around custom form controls.

- Web component: `<ix-custom-field>`
- React/Vue: `IxCustomField` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-custom-field>` (`IxModule` from `@siemens/ix-angular` or `IxCustomField` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/custom-field/guide.md

## Figma IDs

- 42365:52677

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

## Methods

- None

## Slots

- `` - Custom form field content.

## Dependencies

- Renders: `ix-field-wrapper`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- custom-field (angular, angular-standalone, html, react, vue)
- custom-field-validation (angular, angular-standalone, html, react, vue)
- form-validation (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

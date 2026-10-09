# ix-checkbox-group

> Groups related checkboxes together.

- Web component: `<ix-checkbox-group>`
- React/Vue: `IxCheckboxGroup` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-checkbox-group>` (`IxModule` from `@siemens/ix-angular` or `IxCheckboxGroup` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/checkbox/guide.md

## Figma IDs

- 84992:87199

## Properties

- `direction`; attr: `direction`; type: `"column" | "row"`; default: `'column'` - Alignment of the checkboxes in the group
- `helperText`; attr: `helper-text`; type: `string | undefined` - Optional helper text displayed below the checkbox group
- `infoText`; attr: `info-text`; type: `string | undefined` - Info text for the checkbox group
- `invalidText`; attr: `invalid-text`; type: `string | undefined` - Error text for the checkbox group
- `label`; attr: `label`; type: `string | undefined` - Label for the checkbox group
- `showTextAsTooltip`; attr: `show-text-as-tooltip`; type: `boolean`; default: `false` - Show helper, info, warning, error and valid text as tooltip
- `validText`; attr: `valid-text`; type: `string | undefined` - Valid text for the checkbox group
- `warningText`; attr: `warning-text`; type: `string | undefined` - Warning text for the checkbox group

## Events

- None

## Methods

- None

## Slots

- `` - Checkbox components.

## Dependencies

- Renders: `ix-field-wrapper`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- form-checkbox-group (angular, angular-standalone, html, react, vue)
- form-checkbox-group-indeterminate (angular, angular-standalone, html, react, vue)
- form-checkbox-validation (angular, angular-standalone, html, react, vue)
- form-validation (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

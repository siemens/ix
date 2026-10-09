# ix-checkbox

> Lets users select an option or toggle a single value on or off.

- Web component: `<ix-checkbox>`
- React/Vue: `IxCheckbox` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-checkbox>` (`IxModule` from `@siemens/ix-angular` or `IxCheckbox` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/checkbox/guide.md

## Figma IDs

- 42365:47165

## Properties

- `checked`; attr: `checked`; type: `boolean`; default: `false` - Checked state of the checkbox component
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disabled state of the checkbox component
- `indeterminate`; attr: `indeterminate`; type: `boolean`; default: `false` - Indeterminate state of the checkbox component
- `label`; attr: `label`; type: `string | undefined` - Label for the checkbox component
- `name`; attr: `name`; type: `string | undefined` - Name of the checkbox component
- `required`; attr: `required`; type: `boolean`; default: `false` - Required state of the checkbox component. If true, checkbox needs to be checked to be valid
- `value`; attr: `value`; type: `string`; default: `'on'` - Value of the checkbox component

## Events

- `checkedChange` - Event emitted when the checked state of the checkbox changes
- `ixBlur` - Event emitted when the checkbox is blurred
- `valueChange` - Event emitted when the value of the checkbox changes

## Methods

- None

## Slots

- `` - Checkbox label.

## Dependencies

- Renders: `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- form-checkbox (angular, angular-standalone, html, react, vue)
- form-checkbox-disabled (angular, angular-standalone, html, react, vue)
- form-checkbox-group (angular, angular-standalone, html, react, vue)
- form-checkbox-group-indeterminate (angular, angular-standalone, html, react, vue)
- form-checkbox-validation (angular, angular-standalone, html, react, vue)
- form-validation (angular, angular-standalone, html, react, vue)
- theme-switcher (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

# ix-radio

> Lets users select a single option from a set.

- Web component: `<ix-radio>`
- React/Vue: `IxRadio` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-radio>` (`IxModule` from `@siemens/ix-angular` or `IxRadio` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/radio/guide.md

## Figma IDs

- 42365:44481

## Properties

- `checked`; attr: `checked`; type: `boolean`; default: `false` - Checked state of the radio component
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disabled state of the radio component
- `label`; attr: `label`; type: `string | undefined` - Label for the radio component
- `name`; attr: `name`; type: `string | undefined` - Name of the radio component
- `required`; attr: `required`; type: `boolean`; default: `false` - Requires the radio component and its group to be checked for the form to be submittable
- `value`; attr: `value`; type: `string | undefined` - Value of the radio component

## Events

- `checkedChange` - Event emitted when the checked state of the radio changes
- `ixBlur` - Event emitted when the radio is blurred
- `valueChange` - Event emitted when the value of the radio changes

## Methods

- None

## Slots

- `` - Radio label.

## Dependencies

- Renders: `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- application-breakpoints (angular, angular-standalone, html, react, vue)
- form-validation (angular, angular-standalone, html, react, vue)
- radio (angular, angular-standalone, html, react, vue)
- radio-disabled (angular, angular-standalone, html, react, vue)
- radio-group (angular, angular-standalone, html, react, vue)
- radio-validation (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

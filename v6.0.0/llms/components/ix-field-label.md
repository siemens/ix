# ix-field-label

> Label for a form field.

- Web component: `<ix-field-label>`
- React/Vue: `IxFieldLabel` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-field-label>` (`IxModule` from `@siemens/ix-angular` or `IxFieldLabel` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/forms-field/guide.md
- https://ix.siemens.io/docs/components/forms-layout/guide.md
- https://ix.siemens.io/docs/components/forms-validation/guide.md

## Figma IDs

- 1682:60975

## Properties

- `htmlFor`; attr: `html-for`; type: `string | undefined` - The id of the form element that the label is associated with
- `required`; attr: `required`; type: `boolean | undefined` - A value is required or must be checked for the form to be submittable

## Events

- None

## Methods

- None

## Slots

- `` - Label content.

## Dependencies

- Renders: `ix-typography`
- Rendered by: `ix-field-wrapper`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- form-layout-auto (angular, angular-standalone, html, react, vue)
- form-layout-grid (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

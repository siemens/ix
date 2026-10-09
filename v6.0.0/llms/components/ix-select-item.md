# ix-select-item

> A selectable option within a select control.

- Web component: `<ix-select-item>`
- React/Vue: `IxSelectItem` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-select-item>` (`IxModule` from `@siemens/ix-angular` or `IxSelectItem` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/select/guide.md

## Figma IDs

- None

## Properties

- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable the item. A disabled item cannot be selected via mouse or keyboard and is excluded from the focusable items of the parent ix-select.
- `label`; attr: `label`; type: `string | undefined` - Displayed name of the item
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Flag indicating whether the item is selected
- `value`; attr: `value`; type: `string` - The value of the item. Important: The select component uses string values to handle selection and will call toString() on this value. Therefor a string should be passed to value to prevent unexpected behavior.

## Events

- `itemClick` - Item clicked

## Methods

- None

## Slots

- None

## Dependencies

- Renders: `ix-dropdown-item`
- Rendered by: `ix-pagination`, `ix-select`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- datepicker-locale (angular, angular-standalone, html, react, vue)
- datetimepicker-locale (angular, angular-standalone, html, react, vue)
- form-validation (angular, angular-standalone, html, react, vue)
- select (angular, angular-standalone, html, react, vue)
- select-editable (angular, angular-standalone, html, react, vue)
- select-multiple (angular, angular-standalone, html, react, vue)
- select-ng-model (angular, angular-standalone)
- select-validation (angular, angular-standalone, html, react, vue)
- theme-switcher (angular, angular-standalone, html, react, vue)
- validation-select (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

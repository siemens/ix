# ix-key-value

> Displays a labeled key together with its value.

- Web component: `<ix-key-value>`
- React/Vue: `IxKeyValue` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-key-value>` (`IxModule` from `@siemens/ix-angular` or `IxKeyValue` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/key-value/code.md

## Figma IDs

- 4727:112546

## Properties

- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `icon`; attr: `icon`; type: `string | undefined` - Optional key value icon
- `label`; attr: `label`; type: `string` - Key value label
- `labelPosition`; attr: `label-position`; type: `"left" | "top"`; default: `'top'` - Optional key value label position - 'top' or 'left'
- `value`; attr: `value`; type: `string | undefined` - Optional key value text value

## Events

- None

## Methods

- None

## Slots

- `custom-value` - Optional custom value at key value instead of text value

## Dependencies

- Renders: None
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- key-value (angular, angular-standalone, html, react, vue)
- key-value-list (angular, angular-standalone, html, react, vue)
- key-value-list-striped (angular, angular-standalone, html, react, vue)
- key-value-list-with-custom-value (angular, angular-standalone, html, react, vue)
- key-value-list-with-icon (angular, angular-standalone, html, react, vue)
- key-value-with-custom-value (angular, angular-standalone, html, react, vue)
- key-value-with-icon (angular, angular-standalone, html, react, vue)
- key-value-with-label-left (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

# ix-toggle-button

> Button that toggles between a pressed and unpressed state.

- Web component: `<ix-toggle-button>`
- React/Vue: `IxToggleButton` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-toggle-button>` (`IxModule` from `@siemens/ix-angular` or `IxToggleButton` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/toggle-button/guide.md

## Figma IDs

- 8994:173458

## Properties

- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable the button
- `icon`; attr: `icon`; type: `string | undefined` - Icon name
- `iconRight`; attr: `icon-right`; type: `string | undefined` - Icon name for the right side of the button
- `loading`; attr: `loading`; type: `boolean`; default: `false` - Loading button
- `pressed`; attr: `pressed`; type: `boolean`; default: `false` - Show button as pressed
- `variant`; attr: `variant`; type: `"primary" | "secondary" | "subtle-primary" | "subtle-secondary" | "subtle-tertiary" | "tertiary"`; default: `'subtle-primary'` - Button variant.

## Events

- `pressedChange` - Pressed change event

## Methods

- None

## Slots

- `` - Toggle button label.

## Dependencies

- Renders: `ix-spinner`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- toggle-button-primary (angular, angular-standalone, html, react, vue)
- toggle-button-secondary (angular, angular-standalone, html, react, vue)
- toggle-button-subtle-primary (angular, angular-standalone, html, react, vue)
- toggle-button-subtle-secondary (angular, angular-standalone, html, react, vue)
- toggle-button-subtle-tertiary (angular, angular-standalone, html, react, vue)
- toggle-button-tertiary (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

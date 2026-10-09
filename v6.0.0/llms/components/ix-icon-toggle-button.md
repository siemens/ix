# ix-icon-toggle-button

> Icon button that toggles between a pressed and unpressed state.

- Web component: `<ix-icon-toggle-button>`
- React/Vue: `IxIconToggleButton` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-icon-toggle-button>` (`IxModule` from `@siemens/ix-angular` or `IxIconToggleButton` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/toggle-button/guide.md

## Figma IDs

- 107597:25227

## Properties

- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable the button
- `ghost`; attr: `ghost`; type: `boolean`; default: `false` - Button with no background or outline
- `icon`; attr: `icon`; type: `string | undefined` - Icon name
- `loading`; attr: `loading`; type: `boolean`; default: `false` - Loading button
- `outline`; attr: `outline`; type: `boolean`; default: `false` - Outline button
- `oval`; attr: `oval`; type: `boolean`; default: `false` - Button in oval shape
- `pressed`; attr: `pressed`; type: `boolean`; default: `false` - Show button as pressed
- `size`; attr: `size`; type: `"12" | "16" | "20" | "24"`; default: `'20'` - Size of icon in button. `12` and `16` shrink the control. `20` and `24` keep a 32×32 control. Defaults to `20`.
- `variant`; attr: `variant`; type: `"danger-primary" | "danger-secondary" | "danger-tertiary" | "primary" | "secondary" | "subtle-primary" | "subtle-secondary" | "subtle-tertiary" | "tertiary"`; default: `'subtle-primary'` - Button variant.

## Events

- `pressedChange` - Pressed change event

## Methods

- None

## Slots

- None

## Dependencies

- Renders: `ix-spinner`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- icon-toggle-button-secondary (angular, angular-standalone, html, react, vue)
- icon-toggle-button-subtle-primary (angular, angular-standalone, html, react, vue)
- icon-toggle-button-subtle-secondary (angular, angular-standalone, html, react, vue)
- icon-toggle-button-subtle-tertiary (angular, angular-standalone, html, react, vue)
- icon-toggle-button-tertiary (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

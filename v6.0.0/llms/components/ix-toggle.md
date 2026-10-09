# ix-toggle

> Switch control for toggling a single setting on or off.

- Web component: `<ix-toggle>`
- React/Vue: `IxToggle` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-toggle>` (`IxModule` from `@siemens/ix-angular` or `IxToggle` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/toggle/guide.md

## Figma IDs

- 43875:36542

## Properties

- `checked`; attr: `checked`; type: `boolean`; default: `false` - Whether the slide-toggle element is checked or not.
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Whether the slide-toggle element is disabled or not.
- `hideText`; attr: `hide-text`; type: `boolean`; default: `false` - Hide `on` and `off` text
- `indeterminate`; attr: `indeterminate`; type: `boolean`; default: `false` - If true the control is in indeterminate state
- `name`; attr: `name`; type: `string | undefined` - Name of the checkbox component
- `required`; attr: `required`; type: `boolean`; default: `false` - Required state of the checkbox component. If true, checkbox needs to be checked to be valid
- `textIndeterminate`; attr: `text-indeterminate`; type: `string`; default: `'Mixed'` - Text for indeterminate state
- `textOff`; attr: `text-off`; type: `string`; default: `'Off'` - Text for off state
- `textOn`; attr: `text-on`; type: `string`; default: `'On'` - Text for on state
- `value`; attr: `value`; type: `string`; default: `'on'` - Value of the checkbox component

## Events

- `checkedChange` - An event will be dispatched each time the slide-toggle changes its value.
- `ixBlur` - An event will be dispatched each time the toggle is blurred.

## Methods

- None

## Slots

- None

## Dependencies

- Renders: `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- toggle (angular, angular-standalone, html, react, vue)
- toggle-checked (angular, angular-standalone, html, react, vue)
- toggle-custom-label (angular, angular-standalone, html, react, vue)
- toggle-disabled (angular, angular-standalone, html, react, vue)
- toggle-indeterminate (angular, angular-standalone, html, react, vue)
- toggle-ng-model (angular, angular-standalone)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

# ix-blind

> Collapsible container that expands and collapses to show or hide its content.

- Web component: `<ix-blind>`
- React/Vue: `IxBlind` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-blind>` (`IxModule` from `@siemens/ix-angular` or `IxBlind` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/blind/guide.md

## Figma IDs

- 388:3986

## Properties

- `collapsed`; attr: `collapsed`; type: `boolean`; default: `false` - Collapsed state
- `icon`; attr: `icon`; type: `string | undefined` - Optional icon to be displayed next to the header label
- `label`; attr: `label`; type: `string | undefined` - Label of blind
- `sublabel`; attr: `sublabel`; type: `string | undefined` - Secondary label inside blind header
- `variant`; attr: `variant`; type: `"alarm" | "critical" | "filled" | "info" | "neutral" | "outline" | "primary" | "success" | "warning"`; default: `'filled'` - Blind variant

## Events

- `collapsedChange` - Collapsed state changed

## Methods

- None

## Slots

- `` - Content shown when the blind is expanded.
- `custom-header` - Custom header content replacing the label and icon.
- `header-actions` - Additional actions displayed in the header.

## Dependencies

- Renders: `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- blind (angular, angular-standalone, html, react, vue)
- blind-header-actions (angular, angular-standalone, html, react, vue)
- blind-variants (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

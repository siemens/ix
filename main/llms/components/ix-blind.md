# ix-blind

> Collapsible container that expands and collapses to show or hide its content.

- Web component: `<ix-blind>`
- React: `IxBlind` from `@siemens/ix-react`
- Vue: `IxBlind` from `@siemens/ix-vue`

## Documentation

- https://ix.siemens.io/docs/components/blind/guide.md

## Figma IDs

- 388:3986

## Properties

- `collapsed`; attr: `collapsed`; type: `boolean`; default: `false` - Collapsed state
- `icon`; attr: `icon`; type: `string | undefined` - Optional icon to be displayed next to the header label
- `label`; attr: `label`; type: `string | undefined` - Label of blind
- `outline`; attr: `outline`; type: `boolean | undefined` - Show the blind with outline chrome. When omitted, outline chrome is used (`true`). When `false`, uses a filled surface. A non-base status shows a left status strip.
- `sublabel`; attr: `sublabel`; type: `string | undefined` - Secondary label inside blind header
- `variant`; attr: `variant`; type: `"accent" | "base" | "caution" | "critical" | "danger" | "information" | "neutral" | "success" | "warning"`; default: `'base'` - Blind status variant

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

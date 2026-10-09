# ix-pane-layout

> Layout container that arranges collapsible panes around a content area.

- Web component: `<ix-pane-layout>`
- React/Vue: `IxPaneLayout` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-pane-layout>` (`IxModule` from `@siemens/ix-angular` or `IxPaneLayout` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/panes/guide.md

## Figma IDs

- 19924:12291

## Properties

- `borderless`; attr: `borderless`; type: `boolean`; default: `false` - Set the default border state for all panes in the layout
- `layout`; attr: `layout`; type: `"full-horizontal" | "full-vertical"`; default: `'full-vertical'` - Choose the layout of the panes. When set to 'full-vertical' the vertical panes (left, right) will get the full height. When set to 'full-horizontal' the horizontal panes (top, bottom) will get the full width.
- `variant`; attr: `variant`; type: `"floating" | "inline"`; default: `'inline'` - Set the default variant for all panes in the layout

## Events

- None

## Methods

- None

## Slots

- `` - Main pane content.
- `bottom` - Content displayed in the bottom pane.
- `content` - Main pane content.
- `left` - Content displayed in the left pane.
- `right` - Content displayed in the right pane.
- `top` - Content displayed in the top pane.

## Dependencies

- Renders: None
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- pane-layout (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

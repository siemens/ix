# ix-pane

> Collapsible side panel docked to an edge of the layout.

- Web component: `<ix-pane>`
- React/Vue: `IxPane` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-pane>` (`IxModule` from `@siemens/ix-angular` or `IxPane` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/panes/guide.md

## Figma IDs

- 19924:12291

## Properties

- `ariaLabelCollapseCloseButton`; attr: `aria-label-collapse-close-button`; type: `string | undefined` - ARIA label close or collapse button
- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `borderless`; attr: `borderless`; type: `boolean`; default: `false` - Toggle the border of the pane. Defaults to the borderless attribute of the pane layout. If used standalone it defaults to false.
- `closeOnClickOutside`; attr: `close-on-click-outside`; type: `boolean`; default: `false` - If true, the pane will close when clicking outside of it
- `composition`; attr: `composition`; type: `"bottom" | "left" | "right" | "top"`; default: `'top'` - Defines the position of the pane inside it's container. Inside a pane layout this property will automatically be set to the name of slot the pane is assigned to.
- `expanded`; attr: `expanded`; type: `boolean`; default: `false` - State of the pane
- `heading`; attr: `heading`; type: `string | undefined` - Title of the side panel
- `hideOnCollapse`; attr: `hide-on-collapse`; type: `boolean`; default: `false` - Define if the pane should have a collapsed state
- `icon`; attr: `icon`; type: `string | undefined` - Name of the icon
- `noPadding`; attr: `no-padding`; type: `boolean`; default: `false` - Remove the padding of the content area. If set to `true` the left, right and bottom padding of the content area is removed.
- `size`; attr: `size`; type: `"240px" | "320px" | "33%" | "360px" | "480px" | "50%" | "600px"`; default: `'240px'` - The maximum size of the sidebar, when it is expanded
- `variant`; attr: `variant`; type: `"floating" | "inline"`; default: `'inline'` - Variant of the side pane. Defaults to the variant attribute of the pane layout. If used standalone it defaults to inline.

## Events

- `borderlessChanged` - This event is triggered when the variant of the pane is changed
- `expandedChanged` - This event is triggered when the pane either expands or contracts
- `variantChanged` - This event is triggered when the variant of the pane is changed

## Methods

- None

## Slots

- `` - Pane content.
- `header` - Additional slot for the header content

## Dependencies

- Renders: `ix-icon-button`, `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- pane (angular, angular-standalone, html, react, vue)
- pane-layout (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

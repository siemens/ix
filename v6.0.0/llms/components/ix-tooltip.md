# ix-tooltip

> Small overlay that shows contextual information when hovering or focusing an element.

- Web component: `<ix-tooltip>`
- React/Vue: `IxTooltip` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-tooltip>` (`IxModule` from `@siemens/ix-angular` or `IxTooltip` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/tooltip/guide.md

## Figma IDs

- 1239:30786

## Properties

- `for`; attr: `for`; type: `ElementReference[] | HTMLElement | Promise<HTMLElement> | string | undefined` - CSS selector for hover trigger element e.g. `for="[data-my-custom-select]"`
- `interactive`; attr: `interactive`; type: `boolean`; default: `false` - Define if the user can access the tooltip via mouse.
- `placement`; attr: `placement`; type: `"bottom" | "left" | "right" | "top"`; default: `'top'` - Initial placement of the tooltip. If the selected placement doesn't have enough space, the tooltip will be repositioned to another location.
- `titleContent`; attr: `title-content`; type: `string | undefined` - Title of the tooltip

## Events

- None

## Methods

- None

## Slots

- `` - Tooltip content.
- `title-content` - Content of tooltip title
- `title-icon` - Icon displayed next to the tooltip title. The icon will be displayed as 16x16px.

## Dependencies

- Renders: `ix-typography`
- Rendered by: `ix-avatar`, `ix-badge`, `ix-chip`, `ix-field-wrapper`, `ix-menu-avatar`, `ix-menu-item`, `ix-pill`, `ix-progress-indicator`, `ix-slider`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- tooltip (angular, angular-standalone, html, react, vue)
- tooltip-with-icon (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

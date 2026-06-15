# ix-tooltip

> No component summary available.

## Documentation

- None

## Figma IDs

- 1239:30786

## Related examples

- tooltip
- tooltip-with-icon

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `for`; attr: `for`; type: `ElementReference[] | HTMLElement | Promise<HTMLElement> | string | undefined` - CSS selector for hover trigger element e.g. `for="[data-my-custom-select]"`
- `interactive`; attr: `interactive`; type: `boolean`; default: `false` - Define if the user can access the tooltip via mouse.
- `placement`; attr: `placement`; type: `"bottom" | "left" | "right" | "top"`; default: `'top'` - Initial placement of the tooltip. If the selected placement doesn't have enough space, the tooltip will be repositioned to another location.
- `titleContent`; attr: `title-content`; type: `string | undefined` - Title of the tooltip

## Events

- None

## Slots

- `title-content` - Content of tooltip title
- `title-icon` - Icon displayed next to the tooltip title. The icon will be displayed as 16x16px.

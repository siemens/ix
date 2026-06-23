# ix-tooltip

> No component summary available.

## Documentation

- None

## Figma IDs

- 1239:30786

## Related examples

- tooltip
  - angular: [../../examples/angular-examples/src/preview-examples/tooltip.css](../../examples/angular-examples/src/preview-examples/tooltip.css), [../../examples/angular-examples/src/preview-examples/tooltip.html](../../examples/angular-examples/src/preview-examples/tooltip.html), [../../examples/angular-examples/src/preview-examples/tooltip.ts](../../examples/angular-examples/src/preview-examples/tooltip.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/tooltip.css](../../examples/angular-standalone-examples/src/preview-examples/tooltip.css), [../../examples/angular-standalone-examples/src/preview-examples/tooltip.html](../../examples/angular-standalone-examples/src/preview-examples/tooltip.html), [../../examples/angular-standalone-examples/src/preview-examples/tooltip.ts](../../examples/angular-standalone-examples/src/preview-examples/tooltip.ts)
  - html: [../../examples/html-examples/src/preview-examples/tooltip.css](../../examples/html-examples/src/preview-examples/tooltip.css), [../../examples/html-examples/src/preview-examples/tooltip.html](../../examples/html-examples/src/preview-examples/tooltip.html)
  - react: [../../examples/react-examples/src/preview-examples/tooltip.scoped.css](../../examples/react-examples/src/preview-examples/tooltip.scoped.css), [../../examples/react-examples/src/preview-examples/tooltip.tsx](../../examples/react-examples/src/preview-examples/tooltip.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/tooltip.css](../../examples/vue-examples/src/preview-examples/tooltip.css), [../../examples/vue-examples/src/preview-examples/tooltip.vue](../../examples/vue-examples/src/preview-examples/tooltip.vue)
- tooltip-with-icon
  - angular: [../../examples/angular-examples/src/preview-examples/tooltip-with-icon.html](../../examples/angular-examples/src/preview-examples/tooltip-with-icon.html), [../../examples/angular-examples/src/preview-examples/tooltip-with-icon.ts](../../examples/angular-examples/src/preview-examples/tooltip-with-icon.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/tooltip-with-icon.html](../../examples/angular-standalone-examples/src/preview-examples/tooltip-with-icon.html), [../../examples/angular-standalone-examples/src/preview-examples/tooltip-with-icon.ts](../../examples/angular-standalone-examples/src/preview-examples/tooltip-with-icon.ts)
  - html: [../../examples/html-examples/src/preview-examples/tooltip-with-icon.html](../../examples/html-examples/src/preview-examples/tooltip-with-icon.html)
  - react: [../../examples/react-examples/src/preview-examples/tooltip-with-icon.tsx](../../examples/react-examples/src/preview-examples/tooltip-with-icon.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/tooltip-with-icon.vue](../../examples/vue-examples/src/preview-examples/tooltip-with-icon.vue)

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

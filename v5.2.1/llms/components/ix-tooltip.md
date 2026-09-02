# ix-tooltip

> Small overlay that shows contextual information when hovering or focusing an element.

## Documentation

- None

## Figma IDs

- 1239:30786

## Related examples

Example file links are relative to this Markdown file.

- tooltip
  - angular:
    - `angular/tooltip.css`: [file](../../examples/angular/tooltip.css)
    - `angular/tooltip.html`: [file](../../examples/angular/tooltip.html)
    - `angular/tooltip.ts`: [file](../../examples/angular/tooltip.ts)
  - angular-standalone:
    - `angular-standalone/tooltip.css`: [file](../../examples/angular-standalone/tooltip.css)
    - `angular-standalone/tooltip.html`: [file](../../examples/angular-standalone/tooltip.html)
    - `angular-standalone/tooltip.ts`: [file](../../examples/angular-standalone/tooltip.ts)
  - html:
    - `html/tooltip.css`: [file](../../examples/html/tooltip.css)
    - `html/tooltip.html`: [file](../../examples/html/tooltip.html)
  - react:
    - `react/tooltip.scoped.css`: [file](../../examples/react/tooltip.scoped.css)
    - `react/tooltip.tsx`: [file](../../examples/react/tooltip.tsx)
  - vue:
    - `vue/tooltip.css`: [file](../../examples/vue/tooltip.css)
    - `vue/tooltip.vue`: [file](../../examples/vue/tooltip.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `for`; attr: `for`; type: `ElementReference[] | HTMLElement | Promise<HTMLElement> | string | undefined` - CSS selector for hover trigger element e.g. `for="[data-my-custom-select]"`
- `interactive`; attr: `interactive`; type: `boolean`; default: `false` - Define if the user can access the tooltip via mouse.
- `placement`; attr: `placement`; type: `"bottom" | "left" | "right" | "top"`; default: `'top'` - Initial placement of the tooltip. If the selected placement doesn't have enough space, the tooltip will be repositioned to another location.
- `titleContent`; attr: `title-content`; type: `string | undefined` - Title of the tooltip

## Events

- None

## Slots

- `` - Tooltip content.
- `title-content` - Content of tooltip title
- `title-icon` - Icon displayed next to the tooltip title. The icon will be displayed as 16x16px.

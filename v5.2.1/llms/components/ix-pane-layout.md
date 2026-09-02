# ix-pane-layout

> Layout container that arranges collapsible panes around a content area.

## Documentation

- https://ix.siemens.io//docs/components/panes/guide.md

## Figma IDs

- 19924:12291

## Related examples

Example file links are relative to this Markdown file.

- pane-layout
  - angular:
    - `angular/pane-layout.html`: [file](../../examples/angular/pane-layout.html)
    - `angular/pane-layout.ts`: [file](../../examples/angular/pane-layout.ts)
  - angular-standalone:
    - `angular-standalone/pane-layout.html`: [file](../../examples/angular-standalone/pane-layout.html)
    - `angular-standalone/pane-layout.ts`: [file](../../examples/angular-standalone/pane-layout.ts)
  - html:
    - `html/pane-layout.html`: [file](../../examples/html/pane-layout.html)
  - react:
    - `react/pane-layout.tsx`: [file](../../examples/react/pane-layout.tsx)
  - vue:
    - `vue/pane-layout.vue`: [file](../../examples/vue/pane-layout.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `borderless`; attr: `borderless`; type: `boolean`; default: `false` - Set the default border state for all panes in the layout
- `layout`; attr: `layout`; type: `"full-horizontal" | "full-vertical"`; default: `'full-vertical'` - Choose the layout of the panes. When set to 'full-vertical' the vertical panes (left, right) will get the full height. When set to 'full-horizontal' the horizontal panes (top, bottom) will get the full width.
- `variant`; attr: `variant`; type: `"floating" | "inline"`; default: `'inline'` - Set the default variant for all panes in the layout

## Events

- None

## Slots

- `` - Main pane content.
- `bottom` - Content displayed in the bottom pane.
- `content` - Main pane content.
- `left` - Content displayed in the left pane.
- `right` - Content displayed in the right pane.
- `top` - Content displayed in the top pane.

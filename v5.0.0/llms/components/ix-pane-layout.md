# ix-pane-layout

> Layout container that arranges collapsible panes around a content area.

## Documentation

- https://ix.siemens.io//docs/components/panes/guide.md

## Figma IDs

- 19924:12291

## Related examples

Example source links are relative to this Markdown file.

- pane-layout
  - angular:
    - `angular/pane-layout.html`: [source](../../examples/angular-examples/src/preview-examples/pane-layout.html)
    - `angular/pane-layout.ts`: [source](../../examples/angular-examples/src/preview-examples/pane-layout.ts)
  - angular-standalone:
    - `angular-standalone/pane-layout.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/pane-layout.html)
    - `angular-standalone/pane-layout.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/pane-layout.ts)
  - html:
    - `html/pane-layout.html`: [source](../../examples/html-examples/src/preview-examples/pane-layout.html)
  - react:
    - `react/pane-layout.tsx`: [source](../../examples/react-examples/src/preview-examples/pane-layout.tsx)
  - vue:
    - `vue/pane-layout.vue`: [source](../../examples/vue-examples/src/preview-examples/pane-layout.vue)

## Related blocks

- unavailable (not present in registry JSON)

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

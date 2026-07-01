# ix-breadcrumb

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/breadcrumb/guide.md

## Figma IDs

- 1603:54616

## Related examples

Example source links are relative to this Markdown file.

- breadcrumb
  - angular:
    - `angular/breadcrumb.ts`: [source](../../examples/angular-examples/src/preview-examples/breadcrumb.ts)
  - angular-standalone:
    - `angular-standalone/breadcrumb.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/breadcrumb.ts)
  - html:
    - `html/breadcrumb.html`: [source](../../examples/html-examples/src/preview-examples/breadcrumb.html)
  - react:
    - `react/breadcrumb.tsx`: [source](../../examples/react-examples/src/preview-examples/breadcrumb.tsx)
  - vue:
    - `vue/breadcrumb.vue`: [source](../../examples/vue-examples/src/preview-examples/breadcrumb.vue)
- breadcrumb-next-items
  - angular:
    - `angular/breadcrumb-next-items.ts`: [source](../../examples/angular-examples/src/preview-examples/breadcrumb-next-items.ts)
  - angular-standalone:
    - `angular-standalone/breadcrumb-next-items.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/breadcrumb-next-items.ts)
  - html:
    - `html/breadcrumb-next-items.html`: [source](../../examples/html-examples/src/preview-examples/breadcrumb-next-items.html)
  - react:
    - `react/breadcrumb-next-items.tsx`: [source](../../examples/react-examples/src/preview-examples/breadcrumb-next-items.tsx)
  - vue:
    - `vue/breadcrumb-next-items.vue`: [source](../../examples/vue-examples/src/preview-examples/breadcrumb-next-items.vue)
- breadcrumb-truncate
  - angular:
    - `angular/breadcrumb-truncate.ts`: [source](../../examples/angular-examples/src/preview-examples/breadcrumb-truncate.ts)
  - angular-standalone:
    - `angular-standalone/breadcrumb-truncate.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/breadcrumb-truncate.ts)
  - html:
    - `html/breadcrumb-truncate.html`: [source](../../examples/html-examples/src/preview-examples/breadcrumb-truncate.html)
  - react:
    - `react/breadcrumb-truncate.tsx`: [source](../../examples/react-examples/src/preview-examples/breadcrumb-truncate.tsx)
  - vue:
    - `vue/breadcrumb-truncate.vue`: [source](../../examples/vue-examples/src/preview-examples/breadcrumb-truncate.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelPreviousButton`; attr: `aria-label-previous-button`; type: `string`; default: `'Show previous breadcrumb items'` - Accessibility label for the dropdown button (ellipsis icon) used to access the dropdown list with conditionally hidden previous items
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `nextItems`; type: `BreadcrumbClick[]`; default: `[]` - Items will be accessible through a dropdown
- `subtle`; attr: `subtle`; type: `boolean`; default: `false` - Ghost breadcrumbs will not show solid backgrounds on individual crumbs unless there is a mouse event (e.g. hover)
- `visibleItemCount`; attr: `visible-item-count`; type: `number`; default: `9` - Excess items will get hidden inside of dropdown

## Events

- `itemClick` - Crumb item clicked event
- `nextClick` - Next item clicked event

## Slots

- None

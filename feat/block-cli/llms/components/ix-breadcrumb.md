# ix-breadcrumb

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/breadcrumb/guide.md

## Figma IDs

- 1603:54616

## Related examples

- breadcrumb
  - angular: [../../examples/angular-examples/src/preview-examples/breadcrumb.ts](../../examples/angular-examples/src/preview-examples/breadcrumb.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/breadcrumb.ts](../../examples/angular-standalone-examples/src/preview-examples/breadcrumb.ts)
  - html: [../../examples/html-examples/src/preview-examples/breadcrumb.html](../../examples/html-examples/src/preview-examples/breadcrumb.html)
  - react: [../../examples/react-examples/src/preview-examples/breadcrumb.tsx](../../examples/react-examples/src/preview-examples/breadcrumb.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/breadcrumb.vue](../../examples/vue-examples/src/preview-examples/breadcrumb.vue)
- breadcrumb-next-items
  - angular: [../../examples/angular-examples/src/preview-examples/breadcrumb-next-items.ts](../../examples/angular-examples/src/preview-examples/breadcrumb-next-items.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/breadcrumb-next-items.ts](../../examples/angular-standalone-examples/src/preview-examples/breadcrumb-next-items.ts)
  - html: [../../examples/html-examples/src/preview-examples/breadcrumb-next-items.html](../../examples/html-examples/src/preview-examples/breadcrumb-next-items.html)
  - react: [../../examples/react-examples/src/preview-examples/breadcrumb-next-items.tsx](../../examples/react-examples/src/preview-examples/breadcrumb-next-items.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/breadcrumb-next-items.vue](../../examples/vue-examples/src/preview-examples/breadcrumb-next-items.vue)
- breadcrumb-truncate
  - angular: [../../examples/angular-examples/src/preview-examples/breadcrumb-truncate.ts](../../examples/angular-examples/src/preview-examples/breadcrumb-truncate.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/breadcrumb-truncate.ts](../../examples/angular-standalone-examples/src/preview-examples/breadcrumb-truncate.ts)
  - html: [../../examples/html-examples/src/preview-examples/breadcrumb-truncate.html](../../examples/html-examples/src/preview-examples/breadcrumb-truncate.html)
  - react: [../../examples/react-examples/src/preview-examples/breadcrumb-truncate.tsx](../../examples/react-examples/src/preview-examples/breadcrumb-truncate.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/breadcrumb-truncate.vue](../../examples/vue-examples/src/preview-examples/breadcrumb-truncate.vue)

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

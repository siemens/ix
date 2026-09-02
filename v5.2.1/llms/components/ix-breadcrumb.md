# ix-breadcrumb

> Navigation trail that shows the user's location within a hierarchy.

## Documentation

- https://ix.siemens.io//docs/components/breadcrumb/guide.md

## Figma IDs

- 1603:54616

## Related examples

Example file links are relative to this Markdown file.

- breadcrumb
  - angular:
    - `angular/breadcrumb.ts`: [file](../../examples/angular/breadcrumb.ts)
  - angular-standalone:
    - `angular-standalone/breadcrumb.ts`: [file](../../examples/angular-standalone/breadcrumb.ts)
  - html:
    - `html/breadcrumb.html`: [file](../../examples/html/breadcrumb.html)
  - react:
    - `react/breadcrumb.tsx`: [file](../../examples/react/breadcrumb.tsx)
  - vue:
    - `vue/breadcrumb.vue`: [file](../../examples/vue/breadcrumb.vue)
- breadcrumb-next-items
  - angular:
    - `angular/breadcrumb-next-items.ts`: [file](../../examples/angular/breadcrumb-next-items.ts)
  - angular-standalone:
    - `angular-standalone/breadcrumb-next-items.ts`: [file](../../examples/angular-standalone/breadcrumb-next-items.ts)
  - html:
    - `html/breadcrumb-next-items.html`: [file](../../examples/html/breadcrumb-next-items.html)
  - react:
    - `react/breadcrumb-next-items.tsx`: [file](../../examples/react/breadcrumb-next-items.tsx)
  - vue:
    - `vue/breadcrumb-next-items.vue`: [file](../../examples/vue/breadcrumb-next-items.vue)
- breadcrumb-truncate
  - angular:
    - `angular/breadcrumb-truncate.ts`: [file](../../examples/angular/breadcrumb-truncate.ts)
  - angular-standalone:
    - `angular-standalone/breadcrumb-truncate.ts`: [file](../../examples/angular-standalone/breadcrumb-truncate.ts)
  - html:
    - `html/breadcrumb-truncate.html`: [file](../../examples/html/breadcrumb-truncate.html)
  - react:
    - `react/breadcrumb-truncate.tsx`: [file](../../examples/react/breadcrumb-truncate.tsx)
  - vue:
    - `vue/breadcrumb-truncate.vue`: [file](../../examples/vue/breadcrumb-truncate.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

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

- `` - Breadcrumb items.

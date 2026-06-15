# ix-breadcrumb

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/breadcrumb/guide.md

## Figma IDs

- 1603:54616

## Related examples

- breadcrumb
- breadcrumb-next-items
- breadcrumb-truncate

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

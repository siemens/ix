# ix-breadcrumb

> Navigation trail that shows the user's location within a hierarchy.

- Web component: `<ix-breadcrumb>`
- React/Vue: `IxBreadcrumb` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-breadcrumb>` (`IxModule` from `@siemens/ix-angular` or `IxBreadcrumb` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/breadcrumb/guide.md

## Figma IDs

- 1603:54616

## Properties

- `ariaLabelNextButton`; attr: `aria-label-next-button`; type: `string`; default: `'Show next breadcrumb items'` - Accessible label for the next items dropdown button used to access the dropdown list with conditionally hidden next items
- `ariaLabelPreviousButton`; attr: `aria-label-previous-button`; type: `string`; default: `'Show previous breadcrumb items'` - Accessibility label for the dropdown button (ellipsis icon) used to access the dropdown list with conditionally hidden previous items
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `nextItems`; type: `BreadcrumbClick[]`; default: `[]` - Items will be accessible through a dropdown
- `subtle`; attr: `subtle`; type: `boolean`; default: `false` - Ghost breadcrumbs will not show solid backgrounds on individual crumbs unless there is a mouse event (e.g. hover)
- `visibleItemCount`; attr: `visible-item-count`; type: `number`; default: `9` - Excess items will get hidden inside of dropdown

## Events

- `itemClick` - Crumb item clicked event
- `nextClick` - Next item clicked event

## Methods

- None

## Slots

- `` - Breadcrumb items.

## Dependencies

- Renders: `ix-dropdown-button`, `ix-dropdown-item`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- breadcrumb (angular, angular-standalone, html, react, vue)
- breadcrumb-next-items (angular, angular-standalone, html, react, vue)
- breadcrumb-truncate (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

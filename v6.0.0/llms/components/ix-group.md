# ix-group

> Collapsible list group with a selectable header and nested items.

- Web component: `<ix-group>`
- React/Vue: `IxGroup` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-group>` (`IxModule` from `@siemens/ix-angular` or `IxGroup` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/group/code.md

## Figma IDs

- 1274:38298

## Properties

- `ariaLabelExpand`; attr: `aria-label-expand`; type: `string | undefined` - ARIA label for the expand disclosure button. Falls back to **header** when unset. Expanded/collapsed state comes from **aria-expanded**.
- `ariaLabelSelect`; attr: `aria-label-select`; type: `string | undefined` - ARIA label for the header select button. Falls back to **header** when unset.
- `expanded`; attr: `expanded`; type: `boolean`; default: `false` - Whether the group is expanded or collapsed. Defaults to false.
- `expandOnHeaderClick`; attr: `expand-on-header-click`; type: `boolean`; default: `false` - Expand the group if the header is clicked
- `header`; attr: `header`; type: `string | undefined` - Group header
- `index`; attr: `index`; type: `number | undefined` - The index of the selected group entry. If undefined no group item is selected.
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Whether the group is selected.
- `subHeader`; attr: `sub-header`; type: `string | undefined` - Group header subtitle
- `suppressHeaderSelection`; attr: `suppress-header-selection`; type: `boolean`; default: `false` - Prevent header from being selectable

## Events

- `expandedChanged` - Group expanded
- `selectGroup` - Emits when whole group gets selected.
- `selectItem` - Emits when group item gets selected.

## Methods

- None

## Slots

- `` - Group content.
- `dropdown` - Dropdown content displayed in the group header.
- `footer` - Footer content.
- `header` - Additional header content.

## Dependencies

- Renders: `ix-group-context-menu`, `ix-group-item`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- group (angular, angular-standalone, html, react, vue)
- group-context-menu (angular, angular-standalone, html, react, vue)
- group-custom-entry (angular, angular-standalone, html, react, vue)
- group-header-suppressed (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

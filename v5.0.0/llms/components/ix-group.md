# ix-group

> No component summary available.

## Documentation

- None

## Figma IDs

- 1274:38298

## Related examples

- group
- group-context-menu
- group-custom-entry
- group-header-suppressed

## Related blocks

- unavailable (not present in registry JSON)

## Properties

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

## Slots

- None

# ix-group

> No component summary available.

## Documentation

- None

## Figma IDs

- 1274:38298

## Related examples

- group
  - angular: [../../examples/angular-examples/src/preview-examples/group.ts](../../examples/angular-examples/src/preview-examples/group.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/group.ts](../../examples/angular-standalone-examples/src/preview-examples/group.ts)
  - html: [../../examples/html-examples/src/preview-examples/group.html](../../examples/html-examples/src/preview-examples/group.html)
  - react: [../../examples/react-examples/src/preview-examples/group.tsx](../../examples/react-examples/src/preview-examples/group.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/group.vue](../../examples/vue-examples/src/preview-examples/group.vue)
- group-context-menu
  - angular: [../../examples/angular-examples/src/preview-examples/group-context-menu.ts](../../examples/angular-examples/src/preview-examples/group-context-menu.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/group-context-menu.ts](../../examples/angular-standalone-examples/src/preview-examples/group-context-menu.ts)
  - html: [../../examples/html-examples/src/preview-examples/group-context-menu.html](../../examples/html-examples/src/preview-examples/group-context-menu.html)
  - react: [../../examples/react-examples/src/preview-examples/group-context-menu.tsx](../../examples/react-examples/src/preview-examples/group-context-menu.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/group-context-menu.vue](../../examples/vue-examples/src/preview-examples/group-context-menu.vue)
- group-custom-entry
  - angular: [../../examples/angular-examples/src/preview-examples/group-custom-entry.ts](../../examples/angular-examples/src/preview-examples/group-custom-entry.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/group-custom-entry.ts](../../examples/angular-standalone-examples/src/preview-examples/group-custom-entry.ts)
  - html: [../../examples/html-examples/src/preview-examples/group-custom-entry.html](../../examples/html-examples/src/preview-examples/group-custom-entry.html)
  - react: [../../examples/react-examples/src/preview-examples/group-custom-entry.tsx](../../examples/react-examples/src/preview-examples/group-custom-entry.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/group-custom-entry.vue](../../examples/vue-examples/src/preview-examples/group-custom-entry.vue)
- group-header-suppressed
  - angular: [../../examples/angular-examples/src/preview-examples/group-header-suppressed.ts](../../examples/angular-examples/src/preview-examples/group-header-suppressed.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/group-header-suppressed.ts](../../examples/angular-standalone-examples/src/preview-examples/group-header-suppressed.ts)
  - html: [../../examples/html-examples/src/preview-examples/group-header-suppressed.html](../../examples/html-examples/src/preview-examples/group-header-suppressed.html)
  - react: [../../examples/react-examples/src/preview-examples/group-header-suppressed.tsx](../../examples/react-examples/src/preview-examples/group-header-suppressed.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/group-header-suppressed.vue](../../examples/vue-examples/src/preview-examples/group-header-suppressed.vue)

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

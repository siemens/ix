# ix-group

> Collapsible list group with a selectable header and nested items.

## Documentation

- None

## Figma IDs

- 1274:38298

## Related examples

Example source links are relative to this Markdown file.

- group
  - angular:
    - `angular/group.ts`: [source](../../examples/angular-examples/src/preview-examples/group.ts)
  - angular-standalone:
    - `angular-standalone/group.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/group.ts)
  - html:
    - `html/group.html`: [source](../../examples/html-examples/src/preview-examples/group.html)
  - react:
    - `react/group.tsx`: [source](../../examples/react-examples/src/preview-examples/group.tsx)
  - vue:
    - `vue/group.vue`: [source](../../examples/vue-examples/src/preview-examples/group.vue)
- group-context-menu
  - angular:
    - `angular/group-context-menu.ts`: [source](../../examples/angular-examples/src/preview-examples/group-context-menu.ts)
  - angular-standalone:
    - `angular-standalone/group-context-menu.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/group-context-menu.ts)
  - html:
    - `html/group-context-menu.html`: [source](../../examples/html-examples/src/preview-examples/group-context-menu.html)
  - react:
    - `react/group-context-menu.tsx`: [source](../../examples/react-examples/src/preview-examples/group-context-menu.tsx)
  - vue:
    - `vue/group-context-menu.vue`: [source](../../examples/vue-examples/src/preview-examples/group-context-menu.vue)
- group-custom-entry
  - angular:
    - `angular/group-custom-entry.ts`: [source](../../examples/angular-examples/src/preview-examples/group-custom-entry.ts)
  - angular-standalone:
    - `angular-standalone/group-custom-entry.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/group-custom-entry.ts)
  - html:
    - `html/group-custom-entry.html`: [source](../../examples/html-examples/src/preview-examples/group-custom-entry.html)
  - react:
    - `react/group-custom-entry.tsx`: [source](../../examples/react-examples/src/preview-examples/group-custom-entry.tsx)
  - vue:
    - `vue/group-custom-entry.vue`: [source](../../examples/vue-examples/src/preview-examples/group-custom-entry.vue)
- group-header-suppressed
  - angular:
    - `angular/group-header-suppressed.ts`: [source](../../examples/angular-examples/src/preview-examples/group-header-suppressed.ts)
  - angular-standalone:
    - `angular-standalone/group-header-suppressed.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/group-header-suppressed.ts)
  - html:
    - `html/group-header-suppressed.html`: [source](../../examples/html-examples/src/preview-examples/group-header-suppressed.html)
  - react:
    - `react/group-header-suppressed.tsx`: [source](../../examples/react-examples/src/preview-examples/group-header-suppressed.tsx)
  - vue:
    - `vue/group-header-suppressed.vue`: [source](../../examples/vue-examples/src/preview-examples/group-header-suppressed.vue)

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

- `` - Group content.
- `dropdown` - Dropdown content displayed in the group header.
- `footer` - Footer content.
- `header` - Additional header content.

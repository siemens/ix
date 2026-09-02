# ix-group

> Collapsible list group with a selectable header and nested items.

## Documentation

- None

## Figma IDs

- 1274:38298

## Related examples

Example file links are relative to this Markdown file.

- group
  - angular:
    - `angular/group.ts`: [file](../../examples/angular/group.ts)
  - angular-standalone:
    - `angular-standalone/group.ts`: [file](../../examples/angular-standalone/group.ts)
  - html:
    - `html/group.html`: [file](../../examples/html/group.html)
  - react:
    - `react/group.tsx`: [file](../../examples/react/group.tsx)
  - vue:
    - `vue/group.vue`: [file](../../examples/vue/group.vue)
- group-context-menu
  - angular:
    - `angular/group-context-menu.ts`: [file](../../examples/angular/group-context-menu.ts)
  - angular-standalone:
    - `angular-standalone/group-context-menu.ts`: [file](../../examples/angular-standalone/group-context-menu.ts)
  - html:
    - `html/group-context-menu.html`: [file](../../examples/html/group-context-menu.html)
  - react:
    - `react/group-context-menu.tsx`: [file](../../examples/react/group-context-menu.tsx)
  - vue:
    - `vue/group-context-menu.vue`: [file](../../examples/vue/group-context-menu.vue)
- group-custom-entry
  - angular:
    - `angular/group-custom-entry.ts`: [file](../../examples/angular/group-custom-entry.ts)
  - angular-standalone:
    - `angular-standalone/group-custom-entry.ts`: [file](../../examples/angular-standalone/group-custom-entry.ts)
  - html:
    - `html/group-custom-entry.html`: [file](../../examples/html/group-custom-entry.html)
  - react:
    - `react/group-custom-entry.tsx`: [file](../../examples/react/group-custom-entry.tsx)
  - vue:
    - `vue/group-custom-entry.vue`: [file](../../examples/vue/group-custom-entry.vue)
- group-header-suppressed
  - angular:
    - `angular/group-header-suppressed.ts`: [file](../../examples/angular/group-header-suppressed.ts)
  - angular-standalone:
    - `angular-standalone/group-header-suppressed.ts`: [file](../../examples/angular-standalone/group-header-suppressed.ts)
  - html:
    - `html/group-header-suppressed.html`: [file](../../examples/html/group-header-suppressed.html)
  - react:
    - `react/group-header-suppressed.tsx`: [file](../../examples/react/group-header-suppressed.tsx)
  - vue:
    - `vue/group-header-suppressed.vue`: [file](../../examples/vue/group-header-suppressed.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

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

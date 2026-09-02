# ix-group-item

> A single selectable item within a group.

## Documentation

- None

## Figma IDs

- 1274:34186

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

- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable the group item. The elements tabindex attribute will get set accordingly. If false tabindex will be 0, -1 otherwise.
- `icon`; attr: `icon`; type: `string | undefined` - Group item icon
- `index`; attr: `index`; type: `number | undefined` - Index
- `secondaryText`; attr: `secondary-text`; type: `string | undefined` - Group item secondary text
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Show selected state
- `suppressSelection`; attr: `suppress-selection`; type: `boolean`; default: `false` - Supress the selection of the group
- `text`; attr: `text`; type: `string | undefined` - Group item text

## Events

- `selectedChanged` - Selection changed

## Slots

- `` - Group item content.

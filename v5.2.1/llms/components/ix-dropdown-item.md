# ix-dropdown-item

> Selectable entry within a dropdown menu.

## Documentation

- https://ix.siemens.io//docs/components/dropdown-button/guide.md

## Figma IDs

- 1603:52792

## Related examples

Example file links are relative to this Markdown file.

- dropdown
  - angular:
    - `angular/dropdown.ts`: [file](../../examples/angular/dropdown.ts)
  - angular-standalone:
    - `angular-standalone/dropdown.ts`: [file](../../examples/angular-standalone/dropdown.ts)
  - html:
    - `html/dropdown.html`: [file](../../examples/html/dropdown.html)
  - react:
    - `react/dropdown.tsx`: [file](../../examples/react/dropdown.tsx)
  - vue:
    - `vue/dropdown.vue`: [file](../../examples/vue/dropdown.vue)
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

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `ariaLabelButton`; attr: `aria-label-button`; type: `string | undefined` - ARIA label for the item's button Will be set as aria-label for the nested HTML button element
- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `checked`; attr: `checked`; type: `boolean`; default: `false` - Whether the item is checked or not. If true a checkmark will mark the item as checked.
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable item and remove event listeners
- `hover`; attr: `hover`; type: `boolean`; default: `false` - Display hover state
- `icon`; attr: `icon`; type: `string | undefined` - Icon of dropdown item
- `itemRole`; attr: `item-role`; type: `"menuitem" | "option"`; default: `'menuitem'` - Role of the host surface. Use `option` when the item represents a listbox option (e.g. inside select); use `menuitem` in menus.
- `label`; attr: `label`; type: `string | undefined` - Label of dropdown item

## Events

- None

## Slots

- `` - Dropdown item label.

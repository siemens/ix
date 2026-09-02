# ix-dropdown-button

> Button that opens an attached dropdown menu.

## Documentation

- https://ix.siemens.io//docs/components/dropdown-button/guide.md

## Figma IDs

- 294:1198

## Related examples

Example file links are relative to this Markdown file.

- None

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `ariaLabelDropdownButton`; attr: `aria-label-dropdown-button`; type: `string | undefined` - ARIA label for the dropdown button Will be set as aria-label on the nested HTML button element
- `closeBehavior`; attr: `close-behavior`; type: `"both" | "inside" | "outside" | boolean`; default: `'both'` - Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable button
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `focusCheckedItem`; attr: `focus-checked-item`; type: `boolean`; default: `false` - If true, the dropdown will try to focus checked items first when opened via keyboard, otherwise it will always focus the first focusable item.
- `icon`; attr: `icon`; type: `string | undefined` - Button icon
- `label`; attr: `label`; type: `null | string | undefined` - Set label
- `placement`; attr: `placement`; type: `"bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start" | undefined` - Placement of the dropdown
- `variant`; attr: `variant`; type: `"danger-primary" | "danger-secondary" | "danger-tertiary" | "primary" | "secondary" | "subtle-primary" | "subtle-secondary" | "subtle-tertiary" | "tertiary"`; default: `'primary'` - Button variant

## Events

- `showChange` - Fire event before visibility of dropdown has changed, preventing event will cancel showing dropdown
- `showChanged` - Fire event after visibility of dropdown has changed

## Slots

- `` - Dropdown content.
- `button-label` - Custom button label.

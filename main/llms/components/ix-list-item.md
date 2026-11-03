# ix-list-item

> No component summary available.

- Web component: `<ix-list-item>`
- React: `IxListItem` from `@siemens/ix-react`
- Vue: `IxListItem` from `@siemens/ix-vue`

## Documentation

- None

## Figma IDs

- None

## Properties

- `actionOnHover`; attr: `action-on-hover`; type: `boolean`; default: `false` - Show action slot content only when the item is hovered or focused.
- `actionSlotAlignment`; attr: `action-slot-alignment`; type: `"center" | "start"`; default: `'center'` - Vertical alignment of the action slot content.
- `active`; attr: `active`; type: `boolean`; default: `false` - Enable activation of the primary item surface.
- `ariaLabelCheckbox`; attr: `aria-label-checkbox`; type: `string`; default: `'Select list item'` - Accessible label for the selection checkbox.
- `ariaLabelDragGripper`; attr: `aria-label-drag-gripper`; type: `string`; default: `'Reorder list item'` - Accessible label for the drag gripper.
- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - Accessible label for the item icon.
- `checkbox`; attr: `checkbox`; type: `boolean`; default: `false` - Display selection with checkbox semantics.
- `description`; attr: `description`; type: `string | undefined` - Supporting text displayed below the label.
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable item activation and action controls.
- `divider`; attr: `divider`; type: `boolean`; default: `false` - Display a divider below this item when its variant is `ghost`.
- `icon`; attr: `icon`; type: `string | undefined` - Icon displayed by the standard item layout.
- `label`; attr: `label`; type: `string | undefined` - Label displayed by the standard item layout.
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Show the item as selected.
- `variant`; attr: `variant`; type: `"filled" | "ghost" | "outline"`; default: `'filled'` - Visual variant of the item.

## Events

- `itemClick` - Emitted when the primary item surface is activated.
- `selectedChange` - Requests a controlled selection update when a checkbox item is activated.

## Methods

- None

## Slots

- `` - Non-interactive custom content rendered after the standard icon, label, and description layout.
- `action` - Interactive trailing controls that do not activate the item.

## Dependencies

- Renders: `ix-checkbox`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- generic-list-action-on-hover (angular, angular-standalone, html, react, vue)
- generic-list-additional-options (angular, angular-standalone, html, react, vue)
- generic-list-basic (angular, angular-standalone, html, react, vue)
- generic-list-custom-content (angular, angular-standalone, html, react, vue)
- generic-list-draggable (angular, angular-standalone, html, react, vue)
- generic-list-notification-icon (angular, angular-standalone, html, react, vue)
- generic-list-users (angular, angular-standalone, html, react, vue)
- generic-list-variants (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

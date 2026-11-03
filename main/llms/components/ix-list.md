# ix-list

> No component summary available.

- Web component: `<ix-list>`
- React: `IxList` from `@siemens/ix-react`
- Vue: `IxList` from `@siemens/ix-vue`

## Documentation

- None

## Figma IDs

- None

## Properties

- `actionOnHover`; attr: `action-on-hover`; type: `boolean | undefined` - Show action content on hover or focus for list items that do not define their own setting.
- `actionSlotAlignment`; attr: `action-slot-alignment`; type: `"center" | "start" | undefined` - Default action slot alignment for list items that do not define their own setting.
- `active`; attr: `active`; type: `boolean | undefined` - Enable activation for list items that do not define their own setting.
- `checkbox`; attr: `checkbox`; type: `boolean | undefined` - Display selection checkboxes on list items that do not define their own setting.
- `disabled`; attr: `disabled`; type: `boolean | undefined` - Default disabled state for list items that do not define their own state.
- `divider`; attr: `divider`; type: `boolean`; default: `false` - Display dividers between direct list items with the `ghost` variant.
- `dragBehavior`; attr: `drag-behavior`; type: `"dynamic" | "separator"`; default: `'dynamic'` - Visual behavior used while dragging a list item.
- `draggable`; attr: `draggable`; type: `boolean`; default: `false` - Enable drag-and-drop reordering of direct list items.
- `i18nListItem`; attr: `i18n-list-item`; type: `string`; default: `'List item'` - i18n fallback label for list items without a label.
- `i18nReorderCancelled`; attr: `i18n-reorder-cancelled`; type: `string`; default: `'{item} reorder cancelled.'` - i18n announcement when list item reordering is cancelled. Use `{item}` for the item label.
- `i18nReorderDropped`; attr: `i18n-reorder-dropped`; type: `string`; default: `'{item} dropped at position {position} of {total}.'` - i18n announcement when a reordered list item is dropped. Use `{item}`, `{position}`, and `{total}` placeholders.
- `i18nReorderLifted`; attr: `i18n-reorder-lifted`; type: `string`; default: `'{item} lifted. Use arrow keys to move, Enter or Space to drop, and Escape to cancel.'` - i18n announcement when a list item is lifted for reordering. Use `{item}` for the item label.
- `i18nReorderPosition`; attr: `i18n-reorder-position`; type: `string`; default: `'{item}, position {position} of {total}'` - i18n announcement when a list item changes position. Use `{item}`, `{position}`, and `{total}` placeholders.
- `itemGap`; attr: `item-gap`; type: `"lg" | "md" | "none" | "sm"`; default: `'sm'` - Space between direct list items.
- `variant`; attr: `variant`; type: `"filled" | "ghost" | "outline" | undefined` - Default visual variant for list items that do not define their own variant.

## Events

- `itemOrderChange` - Emitted after a list item has been reordered.

## Methods

- None

## Slots

- `` - List items and optional group separators.

## Dependencies

- Renders: None
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

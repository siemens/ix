# ix-dropdown

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/dropdown/guide.md

## Figma IDs

- 1233:32649

## Related examples

- blind-header-actions
- dropdown
- dropdown-icon
- dropdown-quick-actions
- dropdown-submenu
- group-context-menu

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `anchor`; attr: `anchor`; type: `HTMLElement | Promise<HTMLElement> | string | undefined` - Define an anchor element
- `closeBehavior`; attr: `close-behavior`; type: `"both" | "inside" | "outside" | boolean`; default: `'both'` - Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown. If the dropdown is a child of another one, it will be closed with the parent, regardless of its own close behavior.
- `disableFocusHandling`; attr: `disable-focus-handling`; type: `boolean`; default: `false` - Suppress automatic focus when the dropdown is shown
- `disableFocusTrap`; attr: `disable-focus-trap`; type: `boolean`; default: `false` - Close dropdown when tabbing away, and do not trap focus inside dropdown
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for top-layer positioning.
- `focusCheckedItem`; attr: `focus-checked-item`; type: `boolean`; default: `false` - If true, the dropdown will try to focus checked items first when opened via keyboard, otherwise it will always focus the first focusable item.
- `header`; attr: `header`; type: `string | undefined` - An optional header shown at the top of the dropdown
- `placement`; attr: `placement`; type: `"bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start"`; default: `'bottom-start'` - Placement of the dropdown
- `positioningStrategy`; attr: `positioning-strategy`; type: `"absolute" | "fixed"`; default: `'fixed'` - Position strategy
- `show`; attr: `show`; type: `boolean`; default: `false` - Show dropdown
- `suppressAutomaticPlacement`; attr: `suppress-automatic-placement`; type: `boolean`; default: `false` - Suppress the automatic placement of the dropdown.
- `suppressTriggerVisibilityCheck`; attr: `suppress-trigger-visibility-check`; type: `boolean`; default: `false` - By default the dropdown gets closed if the trigger is not visible anymore (e.g. due to scrolling). Setting this property prevents that behavior.
- `trigger`; attr: `trigger`; type: `HTMLElement | Promise<HTMLElement> | string | undefined` - Define an element that triggers the dropdown. A trigger can either be a string that will be interpreted as id attribute or a DOM element.

## Events

- `showChange` - Fire event before visibility of dropdown has changed, preventing event will cancel showing dropdown
- `showChanged` - Fire event after visibility of dropdown has changed

## Slots

- None

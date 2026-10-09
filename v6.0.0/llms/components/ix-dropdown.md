# ix-dropdown

> Floating overlay that displays a list of options or actions anchored to a trigger.

- Web component: `<ix-dropdown>`
- React/Vue: `IxDropdown` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-dropdown>` (`IxModule` from `@siemens/ix-angular` or `IxDropdown` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/dropdown/guide.md

## Figma IDs

- 1233:32649

## Properties

- `anchor`; attr: `anchor`; type: `HTMLElement | Promise<HTMLElement> | string | undefined` - Define an anchor element
- `closeBehavior`; attr: `close-behavior`; type: `"both" | "inside" | "outside" | boolean`; default: `'both'` - Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown. If the dropdown is a child of another one, it will be closed with the parent, regardless of its own close behavior.
- `disableFocusHandling`; attr: `disable-focus-handling`; type: `boolean`; default: `false` - Suppress automatic focus when the dropdown is shown
- `disableFocusTrap`; attr: `disable-focus-trap`; type: `boolean`; default: `false` - Close dropdown when tabbing away, and do not trap focus inside dropdown
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for top-layer positioning.
- `focusCheckedItem`; attr: `focus-checked-item`; type: `boolean`; default: `false` - If true, the dropdown will try to focus checked items first when opened via keyboard, otherwise it will always focus the first focusable item.
- `header`; attr: `header`; type: `string | undefined` - An optional header shown at the top of the dropdown
- `navigationMode`; attr: `navigation-mode`; type: `"active-descendant" | "roving-tabindex"`; default: `'active-descendant'` - Controls how keyboard navigation moves focus between dropdown items. - `active-descendant`: DOM focus stays on the trigger/anchor element while a visual focus indicator moves between the items. Consumers can expose the active item through `aria-activedescendant`. - `roving-tabindex`: real DOM focus is moved to each item using a roving `tabindex` (`0` for the active item, `-1` for the others). No `aria-activedescendant` is required because the focused item is announced directly. Besides the built-in item components, arbitrary focusable elements (e.g. a native `<button>`) can opt into this navigation by adding the `data-ix-roving-item` attribute; such native elements keep their own activation (<kbd>Enter</kbd> / <kbd>Space</kbd> fire a real click).
- `placement`; attr: `placement`; type: `"bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start"`; default: `'bottom-start'` - Placement of the dropdown
- `positioningStrategy`; attr: `positioning-strategy`; type: `"absolute" | "fixed"`; default: `'fixed'` - Position strategy
- `show`; attr: `show`; type: `boolean`; default: `false` - Show dropdown
- `suppressAutomaticPlacement`; attr: `suppress-automatic-placement`; type: `boolean`; default: `false` - Suppress the automatic placement of the dropdown.
- `suppressTriggerVisibilityCheck`; attr: `suppress-trigger-visibility-check`; type: `boolean`; default: `false` - By default the dropdown gets closed if the trigger is not visible anymore (e.g. due to scrolling). Setting this property prevents that behavior.
- `trigger`; attr: `trigger`; type: `HTMLElement | Promise<HTMLElement> | string | undefined` - Define an element that triggers the dropdown. A trigger can either be a string that will be interpreted as id attribute or a DOM element.

## Events

- `showChange` - Fire event before visibility of dropdown has changed, preventing event will cancel showing dropdown
- `showChanged` - Fire event after visibility of dropdown has changed

## Methods

- `updatePosition() => Promise<void>` - Update position of dropdown

## Slots

- `` - Dropdown content.

## Dependencies

- Renders: None
- Rendered by: `ix-application-header`, `ix-avatar`, `ix-category-filter`, `ix-date-dropdown`, `ix-date-input`, `ix-datetime-input`, `ix-dropdown-button`, `ix-menu-avatar`, `ix-menu-category`, `ix-select`, `ix-time-input`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- blind-header-actions (angular, angular-standalone, html, react, vue)
- dropdown (angular, angular-standalone, html, react, vue)
- dropdown-icon (angular, angular-standalone, html, react, vue)
- dropdown-quick-actions (angular, angular-standalone, html, react, vue)
- dropdown-roving-tabindex (angular, angular-standalone, html, react, vue)
- dropdown-submenu (angular, angular-standalone, html, react, vue)
- group-context-menu (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

# ix-dropdown

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/dropdown/guide.md

## Figma IDs

- 1233:32649

## Related examples

Example source links are relative to this Markdown file.

- blind-header-actions
  - angular:
    - `angular/blind-header-actions.css`: [source](../../examples/angular-examples/src/preview-examples/blind-header-actions.css)
    - `angular/blind-header-actions.ts`: [source](../../examples/angular-examples/src/preview-examples/blind-header-actions.ts)
  - angular-standalone:
    - `angular-standalone/blind-header-actions.css`: [source](../../examples/angular-standalone-examples/src/preview-examples/blind-header-actions.css)
    - `angular-standalone/blind-header-actions.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/blind-header-actions.ts)
  - html:
    - `html/blind-header-actions.css`: [source](../../examples/html-examples/src/preview-examples/blind-header-actions.css)
    - `html/blind-header-actions.html`: [source](../../examples/html-examples/src/preview-examples/blind-header-actions.html)
  - react:
    - `react/blind-header-actions.scoped.css`: [source](../../examples/react-examples/src/preview-examples/blind-header-actions.scoped.css)
    - `react/blind-header-actions.tsx`: [source](../../examples/react-examples/src/preview-examples/blind-header-actions.tsx)
  - vue:
    - `vue/blind-header-actions.css`: [source](../../examples/vue-examples/src/preview-examples/blind-header-actions.css)
    - `vue/blind-header-actions.vue`: [source](../../examples/vue-examples/src/preview-examples/blind-header-actions.vue)
- dropdown
  - angular:
    - `angular/dropdown.ts`: [source](../../examples/angular-examples/src/preview-examples/dropdown.ts)
  - angular-standalone:
    - `angular-standalone/dropdown.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/dropdown.ts)
  - html:
    - `html/dropdown.html`: [source](../../examples/html-examples/src/preview-examples/dropdown.html)
  - react:
    - `react/dropdown.tsx`: [source](../../examples/react-examples/src/preview-examples/dropdown.tsx)
  - vue:
    - `vue/dropdown.vue`: [source](../../examples/vue-examples/src/preview-examples/dropdown.vue)
- dropdown-icon
  - angular:
    - `angular/dropdown-icon.ts`: [source](../../examples/angular-examples/src/preview-examples/dropdown-icon.ts)
  - angular-standalone:
    - `angular-standalone/dropdown-icon.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/dropdown-icon.ts)
  - html:
    - `html/dropdown-icon.html`: [source](../../examples/html-examples/src/preview-examples/dropdown-icon.html)
  - react:
    - `react/dropdown-icon.tsx`: [source](../../examples/react-examples/src/preview-examples/dropdown-icon.tsx)
  - vue:
    - `vue/dropdown-icon.vue`: [source](../../examples/vue-examples/src/preview-examples/dropdown-icon.vue)
- dropdown-quick-actions
  - angular:
    - `angular/dropdown-quick-actions.html`: [source](../../examples/angular-examples/src/preview-examples/dropdown-quick-actions.html)
    - `angular/dropdown-quick-actions.ts`: [source](../../examples/angular-examples/src/preview-examples/dropdown-quick-actions.ts)
  - angular-standalone:
    - `angular-standalone/dropdown-quick-actions.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/dropdown-quick-actions.html)
    - `angular-standalone/dropdown-quick-actions.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/dropdown-quick-actions.ts)
  - html:
    - `html/dropdown-quick-actions.html`: [source](../../examples/html-examples/src/preview-examples/dropdown-quick-actions.html)
  - react:
    - `react/dropdown-quick-actions.tsx`: [source](../../examples/react-examples/src/preview-examples/dropdown-quick-actions.tsx)
  - vue:
    - `vue/dropdown-quick-actions.vue`: [source](../../examples/vue-examples/src/preview-examples/dropdown-quick-actions.vue)
- dropdown-submenu
  - angular:
    - `angular/dropdown-submenu.ts`: [source](../../examples/angular-examples/src/preview-examples/dropdown-submenu.ts)
  - angular-standalone:
    - `angular-standalone/dropdown-submenu.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/dropdown-submenu.ts)
  - html:
    - `html/dropdown-submenu.html`: [source](../../examples/html-examples/src/preview-examples/dropdown-submenu.html)
  - react:
    - `react/dropdown-submenu.tsx`: [source](../../examples/react-examples/src/preview-examples/dropdown-submenu.tsx)
  - vue:
    - `vue/dropdown-submenu.vue`: [source](../../examples/vue-examples/src/preview-examples/dropdown-submenu.vue)
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

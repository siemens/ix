# ix-dropdown-button

> Button that opens an attached dropdown menu.

- Web component: `<ix-dropdown-button>`
- React/Vue: `IxDropdownButton` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-dropdown-button>` (`IxModule` from `@siemens/ix-angular` or `IxDropdownButton` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/dropdown-button/guide.md

## Figma IDs

- 294:1198

## Properties

- `ariaLabelDropdownButton`; attr: `aria-label-dropdown-button`; type: `string | undefined` - ARIA label for the dropdown button. Set as `aria-label` on the host, which is the interactive control. The nested button is inert and is not exposed to assistive technology.
- `closeBehavior`; attr: `close-behavior`; type: `"both" | "inside" | "outside" | boolean`; default: `'both'` - Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable button
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `focusCheckedItem`; attr: `focus-checked-item`; type: `boolean`; default: `false` - If true, the dropdown will try to focus checked items first when opened via keyboard, otherwise it will always focus the first focusable item.
- `icon`; attr: `icon`; type: `string | undefined` - Button icon
- `label`; attr: `label`; type: `null | string | undefined` - Set label text. An empty or omitted label renders an icon-only trigger. Set to `null` to keep the standard trigger layout for custom `button-label` slot content.
- `navigationMode`; attr: `navigation-mode`; type: `"active-descendant" | "roving-tabindex"`; default: `'active-descendant'` - Controls how keyboard navigation moves focus between dropdown items. - `active-descendant`: DOM focus stays on the dropdown button while a visual focus indicator moves between the items, exposed via `aria-activedescendant`. - `roving-tabindex`: real DOM focus is moved to each item using a roving `tabindex` (`0` for the active item, `-1` for the others). No `aria-activedescendant` is used because the focused item is announced directly.
- `placement`; attr: `placement`; type: `"bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start" | undefined` - Placement of the dropdown
- `variant`; attr: `variant`; type: `"danger-primary" | "danger-secondary" | "danger-tertiary" | "primary" | "secondary" | "subtle-primary" | "subtle-secondary" | "subtle-tertiary" | "tertiary"`; default: `'primary'` - Button variant

## Events

- `showChange` - Fire event before visibility of dropdown has changed, preventing event will cancel showing dropdown
- `showChanged` - Fire event after visibility of dropdown has changed

## Methods

- None

## Slots

- `` - Dropdown content.
- `button-label` - Custom button label.

## Dependencies

- Renders: `ix-button`, `ix-dropdown`, `ix-icon-button`
- Rendered by: `ix-breadcrumb`, `ix-date-picker`, `ix-split-button`, `ix-tabs`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- application-app-switch (angular, angular-standalone, html, react, vue)
- application-breakpoints (angular, angular-standalone, html, react, vue)
- application-header (angular, angular-standalone, html, react, vue)
- dropdown-button (angular, angular-standalone, html, react, vue)
- dropdown-button-icon (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

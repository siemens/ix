# ix-dropdown-item

> Selectable entry within a dropdown menu.

- Web component: `<ix-dropdown-item>`
- React/Vue: `IxDropdownItem` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-dropdown-item>` (`IxModule` from `@siemens/ix-angular` or `IxDropdownItem` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/dropdown-button/guide.md

## Figma IDs

- 1603:52792

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

## Methods

- None

## Slots

- `` - Dropdown item label.

## Dependencies

- Renders: None
- Rendered by: `ix-breadcrumb`, `ix-date-picker`, `ix-menu-avatar-item`, `ix-menu-category`, `ix-select`, `ix-select-item`, `ix-tabs`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- application-app-switch (angular, angular-standalone, html, react, vue)
- application-breakpoints (angular, angular-standalone, html, react, vue)
- application-header (angular, angular-standalone, html, react, vue)
- blind-header-actions (angular, angular-standalone, html, react, vue)
- dropdown (angular, angular-standalone, html, react, vue)
- dropdown-button (angular, angular-standalone, html, react, vue)
- dropdown-button-icon (angular, angular-standalone, html, react, vue)
- dropdown-icon (angular, angular-standalone, html, react, vue)
- dropdown-quick-actions (angular, angular-standalone, html, react, vue)
- dropdown-roving-tabindex (angular, angular-standalone, html, react, vue)
- dropdown-submenu (angular, angular-standalone, html, react, vue)
- group-context-menu (angular, angular-standalone, html, react, vue)
- split-button (angular, angular-standalone, html, react, vue)
- split-button-icons (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

# ix-icon-button

> Button that displays only an icon to trigger an action.

- Web component: `<ix-icon-button>`
- React/Vue: `IxIconButton` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-icon-button>` (`IxModule` from `@siemens/ix-angular` or `IxIconButton` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/icon-button/guide.md

## Figma IDs

- 270:941

## Properties

- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disabled
- `icon`; attr: `icon`; type: `string | undefined` - Icon name
- `iconColor`; attr: `icon-color`; type: `string | undefined` - Icon color as a CSS custom property name, for example `--si-sys-color-text-primary`.
- `loading`; attr: `loading`; type: `boolean`; default: `false` - Loading button
- `oval`; attr: `oval`; type: `boolean`; default: `false` - Button in oval shape
- `size`; attr: `size`; type: `"12" | "16" | "20" | "24"`; default: `'20'` - Size of icon in button. `12` and `16` shrink the control. `20` and `24` keep a 32×32 control. Defaults to `20`.
- `type`; attr: `type`; type: `"button" | "submit"`; default: `'button'` - Type of the button
- `variant`; attr: `variant`; type: `"danger-primary" | "danger-secondary" | "danger-tertiary" | "primary" | "secondary" | "subtle-primary" | "subtle-secondary" | "subtle-tertiary" | "tertiary"`; default: `'subtle-primary'` - Variant of button

## Events

- None

## Methods

- None

## Slots

- None

## Dependencies

- Renders: `ix-spinner`
- Rendered by: `ix-application-header`, `ix-card-list`, `ix-category-filter`, `ix-chat-input`, `ix-content-header`, `ix-date-input`, `ix-date-picker`, `ix-datetime-input`, `ix-dropdown-button`, `ix-expanding-search`, `ix-filter-chip`, `ix-flip-tile`, `ix-group-context-menu`, `ix-input`, `ix-menu`, `ix-menu-about`, `ix-menu-about-news`, `ix-menu-expand-icon`, `ix-menu-settings`, `ix-message-bar`, `ix-modal-header`, `ix-number-input`, `ix-pagination`, `ix-pane`, `ix-popover-header`, `ix-select`, `ix-split-button`, `ix-tab-item`, `ix-time-input`, `ix-toast`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- application-header (angular, angular-standalone, html, react, vue)
- badge (angular, angular-standalone, html, react, vue)
- blind-header-actions (angular, angular-standalone, html, react, vue)
- button-loading (angular, angular-standalone, html, react, vue)
- button-with-icon (angular, angular-standalone, html, react, vue)
- chat (angular, angular-standalone, html, react, vue)
- chat-ai-message (angular, angular-standalone, html, react, vue)
- chat-input (angular, angular-standalone, html, react, vue)
- chat-user-message (angular, angular-standalone, html, react, vue)
- content-header-no-back (angular, angular-standalone, html, react, vue)
- custom-field (angular, angular-standalone, html, react, vue)
- dropdown-quick-actions (angular, angular-standalone, html, react, vue)
- form-validation (angular, angular-standalone, html, react, vue)
- tile (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- [upload](../patterns.md#upload): Use this pattern to provide a file upload area with a list of uploaded files and remove actions for each file.

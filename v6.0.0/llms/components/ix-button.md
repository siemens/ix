# ix-button

> Triggers an action or event when activated by the user.

- Web component: `<ix-button>`
- React/Vue: `IxButton` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-button>` (`IxModule` from `@siemens/ix-angular` or `IxButton` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/button/guide.md

## Figma IDs

- 225:5535

## Properties

- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable the button
- `form`; attr: `form`; type: `string | undefined` - Provide a form element ID to automatically submit the from if the button is pressed. Only works in combination with type="submit".
- `href`; attr: `href`; type: `string | undefined` - URL for the button link. When provided, the button will render as an anchor tag.
- `icon`; attr: `icon`; type: `string | undefined` - Icon name
- `iconRight`; attr: `icon-right`; type: `string | undefined` - Icon name for the right side of the button
- `loading`; attr: `loading`; type: `boolean`; default: `false` - Loading button
- `rel`; attr: `rel`; type: `string | undefined` - Specifies the relationship between the current document and the linked document when href is provided.
- `target`; attr: `target`; type: `"_blank" | "_parent" | "_self" | "_top" | undefined`; default: `'_self'` - Specifies where to open the linked document when href is provided.
- `type`; attr: `type`; type: `"button" | "submit"`; default: `'button'` - Type of the button
- `variant`; attr: `variant`; type: `"danger-primary" | "danger-secondary" | "danger-tertiary" | "primary" | "secondary" | "subtle-primary" | "subtle-secondary" | "subtle-tertiary" | "tertiary"`; default: `'primary'` - Button variant

## Events

- None

## Methods

- None

## Slots

- `` - Button label.

## Dependencies

- Renders: `ix-spinner`
- Rendered by: `ix-card-list`, `ix-date-dropdown`, `ix-date-picker`, `ix-datetime-picker`, `ix-dropdown-button`, `ix-empty-state`, `ix-menu-about-news`, `ix-split-button`, `ix-time-picker`, `ix-upload`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- badge (angular, angular-standalone, html, react, vue)
- button-danger-primary (angular, angular-standalone, html, react, vue)
- button-danger-secondary (angular, angular-standalone, html, react, vue)
- button-danger-tertiary (angular, angular-standalone, html, react, vue)
- button-group (angular, angular-standalone, html, react, vue)
- button-loading (angular, angular-standalone, html, react, vue)
- button-secondary (angular, angular-standalone, html, react, vue)
- button-subtle-primary (angular, angular-standalone, html, react, vue)
- button-subtle-secondary (angular, angular-standalone, html, react, vue)
- button-subtle-tertiary (angular, angular-standalone, html, react, vue)
- button-tertiary (angular, angular-standalone, html, react, vue)
- button-text-icon (angular, angular-standalone, html, react, vue)
- button-with-link (angular, angular-standalone, html, react, vue)
- buttons (angular, angular-standalone, html, react, vue)
- content-header (angular, angular-standalone, html, react, vue)
- content-header-text-overflow (angular, angular-standalone, html, react, vue)
- content-header-with-slot (angular, angular-standalone, html, react, vue)
- drawer (angular, angular-standalone, react, vue)
- drawer-full-height (angular, angular-standalone, react, vue)
- dropdown (angular, angular-standalone, html, react, vue)
- dropdown-icon (angular, angular-standalone, html, react, vue)
- dropdown-quick-actions (angular, angular-standalone, html, react, vue)
- dropdown-roving-tabindex (angular, angular-standalone, html, react, vue)
- dropdown-submenu (angular, angular-standalone, html, react, vue)
- form-layout-auto (angular, angular-standalone, html, react, vue)
- form-layout-grid (angular, angular-standalone, html, react, vue)
- form-validation (angular, angular-standalone, html, react, vue)
- group-custom-entry (angular, angular-standalone, html, react, vue)
- info-page (angular, angular-standalone, html, react, vue)
- input (angular, angular-standalone, html, react, vue)
- input-form-validation (angular, angular-standalone)
- loading (angular, angular-standalone, html, react, vue)
- message (angular, angular-standalone, html, react, vue)
- message-bar (angular, angular-standalone, html, react, vue)
- message-bar-removal (angular, angular-standalone, html, react, vue)
- modal (html, react, vue)
- modal-by-instance (angular, angular-standalone)
- modal-by-instance-content (angular, angular-standalone)
- modal-by-template (angular, angular-standalone)
- modal-close (angular, angular-standalone, html, react, vue)
- modal-form-ix-button-submit (angular, angular-standalone, html, react, vue)
- modal-non-blocking (angular, angular-standalone, html, react)
- modal-sizes (angular, angular-standalone, html, react, vue)
- pane (angular, angular-standalone, html, react, vue)
- pane-layout (angular, angular-standalone, html, react, vue)
- popover (angular, angular-standalone, html, react, vue)
- theme-switcher (angular, angular-standalone, html, react, vue)
- tile (angular, angular-standalone, html, react, vue)
- toast (angular, angular-standalone, html, react, vue)
- toast-custom (angular, angular-standalone, html, react, vue)
- toast-position (angular, angular-standalone, html, react, vue)
- tooltip (angular, angular-standalone, html, react, vue)
- tooltip-with-icon (angular, angular-standalone, html, react, vue)
- tree-custom (angular, angular-standalone, html, react, vue)
- validation (angular, angular-standalone, react, vue)
- validation-select (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- [change-password](../patterns.md#change-password): Use this pattern to present a change-password modal with current password, new password, password requirement validation, confirmation validation, and save or cancel actions.
- [error-page](../patterns.md#error-page): Use this pattern to show a 404 not-found error page with explanatory text and a primary action that routes users back home.
- [login-overlay](../patterns.md#login-overlay): Use this pattern to build a branded login overlay with username and password inputs, recovery and registration links, and alternative sign-in actions.

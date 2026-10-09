# ix-typography

> Applies consistent text styling based on the design system's typography scale.

- Web component: `<ix-typography>`
- React/Vue: `IxTypography` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-typography>` (`IxModule` from `@siemens/ix-angular` or `IxTypography` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/styles/typography/guide.md

## Figma IDs

- 40211:13267

## Properties

- `bold`; attr: `bold`; type: `boolean`; default: `false` - Display text bold
- `format`; attr: `format`; type: `"body" | "body-lg" | "body-lg-sbold" | "body-paragraph" | "body-paragraph-sbold" | "body-sbold" | "body-sm" | "body-sm-sbold" | "code" | "code-lg" | "code-sm" | "display" | "display-lg" | "display-lg-sbold" | "display-sbold" | "display-xl" | "display-xl-sbold" | "display-xxl" | "display-xxl-sbold" | "h1" | "h2" | "h3" | "h4" | "h5" | "h5-bold" | "h6" | undefined` - Text format
- `textColor`; attr: `text-color`; type: `"alarm" | "alarm-contrast" | "contrast" | "critical-contrast" | "info-contrast" | "inv-contrast" | "inv-soft" | "inv-std" | "inv-weak" | "neutral-contrast" | "primary-contrast" | "soft" | "std" | "success-contrast" | "warning-contrast" | "weak" | undefined` - Text color based on theme variables
- `textDecoration`; attr: `text-decoration`; type: `"line-through" | "none" | "underline"`; default: `'none'` - Text decoration

## Events

- None

## Methods

- None

## Slots

- `` - Typography content.

## Dependencies

- Renders: None
- Rendered by: `ix-action-card`, `ix-application-header`, `ix-application-switch-modal`, `ix-avatar`, `ix-blind`, `ix-card-list`, `ix-chat-input`, `ix-chat-user-message`, `ix-checkbox`, `ix-content-header`, `ix-date-picker`, `ix-dropdown-header`, `ix-empty-state`, `ix-field-label`, `ix-field-wrapper`, `ix-helper-text`, `ix-info-page`, `ix-input`, `ix-menu-about-news`, `ix-menu-category`, `ix-modal-header`, `ix-pagination`, `ix-pane`, `ix-pill`, `ix-popover-header`, `ix-progress-indicator`, `ix-push-card`, `ix-radio`, `ix-textarea`, `ix-time-picker`, `ix-toast`, `ix-toggle`, `ix-tooltip`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- card (angular, angular-standalone, html, react, vue)
- date-input-with-slots (angular, angular-standalone, html, react, vue)
- datetime-input-with-slots (angular, angular-standalone, html, react, vue)
- form-validation (angular, angular-standalone, html, react, vue)
- grid (angular, angular-standalone, html, react, vue)
- grid-padding (angular, angular-standalone, html, react, vue)
- grid-size (angular, angular-standalone, html, react, vue)
- input-with-slots (angular, angular-standalone, html, react, vue)
- layout-auto (angular, angular-standalone, html, react, vue)
- layout-auto-custom (angular, angular-standalone, html, react, vue)
- modal-non-blocking (angular, angular-standalone, html, react)
- number-input-with-slots (angular, angular-standalone, html, react, vue)
- time-input-with-slots (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- [login-overlay](../patterns.md#login-overlay): Use this pattern to build a branded login overlay with username and password inputs, recovery and registration links, and alternative sign-in actions.

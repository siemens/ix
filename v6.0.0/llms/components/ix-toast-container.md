# ix-toast-container

> Container that positions and manages toast notifications.

- Web component: `<ix-toast-container>`
- React/Vue: `IxToastContainer` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-toast-container>` (`IxModule` from `@siemens/ix-angular` or `IxToastContainer` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/toast/guide.md

## Figma IDs

- None

## Properties

- `position`; attr: `position`; type: `"bottom-right" | "top-right"`; default: `'bottom-right'` - Position of the toast container. Determines where the toasts will be displayed on the screen.

## Events

- None

## Methods

- `showToast(config: ToastConfig) => Promise<ShowToastResult>` - Display a toast message

## Slots

- `` - Toast messages.

## Dependencies

- Renders: `ix-toast`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- toast (angular, angular-standalone, html, react, vue)
- toast-custom (angular, angular-standalone, html, react, vue)
- toast-position (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

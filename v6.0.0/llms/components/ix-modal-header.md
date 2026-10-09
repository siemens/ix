# ix-modal-header

> Header region of a modal dialog showing the title and close control.

- Web component: `<ix-modal-header>`
- React/Vue: `IxModalHeader` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-modal-header>` (`IxModule` from `@siemens/ix-angular` or `IxModalHeader` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/modal/guide.md

## Figma IDs

- None

## Properties

- `ariaLabelCloseIconButton`; attr: `aria-label-close-icon-button`; type: `string | undefined`; default: `'Close modal'` - ARIA label for the close icon button Will be set as aria-label on the nested HTML button element
- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `hideClose`; attr: `hide-close`; type: `boolean`; default: `false` - Hide the close button
- `icon`; attr: `icon`; type: `string | undefined` - Icon of the header
- `iconColor`; attr: `icon-color`; type: `string | undefined` - Icon color as a CSS custom property name, for example `--si-sys-color-text-primary`.

## Events

- `closeClick` - Emits when the close icon is clicked and closes the modal Can be prevented, in which case only the event is triggered, and the modal remains open

## Methods

- None

## Slots

- `` - Modal header content.

## Dependencies

- Renders: `ix-icon-button`, `ix-typography`
- Rendered by: `ix-application-switch-modal`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- modal (html, react, vue)
- modal-by-instance-content (angular, angular-standalone)
- modal-by-template (angular, angular-standalone)
- modal-close (angular, angular-standalone, html, react, vue)
- modal-form-ix-button-submit (angular, angular-standalone, html, react, vue)
- modal-non-blocking (angular, angular-standalone, html, react)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- [change-password](../patterns.md#change-password): Use this pattern to present a change-password modal with current password, new password, password requirement validation, confirmation validation, and save or cancel actions.

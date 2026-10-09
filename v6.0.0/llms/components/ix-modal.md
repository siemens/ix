# ix-modal

> Dialog overlay that presents content or requires user interaction on top of the page.

- Web component: `<ix-modal>`
- React/Vue: `IxModal` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-modal>` (`IxModule` from `@siemens/ix-angular` or `IxModal` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/modal/guide.md

## Figma IDs

- None

## Properties

- `beforeDismiss`; type: `((reason?: unknown) => boolean | Promise<boolean>) | undefined` - Is called before the modal is dismissed. - Return `true` to proceed in dismissing the modal - Return `false` to abort in dismissing the modal
- `centered`; attr: `centered`; type: `boolean`; default: `false` - Centered modal
- `closeOnBackdropClick`; attr: `close-on-backdrop-click`; type: `boolean`; default: `false` - Dismiss modal on backdrop click (outside the dialog panel). Ignored when **isNonBlocking** is `true`.
- `disableAnimation`; attr: `disable-animation`; type: `boolean`; default: `false` - Should the modal animation be disabled
- `hideBackdrop`; attr: `hide-backdrop`; type: `boolean`; default: `false` - Hide the backdrop behind the modal dialog
- `isNonBlocking`; attr: `is-non-blocking`; type: `boolean`; default: `false` - Non-modal dialog: page stays interactive, no lightbox or focus trap; `aria-modal` is `false`. Set before calling `showModal()`; changing while open is unsupported.
- `size`; attr: `size`; type: `"360" | "480" | "600" | "720" | "840" | "full-screen" | "full-width"`; default: `'360'` - Modal size

## Events

- `dialogClose` - Dialog close
- `dialogDismiss` - Dialog cancel

## Methods

- `closeModal<T = unknown>(reason: T) => Promise<void>` - Close the dialog
- `dismissModal<T = unknown>(reason?: T) => Promise<void>` - Dismiss the dialog
- `showModal() => Promise<void>` - Show the dialog

## Slots

- `` - Modal content.

## Dependencies

- Renders: `ix-modal`
- Rendered by: `ix-modal`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- modal-by-template (angular, angular-standalone)
- modal-form-ix-button-submit (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- [change-password](../patterns.md#change-password): Use this pattern to present a change-password modal with current password, new password, password requirement validation, confirmation validation, and save or cancel actions.

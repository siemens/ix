# ix-modal

> Dialog overlay that presents content or requires user interaction on top of the page.

## Documentation

- https://ix.siemens.io//docs/components/modal/guide.md

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- None

## Related blocks

Block and file links are relative to this Markdown file.

- [change-password](../blocks.md#change-password)
  - angular:
    - `angular/change-password.ts`: [file](../../blocks/angular/change-password.ts)
    - `angular/change-password.html`: [file](../../blocks/angular/change-password.html)
    - `angular/change-password.css`: [file](../../blocks/angular/change-password.css)
  - react:
    - `react/change-password.tsx`: [file](../../blocks/react/change-password.tsx)
    - `react/change-password.module.css`: [file](../../blocks/react/change-password.module.css)

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

## Slots

- `` - Modal content.

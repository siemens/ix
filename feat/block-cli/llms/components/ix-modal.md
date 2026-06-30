# ix-modal

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/modal/guide.md

## Figma IDs

- None

## Related examples

Example source links are relative to this Markdown file.

- None

## Related blocks

- unavailable (not present in registry JSON)

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

- None

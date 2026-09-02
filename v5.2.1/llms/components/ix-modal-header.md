# ix-modal-header

> Header region of a modal dialog showing the title and close control.

## Documentation

- https://ix.siemens.io//docs/components/modal/guide.md

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- modal-non-blocking
  - angular:
    - `angular/modal-non-blocking.ts`: [file](../../examples/angular/modal-non-blocking.ts)
  - angular-standalone:
    - `angular-standalone/modal-non-blocking.ts`: [file](../../examples/angular-standalone/modal-non-blocking.ts)
  - html:
    - `html/modal-non-blocking.html`: [file](../../examples/html/modal-non-blocking.html)
  - react:
    - `react/modal-non-blocking.tsx`: [file](../../examples/react/modal-non-blocking.tsx)

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

- `ariaLabelCloseIconButton`; attr: `aria-label-close-icon-button`; type: `string | undefined`; default: `'Close modal'` - ARIA label for the close icon button Will be set as aria-label on the nested HTML button element
- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `hideClose`; attr: `hide-close`; type: `boolean`; default: `false` - Hide the close button
- `icon`; attr: `icon`; type: `string | undefined` - Icon of the header
- `iconColor`; attr: `icon-color`; type: `string | undefined` - Icon color as a CSS custom property name, for example `--si-sys-text-primary`.

## Events

- `closeClick` - Emits when the close icon is clicked and closes the modal Can be prevented, in which case only the event is triggered, and the modal remains open

## Slots

- `` - Modal header content.

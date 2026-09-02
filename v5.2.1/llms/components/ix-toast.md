# ix-toast

> Transient notification message that appears temporarily.

## Documentation

- https://ix.siemens.io//docs/components/toast/guide.md

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- None

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `ariaLabelCloseIconButton`; attr: `aria-label-close-icon-button`; type: `string | undefined`; default: `'Close toast'` - ARIA label for the close icon button Will be set as aria-label on the nested HTML button element
- `autoCloseDelay`; attr: `auto-close-delay`; type: `number`; default: `5000` - Autoclose title after delay
- `hideIcon`; attr: `hide-icon`; type: `boolean`; default: `false` - Allows to hide the icon in the toast.
- `icon`; attr: `icon`; type: `string | undefined` - Icon of toast
- `iconColor`; attr: `icon-color`; type: `string | undefined` - Icon color as a CSS custom property name, for example `--si-sys-text-primary`.
- `preventAutoClose`; attr: `prevent-auto-close`; type: `boolean`; default: `false` - Autoclose behavior
- `toastTitle`; attr: `toast-title`; type: `string | undefined` - Toast title
- `type`; attr: `type`; type: `"error" | "info" | "success" | "warning"`; default: `'info'` - Toast type

## Events

- `closeToast` - Toast closed

## Slots

- `` - Toast message content.
- `action` - Toast action content.

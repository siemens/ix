# ix-popover-header

> Header section with optional icon, title, additional items, and close button.

## Documentation

- None

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- None

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `ariaLabelCloseIconButton`; attr: `aria-label-close-icon-button`; type: `string | undefined`; default: `'Close'` - ARIA label for the close icon button. Will be set as aria-label on the nested HTML button element.
- `hideClose`; attr: `hide-close`; type: `boolean`; default: `false` - Hide the close (X) button
- `icon`; attr: `icon`; type: `string | undefined` - Icon name displayed before the title. The icon is decorative; provide context in the default slot heading.
- `iconColor`; attr: `icon-color`; type: `string | undefined` - Icon color as a CSS custom property name, for example `--si-sys-text-primary`.

## Events

- `closeClick` - Fires when close button is clicked. Cancel to prevent closing.

## Slots

- `additional-items` - Optional content beside the title (for example `ix-pill`).
- `default` - Popover title (rendered as heading text).

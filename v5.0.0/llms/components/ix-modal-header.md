# ix-modal-header

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/modal/guide.md

## Figma IDs

- None

## Related examples

- modal
- modal-close
- modal-form-ix-button-submit
- modal-non-blocking

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelCloseIconButton`; attr: `aria-label-close-icon-button`; type: `string | undefined`; default: `'Close modal'` - ARIA label for the close icon button Will be set as aria-label on the nested HTML button element
- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - ARIA label for the icon
- `hideClose`; attr: `hide-close`; type: `boolean`; default: `false` - Hide the close button
- `icon`; attr: `icon`; type: `string | undefined` - Icon of the header
- `iconColor`; attr: `icon-color`; type: `string | undefined` - Icon color

## Events

- `closeClick` - Emits when the close icon is clicked and closes the modal Can be prevented, in which case only the event is triggered, and the modal remains open

## Slots

- None

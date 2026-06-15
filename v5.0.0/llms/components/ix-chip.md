# ix-chip

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/chip/guide.md

## Figma IDs

- 286:1758

## Related examples

- chip

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelCloseButton`; attr: `aria-label-close-button`; type: `string | undefined`; default: `'Close chip'` - ARIA label for the close button Will be set as aria-label on the nested HTML button element
- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - Accessible name for the leading icon. When unset, the icon is treated as decorative (hidden from assistive tech) when the default slot supplies a visible label.
- `background`; attr: `background`; type: `string | undefined` - Custom background color. Only has an effect on chips with `variant='custom'`
- `centerContent`; attr: `center-content`; type: `boolean`; default: `false` - Center the content of the chip. Set to false to disable centering.
- `chipColor`; attr: `chip-color`; type: `string | undefined` - Custom font and icon color. Only has an effect on chips with `variant='custom'`
- `closable`; attr: `closable`; type: `boolean`; default: `false` - Show close icon
- `icon`; attr: `icon`; type: `string | undefined` - Show icon
- `inactive`; attr: `inactive`; type: `boolean`; default: `false` - Determines if the chip is interactive. If true no user input (e.g. mouse states, keyboard navigation) will be possible and also the close button will not be present.
- `outline`; attr: `outline`; type: `boolean`; default: `false` - Show chip with outline style
- `tooltipText`; attr: `tooltip-text`; type: `boolean | string`; default: `false` - Display a tooltip. By default, no tooltip will be displayed. Add the attribute to display the text content of the component as a tooltip or use a string to display a custom text.
- `variant`; attr: `variant`; type: `"alarm" | "critical" | "custom" | "info" | "neutral" | "primary" | "success" | "warning"`; default: `'primary'` - Chip variant. Defaults to `primary`. When unset or set to an unknown value the chip falls back to `primary` styling.

## Events

- `closeChip` - Fire event if close button is clicked

## Slots

- None

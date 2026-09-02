# ix-flip-tile

> Tile that flips between a front and back side to reveal additional content.

## Documentation

- None

## Figma IDs

- 407:3446

## Related examples

Example file links are relative to this Markdown file.

- None

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `ariaLabelEyeIconButton`; attr: `aria-label-eye-icon-button`; type: `string | undefined` - ARIA label for the eye icon button Will be set as aria-label on the nested HTML button element
- `height`; attr: `height`; type: `"auto" | number`; default: `15.125` - Height interpreted as REM
- `index`; attr: `index`; type: `number`; default: `0` - Index of the currently visible content
- `variant`; attr: `variant`; type: `"alarm" | "filled" | "info" | "outline" | "primary" | "warning"`; default: `'filled'` - Variation of the Flip
- `width`; attr: `width`; type: `"auto" | number`; default: `16` - Width interpreted as REM

## Events

- `toggle` - Event emitted when the index changes

## Slots

- `` - Front-side content.
- `footer` - Back-side content.
- `header` - Header content.

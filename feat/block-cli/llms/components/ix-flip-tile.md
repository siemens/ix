# ix-flip-tile

> Tile that flips between a front and back side to reveal additional content.

## Documentation

- None

## Figma IDs

- 407:3446

## Related examples

Example source links are relative to this Markdown file.

- flip-tile
  - angular:
    - `angular/flip-tile.css`: [source](../../examples/angular-examples/src/preview-examples/flip-tile.css)
    - `angular/flip-tile.ts`: [source](../../examples/angular-examples/src/preview-examples/flip-tile.ts)
  - angular-standalone:
    - `angular-standalone/flip-tile.css`: [source](../../examples/angular-standalone-examples/src/preview-examples/flip-tile.css)
    - `angular-standalone/flip-tile.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/flip-tile.ts)
  - html:
    - `html/flip-tile.css`: [source](../../examples/html-examples/src/preview-examples/flip-tile.css)
    - `html/flip-tile.html`: [source](../../examples/html-examples/src/preview-examples/flip-tile.html)
  - react:
    - `react/flip-tile.scoped.css`: [source](../../examples/react-examples/src/preview-examples/flip-tile.scoped.css)
    - `react/flip-tile.tsx`: [source](../../examples/react-examples/src/preview-examples/flip-tile.tsx)
  - vue:
    - `vue/flip-tile.css`: [source](../../examples/vue-examples/src/preview-examples/flip-tile.css)
    - `vue/flip-tile.vue`: [source](../../examples/vue-examples/src/preview-examples/flip-tile.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelEyeIconButton`; attr: `aria-label-eye-icon-button`; type: `string | undefined` - ARIA label for the eye icon button Will be set as aria-label on the nested HTML button element
- `height`; attr: `height`; type: `"auto" | number`; default: `15.125` - Height interpreted as REM
- `index`; attr: `index`; type: `number`; default: `0` - Index of the currently visible content
- `variant`; attr: `variant`; type: `"alarm" | "filled" | "info" | "outline" | "primary" | "warning"`; default: `'filled'` - Variation of the Flip
- `width`; attr: `width`; type: `"auto" | number`; default: `16` - Width interpreted as REM

## Events

- `toggle` - Event emitted when the index changes

## Slots

- None

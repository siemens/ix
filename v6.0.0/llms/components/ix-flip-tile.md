# ix-flip-tile

> Tile that flips between a front and back side to reveal additional content.

- Web component: `<ix-flip-tile>`
- React/Vue: `IxFlipTile` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-flip-tile>` (`IxModule` from `@siemens/ix-angular` or `IxFlipTile` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/flip/code.md

## Figma IDs

- 407:3446

## Properties

- `ariaLabelEyeIconButton`; attr: `aria-label-eye-icon-button`; type: `string | undefined` - ARIA label for the eye icon button Will be set as aria-label on the nested HTML button element
- `height`; attr: `height`; type: `"auto" | number`; default: `15.125` - Height interpreted as REM
- `index`; attr: `index`; type: `number`; default: `0` - Index of the currently visible content
- `variant`; attr: `variant`; type: `"alarm" | "filled" | "info" | "outline" | "primary" | "warning"`; default: `'filled'` - Variation of the Flip
- `width`; attr: `width`; type: `"auto" | number`; default: `16` - Width interpreted as REM

## Events

- `toggle` - Event emitted when the index changes

## Methods

- None

## Slots

- `` - Front-side content.
- `footer` - Back-side content.
- `header` - Header content.

## Dependencies

- Renders: `ix-icon-button`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- flip-tile (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

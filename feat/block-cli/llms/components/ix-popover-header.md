# ix-popover-header

> Header section with optional icon, title, additional items, and close button.

## Documentation

- None

## Figma IDs

- None

## Related examples

Example source links are relative to this Markdown file.

- popover
  - angular:
    - `angular/popover.html`: [source](../../examples/angular-examples/src/preview-examples/popover.html)
    - `angular/popover.ts`: [source](../../examples/angular-examples/src/preview-examples/popover.ts)
  - angular-standalone:
    - `angular-standalone/popover.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/popover.html)
    - `angular-standalone/popover.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/popover.ts)
  - html:
    - `html/popover.html`: [source](../../examples/html-examples/src/preview-examples/popover.html)
  - react:
    - `react/popover.tsx`: [source](../../examples/react-examples/src/preview-examples/popover.tsx)
  - vue:
    - `vue/popover.vue`: [source](../../examples/vue-examples/src/preview-examples/popover.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelCloseIconButton`; attr: `aria-label-close-icon-button`; type: `string | undefined`; default: `'Close'` - ARIA label for the close icon button. Will be set as aria-label on the nested HTML button element.
- `hideClose`; attr: `hide-close`; type: `boolean`; default: `false` - Hide the close (X) button
- `icon`; attr: `icon`; type: `string | undefined` - Icon name displayed before the title. The icon is decorative; provide context in the default slot heading.
- `iconColor`; attr: `icon-color`; type: `string | undefined` - Icon color

## Events

- `closeClick` - Fires when close button is clicked. Cancel to prevent closing.

## Slots

- `` - Popover title (rendered as heading text).
- `additional-items` - Optional content beside the title (for example `ix-pill`).

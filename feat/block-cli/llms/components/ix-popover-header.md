# ix-popover-header

> Header section with optional icon, title, additional items, and close button.

## Documentation

- None

## Figma IDs

- None

## Related examples

- popover
  - angular: [../../examples/angular-examples/src/preview-examples/popover.html](../../examples/angular-examples/src/preview-examples/popover.html), [../../examples/angular-examples/src/preview-examples/popover.ts](../../examples/angular-examples/src/preview-examples/popover.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/popover.html](../../examples/angular-standalone-examples/src/preview-examples/popover.html), [../../examples/angular-standalone-examples/src/preview-examples/popover.ts](../../examples/angular-standalone-examples/src/preview-examples/popover.ts)
  - html: [../../examples/html-examples/src/preview-examples/popover.html](../../examples/html-examples/src/preview-examples/popover.html)
  - react: [../../examples/react-examples/src/preview-examples/popover.tsx](../../examples/react-examples/src/preview-examples/popover.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/popover.vue](../../examples/vue-examples/src/preview-examples/popover.vue)

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

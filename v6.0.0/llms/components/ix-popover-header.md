# ix-popover-header

> Header section with optional icon, title, additional items, and close button.

- Web component: `<ix-popover-header>`
- React/Vue: `IxPopoverHeader` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-popover-header>` (`IxModule` from `@siemens/ix-angular` or `IxPopoverHeader` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/popover/guide.md

## Figma IDs

- None

## Properties

- `ariaLabelCloseIconButton`; attr: `aria-label-close-icon-button`; type: `string | undefined`; default: `'Close'` - ARIA label for the close icon button. Will be set as aria-label on the nested HTML button element.
- `hideClose`; attr: `hide-close`; type: `boolean`; default: `false` - Hide the close (X) button
- `icon`; attr: `icon`; type: `string | undefined` - Icon name displayed before the title. The icon is decorative; provide context in the default slot heading.
- `iconColor`; attr: `icon-color`; type: `string | undefined` - Icon color as a CSS custom property name, for example `--si-sys-color-text-primary`.

## Events

- `closeClick` - Fires when close button is clicked. Cancel to prevent closing.

## Methods

- None

## Slots

- `additional-items` - Optional content beside the title (for example `ix-pill`).
- `default` - Popover title (rendered as heading text).

## Dependencies

- Renders: `ix-icon-button`, `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- popover (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

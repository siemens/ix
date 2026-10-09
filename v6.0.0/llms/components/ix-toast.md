# ix-toast

> Transient notification message that appears temporarily.

- Web component: `<ix-toast>`
- React/Vue: `IxToast` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-toast>` (`IxModule` from `@siemens/ix-angular` or `IxToast` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/toast/guide.md

## Figma IDs

- None

## Properties

- `ariaLabelCloseIconButton`; attr: `aria-label-close-icon-button`; type: `string | undefined`; default: `'Close toast'` - ARIA label for the close icon button Will be set as aria-label on the nested HTML button element
- `autoCloseDelay`; attr: `auto-close-delay`; type: `number`; default: `5000` - Autoclose title after delay
- `hideIcon`; attr: `hide-icon`; type: `boolean`; default: `false` - Allows to hide the icon in the toast.
- `icon`; attr: `icon`; type: `string | undefined` - Icon of toast
- `iconColor`; attr: `icon-color`; type: `string | undefined` - Icon color as a CSS custom property name, for example `--si-sys-color-text-primary`.
- `preventAutoClose`; attr: `prevent-auto-close`; type: `boolean`; default: `false` - Autoclose behavior
- `toastTitle`; attr: `toast-title`; type: `string | undefined` - Toast title
- `type`; attr: `type`; type: `"error" | "info" | "success" | "warning"`; default: `'info'` - Toast type

## Events

- `closeToast` - Toast closed

## Methods

- `isPaused() => Promise<boolean>` - Returns whether the toast is currently paused (auto-close is paused).
- `pause() => Promise<void>` - Pause the toast's auto-close progress bar and timer.
- `resume() => Promise<void>` - Resume the toast's auto-close progress bar and timer if previously paused.

## Slots

- `` - Toast message content.
- `action` - Toast action content.

## Dependencies

- Renders: `ix-icon-button`, `ix-typography`
- Rendered by: `ix-toast-container`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- None

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

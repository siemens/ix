# ix-badge

> Overlay indicator for counts, labels, dots, and status icons. **Attached** (default slot has content): the indicator is decorative. When `label` is set, that text is exposed on the anchor via `aria-describedby`. Host `role` / `aria-*` are discarded so the anchor owns the accessible name. **Standalone** (empty default slot): author `role` / `aria-*` stay on the host. For `dot` and `status-icon`, provide a host `aria-label` and a naming role (for example `role="img"`, or `role="status"` / `role="alert"` for a live region). Override max-width with `--ix-badge-max-width`.

- Web component: `<ix-badge>`
- React/Vue: `IxBadge` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-badge>` (`IxModule` from `@siemens/ix-angular` or `IxBadge` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/badge/guide.md

## Figma IDs

- 138424:114072

## Properties

- `alignLeft`; attr: `align-left`; type: `boolean`; default: `false` - Left-align label content. Only has an effect when **type** is `label`.
- `ariaLabelIcon`; attr: `aria-label-icon`; type: `string | undefined` - Accessible name for the leading icon. When unset, the icon is decorative if **label** provides visible text. Only has an effect when **type** is `label`.
- `background`; attr: `background`; type: `string | undefined` - Custom background or border color. Only has an effect when **variant** is `custom`.
- `badgeColor`; attr: `badge-color`; type: `string | undefined` - Custom text color. Only has an effect when **variant** is `custom`.
- `border`; attr: `border`; type: `boolean`; default: `false` - Add a high-contrast border on filled badges. Ignored when **outline** is `true` or **type** is `status-icon`.
- `enableAnimation`; attr: `enable-animation`; type: `boolean`; default: `false` - Play the attention pulse animation. Override duration with `--ix-badge-animation-duration` (default `2s`).
- `icon`; attr: `icon`; type: `string | undefined` - Leading icon name. Only has an effect when **type** is `label`.
- `label`; attr: `label`; type: `string | undefined` - Visible text or count. Required for `label` and `counter`. Omit for `dot` and `status-icon`. Counters accept integers only (decimals truncated); values above 99 render as `99+`.
- `offsetX`; attr: `offset-x`; type: `number`; default: `0` - Extra horizontal offset in pixels. Only has an effect when attached. Added to the type default.
- `offsetY`; attr: `offset-y`; type: `number`; default: `0` - Extra vertical offset in pixels. Only has an effect when attached. Added to the type default.
- `outline`; attr: `outline`; type: `boolean`; default: `false` - Show the badge in outline style.
- `position`; attr: `position`; type: `"bottom-after" | "top-after"`; default: `'top-after'` - Position relative to the slotted anchor. Only has an effect when attached.
- `tooltipText`; attr: `tooltip-text`; type: `boolean | string`; default: `false` - Display a tooltip when the badge is standalone. By default, no tooltip is displayed. Add the attribute to use the badge label (or host `aria-label`) as the tooltip, or pass a string for custom text. Ignored when the badge is attached to an anchor.
- `type`; attr: `type`; type: `"counter" | "dot" | "label" | "status-icon"`; default: `'counter'` - Badge type (`counter`, `label`, `dot`, or `status-icon`).
- `variant`; attr: `variant`; type: `"alarm" | "critical" | "custom" | "error" | "info" | "neutral" | "primary" | "success" | "warning"`; default: `'primary'` - Color variant. For `status-icon`, unsupported values fall back to `info`. Use `error` only with `status-icon` (other types map it to `alarm`).

## Events

- None

## Methods

- None

## Slots

- `` - Anchor element to which the badge is attached. Leave empty to render the badge standalone.
- `description` - Screen-reader description associated with the attached anchor.

## Dependencies

- Renders: `ix-tooltip`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- badge (angular, angular-standalone, html, react, vue)
- badge-counter (angular, angular-standalone, html, react, vue)
- badge-dot (angular, angular-standalone, html, react, vue)
- badge-label (angular, angular-standalone, html, react, vue)
- badge-status-icon (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

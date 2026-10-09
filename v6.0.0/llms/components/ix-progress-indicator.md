# ix-progress-indicator

> Shows progress through a sequence of steps.

- Web component: `<ix-progress-indicator>`
- React/Vue: `IxProgressIndicator` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-progress-indicator>` (`IxModule` from `@siemens/ix-angular` or `IxProgressIndicator` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/progress-indicator/guide.md

## Figma IDs

- 69677:5549

## Properties

- `helperText`; attr: `helper-text`; type: `string | undefined` - The helper text for the progress indicator.
- `label`; attr: `label`; type: `string | undefined` - The label for the progress indicator.
- `max`; attr: `max`; type: `number`; default: `100` - The maximum value of the progress indicator.
- `min`; attr: `min`; type: `number`; default: `0` - The minimum value of the progress indicator.
- `showTextAsTooltip`; attr: `show-text-as-tooltip`; type: `boolean`; default: `false` - Show the helper text as a tooltip
- `size`; attr: `size`; type: `"lg" | "md" | "sm" | "xl" | "xs"`; default: `'md'` - Size of the progress indicator. For **circular**, diameters are: - **xs**: 16px. - **sm**: 20px. - **md**: 32px (default). - **lg**: 48px. - **xl**: 64px.
- `status`; attr: `status`; type: `"default" | "error" | "info" | "paused" | "success" | "warning"`; default: `'default'` - The state of the progress indicator. This is used to indicate the current state of the progress indicator.
- `textAlignment`; attr: `text-alignment`; type: `"center" | "left" | "right"`; default: `'left'` - The text alignment for the helper text. Can be 'left', 'center', or 'right'.
- `type`; attr: `type`; type: `"circular" | "linear"`; default: `'linear'` - The type of progress indicator to use.
- `value`; attr: `value`; type: `number`; default: `0` - The value of the progress indicator.

## Events

- None

## Methods

- None

## Slots

- `` - Progress indicator label.
- `helper-text` - Helper text displayed below the progress indicator.

## Dependencies

- Renders: `ix-tooltip`, `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- progress-indicator (angular, angular-standalone, html, react, vue)
- progress-indicator-circular (angular, angular-standalone, html, react, vue)
- progress-indicator-circular-sizes (angular, angular-standalone, html, react, vue)
- progress-indicator-circular-status (angular, angular-standalone, html, react, vue)
- progress-indicator-linear-sizes (angular, angular-standalone, html, react, vue)
- progress-indicator-linear-status (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

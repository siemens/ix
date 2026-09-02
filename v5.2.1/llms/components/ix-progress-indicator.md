# ix-progress-indicator

> Shows progress through a sequence of steps.

## Documentation

- https://ix.siemens.io//docs/components/progress-indicator/guide.md

## Figma IDs

- 69677:5549

## Related examples

Example file links are relative to this Markdown file.

- progress-indicator
  - angular:
    - `angular/progress-indicator.css`: [file](../../examples/angular/progress-indicator.css)
    - `angular/progress-indicator.html`: [file](../../examples/angular/progress-indicator.html)
    - `angular/progress-indicator.ts`: [file](../../examples/angular/progress-indicator.ts)
  - angular-standalone:
    - `angular-standalone/progress-indicator.css`: [file](../../examples/angular-standalone/progress-indicator.css)
    - `angular-standalone/progress-indicator.html`: [file](../../examples/angular-standalone/progress-indicator.html)
    - `angular-standalone/progress-indicator.ts`: [file](../../examples/angular-standalone/progress-indicator.ts)
  - html:
    - `html/progress-indicator.css`: [file](../../examples/html/progress-indicator.css)
    - `html/progress-indicator.html`: [file](../../examples/html/progress-indicator.html)
  - react:
    - `react/progress-indicator.scoped.css`: [file](../../examples/react/progress-indicator.scoped.css)
    - `react/progress-indicator.tsx`: [file](../../examples/react/progress-indicator.tsx)
  - vue:
    - `vue/progress-indicator.css`: [file](../../examples/vue/progress-indicator.css)
    - `vue/progress-indicator.vue`: [file](../../examples/vue/progress-indicator.vue)
- progress-indicator-circular
  - angular:
    - `angular/progress-indicator-circular.html`: [file](../../examples/angular/progress-indicator-circular.html)
    - `angular/progress-indicator-circular.ts`: [file](../../examples/angular/progress-indicator-circular.ts)
  - angular-standalone:
    - `angular-standalone/progress-indicator-circular.html`: [file](../../examples/angular-standalone/progress-indicator-circular.html)
    - `angular-standalone/progress-indicator-circular.ts`: [file](../../examples/angular-standalone/progress-indicator-circular.ts)
  - html:
    - `html/progress-indicator-circular.html`: [file](../../examples/html/progress-indicator-circular.html)
  - react:
    - `react/progress-indicator-circular.tsx`: [file](../../examples/react/progress-indicator-circular.tsx)
  - vue:
    - `vue/progress-indicator-circular.vue`: [file](../../examples/vue/progress-indicator-circular.vue)
- progress-indicator-circular-sizes
  - angular:
    - `angular/progress-indicator-circular-sizes.html`: [file](../../examples/angular/progress-indicator-circular-sizes.html)
    - `angular/progress-indicator-circular-sizes.ts`: [file](../../examples/angular/progress-indicator-circular-sizes.ts)
  - angular-standalone:
    - `angular-standalone/progress-indicator-circular-sizes.html`: [file](../../examples/angular-standalone/progress-indicator-circular-sizes.html)
    - `angular-standalone/progress-indicator-circular-sizes.ts`: [file](../../examples/angular-standalone/progress-indicator-circular-sizes.ts)
  - html:
    - `html/progress-indicator-circular-sizes.html`: [file](../../examples/html/progress-indicator-circular-sizes.html)
  - react:
    - `react/progress-indicator-circular-sizes.tsx`: [file](../../examples/react/progress-indicator-circular-sizes.tsx)
  - vue:
    - `vue/progress-indicator-circular-sizes.vue`: [file](../../examples/vue/progress-indicator-circular-sizes.vue)
- progress-indicator-circular-status
  - angular:
    - `angular/progress-indicator-circular-status.html`: [file](../../examples/angular/progress-indicator-circular-status.html)
    - `angular/progress-indicator-circular-status.ts`: [file](../../examples/angular/progress-indicator-circular-status.ts)
  - angular-standalone:
    - `angular-standalone/progress-indicator-circular-status.html`: [file](../../examples/angular-standalone/progress-indicator-circular-status.html)
    - `angular-standalone/progress-indicator-circular-status.ts`: [file](../../examples/angular-standalone/progress-indicator-circular-status.ts)
  - html:
    - `html/progress-indicator-circular-status.html`: [file](../../examples/html/progress-indicator-circular-status.html)
  - react:
    - `react/progress-indicator-circular-status.tsx`: [file](../../examples/react/progress-indicator-circular-status.tsx)
  - vue:
    - `vue/progress-indicator-circular-status.vue`: [file](../../examples/vue/progress-indicator-circular-status.vue)
- progress-indicator-linear-sizes
  - angular:
    - `angular/progress-indicator-linear-sizes.html`: [file](../../examples/angular/progress-indicator-linear-sizes.html)
    - `angular/progress-indicator-linear-sizes.ts`: [file](../../examples/angular/progress-indicator-linear-sizes.ts)
  - angular-standalone:
    - `angular-standalone/progress-indicator-linear-sizes.html`: [file](../../examples/angular-standalone/progress-indicator-linear-sizes.html)
    - `angular-standalone/progress-indicator-linear-sizes.ts`: [file](../../examples/angular-standalone/progress-indicator-linear-sizes.ts)
  - html:
    - `html/progress-indicator-linear-sizes.html`: [file](../../examples/html/progress-indicator-linear-sizes.html)
  - react:
    - `react/progress-indicator-linear-sizes.tsx`: [file](../../examples/react/progress-indicator-linear-sizes.tsx)
  - vue:
    - `vue/progress-indicator-linear-sizes.vue`: [file](../../examples/vue/progress-indicator-linear-sizes.vue)
- progress-indicator-linear-status
  - angular:
    - `angular/progress-indicator-linear-status.html`: [file](../../examples/angular/progress-indicator-linear-status.html)
    - `angular/progress-indicator-linear-status.ts`: [file](../../examples/angular/progress-indicator-linear-status.ts)
  - angular-standalone:
    - `angular-standalone/progress-indicator-linear-status.html`: [file](../../examples/angular-standalone/progress-indicator-linear-status.html)
    - `angular-standalone/progress-indicator-linear-status.ts`: [file](../../examples/angular-standalone/progress-indicator-linear-status.ts)
  - html:
    - `html/progress-indicator-linear-status.html`: [file](../../examples/html/progress-indicator-linear-status.html)
  - react:
    - `react/progress-indicator-linear-status.tsx`: [file](../../examples/react/progress-indicator-linear-status.tsx)
  - vue:
    - `vue/progress-indicator-linear-status.vue`: [file](../../examples/vue/progress-indicator-linear-status.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `helperText`; attr: `helper-text`; type: `string | undefined` - The helper text for the progress indicator.
- `label`; attr: `label`; type: `string | undefined` - The label for the progress indicator.
- `max`; attr: `max`; type: `number`; default: `100` - The maximum value of the progress indicator.
- `min`; attr: `min`; type: `number`; default: `0` - The minimum value of the progress indicator.
- `showTextAsTooltip`; attr: `show-text-as-tooltip`; type: `boolean`; default: `false` - Show the helper text as a tooltip
- `size`; attr: `size`; type: `"lg" | "md" | "sm" | "xl" | "xs"`; default: `'md'` - The size of the progress indicator.
- `status`; attr: `status`; type: `"default" | "error" | "info" | "paused" | "success" | "warning"`; default: `'default'` - The state of the progress indicator. This is used to indicate the current state of the progress indicator.
- `textAlignment`; attr: `text-alignment`; type: `"center" | "left" | "right"`; default: `'left'` - The text alignment for the helper text. Can be 'left', 'center', or 'right'.
- `type`; attr: `type`; type: `"circular" | "linear"`; default: `'linear'` - The type of progress indicator to use.
- `value`; attr: `value`; type: `number`; default: `0` - The value of the progress indicator.

## Events

- None

## Slots

- `` - Progress indicator label.
- `helper-text` - Helper text displayed below the progress indicator.

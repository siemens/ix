# ix-slider

> Lets users choose a numeric value by dragging along a track.

## Documentation

- None

## Figma IDs

- 50042:20986

## Related examples

Example file links are relative to this Markdown file.

- slider
  - angular:
    - `angular/slider.css`: [file](../../examples/angular/slider.css)
    - `angular/slider.html`: [file](../../examples/angular/slider.html)
    - `angular/slider.ts`: [file](../../examples/angular/slider.ts)
  - angular-standalone:
    - `angular-standalone/slider.css`: [file](../../examples/angular-standalone/slider.css)
    - `angular-standalone/slider.html`: [file](../../examples/angular-standalone/slider.html)
    - `angular-standalone/slider.ts`: [file](../../examples/angular-standalone/slider.ts)
  - html:
    - `html/slider.css`: [file](../../examples/html/slider.css)
    - `html/slider.html`: [file](../../examples/html/slider.html)
  - react:
    - `react/slider.scoped.css`: [file](../../examples/react/slider.scoped.css)
    - `react/slider.tsx`: [file](../../examples/react/slider.tsx)
  - vue:
    - `vue/slider.css`: [file](../../examples/vue/slider.css)
    - `vue/slider.vue`: [file](../../examples/vue/slider.vue)
- slider-validation
  - angular:
    - `angular/slider-validation.html`: [file](../../examples/angular/slider-validation.html)
    - `angular/slider-validation.ts`: [file](../../examples/angular/slider-validation.ts)
  - angular-standalone:
    - `angular-standalone/slider-validation.html`: [file](../../examples/angular-standalone/slider-validation.html)
    - `angular-standalone/slider-validation.ts`: [file](../../examples/angular-standalone/slider-validation.ts)
  - html:
    - `html/slider-validation.html`: [file](../../examples/html/slider-validation.html)
  - react:
    - `react/slider-validation.tsx`: [file](../../examples/react/slider-validation.tsx)
  - vue:
    - `vue/slider-validation.vue`: [file](../../examples/vue/slider-validation.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Show control as disabled
- `helperText`; attr: `helper-text`; type: `string | undefined` - Show text below the field component
- `infoText`; attr: `info-text`; type: `string | undefined` - Info text for the field component
- `invalidText`; attr: `invalid-text`; type: `string | undefined` - Error text for the field component
- `label`; attr: `label`; type: `string | undefined` - Label for the field component
- `marker`; type: `number[] | undefined` - Define tick marker on the slider. Marker has to be within slider min/max
- `max`; attr: `max`; type: `number`; default: `100` - Maximum slider value
- `min`; attr: `min`; type: `number`; default: `0` - Minimum slider value
- `showTextAsTooltip`; attr: `show-text-as-tooltip`; type: `boolean`; default: `false` - Show helper, info, warning, error and valid text as tooltip
- `step`; attr: `step`; type: `number`; default: `1` - Legal number intervals {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step}
- `trace`; attr: `trace`; type: `boolean`; default: `false` - Show a trace line
- `traceReference`; attr: `trace-reference`; type: `number`; default: `0` - Define the start point of the trace line
- `validText`; attr: `valid-text`; type: `string | undefined` - Valid text for the field component
- `value`; attr: `value`; type: `number`; default: `0` - Current value of the slider
- `warningText`; attr: `warning-text`; type: `string | undefined` - Warning text for the field component

## Events

- `valueChange` - Will emit the value when it changes

## Slots

- `label-end` - Element will be displayed at the end of the slider
- `label-start` - Element will be displayed at the start of the slider

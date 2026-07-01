# ix-slider

> Lets users choose a numeric value by dragging along a track.

## Documentation

- None

## Figma IDs

- 50042:20986

## Related examples

Example source links are relative to this Markdown file.

- slider
  - angular:
    - `angular/slider.css`: [source](../../examples/angular-examples/src/preview-examples/slider.css)
    - `angular/slider.html`: [source](../../examples/angular-examples/src/preview-examples/slider.html)
    - `angular/slider.ts`: [source](../../examples/angular-examples/src/preview-examples/slider.ts)
  - angular-standalone:
    - `angular-standalone/slider.css`: [source](../../examples/angular-standalone-examples/src/preview-examples/slider.css)
    - `angular-standalone/slider.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/slider.html)
    - `angular-standalone/slider.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/slider.ts)
  - html:
    - `html/slider.css`: [source](../../examples/html-examples/src/preview-examples/slider.css)
    - `html/slider.html`: [source](../../examples/html-examples/src/preview-examples/slider.html)
  - react:
    - `react/slider.scoped.css`: [source](../../examples/react-examples/src/preview-examples/slider.scoped.css)
    - `react/slider.tsx`: [source](../../examples/react-examples/src/preview-examples/slider.tsx)
  - vue:
    - `vue/slider.css`: [source](../../examples/vue-examples/src/preview-examples/slider.css)
    - `vue/slider.vue`: [source](../../examples/vue-examples/src/preview-examples/slider.vue)
- slider-error
  - angular:
    - `angular/slider-error.html`: [source](../../examples/angular-examples/src/preview-examples/slider-error.html)
    - `angular/slider-error.ts`: [source](../../examples/angular-examples/src/preview-examples/slider-error.ts)
  - angular-standalone:
    - `angular-standalone/slider-error.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/slider-error.html)
    - `angular-standalone/slider-error.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/slider-error.ts)
  - html:
    - `html/slider-error.html`: [source](../../examples/html-examples/src/preview-examples/slider-error.html)
  - react:
    - `react/slider-error.tsx`: [source](../../examples/react-examples/src/preview-examples/slider-error.tsx)
  - vue:
    - `vue/slider-error.vue`: [source](../../examples/vue-examples/src/preview-examples/slider-error.vue)
- slider-marker
  - angular:
    - `angular/slider-marker.html`: [source](../../examples/angular-examples/src/preview-examples/slider-marker.html)
    - `angular/slider-marker.ts`: [source](../../examples/angular-examples/src/preview-examples/slider-marker.ts)
  - angular-standalone:
    - `angular-standalone/slider-marker.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/slider-marker.html)
    - `angular-standalone/slider-marker.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/slider-marker.ts)
  - html:
    - `html/slider-marker.html`: [source](../../examples/html-examples/src/preview-examples/slider-marker.html)
  - react:
    - `react/slider-marker.tsx`: [source](../../examples/react-examples/src/preview-examples/slider-marker.tsx)
  - vue:
    - `vue/slider-marker.vue`: [source](../../examples/vue-examples/src/preview-examples/slider-marker.vue)
- slider-trace
  - angular:
    - `angular/slider-trace.html`: [source](../../examples/angular-examples/src/preview-examples/slider-trace.html)
    - `angular/slider-trace.ts`: [source](../../examples/angular-examples/src/preview-examples/slider-trace.ts)
  - angular-standalone:
    - `angular-standalone/slider-trace.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/slider-trace.html)
    - `angular-standalone/slider-trace.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/slider-trace.ts)
  - html:
    - `html/slider-trace.html`: [source](../../examples/html-examples/src/preview-examples/slider-trace.html)
  - react:
    - `react/slider-trace.tsx`: [source](../../examples/react-examples/src/preview-examples/slider-trace.tsx)
  - vue:
    - `vue/slider-trace.vue`: [source](../../examples/vue-examples/src/preview-examples/slider-trace.vue)
- slider-validation
  - angular:
    - `angular/slider-validation.html`: [source](../../examples/angular-examples/src/preview-examples/slider-validation.html)
    - `angular/slider-validation.ts`: [source](../../examples/angular-examples/src/preview-examples/slider-validation.ts)
  - angular-standalone:
    - `angular-standalone/slider-validation.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/slider-validation.html)
    - `angular-standalone/slider-validation.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/slider-validation.ts)
  - html:
    - `html/slider-validation.html`: [source](../../examples/html-examples/src/preview-examples/slider-validation.html)
  - react:
    - `react/slider-validation.tsx`: [source](../../examples/react-examples/src/preview-examples/slider-validation.tsx)
  - vue:
    - `vue/slider-validation.vue`: [source](../../examples/vue-examples/src/preview-examples/slider-validation.vue)

## Related blocks

- unavailable (not present in registry JSON)

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

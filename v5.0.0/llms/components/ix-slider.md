# ix-slider

> No component summary available.

## Documentation

- None

## Figma IDs

- 50042:20986

## Related examples

- slider
- slider-error
- slider-marker
- slider-trace
- slider-validation

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

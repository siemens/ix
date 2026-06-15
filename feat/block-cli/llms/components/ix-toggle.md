# ix-toggle

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/toggle/guide.md

## Figma IDs

- 43875:36542

## Related examples

- toggle
- toggle-checked
- toggle-custom-label
- toggle-disabled
- toggle-indeterminate

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `checked`; attr: `checked`; type: `boolean`; default: `false` - Whether the slide-toggle element is checked or not.
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Whether the slide-toggle element is disabled or not.
- `hideText`; attr: `hide-text`; type: `boolean`; default: `false` - Hide `on` and `off` text
- `indeterminate`; attr: `indeterminate`; type: `boolean`; default: `false` - If true the control is in indeterminate state
- `name`; attr: `name`; type: `string | undefined` - Name of the checkbox component
- `required`; attr: `required`; type: `boolean`; default: `false` - Required state of the checkbox component. If true, checkbox needs to be checked to be valid
- `textIndeterminate`; attr: `text-indeterminate`; type: `string`; default: `'Mixed'` - Text for indeterminate state
- `textOff`; attr: `text-off`; type: `string`; default: `'Off'` - Text for off state
- `textOn`; attr: `text-on`; type: `string`; default: `'On'` - Text for on state
- `value`; attr: `value`; type: `string`; default: `'on'` - Value of the checkbox component

## Events

- `checkedChange` - An event will be dispatched each time the slide-toggle changes its value.
- `ixBlur` - An event will be dispatched each time the toggle is blurred.

## Slots

- None

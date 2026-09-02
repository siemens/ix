# ix-radio-group

> Groups related radio buttons so only one can be selected.

## Documentation

- https://ix.siemens.io//docs/components/radio/guide.md

## Figma IDs

- 42365:44973

## Related examples

Example file links are relative to this Markdown file.

- radio-group
  - angular:
    - `angular/radio-group.html`: [file](../../examples/angular/radio-group.html)
    - `angular/radio-group.ts`: [file](../../examples/angular/radio-group.ts)
  - angular-standalone:
    - `angular-standalone/radio-group.html`: [file](../../examples/angular-standalone/radio-group.html)
    - `angular-standalone/radio-group.ts`: [file](../../examples/angular-standalone/radio-group.ts)
  - html:
    - `html/radio-group.html`: [file](../../examples/html/radio-group.html)
  - react:
    - `react/radio-group.tsx`: [file](../../examples/react/radio-group.tsx)
  - vue:
    - `vue/radio-group.vue`: [file](../../examples/vue/radio-group.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `direction`; attr: `direction`; type: `"column" | "row"`; default: `'column'` - Alignment of the radio buttons in the group
- `helperText`; attr: `helper-text`; type: `string | undefined` - Show text below the field component
- `infoText`; attr: `info-text`; type: `string | undefined` - Info text for the field component
- `invalidText`; attr: `invalid-text`; type: `string | undefined` - Error text for the field component
- `label`; attr: `label`; type: `string | undefined` - Label for the field component
- `showTextAsTooltip`; attr: `show-text-as-tooltip`; type: `boolean | undefined` - Show helper, info, warning, error and valid text as tooltip
- `validText`; attr: `valid-text`; type: `string | undefined` - Valid text for the field component
- `value`; attr: `value`; type: `string | undefined` - Value of the radiobutton group component
- `warningText`; attr: `warning-text`; type: `string | undefined` - Warning text for the field component

## Events

- `valueChange` - Event emitted when the value of the radiobutton group changes

## Slots

- `` - Radio components.

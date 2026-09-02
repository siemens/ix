# ix-radio

> Lets users select a single option from a set.

## Documentation

- https://ix.siemens.io//docs/components/radio/guide.md

## Figma IDs

- 42365:44481

## Related examples

Example file links are relative to this Markdown file.

- radio
  - angular:
    - `angular/radio.html`: [file](../../examples/angular/radio.html)
    - `angular/radio.ts`: [file](../../examples/angular/radio.ts)
  - angular-standalone:
    - `angular-standalone/radio.html`: [file](../../examples/angular-standalone/radio.html)
    - `angular-standalone/radio.ts`: [file](../../examples/angular-standalone/radio.ts)
  - html:
    - `html/radio.html`: [file](../../examples/html/radio.html)
  - react:
    - `react/radio.tsx`: [file](../../examples/react/radio.tsx)
  - vue:
    - `vue/radio.vue`: [file](../../examples/vue/radio.vue)
- radio-disabled
  - angular:
    - `angular/radio-disabled.html`: [file](../../examples/angular/radio-disabled.html)
    - `angular/radio-disabled.ts`: [file](../../examples/angular/radio-disabled.ts)
  - angular-standalone:
    - `angular-standalone/radio-disabled.html`: [file](../../examples/angular-standalone/radio-disabled.html)
    - `angular-standalone/radio-disabled.ts`: [file](../../examples/angular-standalone/radio-disabled.ts)
  - html:
    - `html/radio-disabled.html`: [file](../../examples/html/radio-disabled.html)
  - react:
    - `react/radio-disabled.tsx`: [file](../../examples/react/radio-disabled.tsx)
  - vue:
    - `vue/radio-disabled.vue`: [file](../../examples/vue/radio-disabled.vue)
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

- `checked`; attr: `checked`; type: `boolean`; default: `false` - Checked state of the radio component
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disabled state of the radio component
- `label`; attr: `label`; type: `string | undefined` - Label for the radio component
- `name`; attr: `name`; type: `string | undefined` - Name of the radio component
- `required`; attr: `required`; type: `boolean`; default: `false` - Requires the radio component and its group to be checked for the form to be submittable
- `value`; attr: `value`; type: `string | undefined` - Value of the radio component

## Events

- `checkedChange` - Event emitted when the checked state of the radio changes
- `ixBlur` - Event emitted when the radio is blurred
- `valueChange` - Event emitted when the value of the radio changes

## Slots

- `` - Radio label.

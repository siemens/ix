# ix-toggle

> Switch control for toggling a single setting on or off.

## Documentation

- https://ix.siemens.io//docs/components/toggle/guide.md

## Figma IDs

- 43875:36542

## Related examples

Example file links are relative to this Markdown file.

- toggle
  - angular:
    - `angular/toggle.ts`: [file](../../examples/angular/toggle.ts)
  - angular-standalone:
    - `angular-standalone/toggle.ts`: [file](../../examples/angular-standalone/toggle.ts)
  - html:
    - `html/toggle.html`: [file](../../examples/html/toggle.html)
  - react:
    - `react/toggle.tsx`: [file](../../examples/react/toggle.tsx)
  - vue:
    - `vue/toggle.vue`: [file](../../examples/vue/toggle.vue)
- toggle-checked
  - angular:
    - `angular/toggle-checked.ts`: [file](../../examples/angular/toggle-checked.ts)
  - angular-standalone:
    - `angular-standalone/toggle-checked.ts`: [file](../../examples/angular-standalone/toggle-checked.ts)
  - html:
    - `html/toggle-checked.html`: [file](../../examples/html/toggle-checked.html)
  - react:
    - `react/toggle-checked.tsx`: [file](../../examples/react/toggle-checked.tsx)
  - vue:
    - `vue/toggle-checked.vue`: [file](../../examples/vue/toggle-checked.vue)
- toggle-custom-label
  - angular:
    - `angular/toggle-custom-label.ts`: [file](../../examples/angular/toggle-custom-label.ts)
  - angular-standalone:
    - `angular-standalone/toggle-custom-label.ts`: [file](../../examples/angular-standalone/toggle-custom-label.ts)
  - html:
    - `html/toggle-custom-label.html`: [file](../../examples/html/toggle-custom-label.html)
  - react:
    - `react/toggle-custom-label.tsx`: [file](../../examples/react/toggle-custom-label.tsx)
  - vue:
    - `vue/toggle-custom-label.vue`: [file](../../examples/vue/toggle-custom-label.vue)
- toggle-disabled
  - angular:
    - `angular/toggle-disabled.ts`: [file](../../examples/angular/toggle-disabled.ts)
  - angular-standalone:
    - `angular-standalone/toggle-disabled.ts`: [file](../../examples/angular-standalone/toggle-disabled.ts)
  - html:
    - `html/toggle-disabled.html`: [file](../../examples/html/toggle-disabled.html)
  - react:
    - `react/toggle-disabled.tsx`: [file](../../examples/react/toggle-disabled.tsx)
  - vue:
    - `vue/toggle-disabled.vue`: [file](../../examples/vue/toggle-disabled.vue)
- toggle-indeterminate
  - angular:
    - `angular/toggle-indeterminate.ts`: [file](../../examples/angular/toggle-indeterminate.ts)
  - angular-standalone:
    - `angular-standalone/toggle-indeterminate.ts`: [file](../../examples/angular-standalone/toggle-indeterminate.ts)
  - html:
    - `html/toggle-indeterminate.html`: [file](../../examples/html/toggle-indeterminate.html)
  - react:
    - `react/toggle-indeterminate.tsx`: [file](../../examples/react/toggle-indeterminate.tsx)
  - vue:
    - `vue/toggle-indeterminate.vue`: [file](../../examples/vue/toggle-indeterminate.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

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

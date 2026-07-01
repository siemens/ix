# ix-radio

> Lets users select a single option from a set.

## Documentation

- https://ix.siemens.io//docs/components/radio/guide.md

## Figma IDs

- 42365:44481

## Related examples

Example source links are relative to this Markdown file.

- application-breakpoints
  - angular:
    - `angular/application-breakpoints.html`: [source](../../examples/angular-examples/src/preview-examples/application-breakpoints.html)
    - `angular/application-breakpoints.ts`: [source](../../examples/angular-examples/src/preview-examples/application-breakpoints.ts)
  - angular-standalone:
    - `angular-standalone/application-breakpoints.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/application-breakpoints.html)
    - `angular-standalone/application-breakpoints.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/application-breakpoints.ts)
  - html:
    - `html/application-breakpoints.html`: [source](../../examples/html-examples/src/preview-examples/application-breakpoints.html)
  - react:
    - `react/application-breakpoints.tsx`: [source](../../examples/react-examples/src/preview-examples/application-breakpoints.tsx)
  - vue:
    - `vue/application-breakpoints.vue`: [source](../../examples/vue-examples/src/preview-examples/application-breakpoints.vue)
- radio
  - angular:
    - `angular/radio.html`: [source](../../examples/angular-examples/src/preview-examples/radio.html)
    - `angular/radio.ts`: [source](../../examples/angular-examples/src/preview-examples/radio.ts)
  - angular-standalone:
    - `angular-standalone/radio.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/radio.html)
    - `angular-standalone/radio.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/radio.ts)
  - html:
    - `html/radio.html`: [source](../../examples/html-examples/src/preview-examples/radio.html)
  - react:
    - `react/radio.tsx`: [source](../../examples/react-examples/src/preview-examples/radio.tsx)
  - vue:
    - `vue/radio.vue`: [source](../../examples/vue-examples/src/preview-examples/radio.vue)
- radio-disabled
  - angular:
    - `angular/radio-disabled.html`: [source](../../examples/angular-examples/src/preview-examples/radio-disabled.html)
    - `angular/radio-disabled.ts`: [source](../../examples/angular-examples/src/preview-examples/radio-disabled.ts)
  - angular-standalone:
    - `angular-standalone/radio-disabled.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/radio-disabled.html)
    - `angular-standalone/radio-disabled.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/radio-disabled.ts)
  - html:
    - `html/radio-disabled.html`: [source](../../examples/html-examples/src/preview-examples/radio-disabled.html)
  - react:
    - `react/radio-disabled.tsx`: [source](../../examples/react-examples/src/preview-examples/radio-disabled.tsx)
  - vue:
    - `vue/radio-disabled.vue`: [source](../../examples/vue-examples/src/preview-examples/radio-disabled.vue)
- radio-group
  - angular:
    - `angular/radio-group.html`: [source](../../examples/angular-examples/src/preview-examples/radio-group.html)
    - `angular/radio-group.ts`: [source](../../examples/angular-examples/src/preview-examples/radio-group.ts)
  - angular-standalone:
    - `angular-standalone/radio-group.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/radio-group.html)
    - `angular-standalone/radio-group.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/radio-group.ts)
  - html:
    - `html/radio-group.html`: [source](../../examples/html-examples/src/preview-examples/radio-group.html)
  - react:
    - `react/radio-group.tsx`: [source](../../examples/react-examples/src/preview-examples/radio-group.tsx)
  - vue:
    - `vue/radio-group.vue`: [source](../../examples/vue-examples/src/preview-examples/radio-group.vue)
- radio-validation
  - angular:
    - `angular/radio-validation.html`: [source](../../examples/angular-examples/src/preview-examples/radio-validation.html)
    - `angular/radio-validation.ts`: [source](../../examples/angular-examples/src/preview-examples/radio-validation.ts)
  - angular-standalone:
    - `angular-standalone/radio-validation.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/radio-validation.html)
    - `angular-standalone/radio-validation.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/radio-validation.ts)
  - html:
    - `html/radio-validation.html`: [source](../../examples/html-examples/src/preview-examples/radio-validation.html)
  - react:
    - `react/radio-validation.tsx`: [source](../../examples/react-examples/src/preview-examples/radio-validation.tsx)
  - vue:
    - `vue/radio-validation.vue`: [source](../../examples/vue-examples/src/preview-examples/radio-validation.vue)

## Related blocks

- unavailable (not present in registry JSON)

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

- None

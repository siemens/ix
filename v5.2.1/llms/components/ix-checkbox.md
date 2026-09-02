# ix-checkbox

> Lets users select an option or toggle a single value on or off.

## Documentation

- https://ix.siemens.io//docs/components/checkbox/guide.md

## Figma IDs

- 42365:47165

## Related examples

Example file links are relative to this Markdown file.

- form-checkbox
  - angular:
    - `angular/form-checkbox.html`: [file](../../examples/angular/form-checkbox.html)
    - `angular/form-checkbox.ts`: [file](../../examples/angular/form-checkbox.ts)
  - angular-standalone:
    - `angular-standalone/form-checkbox.html`: [file](../../examples/angular-standalone/form-checkbox.html)
    - `angular-standalone/form-checkbox.ts`: [file](../../examples/angular-standalone/form-checkbox.ts)
  - html:
    - `html/form-checkbox.html`: [file](../../examples/html/form-checkbox.html)
  - react:
    - `react/form-checkbox.tsx`: [file](../../examples/react/form-checkbox.tsx)
  - vue:
    - `vue/form-checkbox.vue`: [file](../../examples/vue/form-checkbox.vue)
- form-checkbox-disabled
  - angular:
    - `angular/form-checkbox-disabled.html`: [file](../../examples/angular/form-checkbox-disabled.html)
    - `angular/form-checkbox-disabled.ts`: [file](../../examples/angular/form-checkbox-disabled.ts)
  - angular-standalone:
    - `angular-standalone/form-checkbox-disabled.html`: [file](../../examples/angular-standalone/form-checkbox-disabled.html)
    - `angular-standalone/form-checkbox-disabled.ts`: [file](../../examples/angular-standalone/form-checkbox-disabled.ts)
  - html:
    - `html/form-checkbox-disabled.html`: [file](../../examples/html/form-checkbox-disabled.html)
  - react:
    - `react/form-checkbox-disabled.tsx`: [file](../../examples/react/form-checkbox-disabled.tsx)
  - vue:
    - `vue/form-checkbox-disabled.vue`: [file](../../examples/vue/form-checkbox-disabled.vue)
- form-checkbox-group
  - angular:
    - `angular/form-checkbox-group.html`: [file](../../examples/angular/form-checkbox-group.html)
    - `angular/form-checkbox-group.ts`: [file](../../examples/angular/form-checkbox-group.ts)
  - angular-standalone:
    - `angular-standalone/form-checkbox-group.html`: [file](../../examples/angular-standalone/form-checkbox-group.html)
    - `angular-standalone/form-checkbox-group.ts`: [file](../../examples/angular-standalone/form-checkbox-group.ts)
  - html:
    - `html/form-checkbox-group.html`: [file](../../examples/html/form-checkbox-group.html)
  - react:
    - `react/form-checkbox-group.tsx`: [file](../../examples/react/form-checkbox-group.tsx)
  - vue:
    - `vue/form-checkbox-group.vue`: [file](../../examples/vue/form-checkbox-group.vue)
- form-checkbox-group-indeterminate
  - angular:
    - `angular/form-checkbox-group-indeterminate.css`: [file](../../examples/angular/form-checkbox-group-indeterminate.css)
    - `angular/form-checkbox-group-indeterminate.html`: [file](../../examples/angular/form-checkbox-group-indeterminate.html)
    - `angular/form-checkbox-group-indeterminate.ts`: [file](../../examples/angular/form-checkbox-group-indeterminate.ts)
  - angular-standalone:
    - `angular-standalone/form-checkbox-group-indeterminate.css`: [file](../../examples/angular-standalone/form-checkbox-group-indeterminate.css)
    - `angular-standalone/form-checkbox-group-indeterminate.html`: [file](../../examples/angular-standalone/form-checkbox-group-indeterminate.html)
    - `angular-standalone/form-checkbox-group-indeterminate.ts`: [file](../../examples/angular-standalone/form-checkbox-group-indeterminate.ts)
  - html:
    - `html/form-checkbox-group-indeterminate.css`: [file](../../examples/html/form-checkbox-group-indeterminate.css)
    - `html/form-checkbox-group-indeterminate.html`: [file](../../examples/html/form-checkbox-group-indeterminate.html)
  - react:
    - `react/form-checkbox-group-indeterminate.scoped.css`: [file](../../examples/react/form-checkbox-group-indeterminate.scoped.css)
    - `react/form-checkbox-group-indeterminate.tsx`: [file](../../examples/react/form-checkbox-group-indeterminate.tsx)
  - vue:
    - `vue/form-checkbox-group-indeterminate.css`: [file](../../examples/vue/form-checkbox-group-indeterminate.css)
    - `vue/form-checkbox-group-indeterminate.vue`: [file](../../examples/vue/form-checkbox-group-indeterminate.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `checked`; attr: `checked`; type: `boolean`; default: `false` - Checked state of the checkbox component
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disabled state of the checkbox component
- `indeterminate`; attr: `indeterminate`; type: `boolean`; default: `false` - Indeterminate state of the checkbox component
- `label`; attr: `label`; type: `string | undefined` - Label for the checkbox component
- `name`; attr: `name`; type: `string | undefined` - Name of the checkbox component
- `required`; attr: `required`; type: `boolean`; default: `false` - Required state of the checkbox component. If true, checkbox needs to be checked to be valid
- `value`; attr: `value`; type: `string`; default: `'on'` - Value of the checkbox component

## Events

- `checkedChange` - Event emitted when the checked state of the checkbox changes
- `ixBlur` - Event emitted when the checkbox is blurred
- `valueChange` - Event emitted when the value of the checkbox changes

## Slots

- `` - Checkbox label.

# ix-select-item

> A selectable option within a select control.

## Documentation

- https://ix.siemens.io//docs/components/select/guide.md

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- datepicker-locale
  - angular:
    - `angular/datepicker-locale.html`: [file](../../examples/angular/datepicker-locale.html)
    - `angular/datepicker-locale.ts`: [file](../../examples/angular/datepicker-locale.ts)
  - angular-standalone:
    - `angular-standalone/datepicker-locale.html`: [file](../../examples/angular-standalone/datepicker-locale.html)
    - `angular-standalone/datepicker-locale.ts`: [file](../../examples/angular-standalone/datepicker-locale.ts)
  - html:
    - `html/datepicker-locale.html`: [file](../../examples/html/datepicker-locale.html)
  - react:
    - `react/datepicker-locale.tsx`: [file](../../examples/react/datepicker-locale.tsx)
  - vue:
    - `vue/datepicker-locale.vue`: [file](../../examples/vue/datepicker-locale.vue)
- select
  - angular:
    - `angular/select.ts`: [file](../../examples/angular/select.ts)
  - angular-standalone:
    - `angular-standalone/select.ts`: [file](../../examples/angular-standalone/select.ts)
  - html:
    - `html/select.html`: [file](../../examples/html/select.html)
  - react:
    - `react/select.tsx`: [file](../../examples/react/select.tsx)
  - vue:
    - `vue/select.vue`: [file](../../examples/vue/select.vue)
- select-editable
  - angular:
    - `angular/select-editable.ts`: [file](../../examples/angular/select-editable.ts)
  - angular-standalone:
    - `angular-standalone/select-editable.ts`: [file](../../examples/angular-standalone/select-editable.ts)
  - html:
    - `html/select-editable.html`: [file](../../examples/html/select-editable.html)
  - react:
    - `react/select-editable.tsx`: [file](../../examples/react/select-editable.tsx)
  - vue:
    - `vue/select-editable.vue`: [file](../../examples/vue/select-editable.vue)
- select-multiple
  - angular:
    - `angular/select-multiple.ts`: [file](../../examples/angular/select-multiple.ts)
  - angular-standalone:
    - `angular-standalone/select-multiple.ts`: [file](../../examples/angular-standalone/select-multiple.ts)
  - html:
    - `html/select-multiple.html`: [file](../../examples/html/select-multiple.html)
  - react:
    - `react/select-multiple.tsx`: [file](../../examples/react/select-multiple.tsx)
  - vue:
    - `vue/select-multiple.vue`: [file](../../examples/vue/select-multiple.vue)
- select-validation
  - angular:
    - `angular/select-validation.html`: [file](../../examples/angular/select-validation.html)
    - `angular/select-validation.ts`: [file](../../examples/angular/select-validation.ts)
  - angular-standalone:
    - `angular-standalone/select-validation.html`: [file](../../examples/angular-standalone/select-validation.html)
    - `angular-standalone/select-validation.ts`: [file](../../examples/angular-standalone/select-validation.ts)
  - html:
    - `html/select-validation.html`: [file](../../examples/html/select-validation.html)
  - react:
    - `react/select-validation.tsx`: [file](../../examples/react/select-validation.tsx)
  - vue:
    - `vue/select-validation.vue`: [file](../../examples/vue/select-validation.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable the item. A disabled item cannot be selected via mouse or keyboard and is excluded from the focusable items of the parent ix-select.
- `label`; attr: `label`; type: `string | undefined` - Displayed name of the item
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Flag indicating whether the item is selected
- `value`; attr: `value`; type: `string` - The value of the item. Important: The select component uses string values to handle selection and will call toString() on this value. Therefor a string should be passed to value to prevent unexpected behavior.

## Events

- `itemClick` - Item clicked

## Slots

- None

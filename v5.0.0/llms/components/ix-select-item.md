# ix-select-item

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/select/guide.md

## Figma IDs

- None

## Related examples

- datepicker-locale
  - angular: [angular/datepicker-locale.html](../../examples/angular-examples/src/preview-examples/datepicker-locale.html), [angular/datepicker-locale.ts](../../examples/angular-examples/src/preview-examples/datepicker-locale.ts)
  - angular-standalone: [angular-standalone/datepicker-locale.html](../../examples/angular-standalone-examples/src/preview-examples/datepicker-locale.html), [angular-standalone/datepicker-locale.ts](../../examples/angular-standalone-examples/src/preview-examples/datepicker-locale.ts)
  - html: [html/datepicker-locale.html](../../examples/html-examples/src/preview-examples/datepicker-locale.html)
  - react: [react/datepicker-locale.tsx](../../examples/react-examples/src/preview-examples/datepicker-locale.tsx)
  - vue: [vue/datepicker-locale.vue](../../examples/vue-examples/src/preview-examples/datepicker-locale.vue)
- select
  - angular: [angular/select.ts](../../examples/angular-examples/src/preview-examples/select.ts)
  - angular-standalone: [angular-standalone/select.ts](../../examples/angular-standalone-examples/src/preview-examples/select.ts)
  - html: [html/select.html](../../examples/html-examples/src/preview-examples/select.html)
  - react: [react/select.tsx](../../examples/react-examples/src/preview-examples/select.tsx)
  - vue: [vue/select.vue](../../examples/vue-examples/src/preview-examples/select.vue)
- select-editable
  - angular: [angular/select-editable.ts](../../examples/angular-examples/src/preview-examples/select-editable.ts)
  - angular-standalone: [angular-standalone/select-editable.ts](../../examples/angular-standalone-examples/src/preview-examples/select-editable.ts)
  - html: [html/select-editable.html](../../examples/html-examples/src/preview-examples/select-editable.html)
  - react: [react/select-editable.tsx](../../examples/react-examples/src/preview-examples/select-editable.tsx)
  - vue: [vue/select-editable.vue](../../examples/vue-examples/src/preview-examples/select-editable.vue)
- select-multiple
  - angular: [angular/select-multiple.ts](../../examples/angular-examples/src/preview-examples/select-multiple.ts)
  - angular-standalone: [angular-standalone/select-multiple.ts](../../examples/angular-standalone-examples/src/preview-examples/select-multiple.ts)
  - html: [html/select-multiple.html](../../examples/html-examples/src/preview-examples/select-multiple.html)
  - react: [react/select-multiple.tsx](../../examples/react-examples/src/preview-examples/select-multiple.tsx)
  - vue: [vue/select-multiple.vue](../../examples/vue-examples/src/preview-examples/select-multiple.vue)
- select-validation
  - angular: [angular/select-validation.html](../../examples/angular-examples/src/preview-examples/select-validation.html), [angular/select-validation.ts](../../examples/angular-examples/src/preview-examples/select-validation.ts)
  - angular-standalone: [angular-standalone/select-validation.html](../../examples/angular-standalone-examples/src/preview-examples/select-validation.html), [angular-standalone/select-validation.ts](../../examples/angular-standalone-examples/src/preview-examples/select-validation.ts)
  - html: [html/select-validation.html](../../examples/html-examples/src/preview-examples/select-validation.html)
  - react: [react/select-validation.tsx](../../examples/react-examples/src/preview-examples/select-validation.tsx)
  - vue: [vue/select-validation.vue](../../examples/vue-examples/src/preview-examples/select-validation.vue)
- validation-select
  - angular: [angular/validation-select.html](../../examples/angular-examples/src/preview-examples/validation-select.html), [angular/validation-select.ts](../../examples/angular-examples/src/preview-examples/validation-select.ts)
  - angular-standalone: [angular-standalone/validation-select.html](../../examples/angular-standalone-examples/src/preview-examples/validation-select.html), [angular-standalone/validation-select.ts](../../examples/angular-standalone-examples/src/preview-examples/validation-select.ts)
  - html: [html/validation-select.html](../../examples/html-examples/src/preview-examples/validation-select.html)
  - react: [react/validation-select.tsx](../../examples/react-examples/src/preview-examples/validation-select.tsx)
  - vue: [vue/validation-select.vue](../../examples/vue-examples/src/preview-examples/validation-select.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable the item. A disabled item cannot be selected via mouse or keyboard and is excluded from the focusable items of the parent ix-select.
- `label`; attr: `label`; type: `string | undefined` - Displayed name of the item
- `selected`; attr: `selected`; type: `boolean`; default: `false` - Flag indicating whether the item is selected
- `value`; attr: `value`; type: `string` - The value of the item. Important: The select component uses string values to handle selection and will call toString() on this value. Therefor a string should be passed to value to prevent unexpected behavior.

## Events

- `itemClick` - Item clicked

## Slots

- None

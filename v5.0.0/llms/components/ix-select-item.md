# ix-select-item

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/select/guide.md

## Figma IDs

- None

## Related examples

- datepicker-locale
- select
- select-editable
- select-multiple
- select-validation
- validation-select

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

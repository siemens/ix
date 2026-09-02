# ix-select

> Dropdown control for selecting one or more options from a list.

## Documentation

- https://ix.siemens.io//docs/components/select/guide.md

## Figma IDs

- 42365:49989

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
- form-layout-auto
  - angular:
    - `angular/form-layout-auto.html`: [file](../../examples/angular/form-layout-auto.html)
    - `angular/form-layout-auto.ts`: [file](../../examples/angular/form-layout-auto.ts)
  - angular-standalone:
    - `angular-standalone/form-layout-auto.html`: [file](../../examples/angular-standalone/form-layout-auto.html)
    - `angular-standalone/form-layout-auto.ts`: [file](../../examples/angular-standalone/form-layout-auto.ts)
  - html:
    - `html/form-layout-auto.html`: [file](../../examples/html/form-layout-auto.html)
  - react:
    - `react/form-layout-auto.tsx`: [file](../../examples/react/form-layout-auto.tsx)
  - vue:
    - `vue/form-layout-auto.vue`: [file](../../examples/vue/form-layout-auto.vue)
- form-layout-grid
  - angular:
    - `angular/form-layout-grid.css`: [file](../../examples/angular/form-layout-grid.css)
    - `angular/form-layout-grid.html`: [file](../../examples/angular/form-layout-grid.html)
    - `angular/form-layout-grid.ts`: [file](../../examples/angular/form-layout-grid.ts)
  - angular-standalone:
    - `angular-standalone/form-layout-grid.css`: [file](../../examples/angular-standalone/form-layout-grid.css)
    - `angular-standalone/form-layout-grid.html`: [file](../../examples/angular-standalone/form-layout-grid.html)
    - `angular-standalone/form-layout-grid.ts`: [file](../../examples/angular-standalone/form-layout-grid.ts)
  - html:
    - `html/form-layout-grid.css`: [file](../../examples/html/form-layout-grid.css)
    - `html/form-layout-grid.html`: [file](../../examples/html/form-layout-grid.html)
  - react:
    - `react/form-layout-grid.scoped.css`: [file](../../examples/react/form-layout-grid.scoped.css)
    - `react/form-layout-grid.tsx`: [file](../../examples/react/form-layout-grid.tsx)
  - vue:
    - `vue/form-layout-grid.css`: [file](../../examples/vue/form-layout-grid.css)
    - `vue/form-layout-grid.vue`: [file](../../examples/vue/form-layout-grid.vue)
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

- `allowClear`; attr: `allow-clear`; type: `boolean`; default: `false` - Show clear button
- `ariaLabelAddItem`; attr: `aria-label-add-item`; type: `string`; default: `'Add item'` - ARIA label for the add item
- `ariaLabelClearIconButton`; attr: `aria-label-clear-icon-button`; type: `string | undefined`; default: `'Clear selection'` - ARIA label for the clear icon button Will be set as aria-label on the nested HTML button element
- `collapseMultipleSelection`; attr: `collapse-multiple-selection`; type: `boolean`; default: `false` - Show "all" chip when all items are selected in multiple mode
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - If true the select will be in disabled state
- `dropdownMaxWidth`; attr: `dropdown-max-width`; type: `string | undefined` - The maximum width of the dropdown element with value and unit (e.g. "200px" or "12.5rem"). By default the maximum width of the dropdown element is set to 100%.
- `dropdownWidth`; attr: `dropdown-width`; type: `string | undefined` - The width of the dropdown element with value and unit (e.g. "200px" or "12.5rem").
- `editable`; attr: `editable`; type: `boolean`; default: `false` - Select is extendable
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `helperText`; attr: `helper-text`; type: `string | undefined` - Helper text for the select component
- `hideListHeader`; attr: `hide-list-header`; type: `boolean`; default: `false` - Hide list header
- `i18nAllSelected`; attr: `i18n-all-selected`; type: `string`; default: `'All'` - Chip label for all selected items in multiple mode.
- `i18nMoreItems`; attr: `i18n-more-items`; type: `string`; default: `'{count} more'` - Accessible label template for the overflow indicator chip shown in multiple mode when not all selected chips fit on a single row. The `{count}` placeholder is replaced with the number of hidden items (e.g. "3 more").
- `i18nNoMatches`; attr: `i18n-no-matches`; type: `string`; default: `'No matches'` - Information inside of dropdown if no items where found with current filter text
- `i18nPlaceholder`; attr: `i18n-placeholder`; type: `string`; default: `'Select an option'` - Input field placeholder
- `i18nPlaceholderEditable`; attr: `i18n-placeholder-editable`; type: `string`; default: `'Type of select option'` - Input field placeholder for editable select
- `i18nRemoveSelectedItem`; attr: `i18n-remove-selected-item`; type: `string`; default: `'Remove'` - Prefix for the accessible name of the close control on a selected chip in multiple mode. The chip label or value is appended (e.g. "Remove Item 1").
- `i18nSelectListHeader`; attr: `i18n-select-list-header`; type: `string`; default: `'Select an option'` - Select list header
- `infoText`; attr: `info-text`; type: `string | undefined` - Info text for the select component
- `invalidText`; attr: `invalid-text`; type: `string | undefined` - Error text for the select component
- `label`; attr: `label`; type: `string | undefined` - Label for the select component
- `mode`; attr: `mode`; type: `"multiple" | "single"`; default: `'single'` - Selection mode
- `name`; attr: `name`; type: `string | undefined` - A string that represents the element's name attribute, containing a name that identifies the element when submitting the form.
- `readonly`; attr: `readonly`; type: `boolean`; default: `false` - If true the select will be in readonly mode
- `required`; attr: `required`; type: `boolean`; default: `false` - A Boolean attribute indicating that an option with a non-empty string value must be selected
- `showTextAsTooltip`; attr: `show-text-as-tooltip`; type: `boolean | undefined` - Show helper, error, info, warning text as tooltip
- `validText`; attr: `valid-text`; type: `string | undefined` - Valid text for the select component
- `value`; attr: `value`; type: `string | string[]`; default: `''` - Current selected value. This corresponds to the value property of ix-select-items
- `warningText`; attr: `warning-text`; type: `string | undefined` - Warning text for the select component

## Events

- `addItem` - Item added to selection
- `inputChange` - Event dispatched whenever the text input changes.
- `ixBlur` - Blur input
- `valueChange` - Value changed

## Slots

- `` - Select items.

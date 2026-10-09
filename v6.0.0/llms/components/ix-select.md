# ix-select

> Dropdown control for selecting one or more options from a list.

- Web component: `<ix-select>`
- React/Vue: `IxSelect` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-select>` (`IxModule` from `@siemens/ix-angular` or `IxSelect` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/select/guide.md

## Figma IDs

- 42365:49989

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

## Methods

- `focusInput() => Promise<void>` - Focuses the input field
- `getNativeInputElement() => Promise<HTMLInputElement>` - Returns the native input element used in the component.

## Slots

- `` - Select items.

## Dependencies

- Renders: `ix-dropdown`, `ix-dropdown-item`, `ix-field-wrapper`, `ix-filter-chip`, `ix-icon-button`, `ix-select-item`
- Rendered by: `ix-pagination`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- datepicker-locale (angular, angular-standalone, html, react, vue)
- datetimepicker-locale (angular, angular-standalone, html, react, vue)
- form-layout-auto (angular, angular-standalone, html, react, vue)
- form-layout-grid (angular, angular-standalone, html, react, vue)
- form-validation (angular, angular-standalone, html, react, vue)
- select (angular, angular-standalone, html, react, vue)
- select-editable (angular, angular-standalone, html, react, vue)
- select-multiple (angular, angular-standalone, html, react, vue)
- select-ng-model (angular, angular-standalone)
- select-validation (angular, angular-standalone, html, react, vue)
- theme-switcher (angular, angular-standalone, html, react, vue)
- validation-select (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

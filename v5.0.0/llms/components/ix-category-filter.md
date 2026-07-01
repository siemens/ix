# ix-category-filter

> Input for building and refining searches using category-based filter criteria.

## Documentation

- https://ix.siemens.io//docs/components/category-filter/guide.md

## Figma IDs

- 1221:30316

## Related examples

Example source links are relative to this Markdown file.

- category-filter
  - angular:
    - `angular/category-filter.ts`: [source](../../examples/angular-examples/src/preview-examples/category-filter.ts)
  - angular-standalone:
    - `angular-standalone/category-filter.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/category-filter.ts)
  - html:
    - `html/category-filter.html`: [source](../../examples/html-examples/src/preview-examples/category-filter.html)
  - react:
    - `react/category-filter.tsx`: [source](../../examples/react-examples/src/preview-examples/category-filter.tsx)
  - vue:
    - `vue/category-filter.vue`: [source](../../examples/vue-examples/src/preview-examples/category-filter.vue)
- category-filter-suggestions
  - angular:
    - `angular/category-filter-suggestions.ts`: [source](../../examples/angular-examples/src/preview-examples/category-filter-suggestions.ts)
  - angular-standalone:
    - `angular-standalone/category-filter-suggestions.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/category-filter-suggestions.ts)
  - html:
    - `html/category-filter-suggestions.html`: [source](../../examples/html-examples/src/preview-examples/category-filter-suggestions.html)
  - react:
    - `react/category-filter-suggestions.tsx`: [source](../../examples/react-examples/src/preview-examples/category-filter-suggestions.tsx)
  - vue:
    - `vue/category-filter-suggestions.vue`: [source](../../examples/vue-examples/src/preview-examples/category-filter-suggestions.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelFilterInput`; attr: `aria-label-filter-input`; type: `string | undefined` - ARIA label for the filter input Will be set as aria-label on the nested HTML input element
- `ariaLabelOperatorButton`; attr: `aria-label-operator-button`; type: `string | undefined` - ARIA label for the operator button Will be set as aria-label on the nested HTML button element
- `ariaLabelResetButton`; attr: `aria-label-reset-button`; type: `string | undefined` - ARIA label for the reset button Will be set as aria-label on the nested HTML button element
- `categories`; type: `undefined | { [id: string]: { label: string; options: string[]; }; }` - Configuration object hash used to populate the dropdown menu for type-ahead and quick selection functionality. Each ID maps to an object with a label and an array of options to select from.
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - If true the filter will be in disabled state
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `filterState`; type: `FilterState | undefined` - A set of search criteria to populate the component with.
- `hideIcon`; attr: `hide-icon`; type: `boolean`; default: `false` - Allows to hide the icon inside the text input. Defaults to false
- `i18nPlainText`; attr: `i18n-plain-text`; type: `string`; default: `'Filter by text'` - i18n label for 'Filter by text'
- `icon`; attr: `icon`; type: `string | undefined` - The icon next to the actual text input Defaults to 'search'
- `labelCategories`; attr: `label-categories`; type: `string`; default: `'Categories'` - i18n
- `nonSelectableCategories`; type: `undefined | { [id: string]: string; }`; default: `{}` - In certain use cases some categories may not be available for selection anymore. To allow proper display of set filters with these categories this ID to label mapping can be populated. Configuration object hash used to supply labels to the filter chips in the input field. Each ID maps to a string representing the label to display.
- `placeholder`; attr: `placeholder`; type: `string | undefined` - Placeholder text to be displayed in an empty input field.
- `readonly`; attr: `readonly`; type: `boolean`; default: `false` - If true the filter will be in readonly mode
- `staticOperator`; attr: `static-operator`; type: `LogicalFilterOperator.EQUAL | LogicalFilterOperator.NOT_EQUAL | undefined` - If set categories will always be filtered via the respective logical operator. Toggling of the operator will not be available to the user.
- `suggestions`; type: `string[] | undefined` - A list of strings that will be supplied as type-ahead suggestions not tied to any categories.
- `uniqueCategories`; attr: `unique-categories`; type: `boolean`; default: `false` - If set to true, prevents that a single category can be set more than once. An already set category will not appear in the category dropdown if set to true.

## Events

- `categoryChanged` - Event dispatched whenever a category gets selected in the dropdown
- `filterChanged` - Event dispatched whenever the filter state changes.
- `filterCleared` - Event dispatched whenever the filter gets cleared.
- `inputChanged` - Event dispatched whenever the text input changes.

## Slots

- None

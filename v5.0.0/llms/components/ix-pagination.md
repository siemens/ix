# ix-pagination

> No component summary available.

## Documentation

- None

## Figma IDs

- 2302:67995
- 2554:79100

## Related examples

- pagination
  - angular: [angular/pagination.ts](../../examples/angular-examples/src/preview-examples/pagination.ts)
  - angular-standalone: [angular-standalone/pagination.ts](../../examples/angular-standalone-examples/src/preview-examples/pagination.ts)
  - html: [html/pagination.html](../../examples/html-examples/src/preview-examples/pagination.html)
  - react: [react/pagination.tsx](../../examples/react-examples/src/preview-examples/pagination.tsx)
  - vue: [vue/pagination.vue](../../examples/vue-examples/src/preview-examples/pagination.vue)
- pagination-advanced
  - angular: [angular/pagination-advanced.ts](../../examples/angular-examples/src/preview-examples/pagination-advanced.ts)
  - angular-standalone: [angular-standalone/pagination-advanced.ts](../../examples/angular-standalone-examples/src/preview-examples/pagination-advanced.ts)
  - html: [html/pagination-advanced.html](../../examples/html-examples/src/preview-examples/pagination-advanced.html)
  - react: [react/pagination-advanced.tsx](../../examples/react-examples/src/preview-examples/pagination-advanced.tsx)
  - vue: [vue/pagination-advanced.vue](../../examples/vue-examples/src/preview-examples/pagination-advanced.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `advanced`; attr: `advanced`; type: `boolean`; default: `false` - Advanced mode
- `ariaLabelChevronLeftIconButton`; attr: `aria-label-chevron-left-icon-button`; type: `string | undefined`; default: `'Previous page'` - ARIA label for the chevron left icon button Will be set as aria-label on the nested HTML button element
- `ariaLabelChevronRightIconButton`; attr: `aria-label-chevron-right-icon-button`; type: `string | undefined`; default: `'Next page'` - ARIA label for the chevron right icon button Will be set as aria-label on the nested HTML button element
- `ariaLabelPageSelection`; attr: `aria-label-page-selection`; type: `string`; default: `'Page selection input'` - ARIA label for the page selection input Will be set as aria-label on the nested HTML input element
- `count`; attr: `count`; type: `number`; default: `0` - Total number of pages
- `hideItemCount`; attr: `hide-item-count`; type: `boolean`; default: `false` - Hide item count in advanced mode
- `i18nItems`; attr: `i18n-items`; type: `string`; default: `'Items'` - i18n label for 'Items'
- `i18nOf`; attr: `i18n-of`; type: `string`; default: `'of'` - i18n label for 'of'
- `i18nPage`; attr: `i18n-page`; type: `string`; default: `'Page'` - i18n label for 'Page'
- `itemCount`; attr: `item-count`; type: `number`; default: `15` - Number of items shown at once. Can only be changed in advanced mode.
- `itemCountOptions`; type: `number[]`; default: `[10, 15, 20, 40, 100]` - Custom item count options for advanced mode. Provide an array of positive numbers to display in the items per page dropdown.
- `selectedPage`; attr: `selected-page`; type: `number`; default: `0` - Zero based index of currently selected page

## Events

- `itemCountChanged` - Item count change event
- `pageSelected` - Page selection event

## Slots

- None

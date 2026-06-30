# ix-card-list

> No component summary available.

## Documentation

- https://ix.siemens.io//docs/components/card-list/guide.md

## Figma IDs

- 104638:14632

## Related examples

Example source links are relative to this Markdown file.

- card-list
  - angular:
    - `angular/card-list.html`: [source](../../examples/angular-examples/src/preview-examples/card-list.html)
    - `angular/card-list.ts`: [source](../../examples/angular-examples/src/preview-examples/card-list.ts)
  - angular-standalone:
    - `angular-standalone/card-list.html`: [source](../../examples/angular-standalone-examples/src/preview-examples/card-list.html)
    - `angular-standalone/card-list.ts`: [source](../../examples/angular-standalone-examples/src/preview-examples/card-list.ts)
  - html:
    - `html/card-list.html`: [source](../../examples/html-examples/src/preview-examples/card-list.html)
  - react:
    - `react/card-list.tsx`: [source](../../examples/react-examples/src/preview-examples/card-list.tsx)
  - vue:
    - `vue/card-list.vue`: [source](../../examples/vue-examples/src/preview-examples/card-list.vue)

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `ariaLabelExpandButton`; attr: `aria-label-expand-button`; type: `string | undefined` - ARIA label for the card's expand button. Will be set as aria-label on the nested HTML button element
- `collapse`; attr: `collapse`; type: `boolean`; default: `false` - Collapse the list
- `hideShowAll`; attr: `hide-show-all`; type: `boolean`; default: `false` - Hide the show all button
- `i18nMoreCards`; attr: `i18n-more-cards`; type: `string`; default: `'There are more cards available'` - i18n More cards available
- `i18nShowAll`; attr: `i18n-show-all`; type: `string`; default: `'Show all'` - i18n Show all button
- `i18nShowLess`; attr: `i18n-show-less`; type: `string`; default: `'Show less'` - i18n show less button
- `label`; attr: `label`; type: `string | undefined` - Name the card list
- `listStyle`; attr: `list-style`; type: `"scroll" | "stack"`; default: `'stack'` - List style
- `showAllCount`; attr: `show-all-count`; type: `number | undefined` - Overwrite the default show all count.
- `suppressOverflowHandling`; attr: `suppress-overflow-handling`; type: `boolean`; default: `false` - Suppress the overflow handling of child elements

## Events

- `collapseChanged` - Fire event when the collapse state is changed by the user
- `showAllClick` - Fire event when the collapse state is changed by the user
- `showMoreCardClick` - Fire event when the show more card is clicked.

## Slots

- None

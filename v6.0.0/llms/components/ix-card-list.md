# ix-card-list

> Container that arranges multiple cards in a list or grid layout.

- Web component: `<ix-card-list>`
- React/Vue: `IxCardList` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-card-list>` (`IxModule` from `@siemens/ix-angular` or `IxCardList` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/card-list/guide.md

## Figma IDs

- 104638:14632

## Properties

- `ariaLabelExpandButton`; attr: `aria-label-expand-button`; type: `string | undefined` - ARIA label for the card list's expand and collapse button. Defaults to `Collapse card list` when expanded and `Expand card list` when collapsed. A non-empty custom value overrides the label in both states.
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

## Methods

- None

## Slots

- `` - Cards displayed in the list.

## Dependencies

- Renders: `ix-button`, `ix-card`, `ix-card-content`, `ix-icon-button`, `ix-typography`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- card-list (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

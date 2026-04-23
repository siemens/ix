---
'@siemens/ix': major
---

Reworked **ix-category-filter** with a new operand-based filter model.

- `categories` prop changed from an object hash to a `FilterCategory[]` array (`{ key, label, values }`)
- `filterState` prop and `filterChanged` event payload changed from `FilterState` to `FilterAndSearchValue[]`: a union of `FilterSelection` (`type: 'filter'`) and `SearchQuery` (`type: 'search'`)
- `staticOperator` (type `LogicalFilterOperator`) replaced by `staticOperand` (string key referencing an entry in the `operands` array)
- `ariaLabelOperatorButton` removed
- `FilterState` class and `LogicalFilterOperator` enum removed from public API
- New props: `operands`, `staticOperand`, `labelOperands`, `labelValues`, `disableSearch`, `isLoading`, `hasError`

For more information check out BREAKING_CHANGES.md.

Closes #1255, closes #1342, closes #2426

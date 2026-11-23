# ix-tree-item

> A single node within a tree.

- Web component: `<ix-tree-item>`
- Vue: `IxTreeItem` from `@siemens/ix-vue`

## Documentation

- https://ix.siemens.io/docs/components/tree/code.md

## Figma IDs

- None

## Properties

- `ariaLabelChevronIcon`; attr: `aria-label-chevron-icon`; type: `string | undefined` - ARIA label for the expand/collapse button
- `ariaLabelTreeCollapsed`; attr: `aria-label-tree-collapsed`; type: `string`; default: `'Expand tree item'` - ARIA label for the expand control when the tree item is collapsed.
- `ariaLabelTreeExpanded`; attr: `aria-label-tree-expanded`; type: `string`; default: `'Collapse tree item'` - ARIA label for the collapse control when the tree item is expanded.
- `context`; type: `TreeItemContext | undefined` - Context
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable selection and expansion while keeping the tree item focusable.
- `hasChildren`; attr: `has-children`; type: `boolean`; default: `false` - Has tree item children
- `text`; attr: `text`; type: `string | undefined` - Text

## Events

- `itemClick` - Click on item not on the expand/collapse icon
- `toggle` - Expand/Collapsed toggled

## Methods

- None

## Slots

- `` - Tree item content.

## Dependencies

- Renders: None
- Rendered by: `ix-tree`

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- None

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

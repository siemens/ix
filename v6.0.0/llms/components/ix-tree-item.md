# ix-tree-item

> A single node within a tree.

- Web component: `<ix-tree-item>`

## Documentation

- https://ix.siemens.io/docs/components/tree/code.md

## Figma IDs

- None

## Properties

- `ariaLabelChevronIcon`; attr: `aria-label-chevron-icon`; type: `string | undefined` - ARIA label for the chevron icon
- `context`; type: `TreeItemContext | undefined` - Context
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disable tree item
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

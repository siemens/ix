# ix-tree-item

> A single node within a tree.

## Documentation

- https://ix.siemens.io//docs/components/tree/code.md

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- None

## Related patterns

Pattern and file links are relative to this Markdown file.

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

## Slots

- `` - Tree item content.

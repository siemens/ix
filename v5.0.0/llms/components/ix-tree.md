# ix-tree

> No component summary available.

## Documentation

- None

## Figma IDs

- None

## Related examples

- tree
- tree-custom

## Related blocks

- unavailable (not present in registry JSON)

## Properties

- `context`; type: `{ [x: string]: TreeItemContext; }`; default: `{}` - Selection and collapsed state management
- `model`; type: `any`; default: `{}` - Tree model
- `renderItem`; type: `(<T = any>(index: number, data: T, dataList: T[], context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLElement) | undefined` - Render function of tree items
- `root`; attr: `root`; type: `string`; default: `'root'` - Initial root element will not be rendered
- `toggleOnItemClick`; attr: `toggle-on-item-click`; type: `boolean | undefined` - Enable to toggle items by click on the item

## Events

- `contextChange` - Context changed
- `nodeClicked` - Node clicked event
- `nodeRemoved` - Emits removed nodes
- `nodeToggled` - Node toggled event

## Slots

- None

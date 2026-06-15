# ix-tree

> No component summary available.

## Documentation

- None

## Figma IDs

- None

## Related examples

- tree
  - angular: [../../examples/angular-examples/src/preview-examples/tree.ts](../../examples/angular-examples/src/preview-examples/tree.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/tree.ts](../../examples/angular-standalone-examples/src/preview-examples/tree.ts)
  - html: [../../examples/html-examples/src/preview-examples/tree.html](../../examples/html-examples/src/preview-examples/tree.html)
  - react: [../../examples/react-examples/src/preview-examples/tree.tsx](../../examples/react-examples/src/preview-examples/tree.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/tree.vue](../../examples/vue-examples/src/preview-examples/tree.vue)
- tree-custom
  - angular: [../../examples/angular-examples/src/preview-examples/tree-custom.ts](../../examples/angular-examples/src/preview-examples/tree-custom.ts)
  - angular-standalone: [../../examples/angular-standalone-examples/src/preview-examples/tree-custom.ts](../../examples/angular-standalone-examples/src/preview-examples/tree-custom.ts)
  - html: [../../examples/html-examples/src/preview-examples/tree-custom.html](../../examples/html-examples/src/preview-examples/tree-custom.html)
  - react: [../../examples/react-examples/src/preview-examples/tree-custom.tsx](../../examples/react-examples/src/preview-examples/tree-custom.tsx)
  - vue: [../../examples/vue-examples/src/preview-examples/tree-custom.vue](../../examples/vue-examples/src/preview-examples/tree-custom.vue)

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

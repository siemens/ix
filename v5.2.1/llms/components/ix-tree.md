# ix-tree

> Displays hierarchical data as an expandable tree.

## Documentation

- None

## Figma IDs

- None

## Related examples

Example file links are relative to this Markdown file.

- tree
  - angular:
    - `angular/tree.ts`: [file](../../examples/angular/tree.ts)
  - angular-standalone:
    - `angular-standalone/tree.ts`: [file](../../examples/angular-standalone/tree.ts)
  - html:
    - `html/tree.html`: [file](../../examples/html/tree.html)
  - react:
    - `react/tree.tsx`: [file](../../examples/react/tree.tsx)
  - vue:
    - `vue/tree.vue`: [file](../../examples/vue/tree.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

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

- `` - Tree items.

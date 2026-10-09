# ix-tree

> Displays hierarchical data as an expandable tree.

- Web component: `<ix-tree>`
- React/Vue: `IxTree` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-tree>` (`IxModule` from `@siemens/ix-angular` or `IxTree` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/tree/code.md

## Figma IDs

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

## Methods

- `markItemsAsDirty(ids: string[]) => Promise<void>` - Mark items as dirty. This will force the list to re-render the items with the given ids.
- `refreshTree(options?: RefreshTreeOptions) => Promise<void>` - Refresh the list. This will re-render the list with the current model and context.

## Slots

- `` - Tree items.

## Dependencies

- Renders: `ix-tree-item`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- tree (angular, angular-standalone, html, react, vue)
- tree-custom (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

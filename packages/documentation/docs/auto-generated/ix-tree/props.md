| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
|context| Selection and collapsed state management | `undefined` | `{ [x: string]: TreeItemContext; }` | `{}` |
|model| Tree modal | `undefined` | `{ [x: string]: TreeItem<any>; }` | `undefined` |
|renderItem| Render function of tree items | `undefined` | `<T = any>(index: number, data: T, dataList: T[], context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLElement` | `undefined` |
|root| Initial root element will not be rendered | `root` | `string` | `undefined` |

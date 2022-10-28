| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
|<div className="Api__Table"> <div>context</div> <div className="Api__Table Docs__Tags"></div></div>| Selection and collapsed state management | `undefined` | `{ [x: string]: TreeItemContext; }` | `{}` |
|<div className="Api__Table"> <div>model</div> <div className="Api__Table Docs__Tags"></div></div>| Tree modal | `undefined` | `{ [x: string]: TreeItem<any>; }` | `undefined` |
|<div className="Api__Table"> <div>renderItem</div> <div className="Api__Table Docs__Tags"></div></div>| Render function of tree items | `undefined` | `<T = any>(index: number, data: T, dataList: T[], context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLElement` | `undefined` |
|<div className="Api__Table"> <div>root</div> <div className="Api__Table Docs__Tags"></div></div>| Initial root element will not be rendered | `root` | `string` | `undefined` |

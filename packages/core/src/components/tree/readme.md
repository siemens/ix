# ix-tree

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description                               | Type                                                                                                                                | Default     |
| ------------ | --------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `context`    | --        | Selection and collapsed state management  | `{ [x: string]: TreeItemContext; }`                                                                                                 | `{}`        |
| `model`      | --        | Tree modal                                | `{ [x: string]: TreeItem<any>; }`                                                                                                   | `undefined` |
| `renderItem` | --        | Render function of tree items             | `<T = any>(index: number, data: T, dataList: T[], context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLElement` | `undefined` |
| `root`       | `root`    | Initial root element will not be rendered | `string`                                                                                                                            | `undefined` |


## Events

| Event           | Description         | Type                                             |
| --------------- | ------------------- | ------------------------------------------------ |
| `contextChange` | Context changed     | `CustomEvent<{ [x: string]: TreeItemContext; }>` |
| `nodeRemoved`   | Emits removed nodes | `CustomEvent<any>`                               |


----------------------------------------------



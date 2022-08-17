# ix-tree

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description                               | Type                                                                                                                           | Default     |
| ------------ | --------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `context`    | --        | Selection and collapsed state management  | `{ [x: string]: TreeItemContext; }`                                                                                            | `{}`        |
| `model`      | --        | Tree modal                                | `{ [x: string]: TreeItem<any>; }`                                                                                              | `undefined` |
| `renderItem` | --        | Render function of tree items             | `(index: number, data: any, dataList: any[], context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLElement` | `undefined` |
| `root`       | `root`    | Initial root element will not be rendered | `string`                                                                                                                       | `undefined` |


## Events

| Event           | Description     | Type                                             |
| --------------- | --------------- | ------------------------------------------------ |
| `contextChange` | Context changed | `CustomEvent<{ [x: string]: TreeItemContext; }>` |


----------------------------------------------



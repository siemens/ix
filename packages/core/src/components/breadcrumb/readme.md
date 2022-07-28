# cui-breadcrumb



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                       | Type       | Default |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| `ghost`            | `ghost`              | Ghost breadcrumbs will not show solid backgrounds on individual crumbs unless there is a mouse event (e.g. hover) | `boolean`  | `false` |
| `nextItems`        | --                   | Items will be accessible through a dropdown                                                                       | `string[]` | `[]`    |
| `visibleItemCount` | `visible-item-count` | Excess items will get hidden inside of dropdown                                                                   | `number`   | `9`     |


## Events

| Event       | Description              | Type                                             |
| ----------- | ------------------------ | ------------------------------------------------ |
| `itemClick` | Crumb item clicked event | `CustomEvent<string>`                            |
| `nextClick` | Next item clicked event  | `CustomEvent<{ event: UIEvent; item: string; }>` |


----------------------------------------------




<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description           | Type                  | Default     |
| -------- | --------- | --------------------- | --------------------- | ----------- |
| `icon`   | `icon`    | Avatar dropdown icon  | `string \| undefined` | `undefined` |
| `label`  | `label`   | Avatar dropdown label | `string \| undefined` | `undefined` |


## Events

| Event       | Description                  | Type                      |
| ----------- | ---------------------------- | ------------------------- |
| `itemClick` | Avatar dropdown item clicked | `CustomEvent<MouseEvent>` |


## Dependencies

### Used by

 - [ix-menu-avatar](../menu-avatar)

### Depends on

- [ix-dropdown-item](../dropdown-item)

### Graph
```mermaid
graph TD;
  ix-menu-avatar-item --> ix-dropdown-item
  ix-menu-avatar --> ix-menu-avatar-item
  style ix-menu-avatar-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

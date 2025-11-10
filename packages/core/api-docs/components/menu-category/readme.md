
<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                    | Type                  | Default     |
| --------------- | --------------- | ------------------------------------------------------------------------------ | --------------------- | ----------- |
| `icon`          | `icon`          | Icon of the category                                                           | `string \| undefined` | `undefined` |
| `label`         | `label`         | Display name of the category                                                   | `string \| undefined` | `undefined` |
| `notifications` | `notifications` | Show notification count on the category                                        | `number \| undefined` | `undefined` |
| `tooltipText`   | `tooltip-text`  | Will be shown as tooltip text, if not provided menu text content will be used. | `string \| undefined` | `undefined` |


## Dependencies

### Depends on

- [ix-menu-item](../menu-item)
- [ix-dropdown](../dropdown)
- [ix-dropdown-item](../dropdown-item)
- [ix-typography](../typography)
- [ix-divider](../divider)

### Graph
```mermaid
graph TD;
  ix-menu-category --> ix-menu-item
  ix-menu-category --> ix-dropdown
  ix-menu-category --> ix-dropdown-item
  ix-menu-category --> ix-typography
  ix-menu-category --> ix-divider
  ix-menu-item --> ix-tooltip
  ix-tooltip --> ix-typography
  style ix-menu-category fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

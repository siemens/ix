
<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description             | Type                                                                                                           | Default     |
| --------------- | ----------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------- | ----------- |
| `ariaLabelCard` | `aria-label-card` | ARIA label for the card | `string \| undefined`                                                                                          | `undefined` |
| `ariaLabelIcon` | `aria-label-icon` | ARIA label for the icon | `string \| undefined`                                                                                          | `undefined` |
| `heading`       | `heading`         | Card heading            | `string \| undefined`                                                                                          | `undefined` |
| `icon`          | `icon`            | Card icon               | `string \| undefined`                                                                                          | `undefined` |
| `selected`      | `selected`        | Card selection          | `boolean`                                                                                                      | `false`     |
| `subheading`    | `subheading`      | Card subheading         | `string \| undefined`                                                                                          | `undefined` |
| `variant`       | `variant`         | Card variant            | `"alarm" \| "critical" \| "filled" \| "info" \| "neutral" \| "outline" \| "primary" \| "success" \| "warning"` | `'outline'` |


## Dependencies

### Depends on

- [ix-card](../card)
- [ix-card-content](../card-content)
- [ix-typography](../typography)

### Graph
```mermaid
graph TD;
  ix-action-card --> ix-card
  ix-action-card --> ix-card-content
  ix-action-card --> ix-typography
  style ix-action-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

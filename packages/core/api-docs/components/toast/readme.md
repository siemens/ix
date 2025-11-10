
<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type                            | Default             |
| ---------------- | ----------------- | ----------- | ------------------------------- | ------------------- |
| `containerClass` | `container-class` |             | `string`                        | `'toast-container'` |
| `containerId`    | `container-id`    |             | `string`                        | `'toast-container'` |
| `position`       | `position`        |             | `"bottom-right" \| "top-right"` | `'bottom-right'`    |


## Methods

### `showToast(config: ToastConfig) => Promise<ShowToastResult>`

Display a toast message

#### Parameters

| Name     | Type          | Description |
| -------- | ------------- | ----------- |
| `config` | `ToastConfig` |             |

#### Returns

Type: `Promise<ShowToastResult>`




## Dependencies

### Depends on

- [ix-toast](.)

### Graph
```mermaid
graph TD;
  ix-toast-container --> ix-toast
  ix-toast --> ix-typography
  ix-toast --> ix-icon-button
  ix-icon-button --> ix-spinner
  style ix-toast-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

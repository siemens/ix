
<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description                                                                                                                                    | Type                                                                         | Default     |
| ---------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ----------- |
| `beforeDismiss`        | `before-dismiss`          | Is called before the modal is dismissed.  - Return `true` to proceed in dismissing the modal - Return `false` to abort in dismissing the modal | `((reason?: unknown) => boolean \| Promise<boolean>) \| undefined`           | `undefined` |
| `centered`             | `centered`                | Centered modal                                                                                                                                 | `boolean`                                                                    | `false`     |
| `closeOnBackdropClick` | `close-on-backdrop-click` | Dismiss modal on backdrop click                                                                                                                | `boolean`                                                                    | `false`     |
| `disableAnimation`     | `disable-animation`       | Should the modal animation be disabled                                                                                                         | `boolean`                                                                    | `false`     |
| `disableEscapeClose`   | `disable-escape-close`    | If set to true the modal cannot be closed by pressing the Escape key                                                                           | `boolean`                                                                    | `false`     |
| `hideBackdrop`         | `hide-backdrop`           | Hide the backdrop behind the modal dialog                                                                                                      | `boolean`                                                                    | `false`     |
| `size`                 | `size`                    | Modal size                                                                                                                                     | `"360" \| "480" \| "600" \| "720" \| "840" \| "full-screen" \| "full-width"` | `'360'`     |


## Events

| Event           | Description   | Type               |
| --------------- | ------------- | ------------------ |
| `dialogClose`   | Dialog close  | `CustomEvent<any>` |
| `dialogDismiss` | Dialog cancel | `CustomEvent<any>` |


## Methods

### `closeModal<T = unknown>(reason: T) => Promise<void>`

Close the dialog

#### Parameters

| Name     | Type | Description |
| -------- | ---- | ----------- |
| `reason` | `T`  |             |

#### Returns

Type: `Promise<void>`



### `dismissModal<T = unknown>(reason?: T) => Promise<void>`

Dismiss the dialog

#### Parameters

| Name     | Type             | Description |
| -------- | ---------------- | ----------- |
| `reason` | `T \| undefined` |             |

#### Returns

Type: `Promise<void>`



### `showModal() => Promise<void>`

Show the dialog

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

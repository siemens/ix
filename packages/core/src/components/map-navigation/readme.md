# ix-map-navigation

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                           | Type      | Default     |
| ----------------- | ------------------- | ----------------------------------------------------- | --------- | ----------- |
| `applicationName` | `application-name`  | Application name                                      | `string`  | `undefined` |
| `hideContextMenu` | `hide-context-menu` | Hide the sidebar context menu button when set to true | `boolean` | `true`      |
| `navigationTitle` | `navigation-title`  | Navigation title                                      | `string`  | `undefined` |


## Events

| Event               | Description          | Type                   |
| ------------------- | -------------------- | ---------------------- |
| `contextMenuClick`  | Context menu clicked | `CustomEvent<void>`    |
| `navigationToggled` | Navigation toggled   | `CustomEvent<boolean>` |


## Methods

### `closeOverlay() => Promise<void>`

Close current shown overlay

#### Returns

Type: `Promise<void>`



### `openOverlay(name: string, component: HTMLElement, icon?: string, color?: string) => Promise<void>`

Open a overlay inside content area

#### Returns

Type: `Promise<void>`




----------------------------------------------



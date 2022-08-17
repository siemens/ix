# ix-drawer

<!-- Auto Generated Below -->


## Properties

| Property              | Attribute                | Description                                                  | Type               | Default         |
| --------------------- | ------------------------ | ------------------------------------------------------------ | ------------------ | --------------- |
| `closeOnClickOutside` | `close-on-click-outside` | Fired in case of an outside click during drawer showed state | `boolean`          | `true`          |
| `fullHeight`          | `full-height`            | Render the drawer with maximum height                        | `boolean`          | `false`         |
| `maxWidth`            | `max-width`              | Max width interpreted as REM                                 | `number`           | `28`            |
| `minWidth`            | `min-width`              | Min width interpreted as REM                                 | `number`           | `16`            |
| `show`                | `show`                   | Show or hide the drawer                                      | `boolean`          | `false`         |
| `width`               | `width`                  | Width interpreted as REM if not set to 'auto'                | `"auto" \| number` | `this.minWidth` |


## Events

| Event   | Description                      | Type               |
| ------- | -------------------------------- | ------------------ |
| `close` | Fire event after drawer is close | `CustomEvent<any>` |
| `open`  | Fire event after drawer is open  | `CustomEvent<any>` |


## Methods

### `toggleDrawer(show: boolean) => Promise<void>`

Toggle or define show state of drawer

#### Returns

Type: `Promise<void>`




----------------------------------------------



# Breaking Changes

## v2.0.0

### Modal

#### Function to display modal renamed

This breaking change only affects the function `modal` which are exported from `@siemens/ix` (not `@siemens/ix-angular` etc).

___Before___

```ts
export async function modal<T = any>( config: ModalConfig<T>): Promise<ModalInstance<T>>
```

___Now___
```ts
export async function showModal<T = any>( config: ModalConfig<T>): Promise<ModalInstance<T>>
```


#### Container component `ix-modal-container` removed 

Container is not needed anymore because model system of iX is using `HTMLDialog` as
basic system to open modal dialogs

#### Property `size` changed

___Before___

```ts
export type IxModalSize = 'sm' | 'lg' | 'xl';
```

___Now___

```ts
export type IxModalFixedSize = '360' | '480' | '600' | '720' | '840';
export type IxModalDynamicSize = 'full-width';
export type IxModalSize = IxModalFixedSize | IxModalDynamicSize;
```

#### Property ModalConfig changed/adapted

- `scrollable` is removed, no successor
- `modalDialogClass` is removed, no successor
- `windowClass` is removed, no successor
- `content` is now generic
- `backdrop = 'static'` removed, successor will be `closeOnBackdropClick`.

___Before___

```tsx
const config: ModalConfig = {
  // Other properties
  backdrop: 'static'
}
```

___Now___

```tsx
const config: ModalConfig = {
  // Other properties
  backdrop: true // `true` is default
  closeOnBackdropClick: true
}
```

- `icon` and `iconColor` is removed, successor is `ix-modal-header` component.

#### Property `backdropClass` removed

To get a consistent ui design be decided to remove custom backdrops.

### `ix-flip-tile`

Change flip-state from
```ts
export enum FlipTileState {
  None = 'None',
  Info = 'Info',
  Warning = 'Warning',
  Alarm = 'Alarm',
  Primary = 'Primary',
}
```

to

```ts
export enum FlipTileState {
  None = 'none',
  Info = 'info',
  Warning = 'warning',
  Alarm = 'alarm',
  Primary = 'primary',
}
```

e.g for alarm state

___Before___

```tsx
<ix-flip-tile state="Alarm"></ix-flip-tile>
```

___Now___

```tsx
<ix-flip-tile state="alarm"></ix-flip-tile>
```

### Button variants changed

Affected components:

- `ix-button`
- `ix-icon-button`
- `ix-index-button`
- `ix-dropdown-button`
- `ix-split-button`

Change `Primary` and `Secondary` to lower case `primary` and `secondary`

### 'ix-content-header' variant typo

Change `Primary` and `Secondary` to lower case `primary` and `secondary`

### `ix-menu-item`

#### `tabIcon` is deprecated and gets replaced with `icon` property

___Before___

```tsx
<ix-menu-item tabIcon="rocket"></ix-menu-item>
```

___Now___

```tsx
<ix-menu-item icon="rocket"></ix-menu-item>
```

## `ix-menu-about`, `ix-menu-settings`

### `close` event

___Before___
```typescript
@Event() close: EventEmitter<string>;
```

___Now___
```typescript
@Event() close: EventEmitter<{
  nativeEvent: MouseEvent;
  name: string;
}>;
```

### `ix-spinner`

Remove typo `sencodary` from `variant` property

### `ix-split-button`

Remove deprecated `invisible`-property

___Before___
```tsx
<ix-split-button invisible></ix-split-button>
```

___Now___
```tsx
<ix-split-button ghost></ix-split-button>

```


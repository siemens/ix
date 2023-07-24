# Breaking Changes

## v2.0.0

### `ix-button` & `ix-icon-button`

#### `invisible` was removed. Use `ghost` instead.

#### `selected` was removed. Use `ix-toggle-button`/`ix-icon-toggle-button` with property `pressed="true"` instead.

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

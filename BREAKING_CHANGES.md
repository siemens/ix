# Breaking Changes

## v2.0.0

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

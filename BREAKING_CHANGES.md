# Breaking Changes

## v2.0.0

### `ix-dropdown` removed deprecated properties

- adjustDropdownWidthToReferenceWith
- adjustDropdownWidthToReferenceWidth

### `ix-dropdown` submenu

The submenu now appends a chevron icon automatically to the trigger element, if the trigger element is an ix-dropdown-item.

___Before___

```tsx
<ix-dropdown-item id="submenuTrigger" label="Submenu">
  <ix-icon name="chevron-right-small" size="24"></ix-icon>
</ix-dropdown-item>
```

___Now___
```tsx
<ix-dropdown-item id="submenuTrigger" label="Submenu"></ix-dropdown-item>
```

### `ix-dropdown` `ix-validation-tooltip` auto placement type removed

All automatic placement types are removed from placement type:
```
export declare type AutoPlacement = 'auto' | 'auto-start' | 'auto-end';
```

Placement will be automatically chosen depending on remaining space. If you want to suppress the automatic behavior you can set the property `suppress-automatic-placement`.

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


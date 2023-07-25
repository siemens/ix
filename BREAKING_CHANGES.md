# Breaking Changes

## v2.0.0

### `ix-button` & `ix-icon-button`

#### `invisible` was removed. Use `ghost` instead.

#### `selected` was removed. Use `ix-toggle-button`/`ix-icon-toggle-button` with property `pressed="true"` instead.

### `ix-dropdown` removed deprecated properties

- adjustDropdownWidthToReferenceWith
- adjustDropdownWidthToReferenceWidth

### `ix-dropdown` submenu

The submenu now appends a chevron icon automatically to the trigger element, if the trigger element is an ix-dropdown-item.

**_Before_**

```tsx
<ix-dropdown-item id="submenuTrigger" label="Submenu">
  <ix-icon name="chevron-right-small" size="24"></ix-icon>
</ix-dropdown-item>
```

**_Now_**

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

**_Before_**

```tsx
<ix-flip-tile state="Alarm"></ix-flip-tile>
```

**_Now_**

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

**_Before_**

```tsx
<ix-menu-item tabIcon="rocket"></ix-menu-item>
```

**_Now_**

```tsx
<ix-menu-item icon="rocket"></ix-menu-item>
```

## `ix-menu-about`, `ix-menu-settings`

### `close` event

**_Before_**

```typescript
@Event() close: EventEmitter<string>;
```

**_Now_**

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

**_Before_**

```tsx
<ix-split-button invisible></ix-split-button>
```

**_Now_**

```tsx
<ix-split-button ghost></ix-split-button>
```

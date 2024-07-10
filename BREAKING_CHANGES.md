# Breaking Changes

## v3.0.0

### Remove package `@siemens/ix-icons` from library

TODO: Rewrite this section to explain what is the impact of this change.

- **Web Components** (`@siemens/ix`): The icons package (`@siemens/ix-icons`) has to be bootstrapped manually (TODO: see [ix-icons repo](https://github.com/siemens/ix-icons) for installation instruction or add this also to the icons documentation)
- **Angular** (`@siemens/ix-angular`): no changes
- **React** (`@siemens/ix-react`): no changes
- **Vue** (`@siemens/ix-vue`): no changes

#### Usage of icons inside  `@siemens/ix-react` and  `@siemens/ix-vue` changed

TODO: Rewrite this section to be more precise about what has to be adapted

- Icon imports by name (e.g. `<IxIcon name="star" />`) are not supported any more. This will reduce bundle size and enable chunk loading.
- It is still possible to use imports by name if the SVGs are provided as assets (see [Angular installation section](url)):

```tsx
import { iconStar } from '@siemens/ix-icons/icons';
```

React/Vue:
```tsx
<IxIcon name={iconStar} />
```

#### Installation instruction of `@siemens/ix-angular` changed

TODO: Rewrite this section to be more precise about what has to be adapted

- To use imports by name (e.g. `<ix-icon name="star"></ix-icon>`) an additional configuration entry is required inside of `angular.json`:

Configuration
```json
{
  "glob": "**/*.svg",
  "input": "node_modules/@siemens/ix-icons/svg",
  "output": "./svg"
}
```

Add to assets property inside the `angular.json` file
```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  {
  "glob": "**/*.svg",
  "input": "node_modules/@siemens/ix-icons/svg",
  "output": "./svg"
  }
],
```

## v2.0.0

### `input[class="form-control"]` and `textarea[class="form-control"]` are deprecated

The assignment of the 'form-control' class for input and textarea elements is no longer required.

### Deprecated `ix-split-button-item`

Use `ix-dropdown-item` instead of `ix-split-button-item`. `ix-split-button-item` will be removed in the next major release.

### `ix-dropdown-item` remove 'itemClick' event

Remove `itemClick` event use native `click` event instead.

### `ix-event-list-item` remove deprecated props

Remove deprecated props

- `opacity`

### `ix-dropdown-button` remove deprecated props

Remove deprecated props

- `active`

### `ix-chip` remove deprecated events

Remove deprecated events

- `close`

### Change `itemSelectionChange` event from `ix-select` and `selectedIndices` prop from `ix-select`

**_Before_**
```tsx
<ix-select onItemSelectionChange={...} selectedIndices={...}></ix-select>
```

**_Now_**
```tsx
<ix-select onValueChange={...} value={...}></ix-select>
```

### Remove `ix-animated-tab` and `ix-animated-tabs`

Replaced by `ix-tabs` implementation.

### `ix-button` & `ix-icon-button`

#### `invisible` was removed. Use `ghost` instead.

**_Before_**

```tsx
<ix-button invisible>OK</button>
<ix-icon-button icon="context-menu" invisisble></ix-icon-button>
```

**_Now_**

```tsx
<ix-button ghost>OK</button>
<ix-icon-button icon="context-menu" ghost></ix-icon-button>
```

#### `selected` was removed. Use `ix-toggle-button`/`ix-icon-toggle-button` with property `pressed="true"` instead.

```tsx
<ix-button selected>OK</button>
<ix-icon-button icon="checkboxes" selected></ix-icon-button>
```

**_Now_**

```tsx
<ix-toggle-button pressed>OK</button>
<ix-icon-toggle-button icon="checkboxes" pressed></ix-icon-toggle-button>
```

### `ix-workflow-steps`

### Remove `linear` prop

Progression of the workflow steps has to be handled by the business logic now. This change is due to various user feedback.

You can now control the "navigation" of the steps by preventing the `stepSelected` event e.g:

```tsx
<ix-workflow-steps
  clickable
  onStepSelected={(event) => {
    event.preventDefault(); // This prevents the `ix-workflow-steps` to select the clicked step
  }}
>
  <ix-workflow-step>Test 1</ix-workflow-step>
  <ix-workflow-step>Test 2</ix-workflow-step>
  <ix-workflow-step>Test 3</ix-workflow-step>
</ix-workflow-steps>
```

### Change `position` prop to `@internal`

`position` was a internal property

### `ix-counter-pill` removed

Replaced with `ix-pill`

### `ix-toggle` changed host styling

`ix-toggle` is now `display: inline-flex` instead of `display: flex`

### `ix-group-dropdown-item` removed

Replaced with standard `ix-dropdown-item`

**_Now_**

```tsx
<ix-group header="Header text" sub-header="Subheader text">
  <ix-dropdown slot="dropdown">
    <ix-dropdown-item label="Item 1"></ix-dropdown-item>
    <ix-dropdown-item label="Item 2"></ix-dropdown-item>
  </ix-dropdown>
  <ix-group-item text="Example text 1"></ix-group-item>
  <ix-group-item text="Example text 2"></ix-group-item>
  <ix-group-item text="Example text 3"></ix-group-item>
</ix-group>
```

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

### Modal

#### Function to display modal renamed

This breaking change only affects the function `modal` which is exported from `@siemens/ix` (not `@siemens/ix-angular` etc).

**_Before_**

```ts
export async function modal<T = any>(
  config: ModalConfig<T>
): Promise<ModalInstance<T>>;
```

**_Now_**

```ts
export async function showModal<T = any>(
  config: ModalConfig<T>
): Promise<ModalInstance<T>>;
```

#### Container component `ix-modal-container` removed

Container is not needed anymore because the modal system is using `HTMLDialog` now as
basic system to open modal dialogs

#### Property `size` changed

**_Before_**

```ts
export type IxModalSize = 'sm' | 'lg' | 'xl';
```

**_Now_**

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

**_Before_**

```tsx
const config: ModalConfig = {
  // Other properties
  backdrop: 'static',
};
```

**_Now_**

```tsx
const config: ModalConfig = {
  // Other properties
  backdrop: true // `true` is default
  closeOnBackdropClick: true
}
```

- `icon` and `iconColor` were removed, successor is the `ix-modal-header` component.

#### Property `backdropClass` removed

To get a consistent UI design we decided to remove custom backdrops.

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
@Event()
close: EventEmitter<{
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

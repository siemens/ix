<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-select-item

<!-- Auto Generated Below -->

## Properties

| Property             | Attribute  | Description                   | Type      | Default     |
| -------------------- | ---------- | ----------------------------- | --------- | ----------- |
| `hover`              | `hover`    | **_Internal_**                | `boolean` | `false`     |
| `label`              | `label`    | Displayed name of the item    | `string`  | `undefined` |
| `selected`           | `selected` | Whether the item is selected. | `boolean` | `false`     |
| `value` _(required)_ | `value`    | Item value                    | `any`     | `undefined` |

## Events

| Event       | Description  | Type                  |
| ----------- | ------------ | --------------------- |
| `itemClick` | Item clicked | `CustomEvent<string>` |

## Methods

### `onItemClick(event?: CustomEvent<HTMLIxDropdownItemElement>) => Promise<void>`

Internal

#### Returns

Type: `Promise<void>`

---

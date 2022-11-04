<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-group

<!-- Auto Generated Below -->

## Properties

| Property                  | Attribute                   | Description                                                                    | Type      | Default     |
| ------------------------- | --------------------------- | ------------------------------------------------------------------------------ | --------- | ----------- |
| `collapsed`               | `collapsed`                 | Whether the group is collapsed or expanded. Defaults to true.                  | `boolean` | `true`      |
| `expandOnHeaderClick`     | `expand-on-header-click`    | Expand the group if the header is clicked                                      | `boolean` | `false`     |
| `header`                  | `header`                    | Group header                                                                   | `string`  | `undefined` |
| `index`                   | `index`                     | The index of the selected group entry. If undefined no group item is selected. | `number`  | `undefined` |
| `selected`                | `selected`                  | Whether the group is selected.                                                 | `boolean` | `undefined` |
| `subHeader`               | `sub-header`                | Group header subtitle                                                          | `string`  | `undefined` |
| `suppressHeaderSelection` | `suppress-header-selection` | Prevent header from being selectable                                           | `boolean` | `false`     |

## Events

| Event              | Description                           | Type                   |
| ------------------ | ------------------------------------- | ---------------------- |
| `collapsedChanged` | Group collapsed                       | `CustomEvent<boolean>` |
| `selectGroup`      | Emits when whole group gets selected. | `CustomEvent<boolean>` |
| `selectItem`       | Emits when group item gets selected.  | `CustomEvent<number>`  |

---

<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-toggle

<!-- Auto Generated Below -->

## Properties

| Property            | Attribute            | Description                                                                                                                                 | Type      | Default    |
| ------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------- |
| `checked`           | `checked`            | Whether the slide-toggle element is checked or not.                                                                                         | `boolean` | `false`    |
| `color`             | `color`              | <span style="color:red">**[DEPRECATED]**</span> - Has no effect on the rendered control<br/><br/>Basic and status colors from color palette | `string`  | `'accent'` |
| `disabled`          | `disabled`           | Whether the slide-toggle element is disabled or not.                                                                                        | `boolean` | `false`    |
| `hideText`          | `hide-text`          | Hide `on` and `off` text                                                                                                                    | `boolean` | `false`    |
| `indeterminate`     | `indeterminate`      | If true the control is in indeterminate state                                                                                               | `boolean` | `false`    |
| `textIndeterminate` | `text-indeterminate` | Text for indeterminate state                                                                                                                | `string`  | `'Mixed'`  |
| `textOff`           | `text-off`           | Text for off state                                                                                                                          | `string`  | `'Off'`    |
| `textOn`            | `text-on`            | Text for on state                                                                                                                           | `string`  | `'On'`     |

## Events

| Event           | Description                                                               | Type                   |
| --------------- | ------------------------------------------------------------------------- | ---------------------- |
| `checkedChange` | An event will be dispatched each time the slide-toggle changes its value. | `CustomEvent<boolean>` |

---

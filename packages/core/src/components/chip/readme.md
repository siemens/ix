<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# cui-chip



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                       | Type                                                                                              | Default     |
| ------------ | ------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ----------- |
| `active`     | `active`     | Display chip in active state. Only works with `variant="primary"` | `boolean`                                                                                         | `false`     |
| `background` | `background` | Custom color for pill. Only working for `variant='custom'`        | `string`                                                                                          | `undefined` |
| `closable`   | `closable`   | Show close icon                                                   | `boolean`                                                                                         | `false`     |
| `color`      | `color`      | Custom font color for pill. Only working for `variant='custom'`   | `string`                                                                                          | `undefined` |
| `icon`       | `icon`       | Show icon                                                         | `string`                                                                                          | `undefined` |
| `outline`    | `outline`    | Show chip with outline style                                      | `boolean`                                                                                         | `false`     |
| `variant`    | `variant`    | Chip variant                                                      | `"alarm" \| "critical" \| "custom" \| "info" \| "neutral" \| "primary" \| "success" \| "warning"` | `'primary'` |


## Events

| Event   | Description                           | Type               |
| ------- | ------------------------------------- | ------------------ |
| `close` | Fire event if close button is clicked | `CustomEvent<any>` |


----------------------------------------------



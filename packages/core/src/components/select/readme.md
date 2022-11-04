<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-select

<!-- Auto Generated Below -->

## Properties

| Property                  | Attribute                     | Description                                  | Type                     | Default                     |
| ------------------------- | ----------------------------- | -------------------------------------------- | ------------------------ | --------------------------- |
| `allowClear`              | `allow-clear`                 | Show clear button                            | `boolean`                | `false`                     |
| `disabled`                | `disabled`                    | If true the select will be in disabled state | `boolean`                | `false`                     |
| `editable`                | `editable`                    | Select is extendable                         | `boolean`                | `false`                     |
| `i18nPlaceholder`         | `i-1-8n-placeholder`          | Input field placeholder                      | `string`                 | `'Select an option'`        |
| `i18nPlaceholderEditable` | `i-1-8n-placeholder-editable` | Input field placeholder for editable select  | `string`                 | `'Type of select option'`   |
| `i18nSelectListHeader`    | `i-1-8n-select-list-header`   | Select list header                           | `string`                 | `'Please select an option'` |
| `mode`                    | `mode`                        | Selection mode                               | `"multiple" \| "single"` | `'single'`                  |
| `readonly`                | `readonly`                    | If true the select will be in readonly mode  | `boolean`                | `false`                     |
| `selectedIndices`         | `selected-indices`            | Indices of selected items                    | `string \| string[]`     | `[]`                        |

## Events

| Event                 | Description             | Type                              |
| --------------------- | ----------------------- | --------------------------------- |
| `addItem`             | Item added to selection | `CustomEvent<string>`             |
| `itemSelectionChange` | Item selection changed  | `CustomEvent<string \| string[]>` |

---

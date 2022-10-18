<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-date-picker

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                               | Type                                                          | Default                |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------------------- |
| `corners`    | `corners`    | Corner style                                                                                                              | `"left" \| "right" \| "rounded"`                              | `'rounded'`            |
| `format`     | `format`     | Date format string. See {@link https ://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens. | `string`                                                      | `'yyyy/LL/dd'`         |
| `individual` | `individual` | <span style="color:red">**[DEPRECATED]**</span> - will get removed with next major release<br/><br/>                      | `boolean`                                                     | `true`                 |
| `month`      | `month`      | Month to display initially.                                                                                               | `1 \| 10 \| 11 \| 12 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9` | `DateTime.now().month` |
| `range`      | `range`      | If true a range of dates can be selected.                                                                                 | `boolean`                                                     | `true`                 |
| `year`       | `year`       | Year to display initially.                                                                                                | `number`                                                      | `DateTime.now().year`  |


## Events

| Event        | Description       | Type                  |
| ------------ | ----------------- | --------------------- |
| `dateChange` | Date change event | `CustomEvent<string>` |
| `done`       | Done event        | `CustomEvent<string>` |


----------------------------------------------



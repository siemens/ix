<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-date-picker

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                                                                        | Type                             | Default                                |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------- |
| `corners`    | `corners`    | Corner style                                                                                                                                                       | `"left" \| "right" \| "rounded"` | `'rounded'`                            |
| `format`     | `format`     | Date format string. See {@link https ://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.                                          | `string`                         | `'yyyy/LL/dd'`                         |
| `from`       | `from`       | Picker date. If the picker is in range mode this property is the start date.  Format is based on `format`                                                          | `string`                         | `DateTime.now().toFormat(this.format)` |
| `individual` | `individual` | <span style="color:red">**[DEPRECATED]**</span> - will get removed with next major release<br/><br/>                                                               | `boolean`                        | `true`                                 |
| `maxDate`    | --           | The latest date that can be selected by the date picker. If not set there will be no restriction.                                                                  | `DateTime`                       | `undefined`                            |
| `minDate`    | --           | The earliest date that can be selected by the date picker. If not set there will be no restriction.                                                                | `DateTime`                       | `undefined`                            |
| `range`      | `range`      | If true a range of dates can be selected.                                                                                                                          | `boolean`                        | `true`                                 |
| `to`         | `to`         | Picker date. If the picker is in range mode this property is the end date. If the picker is not in range mode leave this value `null`  Format is based on `format` | `string`                         | `null`                                 |


## Events

| Event             | Description                                                                                                                                                                                                | Type                                         |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `dateChange`      | Date change event  If datepicker is in range mode the event detail will be sperated with a `-` e.g. `2022/10/22 - 2022/10/24` (start and end). If range mode is choosen consider to use `dateRangeChange`. | `CustomEvent<string>`                        |
| `dateRangeChange` | Date range change. Only triggered if datepicker is in range mode                                                                                                                                           | `CustomEvent<{ from: string; to: string; }>` |
| `done`            | Done event                                                                                                                                                                                                 | `CustomEvent<string>`                        |


----------------------------------------------



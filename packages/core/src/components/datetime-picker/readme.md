<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-datetime-picker

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                                                                                                        | Type           | Default                                                                                     |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ------------------------------------------------------------------------------------------- |
| `dateFormat`        | `date-format`         | Date format string. See {@link https ://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.                                          | `string`       | `'yyyy/LL/dd'`                                                                              |
| `from`              | `from`                | Picker date. If the picker is in range mode this property is the start date.  Format is based on `format`                                                          | `string`       | `DateTime.now().toFormat(this.dateFormat)`                                                  |
| `maxDate`           | --                    | The latest date that can be selected by the date picker. If not set there will be no restriction.                                                                  | `DateTime`     | `undefined`                                                                                 |
| `minDate`           | --                    | The earliest date that can be selected by the date picker. If not set there will be no restriction.                                                                | `DateTime`     | `undefined`                                                                                 |
| `range`             | `range`               | Set range size                                                                                                                                                     | `boolean`      | `true`                                                                                      |
| `showHour`          | `show-hour`           | Show hour input                                                                                                                                                    | `boolean`      | `false`                                                                                     |
| `showMinutes`       | `show-minutes`        | Show minutes input                                                                                                                                                 | `boolean`      | `false`                                                                                     |
| `showSeconds`       | `show-seconds`        | Show seconds input                                                                                                                                                 | `boolean`      | `false`                                                                                     |
| `showTimeReference` | `show-time-reference` | Show time reference input                                                                                                                                          | `any`          | `undefined`                                                                                 |
| `time`              | `time`                | Select time with format string                                                                                                                                     | `string`       | `DateTime.now().toFormat(this.timeFormat)`                                                  |
| `timeFormat`        | `time-format`         | Date format string. See {@link https ://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.                                          | `string`       | `'TT'`                                                                                      |
| `timeReference`     | `time-reference`      | Set time reference                                                                                                                                                 | `"AM" \| "PM"` | `DateTime.fromFormat(     this.time,     this.timeFormat   ).toFormat('a') as 'PM' \| 'AM'` |
| `to`                | `to`                  | Picker date. If the picker is in range mode this property is the end date. If the picker is not in range mode leave this value `null`  Format is based on `format` | `string`       | `null`                                                                                      |


## Events

| Event  | Description | Type                  |
| ------ | ----------- | --------------------- |
| `done` | Time event  | `CustomEvent<string>` |


----------------------------------------------



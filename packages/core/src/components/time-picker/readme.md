<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-time-picker

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                                          | Type                             | Default                                                                                 |
| ------------------- | --------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------- |
| `corners`           | `corners`             | Corner style                                                                                         | `"left" \| "right" \| "rounded"` | `'rounded'`                                                                             |
| `format`            | `format`              | Format of time string                                                                                | `string`                         | `'TT'`                                                                                  |
| `individual`        | `individual`          | <span style="color:red">**[DEPRECATED]**</span> - will get removed with next major release<br/><br/> | `boolean`                        | `true`                                                                                  |
| `showHour`          | `show-hour`           | Show hour input                                                                                      | `boolean`                        | `false`                                                                                 |
| `showMinutes`       | `show-minutes`        | Show minutes input                                                                                   | `boolean`                        | `false`                                                                                 |
| `showSeconds`       | `show-seconds`        | Show seconds input                                                                                   | `boolean`                        | `false`                                                                                 |
| `showTimeReference` | `show-time-reference` | Show time reference input                                                                            | `any`                            | `undefined`                                                                             |
| `textSelectTime`    | `text-select-time`    | Text of date select button                                                                           | `string`                         | `'Done'`                                                                                |
| `time`              | `time`                | Select time with format string                                                                       | `string`                         | `DateTime.now().toFormat(this.format)`                                                  |
| `timeReference`     | `time-reference`      | Set time reference                                                                                   | `"AM" \| "PM"`                   | `DateTime.fromFormat(     this.time,     this.format   ).toFormat('a') as 'PM' \| 'AM'` |


## Events

| Event        | Description       | Type                  |
| ------------ | ----------------- | --------------------- |
| `done`       | Time event        | `CustomEvent<string>` |
| `timeChange` | Time change event | `CustomEvent<string>` |


## Methods

### `getCurrentTime() => Promise<string>`

Get current time

#### Returns

Type: `Promise<string>`




----------------------------------------------



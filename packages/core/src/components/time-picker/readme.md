<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-time-picker

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                                          | Type                             | Default     |
| ------------------- | --------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| `corners`           | `corners`             | Corner style                                                                                         | `"left" \| "right" \| "rounded"` | `'rounded'` |
| `hour`              | `hour`                | Set hour                                                                                             | `number`                         | `0`         |
| `individual`        | `individual`          | <span style="color:red">**[DEPRECATED]**</span> - will get removed with next major release<br/><br/> | `boolean`                        | `true`      |
| `minutes`           | `minutes`             | Set minutes                                                                                          | `number`                         | `0`         |
| `seconds`           | `seconds`             | Set seconds                                                                                          | `number`                         | `0`         |
| `showHour`          | `show-hour`           | Show hour input                                                                                      | `boolean`                        | `false`     |
| `showMinutes`       | `show-minutes`        | Show minutes input                                                                                   | `boolean`                        | `false`     |
| `showSeconds`       | `show-seconds`        | Show seconds input                                                                                   | `boolean`                        | `false`     |
| `showTimeReference` | `show-time-reference` | Show time reference input                                                                            | `boolean`                        | `false`     |
| `timeReference`     | `time-reference`      | Set seconds                                                                                          | `string`                         | `"AM"`      |


## Events

| Event        | Description       | Type                  |
| ------------ | ----------------- | --------------------- |
| `done`       | Time event        | `CustomEvent<string>` |
| `timeChange` | Time change event | `CustomEvent<string>` |


----------------------------------------------



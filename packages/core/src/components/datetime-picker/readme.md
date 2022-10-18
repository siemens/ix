<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-datetime-picker

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description               | Type                                                          | Default                |
| ------------------- | --------------------- | ------------------------- | ------------------------------------------------------------- | ---------------------- |
| `hour`              | `hour`                | Set hour                  | `number`                                                      | `0`                    |
| `minutes`           | `minutes`             | Set minutes               | `number`                                                      | `0`                    |
| `month`             | `month`               | Set month                 | `1 \| 10 \| 11 \| 12 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9` | `DateTime.now().month` |
| `range`             | `range`               | Set range size            | `boolean`                                                     | `true`                 |
| `seconds`           | `seconds`             | Set seconds               | `number`                                                      | `0`                    |
| `showHour`          | `show-hour`           | Show hour input           | `boolean`                                                     | `false`                |
| `showMinutes`       | `show-minutes`        | Show minutes input        | `boolean`                                                     | `false`                |
| `showSeconds`       | `show-seconds`        | Show seconds input        | `boolean`                                                     | `false`                |
| `showTimeReference` | `show-time-reference` | Show time reference input | `boolean`                                                     | `false`                |
| `timeReference`     | `time-reference`      | Set seconds               | `string`                                                      | `"AM"`                 |
| `year`              | `year`                | Set year                  | `number`                                                      | `DateTime.now().year`  |


## Events

| Event  | Description | Type                  |
| ------ | ----------- | --------------------- |
| `done` | Time event  | `CustomEvent<string>` |


----------------------------------------------



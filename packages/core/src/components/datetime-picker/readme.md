<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

# ix-datetime-picker

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                                                                                                         | Type           | Default        |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | -------------- |
| `dateFormat`        | `date-format`         | Date format string. See {@link https ://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.                                           | `string`       | `'yyyy/LL/dd'` |
| `eventDelimiter`    | `event-delimiter`     | Default behavior of the done event is to join the two events (date and time) into one combined string output. This combination can be configured over the delimiter | `string`       | `' - '`        |
| `from`              | `from`                | Picker date. If the picker is in range mode this property is the start date.  Format is based on `format`                                                           | `string`       | `undefined`    |
| `maxDate`           | `max-date`            | The latest date that can be selected by the date picker. If not set there will be no restriction.                                                                   | `string`       | `undefined`    |
| `minDate`           | `min-date`            | The earliest date that can be selected by the date picker. If not set there will be no restriction.                                                                 | `string`       | `undefined`    |
| `range`             | `range`               | Set range size                                                                                                                                                      | `boolean`      | `true`         |
| `showHour`          | `show-hour`           | Show hour input                                                                                                                                                     | `boolean`      | `false`        |
| `showMinutes`       | `show-minutes`        | Show minutes input                                                                                                                                                  | `boolean`      | `false`        |
| `showSeconds`       | `show-seconds`        | Show seconds input                                                                                                                                                  | `boolean`      | `false`        |
| `showTimeReference` | `show-time-reference` | Show time reference input                                                                                                                                           | `any`          | `undefined`    |
| `textSelectDate`    | `text-select-date`    | Text of date select button                                                                                                                                          | `string`       | `'Done'`       |
| `time`              | `time`                | Select time with format string                                                                                                                                      | `string`       | `undefined`    |
| `timeFormat`        | `time-format`         | Time format string. See {@link https ://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.                                           | `string`       | `'TT'`         |
| `timeReference`     | `time-reference`      | Set time reference                                                                                                                                                  | `"AM" \| "PM"` | `undefined`    |
| `to`                | `to`                  | Picker date. If the picker is in range mode this property is the end date. If the picker is not in range mode leave this value `null`  Format is based on `format`  | `string`       | `null`         |


## Events

| Event        | Description                                                                     | Type                                                   |
| ------------ | ------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `dateChange` | Date change                                                                     | `CustomEvent<string \| { from: string; to: string; }>` |
| `dateSelect` | Date selection event is fired after confirm button is pressend                  | `CustomEvent<DateTimeSelectEvent>`                     |
| `done`       | Done event  Set `doneEventDelimiter` to null or undefine to get the typed event | `CustomEvent<string>`                                  |
| `timeChange` | Time change                                                                     | `CustomEvent<string>`                                  |


----------------------------------------------



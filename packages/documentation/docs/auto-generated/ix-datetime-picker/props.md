| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
|dateFormat| Date format string. See {@link https ://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens. | `date-format` | `string` | `'yyyy/LL/dd'` |
|eventDelimiter| Default behavior of the done event is to join the two events (date and time) into one combined string output. This combination can be configured over the delimiter | `event-delimiter` | `string` | `' - '` |
|from| Picker date. If the picker is in range mode this property is the start date.<br /><br />Format is based on `format` | `from` | `string` | `undefined` |
|maxDate| The latest date that can be selected by the date picker. If not set there will be no restriction. | `undefined` | `DateTime` | `undefined` |
|minDate| The earliest date that can be selected by the date picker. If not set there will be no restriction. | `undefined` | `DateTime` | `undefined` |
|range| Set range size | `range` | `boolean` | `true` |
|showHour| Show hour input | `show-hour` | `boolean` | `false` |
|showMinutes| Show minutes input | `show-minutes` | `boolean` | `false` |
|showSeconds| Show seconds input | `show-seconds` | `boolean` | `false` |
|showTimeReference| Show time reference input | `show-time-reference` | `any` | `undefined` |
|textSelectDate| Text of date select button | `text-select-date` | `string` | `'Done'` |
|time| Select time with format string | `time` | `string` | `undefined` |
|timeFormat| Time format string. See {@link https ://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens. | `time-format` | `string` | `'TT'` |
|timeReference| Set time reference | `time-reference` | `"AM" ｜ "PM"` | `undefined` |
|to| Picker date. If the picker is in range mode this property is the end date. If the picker is not in range mode leave this value `null`<br /><br />Format is based on `format` | `to` | `string` | `null` |

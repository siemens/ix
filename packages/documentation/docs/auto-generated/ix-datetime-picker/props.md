| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
|dateFormat| Date format string. See {@link https ://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens. | `date-format` | `string` | `'yyyy/LL/dd'` |
|from| Picker date. If the picker is in range mode this property is the start date.<br /><br />Format is based on `format` | `from` | `string` | `DateTime.now().toFormat(this.dateFormat)` |
|maxDate| The latest date that can be selected by the date picker. If not set there will be no restriction. | `undefined` | `DateTime` | `undefined` |
|minDate| The earliest date that can be selected by the date picker. If not set there will be no restriction. | `undefined` | `DateTime` | `undefined` |
|range| Set range size | `range` | `boolean` | `true` |
|showHour| Show hour input | `show-hour` | `boolean` | `false` |
|showMinutes| Show minutes input | `show-minutes` | `boolean` | `false` |
|showSeconds| Show seconds input | `show-seconds` | `boolean` | `false` |
|showTimeReference| Show time reference input | `show-time-reference` | `any` | `undefined` |
|time| Select time with format string | `time` | `string` | `DateTime.now().toFormat(this.timeFormat)` |
|timeFormat| Date format string. See {@link https ://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens. | `time-format` | `string` | `'TT'` |
|timeReference| Set time reference | `time-reference` | `"AM" ｜ "PM"` | `DateTime.fromFormat(
    this.time,
    this.timeFormat
  ).toFormat('a') as 'PM' | 'AM'` |
|to| Picker date. If the picker is in range mode this property is the end date. If the picker is not in range mode leave this value `null`<br /><br />Format is based on `format` | `to` | `string` | `null` |

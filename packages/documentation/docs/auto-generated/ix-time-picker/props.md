| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
|corners| Corner style | `corners` | `"left" ｜ "right" ｜ "rounded"` | `'rounded'` |
|format| Format of time string | `format` | `string` | `'TT'` |
|individual|  | `individual` | `boolean` | `true` |
|showHour| Show hour input | `show-hour` | `boolean` | `false` |
|showMinutes| Show minutes input | `show-minutes` | `boolean` | `false` |
|showSeconds| Show seconds input | `show-seconds` | `boolean` | `false` |
|showTimeReference| Show time reference input | `show-time-reference` | `any` | `undefined` |
|time| Select time with format string | `time` | `string` | `DateTime.now().toFormat(this.format)` |
|timeReference| Set time reference | `time-reference` | `"AM" ｜ "PM"` | `DateTime.fromFormat(
    this.time,
    this.format
  ).toFormat('a') as 'PM' | 'AM'` |

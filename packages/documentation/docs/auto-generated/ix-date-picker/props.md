| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
|corners| Corner style | `corners` | `"left" ｜ "right" ｜ "rounded"` | `'rounded'` |
|eventDelimiter| Default behavior of the done event is to join the two events (date and time) into one combined string output. This combination can be configured over the delimiter | `event-delimiter` | `string` | `' - '` |
|format| Date format string. See {@link https ://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens. | `format` | `string` | `'yyyy/LL/dd'` |
|from| Picker date. If the picker is in range mode this property is the start date.<br /><br />Format is based on `format` | `from` | `string` | `DateTime.now().toFormat(this.format)` |
|individual|  | `individual` | `boolean` | `true` |
|maxDate| The latest date that can be selected by the date picker. If not set there will be no restriction. | `undefined` | `DateTime` | `undefined` |
|minDate| The earliest date that can be selected by the date picker. If not set there will be no restriction. | `undefined` | `DateTime` | `undefined` |
|range| If true a range of dates can be selected. | `range` | `boolean` | `true` |
|textSelectDate| Text of date select button | `text-select-date` | `string` | `'Done'` |
|to| Picker date. If the picker is in range mode this property is the end date. If the picker is not in range mode leave this value `null`<br /><br />Format is based on `format` | `to` | `string` | `null` |

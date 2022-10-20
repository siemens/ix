| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
|corners| Corner style | `corners` | `"left" ｜ "right" ｜ "rounded"` | `'rounded'` |
|format| Date format string. See {@link https ://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens. | `format` | `string` | `'yyyy/LL/dd'` |
|individual|  | `individual` | `boolean` | `true` |
|maxDate| The latest date that can be selected by the date picker. If not set there will be no restriction. | `undefined` | `DateTime` | `undefined` |
|minDate| The earliest date that can be selected by the date picker. If not set there will be no restriction. | `undefined` | `DateTime` | `undefined` |
|month| Month to display initially. | `month` | `1 ｜ 10 ｜ 11 ｜ 12 ｜ 2 ｜ 3 ｜ 4 ｜ 5 ｜ 6 ｜ 7 ｜ 8 ｜ 9` | `DateTime.now().month` |
|range| If true a range of dates can be selected. | `range` | `boolean` | `true` |
|year| Year to display initially. | `year` | `number` | `DateTime.now().year` |

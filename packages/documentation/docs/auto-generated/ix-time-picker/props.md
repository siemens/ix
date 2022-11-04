| Name       | Description                   | Attribute        | Type                                      | Default             |
|------------|-------------------------------|------------------|-------------------------------------------|---------------------|
|<div className="Api__Table"> <div>corners</div> <div className="Api__Table Docs__Tags"></div></div>| Corner style | `corners` | `"left" ｜ "right" ｜ "rounded"` | `'rounded'` |
|<div className="Api__Table"> <div>format</div> <div className="Api__Table Docs__Tags"><span className="Api__Table Docs__Tag">Since: 1.1.0</span></div></div>| Format of time string | `format` | `string` | `'TT'` |
|<div className="Api__Table"> <div>individual</div> <div className="Api__Table Docs__Tags"></div></div>|  | `individual` | `boolean` | `true` |
|<div className="Api__Table"> <div>showHour</div> <div className="Api__Table Docs__Tags"></div></div>| Show hour input | `show-hour` | `boolean` | `false` |
|<div className="Api__Table"> <div>showMinutes</div> <div className="Api__Table Docs__Tags"></div></div>| Show minutes input | `show-minutes` | `boolean` | `false` |
|<div className="Api__Table"> <div>showSeconds</div> <div className="Api__Table Docs__Tags"></div></div>| Show seconds input | `show-seconds` | `boolean` | `false` |
|<div className="Api__Table"> <div>showTimeReference</div> <div className="Api__Table Docs__Tags"><span className="Api__Table Docs__Tag">Since: 1.1.0 time reference is default aligned with formt tt</span></div></div>| Show time reference input | `show-time-reference` | `any` | `undefined` |
|<div className="Api__Table"> <div>textSelectTime</div> <div className="Api__Table Docs__Tags"><span className="Api__Table Docs__Tag">Since: 1.1.0</span></div></div>| Text of date select button | `text-select-time` | `string` | `'Done'` |
|<div className="Api__Table"> <div>time</div> <div className="Api__Table Docs__Tags"><span className="Api__Table Docs__Tag">Since: 1.1.0</span></div></div>| Select time with format string | `time` | `string` | `DateTime.now().toFormat(this.format)` |
|<div className="Api__Table"> <div>timeReference</div> <div className="Api__Table Docs__Tags"></div></div>| Set time reference | `time-reference` | `"AM" ｜ "PM"` | `DateTime.fromFormat(
    this.time,
    this.format
  ).toFormat('a') as 'PM' | 'AM'` |

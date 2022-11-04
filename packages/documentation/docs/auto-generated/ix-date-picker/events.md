| Name       | Description                   | Attribute        | Detail |
|------------|-------------------------------|------------------|--------|
|<div className="Api__Table"> <div>dateChange</div> <div className="Api__Table Docs__Tags"></div></div>| Date change event<br /><br />If datepicker is in range mode the event detail will be sperated with a `-` e.g. `2022/10/22 - 2022/10/24` (start and end). If range mode is choosen consider to use `dateRangeChange`. | `DateChangeEvent | string`
|<div className="Api__Table"> <div>dateRangeChange</div> <div className="Api__Table Docs__Tags"><span className="Api__Table Docs__Tag">Since: 1.1.0</span></div></div>| Date range change. Only triggered if datepicker is in range mode | `DateChangeEvent`
|<div className="Api__Table"> <div>dateSelect</div> <div className="Api__Table Docs__Tags"><span className="Api__Table Docs__Tag">Since: 1.1.0</span></div></div>| Date selection confirmed via button action | `DateChangeEvent`
|<div className="Api__Table"> <div>done</div> <div className="Api__Table Docs__Tags"></div></div>| Date selection confirmed via button action | `string`

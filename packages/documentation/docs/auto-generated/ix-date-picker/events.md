| Name       | Description                   | Attribute        | Detail |
|------------|-------------------------------|------------------|--------|
|dateChange| Date change event<br /><br />If datepicker is in range mode the event detail will be sperated with a `-` e.g. `2022/10/22 - 2022/10/24` (start and end). If range mode is choosen consider to use `dateRangeChange`. | `DateChangeEvent | string`
|dateRangeChange| Date range change. Only triggered if datepicker is in range mode | `DateChangeEvent`
|dateSelect| Date selection confirmed via button action | `DateChangeEvent`
|done| Date selection confirmed via button action | `string`

import Playground from '@site/src/components/Playground';
import Props from './../auto-generated/ix-date-picker/props.md';
import Events from './../auto-generated/ix-date-picker/events.md';

import SourceDatepicker from './../auto-generated/previews/web-component/datepicker.md'
import SourceReactDatepicker from './../auto-generated/previews/react/datepicker.md'
import SourceAngularDatepicker from './../auto-generated/previews/angular/datepicker.ts.md'

import SourceDatepickerRange from './../auto-generated/previews/web-component/datepicker-range.md'
import SourceReactDatepickerRange from './../auto-generated/previews/react/datepicker-range.md'
import SourceAngularDatepickerRange from './../auto-generated/previews/angular/datepicker-range.ts.md'

import SourceVueDatepicker from './../auto-generated/previews/vue/datepicker.md'
import SourceVueDatepickerRange from './../auto-generated/previews/vue/datepicker-range.md'

# Date picker

## Range Selection

<Playground
name="datepicker-range" height="35rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactDatepickerRange,
  angular: SourceAngularDatepickerRange,
  javascript: SourceDatepickerRange,
  vue: SourceVueDatepickerRange
}}></Playground>

## Single Selection

<Playground
name="datepicker" height="35rem"
frameworks={{
  react: SourceReactDatepicker,
  angular: SourceAngularDatepicker,
  javascript: SourceDatepicker,
  vue: SourceVueDatepicker
}}></Playground>

<!-- Re-add this when migrating to the rework components -->
<!-- ## Translation
The `ix-date-picker` uses the DayJS locale for the translations of the names of the weekdays and months. To change the default english translation you have to import the desired DayJS locale. Please refer to the [DayJS documentation](https://day.js.org/docs/en/i18n/loading-into-browser) or the examples below.

```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/de.js"></script>

<ix-date-picker></ix-date-picker>

<script>
  document.querySelector('ix-date-picker-rework').dayJsLocale = window.dayjs_locale_de;
</script>
```

Or

```tsx
import dayjs from 'dayjs';

export default async () => {
  const locale = await import('dayjs/locale/de');
  return <IxDatePicker dayJsLocale={locale} />;
};
``` -->

## Properties

### Props

<Props />

### Events

<Events />

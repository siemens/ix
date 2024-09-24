import Props from './../auto-generated/ix-datetime-picker/props.md';
import Events from './../auto-generated/ix-datetime-picker/events.md';

import Playground from '@site/src/components/PlaygroundV3';

# Date time picker

## Examples

### Basic

<Playground
  name="datetimepicker" 
  height="35rem"
  >
</Playground>

<!-- Re-add this when migrating to the rework components -->
<!-- ## Translation
The `ix-date-picker` uses the DayJS locale for the translations of the names of the weekdays and months. To change the default english translation you have to import the desired DayJS locale. Please refer to the [DayJS documentation](https://day.js.org/docs/en/i18n/loading-into-browser) or the examples below.

```html
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/dayjs@1/locale/de.js"></script>

<ix-datetime-picker></ix-datetime-picker>

<script>
  document.querySelector('ix-datetime-picker-rework').dayJsLocale = window.dayjs_locale_de;
</script>
```

Or

```tsx
import dayjs from 'dayjs';

export default async () => {
  const locale = await import('dayjs/locale/de');
  return <IxDateTimePicker dayJsLocale={locale} />;
};
``` -->

## API

### Properties

<Props />

### Events

<Events />

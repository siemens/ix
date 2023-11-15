import Playground from '@site/src/components/PlaygroundV2';
import Props from './../auto-generated/ix-date-picker/props.md';
import Events from './../auto-generated/ix-date-picker/events.md';

# Date picker

## Range Selection

<Playground
name="datepicker-range" height="35rem"
hideInitalCodePreview
examplesByName></Playground>

## Single Selection

<Playground
name="datepicker" height="35rem"
examplesByName></Playground>

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

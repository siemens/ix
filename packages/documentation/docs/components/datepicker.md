import LivePreview from '@site/src/components/LivePreview';
import ComponentApi from '@site/src/components/ComponentApi';

# Datepicker

:::info
Only for Angular
:::

<LivePreview name="datepicker" height="23rem" framework="angular"></LivePreview>

# Disabled

<LivePreview name="datepicker-disabled" height="23rem" framework="angular"></LivePreview>

# Limiting dates

You can limit the dates available for navigation and selection using `[minDate]` and `[maxDate]` inputs.

# Custom date picker

See ngBootstrap Datepicker documentation https://ng-bootstrap.github.io/#/components/datepicker/overview

**_Only day-range, focused, range-start, range-end, faded, selectable and past class are styled_**

```html
<ngb-datepicker
  #dp
  (select)="onDateSelection($event)"
  [displayMonths]="2"
  [dayTemplate]="t"
  navigation="arrows"
>
</ngb-datepicker>

<ng-template #t let-date="date" let-focused="focused">
  <span
    class="day-range"
    [class.focused]="focused && !isPast(date)"
    [class.range-start]="isFrom(date)"
    [class.range-end]="isTo(date)"
    [class.faded]="isHovered(date) || isInside(date)"
    [class.selectable]="fromDate && toDate && !isInside(date) && !isPast(date)"
    [class.past]="isPast(date)"
    (mouseenter)="hoveredDate = date"
    (mouseleave)="hoveredDate = null"
  >
    {{ date.day }}
  </span></ng-template
>
```

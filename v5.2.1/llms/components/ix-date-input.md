# ix-date-input

> Text input for entering and validating a date value.

## Documentation

- https://ix.siemens.io//docs/components/input-date/guide.md

## Figma IDs

- 442365:42749

## Related examples

Example file links are relative to this Markdown file.

- date-input
  - angular:
    - `angular/date-input.html`: [file](../../examples/angular/date-input.html)
    - `angular/date-input.ts`: [file](../../examples/angular/date-input.ts)
  - angular-standalone:
    - `angular-standalone/date-input.html`: [file](../../examples/angular-standalone/date-input.html)
    - `angular-standalone/date-input.ts`: [file](../../examples/angular-standalone/date-input.ts)
  - html:
    - `html/date-input.html`: [file](../../examples/html/date-input.html)
  - react:
    - `react/date-input.tsx`: [file](../../examples/react/date-input.tsx)
  - vue:
    - `vue/date-input.vue`: [file](../../examples/vue/date-input.vue)
- date-input-disabled
  - angular:
    - `angular/date-input-disabled.html`: [file](../../examples/angular/date-input-disabled.html)
    - `angular/date-input-disabled.ts`: [file](../../examples/angular/date-input-disabled.ts)
  - angular-standalone:
    - `angular-standalone/date-input-disabled.html`: [file](../../examples/angular-standalone/date-input-disabled.html)
    - `angular-standalone/date-input-disabled.ts`: [file](../../examples/angular-standalone/date-input-disabled.ts)
  - html:
    - `html/date-input-disabled.html`: [file](../../examples/html/date-input-disabled.html)
  - react:
    - `react/date-input-disabled.tsx`: [file](../../examples/react/date-input-disabled.tsx)
  - vue:
    - `vue/date-input-disabled.vue`: [file](../../examples/vue/date-input-disabled.vue)
- date-input-label
  - angular:
    - `angular/date-input-label.html`: [file](../../examples/angular/date-input-label.html)
    - `angular/date-input-label.ts`: [file](../../examples/angular/date-input-label.ts)
  - angular-standalone:
    - `angular-standalone/date-input-label.html`: [file](../../examples/angular-standalone/date-input-label.html)
    - `angular-standalone/date-input-label.ts`: [file](../../examples/angular-standalone/date-input-label.ts)
  - html:
    - `html/date-input-label.html`: [file](../../examples/html/date-input-label.html)
  - react:
    - `react/date-input-label.tsx`: [file](../../examples/react/date-input-label.tsx)
  - vue:
    - `vue/date-input-label.vue`: [file](../../examples/vue/date-input-label.vue)
- date-input-min-max-date
  - angular:
    - `angular/date-input-min-max-date.html`: [file](../../examples/angular/date-input-min-max-date.html)
    - `angular/date-input-min-max-date.ts`: [file](../../examples/angular/date-input-min-max-date.ts)
  - angular-standalone:
    - `angular-standalone/date-input-min-max-date.html`: [file](../../examples/angular-standalone/date-input-min-max-date.html)
    - `angular-standalone/date-input-min-max-date.ts`: [file](../../examples/angular-standalone/date-input-min-max-date.ts)
  - html:
    - `html/date-input-min-max-date.html`: [file](../../examples/html/date-input-min-max-date.html)
  - react:
    - `react/date-input-min-max-date.tsx`: [file](../../examples/react/date-input-min-max-date.tsx)
  - vue:
    - `vue/date-input-min-max-date.vue`: [file](../../examples/vue/date-input-min-max-date.vue)
- date-input-readonly
  - angular:
    - `angular/date-input-readonly.html`: [file](../../examples/angular/date-input-readonly.html)
    - `angular/date-input-readonly.ts`: [file](../../examples/angular/date-input-readonly.ts)
  - angular-standalone:
    - `angular-standalone/date-input-readonly.html`: [file](../../examples/angular-standalone/date-input-readonly.html)
    - `angular-standalone/date-input-readonly.ts`: [file](../../examples/angular-standalone/date-input-readonly.ts)
  - html:
    - `html/date-input-readonly.html`: [file](../../examples/html/date-input-readonly.html)
  - react:
    - `react/date-input-readonly.tsx`: [file](../../examples/react/date-input-readonly.tsx)
  - vue:
    - `vue/date-input-readonly.vue`: [file](../../examples/vue/date-input-readonly.vue)
- date-range
  - angular:
    - `angular/date-range.ts`: [file](../../examples/angular/date-range.ts)
  - angular-standalone:
    - `angular-standalone/date-range.ts`: [file](../../examples/angular-standalone/date-range.ts)
  - html:
    - `html/date-range.html`: [file](../../examples/html/date-range.html)
  - react:
    - `react/date-range.tsx`: [file](../../examples/react/date-range.tsx)
  - vue:
    - `vue/date-range.vue`: [file](../../examples/vue/date-range.vue)
- range-field
  - angular:
    - `angular/range-field.ts`: [file](../../examples/angular/range-field.ts)
  - angular-standalone:
    - `angular-standalone/range-field.ts`: [file](../../examples/angular-standalone/range-field.ts)
  - html:
    - `html/range-field.html`: [file](../../examples/html/range-field.html)
  - react:
    - `react/range-field.tsx`: [file](../../examples/react/range-field.tsx)
  - vue:
    - `vue/range-field.vue`: [file](../../examples/vue/range-field.vue)

## Related blocks

Block and file links are relative to this Markdown file.

- None

## Properties

- `ariaLabelCalendarButton`; attr: `aria-label-calendar-button`; type: `string | undefined`; default: `'Open calendar'` - ARIA label for the calendar icon button. Will be set as aria-label on the nested HTML button element.
- `ariaLabelNextMonthButton`; attr: `aria-label-next-month-button`; type: `string | undefined`; default: `'Next month'` - ARIA label for the next month icon button. Will be set as aria-label on the nested HTML button element.
- `ariaLabelPreviousMonthButton`; attr: `aria-label-previous-month-button`; type: `string | undefined`; default: `'Previous month'` - ARIA label for the previous month icon button. Will be set as aria-label on the nested HTML button element.
- `disabled`; attr: `disabled`; type: `boolean`; default: `false` - Disabled attribute.
- `enableTopLayer`; attr: `enable-top-layer`; type: `boolean`; default: `false` - Enable Popover API rendering for dropdown.
- `format`; attr: `format`; type: `string`; default: `'yyyy/LL/dd'` - Date format string. See {@link https://moment.github.io/luxon/#/formatting?id=table-of-tokens} for all available tokens.
- `helperText`; attr: `helper-text`; type: `string | undefined` - Helper text below the input field.
- `i18nErrorDateUnparsable`; attr: `i18n-error-date-unparsable`; type: `string`; default: `'Date is not valid'` - I18n string for the error message when the date is not parsable.
- `infoText`; attr: `info-text`; type: `string | undefined` - Info text below the input field.
- `invalidText`; attr: `invalid-text`; type: `string | undefined` - Error text below the input field.
- `label`; attr: `label`; type: `string | undefined` - Label of the input field.
- `locale`; attr: `locale`; type: `string | undefined` - Locale identifier (e.g. 'en' or 'de'). The locale is used to translate the labels for weekdays and months. It also determines the default order of weekdays based on the locale's conventions. When the locale changes, the weekday labels are rotated according to the `weekStartIndex`. It does not affect the values returned by methods and events.
- `maxDate`; attr: `max-date`; type: `string`; default: `''` - The latest date that can be selected by the date input/picker. If not set there will be no restriction.
- `minDate`; attr: `min-date`; type: `string`; default: `''` - The earliest date that can be selected by the date input/picker. If not set there will be no restriction.
- `name`; attr: `name`; type: `string | undefined` - Name of the input element.
- `placeholder`; attr: `placeholder`; type: `string | undefined` - Placeholder of the input element.
- `readonly`; attr: `readonly`; type: `boolean`; default: `false` - Readonly attribute.
- `required`; attr: `required`; type: `boolean | undefined` - Required attribute.
- `showTextAsTooltip`; attr: `show-text-as-tooltip`; type: `boolean | undefined` - Show text as tooltip.
- `showWeekNumbers`; attr: `show-week-numbers`; type: `boolean`; default: `false` - Shows week numbers displayed on the left side of the date picker.
- `suppressSubmitOnEnter`; attr: `suppress-submit-on-enter`; type: `boolean`; default: `false` - If false, pressing Enter will submit the form (if inside a form). Set to true to suppress submit on Enter.
- `textAlignment`; attr: `text-alignment`; type: `"end" | "start"`; default: `'start'` - Text alignment within the date input. 'start' aligns the text to the start of the input, 'end' aligns the text to the end of the input.
- `validText`; attr: `valid-text`; type: `string | undefined` - Valid text below the input field.
- `value`; attr: `value`; type: `string | undefined`; default: `''` - Value of the input element.
- `warningText`; attr: `warning-text`; type: `string | undefined` - Warning text below the input field.
- `weekStartIndex`; attr: `week-start-index`; type: `number`; default: `0` - The index of which day to start the week on, based on the Locale#weekdays array. E.g. if the locale is en-us, weekStartIndex = 1 results in starting the week on Monday.

## Events

- `ixChange` - Change event. Emitted when the date input loses focus and the value has changed.
- `validityStateChange` - Validation state change event. Emitted when the validation state changes.
- `valueChange` - Value change event. Emitted when the input value changes.

## Slots

- `end` - Element will be displayed at the end of the input
- `start` - Element will be displayed at the start of the input

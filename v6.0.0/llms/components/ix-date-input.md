# ix-date-input

> Text input for entering and validating a date value.

- Web component: `<ix-date-input>`
- React/Vue: `IxDateInput` from `@siemens/ix-react` / `@siemens/ix-vue`
- Angular: `<ix-date-input>` (`IxModule` from `@siemens/ix-angular` or `IxDateInput` from `@siemens/ix-angular/standalone`)

## Documentation

- https://ix.siemens.io/docs/components/input-date/guide.md

## Figma IDs

- 442365:42749

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
- `locale`; attr: `locale`; type: `string | undefined` - Locale identifier (e.g. 'en' or 'de'). The locale is used to translate the labels for weekdays and months, determine the default order of weekdays, and parse user input. Values emitted via `valueChange` reflect the locale-formatted string as typed or selected by the user.
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
- `weekStartIndex`; attr: `week-start-index`; type: `number`; default: `0` - The index of the day the week starts on, as a 0-based index into Luxon's `Info.weekdays()` array. That array is always ordered Monday-first regardless of locale, so 0 is Monday, 1 is Tuesday and 6 is Sunday. E.g. weekStartIndex = 6 results in starting the week on Sunday.

## Events

- `ixChange` - Change event. Emitted when the date input loses focus and the value has changed.
- `validityStateChange` - Validation state change event. Emitted when the validation state changes.
- `valueChange` - Value change event. Emitted when the input value changes.

## Methods

- `focusInput() => Promise<void>` - Focuses the input field
- `getNativeInputElement() => Promise<HTMLInputElement>` - Get the native input element

## Slots

- `end` - Element will be displayed at the end of the input
- `start` - Element will be displayed at the start of the input

## Dependencies

- Renders: `ix-date-picker`, `ix-dropdown`, `ix-field-wrapper`, `ix-icon-button`
- Rendered by: None

## Related examples

Examples that use this component, with available frameworks. Look up source file paths in `../examples/{framework}.md`.

- date-input (angular, angular-standalone, html, react, vue)
- date-input-disabled (angular, angular-standalone, html, react, vue)
- date-input-label (angular, angular-standalone, html, react, vue)
- date-input-min-max-date (angular, angular-standalone, html, react, vue)
- date-input-readonly (angular, angular-standalone, html, react, vue)
- date-input-validation (angular, angular-standalone, html, react, vue)
- date-input-with-slots (angular, angular-standalone, html, react, vue)
- date-range (angular, angular-standalone, html, react, vue)
- form-validation (angular, angular-standalone, html, react, vue)
- input (angular, angular-standalone, html, react, vue)
- range-field (angular, angular-standalone, html, react, vue)

## Related patterns

Copyable multi-file UI patterns; files are listed in `../patterns.md`.

- None

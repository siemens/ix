import Playground from '@site/src/components/Playground';
import Props from './../auto-generated/ix-date-input/props.md';
import Events from './../auto-generated/ix-date-input/events.md';

import SourceDateInput from './../auto-generated/previews/web-component/date-input.md'
import SourceReactDateInput from './../auto-generated/previews/react/date-input.md'
import SourceAngularDateInput from './../auto-generated/previews/angular/date-input.ts.md'
import SourceVueDateInput from './../auto-generated/previews/vue/date-input.md'

import SourceDateInputRange from './../auto-generated/previews/web-component/date-input-range.md'
import SourceReactDateInputRange from './../auto-generated/previews/react/date-input-range.md'
import SourceAngularDateInputRange from './../auto-generated/previews/angular/date-input-range.ts.md'
import SourceVueDateInputRange from './../auto-generated/previews/vue/date-input-range.md'

import SourceDateValidation from './../auto-generated/previews/web-component/date-input-validation.md'
import SourceReactDateValidation from './../auto-generated/previews/react/date-input-validation.md'
import SourceAngularDateValidation from './../auto-generated/previews/angular/date-input-validation.ts.md'


# Date input

## Range Selection

<Playground
name="date-input-range" height="35rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactDateInputRange,
  angular: SourceAngularDateInputRange,
  javascript: SourceDateInputRange,
  vue: SourceVueDateInputRange
}}></Playground>

## Single Selection

<Playground
name="date-input" height="35rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactDateInput,
  angular: SourceAngularDateInput,
  javascript: SourceDateInput,
  vue: SourceVueDateInput
}}></Playground>

## Validation

<Playground
name="date-input-validation" height="35rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactDateValidation,
  angular: SourceAngularDateValidation,
  javascript: SourceDateValidation,
}}></Playground>

The `ix-date-input` validation can be customized by passing the names of the desired validations to the `validators` property. By default, the following validations will be applied when submitting a form:

- `validDate` - The entered dates are consistent with the provided `format` property.
- `toAfterFrom` - The second date of the date range is after the first one.
- `withinMinMax` - The entered dates are within the given `minDate` and `maxDate`.

If one of the validations that have been set fails, an error message will be displayed below the `ix-date-input`. These can be customized by passing an array of `InputValidator` instead of `string` to the `validators` property:

```tsx
<ix-date-input
  validators={[
    {
      validator: 'validDate',
      errorMessage: 'Custom message 1',
    },
    {
      validator: 'toAfterFrom',
      errorMessage: 'Custom message 2',
    },
    {
      validator: 'withinMinMax',
      errorMessage: 'Custom message 3',
    },
  ]}
></ix-date-input>
```

## Properties

### Props

<Props />

### Events

<Events />

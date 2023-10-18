import Playground from '@site/src/components/Playground';
import Props from './../auto-generated/ix-datetime-input/props.md';
import Events from './../auto-generated/ix-datetime-input/events.md';

import SourceDatetimeInput from './../auto-generated/previews/web-component/datetime-input.md'
import SourceReactDatetimeInput from './../auto-generated/previews/react/datetime-input.md'
import SourceAngularDatetimeInput from './../auto-generated/previews/angular/datetime-input.ts.md'
import SourceVueDatetimeInput from './../auto-generated/previews/vue/datetime-input.md'

import SourceDatetimeInputRange from './../auto-generated/previews/web-component/datetime-input-range.md'
import SourceReactDatetimeInputRange from './../auto-generated/previews/react/datetime-input-range.md'
import SourceAngularDatetimeInputRange from './../auto-generated/previews/angular/datetime-input-range.ts.md'
import SourceVueDatetimeInputRange from './../auto-generated/previews/vue/datetime-input-range.md'

import SourceDatetimeValidation from './../auto-generated/previews/web-component/datetime-input-validation.md'
import SourceReactDatetimeValidation from './../auto-generated/previews/react/datetime-input-validation.md'
import SourceAngularDatetimeValidation from './../auto-generated/previews/angular/datetime-input-validation.ts.md'

# Datetime input

## Range Selection

<Playground
name="datetime-input-range" height="35rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactDatetimeInputRange,
  angular: SourceAngularDatetimeInputRange,
  javascript: SourceDatetimeInputRange,
  vue: SourceVueDatetimeInputRange
}}></Playground>

## Single Selection

<Playground
name="datetime-input" height="35rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactDatetimeInput,
  angular: SourceAngularDatetimeInput,
  javascript: SourceDatetimeInput,
  vue: SourceVueDatetimeInput
}}></Playground>

## Validation

<Playground
name="datetime-input-validation" height="35rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactDatetimeValidation,
  angular: SourceAngularDatetimeValidation,
  javascript: SourceDatetimeValidation,
}}></Playground>

The `ix-datetime-input` validation can be customized by passing the names of the desired validations to the `validators` property. By default, the following validations will be applied when submitting a form:

- `validDate` - The entered dates are consistent with the provided `dateFormat` property.
- `validTime` - The entered times are consistent with the provided `timeFormat` property.
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
      validator: 'validTime',
      errorMessage: 'Custom message 2',
    },
    {
      validator: 'toAfterFrom',
      errorMessage: 'Custom message 3',
    },
    {
      validator: 'withinMinMax',
      errorMessage: 'Custom message 4',
    },
  ]}
></ix-date-input>
```

## Properties

### Props

<Props />

### Events

<Events />

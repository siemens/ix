import Playground from '@site/src/components/Playground';
import Props from './../auto-generated/ix-date-picker/props.md';
import Events from './../auto-generated/ix-date-picker/events.md';

import SourceDatePickerRange from './../auto-generated/previews/web-component/datepicker-range.md'
import SourceReactDatePickerRange from './../auto-generated/previews/react/datepicker-range.md'
import SourceAngularDatePickerRange from './../auto-generated/previews/angular/datepicker-range.ts.md'
import SourceVueDatePickerRange from './../auto-generated/previews/vue/datepicker-range.md'

import SourceDatePicker from './../auto-generated/previews/web-component/datepicker.md'
import SourceReactDatePicker from './../auto-generated/previews/react/datepicker.md'
import SourceAngularDatePicker from './../auto-generated/previews/angular/datepicker.ts.md'
import SourceVueDatePicker from './../auto-generated/previews/vue/datepicker.md'

# Date picker

## Range Selection

<Playground
name="datepicker-range" height="35rem"
frameworks={{
    react: SourceReactDatePickerRange,
    angular: SourceAngularDatePickerRange,
    javascript: SourceDatePickerRange,
    vue: SourceVueDatePickerRange
}}></Playground>

## Single Selection

<Playground
name="datepicker" height="35rem"
frameworks={{
    react: SourceReactDatePicker,
    angular: SourceAngularDatePicker,
    javascript: SourceDatePicker,
    vue: SourceVueDatePicker
}}></Playground>

## Translation

The `ix-date-picker` can be configured using [BCP 47](https://tools.ietf.org/html/rfc5646) locale strings specifying the language to use generating or interpreting strings. More information can be found [here](https://moment.github.io/luxon/#/intl?id=default-locale)

<Playground
name="datepicker-locale" height="35rem"
examplesByName></Playground>

## Properties

### Props

<Props />

### Events

<Events />

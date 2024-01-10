import Playground from '@site/src/components/Playground';
import Props from './../auto-generated/ix-date-picker/props.md';
import Events from './../auto-generated/ix-date-picker/events.md';

import SourceDatepicker from './../auto-generated/previews/web-component/datepicker.md'
import SourceReactDatepicker from './../auto-generated/previews/react/datepicker.md'
import SourceAngularDatepicker from './../auto-generated/previews/angular/datepicker.ts.md'
import SourceVueDatepicker from './../auto-generated/previews/vue/datepicker.md'

import SourceDatepickerRange from './../auto-generated/previews/web-component/datepicker-range.md'
import SourceReactDatepickerRange from './../auto-generated/previews/react/datepicker-range.md'
import SourceAngularDatepickerRange from './../auto-generated/previews/angular/datepicker-range.ts.md'
import SourceVueDatepickerRange from './../auto-generated/previews/vue/datepicker-range.md'


import SourceDatepickerLocale from './../auto-generated/previews/web-component/datepicker.md'
import SourceReactDatepickerLocale from './../auto-generated/previews/react/datepicker.md'
import SourceAngularDatepickerLocale from './../auto-generated/previews/angular/datepicker.ts.md'
import SourceVueDatepickerLocale from './../auto-generated/previews/vue/datepicker-locale.md'

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

## Translation

The `ix-date-picker` can be configured using [BCP 47](https://tools.ietf.org/html/rfc5646) locale strings specifying the language to use generating or interpreting strings. More information can be found [here](https://moment.github.io/luxon/#/intl?id=default-locale)

<Playground
name="datepicker-locale" height="35rem"
frameworks={{
  react: SourceReactDatepickerLocale,
  angular: SourceAngularDatepickerLocale,
  javascript: SourceDatepickerLocale,
  vue: SourceVueDatepickerLocale
}}></Playground>

## Properties

### Props

<Props />

### Events

<Events />

import Playground from '@site/src/components/Playground';
import Props from './../auto-generated/ix-date-picker/props.md';
import Events from './../auto-generated/ix-date-picker/events.md';

import SourceDatepicker from './../auto-generated/previews/web-component/datepicker.md'
import SourceReactDatepicker from './../auto-generated/previews/react/datepicker.md'
import SourceAngularDatepicker from './../auto-generated/previews/angular/datepicker.md'

import SourceDatepickerRange from './../auto-generated/previews/web-component/datepicker-range.md'
import SourceReactDatepickerRange from './../auto-generated/previews/react/datepicker-range.md'
import SourceAngularDatepickerRange from './../auto-generated/previews/angular/datepicker-range.md'

# Date picker

## Usage

<Playground
name="datepicker" height="35rem"
frameworks={{
  react: SourceReactDatepicker,
  angular: SourceAngularDatepicker,
  javascript: SourceDatepicker
}}></Playground>

### with range selection

<Playground
name="datepicker-range" height="35rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactDatepickerRange,
  angular: SourceAngularDatepickerRange,
  javascript: SourceDatepickerRange
}}></Playground>

## Properties

### Props

<Props />

### Events

<Events />

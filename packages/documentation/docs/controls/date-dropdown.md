import Playground from '@site/src/components/Playground';
import Props from './../auto-generated/ix-date-dropdown/props.md';
import Events from './../auto-generated/ix-date-dropdown/events.md';

import SourceDateDateDropdown from './../auto-generated/previews/web-component/date-dropdown.md'
import SourceReactDateDropdown from './../auto-generated/previews/react/date-dropdown.md'
import SourceAngularDateDropdown from './../auto-generated/previews/angular/date-dropdown.ts.md'
import SourceVueDateDropdown from './../auto-generated/previews/vue/date-dropdown.md'

import SourceDateDropdownUserRange from './../auto-generated/previews/web-component/date-dropdown-user-range.md'
import SourceReactDateDropdownUserRange from './../auto-generated/previews/react/date-dropdown-user-range.md'
import SourceAngularDateDropdownUserRange from './../auto-generated/previews/angular/date-dropdown-user-range.ts.md'
import SourceVueDateDropdownUserRange from './../auto-generated/previews/vue/date-dropdown-user-range.md'

# Date Dropdown

## Usage

<Playground
  name="date-dropdown" height="35rem"
  frameworks={{
    react: SourceReactDateDropdown,
    angular: SourceAngularDateDropdown,
    javascript: SourceDateDateDropdown,
    vue: SourceVueDateDropdown
}}></Playground>

## with user defined range options

<Playground
  name="date-dropdown-user-range" height="35rem"
  frameworks={{
  react: SourceReactDateDropdownUserRange,
  angular: SourceAngularDateDropdownUserRange,
  javascript: SourceDateDropdownUserRange,
  vue: SourceVueDateDropdownUserRange
}}></Playground>

## Properties

### Props

<Props/>

### Events

<Events/>

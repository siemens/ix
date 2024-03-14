import Playground from '@site/src/components/Playground';
import Props from './../auto-generated/ix-date-dropdown/props.md';
import Events from './../auto-generated/ix-date-dropdown/events.md';

import SourceDateDropdown from './../auto-generated/previews/web-component/date-dropdown.md'
import SourceReactDateDropdown from './../auto-generated/previews/react/date-dropdown.md'
import SourceAngularDateDropdown from './../auto-generated/previews/angular/date-dropdown.ts.md'
import SourceVueDateDropdown from './../auto-generated/previews/vue/date-dropdown.md'

import SourceDateDropdownUserRange from './../auto-generated/previews/web-component/date-dropdown-user-range.md'
import SourceReactDateDropdownUserRange from './../auto-generated/previews/react/date-dropdown-user-range.md'
import SourceAngularDateDropdownUserRangeTs from './../auto-generated/previews/angular/date-dropdown-user-range.ts.md'
import SourceAngularDateDropdownUserRangeHtml from './../auto-generated/previews/angular/date-dropdown-user-range.html.md'
import SourceVueDateDropdownUserRange from './../auto-generated/previews/vue/date-dropdown-user-range.md'

# Date dropdown

## Examples

<Playground
  name="date-dropdown" height="34rem"
  frameworks={{
    react: SourceReactDateDropdown,
    angular: SourceAngularDateDropdown,
    javascript: SourceDateDropdown,
    vue: SourceVueDateDropdown
}}></Playground>

### With user defined range options

<Playground
  name="date-dropdown-user-range" height="34rem"
  frameworks={{
    react: SourceReactDateDropdownUserRange,
    angular: {
      "date-dropdown-user-range.html": SourceAngularDateDropdownUserRangeHtml,
      "date-dropdown-user-range.ts": SourceAngularDateDropdownUserRangeTs
    },
    javascript: SourceDateDropdownUserRange,
    vue: SourceVueDateDropdownUserRange
}}></Playground>

## API (ix-date-dropdown)

### Props

<Props/>

### Events

<Events/>

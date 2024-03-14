import Playground from '@site/src/components/Playground';

import SourceCheckbox from './../auto-generated/previews/web-component/checkbox.md'
import SourceCheckboxInderterminate from './../auto-generated/previews/web-component/checkbox-indeterminate.md'
import SourceReactCheckbox from './../auto-generated/previews/react/checkbox.md'
import SourceReactCheckboxInderterminate from './../auto-generated/previews/react/checkbox-indeterminate.md'
import SourceAngularCheckbox from './../auto-generated/previews/angular/checkbox.ts.md'
import SourceAngularCheckboxInderterminate from './../auto-generated/previews/angular/checkbox-indeterminate.ts.md'

import SourceVueCheckbox from './../auto-generated/previews/vue/checkbox.md'
import SourceVueCheckboxInderterminate from './../auto-generated/previews/vue/checkbox-indeterminate.md'

# Checkbox

## Examples

<Playground
name="checkbox" height="8rem"
frameworks={{
  react: SourceReactCheckbox,
  angular: SourceAngularCheckbox,
  javascript: SourceCheckbox,
  vue: SourceVueCheckbox
}}></Playground>

### Indeterminate

<Playground
name="checkbox-indeterminate" height="8rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactCheckboxInderterminate,
  angular: SourceAngularCheckboxInderterminate,
  javascript: SourceCheckboxInderterminate,
  vue: SourceVueCheckboxInderterminate
}}></Playground>

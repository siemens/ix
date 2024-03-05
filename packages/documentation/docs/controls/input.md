import Playground from '@site/src/components/Playground';

import SourceInput from './../auto-generated/previews/web-component/input.md'
import SourceInputDisabled from './../auto-generated/previews/web-component/input-disabled.md'
import SourceInputReadonly from './../auto-generated/previews/web-component/input-readonly.md'
import SourceInputIcon from './../auto-generated/previews/web-component/input-with-icon.md'
import SourceInputSearch from './../auto-generated/previews/web-component/input-search.md'
import SourceInputTypes from './../auto-generated/previews/web-component/input-types.md'
import SourceInputLabels from './../auto-generated/previews/web-component/input-labels.md'

import SourceReactInput from './../auto-generated/previews/react/input.md'
import SourceReactInputDisabled from './../auto-generated/previews/react/input-disabled.md'
import SourceReactInputReadonly from './../auto-generated/previews/react/input-readonly.md'
import SourceReactInputIcon from './../auto-generated/previews/react/input-with-icon.md'
import SourceReactInputSearch from './../auto-generated/previews/react/input-search.md'
import SourceReactInputTypes from './../auto-generated/previews/react/input-types.md'
import SourceReactInputLabels from './../auto-generated/previews/react/input-labels.md'

import SourceAngularInput from './../auto-generated/previews/angular/input.ts.md'
import SourceAngularInputDisabled from './../auto-generated/previews/angular/input-disabled.ts.md'
import SourceAngularInputReadonly from './../auto-generated/previews/angular/input-readonly.ts.md'
import SourceAngularInputIcon from './../auto-generated/previews/angular/input-with-icon.ts.md'
import SourceAngularInputSearch from './../auto-generated/previews/angular/input-search.ts.md'
import SourceAngularInputTypes from './../auto-generated/previews/angular/input-types.ts.md'
import SourceAngularInputLabels from './../auto-generated/previews/angular/input-labels.ts.md'

import SourceVueInput from './../auto-generated/previews/vue/input.md'
import SourceVueInputDisabled from './../auto-generated/previews/vue/input-disabled.md'
import SourceVueInputReadonly from './../auto-generated/previews/vue/input-readonly.md'
import SourceVueInputIcon from './../auto-generated/previews/vue/input-with-icon.md'
import SourceVueInputSearch from './../auto-generated/previews/vue/input-search.md'
import SourceVueInputTypes from './../auto-generated/previews/vue/input-types.md'
import SourceVueInputLabels from './../auto-generated/previews/vue/input-labels.md'

# Input

## Example

<Playground
name="input"
frameworks={{
  react: SourceReactInput,
  angular: SourceAngularInput,
  javascript: SourceInput,
  vue: SourceVueInput
}}></Playground>

### Disabled

<Playground
name="input-disabled"
hideInitalCodePreview
frameworks={{
  react: SourceReactInputDisabled,
  angular: SourceAngularInputDisabled,
  javascript: SourceInputDisabled,
  vue: SourceVueInputDisabled
}}></Playground>

### Readonly

<Playground
name="input-readonly"
hideInitalCodePreview
frameworks={{
  react: SourceReactInputReadonly,
  angular: SourceAngularInputReadonly,
  javascript: SourceInputReadonly,
  vue: SourceVueInputReadonly
}}></Playground>

### With icon

<Playground
name="input-with-icon"
hideInitalCodePreview
frameworks={{
  react: SourceReactInputIcon,
  angular: SourceAngularInputIcon,
  javascript: SourceInputIcon,
  vue: SourceVueInputIcon
}}></Playground>

### Label placement

<Playground
name="input-labels"
hideInitalCodePreview
frameworks={{
  react: SourceReactInputLabels,
  angular: SourceAngularInputLabels,
  javascript: SourceInputLabels,
  vue: SourceVueInputLabels
}}></Playground>

### Input types

<Playground
name="input-types"
height="15rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactInputTypes,
  angular: SourceAngularInputTypes,
  javascript: SourceInputTypes,
  vue: SourceVueInputTypes
}}></Playground>

### Search

<Playground
name="input-search"
hideInitalCodePreview
frameworks={{
  react: SourceReactInputSearch,
  angular: SourceAngularInputSearch,
  javascript: SourceInputSearch,
  vue: SourceVueInputSearch
}}></Playground>

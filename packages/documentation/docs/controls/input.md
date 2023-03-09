import Playground from '@site/src/components/Playground';

import SourceInput from './../auto-generated/previews/web-component/input.md'
import SourceInputDisabled from './../auto-generated/previews/web-component/input-disabled.md'
import SourceInputReadonly from './../auto-generated/previews/web-component/input-readonly.md'
import SourceInputIcon from './../auto-generated/previews/web-component/input-with-icon.md'
import SourceInputSearch from './../auto-generated/previews/web-component/input-search.md'

import SourceReactInput from './../auto-generated/previews/react/input.md'
import SourceReactInputDisabled from './../auto-generated/previews/react/input-disabled.md'
import SourceReactInputReadonly from './../auto-generated/previews/react/input-readonly.md'
import SourceReactInputIcon from './../auto-generated/previews/react/input-with-icon.md'
import SourceReactInputSearch from './../auto-generated/previews/react/input-search.md'

import SourceAngularInput from './../auto-generated/previews/angular/input.ts.md'
import SourceAngularInputDisabled from './../auto-generated/previews/angular/input-disabled.ts.md'
import SourceAngularInputReadonly from './../auto-generated/previews/angular/input-readonly.ts.md'
import SourceAngularInputIcon from './../auto-generated/previews/angular/input-with-icon.ts.md'
import SourceAngularInputSearch from './../auto-generated/previews/angular/input-search.ts.md'

# Input

## Usage

<Playground
name="input"
frameworks={{
  react: SourceReactInput,
  angular: SourceAngularInput,
  javascript: SourceInput
}}></Playground>

### Disabled

<Playground
name="input-disabled"
hideInitalCodePreview
frameworks={{
  react: SourceReactInputDisabled,
  angular: SourceAngularInputDisabled,
  javascript: SourceInputDisabled
}}></Playground>

### Readonly

<Playground
name="input-readonly"
hideInitalCodePreview
frameworks={{
  react: SourceReactInputReadonly,
  angular: SourceAngularInputReadonly,
  javascript: SourceInputReadonly
}}></Playground>

### with Icon

<Playground
name="input-with-icon"
hideInitalCodePreview
frameworks={{
  react: SourceReactInputIcon,
  angular: SourceAngularInputIcon,
  javascript: SourceInputIcon
}}></Playground>

### Search

<Playground
name="input-search"
hideInitalCodePreview
frameworks={{
  react: SourceReactInputSearch,
    angular: SourceAngularInputSearch,
  javascript: SourceInputSearch
}}></Playground>

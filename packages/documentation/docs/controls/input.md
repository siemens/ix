import Playground from '@site/src/components/Playground';

import SourceInput from './../auto-generated/previews/web-component/input.md'
import SourceInputDisabled from './../auto-generated/previews/web-component/input-disabled.md'
import SourceInputReadonly from './../auto-generated/previews/web-component/input-readonly.md'
import SourceInputIcon from './../auto-generated/previews/web-component/input-with-icon.md'

import SourceReactInput from './../auto-generated/previews/react/input.md'
import SourceReactInputDisabled from './../auto-generated/previews/react/input-disabled.md'
import SourceReactInputReadonly from './../auto-generated/previews/react/input-readonly.md'
import SourceReactInputIcon from './../auto-generated/previews/react/input-with-icon.md'

import SourceAngularInput from './../auto-generated/previews/angular/input.ts.md'
import SourceAngularInputDisabled from './../auto-generated/previews/angular/input-disabled.ts.md'
import SourceAngularInputReadonly from './../auto-generated/previews/angular/input-readonly.ts.md'
import SourceAngularInputIcon from './../auto-generated/previews/angular/input-with-icon.ts.md'

import SourceVueInput from './../auto-generated/previews/vue/input.md'
import SourceVueInputDisabled from './../auto-generated/previews/vue/input-disabled.md'
import SourceVueInputReadonly from './../auto-generated/previews/vue/input-readonly.md'
import SourceVueInputIcon from './../auto-generated/previews/vue/input-with-icon.md'

# Input

## Usage

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

### with Icon

<Playground
name="input-with-icon"
hideInitalCodePreview
frameworks={{
  react: SourceReactInputIcon,
  angular: SourceAngularInputIcon,
  javascript: SourceInputIcon,
  vue: SourceVueInputIcon
}}></Playground>

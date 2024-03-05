import Playground from '@site/src/components/Playground';

import SourceTextarea from './../auto-generated/previews/web-component/textarea.md';
import SourceTextareaDisabled from './../auto-generated/previews/web-component/textarea-disabled.md';
import SourceTextareaReadonly from './../auto-generated/previews/web-component/textarea-readonly.md';

import SourceReactTextarea from './../auto-generated/previews/react/textarea.md';
import SourceReactTextareaDisabled from './../auto-generated/previews/react/textarea-disabled.md';
import SourceReactTextareaReadonly from './../auto-generated/previews/react/textarea-readonly.md';

import SourceAngularTextarea from './../auto-generated/previews/angular/textarea.ts.md';
import SourceAngularTextareaDisabled from './../auto-generated/previews/angular/textarea-disabled.ts.md';
import SourceAngularTextareaReadonly from './../auto-generated/previews/angular/textarea-readonly.ts.md';

import SourceVueTextarea from './../auto-generated/previews/vue/textarea.md';
import SourceVueTextareaDisabled from './../auto-generated/previews/vue/textarea-disabled.md';
import SourceVueTextareaReadonly from './../auto-generated/previews/vue/textarea-readonly.md';

# Text area

## Example

<Playground
name="textarea" height="7rem"
frameworks={{
  react: SourceReactTextarea,
  angular: SourceAngularTextarea,
  javascript: SourceTextarea,
  vue: SourceVueTextarea
}}></Playground>

### Disabled

<Playground
name="textarea-disabled" height="7rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactTextareaDisabled,
  angular: SourceAngularTextareaDisabled,
  javascript: SourceTextareaDisabled,
  vue: SourceVueTextareaDisabled
}}></Playground>

### Readonly

<Playground
name="textarea-readonly" height="7rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactTextareaReadonly,
  angular: SourceAngularTextareaReadonly,
  javascript: SourceTextareaReadonly,
  vue: SourceVueTextareaReadonly
}}></Playground>

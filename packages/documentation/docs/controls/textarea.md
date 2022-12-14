import Playground from '@site/src/components/Playground';

import SourceTextarea from './../auto-generated/previews/web-component/textarea.md';
import SourceTextareaDisabled from './../auto-generated/previews/web-component/textarea-disabled.md';
import SourceTextareaReadonly from './../auto-generated/previews/web-component/textarea-readonly.md';

import SourceReactTextarea from './../auto-generated/previews/react/textarea.md';
import SourceReactTextareaDisabled from './../auto-generated/previews/react/textarea-disabled.md';
import SourceReactTextareaReadonly from './../auto-generated/previews/react/textarea-readonly.md';

import SourceAngularTextarea from './../auto-generated/previews/angular/textarea.md';
import SourceAngularTextareaDisabled from './../auto-generated/previews/angular/textarea-disabled.md';
import SourceAngularTextareaReadonly from './../auto-generated/previews/angular/textarea-readonly.md';

# Textarea

## Usage

<Playground
name="textarea" height="7rem"
frameworks={{
  react: SourceReactTextarea,
  angular: SourceAngularTextarea,
  javascript: SourceTextarea
}}></Playground>

### Disabled

<Playground
name="textarea-disabled" height="7rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactTextareaDisabled,
  angular: SourceAngularTextareaDisabled,
  javascript: SourceTextareaDisabled
}}></Playground>

### Readonly

<Playground
name="textarea-readonly" height="7rem"
hideInitalCodePreview
frameworks={{
  react: SourceReactTextareaReadonly,
  angular: SourceAngularTextareaReadonly,
  javascript: SourceTextareaReadonly
}}></Playground>

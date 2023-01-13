import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import SourceTextarea from './../auto-generated/previews/web-component/textarea.md';
import SourceTextareaDisabled from './../auto-generated/previews/web-component/textarea-disabled.md';
import SourceTextareaReadonly from './../auto-generated/previews/web-component/textarea-readonly.md';

import SourceReactTextarea from './../auto-generated/previews/react/textarea.md';
import SourceReactTextareaDisabled from './../auto-generated/previews/react/textarea-disabled.md';
import SourceReactTextareaReadonly from './../auto-generated/previews/react/textarea-readonly.md';

import SourceVueTextarea from './../auto-generated/previews/vue/textarea.md';
import SourceVueTextareaDisabled from './../auto-generated/previews/vue/textarea-disabled.md';
import SourceVueTextareaReadonly from './../auto-generated/previews/vue/textarea-readonly.md';

import SourceAngularTextarea from './../auto-generated/previews/angular/textarea.md';
import SourceAngularTextareaDisabled from './../auto-generated/previews/angular/textarea-disabled.md';
import SourceAngularTextareaReadonly from './../auto-generated/previews/angular/textarea-readonly.md';

# Textarea

## Usage

<Preview name="textarea" height="7rem">
  <TabItem value="javascript">
    <SourceTextarea />
  </TabItem>
  <TabItem value="react">
    <SourceReactTextarea />
  </TabItem>
  <TabItem value="vue">
    <SourceVueTextarea />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularTextarea />
  </TabItem>
</Preview>

### Disabled

<Preview name="textarea-disabled" height="7rem">
  <TabItem value="javascript">
    <SourceTextareaDisabled />
  </TabItem>
  <TabItem value="react">
    <SourceReactTextareaDisabled />
  </TabItem>
  <TabItem value="vue">
    <SourceVueTextareaDisabled />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularTextareaDisabled />
  </TabItem>
</Preview>

### Readonly

<Preview name="textarea-readonly" height="7rem">
  <TabItem value="javascript">
    <SourceTextareaReadonly />
  </TabItem>
  <TabItem value="react">
    <SourceReactTextareaReadonly />
  </TabItem>
  <TabItem value="vue">
    <SourceVueTextareaReadonly />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularTextareaReadonly />
  </TabItem>
</Preview>

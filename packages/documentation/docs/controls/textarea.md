import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import SourceTextarea from './../auto-generated/previews/web-component/textarea.md';
import SourceTextareaDisabled from './../auto-generated/previews/web-component/textarea-disabled.md';
import SourceTextareaReadonly from './../auto-generated/previews/web-component/textarea-readonly.md';

import SourceReactTextarea from './../auto-generated/previews/react/textarea.md';
import SourceReactTextareaDisabled from './../auto-generated/previews/react/textarea-disabled.md';
import SourceReactTextareaReadonly from './../auto-generated/previews/react/textarea-readonly.md';

# Textarea

## Usage

<Preview name="textarea" height="7rem">
  <TabItem value="javascript">
    <SourceTextarea />
  </TabItem>
  <TabItem value="react">
    <SourceReactTextarea />
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
</Preview>

### Readonly

<Preview name="textarea-readonly" height="7rem">
  <TabItem value="javascript">
    <SourceTextareaReadonly />
  </TabItem>
  <TabItem value="react">
    <SourceReactTextareaReadonly />
  </TabItem>
</Preview>

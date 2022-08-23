import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import SourceInput from './../auto-generated/previews/web-component/input.md'
import SourceInputDisabled from './../auto-generated/previews/web-component/input-disabled.md'
import SourceInputReadonly from './../auto-generated/previews/web-component/input-readonly.md'
import SourceInputIcon from './../auto-generated/previews/web-component/input-with-icon.md'

import SourceReactInput from './../auto-generated/previews/react/input.md'
import SourceReactInputDisabled from './../auto-generated/previews/react/input-disabled.md'
import SourceReactInputReadonly from './../auto-generated/previews/react/input-readonly.md'
import SourceReactInputIcon from './../auto-generated/previews/react/input-with-icon.md'

# Input

## Usage

<Preview name="input">
  <TabItem value="javascript">
    <SourceInput />
  </TabItem>
  <TabItem value="react">
    <SourceReactInput />
  </TabItem>
</Preview>

### Disabled

<Preview name="input-disabled">
  <TabItem value="javascript">
    <SourceInputDisabled />
  </TabItem>
  <TabItem value="react">
    <SourceReactInputDisabled />
  </TabItem>
</Preview>

### Readonly

<Preview name="input-readonly">
  <TabItem value="javascript">
    <SourceInputReadonly />
  </TabItem>
  <TabItem value="react">
    <SourceReactInputReadonly />
  </TabItem>
</Preview>

### with Icon

<Preview name="input-with-icon">
  <TabItem value="javascript">
    <SourceInputIcon />
  </TabItem>
  <TabItem value="react">
    <SourceReactInputIcon />
  </TabItem>
</Preview>

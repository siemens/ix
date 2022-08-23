import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import SourceCheckbox from './../auto-generated/previews/web-component/checkbox.md'
import SourceCheckboxInderterminate from './../auto-generated/previews/web-component/checkbox-indeterminate.md'
import SourceReactCheckbox from './../auto-generated/previews/react/checkbox.md'
import SourceReactCheckboxInderterminate from './../auto-generated/previews/react/checkbox-indeterminate.md'

# Checkbox

## Usage

<Preview name="checkbox" height="8rem">
  <TabItem value="javascript">
    <SourceCheckbox />
  </TabItem>
  <TabItem value="react">
    <SourceReactCheckbox />
  </TabItem>
</Preview>

### Indeterminate

<Preview name="checkbox-indeterminate" height="8rem">
  <TabItem value="javascript">
    <SourceCheckboxInderterminate />
  </TabItem>
  <TabItem value="react">
    <SourceReactCheckboxInderterminate />
  </TabItem>
</Preview>

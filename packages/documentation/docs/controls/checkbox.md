import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import SourceCheckbox from './../auto-generated/previews/web-component/checkbox.md'
import SourceCheckboxInderterminate from './../auto-generated/previews/web-component/checkbox-indeterminate.md'
import SourceReactCheckbox from './../auto-generated/previews/react/checkbox.md'
import SourceReactCheckboxInderterminate from './../auto-generated/previews/react/checkbox-indeterminate.md'
import SourceAngularCheckbox from './../auto-generated/previews/angular/checkbox.md'
import SourceAngularCheckboxInderterminate from './../auto-generated/previews/angular/checkbox-indeterminate.md'
import SourceVueCheckbox from './../auto-generated/previews/vue/checkbox.md'
import SourceVueCheckboxInderterminate from './../auto-generated/previews/vue/checkbox-indeterminate.md'

# Checkbox

## Usage

<Preview name="checkbox" height="8rem">
  <TabItem value="javascript">
    <SourceCheckbox />
  </TabItem>
  <TabItem value="react">
    <SourceReactCheckbox />
  </TabItem>
  <TabItem value="vue">
    <SourceVueCheckbox />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularCheckbox />
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
  <TabItem value="vue">
    <SourceVueCheckboxInderterminate />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularCheckboxInderterminate />
  </TabItem>
</Preview>

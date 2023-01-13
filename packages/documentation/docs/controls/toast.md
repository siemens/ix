import Preview from '@site/src/components/Preview';
import TabItem from '@theme/TabItem';

import SourceToast from './../auto-generated/previews/web-component/toast.md';
import SourceReactToast from './../auto-generated/previews/react/toast.md';
import SourceVueToast from './../auto-generated/previews/vue/toast.md';
import SourceAngularToast from './../auto-generated/previews/angular/toast.md';

import SourceToastCustom from './../auto-generated/previews/web-component/toast-custom.md';
import SourceAngularToastCustom from './../auto-generated/previews/angular/toast-custom.md';
import SourceReactToastCustom from './../auto-generated/previews/react/toast-custom.md';
import SourceVueToastCustom from './../auto-generated/previews/vue/toast-custom.md';

# Toast

<Preview name="toast" height="18rem">
  <TabItem value="javascript">
    <SourceToast />
  </TabItem>
  <TabItem value="react">
    <SourceReactToast />
  </TabItem>
  <TabItem value="vue">
    <SourceVueToast />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularToast />
  </TabItem>
</Preview>

## Custom toast message

<Preview name="toast-custom" height="18rem">
  <TabItem value="javascript">
    <SourceToastCustom />
  </TabItem>
  <TabItem value="angular">
    <SourceAngularToastCustom />
  </TabItem>
  <TabItem value="react">
    <SourceReactToastCustom />
  </TabItem>
  <TabItem value="vue">
    <SourceVueToastCustom />
  </TabItem>
</Preview>

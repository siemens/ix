import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import SourceModal from './../auto-generated/previews/web-component/modal.md'
import SourceReactModal from './../auto-generated/previews/react/modal.md'
import SourceVueModal from './../auto-generated/previews/vue/modal.md'
import SourceAngularModal from './../auto-generated/previews/angular/modal.md'

# Modal

How to open a modal depends on the framework in use. Note that you will not instantiate `ix-modal` on your own.
Select the appropriate tab below for the respective usage information.

<Preview name="modal" height="35rem">
  <TabItem value="javascript">
    <SourceModal />
  </TabItem>
  <TabItem value="react">
    <SourceReactModal />
  </TabItem>
  <TabItem value="vue">
    <SourceVueModal />
  </TabItem>
  <TabItem value="angular">

`@siemens/ix-angular` provides an injectable service that allows you to open modal dialogs based on a `ng-template` reference.
If you want to pass arbitrary data to the modal use the `data`-property. In order to access that inside the modal template use `let-modal` as seen in this example:

  <SourceAngularModal />

  </TabItem>
</Preview>

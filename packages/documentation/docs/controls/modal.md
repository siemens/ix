import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import SourceModal from './../auto-generated/previews/web-component/modal.md'
import SourceReactModal from './../auto-generated/previews/react/modal.md'
import SourceAngularModal from './../auto-generated/previews/angular/modal.md'

# Modal

<Preview name="modal" height="35rem">
  <TabItem value="javascript">
    <SourceModal />
  </TabItem>
  <TabItem value="react">
    <SourceReactModal />
  </TabItem>
  <TabItem value="angular">

#### Usage of `ModalService`

`@siemens/ix-angular` provides you an service to show modal dialogs based on an `ng-template` reference.  
It is also provide a data object which will be available during rendering phase. If you define `let-modal` inside  
your `ng-template` you can access the data with the `data`-property.

A complete example can be seen here:

  <SourceAngularModal />

  </TabItem>
</Preview>

import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';

import SourceModal from './../auto-generated/previews/web-component/modal.md'
import SourceReactModal from './../auto-generated/previews/react/modal.md'
import SourceAngularModal from './../auto-generated/previews/angular/modal.md'

# Modal

The `Modal` itself cannot be used as a component directly. You have to implement it in the style of your
target framework e.g. angular.

In the following section you will find the different examples how do you open an `Modal`.

<Preview name="modal" height="35rem">
  <TabItem value="javascript">
    <SourceModal />
  </TabItem>
  <TabItem value="react">
    <SourceReactModal />
  </TabItem>
  <TabItem value="angular">

### Usage of `ModalService`

<br/>

`@siemens/ix-angular` provides you an service to show modal dialogs based on an `ng-template` reference.  
It is also provide a data object which will be available during rendering phase. If you define `let-modal` inside  
your `ng-template` you can access the data with the `data`-property.

A complete example can be seen here:

  <SourceAngularModal />

  </TabItem>
</Preview>

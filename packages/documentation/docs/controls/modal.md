import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Playground from '@site/src/components/Playground';

import SourceModal from './../auto-generated/previews/web-component/modal.md'
import SourceReactModal from './../auto-generated/previews/react/modal.md'
import SourceAngularModal from './../auto-generated/previews/angular/modal.md'

# Modal

How to open a modal depends on the framework in use. Note that you will not instantiate `ix-modal` on your own.
Select the appropriate tab below for the respective usage information.

## Angular specific

`@siemens/ix-angular` provides an injectable service that allows you to open modal dialogs based on a `ng-template` reference.
If you want to pass arbitrary data to the modal use the `data`-property. In order to access that inside the modal template use `let-modal` as seen in the angular example above.

## Usage

<Playground
name="modal" height="35rem"
frameworks={{
  react: SourceReactModal,
  angular: SourceAngularModal,
  javascript: SourceModal
}}>
</Playground>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Preview from '@site/src/components/Preview';
import Playground from '@site/src/components/Playground';

import SourceModal from './../auto-generated/previews/web-component/modal.md'
import SourceReactModal from './../auto-generated/previews/react/modal.md'
import SourceVueModal from './../auto-generated/previews/vue/modal.md'
import SourceAngularModal from './../auto-generated/previews/angular/modal-by-template.ts.md'
import SourceAngularModalByInstance from './../auto-generated/previews/angular/modal-by-instance.ts.md'
import SourceAngularModalByInstanceContent from './../auto-generated/previews/angular/modal-by-instance-content.ts.md'

import PropsJavaScript from './../auto-generated/ix-modal/props.md'

import EventsJavaScript from './../auto-generated/ix-modal/events.md'

import ApiModalConfigAngular from './\_modal/angular/modal-config.md'
import ApiModalServiceAngular from './\_modal/angular/modal-service.html.md'
import ApiModalInstanceAngular from './\_modal/angular/modal-instance.html.md'

import ApiModalConfigReact from './\_modal/react/modal-config.md'
import ApiModalRefReact from './\_modal/react/modal-ref.html.md'

# Modal

How to open a modal depends on the framework in use. Note that you will not instantiate `ix-modal` on your own.
Select the appropriate tab below for the respective usage information.

## Usage

<Playground
name="modal" height="18rem"
frameworks={{
  react: SourceReactModal,
  angular: {
    'modal-by-template.ts': SourceAngularModal,
    "modal-by-instance.ts": SourceAngularModalByInstance,
    "modal-by-instance-content.ts": SourceAngularModalByInstanceContent,
    },
  javascript: SourceModal,
  vue: SourceVueModal,
}}>
</Playground>

## API

<Tabs>
  <TabItem value="Angular">
    <code>@siemens/ix-angular</code> provides an injectable service that allows to open modal dialogs based on a <code>ng-template</code> reference or by component type.
If you want to pass arbitrary data to the modal use the <code>data</code>-property. In order to access that data inside the modal template use <code>let-modal</code> as seen in the angular example above.<br /><br />
    <h3>ModalService</h3>
    <ApiModalServiceAngular />
    <h3>ModalConfig</h3>
    <ApiModalConfigAngular />
    <h3>ModalInstance</h3>
    <ApiModalInstanceAngular />

  </TabItem>
  <TabItem value="React">
    <h3>ModalConfig</h3>
    <ApiModalConfigReact />
    <h3>ModalRef</h3>
    <ApiModalRefReact />
  </TabItem>
  <TabItem value="JavaScript">
    <h3>Properties</h3>
    <PropsJavaScript />
    <h3>Events</h3>
    <EventsJavaScript />
  </TabItem>
</Tabs>

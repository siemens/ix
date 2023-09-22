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

import ModalConfig from './../auto-generated/utils/core/ModalConfig.md'
import ModalInstance from './../auto-generated/utils/core/ModalInstance.md'

import SourceReactLoading from './../auto-generated/previews/react/loading.md'
import SourceReactMessage from './../auto-generated/previews/react/message.md'


# Modal

## Sizes

Our modals support the following sizes:

- `360`
- `480`
- `600`
- `720`
- `840`
- `full-width` - Modal extends to fill entire screen width (modal will still have some horizontal margin)

The `size` can be configured over the configuration object of the `showModal` function.

<Playground
  height="18rem"
  name="modal-sizes"
  examplesByName
>
</Playground>

## Custom

How to open a modal depends on the framework in use. Note that you will not instantiate `ix-modal` on your own.
Select the appropriate section below for the respective usage information.

### Angular

<Playground
name="modal" height="18rem"
frameworks={{
  angular: {
    'modal-by-template.ts': SourceAngularModal,
    "modal-by-instance.ts": SourceAngularModalByInstance,
    "modal-by-instance-content.ts": SourceAngularModalByInstanceContent,
    },
}}>
</Playground>

`@siemens/ix-angular` provides an injectable service that allows to open modal dialogs based on a `ng-template` reference or by component type.
If you want to pass arbitrary data to the modal use the `data`-property. In order to access that data inside the modal template use `let-modal` as seen in the angular example above.

**ModalService**

```ts
open(config: ModalConfig<TData: any, TReason: any>): Promise<ModalInstance<TData>>
```

### React

`@siemens/ix-react` provides an function that allows to open modal dialogs based on a `JSXElement`.

<Playground
name="modal" height="18rem"
frameworks={{
  react: SourceReactModal,
}}>
</Playground>



:::info Use context

It is highly recommended to provide the `IxApplicationContext` as part of your application.

:::

```tsx
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <IxApplicationContext>
    {/*
      <BrowserRouter>
        <App />
      </BrowserRouter>
    */}
  </IxApplicationContext>
);

```

### Vue

<Playground
name="modal" height="18rem"
frameworks={{
  vue: SourceVueModal,
}}>
</Playground>

### Javascript

<Playground
name="modal" height="18rem"
frameworks={{
  javascript: SourceModal,
}}>
</Playground>

### API

#### Modal Config
<ModalConfig />

#### Modal Instance
<ModalInstance />

## Loading

How to open a loading modal is independent from the framework in use. Note that you have to import `showLoadingModal` from the core package `@siemens/ix`.

<Playground name="loading" frameworks={{
  react: SourceReactLoading,
}}/>

## Message

How to open a message modal is independent from the framework in use. Note that you have to import `showMessage` from the core package `@siemens/ix`.

`showMessage` provides multiple pre-configured messages:

- info
- waring
- error
- success
- question

<Playground name="message" height="15rem" frameworks={{
  react: SourceReactMessage,
}}/>

The `showMessage` method returns a Listener with the following signature:

```ts
TypedEvent<{
  actionId: string;
  payload: T;
}>
```

`actionId` represents the configured action button.


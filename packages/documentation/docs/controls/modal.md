import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import PropsHeaderJavaScript from './../auto-generated/ix-modal-header/props.md'
import EventsHeaderJavaScript from './../auto-generated/ix-modal-header/events.md'

import ModalConfig from './../auto-generated/utils/core/ModalConfig.md'
import ModalInstance from './../auto-generated/utils/core/ModalInstance.md'

import Playground from '@site/src/components/PlaygroundV2';

# Modal

## Sizes

Our modals support the following sizes:

- `360`
- `480`
- `600`
- `720`
- `840`
- `full-width` - Modal extends to fill entire screen width (modal will still have some horizontal margin)
- `full-screen` - Modal extends to fill entire screen

The `size` can be configured over the configuration object of the `showModal` function.

<Playground
  height="18rem"
  name="modal-sizes"
  examplesByName> 
</Playground>

## Custom

How to open a modal depends on the framework in use. Note that you will not instantiate `ix-modal` on your own.
Select the appropriate section below for the respective usage information.

### Angular

<Playground
  name="modal" height="18rem"
  files={{
    angular: [
      'modal-by-template.ts',
      "modal-by-instance.ts",
      "modal-by-instance-content.ts",
      ],
  }}>
</Playground>

`@siemens/ix-angular` provides an injectable service that allows to open modal dialogs based on a `ng-template` reference or by component type.
If you want to pass arbitrary data to the modal use the `data`-property. In order to access that data inside the modal template, use `let-modal` as seen in the angular example above.

**ModalService**

```ts
open(config: ModalConfig<TData: any, TReason: any>): Promise<ModalInstance<TData>>
```

### React

`@siemens/ix-react` provides an function that allows to open modal dialogs based on a `JSXElement`.

<Playground
name="modal" height="18rem"
files={{
  react: ['modal.tsx'],
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
files={{
  vue: ['modal.vue'],
}}>
</Playground>

### Javascript

<Playground
name="modal" height="18rem"
files={{
  javascript: ['modal.html'],
}}>
</Playground>

### Loading

How to open a loading modal is independent from the framework in use. Note that you have to import `showLoadingModal` from the core package `@siemens/ix`.

<Playground name="loading" files={{
react: ['loading.tsx'],
}}/>

### Message

How to open a message modal is independent from the framework in use. Note that you have to import `showMessage` from the core package `@siemens/ix`.

`showMessage` provides multiple pre-configured messages:

- info
- warning
- error
- success
- question

<Playground name="message" height="15rem" files={{
react: ['message.tsx'],
}}/>

The `showMessage` method returns a Listener with the following signature:

```ts
TypedEvent<{
  actionId: string;
  payload: T;
}>;
```

`actionId` represents the configured action button.

## API (modal header)

### Properties

<PropsHeaderJavaScript />

### Events

<EventsHeaderJavaScript />

## API (modal config)

### Properties

<ModalConfig />

## API (modal instance)

### Properties

<ModalInstance />

## API (modal header)

### Properties

<PropsHeaderJavaScript />

### Events

<EventsHeaderJavaScript />

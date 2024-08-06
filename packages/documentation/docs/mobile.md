import DevicePreview from '@site/src/components/DevicePreview';

# Mobile Experience

## Using Ionic

To implement a mobile application you as a developer has many possibilities on choose a framework. In this example we are using Ionic + React to implement a mobile application which can be installed on your mobile device.

### Theming Ionic

The first challenge is to provide a theme mapping between Siemens Industrial Experience and Ionic Framework.

Ionic uses CSS custom properties (variables) same as Siemens Industrial Experience, which makes is easy to map between the both theming systems.

Here is an example of a default theme mapping [Repository Link](https://github.com/siemens/ix/blob/feat/ionic-test-app/test-apps/ionic-test-app/src/theme/variables.css).

### Define safe areas

Most modern mobile phones do not have a simple rectangle display, sometimes it has a radius sometimes it has a "notch" like the Iphone.

To handle this areas there are existing [environment variables](https://developer.mozilla.org/en-US/docs/Web/CSS/env#safe-area-inset-top) called `safe-area-inset`
You has an developer has to define these safe-areas to help the `ix-application` to layout the frame of your application correctly.

```css
--ix-safe-area-inset-top: env(safe-area-inset-top);
--ix-safe-area-inset-right: env(safe-area-inset-right);
--ix-safe-area-inset-bottom: env(safe-area-inset-bottom);
--ix-safe-area-inset-left: env(safe-area-inset-left);
```

After you have defined the global `--ix-safe-area-inset-*` you need to define some special variables depending on your Hardware. In our case we have an Iphone with the Notch on top.
Depending on the orientation of the of your device you need to ajust the safe-areas of some components e.g the `ix-menu`.

```css
body[data-screen-orientation='landscape-primary'] {
  /*
  * If the device is in landscape-primary orientation,
  * we need to adjust the safe areas for the menu.
  * The data-screen-orientation attribute is added by the main.ts file
  */
  --ix-application-menu-safe-area-left: var(--ix-safe-area-inset-left);
}
```

The given css selector `body[data-screen-orientation='landscape-primary']` is not provided via the ionic framework.
A good point to add this information is the `main.ts` file of your project. You can chose between the capacitor plugin [`@capacitor/screen-orientation`](https://capacitorjs.com/docs/apis/screen-orientation) or the browser api [`ScreenOrientation`](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation)

```tsx
import { ScreenOrientation } from '@capacitor/screen-orientation';

async function screenOrientation() {
  const { type } = await ScreenOrientation.orientation();
  window.document.body.setAttribute('data-screen-orientation', type);

  ScreenOrientation.addListener('screenOrientationChange', ({ type }) => {
    window.document.body.setAttribute('data-screen-orientation', type);
  });
}

screenOrientation();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

After this changes are applied your application frame should respect all areas of your device which is not easy accessible.

Please be aware to check if the content pages of your application are respect these areas also. You can use the defined variables here as well.

```css
.my-content-space {
  margin-top: var(--ix-safe-area-inset-top);
}
```

### Application frame layout

By default the [Application Frame](./controls/application-frame/application.md) comes with tree default layouts `sm` (mobile screens), `md` (smallest Ipad size), `lg` (Desktop). These layout are selected automatically depending on your hardware display size.

If you are planning to implement a App for Mobile and Tablet (e.g Iphone or Ipad) it could be necessary to configure the layouts which the application frame can pick from.

In case of an IPad and IPhone application you should typically choose `sm` and `md`.

```tsx
const Application = () => {
  return (
    <IonApp>
      ...
      <IxApplication breakpoints={breakpoints}>...</IxApplication>
      ...
    </IonApp>
  );
};
```

As mentation above it makes sometimes sense to adapt the layouts (breakpoints) depending of the hardware.
For example the layout `md` will be chosen if you have a Iphone in landscape orientation and a Ipad in portrait orientation.
Ionic provides some [utility functions](https://ionicframework.com/docs/react/platform#platforms) which helps you to decide which layout you should choose.

```tsx
const ipad = [`sm`, 'md', 'lg'];
const iphone = [`sm`];

let breakpoints = isPlatform('ipad') ? ipad : iphone;

const Application = () => {
  return (
    <IonApp>
      ...
      <IxApplication breakpoints={breakpoints}>...</IxApplication>
      ...
    </IonApp>
  );
};
```

### Example

<DevicePreview />

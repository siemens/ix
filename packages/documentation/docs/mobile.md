import DevicePreview from '@site/src/components/DevicePreview';

# Mobile experience

<p>
Siemens Industrial Experience can easily be utilized for creating mobile applications jointly with web technology based approaches. With the help of our design system you will be able to swiftly build the user interface of your mobile web app or hybrid app.
</p>

<p>
  <DevicePreview image="/img/mobile.gif" style={{
    float: 'left',
    margin: '3rem',
    marginLeft: '0rem'
  }} />

</p>

## Mobile app development

There are several different ways to create applications for mobile devices. Native apps are tailored for a particular platform like iOS or Android and usually need to be developed in a specific way for every target platform seperately. Other approaches like hybrid apps are based on web technologies while targeting multiple platforms using a single codebase.

Web applications can be optimized for mobile devices without any significant technological changes. Several paradigms and patterns including: mobile-first design, responsive design, and adaptive design help developers to implement apps providing a seamless user experience across various devices and screen sizes. Disadvantages of mobile web apps include:

<div>
- Lack of offline capabilities
- Limited possibilities for distribution (e.g. via app stores)
- Limited options for the integration of native features (e.g. push notifications)
</div>

### Hybrid apps

The aspects described above are reasons to consider hybrid applications in order to provide a sublime mobile user experience and also benefit from the advantages of native applications.
Hybrid apps are built using web technologies but run inside a native container providing access to device APIs, allowing native features of the device's operating system and hardware to be used. A variety of frameworks for building hybrid mobile applications are available today. Some provide user interface components for a closer integration with the different operating systems designs. For a more consistent user experience it can be benefitial to favor the Siemens Industrial Experience components over the the frameworks UI components.

## Demo app

Check out our hybrid example application using Ionic, React and Siemens Industrial Experience:

<div style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '5rem 0'
}}>

  <DevicePreview />
</div>

Please find the repository with all the source code of the demo application here: [Ionic React Test App on GitHub](https://github.com/siemens/ix/blob/main/test-apps/ionic-test-app).

Keep on reading to learn more about how this works and how to implement it yourself.

## Using Ionic

Developers have many options when choosing a framework for implementing mobile applications. In this example we are using Ionic and React to implement a hybrid mobile application that can be deployed on your mobile device.

### Theming Ionic

In the first step, we're going to create a theme mapping between Siemens Industrial Experience and Ionic Framework.

Ionic uses CSS custom properties (variables), just like Siemens Industrial Experience does. This makes is easy to map between the two theming systems.

Here is an example of a default theme mapping: [Repository Link](https://github.com/siemens/ix/blob/main/test-apps/ionic-test-app/src/theme/variables.css).

### Define safe areas

Most devices nowadays do not have a rectangular display, but often feature rounded corners or characteristics like a display cut-out ("notch").

To adapt our application to this , we need to set [environment variables](https://developer.mozilla.org/en-US/docs/Web/CSS/env#safe-area-inset-top) called `safe-area-inset`. This helps the `ix-application` to layout the frame of your application correctly.

```css
--ix-safe-area-inset-top: env(safe-area-inset-top);
--ix-safe-area-inset-right: env(safe-area-inset-right);
--ix-safe-area-inset-bottom: env(safe-area-inset-bottom);
--ix-safe-area-inset-left: env(safe-area-inset-left);
```

Additionally some variables specific to your hardware need to be set. In our example we use an iPhone with a notch at the top. Depending on the display orientation it's required to adjust the safe-areas of some components (e.g `ix-menu`).

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

The CSS selector: `body[data-screen-orientation='landscape-primary']` is not provided via the ionic framework.
A suitable way to add it to the app is the `main.ts` file of your project. You can chose between the capacitor plugin: [`@capacitor/screen-orientation`](https://capacitorjs.com/docs/apis/screen-orientation) or the browser api: [`ScreenOrientation`](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation)

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

At this point the application frame should respect all areas of your device which are not part of the app.

To ensure that the pages of your application displaying content also respect the previously defined areas, you can use the defined variables here as well.

```css
.my-content-space {
  margin-top: var(--ix-safe-area-inset-top);
}
```

### Application frame layout

By default the [Application Frame](./controls/application-frame/application.md) provides three default layouts: `sm`, `md`, `lg`, that are automatically applied depending on the size of the screen.

If you are planning to implement an app for both phones and tablets (e.g iPhone and iPad), it may be necessary to configure the layouts which the application frame can pick from.

For apps targetting phones and tablets, typically the `sm` and `md` layouts are suitable.

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

As mentioned above, in some cases it is beneficial to adapt the layouts (breakpoints) depending on the hardware.
For example, the layout `md` will be applied for an iPhone in landscape orientation and an iPad in portrait orientation.
Ionic provides some [utility functions](https://ionicframework.com/docs/react/platform#platforms) that can be helpful to decide which layout to choose.

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

## User experience considerations

Regardless of the technology there are diverse aspects to take into consideration when developing applications for mobile devices:

### Responsive Web Design (RWD):

While Siemens Industrial Experience components are designed to handle various viewport sizes gracefully, it’s crucial to plan for smaller screens and different screen orientations in an early stage of the project. Adjusting the layout of your application or restructuring content based on the devices viewport is crucial for a mobile friendly experience. Also hiding certain information or entire components can be an effective way to achieve mobile responsiveness.

### Interaction

Users interact with mobile devices primarily through touch input. While our Web Components are designed to respond to touch events, it may be necessary to implement custom event listeners for touch interactions based on your specific use cases.

### Device-specific features:

Certain devices come with unique characteristics that must be considered during development (e.g. display "notch"). Not taking these into account can result in parts of the user interface being hidden or inaccessible.

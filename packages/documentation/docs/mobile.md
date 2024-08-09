import DevicePreview from '@site/src/components/DevicePreview';

# Mobile experience

<p>
Use Siemens Industrial Experience to create mobile applications jointly with web technology based approaches easily. With the help of our design system you are able to swiftly build the user interface of your mobile web app or hybrid app.
</p>

<p>
  <DevicePreview image="/img/mobile.gif" style={{
    float: 'left',
    margin: '3rem',
    marginLeft: '0rem'
  }} />

</p>

## Mobile app development

There are different ways to create applications for mobile devices:
- **Web apps** are accessed through a web browser and are platform-independent.
- **Native apps** are tailored for a particular platform like iOS or Android and usually need to be developed in a specific way for every target platform separately.
- **Hybrid apps** are based on web technologies while targeting multiple platforms using a single codebase.

The table below shows the differences of the three approaches at a glance:

|                                          | **(Mobile) web app** | **Native app**           | **Hybrid app**                                    |
| ---------------------------------------- | -------------------- | ------------------------ | ------------------------------------------------- |
| Performance                              | Medium / high        | Best possible            | Medium / high                                     |
| Look & Feel                              | Individual           | Platform native          | Platform native / individual                      |
| Development effort                       | Low                  | High                     | Medium                                            |
| Hardware features                        | Limited              | Best possible            | Extensive <br/>(depending on plugin availability) |
| Packaging, distribution                  | Browser only         | Installation, App stores | Installation, App stores                          |
| Offline capability                       | Not supported        | Supported                | Supported                                         |
| Siemens Industrial Experience Components | Supported            | Not supported            | Supported                                         |
Optimize your web application for mobile devices without any significant technological changes to provide a seamless User Experience across devices and screen sizes (read more about responsive and adaptive design [here](#user-experience-considerations)).

### Hybrid app development

Since mobile web apps have some limitations as shown above, we recommend hybrid apps  to combine the advantages of web and native apps.

Hybrid apps are built using web technologies but run inside a native container providing access to device APIs, allowing native features of the device's operating system and hardware to be used. A variety of frameworks for building hybrid mobile applications are available today. Some provide User Interface components for a closer integration with the different operating systems designs. 

Cf. [ionic.io - What is Hybrid Mobile App Development?](https://ionic.io/resources/articles/what-is-hybrid-app-development#h-key-features:-native-web-and-hybrid)
### Demo app

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

Developers have many options when choosing a framework for implementing mobile applications. In this example, we use Ionic and React to implement a hybrid mobile application that can be deployed on your mobile device.

### Theming Ionic

In the first step, we're going to create a theme mapping between Siemens Industrial Experience and Ionic Framework.

Ionic uses CSS custom properties (variables), just like Siemens Industrial Experience does. This makes is easy to map between the two theming systems.

Here is an example of a default theme mapping: [Repository Link](https://github.com/siemens/ix/blob/main/test-apps/ionic-test-app/src/theme/variables.css).

### Define safe areas

Most devices nowadays do not have a rectangular display, but often feature rounded corners or characteristics like a display cut-out ("notch").

To adapt our application to this, we need to set [environment variables](https://developer.mozilla.org/en-US/docs/Web/CSS/env#safe-area-inset-top) called `safe-area-inset`. This helps the `ix-application` to layout the frame of your application correctly.

```css
--ix-safe-area-inset-top: env(safe-area-inset-top);
--ix-safe-area-inset-right: env(safe-area-inset-right);
--ix-safe-area-inset-bottom: env(safe-area-inset-bottom);
--ix-safe-area-inset-left: env(safe-area-inset-left);
```

Additionally, some variables specific to your hardware need to be set. In our example, we use an iPhone with a notch at the top. Depending on the display orientation, it's required to adjust the safe-areas of some components (e.g. `ix-menu`).

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

The CSS selector `body[data-screen-orientation='landscape-primary']` is not provided via the ionic framework.
A suitable way to add it to the app is the `main.ts` file of your project. There are two options:
- Capacitor plugin: [`@capacitor/screen-orientation`](https://capacitorjs.com/docs/apis/screen-orientation) 
- Browser api: [`ScreenOrientation`](https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation)

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

At this point, the application frame should respect all areas of your device which are not part of the app.

Use the defined variables to ensure that the pages of your application displaying content also respect the previously defined areas as well.

```css
.my-content-space {
  margin-top: var(--ix-safe-area-inset-top);
}
```

### Application frame layout

By default, the [Application Frame](./controls/application-frame/application.md) provides three default layouts (`sm`, `md`, `lg`) that are automatically applied depending on the size of the screen.

If you intend to implement an app for both phones and tablets (e.g. iPhone and iPad), it may be necessary to configure the layouts which the application frame can pick from.

For apps targeting phones and tablets, typically the `sm` and `md` layouts are suitable.

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

As mentioned above, in some cases it is beneficial to adapt the layouts (breakpoints) depending on the hardware. For example, the layout `md` will be applied for an iPhone in landscape orientation and iPad in portrait orientation.

Ionic provides [utility functions](https://ionicframework.com/docs/react/platform#platforms) that help to decide which layout to choose.

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

Regardless of the technology there are aspects to take into consideration when you optimize applications for mobile devices:
1. **Responsive and adaptive design** due to different viewport sizes.
2. **Interaction through touch**, without access to mouse or keyboard.
3. **Device-specific features** like notches or rounded corners.

### Responsive and adaptive design

Industrial Experience components handle various viewport sizes out-of-the-box. When building a page layout, consider small screens in portrait and landscape mode in an early stage during the design phase.

Depending on the importance of a mobile-optimized UI, decide on a responsive or adaptive design approach:
- **Responsive design**: The layout adapts to the viewport size by rearranging or hiding components. We recommend this approach for desktop-first applications.
- **Adaptive design**: There is a separate page layout for a specific breakpoint. We recommend this approach for applications with a strong focus on mobile.

If feasible, we recommend adaptive design since it offers more control over the layout and a more optimized user experience on mobile devices. However, it requires more effort to maintain different layouts. Independently from the design approach, there are different approaches to achieve a mobile-friendly experience:
- Adjust the page layout (e.g. a column-based layout transforms into a row-based layout)
- Restructure the content (e.g. prioritize information or components differently)
- Hide information or entire components (e.g. less important information or components)

### Interaction

Users interact with mobile devices primarily through touch input. Our web components  respond to touch events out-of-the-box. 

For your specific use cases, it might be necessary to implement custom event listeners for touch interactions. In addition, touch devices offer the possibility to use gestures like swiping, pinching or tapping.

### Device-specific features

Some devices have unique characteristics that need to be considered when designing and developing an app:

- Display "notch"
- System bars
- Rounded corners
- Different screen sizes and resolutions

When you design and develop an app, we recommend to define target devices. Consider the specific features of the devices in your design and development process, so that all relevant parts of the user interface are visible and accessible. Use the [safe areas](#define-safe-areas) to ensure that the content is displayed correctly.

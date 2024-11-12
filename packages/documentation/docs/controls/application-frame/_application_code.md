import Props from './../../auto-generated/ix-application/props.md';
import Events from './../../auto-generated/ix-application/events.md';

import Playground from '@site/src/components/PlaygroundV3';

## Development

The application component acts as a centralized hub for configuring aspects of your web-application, such as screen breakpoints, theming and app switch configuration. By consolidating these configuration points, it simplifies the management of application-wide settings and ensures a consistent user interface across different scenarios.

The component itself is designed with modularity in mind. It can be seamlessly integrated with other components such as application-header, menu, content and more. This modular approach allows you to mix and match components based on your specific application requirements, providing flexibility and customization options.

It's important to note that the application component focuses solely on layouting and does not dictate visual design.

### Examples

#### Basic

The code snippet below shows an example of a combination of different components, like `ix-application-header` or `ix-content`.

<Playground
name="application"

height="30rem"
noMargin>
</Playground>

#### Breakpoints

<Playground
name="application-breakpoints"

height="30rem"
noMargin>
</Playground>

#### Application switch

The navigation to another application is implemented via `window.open` (https://developer.mozilla.org/en-US/docs/Web/API/Window/open). Therefore you can control if the navigation should happen inside the current browser context `target: '_self'` or inside a new tab `target: '_blank'` (more information about target can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target))

```javascript
  {
    id: 'demo-app-2',
    name: 'Calculator App',
    description: 'Example description for Calculator App',
    iconSrc: '...url to some icon',

    url: '...target url',
    target: '_self', // Define the navigation context (e.g current browser context or new tab)
  }
```

<Playground
name="application-app-switch"

height="30rem"
noMargin>
</Playground>

### API

#### Props

<Props />

#### Events

<Events />

---
sidebar_position: 0
---

import Tags from './../../auto-generated/ix-application/tags.md';
import Props from './../../auto-generated/ix-application/props.md';
import Events from './../../auto-generated/ix-application/events.md';
import Playground from '@site/src/components/Playground';

# Application
<Tags />

The ix-application component acts as a centralized hub for configuring aspects of your web-application, such as screen breakpoints, theming and  app switch configuration. By consolidating these configuration points, it simplifies the management of application-wide settings and ensures a consistent user interface across different scenarios.

The component itself is designed with modularity in mind. It can be seamlessly integrated with other components such as ix-application-header, ix-menu, ix-content, and more. This modular approach allows you to mix and match components based on your specific application requirements, providing flexibility and customization options.

It's important to note that the ix-application component focuses solely on layouting and does not dictate visual design.

## Example

The code snippet blow shows a example of a combination of different components like `ix-application-header` or `ix-content`.

<Playground name="application" examplesByName height="30rem" noMargin></Playground>

### Breakpoints

<Playground name="application-breakpoints" height="30rem" noMargin examplesByName></Playground>

### App switch

The navigation to another application is implemented via `window.open` (https://developer.mozilla.org/en-US/docs/Web/API/Window/open). Therefore you can control if the navigation should happen inside the current browser context `target: '_self'` or inside a new tab `target: '_blank'` (more information about target can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target))

```javascript
  {
    id: 'demo-app-2',
    name: 'Calculator App',
    description: 'Example description for floor app',
    iconSrc: '...url to some icon',

    url: '...target url',
    target: '_self', // Define the navigation context (e.g current browser context or new tab)
  }
```

<Playground name="application-app-switch" examplesByName height="30rem"></Playground>

## API

### Props

<Props />

### Events

<Events />

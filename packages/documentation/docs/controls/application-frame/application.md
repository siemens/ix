---
sidebar_position: 0
---

import Tags from './../../auto-generated/ix-application/tags.md';
import Props from './../../auto-generated/ix-application/props.md';
import Events from './../../auto-generated/ix-application/events.md';
import Playground from '@site/src/components/Playground';

# Application
<Tags />

## Usage

TODO: React, Angular and Vue Example

<Playground name="application" examplesByName height="30rem" noMargin></Playground>

### Breakpoints

TODO: React, Angular and Vue Example

<Playground name="application-breakpoints" height="30rem" noMargin examplesByName></Playground>

### App switch

TODO: Maybe short introduction of the feature from developer side
TODO: React, Angular and Vue Example

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

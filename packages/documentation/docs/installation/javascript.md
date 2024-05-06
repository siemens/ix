---
sidebar_position: 3
sidebar_title: Web Components
title: Web Components
---

import Playground from '@site/src/components/PlaygroundV2';

## Installation

Install `@siemens/ix` and `@siemens/ix-icons` using a package manager:

### npm

```
npm i -S @siemens/ix @siemens/ix-icons
```

### yarn

```
yarn add @siemens/ix @siemens/ix-icons
```

## Build

There are several different possibilities to build and serve web apps with the library.
In the following section we will describe how you can build an application with [vite](https://vitejs.dev/guide/).

`index.html`

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div>
      <ix-button class="m-1" variant="primary">Button</ix-button>
      <ix-button class="m-1" variant="primary" disabled>Button</ix-button>
    </div>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

`main.js`

```javascript
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';
import { defineCustomElements as ixIconsDefineCustomElements } from '@siemens/ix-icons/loader';

(async () => {
  await applyPolyfills();
  await ixIconsDefineCustomElements();
  await defineCustomElements();
})();
```

## Example

<Playground
name="buttons"
files={{
  javascript: ['buttons.html']
}}>
</Playground>

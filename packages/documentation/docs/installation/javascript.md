---
sidebar_position: 3
sidebar_title: Web Components
title: Web Components
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Playground from '@site/src/components/PlaygroundV3';

### Library installation

Install `@siemens/ix` and `@siemens/ix-icons` using a package manager:

<Tabs>
  <TabItem value="npm" label="NPM" default>
    ```
    npm install @siemens/ix @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    ```
    yarn add @siemens/ix @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="pnpm" label="PNPM">
    ```
    pnpm add @siemens/ix @siemens/ix-icons
    ```
  </TabItem>
</Tabs>

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
      <ix-button variant="primary">Button</ix-button>
    </div>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

`main.js`

```javascript
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { defineCustomElements } from '@siemens/ix/loader';
import { defineCustomElements as defineIxIconCustomElement } from '@siemens/ix-icons/loader';

(async () => {
  defineIxIconCustomElement();
  defineCustomElements();
})();
```

## Prevent `@siemens/ix-icons` to be defined during library load

> This can be useful if you have configured CSP nonce, because of the lazy bootstrap behavior of the components.

To prevent the definition of the `ix-icon` component during library setup, add the following ```<meta>``` HTML element to your application:

```html
<meta name="ix:legacy-icons" content="false" />
```

## Example

<Playground
name="buttons"
framework={['javascript']}>
</Playground>

---
sidebar_position: 2
sidebar_title: Vue
title: Vue
---

:::caution Experimental disclaimer

The vue wrapper will be in a experimental state meaning that full component support is not garanteed.
Additionally any related bugs that affect only this wrapper will not be a priority for now.

:::

### Install dependencies

Install `@siemens/ix-vue` and `@siemens/ix-icons` using a package manager:

#### npm

```
npm i -S @siemens/ix-vue @siemens/ix-icons
```

#### yarn

```
yarn add @siemens/ix-vue@latest @siemens/ix-icons
```

### Usage

```ts
import '@siemens/ix-icons/dist/css/ix-icons.css';
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

import { createApp } from 'vue';
import { ixPlugin } from '@siemens/ix-vue';
import Root from './App.vue';

const app = createApp(App);

app.use(ixPlugin);

app.mount('#root');
```

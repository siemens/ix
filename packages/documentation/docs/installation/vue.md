---
sidebar_position: 4
sidebar_title: Vue
title: Vue
---

:::caution Experimental disclaimer

There is no guarantee that the core functionality is fully covered by the Vue wrappers.
Bug reports and feature requests related to Vue can only be handled with low priority.
Nevertheless feedback of any kind will be helpful.

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
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';

import { createApp } from 'vue';
import { ixPlugin } from '@siemens/ix-vue';
import Root from './App.vue';

const app = createApp(App);

app.use(ixPlugin);

app.mount('#root');
```

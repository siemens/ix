---
sidebar_position: 4
sidebar_title: Vue
title: Vue
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution Experimental disclaimer

There is no guarantee that the core functionality is fully covered by the Vue wrappers.
Bug reports and feature requests related to Vue can only be handled with low priority.
Nevertheless feedback of any kind will be helpful.

:::

### Library installation

Install `@siemens/ix`, `@siemens/ix-vue` and `@siemens/ix-icons` using a package manager:

<Tabs>
  <TabItem value="npm" label="NPM" default>
    ```
    npm install @siemens/ix @siemens/ix-vue @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    ```
    yarn add @siemens/ix @siemens/ix-vue @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="pnpm" label="PNPM">
    ```
    pnpm add @siemens/ix @siemens/ix-vue @siemens/ix-icons
    ```
  </TabItem>
</Tabs>

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

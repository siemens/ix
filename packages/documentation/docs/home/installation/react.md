---
sidebar_position: 2
sidebar_label: React
title: React
doc-type: 'component'
component-tabs: ['']
no_single_tab: true
description: 'React is a widely-used library for building user interfaces, particularly single-page applications. This section  guides you through the steps to install and set up our design system within a React project, ensuring a seamless integration process.'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#

## Library installation

Install `@siemens/ix`, `@siemens/ix-react` and `@siemens/ix-icons` using a package manager:

<Tabs>
  <TabItem value="npm" label="NPM" default>
    ```
    npm install @siemens/ix @siemens/ix-react @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    ```
    yarn add @siemens/ix @siemens/ix-react @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="pnpm" label="PNPM">
    ```
    pnpm add @siemens/ix @siemens/ix-react @siemens/ix-icons
    ```
  </TabItem>
</Tabs>

## Import styles

```css
@import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
```

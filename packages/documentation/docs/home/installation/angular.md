---
sidebar_position: 1
sidebar_label: Angular
title: Angular
doc-type: 'component'
component-tabs: ['']
no_single_tab: true
description: 'Angular is a popular framework for building dynamic web applications. This section guides you through the steps to install and set up our design system within an Angular project, ensuring a smooth integration process.'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#

## Library installation

:::info
Currently, iX only supports `NgModule` based Angular projects. We are actively working to provide support for the new standalone component based approach soon. Otherwise Siemens iX is fully compatible with Angular version 17 and higher.
:::

Install `@siemens/ix`, `@siemens/ix-angular` and `@siemens/ix-icons` using a package manager:

<Tabs>
  <TabItem value="npm" label="NPM" default>
    ```
    npm install @siemens/ix @siemens/ix-angular @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    ```
    yarn add @siemens/ix @siemens/ix-angular @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="pnpm" label="PNPM">
    ```
    pnpm add @siemens/ix @siemens/ix-angular @siemens/ix-icons
    ```
  </TabItem>
</Tabs>

## Import styles

Import the design system styling in your global stylesheet (e.g.: `src/styles.scss`):

```css
@import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
```

Import `IxModule` and `BrowserAnimationsModule` (in some cases also the `RouterModule.forRoot([/** your routes **/])`) in your application module.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IxModule } from '@siemens/ix-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IxModule.forRoot(), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

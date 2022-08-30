---
sidebar_position: 1
sidebar_title: Angular
title: Angular
---

:::caution

Current **beta release** of _ix_ has some limitations, please check [this](./limitation).

:::

### Installation of dependencies

Preparation steps: _[Artifactory access and npm configuration](./artifactory.md)_

1. Install `@siemens/ix-angular` (or a beta release `@siemens/ix-angular@next`) and `@siemens/ix-icons`.

```
npm i -S @siemens/ix-angular@latest
npm i -S @siemens/ix-icons@latest
```

### Import styles

```css
@import '../node_modules/@siemens/ix-icons/dist/css/ix-icons.css';
@import '../node_modules/@siemens/ix/dist/siemens-ix/siemens-ix.css';
```

Import `IxModule` and `BrowserAnimationsModule` (in some cases also the `RouterModule.forRoot([/** your routes **/])`) to your application module.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IxModule } from '@siemens/ix-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IxModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

---
sidebar_position: 1
sidebar_title: Angular
title: Angular
---

### Install dependencies

Install `@siemens/ix-angular` and `@siemens/ix-icons` using a package manager:

#### npm

```
npm i -S @siemens/ix-angular @siemens/ix-icons
```

#### yarn

```
yarn add @siemens/ix-angular @siemens/ix-icons
```

### Import styles

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

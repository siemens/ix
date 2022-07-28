---
sidebar_position: 1
sidebar_title: Angular
title: Angular
---

import HTMLPreview from '@site/src/components/HTMLPreview';

<!-- Will be replaced during release-script task -->
<!-- DO NOT EDIT TABLE IN MARKDOWN -->







<!-- VERSION_TABLE_START -->

  | Core UI Design Spec | CoreUI Implementation | Angular |
  | ------------------- | --------------------- | ------- |
  | Core UI 2.0         | 6.5.1-beta.0     | ^11.0.0 or 12.x |
  | Core UI 2.0         | 5.x.x                 | ^10.x.x |
  | Core UI 1.0         | 4.x.x                 | ^8.x.x  |

<!-- VERSION_TABLE_END -->
        
        
        
        
        
        

### Installation of dependencies

Preparation steps: _[Artifactory access and npm configuration](./artifactory.md)_

1. Install `@siemens/core-ui` (or a beta release `@siemens/core-ui@next`) and `@siemens/core-ui-icons`.

```
npm i -S @siemens/core-ui@latest
npm i -S @siemens/core-ui-icons@latest
```

2. Install `@angular/cdk`, `bootstrap` and `@ng-bootstrap/ng-bootstrap`
3. Add the following imports to the `styles.scss`

### Add CoreUI to your project

```css
@import '../node_modules/@siemens/core-ui-icons/dist/scss/core-ui-webfont.scss';
@import '../node_modules/@siemens/core-ui-core/dist/core-ui-core/core-ui-core.css';
```

Import `CoreUiModule` and `BrowserAnimationsModule` (in some cases also the `RouterModule.forRoot([/** your routes **/])`) to your application module.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreUiModule } from '@siemens/core-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreUiModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

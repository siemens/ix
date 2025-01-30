---
sidebar_position: 1
sidebar_title: Angular
title: Angular
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Peer dependencies

Both `@angular/core` and `@angular/forms` are peer dependencies which means they must be installed before iX. 

```json
"peerDependencies": {
  "@angular/core": ">=17.3.0",
  "@angular/forms": ">=17.3.0",
}
```

### Library installation

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

### Import styles

Import the design system styling in your global stylesheet (e.g.: `src/styles.scss`):

```css
@import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
```

### Module setup (legacy)

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

### Standalone Setup

Instead of importing the `IxModule` in your module file, iX components and necessary directives are directly imported from `@siemens/ix-angular/standalone` in your component file .

```typescript
import { Component } from '@angular/core';
import { IxButton, IxDropdown, IxDropdownItem, IxDropdownTriggerDirective } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'standalone-example',
  imports: [IxButton, IxDropdown, IxDropdownItem, IxDropdownTriggerDirective],
  template: `
    <ix-button #trigger>Open</ix-button>
    <ix-dropdown [ixDropdownTrigger]="trigger">
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
      <ix-dropdown-item label="Item 3"></ix-dropdown-item>
      <ix-dropdown-item label="Item 4"></ix-dropdown-item>
      <ix-dropdown-item label="Item 5"></ix-dropdown-item>
    </ix-dropdown>
  `,
})
export default class StandaloneExample {}
```

<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/vertical-tabs.ts -->
```typescript
/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-vertical-tabs',
  template: `
    <ix-menu>
      <ix-menu-item home-tab tab-icon="home"> Home </ix-menu-item>
      <ix-menu-item tab-icon="globe"> Normal Tab </ix-menu-item>
      <ix-menu-item tab-icon="star" disabled> Disabled Tab </ix-menu-item>
      <ix-menu-item tab-icon="star"> With other Icon </ix-menu-item>
      <ix-menu-item tab-icon="globe" style="display: none">
        Should not visible
      </ix-menu-item>
    </ix-menu>
  `,
})
export class VerticalTabs {}
```

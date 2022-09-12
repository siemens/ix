<!--
SPDX-FileCopyrightText: 2022 Siemens AG

SPDX-License-Identifier: MIT
-->

<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/drawer-full-height.ts -->
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer-full-height',
  template: `
    <ix-drawer [fullHeight]="true" [closeOnClickOutside]="true" [show]="show">
      <span>Some content of drawer</span>
    </ix-drawer>

    <ix-button (click)="show = !show">Toggle drawer</ix-button>
  `,
})
export class DrawerFullHeight {
  show = false;
}
```

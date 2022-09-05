<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/drawer-full-height.ts -->
```typescript
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
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

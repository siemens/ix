<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/input-with-icon.ts -->
```typescript
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-input-with-icon',
  template: `
    <form class="needs-validation m-2">
      <ix-input-group>
        <span slot="input-start">Price</span>
        <input type="number" class="form-control" />
        <span slot="input-end">.00</span>
        <span slot="input-end">$</span>
      </ix-input-group>
    </form>
  `,
})
export class InputWithIcon {}
```

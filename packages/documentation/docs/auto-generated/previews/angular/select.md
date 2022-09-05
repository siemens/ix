<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/select.ts -->
```typescript
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
    <ix-select [selectedIndices]="selectedIndices">
      <ix-select-item label="Item 1" value="1"></ix-select-item>
      <ix-select-item label="Item 2" value="2"></ix-select-item>
      <ix-select-item label="Item 3" value="3"></ix-select-item>
      <ix-select-item label="Item 4" value="4"></ix-select-item>
    </ix-select>
  `,
})
export class Select {
  selectedIndices = '1';
}
```

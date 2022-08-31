<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/tree.ts -->
```typescript
/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component } from '@angular/core';
import { TreeModel } from '@siemens/ix';

@Component({
  selector: 'app-tree',
  styles: [
    `
      .example {
        display: block;
        position: relative;
        height: 32rem;
        width: 100%;
      }
    `,
  ],
  template: `<div class="example">
    <ix-tree root="root" [model]="model"></ix-tree>
  </div>`,
})
export class Tree {
  model: TreeModel<{
    name: string;
  }> = {
    root: {
      id: 'root',
      data: {
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
      },
      hasChildren: false,
      children: [],
    },
  };
}
```

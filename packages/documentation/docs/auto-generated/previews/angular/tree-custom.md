<!--
* COPYRIGHT (c) Siemens AG
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
-->
  
<!-- Auto generated! Please edit here: siemens-ix/packages/angular-test-app/src/preview-examples/tree-custom.ts -->
```typescript
import { Component } from '@angular/core';
import { TreeModel } from '@siemens/ix';

type TreeData = {
  name: string;
  icon: string;
};

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
    <ix-tree root="root" [model]="model" [renderItem]="treeItem"></ix-tree>
    <ng-template #treeItem let-item>
      <div class="d-flex align-items-center">
        <ix-icon [name]="item.icon" size="16" class="me-2"></ix-icon>
        {{ item.name }}
      </div>
    </ng-template>
  </div>`,
})
export class TreeCustom {
  model: TreeModel<TreeData> = {
    root: {
      id: 'root',
      data: {
        icon: '',
        name: '',
      },
      hasChildren: true,
      children: ['sample'],
    },
    sample: {
      id: 'sample',
      data: {
        name: 'Sample',
        icon: 'star',
      },
      hasChildren: true,
      children: ['sample-child-1', 'sample-child-2'],
    },
    'sample-child-1': {
      id: 'sample-child-1',
      data: {
        name: 'Sample Child 1',
        icon: 'cut',
      },
      hasChildren: false,
      children: [],
    },
    'sample-child-2': {
      id: 'sample-child-2',
      data: {
        name: 'Sample Child 2',
        icon: 'print',
      },
      hasChildren: false,
      children: [],
    },
  };
}
```

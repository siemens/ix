/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { TreeContext, TreeModel } from '@siemens/ix';

type TreeData = {
  name: string;
  icon: string;
};

@Component({
  selector: 'app-example',
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
    <ix-button
      id="expand"
      ghost
      style="margin-bottom: 2rem"
      (click)="expandAndSelect()"
      >Expand Tree</ix-button
    >
    <ix-tree
      root="root"
      [model]="model"
      [context]="context"
      [renderItem]="treeItem"
    ></ix-tree>
    <ng-template #treeItem let-item>
      <div style="display: flex; align-items: center">
        <ix-icon [name]="item.icon" size="16" style="margin-inline-end: 0.5rem"></ix-icon>
        {{ item.name }}
      </div>
    </ng-template>
  </div>`,
})
export default class TreeCustom {
  context: TreeContext = {};
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

  expandAndSelect() {
    this.context = {
      sample: {
        isExpanded: true,
        isSelected: false,
      },
      'sample-child-2': {
        isSelected: true,
        isExpanded: false,
      },
    };
  }
}

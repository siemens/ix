/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxTree } from '@siemens/ix-angular/standalone';

import { TreeModel } from '@siemens/ix';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxTree],
  template: ` <div class="example">
    <ix-tree root="root" [model]="model"></ix-tree>
  </div>`,
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
})
export default class Tree {
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

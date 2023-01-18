/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';
import { TreeContext, TreeModel } from '../tree/tree-model';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  private context: TreeContext = {
    root: {
      isExpanded: true,
      isSelected: false,
    },
    sample: {
      isExpanded: true,
      isSelected: false,
    },
  };

  private treeModel: TreeModel<{ name: string }> = {
    root: { id: 'root', children: [], hasChildren: false, data: { name: '' } },
  };

  componentDidLoad() {
    setTimeout(async () => {
      await window.customElements.whenDefined('ix-tree');
      const tree = document.getElementById('tree') as HTMLIxTreeElement;
      const model = {
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
          children: [],
        },
      };

      for (let i = 0; i < 100; i++) {
        const id = `sample-child-${i}`;
        model[id] = {
          id,
          data: {
            name: `Sample Child ${i}`,
          },
          hasChildren: false,
          children: [],
        };
        model.sample.children.push(id);
      }

      tree.model = { ...model };

      document.querySelectorAll('ix-tree-item')[80].scrollIntoView();
      this.context['sample-child-85'] = {
        isExpanded: false,
        isSelected: true,
      };

      setTimeout(() => {
        model.sample.children = [...model.sample.children, 'test'];
        model['test'] = {
          id: 'test',
          data: {
            name: 'Test',
          },
          hasChildren: false,
          children: [],
        };
        tree.model = { ...model };
      }, 3000);
    }, 1000);
  }

  render() {
    return (
      <Host>
        <ix-tree
          id="tree"
          root="root"
          model={this.treeModel}
          context={this.context}
        ></ix-tree>
      </Host>
    );
  }
}

/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';
import { LogicalFilterOperator } from '../category-filter/logical-filter-operator';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <ix-category-filter
          filterState={{
            tokens: ['Custom filter text'],
            categories: [
              {
                id: 'ID_1',
                value: 'IBM',
                operator: LogicalFilterOperator.NOT_EQUAL,
              },
            ],
          }}
          categories={{
            ID_1: {
              label: 'Vendor',
              options: ['Apple', 'MS', 'Siemens'],
            },
            ID_2: {
              label: 'Product',
              options: ['iPhone X', 'Windows', 'APS'],
            },
          }}
        ></ix-category-filter>
      </Host>
    );
  }
}

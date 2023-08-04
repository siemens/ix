/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  suggestions = ['abc', 'def'];
  categories = {
    ID_1: {
      label: 'A',
      options: ['a', 'b', 'c'],
    },
    ID_2: {
      label: 'B',
      options: ['d', 'e', 'f'],
    },
  };

  render() {
    return (
      <Host>
        <ix-category-filter
          suggestions={this.suggestions}
          categories={this.categories}
          placeholder="Insert text here"
        ></ix-category-filter>
        <ix-category-filter
          disabled
          placeholder="Insert text here"
        ></ix-category-filter>
        <ix-category-filter
          readonly
          placeholder="Insert text here"
        ></ix-category-filter>
      </Host>
    );
  }
}

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  @State() items = [];

  componentWillLoad() {
    this.items = Array.from({
      length: 4,
    }).map((_, i) => `Item ${i}`);
  }

  render() {
    return (
      <Host>
        <ix-button
          onClick={() => {
            const index = this.items.length;
            this.items = [...this.items, 'Item' + index];
          }}
        >
          Add
        </ix-button>
        <ix-button
          onClick={() => {
            this.items.splice(0, 1);
            this.items = [...this.items];
          }}
        >
          Remove
        </ix-button>
        <ix-breadcrumb
          onNextClick={(c) => console.log('next: ', c.detail)}
          onItemClick={(c) => {
            console.dir(c.detail);
            this.items[this.items.length - 1] =
              'Changed! Long log test test test test test 12 123 123 12 123123 123 123 123 123 123 ';
            this.items = [...this.items];
          }}
          visibleItemCount={5}
          nextItems={['123']}
        >
          {this.items.map((i) => (
            <ix-breadcrumb-item icon="rocket" label={i}></ix-breadcrumb-item>
          ))}
        </ix-breadcrumb>
      </Host>
    );
  }
}

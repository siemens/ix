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
  render() {
    return (
      <Host>
        <ix-button>Test</ix-button>
        <ix-grid columns={6}>
          <ix-row>
            <ix-col>1</ix-col>
            <ix-col>2</ix-col>
            <ix-col size="2">
              <ix-button style={{ width: '100%' }}>Test</ix-button>
            </ix-col>
            <ix-col>4</ix-col>
            <ix-col>5</ix-col>
          </ix-row>
        </ix-grid>

        <ix-grid fluid>
          <ix-row>
            <ix-col size="2">1</ix-col>
            <ix-col size="2">2</ix-col>
            <ix-col>
              <ix-button style={{ width: '100%' }}>Test</ix-button>
            </ix-col>
            <ix-col size="2">4</ix-col>
            <ix-col size="2">5</ix-col>
          </ix-row>
        </ix-grid>

        <ix-grid fixed>
          <ix-row>
            <ix-col size="2">1</ix-col>
            <ix-col size="2">2</ix-col>
            <ix-col>
              <ix-button style={{ width: '100%' }}>Test</ix-button>
            </ix-col>
            <ix-col size="2">4</ix-col>
            <ix-col size="2">5</ix-col>
          </ix-row>
        </ix-grid>

        <ix-grid fixed={'fixed-sm'}>
          <ix-row>
            <ix-col size="2">1</ix-col>
            <ix-col size="2">2</ix-col>
            <ix-col>
              <ix-button style={{ width: '100%' }}>Test</ix-button>
            </ix-col>
            <ix-col size="2">4</ix-col>
            <ix-col size="2">5</ix-col>
          </ix-row>
        </ix-grid>
        <div class={'container'}>Container</div>
        <div class={'container-md'}>Container fluid/Md</div>
        <div class={'container-fluid'}>Container fluid</div>
      </Host>
    );
  }
}

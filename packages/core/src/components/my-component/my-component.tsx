/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
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
        <ix-basic-navigation>
          <p>dasd</p>
          <ix-menu expand={true} style={{ borderRight: 'solid 1px' }}>
            <ix-menu-item home icon="home">
              Home
            </ix-menu-item>
            <ix-menu-item icon="globe">Normal Tab</ix-menu-item>
            <ix-menu-category label="Top level Category" icon="rocket">
              <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
              <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
            </ix-menu-category>
          </ix-menu>
          <p>dasdad</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              width: '100%',
              alignItems: 'stretch',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <ix-side-panel position="top"></ix-side-panel>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'stretch',
                flexGrow: '1',
                justifyContent: 'space-between',
              }}
            >
              <ix-side-panel position="right"></ix-side-panel>
              <ix-side-panel position="left"></ix-side-panel>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <ix-side-panel position="bottom"></ix-side-panel>
            </div>
          </div>
        </ix-basic-navigation>
      </Host>
    );
  }
}

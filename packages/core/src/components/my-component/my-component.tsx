/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  @State() variant: string = 'floating';

  render() {
    return (
      <Host>
        <ix-basic-navigation>
          <ix-menu>
            <ix-menu-item home icon="home">
              Home
            </ix-menu-item>
            <ix-menu-item icon="globe">Normal Tab</ix-menu-item>
            <ix-menu-category icon="rocket" label="Top level Category">
              <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
              <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
            </ix-menu-category>
          </ix-menu>

          <ix-pane-layout
            variant={'floating'}
            layout={'full-height-left-right'}
          >
            <ix-pane key={1} heading="left" slot="left">
              <h1>LEFT</h1>
              <p>This is a test content with a button</p>
            </ix-pane>

            <ix-pane
              key={2}
              heading="top"
              slot="top"
              variant={this.variant as any}
            >
              <h1>TOP</h1>
              <p>This is a test content with a button</p>
            </ix-pane>

            <ix-pane key={3} heading="right" slot="right">
              <h1>RIGHT</h1>
              <p>This is a test content with a button</p>
            </ix-pane>

            <div
              slot="content"
              style={{
                background: 'blue',
                width: '100%',
                height: '100%',
              }}
            >
              <ix-button
                onClick={() =>
                  (this.variant =
                    this.variant === 'inline' ? 'floating' : 'inline')
                }
              >
                PUSH ME
              </ix-button>
            </div>
          </ix-pane-layout>
        </ix-basic-navigation>
      </Host>
    );
  }
}

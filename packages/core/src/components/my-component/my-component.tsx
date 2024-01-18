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
  @State() hide: boolean = true;

  onButtonClick(state: boolean) {
    this.hide = state;
  }

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

          <ix-panes behaviour="inline" variant="full-width-top-bottom">
            {!this.hide && (
              <ix-pane
                key={1}
                paneTitle="left"
                slot="left"
                position="left"
                expand={false}
              >
                <h1>Test Heading</h1>
                <p>This is a test content with a button</p>
                <ix-button>PUSH ME</ix-button>
              </ix-pane>
            )}

            <ix-pane
              key={2}
              paneTitle="top"
              slot="top"
              position="top"
              expand={false}
            >
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
              <ix-button>PUSH ME</ix-button>
            </ix-pane>

            <ix-pane
              key={3}
              paneTitle="bottom"
              slot="bottom"
              position="bottom"
              expand={false}
            >
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
              <ix-button>PUSH ME</ix-button>
            </ix-pane>

            <ix-pane
              key={4}
              paneTitle="right"
              slot="right"
              position="right"
              expand={false}
            >
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
              <ix-button>PUSH ME</ix-button>
            </ix-pane>

            <div
              slot="content"
              style={{
                background: 'red',
                height: '200rem',
                width: '500rem',
              }}
            >
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
              <ix-button onClick={() => this.onButtonClick(!this.hide)}>
                PUSH ME
              </ix-button>
            </div>
          </ix-panes>
        </ix-basic-navigation>
      </Host>
    );
  }
}

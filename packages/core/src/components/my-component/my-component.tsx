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
  scoped: true,
})
export class MyComponent {
  ref: HTMLIxSidePaneElement = null;
  sidePanelWrapperRef: any = null;

  @State() tstNumber: number = 10;

  render() {
    return (
      <Host>
        <ix-basic-navigation>
          <ix-menu
            expand={true}
            style={{ borderRight: '1px solid rgba(224, 245, 255, 0.25)' }}
          >
            <ix-menu-item home icon="home">
              Home
            </ix-menu-item>
            <ix-menu-item icon="globe">Normal Tab</ix-menu-item>
            <ix-menu-category label="Top level Category" icon="rocket">
              <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
              <ix-menu-item icon="globe">Nested Tab</ix-menu-item>
            </ix-menu-category>
          </ix-menu>
          <ix-side-pane-group
            ref={(r) => {
              this.sidePanelWrapperRef = r;
            }}
          >
            <ix-side-pane slot="top" expandPane={true} paneTitle="TOP">
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
              <ix-button>PUSH ME</ix-button>
            </ix-side-pane>
            <ix-side-pane paneTitle="LEFT" expandPane={true} slot="left">
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
              <ix-button>PUSH ME</ix-button>
            </ix-side-pane>
            <ix-side-pane
              expandPane={true}
              ref={(r) => {
                this.ref = r;
              }}
              slot="right"
              paneTitle="RIGHT"
            ></ix-side-pane>
            <ix-side-pane
              slot="bottom"
              paneTitle="BOTTOM"
              expandPane={true}
            ></ix-side-pane>
            <ix-side-pane-content-area
              style={{ backgroundColor: 'blue' }}
              slot="content"
            >
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
              <ix-button
                onClick={() => {
                  this.tstNumber = this.tstNumber === 10 ? 100 : 10;
                  this.ref.expandPane = !this.ref.expandPane;
                }}
              >
                PUSH ME
              </ix-button>
            </ix-side-pane-content-area>
          </ix-side-pane-group>
        </ix-basic-navigation>
      </Host>
    );
  }
}

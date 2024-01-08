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

          <ix-side-pane-group inline>
            <ix-side-pane paneTitle="TOP" slot="top" expandPane={true}>
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
              <ix-button>PUSH ME</ix-button>
            </ix-side-pane>
            <ix-side-pane
              paneTitle="LEFT"
              slot="left"
              showPreviewContent={true}
            >
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
              <ix-button>PUSH ME</ix-button>
            </ix-side-pane>
            <ix-side-pane
              paneTitle="RIGHT"
              slot="right"
              expandPane={true}
            ></ix-side-pane>
            <ix-side-pane paneTitle="BOTTOM" slot="bottom"></ix-side-pane>
            <ix-side-pane-content-area slot="content">
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
              <ix-button>PUSH ME</ix-button>
            </ix-side-pane-content-area>
          </ix-side-pane-group>
        </ix-basic-navigation>
      </Host>
    );
  }
}

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, Element, h, Host, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  scoped: true,
})
export class MyComponent {
  @Element() hostElement: HTMLMyComponentElement;
  ref: HTMLIxSidePaneElement = null;
  sidePanelWrapperRef: any = null;

  @State() hideLeft: boolean = false;

  @State() position: string = 'left';

  onButtonClick() {
    // const ixSidePaneGroup = document.querySelector('ix-side-pane-group');
    //
    // const ixSidePane = document.createElement('ix-side-pane');
    // ixSidePane.setAttribute('paneTitle', 'LEFT');
    // ixSidePane.setAttribute('inline', 'true');
    // ixSidePane.setAttribute('hidden', 'false');
    // ixSidePane.setAttribute('showPreviewContent', 'true');
    //
    // ixSidePaneGroup.appendChild(ixSidePane);

    this.hideLeft = !this.hideLeft;

    if (this.position === 'top') {
      this.position = 'left';
    } else {
      this.position = 'top';
    }
  }

  render() {
    return (
      <Host>
        <ix-button
          onClick={() => {
            this.onButtonClick();
          }}
        >
          PUSH ME
        </ix-button>
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

          <ix-side-pane-group behaviour="inline">
            {this.hideLeft && (
              <ix-side-pane
                paneTitle="LEFT"
                position="left"
                slot="left"
                icon="star"
                expand={true}
              >
                <h1>Test Heading from LEFT</h1>
              </ix-side-pane>
            )}
            <ix-side-pane
              paneTitle="TOP"
              slot="top"
              position="top"
              expand={true}
            >
              <h1>Test Heading</h1>
              <p>This is a test content with a button</p>
              <ix-button>PUSH ME</ix-button>
            </ix-side-pane>

            <ix-side-pane
              paneTitle="BOTTOM"
              position="bottom"
              slot="bottom"
              expand={true}
            >
              <h1>Test Heading from BOTTOM</h1>
            </ix-side-pane>

            <ix-side-pane
              paneTitle="RIGHT"
              position="right"
              slot="right"
              expand={true}
            >
              <h1>Test Heading from RIGHT</h1>
            </ix-side-pane>

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

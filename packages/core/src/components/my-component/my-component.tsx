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
  shadow: true,
})
export class MyComponent {
  @Element() hostElement: HTMLMyComponentElement;
  ref: HTMLIxPaneElement = null;
  sidePanelWrapperRef: any = null;

  @State() hideLeft: boolean = false;

  @State() position: string = 'left';

  onButtonClick() {
    // const ixSidePaneGroup = document.querySelector('ix-pane-group');
    //
    // const ixSidePane = document.createElement('ix-pane');
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
        <ix-pane
          paneTitle="LEFT Pane 123123123 "
          position="left"
          icon="star"
          expand={true}
        >
          <h1>Test Heading</h1>
          <p>This is a test content with a button</p>
          <ix-button>PUSH ME</ix-button>
        </ix-pane>

        {/*<ix-basic-navigation>
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
            {this.hideLeft && (
              <ix-pane
                paneTitle="LEFT"
                slot="left"
                position="left"
                icon="star"
                expand={true}
              >
                <h1>Test Heading</h1>
                <p>This is a test content with a button</p>
                <ix-button>PUSH ME</ix-button>
              </ix-pane>
            )}
            <ix-pane
              key="top"
              paneTitle="TOP"
              position="top"
              slot="top"
              icon="about"
              expand={true}
            >
              <h1>Test Heading from LEFT</h1>
            </ix-pane>

            <ix-pane
              paneTitle="RIGHT"
              position="right"
              slot="right"
              expand={true}
            >
              <h1>Test Heading from RIGHT</h1>
            </ix-pane>
            <ix-pane
              paneTitle="BOTTOM"
              position="bottom"
              slot="bottom"
              expand={true}
            >
              <h1>Test Heading from BOTTOM</h1>
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
              <ix-button>PUSH ME</ix-button>
            </div>
          </ix-panes>
        </ix-basic-navigation>*/}
      </Host>
    );
  }
}

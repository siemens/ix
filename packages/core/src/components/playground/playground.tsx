/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  // scoped: true,
})
export class PlaygroundInternal {
  render() {
    return (
      <Host>
        <ix-group header="Title" sub-header="Subtitle">
          <ix-dropdown slot="dropdown">
            <ix-dropdown-item label="Item 1" icon="pin" />
            <ix-dropdown-item label="Item 2" icon="star" />
            <ix-dropdown-item label="Item 3" icon="heart" />
            <ix-dropdown-item label="Item 4" icon="cogwheel" />
          </ix-dropdown>
        </ix-group>
        {/* <ix-application breakpoints={['sm']}>
          <ix-application-header>
            <ix-dropdown-button label="xxx">
              <ix-dropdown-item>Test 1</ix-dropdown-item>
              <ix-dropdown-item>Test 2</ix-dropdown-item>
              <ix-dropdown-item>Test 3</ix-dropdown-item>
              <ix-dropdown-item>Test 4</ix-dropdown-item>
            </ix-dropdown-button>

            <ix-avatar>
              <ix-dropdown-item>1</ix-dropdown-item>
              <ix-dropdown-item id="avatarsub">2</ix-dropdown-item>
            </ix-avatar>
          </ix-application-header>
          <ix-content>
            <ix-dropdown trigger={'avatarsub'}>
              <ix-dropdown-item>ItemAvatar1</ix-dropdown-item>
              <ix-dropdown-item>ItemAvatar2</ix-dropdown-item>
            </ix-dropdown>

            <ix-dropdown-button label="xxx">
              <ix-dropdown-item>Test 1</ix-dropdown-item>
              <ix-dropdown-item>Test 2</ix-dropdown-item>
              <ix-dropdown-item id="Menu1">Test 3</ix-dropdown-item>
              <ix-dropdown-item id="Menu2">Test 4</ix-dropdown-item>
            </ix-dropdown-button>

            <ix-dropdown trigger={'Menu1'}>
              <ix-dropdown-item>Item</ix-dropdown-item>
              <ix-dropdown-item>Item</ix-dropdown-item>
            </ix-dropdown>

            <ix-dropdown trigger={'Menu2'}>
              <ix-dropdown-item>Item</ix-dropdown-item>
              <ix-dropdown-item id="Menu2_SubMenu21">Item</ix-dropdown-item>
            </ix-dropdown>

            <ix-dropdown trigger={'Menu2_SubMenu21'}>
              <ix-dropdown-item>Item</ix-dropdown-item>
              <ix-dropdown-item>Item deep</ix-dropdown-item>
            </ix-dropdown>

            <ix-dropdown-button label="xxx 123">
              <ix-dropdown-item>Test 1</ix-dropdown-item>
              <ix-dropdown-item>Test 2</ix-dropdown-item>
              <ix-dropdown-item id="XXMenu1">Test 3</ix-dropdown-item>
              <ix-dropdown-item id="XXMenu2">Test 4</ix-dropdown-item>
            </ix-dropdown-button>

            <ix-dropdown trigger={'XXMenu1'}>
              <ix-dropdown-item>Item</ix-dropdown-item>
              <ix-dropdown-item>Item</ix-dropdown-item>
            </ix-dropdown>

            <ix-dropdown trigger={'XXMenu2'}>
              <ix-dropdown-item>Item</ix-dropdown-item>
              <ix-dropdown-item id="XXMenu2_SubXXMenu21">Item</ix-dropdown-item>
            </ix-dropdown>

            <ix-dropdown trigger={'XXMenu2_SubXXMenu21'}>
              <ix-dropdown-item>Item</ix-dropdown-item>
              <ix-dropdown-item>Item</ix-dropdown-item>
            </ix-dropdown>

            <ix-button id="trigger-type">Trigger Type 123</ix-button>
            <ix-dropdown trigger={'trigger-type'}>
              <ix-dropdown-item>Item 1</ix-dropdown-item>
              <ix-dropdown-item>Item 2</ix-dropdown-item>
              <ix-dropdown-item>Item 3</ix-dropdown-item>
            </ix-dropdown>

            <ix-split-button label="Test 1">
              <ix-dropdown-item>Test 1</ix-dropdown-item>
            </ix-split-button>

            <ix-split-button label="Test 2">
              <ix-dropdown-item>Test 1</ix-dropdown-item>
            </ix-split-button>

            <ix-group header="Title" sub-header="Subtitle">
              <ix-dropdown slot="dropdown">
                <ix-dropdown-item label="Item 1" icon="pin" />
                <ix-dropdown-item label="Item 2" icon="star" />
                <ix-dropdown-item label="Item 3" icon="heart" />
                <ix-dropdown-item label="Item 4" icon="cogwheel" />
              </ix-dropdown>
            </ix-group>

            <ix-group header="Title" sub-header="Subtitle">
              <ix-dropdown slot="dropdown">
                <ix-dropdown-item label="Item 1" icon="pin" />
                <ix-dropdown-item label="Item 2" icon="star" />
                <ix-dropdown-item label="Item 3" icon="heart" />
                <ix-dropdown-item label="Item 4" icon="cogwheel" />
              </ix-dropdown>
            </ix-group>
          </ix-content>
        </ix-application> */}
      </Host>
    );
  }
}

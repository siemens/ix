/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENxSE file in the root directory of this source tree.
 */

import { Component, Host, h } from '@stencil/core';

/** @internal */
@Component({
  tag: 'ix-playground-internal',
  styleUrl: 'playground.scss',
  // shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  scoped: true,
})
export class PlaygroundInternal {
  render() {
    return (
      <Host>
        <h1>Layout Form</h1>
        <ix-layout-auto
          layout={[
            { minWidth: '0', columns: 1 },
            { minWidth: '48em', columns: 2 },
          ]}
        >
          <ix-input
            type="text"
            label="Text Field"
            helperText="Helper Text"
            value="123456789"
          ></ix-input>
          <ix-input type="text" label="Text Field"></ix-input>
          <ix-radio-group data-colspan="2" label="123">
            <ix-radio label="Test 1"></ix-radio>
            <ix-radio label="Test 2"></ix-radio>
            <ix-radio label="Test 3"></ix-radio>
          </ix-radio-group>
        </ix-layout-auto>

        <h1>Layout Grid</h1>
        <ix-layout-grid noMargin>
          <ix-row>
            <ix-col size="6" sizeSm="12">
              <ix-input
                type="text"
                label="Text Field"
                style={{ width: '100%' }}
              ></ix-input>
            </ix-col>
            <ix-col size="6" sizeSm="12">
              <ix-input
                type="text"
                label="Text Field"
                style={{ width: '100%' }}
              ></ix-input>
            </ix-col>
          </ix-row>
          <ix-row>
            <ix-col size="12" sizeSm="12">
              <ix-input type="text" style={{ width: '100%' }}></ix-input>
            </ix-col>
          </ix-row>
        </ix-layout-grid>
      </Host>
    );
  }
}

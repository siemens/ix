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
        <ix-layout-form>
          <ix-text-field type="text" label="Text Field"></ix-text-field>
          <ix-text-field type="text" label="Text Field"></ix-text-field>
          <ix-text-field
            type="text"
            label="Text Field"
            data-colspan="2"
          ></ix-text-field>
        </ix-layout-form>

        <h1>Layout Grid</h1>
        <ix-layout-grid noMargin>
          <ix-row>
            <ix-col size="6" sizeSm="12">
              <ix-text-field
                type="text"
                label="Text Field"
                style={{ width: '100%' }}
              ></ix-text-field>
            </ix-col>
            <ix-col size="6" sizeSm="12">
              <ix-text-field
                type="text"
                label="Text Field"
                style={{ width: '100%' }}
              ></ix-text-field>
            </ix-col>
          </ix-row>
          <ix-row>
            <ix-col size="12" sizeSm="12">
              <ix-text-field
                type="text"
                label="Text Field"
                style={{ width: '100%' }}
              ></ix-text-field>
            </ix-col>
          </ix-row>
        </ix-layout-grid>
      </Host>
    );
  }
}

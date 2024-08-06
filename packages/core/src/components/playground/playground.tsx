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
  // shadow: true,
  // Set scoped=true and shadow=false to test global styles like checkbox etc
  scoped: true,
})
export class PlaygroundInternal {
  render() {
    return (
      <Host>
        <ix-application>
          <ix-application-header></ix-application-header>
          <ix-menu></ix-menu>
          <div
            style={{
              display: 'block',
              position: 'relative',
              height: '100%',
            }}
          >
            <ix-button>Test</ix-button>
          </div>
          <ix-button slot="bottom">Footer</ix-button>
        </ix-application>
      </Host>
    );
  }
}

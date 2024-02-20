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
        <ix-message-bar>Message text</ix-message-bar>
        <ix-message-bar
          style={{ display: 'block', marginTop: '5rem', marginBottom: '5rem' }}
          type="warning"
        >
          Message text
        </ix-message-bar>
        <ix-message-bar type="danger">
          <div class="d-flex align-items-center justify-content-between">
            Message text <ix-button>Action</ix-button>
          </div>
        </ix-message-bar>
      </Host>
    );
  }
}

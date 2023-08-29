/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ix-content',
  styleUrl: 'content.scss',
  shadow: true,
})
export class Content {
  render() {
    return (
      <Host>
        <main>
          <slot></slot>
        </main>
      </Host>
    );
  }
}

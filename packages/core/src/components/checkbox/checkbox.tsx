/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ix-checkbox',
  styleUrl: 'checkbox.css',
  shadow: true,
})
export class Checkbox {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

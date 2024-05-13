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
  tag: 'ix-field-label',
  styleUrl: 'field-label.scss',
  shadow: true,
})
export class FieldLabel {
  render() {
    return (
      <Host>
        <ix-typography color="soft" format="label">
          <slot></slot>
        </ix-typography>
      </Host>
    );
  }
}

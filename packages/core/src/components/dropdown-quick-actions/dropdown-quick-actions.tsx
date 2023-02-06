/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host } from '@stencil/core';

/**
 * @since 1.4.0
 */
@Component({
  tag: 'ix-dropdown-quick-actions',
  styleUrl: 'dropdown-quick-actions.scss',
  shadow: true,
})
export class DropdownQuickActions {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

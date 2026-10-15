/*
 * SPDX-FileCopyrightText: 2026 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

/**
 * Standalone horizontal separator for list content.
 * @since 6.0.0
 */
@Component({
  tag: 'ix-list-item-separator',
  styleUrl: 'list-item-separator.scss',
  shadow: true,
})
export class ListItemSeparator {
  render() {
    return <Host aria-hidden="true"></Host>;
  }
}

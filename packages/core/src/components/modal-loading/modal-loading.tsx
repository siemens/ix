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
  tag: 'ix-modal-loading',
  styleUrl: 'modal-loading.scss',
  shadow: true,
})
export class ModalLoading {
  render() {
    return (
      <Host>
        <ix-spinner variant="primary"></ix-spinner>
        <span class={'loading-text'}>
          <slot></slot>
        </span>
      </Host>
    );
  }
}

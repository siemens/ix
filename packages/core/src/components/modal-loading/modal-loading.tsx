/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host } from '@stencil/core';

/**
 * @internal
 */
/**
 * Modal that indicates a loading or processing state.
 *
 * @documentation https://ix.siemens.io//docs/components/loading-modal/guide.md
 *
 * @slot - Loading message content.
 */
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

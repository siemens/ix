/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, State } from '@stencil/core';
import { hasSlottedElements } from '../utils/shadow-dom';

/**
 * @since 2.1.0
 * @slot header - Display content at the top of the content page
 */
@Component({
  tag: 'ix-content',
  styleUrl: 'content.scss',
  shadow: true,
})
export class Content {
  @Element() hostElement!: HTMLIxContentElement;

  @State() isContentHeaderSlotted = false;

  get contentHeaderSlot() {
    return this.hostElement.shadowRoot.querySelector(
      '.content-header slot'
    ) as HTMLSlotElement;
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'content-header': true,
            slotted: this.isContentHeaderSlotted,
          }}
        >
          <slot
            name="header"
            onSlotchange={() => {
              this.isContentHeaderSlotted = hasSlottedElements(
                this.contentHeaderSlot
              );
            }}
          ></slot>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}

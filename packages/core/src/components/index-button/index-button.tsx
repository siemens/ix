/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

/**
 * @internal
 */
@Component({
  tag: 'ix-index-button',
  styleUrl: 'index-button.scss',
  scoped: true,
})
export class IxIndexButton {
  /**
   *
   */
  @Prop() selected: boolean;

  // @Event() selected: new EventEmitter<boolean>();

  render() {
    return (
      <Host>
        <button
          class={{
            btn: true,
            'btn-invisible-primary': true,
            selected: this.selected,
          }}
          // (click)={}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}

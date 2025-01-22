/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'ix-tile',
  styleUrl: 'tile.scss',
  shadow: true,
})
export class Tile {
  @Element() hostElement!: HTMLIxTileElement;

  /**
   * Size of the tile - one of 'small', 'medium' or 'large'
   */
  @Prop() size: 'small' | 'medium' | 'big' = 'medium';

  @State() hasHeaderSlot: boolean = false;
  @State() hasFooterSlot: boolean = false;

  handleHeaderSlotChange() {
    this.hasHeaderSlot = !!this.hostElement.querySelector('[slot="header"]');
  }

  handleFooterSlotChange() {
    this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
  }

  render() {
    return (
      <Host
        class={{
          'tile-small': this.size === 'small',
          'tile-medium': this.size === 'medium',
          'tile-big': this.size === 'big',
        }}
      >
        <div
          class={{
            'tile-header': true,
            'has-content': this.hasHeaderSlot,
          }}
        >
          <slot
            name="header"
            onSlotchange={() => this.handleHeaderSlotChange()}
          ></slot>
        </div>
        <div class="tile-subheader">
          <slot name="subheader"></slot>
        </div>
        <div class="tile-content">
          <slot></slot>
        </div>
        <div
          class={{
            'tile-footer': true,
            'has-content': this.hasFooterSlot,
          }}
        >
          <slot
            name="footer"
            onSlotchange={() => this.handleFooterSlotChange()}
          ></slot>
        </div>
      </Host>
    );
  }
}

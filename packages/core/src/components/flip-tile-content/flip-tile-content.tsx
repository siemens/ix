/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-flip-tile-content',
  styleUrl: 'flip-tile-content.css',
  shadow: true,
})
export class FlipTileContent {
  /**
   * Controls the visibility of the content
   *
   * @internal
   */
  @Prop() contentVisible = false;

  render() {
    return <Host>{this.contentVisible ? <slot></slot> : null}</Host>;
  }
}

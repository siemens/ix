/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-application-header',
  styleUrl: 'application-header.scss',
  scoped: true,
})
export class CwApplicationHeader {
  /**
   * Application name
   */
  @Prop() name: string;

  render() {
    return (
      <Host>
        <div class="logo">
          <slot name="logo"></slot>
        </div>
        <span class="name">{this.name}</span>
        <slot></slot>
      </Host>
    );
  }
}

/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ix-breadcrumb-item',
  styleUrl: 'breadcrumb-item.scss',
  scoped: true,
})
export class BreadcrumbItem {
  /**
   * Breadcrumb label
   */
  @Prop() label: string;

  /**
   * Icon to be displayed next ot the label
   */
  @Prop() icon: string;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}

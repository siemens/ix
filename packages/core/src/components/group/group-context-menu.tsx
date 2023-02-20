/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, State } from '@stencil/core';

@Component({
  tag: 'ix-group-context-menu',
  styleUrl: './group-context-menu.scss',
  scoped: true,
})
export class GroupContextMenu {
  @Element() host!: HTMLIxGroupContextMenuElement;

  @State() showContextMenu = false;

  get dropdownElement() {
    return this.host.querySelector('ix-dropdown');
  }

  get groupDropdownItem() {
    return this.host.querySelectorAll('ix-group-dropdown-item');
  }

  private configureDropdown(triggerElement: HTMLElement) {
    this.dropdownElement.positioningStrategy = 'fixed';
    this.dropdownElement.trigger = triggerElement;
  }

  componentWillRender() {
    this.showContextMenu = !!this.dropdownElement;
  }

  render() {
    return (
      <Host>
        <ix-icon-button
          class={{ hide: !this.showContextMenu }}
          ref={(ref) =>
            this.dropdownElement ? this.configureDropdown(ref) : null
          }
          size="24"
          ghost={true}
          icon="context-menu"
        ></ix-icon-button>
        <slot></slot>
      </Host>
    );
  }
}

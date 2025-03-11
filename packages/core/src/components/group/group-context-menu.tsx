/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, State } from '@stencil/core';
import { getSlottedElements } from '../utils/shadow-dom';
import { iconContextMenu } from '@siemens/ix-icons/icons';

@Component({
  tag: 'ix-group-context-menu',
  styleUrl: './group-context-menu.scss',
  shadow: true,
})
export class GroupContextMenu {
  @Element() hostElement!: HTMLIxGroupContextMenuElement;

  @State() showContextMenu = false;

  private getTrigger() {
    return this.hostElement;
  }

  private configureDropdown(
    dropdownElement: HTMLIxDropdownElement,
    triggerElement: HTMLElement
  ) {
    dropdownElement.positioningStrategy = 'fixed';
    dropdownElement.trigger = triggerElement;
  }

  private onSlotChange() {
    const slot = this.hostElement.shadowRoot!.querySelector('slot');
    if (!slot) {
      return;
    }
    const elements = getSlottedElements(slot);
    this.showContextMenu = elements.length !== 0;

    const dropdownElement = elements.find(
      (elm: Element) => elm.tagName === 'IX-DROPDOWN'
    );

    const triggerElement = this.getTrigger();

    if (!triggerElement) {
      return;
    }

    if (!dropdownElement) {
      return;
    }

    this.configureDropdown(dropdownElement, triggerElement);
  }

  render() {
    return (
      <Host>
        <ix-icon-button
          class={{ hide: !this.showContextMenu }}
          size="24"
          ghost={true}
          icon={iconContextMenu}
        ></ix-icon-button>
        <slot onSlotchange={() => this.onSlotChange()}></slot>
      </Host>
    );
  }
}

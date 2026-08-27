/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { iconContextMenu } from '@siemens/ix-icons/icons';
import { Component, Element, h, Host, State } from '@stencil/core';
import { a11yBoolean } from '../utils/a11y';
import { getSlottedElements } from '../utils/shadow-dom';

/**
 * @slot default - Context menu items.
 */
@Component({
  tag: 'ix-group-context-menu',
  styleUrl: './group-context-menu.scss',
  shadow: true,
})
export class GroupContextMenu {
  @Element() hostElement!: HTMLIxGroupContextMenuElement;

  @State() showContextMenu = false;
  @State() dropdownShow = false;

  private dropdownElement?: HTMLIxDropdownElement;

  @State() contextMenuExpanded = false;

  private getTrigger() {
    return this.hostElement;
  }

  private readonly onDropdownShowChanged = (event: CustomEvent<boolean>) => {
    this.dropdownShow = event.detail;
  };

  private unbindDropdown() {
    this.dropdownElement?.removeEventListener(
      'showChanged',
      this.onDropdownShowChanged
    );
    this.dropdownElement = undefined;
  }

  private configureDropdown(
    dropdownElement: HTMLIxDropdownElement,
    triggerElement: HTMLElement
  ) {
    if (this.dropdownElement !== dropdownElement) {
      this.unbindDropdown();
      dropdownElement.addEventListener(
        'showChanged',
        this.onDropdownShowChanged
      );
      this.dropdownElement = dropdownElement;
    }

    // showChanged does not replay current state when the slotted dropdown is replaced.
    this.dropdownShow = dropdownElement.show;

    dropdownElement.positioningStrategy = 'fixed';
    dropdownElement.trigger = triggerElement;
  }

  disconnectedCallback() {
    this.unbindDropdown();
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

    if (!triggerElement || !dropdownElement) {
      this.unbindDropdown();
      this.dropdownShow = false;
      return;
    }

    this.configureDropdown(dropdownElement, triggerElement);
    dropdownElement.hostRole = 'menu';
  }

  render() {
    return (
      <Host
        onShowChange={(event: CustomEvent<boolean>) =>
          (this.contextMenuExpanded = event.detail)
        }
      >
        <ix-icon-button
          class={{
            hide: !this.showContextMenu,
            active: this.dropdownShow,
          }}
          size="24"
          variant="subtle-tertiary"
          icon={iconContextMenu}
          aria-haspopup="menu"
          aria-expanded={this.contextMenuExpanded.toString()}
          aria-expanded={a11yBoolean(this.dropdownShow)}
          aria-haspopup="true"
        ></ix-icon-button>
        <slot onSlotchange={() => this.onSlotChange()}></slot>
      </Host>
    );
  }
}

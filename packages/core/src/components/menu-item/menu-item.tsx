/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { createMutationObserver } from '../utils/mutation-observer';

/**
 * @slot menu-item-label Custom label
 */
@Component({
  tag: 'ix-menu-item',
  styleUrl: 'menu-item.scss',
  shadow: true,
})
export class MenuItem {
  /**
   * Move the Tab to a top position.
   */
  @Prop() home = false;

  /**
   * Caution: this is no longer working. Please use slot="bottom" instead.
   *
   * Place tab on bottom
   */
  @Prop() bottom = false;

  /**
   * Icon name from @siemens/ix-icons
   *
   * @deprecated Use `icon` property. Will be removed in 3.0.0
   */
  @Prop() tabIcon = 'document';

  /**
   * Icon name from @siemens/ix-icons
   */
  @Prop() icon: string;

  /**
   * Show notification count on tab
   */
  @Prop() notifications: number;

  /**
   * State to display active
   */
  @Prop() active: boolean;

  /**
   * Disable tab and remove event handlers
   */
  @Prop() disabled: boolean;

  @Element() hostElement: HTMLIxMenuItemElement;

  @State() title: string;

  private observer: MutationObserver;

  componentWillRender() {
    this.title = this.hostElement.innerText;
  }

  connectedCallback() {
    this.observer = createMutationObserver(() => {
      this.title = this.hostElement.innerText;
    });

    this.observer.observe(this.hostElement, {
      subtree: true,
      childList: true,
      characterData: true,
    });
  }

  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  render() {
    let extendedAttributes = {};
    if (this.home) {
      extendedAttributes = {
        slot: 'home',
      };
    }

    if (this.bottom) {
      extendedAttributes = {
        slot: 'bottom',
      };
    }
    return (
      <Host
        class={{
          disabled: this.disabled,
          'home-tab': this.home,
          'bottom-tab': this.bottom,
          active: this.active,
        }}
        {...extendedAttributes}
      >
        <li class="tab" title={this.title}>
          <ix-icon name={this.icon ?? this.tabIcon}></ix-icon>
          <div class="notification">
            {this.notifications ? (
              <div class="pill">{this.notifications}</div>
            ) : null}
          </div>
          <span class="tab-text text-default">
            <slot></slot>
          </span>
        </li>
      </Host>
    );
  }
}

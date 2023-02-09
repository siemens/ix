/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import {
  getCurrentMode,
  Mode,
  onModeChange,
  setupIxContext,
} from '../utils/mode';
import { Disposable } from '../utils/typed-event';

@Component({
  tag: 'ix-basic-navigation',
  styleUrl: 'basic-navigation.scss',
  scoped: true,
})
export class BasicNavigation {
  @Element() hostElement: HTMLIxBasicNavigationElement;

  /**
   * Application name
   */
  @Prop() applicationName: string;

  /**
   * Hide application header
   */
  @Prop() hideHeader = false;

  @State() mode: Mode = 'desktop';

  get menu(): HTMLIxMenuElement {
    return this.hostElement.querySelector('ix-menu');
  }

  private disposeModeListener: Disposable;

  componentWillLoad() {
    setupIxContext();
    this.disposeModeListener = onModeChange().on((mode) => (this.mode = mode));
    this.mode = getCurrentMode();
  }

  componentDidRender() {
    if (this.menu) {
      this.appendMenu();
      this.adjustMenuHeight();
      this.menu.applicationName = this.applicationName;
    }
  }

  disconnectedCallback() {
    this.disposeModeListener?.dispose();
  }

  private appendMenu() {
    this.hostElement.querySelector('#menu-placeholder').appendChild(this.menu);
  }

  private adjustMenuHeight() {
    if (!this.hideHeader) {
      this.menu.style.height = 'calc(100% - 2.75rem)';
    }
  }

  render() {
    return (
      <Host
        data-role=""
        class={{
          'hide-header': this.hideHeader,
          [`mode-${this.mode}`]: true,
        }}
      >
        {!this.hideHeader ? (
          <ix-application-header name={this.applicationName}>
            <slot name="logo"></slot>
          </ix-application-header>
        ) : null}
        <div id="menu-placeholder"></div>
        <div class="content" onClick={() => this.menu.toggleMenu(false)}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}

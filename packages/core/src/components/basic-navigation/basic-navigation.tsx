/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { menuController } from '../utils/menu-service/menu-service';
import { Mode } from '../utils/screen/mode';
import { screenMode } from '../utils/screen/service';
import { Disposable } from '../utils/typed-event';

@Component({
  tag: 'ix-basic-navigation',
  styleUrl: 'basic-navigation.scss',
  shadow: true,
})
export class BasicNavigation {
  @Element() hostElement: HTMLIxBasicNavigationElement;

  /**
   * Application name
   */
  @Prop() applicationName: string;

  /**
   * Hide application header. Will disable responsive feature of basic navigation.
   */
  @Prop() hideHeader = false;

  @State() mode: Mode = 'large';

  get menu(): HTMLIxMenuElement | null {
    return this.hostElement.querySelector('ix-menu');
  }

  private modeDisposable: Disposable;

  private onContentClick() {
    if (menuController.isPinned) {
      return;
    }
    this.menu?.toggleMenu(false);
  }

  componentWillLoad() {
    if (this.hideHeader === false) {
      this.modeDisposable = screenMode.onChange.on(
        (mode) => (this.mode = mode)
      );
      this.mode = screenMode.mode;
    }
  }

  componentDidRender() {
    if (this.menu) {
      this.menu.applicationName = this.applicationName;
    }
  }

  disconnectedCallback() {
    this.modeDisposable?.dispose();
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
          <ix-application-header name={this.applicationName} mode={this.mode}>
            <slot name="logo" slot="logo"></slot>
          </ix-application-header>
        ) : null}
        <div class="navigation-content">
          <slot name="menu"></slot>
          <div class="content" onClick={() => this.onContentClick()}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}

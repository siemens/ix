/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { menuController } from '../utils/menu-controller/menu-controller';
import { getCurrentMode, Mode, onModeChange } from '../utils/mode';

@Component({
  tag: 'ix-application-header',
  styleUrl: 'application-header.scss',
  shadow: true,
})
export class ApplicationHeader {
  @Element() host!: HTMLIxApplicationHeaderElement;

  /**
   * Application name
   */
  @Prop() name: string;

  @State() mode: Mode;

  componentWillLoad() {
    onModeChange().on((mode) => (this.mode = mode));
    this.mode = getCurrentMode();
  }

  componentDidLoad() {
    this.attachSiemensLogoIfLoaded();
  }

  private async attachSiemensLogoIfLoaded() {
    await window.customElements.whenDefined('ix-siemens-logo');
    const logoElement = document.createElement('ix-siemens-logo');

    if (!this.host.querySelector('[slot="logo"]')) {
      this.host.shadowRoot.querySelector('.logo').appendChild(logoElement);
    }
  }

  private async onMenuClick() {
    menuController.open();
  }

  render() {
    return (
      <Host class={{ [`mode-${this.mode}`]: true }}>
        {this.mode === 'mobile' ? (
          <ix-burger-menu onClick={() => this.onMenuClick()}></ix-burger-menu>
        ) : null}
        <div class="logo">
          <slot name="logo"></slot>
        </div>
        <div class="name">{this.name}</div>
        <slot></slot>
      </Host>
    );
  }
}

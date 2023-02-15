/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { menuController } from '../utils/menu-service/menu-service';
import { hostContext, isBasicNavigationLayout } from '../utils/screen/context';
import { Mode } from '../utils/screen/mode';
import { screenMode } from '../utils/screen/service';
import { Disposable } from '../utils/typed-event';

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

  @State() mode: Mode = 'desktop';

  @State() menuExpanded = false;

  private menuDisposable?: Disposable;
  private modeDisposable?: Disposable;

  componentWillLoad() {
    const layout = hostContext('ix-basic-navigation', this.host);
    if (isBasicNavigationLayout(layout)) {
      this.modeDisposable = screenMode.onChange.on(
        (mode) => (this.mode = mode)
      );
      this.mode = screenMode.mode;

      this.menuDisposable = menuController.expandChange.on((show) => {
        this.menuExpanded = show;
      });
    }
  }

  componentDidLoad() {
    this.attachSiemensLogoIfLoaded();
  }

  disconnectedCallback() {
    this.menuDisposable?.dispose();
    this.modeDisposable?.dispose();
  }

  private async attachSiemensLogoIfLoaded() {
    await window.customElements.whenDefined('ix-siemens-logo');
    const logoElement = document.createElement('ix-siemens-logo');

    if (!this.host.querySelector('[slot="logo"]')) {
      this.host.shadowRoot.querySelector('.logo').appendChild(logoElement);
    }
  }

  private async onMenuClick() {
    menuController.toggle();
  }

  render() {
    return (
      <Host class={{ [`mode-${this.mode}`]: true }}>
        {this.mode === 'mobile' ? (
          <ix-burger-menu
            onClick={() => this.onMenuClick()}
            expanded={this.menuExpanded}
          ></ix-burger-menu>
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

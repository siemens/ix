/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Component,
  Element,
  Fragment,
  h,
  Host,
  Prop,
  readTask,
  State,
} from '@stencil/core';
import { showAppSwitch } from '../utils/app-switch';
import { applicationLayoutService } from '../utils/application-layout';
import { ApplicationLayoutContext } from '../utils/application-layout/context';
import { Breakpoint } from '../utils/breakpoints';
import { useContextConsumer } from '../utils/context';
import { menuController } from '../utils/menu-service/menu-service';
import { Disposable } from '../utils/typed-event';

@Component({
  tag: 'ix-application-header',
  styleUrl: 'application-header.scss',
  shadow: true,
})
export class ApplicationHeader {
  @Element() hostElement!: HTMLIxApplicationHeaderElement;

  /**
   * Application name
   */
  @Prop() name: string;

  @State() appSwitch = false;
  @State() breakpoint: Breakpoint = 'lg';
  @State() menuExpanded = false;
  @State() suppressResponsive = false;

  private menuDisposable?: Disposable;
  private modeDisposable?: Disposable;

  componentWillLoad() {
    useContextConsumer(this.hostElement, ApplicationLayoutContext, (ctx) => {
      if (ctx?.host === 'map-navigation') {
        this.suppressResponsive = true;
        this.breakpoint = 'md';
        return;
      }

      this.breakpoint = applicationLayoutService.breakpoint;
      this.appSwitch = ctx.appSwitch;
    });

    this.menuDisposable = menuController.expandChange.on((show) => {
      this.menuExpanded = show;
    });

    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      if (this.suppressResponsive) {
        this.breakpoint = 'md';
        return;
      }

      this.breakpoint = mode;
    });
  }

  componentDidLoad() {
    this.attachSiemensLogoIfLoaded();
  }

  disconnectedCallback() {
    this.menuDisposable?.dispose();
    this.modeDisposable?.dispose();
  }

  private isLogoSlotted() {
    const slotElement = this.hostElement.shadowRoot.querySelector(
      'slot[name="logo"]'
    ) as HTMLSlotElement;
    const nodes = slotElement.assignedNodes({
      flatten: true,
    });

    return nodes.length !== 0;
  }

  private async attachSiemensLogoIfLoaded() {
    await window.customElements.whenDefined('ix-siemens-logo');
    const logoElement = document.createElement('ix-siemens-logo');
    if (!this.isLogoSlotted()) {
      this.hostElement.shadowRoot
        .querySelector('.logo')
        .appendChild(logoElement);
    }
  }

  private async onMenuClick() {
    menuController.toggle();
  }

  private resolveContextMenuButton() {
    return new Promise<HTMLElement>((resolve) =>
      readTask(() =>
        resolve(
          this.hostElement.shadowRoot.querySelector(
            '[data-context-menu]'
          ) as HTMLElement
        )
      )
    );
  }

  render() {
    return (
      <Host
        class={{ [`breakpoint-${this.breakpoint}`]: true }}
        slot="application-header"
      >
        {this.breakpoint === 'sm' && this.suppressResponsive === false && (
          <ix-burger-menu
            onClick={() => this.onMenuClick()}
            expanded={this.menuExpanded}
          ></ix-burger-menu>
        )}
        {this.appSwitch &&
          this.breakpoint !== 'sm' &&
          this.suppressResponsive === false && (
            <ix-icon-button
              onClick={showAppSwitch}
              icon="apps"
              ghost
              class="app-switch"
            ></ix-icon-button>
          )}
        <div class="logo">
          <slot name="logo"></slot>
        </div>
        <div class="name">{this.name}</div>
        <div class="content">
          {this.breakpoint === 'sm' ? (
            <Fragment>
              <ix-icon-button
                data-context-menu
                icon="more-menu"
                ghost
              ></ix-icon-button>
              <ix-dropdown
                class="dropdown"
                trigger={this.resolveContextMenuButton()}
              >
                <div class="dropdown-content">
                  <slot></slot>
                </div>
              </ix-dropdown>
            </Fragment>
          ) : (
            <slot></slot>
          )}
          <slot name="ix-application-header-avatar"></slot>
        </div>
      </Host>
    );
  }
}

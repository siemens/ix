/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import { ApplicationLayoutContext } from '../utils/application-layout/context';
import { applicationLayoutService } from '../utils/application-layout/service';
import { Breakpoint } from '../utils/breakpoints';
import { ContextProvider, useContextProvider } from '../utils/context';
import { menuController } from '../utils/menu-service/menu-service';
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
  @Watch('hideHeader')
  onHideHeaderChange() {
    this.contextProvider?.emit({
      hideHeader: this.hideHeader,
    });

    this.breakpoint = applicationLayoutService.breakpoint;
  }

  @State() breakpoint: Breakpoint = 'lg';

  get menu(): HTMLIxMenuElement | null {
    return this.hostElement.querySelector('ix-menu');
  }

  private modeDisposable: Disposable;
  private contextProvider: ContextProvider<typeof ApplicationLayoutContext>;

  private onContentClick() {
    if (menuController.isPinned) {
      return;
    }
    this.menu?.toggleMenu(false);
  }

  componentWillLoad() {
    this.contextProvider = useContextProvider(
      this.hostElement,
      ApplicationLayoutContext,
      {
        hideHeader: this.hideHeader,
      }
    );

    if (this.hideHeader === false) {
      this.modeDisposable = applicationLayoutService.onChange.on(
        (mode) => (this.breakpoint = mode)
      );
      this.breakpoint = applicationLayoutService.breakpoint;
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
          [`breakpoint-${this.breakpoint}`]: true,
        }}
      >
        {!this.hideHeader ? (
          <ix-application-header
            name={this.applicationName}
            breakpoint={this.breakpoint}
          >
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

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
  @Element() hostElement!: HTMLIxBasicNavigationElement;

  /**
   * Application name
   */
  @Prop() applicationName?: string;

  /**
   * Hide application header. Will disable responsive feature of basic navigation.
   */
  @Prop() hideHeader = false;
  @Watch('hideHeader')
  onHideHeaderChange() {
    this.contextProvider?.emit({
      hideHeader: this.hideHeader,
      host: 'basic-navigation',
    });

    this.breakpoint = applicationLayoutService.breakpoint;
  }

  /**
   * Change the responsive layout of the menu structure
   */
  @Prop() forceBreakpoint: Breakpoint | undefined;
  forceLayoutChange(newMode: Breakpoint | undefined) {
    if (!newMode) {
      applicationLayoutService.enableBreakpointDetection();
      return;
    }

    applicationLayoutService.disableBreakpointDetection();
    applicationLayoutService.setBreakpoint(newMode);
  }

  /**
   * Supported layouts
   * @example ['sm', 'md']
   */
  @Prop() breakpoints: Breakpoint[] = ['sm', 'md', 'lg'];
  @Watch('breakpoints')
  onBreakpointsChange(breakpoints: Breakpoint[]) {
    applicationLayoutService.setBreakpoints(breakpoints);
  }

  @State() breakpoint: Breakpoint = 'lg';

  get menu(): HTMLIxMenuElement | null {
    return this.hostElement.querySelector('ix-menu');
  }

  private modeDisposable?: Disposable;
  private contextProvider?: ContextProvider<typeof ApplicationLayoutContext>;

  private onContentClick() {
    if (menuController.isPinned) {
      return;
    }
    this.menu?.toggleMenu(false);
  }

  componentWillLoad() {
    applicationLayoutService.setBreakpoints(this.breakpoints);

    this.contextProvider = useContextProvider(
      this.hostElement,
      ApplicationLayoutContext,
      {
        hideHeader: this.hideHeader,
        host: 'basic-navigation',
      }
    );

    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      this.breakpoint = mode;
    });
    this.breakpoint = applicationLayoutService.breakpoint;

    if (this.forceBreakpoint) {
      this.forceLayoutChange(this.forceBreakpoint);
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
          <ix-application-header name={this.applicationName}>
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

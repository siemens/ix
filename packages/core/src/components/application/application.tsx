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
import { useContextProvider } from '../utils/context';
import { menuController } from '../utils/menu-service/menu-service';
import { IxTheme, themeSwitcher } from '../utils/theme-switcher';
import { Disposable } from '../utils/typed-event';

@Component({
  tag: 'ix-application',
  styleUrl: 'application.scss',
  shadow: true,
})
export class Application {
  @Element() hostElement: HTMLIxApplicationElement;

  /**
   * Application theme
   */
  @Prop() theme: IxTheme;

  /**
   * Use the system appearance dark or light
   */
  @Prop() themeSystemAppearance = false;

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

  private modeDisposable: Disposable;

  private onContentClick() {
    if (menuController.isPinned) {
      return;
    }
    this.menu?.toggleMenu(false);
  }

  componentWillLoad() {
    applicationLayoutService.setBreakpoints(this.breakpoints);

    useContextProvider(this.hostElement, ApplicationLayoutContext, {
      hideHeader: false,
      host: 'basic-navigation',
    });

    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      this.breakpoint = mode;
    });
    this.breakpoint = applicationLayoutService.breakpoint;

    if (this.forceBreakpoint) {
      this.forceLayoutChange(this.forceBreakpoint);
    }

    this.changeTheme();
  }

  disconnectedCallback() {
    this.modeDisposable?.dispose();
  }

  @Watch('theme')
  @Watch('themeSystemAppearance')
  private changeTheme() {
    if (!this.theme && this.themeSystemAppearance) {
      themeSwitcher.setVariant();
      return;
    }

    if (!this.theme) {
      return;
    }

    if (themeSwitcher.hasVariantSuffix(this.theme)) {
      themeSwitcher.setTheme(`theme-${this.theme}`);
      return;
    }

    themeSwitcher.setTheme(
      `theme-${this.theme}-dark`,
      this.themeSystemAppearance
    );
  }

  render() {
    return (
      <Host
        data-role=""
        class={{
          [`breakpoint-${this.breakpoint}`]: true,
        }}
      >
        <slot name="application-header"></slot>
        <div class="application">
          <slot name="menu"></slot>
          <main class="content" onClick={() => this.onContentClick()}>
            <slot></slot>
          </main>
        </div>
      </Host>
    );
  }
}

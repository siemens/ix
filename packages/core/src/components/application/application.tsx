/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, Element, h, Host, Prop, State, Watch } from '@stencil/core';
import {
  ApplicationLayoutContext,
  AppSwitchConfiguration,
} from '../utils/application-layout/context';
import { applicationLayoutService } from '../utils/application-layout/service';
import { Breakpoint } from '../utils/breakpoints';
import { ContextProvider, useContextProvider } from '../utils/context';
import { menuController } from '../utils/menu-service/menu-service';
import { hasSlottedElements } from '../utils/shadow-dom';
import { IxTheme, themeSwitcher } from '../utils/theme-switcher';
import { Disposable } from '../utils/typed-event';

/**
 * @since 2.1.0
 */
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

  /**
   * Define application switch configuration
   */
  @Prop() appSwitchConfig: AppSwitchConfiguration;

  @State() breakpoint: Breakpoint = 'lg';
  @State() applicationSidebarSlotted = false;

  private contextProvider: ContextProvider<typeof ApplicationLayoutContext>;

  get menu(): HTMLIxMenuElement | null {
    return this.hostElement.querySelector('ix-menu');
  }

  get applicationSidebarSlot() {
    return this.hostElement.shadowRoot.querySelector(
      '.application-sidebar slot'
    ) as HTMLSlotElement;
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

    this.contextProvider = useContextProvider(
      this.hostElement,
      ApplicationLayoutContext,
      {
        hideHeader: false,
        host: 'basic-navigation',
        sidebar: this.applicationSidebarSlotted,
        appSwitchConfig: this.appSwitchConfig,
      }
    );

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
    if (!this.theme) {
      if (this.themeSystemAppearance) {
        themeSwitcher.setVariant();
      }

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

  @Watch('appSwitchConfig')
  @Watch('applicationSidebarSlotted')
  onApplicationSidebarChange() {
    this.contextProvider.emit({
      hideHeader: false,
      host: 'basic-navigation',
      sidebar: this.applicationSidebarSlotted,
      appSwitchConfig: this.appSwitchConfig,
    });
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
          <aside
            class={{
              'application-sidebar': true,
              slotted: this.applicationSidebarSlotted,
            }}
            onClick={() => this.onContentClick()}
          >
            <slot
              name="application-sidebar"
              onSlotchange={() =>
                (this.applicationSidebarSlotted = hasSlottedElements(
                  this.applicationSidebarSlot
                ))
              }
            ></slot>
          </aside>
          <div class="content-area">
            <main class="content" onClick={() => this.onContentClick()}>
              <slot></slot>
            </main>
            <footer class="footer">
              <slot name="bottom"></slot>
            </footer>
          </div>
        </div>
      </Host>
    );
  }
}

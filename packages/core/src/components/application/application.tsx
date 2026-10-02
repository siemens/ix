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
import { themeSwitcher, ThemeVariant } from '../utils/theme-switcher';
import { Disposable } from '../utils/typed-event';

/**
 * @slot application-header - Header displayed at the top of the application.
 * @slot menu - Main application navigation.
 * @slot application-sidebar - Sidebar displayed next to the main content.
 * @slot default - Main application content.
 * @slot bottom - Footer displayed below the main content.
 */
@Component({
  tag: 'ix-application',
  styleUrl: 'application.scss',
  shadow: true,
})
export class Application {
  @Element() hostElement!: HTMLIxApplicationElement;

  /**
   * Application theme
   */
  @Prop() theme?: string;

  /**
   * Color schema of the theme
   *
   * @since 5.0.0
   */
  @Prop() colorSchema?: ThemeVariant = 'system';

  /**
   * Change the responsive layout of the menu structure
   */
  @Prop() forceBreakpoint: Breakpoint | undefined;

  @Watch('forceBreakpoint')
  onForceBreakpointChange(forceBreakpoint: Breakpoint | undefined) {
    this.setBreakpoints(this.breakpoints);
    this.forceLayoutChange(forceBreakpoint);
    this.emitLayoutContext();
  }

  forceLayoutChange(newMode: Breakpoint | undefined) {
    if (!newMode) {
      applicationLayoutService.enableBreakpointDetection();
      applicationLayoutService.debouncedOnResize();
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
    this.setBreakpoints(breakpoints);
  }

  /**
   * Define application switch configuration
   */
  @Prop() appSwitchConfig?: AppSwitchConfiguration;

  @State() breakpoint: Breakpoint = 'lg';
  @State() applicationSidebarSlotted = false;
  @State() menuPinned = false;

  private contextProvider?: ContextProvider<typeof ApplicationLayoutContext>;

  get menu(): HTMLIxMenuElement | null {
    return this.hostElement.querySelector('ix-menu');
  }

  get applicationSidebarSlot() {
    return this.hostElement.shadowRoot!.querySelector(
      '.application-sidebar slot'
    ) as HTMLSlotElement;
  }

  private modeDisposable?: Disposable;
  private pinnedDisposable?: Disposable;

  private onContentClick() {
    if (menuController.isPinned) {
      return;
    }
    this.menu?.toggleMenu(false);
  }

  private setBreakpoints(breakpoints: Breakpoint[]) {
    if (this.forceBreakpoint) {
      applicationLayoutService.setBreakpoints([this.forceBreakpoint]);
    } else {
      applicationLayoutService.setBreakpoints(breakpoints);
    }
  }

  componentWillLoad() {
    this.setBreakpoints(this.breakpoints);

    this.contextProvider = useContextProvider(
      this.hostElement,
      ApplicationLayoutContext,
      this.createLayoutContext()
    );

    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      this.breakpoint = this.forceBreakpoint || mode;
    });
    this.breakpoint =
      this.forceBreakpoint || applicationLayoutService.breakpoint;

    this.forceLayoutChange(this.forceBreakpoint);

    this.menuPinned = menuController.isPinned;
    this.pinnedDisposable = menuController.pinnedChange.on((pinned) => {
      this.menuPinned = pinned;
    });
  }

  disconnectedCallback() {
    this.modeDisposable?.dispose();
    this.pinnedDisposable?.dispose();
  }

  @Watch('theme')
  changeTheme() {
    if (!this.theme) {
      return;
    }
    themeSwitcher.setTheme(this.theme);
  }

  @Watch('colorSchema')
  changeColorSchema() {
    if (!this.colorSchema) {
      return;
    }
    themeSwitcher.setColorSchema(this.colorSchema);
  }

  @Watch('appSwitchConfig')
  @Watch('applicationSidebarSlotted')
  onApplicationSidebarChange() {
    this.emitLayoutContext();
  }

  private createLayoutContext() {
    return {
      hideHeader: false,
      sidebar: this.applicationSidebarSlotted,
      appSwitchConfig: this.appSwitchConfig,
      forceBreakpoint: this.forceBreakpoint,
    };
  }

  private emitLayoutContext() {
    if (!this.contextProvider) {
      console.error('Context provider not available');
      return;
    }
    this.contextProvider.emit(this.createLayoutContext());
  }

  render() {
    return (
      <Host
        data-role=""
        class={{
          [`breakpoint-${this.breakpoint}`]: true,
          'menu-pinned': this.menuPinned,
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

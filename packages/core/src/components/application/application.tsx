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
import { hasSlottedContent, hasSlottedElements } from '../utils/shadow-dom';
import { themeSwitcher, ThemeVariant } from '../utils/theme-switcher';
import { Disposable } from '../utils/typed-event';

const DEFAULT_SKIP_LINK_MAIN_TARGET_ID = 'ix-application-main-content';
const DEFAULT_SKIP_LINK_FOOTER_TARGET_ID = 'ix-application-footer';

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

  /**
   * Disable the built-in links for bypassing repeated application content.
   * Only disable them when an equivalent bypass mechanism is provided
   * elsewhere.
   *
   * @since 6.0.0
   */
  @Prop() disableSkipLinks = false;

  /**
   * Localized text for the link that bypasses repeated application content and
   * focuses the main region.
   *
   * @since 6.0.0
   */
  @Prop({ attribute: 'i18n-skip-to-main' }) i18nSkipToMain =
    'Skip to main content';

  /**
   * Localized text for the link that focuses the application footer.
   *
   * @since 6.0.0
   */
  @Prop({ attribute: 'i18n-skip-to-footer' }) i18nSkipToFooter =
    'Skip to footer';

  /**
   * Element, or ID of an element, to focus when the Main skip link is
   * activated. The element must be focusable, e.g. by setting `tabindex="-1"`.
   * Falls back to the internal main region when the element cannot be focused.
   *
   * @since 6.0.0
   */
  @Prop() skipLinkMainTarget?: string | HTMLElement;

  @State() breakpoint: Breakpoint = 'lg';
  @State() applicationSidebarSlotted = false;
  @State() footerSlotted = false;

  private contextProvider?: ContextProvider<typeof ApplicationLayoutContext>;
  private mainElement?: HTMLElement;
  private footerElement?: HTMLElement;

  get menu(): HTMLIxMenuElement | null {
    return this.hostElement.querySelector('ix-menu');
  }

  get applicationSidebarSlot() {
    return this.hostElement.shadowRoot!.querySelector(
      '.application-sidebar slot'
    ) as HTMLSlotElement;
  }

  get footerSlot() {
    return this.hostElement.shadowRoot!.querySelector(
      'slot[name="bottom"]'
    ) as HTMLSlotElement;
  }

  private modeDisposable?: Disposable;

  private onContentClick() {
    if (menuController.isPinned) {
      return;
    }
    this.menu?.toggleMenu(false);
  }

  private onContentKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.onContentClick();
    }
  }

  private setBreakpoints(breakpoints: Breakpoint[]) {
    if (this.forceBreakpoint) {
      applicationLayoutService.setBreakpoints([this.forceBreakpoint]);
    } else {
      applicationLayoutService.setBreakpoints(breakpoints);
    }
  }

  private get skipLinkMainHref() {
    const target = this.skipLinkMainTarget;
    const targetId =
      typeof target === 'string' && target
        ? target
        : DEFAULT_SKIP_LINK_MAIN_TARGET_ID;
    return `#${targetId}`;
  }

  private resolveSkipLinkMainTarget() {
    const target = this.skipLinkMainTarget;
    if (typeof target !== 'string') {
      return target;
    }

    const root = this.hostElement.getRootNode() as Document | ShadowRoot;
    return root.getElementById(target);
  }

  private focusMainContent() {
    this.mainElement?.focus({ preventScroll: true });
    this.mainElement?.scrollTo({
      behavior: 'instant',
      top: 0,
      left: 0,
    });
  }

  private onSkipLinkMainClick(event: MouseEvent) {
    event.preventDefault();

    const target = this.resolveSkipLinkMainTarget();
    target?.focus();

    if (!target?.matches(':focus')) {
      this.focusMainContent();
    }
  }

  private onSkipLinkFooterClick(event: MouseEvent) {
    event.preventDefault();
    this.footerElement?.focus({ preventScroll: true });
  }

  private updateFooterSlotted() {
    this.footerSlotted = hasSlottedContent(this.footerSlot);
  }

  componentWillLoad() {
    this.setBreakpoints(this.breakpoints);

    this.contextProvider = useContextProvider(
      this.hostElement,
      ApplicationLayoutContext,
      {
        hideHeader: false,
        sidebar: this.applicationSidebarSlotted,
        appSwitchConfig: this.appSwitchConfig,
      }
    );

    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      this.breakpoint = this.forceBreakpoint || mode;
    });
    this.breakpoint =
      this.forceBreakpoint || applicationLayoutService.breakpoint;

    this.forceLayoutChange(this.forceBreakpoint);
  }

  componentDidLoad() {
    this.updateFooterSlotted();
  }

  disconnectedCallback() {
    this.modeDisposable?.dispose();
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
    if (!this.contextProvider) {
      console.error('Context provider not available');
      return;
    }
    this.contextProvider.emit({
      hideHeader: false,
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
        {!this.disableSkipLinks && (
          <ul class="skip-links" role="list">
            <li>
              <a
                class="skip-link"
                href={this.skipLinkMainHref}
                onClick={(event) => this.onSkipLinkMainClick(event)}
              >
                {this.i18nSkipToMain}
              </a>
            </li>
            {this.footerSlotted && (
              <li>
                <a
                  class="skip-link"
                  href={`#${DEFAULT_SKIP_LINK_FOOTER_TARGET_ID}`}
                  onClick={(event) => this.onSkipLinkFooterClick(event)}
                >
                  {this.i18nSkipToFooter}
                </a>
              </li>
            )}
          </ul>
        )}
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
            <main
              class="content"
              id={DEFAULT_SKIP_LINK_MAIN_TARGET_ID}
              tabIndex={-1}
              ref={(element) => (this.mainElement = element)}
              onClick={() => this.onContentClick()}
              onKeyDown={(event) => this.onContentKeyDown(event)}
            >
              <slot></slot>
            </main>
            <footer
              class="footer"
              hidden={!this.footerSlotted}
              id={DEFAULT_SKIP_LINK_FOOTER_TARGET_ID}
              role="contentinfo"
              tabIndex={-1}
              ref={(element) => (this.footerElement = element)}
            >
              <slot
                name="bottom"
                onSlotchange={() => this.updateFooterSlotted()}
              ></slot>
            </footer>
          </div>
        </div>
      </Host>
    );
  }
}

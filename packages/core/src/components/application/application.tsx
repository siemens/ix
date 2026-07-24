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

const DEFAULT_SKIP_LINK_LABEL = 'Skip to main content';
const DEFAULT_SKIP_LINK_TARGET_ID = 'ix-application-main-content';

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
   * Disable the built-in link for bypassing repeated application content.
   * Only disable it when an equivalent bypass mechanism is provided elsewhere.
   *
   * @since 5.2.0
   */
  @Prop() disableSkipLink = false;

  /**
   * Localized text for the link that bypasses repeated application content.
   *
   * @since 5.2.0
   */
  @Prop({ attribute: 'i18n-skip-to-content' }) i18nSkipToContent =
    DEFAULT_SKIP_LINK_LABEL;

  /**
   * ID of a light-DOM descendant to focus when the skip link is activated.
   * Falls back to the internal main region when the target cannot be used.
   *
   * @since 5.2.0
   */
  @Prop() skipLinkTargetId?: string;

  @State() breakpoint: Breakpoint = 'lg';
  @State() applicationSidebarSlotted = false;

  private contextProvider?: ContextProvider<typeof ApplicationLayoutContext>;
  private mainElement?: HTMLElement;
  private temporaryFocusTargetRestore?: () => void;

  get menu(): HTMLIxMenuElement | null {
    return this.hostElement.querySelector('ix-menu');
  }

  get applicationSidebarSlot() {
    return this.hostElement.shadowRoot!.querySelector(
      '.application-sidebar slot'
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

  private get skipLinkLabel() {
    return this.i18nSkipToContent?.trim() || DEFAULT_SKIP_LINK_LABEL;
  }

  private get skipLinkHref() {
    const targetId = this.skipLinkTargetId?.trim();
    return `#${targetId || DEFAULT_SKIP_LINK_TARGET_ID}`;
  }

  private warn(message: string) {
    console.warn(`ix-application: ${message}`);
  }

  private validateSkipLinkLabel(label: string | undefined) {
    if (!label?.trim()) {
      this.warn(
        `i18nSkipToContent must not be empty. Using "${DEFAULT_SKIP_LINK_LABEL}" instead.`
      );
    }
  }

  @Watch('i18nSkipToContent')
  onI18nSkipToContentChange(label: string | undefined) {
    this.validateSkipLinkLabel(label);
  }

  private isOwnedLightDomDescendant(element: HTMLElement) {
    return element.closest('ix-application') === this.hostElement;
  }

  private isUsableSkipLinkTarget(element: HTMLElement) {
    if (
      element.matches(':disabled') ||
      element.closest('[hidden], [inert], [aria-hidden="true"]')
    ) {
      return false;
    }

    const { display, visibility } = getComputedStyle(element);
    return (
      display !== 'none' &&
      visibility !== 'hidden' &&
      element.getClientRects().length > 0
    );
  }

  private findCustomSkipLinkTarget(targetId: string) {
    const matches = Array.from(
      this.hostElement.querySelectorAll(`[id="${CSS.escape(targetId)}"]`)
    ).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement &&
        this.isOwnedLightDomDescendant(element)
    );

    if (matches.length !== 1 || !this.isUsableSkipLinkTarget(matches[0])) {
      this.warn(
        `skipLinkTargetId "${targetId}" must identify one usable descendant. Falling back to the main content.`
      );
      return;
    }

    return matches[0];
  }

  private restoreTemporaryTargetFocusability = () => {
    this.temporaryFocusTargetRestore?.();
  };

  private focusCustomSkipLinkTarget(target: HTMLElement) {
    this.restoreTemporaryTargetFocusability();

    if (target.tabIndex < 0 && !target.hasAttribute('tabindex')) {
      target.setAttribute('tabindex', '-1');
      const restore = () => {
        target.removeEventListener('blur', restore);
        if (target.getAttribute('tabindex') === '-1') {
          target.removeAttribute('tabindex');
        }
        if (this.temporaryFocusTargetRestore === restore) {
          this.temporaryFocusTargetRestore = undefined;
        }
      };
      this.temporaryFocusTargetRestore = restore;
      target.addEventListener('blur', restore, { once: true });
    }

    try {
      target.focus({ preventScroll: true });
    } catch {
      this.restoreTemporaryTargetFocusability();
      return false;
    }

    if (target.ownerDocument.activeElement !== target) {
      this.restoreTemporaryTargetFocusability();
      return false;
    }

    target.scrollIntoView({
      behavior: 'instant',
      block: 'start',
      inline: 'nearest',
    });
    return true;
  }

  private focusMainContent() {
    this.mainElement?.focus({ preventScroll: true });
    this.mainElement?.scrollTo({
      behavior: 'instant',
      top: 0,
      left: 0,
    });
  }

  private onSkipLinkClick(event: MouseEvent) {
    event.preventDefault();

    const targetId = this.skipLinkTargetId?.trim();
    if (!targetId) {
      this.focusMainContent();
      return;
    }

    const target = this.findCustomSkipLinkTarget(targetId);
    if (!target) {
      this.focusMainContent();
      return;
    }

    if (!this.focusCustomSkipLinkTarget(target)) {
      this.warn(
        `skipLinkTargetId "${targetId}" does not identify a focusable descendant. Falling back to the main content.`
      );
      this.focusMainContent();
    }
  }

  componentWillLoad() {
    this.validateSkipLinkLabel(this.i18nSkipToContent);
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

  disconnectedCallback() {
    this.modeDisposable?.dispose();
    this.restoreTemporaryTargetFocusability();
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
        {!this.disableSkipLink && (
          <a
            class="skip-link"
            href={this.skipLinkHref}
            onClick={(event) => this.onSkipLinkClick(event)}
          >
            {this.skipLinkLabel}
          </a>
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
              id={DEFAULT_SKIP_LINK_TARGET_ID}
              tabIndex={-1}
              ref={(element) => (this.mainElement = element)}
              onClick={() => this.onContentClick()}
              onKeyDown={(event) => this.onContentKeyDown(event)}
            >
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

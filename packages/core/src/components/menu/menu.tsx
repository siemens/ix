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
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import anime from 'animejs';
import { ApplicationSidebarToggleEvent } from '../application-sidebar/events';
import { ApplicationLayoutContext } from '../utils/application-layout/context';
import { applicationLayoutService } from '../utils/application-layout/service';
import { Breakpoint } from '../utils/breakpoints';
import { ContextType, useContextConsumer } from '../utils/context';
import { menuController } from '../utils/menu-service/menu-service';
import { convertToRemString } from '../utils/rwd.util';
import { themeSwitcher } from '../utils/theme-switcher';

@Component({
  tag: 'ix-menu',
  styleUrl: 'menu.scss',
  shadow: true,
})
export class Menu {
  @Element() hostElement!: HTMLIxMenuElement;

  /**
   * Is settings tab visible
   */
  @Prop({ mutable: true }) showSettings = false;

  /**
   * Is about tab visible
   */
  @Prop({ mutable: true }) showAbout = false;

  /**
   * Show toggle between light and dark variant. Only if the provided theme have implemented both!
   */
  @Prop() enableToggleTheme = false;

  /**
   * Is settings tab is visible
   */
  @Prop() enableSettings = true;

  /**
   * Internal
   */
  @Prop() enableMapExpand = false;

  /**
   * Should only be set if you use ix-menu standalone
   */
  @Prop() applicationName: string;

  /**
   * Should only be set if you use ix-menu standalone
   */
  @Prop() applicationDescription = '';

  /**
   * Maximum number of menu items to show in case enough vertical space is available.
   * Extra menu items will be collapsed to 'show more' menu item.
   */
  @Prop() maxVisibleMenuItems = 9;

  /**
   * Accessibility i18n label for the burger menu of the sidebar
   */
  @Prop() i18nExpandSidebar = 'Expand sidebar';

  /**
   */
  @Prop({ mutable: true, reflect: true }) expand = false;

  /**
   * Menu stays pinned to the left
   */
  @Prop() pinned = false;
  @Watch('pinned')
  pinnedChange(newPinned: boolean) {
    if (this.applicationLayoutContext?.host === 'map-navigation') {
      console.warn('ix-map-navigation does not support pinning of the menu');
      return;
    }
    this.setPinned(this.pinned);
    if (newPinned) {
      applicationLayoutService.disableBreakpointDetection();
      applicationLayoutService.setBreakpoint('lg');
      return;
    }

    applicationLayoutService.enableBreakpointDetection();
  }

  /**
   */
  @Prop() i18nLegal = 'About & legal information';

  /**
   */
  @Prop() i18nSettings = 'Settings';

  /**
   */
  @Prop() i18nToggleTheme = 'Toggle theme';

  /**
   */
  @Prop() i18nExpand = ' Expand';

  /**
   */
  @Prop() i18nCollapse = 'Collapse';

  /**
   * Menu expanded
   */
  @Event() expandChange: EventEmitter<boolean>;

  /**
   * Map Sidebar expanded
   */
  @Event() mapExpandChange: EventEmitter<boolean>;

  @State() showPinned = false;
  @State() mapExpand = true;
  @State() activeTab: HTMLIxMenuItemElement | null;
  @State() breakpoint: Breakpoint = 'lg';
  @State() itemsScrollShadowTop = false;
  @State() itemsScrollShadowBottom = false;
  @State() applicationLayoutContext: ContextType<
    typeof ApplicationLayoutContext
  >;
  private isTransitionDisabled = false;

  // FBC IAM workaround #488
  private readonly isVisible = (elm: HTMLElement) => {
    return (
      elm.style.display !== 'none' &&
      elm.parentElement?.parentElement?.style.display !== 'none'
    );
  };

  get popoverArea() {
    return this.hostElement.shadowRoot!.querySelector('#popover-area');
  }

  get menu() {
    return this.hostElement.shadowRoot!.querySelector('.menu');
  }

  get menuItemsContainer(): HTMLDivElement {
    return this.menu!.querySelector('.tabs')!;
  }

  get overlayContainer() {
    return this.hostElement.shadowRoot.querySelector(
      '.menu-overlay'
    ) as HTMLDivElement;
  }

  get menuItems() {
    return Array.from(
      this.hostElement.querySelectorAll(
        'ix-menu-item:not(.internal-tab):not(.home-tab):not(.bottom-tab):not([slot="bottom"])'
      )
    ).filter(this.isVisible);
  }

  get menuBottomItems() {
    return Array.from(
      this.hostElement.querySelectorAll(
        'ix-menu-item.bottom-tab:not(.internal-tab):not(.home-tab)'
      )
    ).filter(this.isVisible);
  }

  get homeTab() {
    return this.hostElement.querySelector('ix-menu-item.home-tab');
  }

  get moreItemsDropdown(): HTMLElement {
    return this.hostElement.shadowRoot!.querySelector(
      '.internal-tab ix-dropdown'
    )!;
  }

  get isMoreItemsDropdownEmpty(): boolean {
    return (
      this.hostElement.shadowRoot!.querySelectorAll(
        '.internal-tab ix-dropdown .appended'
      ).length === 0
    );
  }

  get moreItemsDropdownItems() {
    return this.hostElement.shadowRoot!.querySelectorAll(
      '.internal-tab ix-dropdown ix-menu-item'
    );
  }

  get activeMoreTabContainer() {
    return this.hostElement.shadowRoot!.querySelector('.active-more-tab');
  }

  get activeMoreTab() {
    return this.hostElement.shadowRoot!.querySelector(
      '.active-more-tab ix-menu-item'
    );
  }

  get aboutPopoverContainer(): HTMLElement {
    return this.hostElement.querySelector('.about-news')!;
  }

  get aboutNewsPopover(): HTMLIxMenuAboutNewsElement {
    return (
      document.querySelector('ix-menu-about-news') ??
      this.hostElement.querySelector('ix-menu-about-news')!
    );
  }

  get aboutTab(): HTMLElement {
    return this.hostElement.shadowRoot!.querySelector('#aboutAndLegal');
  }

  get about(): HTMLIxMenuAboutElement | null {
    return this.hostElement.querySelector('ix-menu-about');
  }

  get settings(): HTMLIxMenuSettingsElement | null {
    return this.hostElement.querySelector('ix-menu-settings');
  }

  get isSettingsEmpty(): boolean {
    return (
      Array.from(
        this.hostElement.shadowRoot!.querySelectorAll('ix-menu-settings-item')
      ).length === 0
    );
  }

  get tabsContainer() {
    return this.hostElement;
  }

  componentDidLoad() {
    requestAnimationFrame(() => {
      this.handleOverflowIndicator();
    });

    if (this.pinned) {
      this.pinnedChange(this.pinned);
    }
  }

  componentWillLoad() {
    useContextConsumer(
      this.hostElement,
      ApplicationLayoutContext,
      (ctx) => {
        this.applicationLayoutContext = ctx;
        if (ctx.hideHeader === true) {
          this.onBreakpointChange('md');
          return;
        }

        this.onBreakpointChange(applicationLayoutService.breakpoint);
      },
      true
    );

    menuController.register(this.hostElement);
    applicationLayoutService.onChange.on((breakpoint) =>
      this.onBreakpointChange(breakpoint)
    );
    this.onBreakpointChange(applicationLayoutService.breakpoint);
  }

  componentWillRender() {
    this.appendTabs();
  }

  componentDidRender() {
    this.appendFragments();
  }

  private setPinned(pinned: boolean) {
    this.showPinned = pinned;
    menuController.setIsPinned(pinned);
  }

  private onBreakpointChange(mode: Breakpoint) {
    if (!this.applicationLayoutContext && mode === 'sm') {
      return;
    }
    if (this.applicationLayoutContext?.host === 'map-navigation') {
      this.breakpoint = 'md';
      return;
    }
    if (!this.applicationLayoutContext) {
      return;
    }

    if (this.applicationLayoutContext.hideHeader && mode === 'sm') {
      return;
    }

    this.breakpoint = mode;

    if (this.breakpoint === 'lg') {
      this.setPinned(true);
      this.toggleMenu(true);
      return;
    }

    this.setPinned(false);
    this.toggleMenu(false);
  }

  private appendFragments() {
    this.appendAboutNewsPopover();
  }

  private resetActiveTab() {
    this.activeTab = null;
  }

  private appendTabs() {
    this.activeTab = null;
  }

  private getAboutPopoverVerticalPosition() {
    const heightArrow = 12;
    const offsetArrow = 6;
    const rectAbout = this.aboutTab.getBoundingClientRect();
    const offset =
      window.innerHeight -
      (rectAbout.bottom - rectAbout.height / 2 + heightArrow / 2 + offsetArrow);
    return convertToRemString(offset);
  }

  private appendAboutNewsPopover() {
    if (!this.aboutNewsPopover) {
      return;
    }

    this.aboutNewsPopover.style.bottom = this.getAboutPopoverVerticalPosition();

    if (!this.popoverArea?.contains(this.aboutNewsPopover)) {
      const showMore = () => {
        if (this.aboutNewsPopover?.aboutItemLabel && this.about) {
          this.about.activeTabLabel = this.aboutNewsPopover.aboutItemLabel;
          this.toggleAbout(true);
        }
      };

      this.aboutNewsPopover.addEventListener('showMore', showMore.bind(this));
      document.body.appendChild(this.aboutNewsPopover);
    }
  }

  /**
   * Toggle map sidebar expand
   * @param show
   */
  @Method()
  async toggleMapExpand(show?: boolean) {
    if (show !== undefined) {
      this.mapExpand = show;
    } else {
      this.mapExpand = !this.mapExpand;
    }
  }

  /**
   * Toggle menu
   * @param show
   */
  @Method()
  async toggleMenu(show?: boolean) {
    if (show !== undefined) {
      this.expand = show;
    } else {
      this.expand = !this.expand;
    }

    if (this.aboutNewsPopover) {
      this.aboutNewsPopover.expanded = this.expand;
    }

    this.expandChange.emit(this.expand);

    this.isTransitionDisabled = false;
    this.checkTransition();
  }

  /**
   * Disable transition of overlay while menu animation is running.
   */
  private checkTransition() {
    const container = this.overlayContainer;

    if (!container) {
      return;
    }

    if (this.isTransitionDisabled) {
      container.style.transitionProperty = 'left';
    } else {
      container.style.transitionProperty = 'all';
    }
  }

  private isOverlayVisible() {
    return this.showAbout || this.showSettings;
  }

  /**
   * Toggle Settings tabs
   * @param show
   */
  @Method()
  async toggleSettings(show: boolean) {
    if (!this.settings) {
      return;
    }

    if (!this.isOverlayVisible()) {
      this.animateOverlayFadeIn();
    }

    if (show) {
      this.resetOverlay();
      this.showSettings = show;
      this.settings.show = this.showSettings;
    } else {
      this.onOverlayClose();
    }
  }

  /**
   * Toggle About tabs
   * @param show
   */
  @Method()
  async toggleAbout(show: boolean) {
    if (!this.about) {
      return;
    }

    if (!this.isOverlayVisible()) {
      this.animateOverlayFadeIn();
    }

    if (show) {
      this.resetOverlay();
      this.showAbout = show;
      this.about.show = this.showAbout;
    } else {
      this.onOverlayClose();
    }
  }

  private resetOverlay() {
    this.showSettings = false;
    this.showAbout = false;

    if (this.settings) {
      this.settings.show = false;
    }

    if (this.about) {
      this.about.show = false;
    }
  }

  private getCollapseText() {
    return this.mapExpand ? this.i18nCollapse : this.i18nExpand;
  }

  private getCollapseIcon() {
    return this.mapExpand ? 'navigation-left' : 'navigation-right';
  }

  private isMenuItemClicked(event: Event) {
    if (event.target instanceof HTMLElement) {
      return event.target.tagName === 'IX-MENU-ITEM';
    }

    return false;
  }

  @Listen('resize', { target: 'window' })
  private handleOverflowIndicator() {
    const { clientHeight, scrollTop, scrollHeight } = this.menuItemsContainer;
    this.itemsScrollShadowTop = scrollTop > 0;
    this.itemsScrollShadowBottom =
      Math.round(scrollTop + clientHeight) < scrollHeight;
  }

  @Listen('close')
  onOverlayClose() {
    this.animateOverlayFadeOut(() => {
      this.resetOverlay();
    });
  }

  private animateOverlayFadeIn() {
    requestAnimationFrame(() => {
      anime({
        targets: this.overlayContainer,
        duration: 300,
        backdropFilter: [0, 'blur(1rem)'],
        translateX: ['-4rem', 0],
        opacity: [0, 1],
        easing: 'easeInSine',
        begin: () => {
          if (this.showPinned) {
            return;
          }

          this.toggleMenu(false);
        },
      });
    });
  }

  private animateOverlayFadeOut(onComplete: Function) {
    requestAnimationFrame(() => {
      anime({
        targets: this.overlayContainer,
        duration: 300,
        backdropFilter: ['blur(1rem)', 0],
        translateX: [0, '-4rem'],
        opacity: [1, 0],
        easing: 'easeInSine',
        complete: () => onComplete(),
      });
    });
  }

  private onMenuItemsClick(event: Event) {
    if (this.isMenuItemClicked(event)) {
      if (!this.showPinned) {
        this.toggleMenu(false);
      }
      this.onOverlayClose();
    }
  }

  private isHiddenFromViewport() {
    return this.breakpoint === 'sm' && this.expand === false;
  }

  private sidebarToggle() {
    this.mapExpandChange.emit(this.mapExpand);

    this.hostElement.dispatchEvent(
      new ApplicationSidebarToggleEvent(this.mapExpand)
    );
  }

  render() {
    return (
      <Host
        class={{
          expanded: this.expand,
          [`breakpoint-${this.breakpoint}`]: true,
        }}
        slot="menu"
      >
        <aside
          class={{
            menu: true,
            expanded: this.expand,
          }}
          onClick={() => {
            this.resetActiveTab();
          }}
        >
          <ix-burger-menu
            onClick={async () => this.toggleMenu()}
            expanded={this.expand}
            ixAriaLabel={this.i18nExpandSidebar}
            pinned={this.showPinned}
            class={{
              'burger-menu': true,
            }}
          ></ix-burger-menu>
          <div class="menu-avatar">
            <slot name="ix-menu-avatar"></slot>
          </div>

          <div
            id="menu-tabs"
            style={{
              display: 'contents',
            }}
            onClick={(e) => this.onMenuItemsClick(e)}
          >
            <div class="tabs-top">
              <slot name="home"></slot>
            </div>
            <div class="tabs-shadow-container">
              <div
                class={{
                  'tabs--shadow': true,
                  'tabs--shadow-top': true,
                  'tabs--shadow--show': this.itemsScrollShadowTop,
                }}
              ></div>
              <div class="tabs" onScroll={() => this.handleOverflowIndicator()}>
                {this.breakpoint !== 'sm' || !this.isHiddenFromViewport() ? (
                  <slot></slot>
                ) : null}
              </div>
              <div
                class={{
                  'tabs--shadow': true,
                  'tabs--shadow-bottom': true,
                  'tabs--shadow--show': this.itemsScrollShadowBottom,
                }}
              ></div>
            </div>
          </div>
          <div class="bottom-tab-divider"></div>
          {this.settings ? (
            <ix-menu-item
              disabled={this.isHiddenFromViewport()}
              id="settings"
              class={{
                'internal-tab': true,
                'bottom-tab': true,
                active: this.showSettings,
              }}
              icon={'cogwheel'}
              onClick={async () => this.toggleSettings(!this.showSettings)}
            >
              {this.i18nSettings}
            </ix-menu-item>
          ) : null}
          <slot name="bottom"></slot>
          <div id="popover-area"></div>
          {this.about ? (
            <ix-menu-item
              disabled={this.isHiddenFromViewport()}
              id="aboutAndLegal"
              class={{
                'internal-tab': true,
                'bottom-tab': true,
                active: this.showAbout,
              }}
              icon={'info'}
              onClick={async () => this.toggleAbout(!this.showAbout)}
            >
              {this.i18nLegal}
            </ix-menu-item>
          ) : null}
          {this.enableToggleTheme ? (
            <ix-menu-item
              disabled={this.isHiddenFromViewport()}
              id="toggleTheme"
              onClick={() => themeSwitcher.toggleMode()}
              class="internal-tab bottom-tab"
              icon={'bulb'}
            >
              {this.i18nToggleTheme}
            </ix-menu-item>
          ) : null}
          {this.enableMapExpand || this.applicationLayoutContext?.sidebar ? (
            <ix-menu-item
              disabled={this.isHiddenFromViewport()}
              id="menu-collapse"
              onClick={() => this.sidebarToggle()}
              class="internal-tab bottom-tab"
              icon={`${this.getCollapseIcon()}`}
            >
              {this.getCollapseText()}
            </ix-menu-item>
          ) : null}
        </aside>
        <div
          class={{
            'menu-overlay': true,
            visible: this.isOverlayVisible(),
            expanded: this.expand,
          }}
          onTransitionEnd={() => {
            this.isTransitionDisabled = true;
            this.checkTransition();
          }}
        >
          <div class={'menu-overlay-container'}>
            {this.showSettings ? <slot name="ix-menu-settings"></slot> : null}
          </div>
          <div class={'menu-overlay-container'}>
            {this.showAbout ? <slot name="ix-menu-about"></slot> : null}
          </div>
        </div>
      </Host>
    );
  }
}

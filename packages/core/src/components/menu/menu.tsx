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
} from '@stencil/core';
import { menuController } from '../utils/menu-service/menu-service';
import { convertToRemString } from '../utils/rwd.util';
import { hostContext, isBasicNavigationLayout } from '../utils/screen/context';
import { Mode } from '../utils/screen/mode';
import { screenMode } from '../utils/screen/service';
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
   * Expand menu
   */
  @Prop({ mutable: true, reflect: true }) expand = false;

  /**
   * Menu expanded
   */
  @Event() expandChange: EventEmitter<boolean>;

  /**
   * Map Sidebar expanded
   */
  @Event() mapExpandChange: EventEmitter<boolean>;

  @State() pinned = false;
  @State() mapExpand = true;
  @State() activeTab: HTMLIxMenuItemElement;
  @State() mode: Mode = 'large';
  @State() itemsScrollShadowTop = false;
  @State() itemsScrollShadowBottom = false;

  // FBC IAM workaround #488
  private readonly isVisible = (elm: HTMLElement) => {
    return (
      elm.style.display !== 'none' &&
      elm.parentElement?.parentElement?.style.display !== 'none'
    );
  };

  get popoverArea() {
    return this.hostElement.shadowRoot.querySelector('#popover-area');
  }

  get menu() {
    return this.hostElement.shadowRoot.querySelector('.menu');
  }

  get menuItemsContainer(): HTMLDivElement {
    return this.menu.querySelector('.tabs');
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
    return this.hostElement.shadowRoot.querySelector(
      '.internal-tab ix-dropdown'
    );
  }

  get isMoreItemsDropdownEmpty(): boolean {
    return (
      this.hostElement.shadowRoot.querySelectorAll(
        '.internal-tab ix-dropdown .appended'
      ).length === 0
    );
  }

  get moreItemsDropdownItems() {
    return this.hostElement.shadowRoot.querySelectorAll(
      '.internal-tab ix-dropdown ix-menu-item'
    );
  }

  get activeMoreTabContainer() {
    return this.hostElement.shadowRoot.querySelector('.active-more-tab');
  }

  get activeMoreTab() {
    return this.hostElement.shadowRoot.querySelector(
      '.active-more-tab ix-menu-item'
    );
  }

  get aboutPopoverContainer(): HTMLElement {
    return this.hostElement.querySelector('.about-news');
  }

  get aboutPopover(): HTMLIxMenuAboutNewsElement {
    return (
      document.querySelector('ix-menu-about-news') ??
      this.hostElement.querySelector('ix-menu-about-news')
    );
  }

  get aboutTab(): HTMLElement {
    return this.hostElement.shadowRoot.querySelector('#aboutAndLegal');
  }

  get about(): HTMLIxMenuAboutElement {
    return this.hostElement.querySelector('ix-menu-about');
  }

  get settings(): HTMLIxMenuSettingsElement {
    return this.hostElement.querySelector('ix-menu-settings');
  }

  get isSettingsEmpty(): boolean {
    return (
      Array.from(
        this.hostElement.shadowRoot.querySelectorAll('ix-menu-settings-item')
      ).length === 0
    );
  }

  get avatarItem(): HTMLIxMenuAvatarElement {
    return this.hostElement.shadowRoot.querySelector('ix-menu-avatar');
  }

  get tabsContainer() {
    return this.hostElement;
  }

  componentDidLoad() {
    requestAnimationFrame(() => {
      this.handleOverflowIndicator();
    });
  }

  componentWillLoad() {
    menuController.register(this.hostElement);
    const layout = hostContext('ix-basic-navigation', this.hostElement);
    if (isBasicNavigationLayout(layout) && layout.hideHeader === false) {
      screenMode.onChange.on((mode) => this.onModeChange(mode));
      this.onModeChange(screenMode.mode);
    }
  }

  componentWillRender() {
    this.appendTabs();
  }

  componentDidRender() {
    this.appendFragments();
  }

  private onModeChange(mode: Mode) {
    this.mode = mode;

    console.log(mode);

    if (this.mode === 'large') {
      this.pinned = true;
      this.toggleMenu(true);
      return;
    }

    this.pinned = false;
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
    if (!this.aboutPopover) {
      return;
    }

    this.aboutPopover.style.bottom = this.getAboutPopoverVerticalPosition();

    if (!this.popoverArea?.contains(this.aboutPopover)) {
      const showMore = () => {
        if (this.aboutPopover?.aboutItemLabel) {
          this.about.activeTabLabel = this.aboutPopover.aboutItemLabel;
          this.toggleAbout(true);
        }
      };

      this.aboutPopover.addEventListener('showMore', showMore.bind(this));
      document.body.appendChild(this.aboutPopover);
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
    if (this.pinned) {
      this.expand = true;
      this.expandChange.emit(this.expand);
      return;
    }

    if (show !== undefined) {
      this.expand = show;
    } else {
      this.expand = !this.expand;
    }

    if (this.aboutPopover) {
      this.aboutPopover.expanded = this.expand;
    }

    this.expandChange.emit(this.expand);
  }

  /**
   * Toggle Settings tabs
   * @param show
   */
  @Method()
  async toggleSettings(show: boolean) {
    this.resetOverlay();
    this.showSettings = show;
    this.settings.show = this.showSettings;
  }

  /**
   * Toggle About tabs
   * @param show
   */
  @Method()
  async toggleAbout(show: boolean) {
    this.resetOverlay();
    this.showAbout = show;
    this.about.show = this.showAbout;
  }

  private resetOverlay() {
    this.showSettings = false;
    this.showAbout = false;

    if (this.settings) {
      this.settings.show = this.showSettings;
    }

    if (this.about) {
      this.about.show = this.showAbout;
    }

    this.toggleMenu(false);
  }

  private getCollapseText() {
    return this.mapExpand ? this.i18nCollapse : this.i18nExpand;
  }

  private getCollapseIcon() {
    return this.mapExpand ? 'double-chevron-left' : 'double-chevron-right';
  }

  private isMenuItemClicked(event: MouseEvent) {
    const path = event.composedPath();
    const menuItems = (path as HTMLElement[])
      .filter((element) => element.id !== 'ix-menu-more-tab')
      .filter((element) => {
        return element.tagName === 'IX-MENU-ITEM';
      });

    return menuItems.some((menu) => this.hostElement.contains(menu));
  }

  @Listen('resize', { target: 'window' })
  private handleOverflowIndicator() {
    const { clientHeight, scrollTop, scrollHeight } = this.menuItemsContainer;
    this.itemsScrollShadowTop = scrollTop > 0;
    this.itemsScrollShadowBottom =
      Math.round(scrollTop + clientHeight) <= scrollHeight &&
      Math.round(scrollTop + clientHeight) !== scrollHeight;
  }

  @Listen('close')
  onOverlayClose(
    event: CustomEvent<{ nativeEvent: MouseEvent; name: string }>
  ) {
    const { name: targetName } = event.detail;

    if (targetName === 'ix-menu-about') {
      this.showAbout = false;
    }

    if (targetName === 'ix-menu-settings') {
      this.showSettings = false;
    }
  }

  render() {
    return (
      <Host
        class={{
          expanded: this.expand,
          [`mode-${this.mode}`]: true,
        }}
        slot="menu"
      >
        <div
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
            onClick={(event) => {
              if (this.isMenuItemClicked(event)) {
                this.resetOverlay();
              }
            }}
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
                <slot></slot>
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
              id="settings"
              class={{
                'internal-tab': true,
                'bottom-tab': true,
                active: this.showSettings,
              }}
              icon="cogwheel"
              onClick={async () => this.toggleSettings(!this.showSettings)}
            >
              {this.i18nSettings}
            </ix-menu-item>
          ) : null}
          <slot name="bottom"></slot>
          <div id="popover-area"></div>
          {this.about ? (
            <ix-menu-item
              id="aboutAndLegal"
              class={{
                'internal-tab': true,
                'bottom-tab': true,
                active: this.showAbout,
              }}
              icon="info"
              onClick={async () => this.toggleAbout(!this.showAbout)}
            >
              {this.i18nLegal}
            </ix-menu-item>
          ) : null}
          {this.enableToggleTheme ? (
            <ix-menu-item
              id="toggleTheme"
              onClick={() => themeSwitcher.toggleMode()}
              class="internal-tab bottom-tab"
              tabIcon="bulb"
            >
              {this.i18nToggleTheme}
            </ix-menu-item>
          ) : null}
          {this.enableMapExpand ? (
            <ix-menu-item
              id="menu-collapse"
              onClick={() => this.mapExpandChange.emit(this.mapExpand)}
              class="internal-tab bottom-tab"
              tabIcon={`${this.getCollapseIcon()}`}
            >
              {this.getCollapseText()}
            </ix-menu-item>
          ) : null}
        </div>
        {this.showSettings || this.showAbout ? (
          <div
            class={{
              'menu-overlay': true,
              expanded: this.expand,
            }}
          >
            {this.showSettings ? <slot name="ix-menu-settings"></slot> : null}
            {this.showAbout ? <slot name="ix-menu-about"></slot> : null}
          </div>
        ) : null}
      </Host>
    );
  }
}

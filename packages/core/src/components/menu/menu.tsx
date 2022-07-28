/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State } from '@stencil/core';
import { Popover } from '../utils/popover.util';
import { convertToRemString } from '../utils/rwd.util';
import { toggleTheme } from '../utils/toggle-theme';

@Component({
  tag: 'cw-menu',
  styleUrl: 'menu.scss',
  scoped: false,
})
export class Menu {
  @Element() hostElement!: HTMLCwMenuElement;

  /**
   * Is settings tab visible
   */
  @Prop({ mutable: true }) showSettings = false;

  /**
   * Is about tab visible
   */
  @Prop({ mutable: true }) showAbout = false;

  /**
   * @deprecated
   * Show toggle theme button
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
   * Should only be set if you use cw-menu standalone
   */
  @Prop() applicationName: string;

  /**
   * Should only be set if you use cw-menu standalone
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
   */
  @Prop() i18nMore = 'More…';

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

  @State() showMoreItems = false;

  @State() visibleMenuItems = 0;

  @State() countMoreNotifications = 0;

  @State() mapExpand = true;

  @State() activeTab: HTMLCwMenuItemElement;

  @State() isMoreTabEmpty = false;

  private readonly domObserver = new MutationObserver(this.onDomChange.bind(this));

  @Listen('resize', { target: 'window' })
  onWindowResize() {
    this.visibleMenuItems = this.getMaxTabCount();
  }

  private handleNodeMutation(node: Node) {
    if (!(node instanceof HTMLElement)) {
      return;
    }

    if (node.matches('.tab')) {
      this.onWindowResize();
    }

    if (node.matches('cw-menu-about') && this.menu.contains(node)) {
      this.appendAbout();
    }

    if (node.matches('cw-menu-settings') && this.menu.contains(node)) {
      this.appendSettings();
    }
  }

  private onDomChange(mutations: MutationRecord[]) {
    mutations.forEach(mutationRecord => {
      mutationRecord.addedNodes.forEach(this.handleNodeMutation.bind(this));
      mutationRecord.removedNodes.forEach(this.handleNodeMutation.bind(this));
    });
  }

  // FBC IAM workaround #488
  private readonly isVisible = (elm: HTMLElement) => {
    return elm.style.display !== 'none' && elm.parentElement?.parentElement?.style.display !== 'none';
  };

  get popoverArea() {
    return this.hostElement.querySelector('#popover-area');
  }

  get overlayContainer() {
    return this.hostElement.querySelector('.menu-overlay');
  }

  get invisibleContainer() {
    return this.hostElement.querySelector('.menu-overlay-invisible');
  }

  get menu() {
    return this.hostElement.querySelector('.menu');
  }

  get menuItems() {
    return Array.from(this.hostElement.querySelectorAll('cw-menu-item:not(.internal-tab):not(.home-tab):not(.bottom-tab)')).filter(this.isVisible);
  }

  get menuBottomItems() {
    return Array.from(this.hostElement.querySelectorAll('cw-menu-item.bottom-tab:not(.internal-tab):not(.home-tab)')).filter(this.isVisible);
  }

  get homeTab() {
    return this.hostElement.querySelector('cw-menu-item.home-tab');
  }

  get moreItemsDropdown(): HTMLElement {
    return this.hostElement.querySelector('.internal-tab cw-dropdown');
  }

  get isMoreItemsDropdownEmpty(): boolean {
    return this.hostElement.querySelectorAll('.internal-tab cw-dropdown .appended').length === 0;
  }

  get moreItemsDropdownItems() {
    return this.hostElement.querySelectorAll('.internal-tab cw-dropdown cw-menu-item');
  }

  get activeMoreTabContainer() {
    return this.hostElement.querySelector('.active-more-tab');
  }

  get activeMoreTab() {
    return this.hostElement.querySelector('.active-more-tab cw-menu-item');
  }

  get aboutPopoverContainer(): HTMLElement {
    return this.hostElement.querySelector('.about-news');
  }

  get aboutPopover(): HTMLCwMenuAboutNewsElement {
    return document.querySelector('cw-menu-about-news');
  }

  get aboutTab(): HTMLElement {
    return this.hostElement.querySelector('#aboutAndLegal');
  }

  get about(): HTMLCwMenuAboutElement {
    return this.hostElement.querySelector('cw-menu-about');
  }

  get settings(): HTMLCwMenuSettingsElement {
    return this.hostElement.querySelector('cw-menu-settings');
  }

  get isSettingsEmpty(): boolean {
    return Array.from(this.hostElement.querySelectorAll('cw-menu-settings-item')).length === 0;
  }

  get avatarItem(): HTMLCwMenuAvatarElement {
    return this.hostElement.querySelector('cw-menu-avatar');
  }

  private popoverListener: Popover;

  private showTab(index: number) {
    return index + 1 <= this.visibleMenuItems;
  }

  componentDidLoad() {
    const anchor = this.hostElement.querySelector('#more-tab');
    this.popoverListener = new Popover(anchor as HTMLElement, this.moreItemsDropdown, () => {
      this.showMoreItems = false;
    });

    this.settings?.addEventListener('close', () => {
      this.showSettings = false;
      this.settings.show = this.showSettings;
    });

    this.settings?.addEventListener('animationend', () => {
      if (!this.showSettings) {
        this.settings.classList.add('d-none');
        this.overlayContainer.classList.add('d-none');
      }
    });

    this.about?.addEventListener('close', () => {
      this.showAbout = false;
      this.about.show = this.showAbout;
    });

    this.about?.addEventListener('animationend', () => {
      if (!this.showAbout) {
        this.about.classList.add('d-none');
        this.overlayContainer.classList.add('d-none');
      }
    });

    this.overlayContainer.classList.add('d-none');

    this.onWindowResize();

    this.domObserver.observe(this.hostElement, {
      attributes: false,
      childList: true,
      subtree: true,
    });
  }

  disconnectedCallback() {
    this.popoverListener?.destroy();
  }

  componentWillRender() {
    this.appendTabs();
  }

  componentDidRender() {
    this.visibleMenuItems = this.getMaxTabCount();
    this.appendFragments();
  }

  private appendFragments() {
    this.appendAvatar();
    this.appendAbout();
    this.appendSettings();
    this.appendAboutNewsPopover();

    // This lead to none infinite-loops and other bugs.
    this.isMoreTabEmpty = this.isMoreItemsDropdownEmpty;

    this.countMoreNotifications = this.getMoreNotificationsCount();
  }

  private resetActiveTab() {
    this.activeTab = null;
  }

  private isMenuItemActive(item: HTMLCwMenuItemElement) {
    return item.active || item.classList.contains('active');
  }

  private appendTabs() {
    this.activeTab = null;

    if (this.homeTab) {
      this.hostElement.querySelector('.tabs-top').appendChild(this.homeTab);
      this.homeTab.addEventListener('click', this.resetOverlay);
    }

    this.menuItems.forEach((item: HTMLCwMenuItemElement, index) => {
      if (this.showTab(index)) {
        item.classList.remove('d-none');
      } else {
        item.classList.add('d-none');

        if (this.isMenuItemActive(item)) {
          this.activeTab = item;
        }
      }

      // TODO: Find better solution to handle home tab
      this.homeTab?.classList.remove('d-none');

      item.addEventListener('click', this.resetOverlay);
    });
  }

  private appendAvatar() {
    const avatar = this.avatarItem;
    if (avatar) {
      avatar.style.marginBottom = '1rem';
      this.hostElement.querySelector('#avatar-tab-placeholder')?.appendChild(avatar);
    }
  }

  private getAboutPopoverVerticalPosition() {
    const heightArrow = 12;
    const offsetArrow = 6;
    const rectAbout = this.aboutTab.getBoundingClientRect();
    const offset = window.innerHeight - (rectAbout.bottom - rectAbout.height / 2 + heightArrow / 2 + offsetArrow);
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

  private appendSettings() {
    if (this.settings) {
      this.overlayContainer.appendChild(this.settings);
    }
  }

  private appendAbout() {
    if (this.about) {
      this.overlayContainer.appendChild(this.about);

      this.about.applicationName = this.applicationName;
      this.about.applicationDescription = this.applicationDescription;
    }
  }

  private getMoreNotificationsCount(): number {
    const moreTabs = this.moreItemsDropdown?.querySelectorAll('.appended');
    let count = 0;
    moreTabs?.forEach(tab => {
      if (tab['notifications']) {
        count += tab['notifications'];
      }
    });

    return count;
  }

  private getAvailableHeight() {
    const heightBurgerMenu = 60;
    const heightHome = 72;
    const heightAvatar = 56;
    const heightBottomTab = 36;

    let availableHeight = this.hostElement.clientHeight;

    availableHeight -= heightBurgerMenu;

    if (this.avatarItem) {
      availableHeight -= heightAvatar;
    }

    if (this.homeTab) {
      availableHeight -= heightHome;
    }

    if (this.showAbout) {
      availableHeight -= heightBottomTab;
    }

    if (this.showSettings) {
      availableHeight -= heightBottomTab;
    }

    if (this.menuBottomItems.length) {
      availableHeight -= this.menuBottomItems.length * heightBottomTab;
    }

    if (this.enableMapExpand) {
      availableHeight -= heightBottomTab;
    }

    // Subtract height of imprint and theme toggle tabs
    availableHeight -= 2 * heightBottomTab;

    // Subtract bottom margin of bottom tabs
    availableHeight -= 16;

    return availableHeight;
  }

  private getMaxTabCount() {
    const heightTab = 48;
    const availableHeight = this.getAvailableHeight();
    const visibleCount = Math.floor(availableHeight / heightTab);
    const menuItemCount = this.menuItems.length;

    if (menuItemCount === 1) {
      return 1;
    }

    if (menuItemCount < this.maxVisibleMenuItems) {
      if (visibleCount > menuItemCount) {
        return menuItemCount;
      }

      return Math.min(visibleCount - 2, menuItemCount);
    }

    if (menuItemCount === this.maxVisibleMenuItems) {
      if (visibleCount < this.maxVisibleMenuItems) {
        return visibleCount - 2;
      }

      if (visibleCount === this.maxVisibleMenuItems) {
        return this.maxVisibleMenuItems - 2;
      }

      return Math.min(visibleCount, this.maxVisibleMenuItems);
    }

    if (visibleCount === this.maxVisibleMenuItems) {
      return this.maxVisibleMenuItems - 2;
    }
    if (visibleCount >= this.maxVisibleMenuItems) {
      return this.maxVisibleMenuItems - 1;
    }

    return Math.min(visibleCount - 2, this.maxVisibleMenuItems);
  }

  private toggleShowMoreDropdown() {
    if (this.moreItemsDropdown.querySelectorAll('.appended').length === 0) {
      return;
    }
    this.popoverListener.open();
    this.showMoreItems = !this.showMoreItems;
  }

  /**
   * Toggle map sidebar expand
   * @param show
   */
  @Method()
  async toggleMapExpand(show?: boolean) {
    this.skipAllOverlayAnimations();

    if (show !== undefined) {
      this.mapExpand = show;
    } else {
      this.mapExpand = !this.mapExpand;
    }
  }

  private skipAllOverlayAnimations() {
    if (this.about) {
      this.skipOverlayAnimationFor(this.about);
    }
    if (this.settings) {
      this.skipOverlayAnimationFor(this.settings);
    }
  }

  private skipOverlayAnimationFor(element: HTMLElement) {
    const animateClass = 'animate__animated';

    element?.classList.remove(animateClass);

    setTimeout(() => {
      element?.classList.add(animateClass);
    }, 300);
  }

  /**
   * Toggle menu
   * @param show
   */
  @Method()
  async toggleMenu(show?: boolean) {
    this.skipAllOverlayAnimations();

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
    if (this.showAbout) {
      this.skipAllOverlayAnimations();
    } else {
      this.skipOverlayAnimationFor(this.about);
    }

    this.about.classList.add('d-none');

    this.resetOverlay();
    this.showSettings = show;
    this.settings.show = this.showSettings;
    this.settings.classList.remove('d-none');
    this.overlayContainer.classList.remove('d-none');
  }

  /**
   * Toggle About tabs
   * @param show
   */
  @Method()
  async toggleAbout(show: boolean) {
    if (this.showSettings) {
      this.skipAllOverlayAnimations();
    } else {
      this.skipOverlayAnimationFor(this.settings);
    }

    this.settings.classList.add('d-none');

    this.resetOverlay();
    this.showAbout = show;
    this.about.show = this.showAbout;
    this.about.classList.remove('d-none');
    this.overlayContainer.classList.remove('d-none');
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
  }

  private showMoreButton() {
    const menuItemCount = this.menuItems.length;

    if (menuItemCount === 1) {
      return false;
    }

    if (menuItemCount < this.maxVisibleMenuItems) {
      return this.visibleMenuItems < menuItemCount;
    }

    if (menuItemCount > this.maxVisibleMenuItems) {
      return this.visibleMenuItems < this.maxVisibleMenuItems;
    }

    return this.visibleMenuItems <= this.maxVisibleMenuItems - 2;
  }

  private getCollapseText() {
    return this.mapExpand ? this.i18nCollapse : this.i18nExpand;
  }

  private getCollapseIcon() {
    return this.mapExpand ? 'double-chevron-left' : 'double-chevron-right';
  }

  render() {
    return (
      <Host
        class={{
          expanded: this.expand,
        }}
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
          <div
            onClick={async () => this.toggleMenu()}
            class={{
              'burger-menu-button': true,
              'expanded': this.expand,
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
              <rect class="line line-1" x="5" y="9.5" width="22" height="2"></rect>
              <rect class="line line-2" x="5" y="15.5" width="22" height="2"></rect>
              <rect class="line line-3" x="5" y="21.5" width="22" height="2"></rect>
            </svg>
          </div>
          <div id="avatar-tab-placeholder"></div>
          <div class="tabs-top"></div>
          <slot></slot>
          <div class="active-more-tab">
            {this.activeTab ? (
              <cw-menu-item class="internal-tab" active={true} tabIcon={this.activeTab.tabIcon}>
                {this.activeTab.innerText}
              </cw-menu-item>
            ) : null}
          </div>
          <cw-menu-item
            id="more-tab"
            tabIcon="more-menu"
            class={{
              'internal-tab': true,
            }}
            style={{
              display: this.showMoreButton() ? 'block' : 'none',
            }}
            title="Show more"
            notifications={this.countMoreNotifications}
            onClick={() => this.toggleShowMoreDropdown()}
          >
            {this.i18nMore}
            <cw-dropdown show={this.showMoreItems}>
              {this.menuItems
                .filter((elm: HTMLCwMenuItemElement, index) => !this.showTab(index) && !this.isMenuItemActive(elm) && this.isVisible(elm))
                .map((e: HTMLCwMenuItemElement) => {
                  return (
                    <cw-menu-item tabIcon={e.tabIcon} active={e.active} class="internal-tab appended" onClick={() => e.dispatchEvent(new CustomEvent('click'))}>
                      {e.innerText}
                    </cw-menu-item>
                  );
                })}
            </cw-dropdown>
          </cw-menu-item>
          <div class="bottom-tab-divider"></div>
          {this.enableSettings && !this.isSettingsEmpty ? (
            <cw-menu-item
              class={{
                'internal-tab': true,
                'bottom-tab': true,
                'active': this.showSettings,
              }}
              tabIcon="cogwheel"
              onClick={async () => this.toggleSettings(!this.showSettings)}
            >
              {this.i18nSettings}
            </cw-menu-item>
          ) : null}
          <slot name="bottom"></slot>
          <div id="popover-area"></div>
          {this.about ? (
            <cw-menu-item
              id="aboutAndLegal"
              class={{
                'internal-tab': true,
                'bottom-tab': true,
                'active': this.showAbout,
              }}
              tabIcon="info"
              onClick={async () => this.toggleAbout(!this.showAbout)}
            >
              {this.i18nLegal}
            </cw-menu-item>
          ) : null}
          {this.enableToggleTheme ? (
            <cw-menu-item id="toggleTheme" onClick={() => toggleTheme()} class="internal-tab bottom-tab" tabIcon="bulb">
              {this.i18nToggleTheme}
            </cw-menu-item>
          ) : null}
          {this.enableMapExpand ? (
            <cw-menu-item id="menu-collapse" onClick={() => this.mapExpandChange.emit(this.mapExpand)} class="internal-tab bottom-tab" tabIcon={`${this.getCollapseIcon()}`}>
              {this.getCollapseText()}
            </cw-menu-item>
          ) : null}
        </div>
        <div
          class={{
            'menu-overlay': true,
            'expanded': this.expand,
            'd-block': this.showAbout || this.showSettings,
          }}
          style={{
            opacity: this.showAbout || this.showSettings ? '1' : '0',
          }}
        ></div>
        <div class="menu-overlay-invisible"></div>
      </Host>
    );
  }
}

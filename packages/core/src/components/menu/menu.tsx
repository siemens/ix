/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  iconApps,
  iconCogwheel,
  iconInfo,
  iconLightDark,
} from '@siemens/ix-icons/icons';
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
import { animate } from 'animejs';
import Animation from '../utils/animation';
import { showAppSwitch } from '../utils/app-switch';
import { ApplicationLayoutContext } from '../utils/application-layout/context';
import { applicationLayoutService } from '../utils/application-layout/service';
import { Breakpoint } from '../utils/breakpoints';
import { ContextType, useContextConsumer } from '../utils/context';
import { menuController } from '../utils/menu-service/menu-service';
import { CustomCloseEvent } from '../utils/menu-tabs/menu-tabs-utils';
import { requestAnimationFrameNoNgZone } from '../utils/requestAnimationFrame';
import { convertToRemString } from '../utils/rwd.util';
import { themeSwitcher } from '../utils/theme-switcher';
import { Disposable } from '../utils/typed-event';

/**
 * @slot ix-menu-avatar - Avatar displayed at the top of the menu.
 * @slot home - Home menu item.
 * @slot default - Main menu items and categories.
 * @slot bottom - Menu items displayed below the main navigation.
 * @slot ix-menu-settings - Settings content displayed in the menu overlay.
 * @slot ix-menu-about - About content displayed in the menu overlay.
 */
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
   * Should only be set if you use ix-menu standalone
   */
  @Prop() applicationName?: string;

  /**
   * Should only be set if you use ix-menu standalone
   */
  @Prop() applicationDescription = '';

  /**
   *  Toggle the expand state of the menu
   */
  @Prop({ mutable: true, reflect: true }) expand = false;

  @Watch('expand')
  expandChanged(newExpand: boolean, oldExpand: boolean) {
    if (newExpand === oldExpand) {
      return;
    }

    this.toggleMenu(newExpand);
  }

  /**
   *  If set the menu will be expanded initially. This will only take effect at the breakpoint 'lg'.
   */
  @Prop() startExpanded = false;

  /**
   * Menu stays pinned to the left
   */
  @Prop() pinned = false;

  @Watch('pinned')
  pinnedChange(newPinned: boolean) {
    this.setPinned(this.pinned);
    if (newPinned) {
      applicationLayoutService.disableBreakpointDetection();
      applicationLayoutService.setBreakpoint('lg');
      return;
    }

    applicationLayoutService.enableBreakpointDetection();
  }

  /**
   * i18n aria-label for menu. Gets read out by screen readers when first focusing the menu
   *
   * @since 5.1.0
   */
  @Prop({ attribute: 'i18n-aria-label-menu' }) i18nAriaLabelMenu =
    'Application Navigation';

  /**
   * i18n description for menu keyboard navigation hint, read by screen readers when focusing the menu
   *
   * @since 5.1.0
   */
  @Prop({ attribute: 'i18n-navigation-hint' }) i18nNavigationHint =
    'Use Up and Down arrow keys to navigate between menu items';

  /**
   *  i18n label for 'About & legal information' button
   */
  @Prop({ attribute: 'i18n-legal' }) i18nLegal = 'About & legal information';

  /**
   * i18n label for 'Settings' button
   */
  @Prop({ attribute: 'i18n-settings' }) i18nSettings = 'Settings';

  /**
   * i18n label for 'Toggle theme' button
   */
  @Prop({ attribute: 'i18n-toggle-theme' }) i18nToggleTheme = 'Toggle theme';

  /**
   * i18n label for 'Expand' button
   */
  @Prop({ attribute: 'i18n-expand' }) i18nExpand = 'Expand';

  /**
   * i18n label for 'Collapse' button
   */
  @Prop({ attribute: 'i18n-collapse' }) i18nCollapse = 'Collapse';

  /**
   * Menu expanded
   */
  @Event() expandChange!: EventEmitter<boolean>;

  /**
   * Map Sidebar expanded
   */
  @Event() mapExpandChange!: EventEmitter<boolean>;

  /**
   * Event emitted when the app switch button is clicked
   *
   * @since 3.0.0
   */
  @Event() openAppSwitch!: EventEmitter<void>;

  /**
   * Event emitted when the settings button is clicked
   * @since 3.0.0
   */
  @Event() openSettings!: EventEmitter<void>;

  /**
   * Event emitted when the about button is clicked
   * @since 3.0.0
   */
  @Event() openAbout!: EventEmitter<void>;

  @State() showPinned = false;
  @State() mapExpand = true;
  @State() breakpoint: Breakpoint = 'lg';
  @State() itemsScrollShadowTop = false;
  @State() itemsScrollShadowBottom = false;
  @State() hasBottomSlotItems = false;
  @State() applicationLayoutContext?: ContextType<
    typeof ApplicationLayoutContext
  >;
  @State() isDarkMode: boolean = false;
  private isTransitionDisabled = false;
  private lastFocusedMenuItem?:
    | HTMLIxMenuItemElement
    | HTMLIxMenuCategoryElement;
  private themeNameDisposer?: Disposable;

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

  get menuNavigationContainer(): HTMLDivElement {
    return this.menu!.querySelector('.menu-navigation')!;
  }

  get overlayContainer() {
    return this.hostElement.shadowRoot!.querySelector(
      '.menu-overlay'
    ) as HTMLDivElement;
  }

  get menuItems() {
    return Array.from(
      this.hostElement.querySelectorAll(
        'ix-menu-item:not(.internal-tab):not(.home-tab):not(.bottom-tab):not([slot="bottom"])'
      )
    ).filter((elm) => this.isVisible(elm as HTMLElement));
  }

  get menuBottomItems() {
    return Array.from(
      this.hostElement.querySelectorAll(
        'ix-menu-item.bottom-tab:not(.internal-tab):not(.home-tab)'
      )
    ).filter((elm) => this.isVisible(elm as HTMLElement));
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

  get aboutTab(): HTMLElement | null {
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

  get hasUtilityMenuItems(): boolean {
    return !!this.settings || this.enableToggleTheme || !!this.about;
  }

  get shouldFillMenuNavigation(): boolean {
    return this.hasUtilityMenuItems || this.hasBottomSlotItems;
  }

  get tabsContainer() {
    return this.hostElement;
  }

  componentDidLoad() {
    requestAnimationFrame(() => {
      this.suppressAnchorWrapperTabStops();
      this.handleOverflowIndicator();
      const items = this.getAllFocusableItems();
      this.resetRovingTabIndex(items);
    });

    if (this.pinned) {
      this.pinnedChange(this.pinned);
    }
  }

  componentWillLoad() {
    this.updateBottomSlotState();

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

    applicationLayoutService.onChange.on((breakpoint) =>
      this.onBreakpointChange(breakpoint)
    );
    this.onBreakpointChange(applicationLayoutService.breakpoint, true);

    this.updateThemeState();

    this.themeNameDisposer = themeSwitcher.themeChanged.on(() => {
      this.updateThemeState();
    });
  }

  componentDidRender() {
    if (!this.about && this.aboutNewsPopover) {
      this.aboutNewsPopover.show = false;
    }
    this.appendFragments();
  }

  connectedCallback() {
    menuController.register(this.hostElement);
  }

  disconnectedCallback() {
    this.themeNameDisposer?.dispose();
    menuController.unregister(this.hostElement);
  }

  private updateThemeState() {
    this.isDarkMode = themeSwitcher.getMode() === 'dark';
  }

  private setPinned(pinned: boolean) {
    this.showPinned = pinned;
    menuController.setIsPinned(pinned);
  }

  private onBreakpointChange(mode: Breakpoint, initial = false) {
    if (!this.applicationLayoutContext && mode === 'sm') {
      return;
    }

    if (!this.applicationLayoutContext) {
      return;
    }

    if (this.applicationLayoutContext.hideHeader && mode === 'sm') {
      return;
    }

    this.setPinned(mode === 'lg');
    if (initial || mode !== this.breakpoint)
      this.toggleMenu(mode === 'lg' && this.startExpanded);

    this.breakpoint = mode;
  }

  private appendFragments() {
    this.appendAboutNewsPopover();
  }

  private getAboutPopoverVerticalPosition() {
    const heightArrow = 12;
    const offsetArrow = 6;
    const rectAbout = this.aboutTab?.getBoundingClientRect() || {
      bottom: -window.innerHeight,
      height: 0,
    };
    const offset =
      window.innerHeight -
      (rectAbout.bottom - rectAbout.height / 2 + heightArrow / 2 + offsetArrow);
    return convertToRemString(offset);
  }

  private appendAboutNewsPopover() {
    if (!this.aboutNewsPopover || !this.about) {
      return;
    }

    this.aboutNewsPopover.style.bottom = this.getAboutPopoverVerticalPosition();

    if (!this.popoverArea?.contains(this.aboutNewsPopover)) {
      const showMore = () => {
        if (this.aboutNewsPopover?.activeAboutTabKey && this.about) {
          this.about.activeTabKey = this.aboutNewsPopover.activeAboutTabKey;
          this.toggleAbout(true);
        }
      };

      this.aboutNewsPopover.addEventListener('showMore', () => showMore());
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
    const oldExpand = this.expand;

    if (show !== undefined) {
      this.expand = show;
    } else {
      this.expand = !this.expand;
    }

    if (this.aboutNewsPopover) {
      this.aboutNewsPopover.expanded = this.expand;
    }

    const { defaultPrevented } = this.expandChange.emit(this.expand);

    if (defaultPrevented) {
      this.expand = oldExpand;

      if (this.aboutNewsPopover) {
        this.aboutNewsPopover.expanded = oldExpand;
      }

      return;
    }

    this.isTransitionDisabled = false;
    this.checkTransition();

    if (this.breakpoint == 'sm' && this.expand) {
      setTimeout(() => {
        this.handleOverflowIndicator();
      }, 100);
    }
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

    const { defaultPrevented } = this.openSettings.emit();

    if (defaultPrevented) {
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

    const { defaultPrevented } = this.openAbout.emit();

    if (defaultPrevented) {
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
  onOverlayClose(event?: CustomEvent<CustomCloseEvent>) {
    const shouldRestoreFocus = this.shouldRestoreMenuFocus(event);

    this.animateOverlayFadeOut(() => {
      this.resetOverlay();

      if (shouldRestoreFocus) {
        this.focusMenuNavigationContainer();
      }
    });
  }

  private shouldRestoreMenuFocus(event?: CustomEvent<CustomCloseEvent>) {
    return !!event;
  }

  private focusMenuNavigationContainer() {
    const menuNavigation = this.menuNavigationContainer;

    if (!menuNavigation) {
      return;
    }

    requestAnimationFrameNoNgZone(() => {
      menuNavigation.focus();
    });
  }

  private animateOverlayFadeIn() {
    requestAnimationFrame(() => {
      animate(this.overlayContainer!, {
        duration: Animation.mediumTime,
        backdropFilter: [0, 'blur(1rem)'],
        translateX: ['-4rem', 0],
        opacity: [0, 1],
        easing: 'easeInSine',
        onBegin: () => {
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
      animate(this.overlayContainer!, {
        duration: Animation.mediumTime,
        backdropFilter: ['blur(1rem)', 0],
        translateX: [0, '-4rem'],
        opacity: [1, 0],
        easing: 'easeInSine',
        onComplete: () => onComplete(),
      });
    });
  }

  private onMenuItemsClick(event: Event) {
    if (this.isMenuItemClicked(event)) {
      if (
        !this.pinned &&
        (!this.applicationLayoutContext || this.breakpoint !== 'lg')
      ) {
        this.toggleMenu(false);
      }
      this.onOverlayClose();
    }
  }

  private updateBottomSlotState() {
    this.hasBottomSlotItems = Array.from(this.hostElement.children).some(
      (element) => element.getAttribute('slot') === 'bottom'
    );
  }

  private isHiddenFromViewport() {
    return this.breakpoint === 'sm' && this.expand === false;
  }

  private updateRovingTabIndex(
    items: (HTMLIxMenuItemElement | HTMLIxMenuCategoryElement)[],
    activeIndex: number
  ) {
    this.updateMenuItemPositionMetadata(items);

    items.forEach(
      (item: HTMLIxMenuItemElement | HTMLIxMenuCategoryElement, i: number) => {
        item.setTabIndex?.(i === activeIndex ? 0 : -1);
      }
    );
  }

  private resetRovingTabIndex(
    items: (
      | HTMLIxMenuItemElement
      | HTMLIxMenuCategoryElement
    )[] = this.getAllFocusableItems()
  ) {
    this.updateMenuItemPositionMetadata(items);

    items.forEach((item) => {
      item.setTabIndex?.(-1);
    });
  }

  // item positions and menu size has to be set manually because slotted items and utility controls are separated into two groups
  private updateMenuItemPositionMetadata(
    items: (HTMLIxMenuItemElement | HTMLIxMenuCategoryElement)[]
  ) {
    // get all items unfiltered in case any of them changed state and became hidden or disabled
    const allMenuItems = [
      ...Array.from(
        this.hostElement.querySelectorAll<HTMLIxMenuItemElement>('ix-menu-item')
      ),
      ...Array.from(
        this.hostElement.shadowRoot?.querySelectorAll<HTMLIxMenuItemElement>(
          '.menu-utility-controls > ix-menu-item'
        ) ?? []
      ),
    ];

    allMenuItems.forEach((item) => {
      item.removeAttribute('aria-posinset');
      item.removeAttribute('aria-setsize');
    });

    const total = items.length;

    items.forEach((item, index) => {
      item.setAttribute('aria-posinset', String(index + 1));
      item.setAttribute('aria-setsize', String(total));
    });
  }

  private handleMenuFocusIn(event: FocusEvent) {
    const items = this.getAllFocusableItems();
    const path = event.composedPath();
    const activeIndex = items.findIndex((item) => path.includes(item));

    if (activeIndex !== -1) {
      this.lastFocusedMenuItem = items[activeIndex];
      this.updateRovingTabIndex(items, activeIndex);
    } else if (event.target instanceof HTMLElement) {
      this.resetRovingTabIndex(items);
    }
  }

  private getAllFocusableItems(): (
    | HTMLIxMenuItemElement
    | HTMLIxMenuCategoryElement
  )[] {
    const isNavigable = (el: HTMLElement) =>
      !el.hasAttribute('disabled') &&
      !el.hasAttribute('hidden') &&
      this.isVisible(el);

    const lightItems = Array.from(
      this.hostElement.querySelectorAll<
        HTMLIxMenuItemElement | HTMLIxMenuCategoryElement
      >(
        ':scope > ix-menu-item, :scope > ix-menu-category, :scope > a > ix-menu-item, :scope > a > ix-menu-category'
      )
    ).filter(isNavigable);

    const utilityItems = Array.from(
      this.hostElement.shadowRoot?.querySelectorAll<HTMLIxMenuItemElement>(
        '.menu-utility-controls > ix-menu-item'
      ) ?? []
    ).filter(isNavigable);

    return [...lightItems, ...utilityItems];
  }

  private suppressAnchorWrapperTabStops() {
    Array.from(
      this.hostElement.querySelectorAll<HTMLAnchorElement>(':scope > a')
    )
      .filter((a) => a.querySelector('ix-menu-item, ix-menu-category'))
      .forEach((a) => {
        if (a.getAttribute('tabindex') !== '-1') {
          a.setAttribute('tabindex', '-1');
        }
      });
  }

  private isEventFromExpandedCategoryItems(event: KeyboardEvent): boolean {
    return event
      .composedPath()
      .some(
        (el) =>
          el instanceof HTMLElement && el.getAttribute?.('role') === 'menu'
      );
  }

  private handleMenuKeyDown(event: KeyboardEvent) {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      return;
    }

    if (this.isEventFromExpandedCategoryItems(event)) {
      return;
    }

    const items = this.getAllFocusableItems();
    if (items.length === 0) {
      return;
    }

    const path = event.composedPath();
    const currentIndex = items.findIndex((item) => path.includes(item));
    const isMenuNavigationFocused =
      currentIndex === -1 && path.includes(this.menuNavigationContainer);

    if (!isMenuNavigationFocused && currentIndex === -1) {
      return;
    }

    event.preventDefault();

    if (isMenuNavigationFocused) {
      let index = items.indexOf(this.lastFocusedMenuItem!);

      if (event.key === 'Home') {
        index = 0;
      } else if (event.key === 'End') {
        index = items.length - 1;
      } else if (index === -1) {
        index = event.key === 'ArrowDown' ? 0 : items.length - 1;
      }

      this.updateRovingTabIndex(items, index);
      this.lastFocusedMenuItem = items[index];
      items[index].focus();

      return;
    }

    switch (event.key) {
      case 'ArrowDown': {
        const next = (currentIndex + 1) % items.length;
        this.updateRovingTabIndex(items, next);
        this.lastFocusedMenuItem = items[next];
        items[next].focus();
        break;
      }
      case 'ArrowUp': {
        const prev = (currentIndex - 1 + items.length) % items.length;
        this.updateRovingTabIndex(items, prev);
        this.lastFocusedMenuItem = items[prev];
        items[prev].focus();
        break;
      }
      case 'Home':
        this.updateRovingTabIndex(items, 0);
        this.lastFocusedMenuItem = items[0];
        items[0].focus();
        break;
      case 'End':
        this.updateRovingTabIndex(items, items.length - 1);
        this.lastFocusedMenuItem = items.at(-1);
        items.at(-1)?.focus();
        break;
    }
  }

  private async showAppSwitch() {
    const { defaultPrevented } = this.openAppSwitch.emit();

    if (defaultPrevented) {
      return;
    }

    if (this.applicationLayoutContext?.appSwitchConfig) {
      showAppSwitch(this.applicationLayoutContext.appSwitchConfig);
    }
  }

  render() {
    let overlayLabel: string | undefined;
    if (this.showSettings) {
      overlayLabel = this.i18nSettings;
    } else if (this.showAbout) {
      overlayLabel = this.i18nLegal;
    }

    return (
      <Host
        class={{
          expanded: this.expand,
          [`breakpoint-${this.breakpoint}`]: true,
        }}
        slot="menu"
      >
        <nav
          aria-label={this.applicationName}
          class={{
            menu: true,
            expanded: this.expand,
          }}
        >
          <div class="menu-buttons">
            {this.breakpoint !== 'sm' && (
              <ix-menu-expand-icon
                breakpoint={this.breakpoint}
                expanded={this.expand}
                i18n-expand={this.i18nExpand}
                i18n-collapse={this.i18nCollapse}
                pinned={this.pinned}
                class="menu-expand-icon"
                onClick={async () => this.toggleMenu()}
                data-testid="expand-collapse-menu"
              ></ix-menu-expand-icon>
            )}
            {this.breakpoint === 'sm' &&
              this.applicationLayoutContext?.appSwitchConfig && (
                <ix-icon-button
                  onClick={() => {
                    this.showAppSwitch();
                  }}
                  icon={iconApps}
                  variant="subtle-tertiary"
                ></ix-icon-button>
              )}
          </div>

          <div
            role="menubar"
            aria-orientation="vertical"
            aria-label={this.i18nAriaLabelMenu}
            aria-description={this.i18nNavigationHint}
            class={{
              'menu-navigation': true,
              'menu-navigation--fill': this.shouldFillMenuNavigation,
            }}
            tabIndex={0}
            onKeyDown={(e) => this.handleMenuKeyDown(e)}
            onFocusin={(e) => this.handleMenuFocusIn(e)}
            onFocusout={() => this.resetRovingTabIndex()}
          >
            <div
              id="menu-tabs"
              style={{
                display: 'contents',
              }}
              onClick={(e) => this.onMenuItemsClick(e)}
            >
              <div class="tabs-shadow-container">
                <div
                  class={{
                    'tabs--shadow': true,
                    'tabs--shadow-top': true,
                    'tabs--shadow--show': this.itemsScrollShadowTop,
                  }}
                ></div>
                <div
                  class={{
                    tabs: true,
                    'show-scrollbar': this.expand,
                  }}
                  onScroll={() => this.handleOverflowIndicator()}
                >
                  <div class="menu-avatar">
                    <slot name="ix-menu-avatar"></slot>
                  </div>
                  <slot name="home"></slot>
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
            <div onClick={(e) => this.onMenuItemsClick(e)}>
              <slot
                name="bottom"
                onSlotchange={() => this.updateBottomSlotState()}
              ></slot>
            </div>

            <div class="bottom-tab-divider"></div>

            <div class="menu-utility-controls">
              {this.settings ? (
                <ix-menu-item
                  disabled={this.isHiddenFromViewport()}
                  id="settings"
                  class={{
                    'internal-tab': true,
                    'bottom-tab': true,
                    active: this.showSettings,
                  }}
                  icon={iconCogwheel}
                  onClick={async () => this.toggleSettings(!this.showSettings)}
                  label={this.i18nSettings}
                  aria-haspopup="dialog"
                  aria-expanded={this.showSettings.toString()}
                  aria-controls="menu-overlay"
                ></ix-menu-item>
              ) : null}
              {this.enableToggleTheme ? (
                <ix-menu-item
                  disabled={this.isHiddenFromViewport()}
                  id="toggleTheme"
                  onClick={() => themeSwitcher.toggleMode()}
                  class="internal-tab bottom-tab"
                  icon={iconLightDark}
                  label={this.i18nToggleTheme}
                  role="menuitemcheckbox"
                  aria-checked={this.isDarkMode.toString()}
                ></ix-menu-item>
              ) : null}
              {this.about ? (
                <ix-menu-item
                  disabled={this.isHiddenFromViewport()}
                  id="aboutAndLegal"
                  class={{
                    'internal-tab': true,
                    'bottom-tab': true,
                    active: this.showAbout,
                  }}
                  icon={iconInfo}
                  onClick={async () => this.toggleAbout(!this.showAbout)}
                  label={this.i18nLegal}
                  aria-haspopup="dialog"
                  aria-expanded={this.showAbout.toString()}
                  aria-controls="menu-overlay"
                ></ix-menu-item>
              ) : null}
            </div>
          </div>
          <div id="popover-area"></div>
        </nav>
        <section
          id="menu-overlay"
          role="dialog"
          aria-label={overlayLabel}
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
        </section>
      </Host>
    );
  }
}

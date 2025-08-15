/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { iconApps, iconMoreMenu } from '@siemens/ix-icons/icons';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Host,
  Prop,
  readTask,
  State,
  Watch,
} from '@stencil/core';
import { showAppSwitch } from '../utils/app-switch';
import { applicationLayoutService } from '../utils/application-layout';
import {
  ApplicationLayoutContext,
  AppSwitchConfiguration,
} from '../utils/application-layout/context';
import { Breakpoint, getCurrentBreakpoint } from '../utils/breakpoints';
import { ContextType, useContextConsumer } from '../utils/context';
import { menuController } from '../utils/menu-service/menu-service';
import { hasSlottedElements } from '../utils/shadow-dom';
import { Disposable } from '../utils/typed-event';

/**
 * @slot Place items on the right side of the header. If the screen size is small, the items will be shown inside a dropdown.
 * @slot secondary - Place additional items inside the header. If the screen size is small, the items will be shown inside a dropdown.
 * @slot logo - Place a company logo inside the header. As alternative checkout the companyLogo property.
 */
@Component({
  tag: 'ix-application-header',
  styleUrl: 'application-header.scss',
  shadow: true,
})
export class ApplicationHeader {
  @Element() hostElement!: HTMLIxApplicationHeaderElement;

  /**
   * Application name
   */
  @Prop() name?: string;

  /**
   * Define a suffix which will be displayed aside of the application name
   */
  @Prop() nameSuffix?: string;

  /**
   * Company logo will be show on the left side of the application name.
   * It will be hidden on smaller screens.
   */
  @Prop() companyLogo?: string;

  /**
   * Alt text for the company logo
   */
  @Prop() companyLogoAlt?: string;

  /**
   * App icon will be shown on the first element inside the header.
   * It will be hidden on smaller screens.
   */
  @Prop() appIcon?: string;

  /**
   * Alt text for the app icon
   */
  @Prop() appIconAlt?: string;

  /**
   * Hides the bottom border of the header
   */
  @Prop() hideBottomBorder = false;

  /**
   * Controls the visibility of the menu toggle button based on the context of the application header.
   *
   * When the application header is utilized outside the application frame, the menu toggle button is displayed.
   * Conversely, if the header is within the application frame, this property is ineffective.
   */
  @Prop({ mutable: true }) showMenu?: boolean = false;

  /**
   * ARIA label for the menu expand icon button
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelMenuExpandIconButton?: string;

  /**
   * ARIA label for the app switch icon button
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelAppSwitchIconButton?: string;

  /**
   * ARIA label for the more menu icon button
   *
   * @since 3.2.0
   */
  @Prop() ariaLabelMoreMenuIconButton?: string;

  /**
   * Event emitted when the menu toggle button is clicked
   */
  @Event() menuToggle!: EventEmitter<boolean>;

  /**
   * Event emitted when the app switch button is clicked
   *
   * @since 3.0.0
   */
  @Event() openAppSwitch!: EventEmitter<void>;

  @State() breakpoint: Breakpoint = 'lg';
  @State() menuExpanded = false;
  @State() suppressResponsive = false;

  @State() hasOverflowSlottedElements = false;
  @State() applicationLayoutContext?: ContextType<
    typeof ApplicationLayoutContext
  >;
  private menuDisposable?: Disposable;
  private modeDisposable?: Disposable;
  private callbackUpdateAppSwitchModal?: (
    config: AppSwitchConfiguration
  ) => void;

  get contentBackground() {
    return this.hostElement.shadowRoot!.querySelector('.dropdown-content');
  }

  componentWillLoad() {
    this.breakpoint = getCurrentBreakpoint();

    useContextConsumer(
      this.hostElement,
      ApplicationLayoutContext,
      (ctx) => {
        if (ctx?.host === 'map-navigation') {
          this.suppressResponsive = true;
          this.breakpoint = 'md';
          return;
        }

        this.breakpoint = applicationLayoutService.breakpoint;
        this.applicationLayoutContext = ctx;

        this.tryUpdateAppSwitch();
      },
      true
    );

    this.menuDisposable = menuController.expandChange.on((show) => {
      this.menuExpanded = show;
    });

    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      if (this.suppressResponsive) {
        return;
      }

      this.breakpoint = mode;
    });

    this.updateHasDefaultSlotAssignedElements();
  }

  componentDidLoad() {
    this.attachSiemensLogoIfLoaded();
  }

  disconnectedCallback() {
    this.menuDisposable?.dispose();
    this.modeDisposable?.dispose();
  }

  @Watch('applicationLayoutContext')
  watchApplicationLayoutContext() {
    if (this.applicationLayoutContext) {
      this.showMenu = false;
    }
  }
  @Watch('suppressResponsive')
  watchSuppressResponsive() {
    this.breakpoint = 'md';
  }

  private isLogoSlotted() {
    const slotElement = this.hostElement.shadowRoot!.querySelector(
      'slot[name="logo"]'
    ) as HTMLSlotElement;

    return hasSlottedElements(slotElement);
  }

  private attachSiemensLogoIfLoaded() {
    if (this.companyLogo) {
      return;
    }

    if (!this.isLogoSlotted()) {
      const logoElement = document.createElement('ix-siemens-logo');
      logoElement.slot = 'logo';
      this.hostElement.appendChild(logoElement);
    }
  }

  private async onMenuClick() {
    if (this.applicationLayoutContext) {
      menuController.toggle();
    } else {
      this.menuExpanded = !this.menuExpanded;
    }

    this.menuToggle.emit(this.menuExpanded);
  }

  private resolveContextMenuButton() {
    return new Promise<HTMLElement>((resolve) =>
      readTask(() =>
        resolve(
          this.hostElement.shadowRoot!.querySelector(
            '[data-context-menu]'
          ) as HTMLElement
        )
      )
    );
  }

  private tryUpdateAppSwitch() {
    if (
      !this.callbackUpdateAppSwitchModal ||
      !this.applicationLayoutContext?.appSwitchConfig
    ) {
      return;
    }

    this.callbackUpdateAppSwitchModal(
      this.applicationLayoutContext?.appSwitchConfig
    );
  }

  private async showAppSwitch() {
    const { defaultPrevented } = this.openAppSwitch.emit();

    if (defaultPrevented) {
      return;
    }

    if (!this.applicationLayoutContext?.appSwitchConfig) {
      return;
    }

    this.callbackUpdateAppSwitchModal = await showAppSwitch(
      this.applicationLayoutContext?.appSwitchConfig
    );
  }

  private updateHasDefaultSlotAssignedElements() {
    const defaultSlot = this.hostElement.shadowRoot!.querySelector(
      '.content slot:not([name])'
    );

    const secondarySlot = this.hostElement.shadowRoot!.querySelector(
      '.content slot[name="secondary"]'
    );

    this.hasOverflowSlottedElements =
      hasSlottedElements(defaultSlot) || hasSlottedElements(secondarySlot);
  }

  private onContentBgClick(e: MouseEvent) {
    if (e.target === this.contentBackground) {
      e.preventDefault();
    }
  }

  render() {
    const hasApplicationContextAvailable = !!this.applicationLayoutContext;

    const showMenuByApplicationFrame =
      this.breakpoint === 'sm' &&
      this.suppressResponsive === false &&
      hasApplicationContextAvailable;

    const showApplicationSwitch =
      this.applicationLayoutContext?.appSwitchConfig &&
      this.breakpoint !== 'sm' &&
      this.suppressResponsive === false;

    return (
      <Host
        class={{
          [`breakpoint-${this.breakpoint}`]: true,
          'hide-bottom-border': this.hideBottomBorder,
        }}
        slot="application-header"
        role="navigation"
      >
        <div class="left-side">
          {this.appIcon && this.breakpoint !== 'sm' && (
            <div class="app-icon">
              <img src={this.appIcon} alt={this.appIconAlt} />
            </div>
          )}
          {(this.showMenu || showMenuByApplicationFrame) && (
            <ix-menu-expand-icon
              onClick={() => this.onMenuClick()}
              expanded={this.menuExpanded}
              ixAriaLabel={this.ariaLabelMenuExpandIconButton}
            ></ix-menu-expand-icon>
          )}
          {showApplicationSwitch && (
            <ix-icon-button
              onClick={() => this.showAppSwitch()}
              icon={iconApps}
              ghost
              class={{
                'app-switch': true,
                'without-app-icon': !this.appIcon,
              }}
              aria-label={this.ariaLabelAppSwitchIconButton}
            ></ix-icon-button>
          )}

          {this.breakpoint !== 'sm' && (
            <div class="logo">
              {this.companyLogo ? (
                <img src={this.companyLogo} alt={this.companyLogoAlt} />
              ) : (
                <slot name="logo"></slot>
              )}
            </div>
          )}
          <div class="name">
            <ix-typography format="body-lg" class="application-name">
              {this.name}
            </ix-typography>
            {this.nameSuffix && (
              <ix-typography
                format="body-xs"
                textColor="soft"
                class="application-name-suffix"
              >
                {this.nameSuffix}
              </ix-typography>
            )}
          </div>
        </div>
        <div class={{ 'right-side': true, sm: this.breakpoint === 'sm' }}>
          {this.breakpoint !== 'sm' && (
            <div class="secondary">
              <slot name="secondary"></slot>
            </div>
          )}
          <div class="content">
            {this.breakpoint === 'sm' ? (
              <Fragment>
                <ix-icon-button
                  class={{
                    ['context-menu']: true,
                    ['context-menu-visible']: this.hasOverflowSlottedElements,
                  }}
                  data-context-menu
                  data-testid="show-more"
                  icon={iconMoreMenu}
                  ghost
                  aria-label={this.ariaLabelMoreMenuIconButton}
                ></ix-icon-button>
                <ix-dropdown
                  data-overflow-dropdown
                  class="dropdown"
                  discoverAllSubmenus
                  trigger={this.resolveContextMenuButton()}
                >
                  <div
                    class="dropdown-content"
                    onClick={(e) => this.onContentBgClick(e)}
                  >
                    <div class="top">
                      <slot name="secondary"></slot>
                    </div>
                    <div class="divider"></div>
                    <div class="bottom">
                      <slot
                        onSlotchange={() =>
                          this.updateHasDefaultSlotAssignedElements()
                        }
                      ></slot>
                    </div>
                  </div>
                </ix-dropdown>
              </Fragment>
            ) : (
              <slot
                onSlotchange={() => this.updateHasDefaultSlotAssignedElements()}
              ></slot>
            )}
            <slot name="ix-application-header-avatar"></slot>
          </div>
        </div>
      </Host>
    );
  }
}

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
import { Breakpoint } from '../utils/breakpoints';
import { ContextType, useContextConsumer } from '../utils/context';
import { menuController } from '../utils/menu-service/menu-service';
import { hasSlottedElements } from '../utils/shadow-dom';
import { Disposable } from '../utils/typed-event';

/**
 * @slot logo - Location of the logo
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
   * Controls the visibility of the menu toggle button based on the context of the application header.
   *
   * When the application header is utilized outside the application frame, the menu toggle button is displayed.
   * Conversely, if the header is within the application frame, this property is ineffective.
   */
  @Prop({ mutable: true }) showMenu?: boolean = false;

  /**
   * Aria label for the menu expand icon button
   *
   * @since 2.3.0
   */
  @Prop() ariaLabelMenuExpandIconButton?: string;

  /**
   * Aria label for the app switch icon button
   *
   * @since 2.3.0
   */
  @Prop() ariaLabelAppSwitchIconButton?: string;

  /**
   * Aria label for the more menu icon button
   *
   * @since 2.3.0
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

  @State() hasSlottedElements = false;

  private menuDisposable?: Disposable;
  private modeDisposable?: Disposable;
  private callbackUpdateAppSwitchModal?: (
    config: AppSwitchConfiguration
  ) => void;

  @State() applicationLayoutContext?: ContextType<
    typeof ApplicationLayoutContext
  >;

  get contentBackground() {
    return this.hostElement.shadowRoot!.querySelector('.dropdown-content');
  }

  componentWillLoad() {
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

    this.updateIsSlottedContent();
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
    const nodes = slotElement.assignedNodes({
      flatten: true,
    });

    return nodes.length !== 0;
  }

  private attachSiemensLogoIfLoaded() {
    const logoElement = document.createElement('ix-siemens-logo');
    if (!this.isLogoSlotted()) {
      this.hostElement
        .shadowRoot!.querySelector('.logo')
        ?.appendChild(logoElement);
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

  private updateIsSlottedContent() {
    const slotElement =
      this.hostElement.shadowRoot!.querySelector('.content slot');

    this.hasSlottedElements = hasSlottedElements(slotElement);
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
        }}
        slot="application-header"
      >
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
            class="app-switch"
            a11yLabel={this.ariaLabelAppSwitchIconButton}
          ></ix-icon-button>
        )}
        <div class={{ logo: true }}>
          <slot name="logo"></slot>
        </div>
        <ix-typography format="body-lg" class="name">
          {this.name}
        </ix-typography>
        <div class="content">
          {this.breakpoint === 'sm' ? (
            <Fragment>
              <ix-icon-button
                class={{
                  ['context-menu']: true,
                  ['context-menu-visible']: this.hasSlottedElements,
                }}
                data-context-menu
                data-testid="show-more"
                icon={iconMoreMenu}
                ghost
                a11yLabel={this.ariaLabelMoreMenuIconButton}
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
                  <slot
                    onSlotchange={() => this.updateIsSlottedContent()}
                  ></slot>
                </div>
              </ix-dropdown>
            </Fragment>
          ) : (
            <slot onSlotchange={() => this.updateIsSlottedContent()}></slot>
          )}
          <slot name="ix-application-header-avatar"></slot>
        </div>
      </Host>
    );
  }
}

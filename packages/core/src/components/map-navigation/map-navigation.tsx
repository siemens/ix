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
  Method,
  Prop,
  State,
} from '@stencil/core';
import anime from 'animejs';
import { ApplicationLayoutContext } from '../utils/application-layout/context';
import { useContextProvider } from '../utils/context';
import { iconContextMenu } from '@siemens/ix-icons/icons';

@Component({
  tag: 'ix-map-navigation',
  styleUrl: 'map-navigation.scss',
  shadow: true,
})
export class MapNavigation {
  private static readonly defaultTime = 150;
  private static readonly slowTime = 500;

  @Element() hostElement!: HTMLIxMapNavigationElement;

  /**
   * Application name
   */
  @Prop() applicationName?: string;

  /**
   * Navigation title
   */
  @Prop() navigationTitle?: string;

  /**
   * Hide the sidebar context menu button when set to true
   */
  @Prop() hideContextMenu = true;

  /**
   * Aria label for the context menu icon button
   * Will be set for the native HTML button element
   *
   * @since 2.3.0
   */
  @Prop() ariaLabelContextIconButton?: string;

  /**
   * Navigation toggled
   */
  @Event() navigationToggled!: EventEmitter<boolean>;

  /**
   * Context menu clicked
   */
  @Event() contextMenuClick!: EventEmitter<void>;

  @State() isSidebarOpen = true;
  @State() hasContentHeader = false;

  get menu() {
    return this.hostElement.querySelector('ix-menu')!;
  }

  get menuOverlay() {
    return this.hostElement.querySelector('ix-menu-overlay')!;
  }

  get mapNavMenu() {
    return this.hostElement.shadowRoot!.querySelector('.map-nav-menu')!;
  }

  get sidebar() {
    return this.hostElement.shadowRoot!.querySelector('.map-nav-sidebar')!;
  }

  get overlay() {
    return this.hostElement.shadowRoot!.querySelector('#overlay')!;
  }

  componentDidRender() {
    this.appendMenu();
    this.closeOverlay();
  }

  componentWillLoad() {
    useContextProvider(this.hostElement, ApplicationLayoutContext, {
      hideHeader: false,
      host: 'map-navigation',
    });
  }

  private appendMenu() {
    this.menu.addEventListener(
      'mapExpandChange',
      (event: CustomEvent<boolean>) => {
        const state = !event.detail;
        this.toggleSidebar(state);
      }
    );
    this.menu.enableMapExpand = true;
  }

  /**
   * Change the visibility of the sidebar
   *
   * @param show new visibility state
   */
  @Method()
  async toggleSidebar(show?: boolean) {
    if (show !== undefined) {
      this.isSidebarOpen = show;
    } else {
      this.isSidebarOpen = !this.isSidebarOpen;
    }

    if (this.isSidebarOpen) {
      this.openSidebar();
    } else {
      this.closeSidebar();
    }

    this.navigationToggled.emit(this.isSidebarOpen);
    this.menu.toggleMapExpand(this.isSidebarOpen);
  }

  private closeSidebar() {
    anime({
      targets: this.sidebar,
      duration: MapNavigation.defaultTime,
      marginLeft: [0, '-29.75rem'],
      opacity: [1, 0],
      easing: 'easeInSine',
      complete: () => {
        this.sidebar.classList.add('display-none');
      },
    });
  }

  private openSidebar() {
    anime({
      targets: this.sidebar,
      duration: MapNavigation.defaultTime,
      marginLeft: ['-29.75rem', 0],
      opacity: [0, 1],
      easing: 'easeOutSine',
      begin: () => {
        this.sidebar.classList.remove('display-none');
      },
    });
  }

  /**
   * Open a overlay inside content area
   * @deprecated Will be removed in 2.0.0. Use slot based approach
   *
   * @param name
   * @param component
   * @param icon
   * @param color
   */
  @Method()
  async openOverlay(
    name: string,
    component: HTMLElement,
    icon?: string,
    color?: string
  ) {
    anime({
      targets: this.overlay,
      duration: MapNavigation.slowTime,
      backdropFilter: [0, 'blur(1rem)'],
      translateX: ['-4rem', 0],
      opacity: [0, 1],
      easing: 'easeOutSine',
      begin: () => {
        this.overlay.classList.remove('display-none');
      },
    });

    const overlayInstance = document.createElement('ix-map-navigation-overlay');
    overlayInstance.setAttribute('color', color ?? '');
    overlayInstance.setAttribute('name', name);
    overlayInstance.setAttribute('icon', icon ?? '');
    overlayInstance.setAttribute('slot', 'overlay');
    overlayInstance.addEventListener('closeClick', () => this.closeOverlay());
    overlayInstance.appendChild(component);
    this.hostElement.appendChild(overlayInstance);
  }

  /**
   * Close current shown overlay
   * @deprecated Will be removed in 2.0.0. Use slot based approach
   */
  @Method()
  async closeOverlay() {
    anime({
      targets: this.overlay,
      duration: MapNavigation.slowTime,
      backdropFilter: ['blur(1rem)', 0],
      translateX: [0, '-4rem'],
      opacity: [1, 0],
      easing: 'easeInSine',
      complete: () => {
        if (!this.overlay) {
          return;
        }
        this.overlay.firstChild?.remove();
        this.overlay.classList.add('display-none');
      },
    });
  }

  private checkHasContentHeader(e: Event) {
    const nodes = (e.currentTarget as HTMLSlotElement).assignedNodes({
      flatten: true,
    });

    this.hasContentHeader = nodes?.length !== 0;
  }

  render() {
    return (
      <Host>
        <slot name="menu"></slot>
        <div class="map-nav">
          <div class="map-nav-sidebar">
            <div class="map-nav-header">
              <ix-application-header
                name={this.applicationName}
                class="map-nav-header-brand"
              >
                <slot slot="logo" name="logo"></slot>
              </ix-application-header>
            </div>
            <div class="map-nav-sidebar-content">
              <div class="map-nav-sidebar-static-content">
                <div class="map-nav-title">{this.navigationTitle}</div>
                {this.hideContextMenu ? (
                  ''
                ) : (
                  <ix-icon-button
                    icon={iconContextMenu}
                    ghost
                    size="24"
                    variant="secondary"
                    onClick={(_) => this.contextMenuClick.emit()}
                    a11yLabel={this.ariaLabelContextIconButton}
                  ></ix-icon-button>
                )}
              </div>
              <div class="map-nav-sidebar-user-content">
                <slot name="sidebar-content"></slot>
              </div>
            </div>
          </div>
          <div class="content">
            <div
              class={{
                'map-nav-header-content': true,
                'bg-2': true,
                empty: !this.hasContentHeader,
              }}
            >
              <slot
                name="content-header"
                onSlotchange={(e) => this.checkHasContentHeader(e)}
              ></slot>
            </div>
            <main>
              <slot></slot>
              <slot name="overlay"></slot>
            </main>
          </div>
        </div>
      </Host>
    );
  }
}

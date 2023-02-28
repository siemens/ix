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

@Component({
  tag: 'ix-map-navigation',
  styleUrl: 'map-navigation.scss',
  scoped: true,
})
export class MapNavigation {
  private static readonly defaultTime = 150;
  private static readonly slowTime = 500;

  @Element() hostElement: HTMLIxMapNavigationElement;

  /**
   * Application name
   */
  @Prop() applicationName: string;

  /**
   * Navigation title
   */
  @Prop() navigationTitle: string;

  /**
   * Hide the sidebar context menu button when set to true
   */
  @Prop() hideContextMenu = true;

  @State() isSidebarOpen = true;

  /**
   * Navigation toggled
   */
  @Event() navigationToggled: EventEmitter<boolean>;

  /**
   * Context menu clicked
   */
  @Event() contextMenuClick: EventEmitter<void>;

  get menu() {
    return this.hostElement.querySelector('ix-menu');
  }

  get menuOverlay() {
    return this.hostElement.querySelector('ix-menu-overlay');
  }

  get mapNavMenu() {
    return this.hostElement.querySelector('.map-nav-menu');
  }

  get sidebar() {
    return this.hostElement.querySelector('.map-nav-sidebar');
  }

  get overlay() {
    return this.hostElement.querySelector('#overlay');
  }

  componentDidRender() {
    this.appendMenu();
    this.closeOverlay();
  }

  private appendMenu() {
    this.hostElement.querySelector('#menu-placeholder').appendChild(this.menu);
    this.menu.addEventListener(
      'mapExpandChange',
      (event: CustomEvent<boolean>) => {
        const state = !event.detail;
        this.toggleSidebar(state);
        this.menu.toggleMapExpand(state);
      }
    );
    this.menu.enableMapExpand = true;
  }

  private toggleSidebar(show: boolean) {
    if (show !== undefined) {
      this.isSidebarOpen = show;
    } else {
      this.isSidebarOpen = !this.isSidebarOpen;
    }

    if (show) {
      this.openSidebar();
    } else {
      this.closeSidebar();
    }

    this.navigationToggled.emit(this.isSidebarOpen);
  }

  private closeSidebar() {
    anime({
      targets: this.sidebar,
      duration: MapNavigation.defaultTime,
      marginLeft: [0, '-29.75rem'],
      opacity: [1, 0],
      easing: 'easeInSine',
      complete: () => {
        this.sidebar.classList.add('d-none');
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
        this.sidebar.classList.remove('d-none');
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
        this.overlay.classList.remove('d-none');
      },
    });

    const overlayInstance = document.createElement('ix-map-navigation-overlay');
    overlayInstance.setAttribute('color', color);
    overlayInstance.setAttribute('name', name);
    overlayInstance.setAttribute('icon', icon);
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
        this.overlay.classList.add('d-none');
      },
    });
  }

  render() {
    return (
      <Host>
        <div id="menu-placeholder"></div>
        <div class="map-nav">
          <div class="map-nav-sidebar">
            <div class="map-nav-header">
              <ix-application-header
                name={this.applicationName}
                class="map-nav-header-brand"
              >
                <slot name="logo"></slot>
              </ix-application-header>
            </div>
            <div class="map-nav-sidebar-content">
              <div class="map-nav-sidebar-static-content">
                <div class="map-nav-title">{this.navigationTitle}</div>
                {this.hideContextMenu ? (
                  ''
                ) : (
                  <ix-icon-button
                    icon="context-menu"
                    ghost
                    size="24"
                    variant="Secondary"
                    onClick={(_) => this.contextMenuClick.emit()}
                  ></ix-icon-button>
                )}
              </div>
              <div class="map-nav-sidebar-user-content">
                <slot name="sidebar-content"></slot>
              </div>
            </div>
          </div>
          <div class="content">
            <div class="map-nav-header-content bg-2">
              <slot name="content-header"></slot>
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

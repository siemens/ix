import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Host,
    Method,
    Prop,
    State
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

  @State() isAboutOpen: boolean;

  @State() isSettingsOpen: boolean;

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

  get about() {
    return this.hostElement.querySelector('ix-menu-about');
  }

  get aboutItems() {
    return this.hostElement.querySelector('ix-menu-about-item');
  }

  get settings() {
    return this.hostElement.querySelector('ix-menu-settings');
  }

  get settingsItems() {
    return this.hostElement.querySelector('ix-menu-settings-item');
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
    this.appendAbout();
    this.appendSettings();
    // this.openOverlay('Test', document.createElement('ix-breadcrumb'), 'info', 'color-warning');
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

  private appendAbout() {
    const about = this.about || document.createElement('ix-menu-about');
    about.append(this.aboutItems);
    this.menu.appendChild(about);
  }

  private appendSettings() {
    if (this.menu.enableSettings && this.settings) {
      this.menu.appendChild(this.settings);
      this.settings.append(this.settingsItems);
    }
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
    overlayInstance.addEventListener('closeClick', () => this.closeOverlay());
    overlayInstance.appendChild(component);
    this.overlay.appendChild(overlayInstance);
  }

  /**
   * Close current shown overlay
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
              <div class="map-nav-header-brand">
                <div class="map-nav-brand-logo">
                  <slot name="logo"></slot>
                </div>
                <span class="map-nav-brand-title">{this.applicationName}</span>
              </div>
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
            </main>
            <div id="overlay"></div>
          </div>
        </div>
      </Host>
    );
  }
}

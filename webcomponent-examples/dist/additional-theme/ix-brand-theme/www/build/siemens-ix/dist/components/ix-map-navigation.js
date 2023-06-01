import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as anime } from './anime.es.js';
import { d as defineCustomElement$5 } from './application-header.js';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './map-navigation-overlay.js';

const mapNavigationCss = ".sc-ix-map-navigation-h{display:flex;position:relative;width:100%;height:100%}.sc-ix-map-navigation-h .map-nav.sc-ix-map-navigation{display:flex;margin-left:4rem;position:relative;height:100%;flex-grow:1;overflow:hidden}.sc-ix-map-navigation-h .map-nav-sidebar.sc-ix-map-navigation{display:flex;flex-direction:column;align-items:center;width:29.75rem;max-width:29.75rem;min-width:29.75rem;height:100%;left:4rem;background-color:var(--theme-map-navigation--background);-webkit-border-end:0.125rem solid var(--theme-map-navigation-separator--background);border-inline-end:0.125rem solid var(--theme-map-navigation-separator--background);z-index:99}.sc-ix-map-navigation-h .map-nav-sidebar-content.sc-ix-map-navigation{align-items:center;position:relative;overflow:auto;height:100%;width:100%}.sc-ix-map-navigation-h .map-nav-sidebar-content.sc-ix-map-navigation .map-nav-sidebar-static-content.sc-ix-map-navigation{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;justify-content:space-between;margin-top:0.437rem;margin-bottom:0.812rem;margin-left:1rem;margin-right:1rem}.sc-ix-map-navigation-h .map-nav-header.sc-ix-map-navigation{display:flex;position:relative;align-items:center;height:3.5rem;min-height:3.5rem;width:100%}.sc-ix-map-navigation-h .map-nav-header.sc-ix-map-navigation .map-nav-header-brand.sc-ix-map-navigation{background-color:var(--theme-map-navigation-background);display:flex;align-items:center;height:100%;width:100%;padding:0 1rem;--theme-app-header--color:var(--theme-map-navigation-header--color);--theme-app-header-logo--color:var(--theme-map-navigation-logo--color)}.sc-ix-map-navigation-h .map-nav-header.sc-ix-map-navigation .map-nav-header-brand.sc-ix-map-navigation button.sc-ix-map-navigation{margin-left:1rem}.sc-ix-map-navigation-h .map-nav-header-content.sc-ix-map-navigation{display:flex;height:3.5rem;align-items:center;overflow:hidden;padding:0 1rem}.sc-ix-map-navigation-h .map-nav-header-content.sc-ix-map-navigation:empty{height:0}.sc-ix-map-navigation-h .map-nav-title.sc-ix-map-navigation{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;align-items:center;flex-grow:1}.sc-ix-map-navigation-h .content.sc-ix-map-navigation{display:block;flex-grow:1;position:relative;height:100%;overflow:hidden;z-index:calc(var(--theme-z-index-sticky) - 1)}";

const MapNavigation = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.navigationToggled = createEvent(this, "navigationToggled", 7);
    this.contextMenuClick = createEvent(this, "contextMenuClick", 7);
    this.applicationName = undefined;
    this.navigationTitle = undefined;
    this.hideContextMenu = true;
    this.isSidebarOpen = true;
  }
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
  appendMenu() {
    this.hostElement.querySelector('#menu-placeholder').appendChild(this.menu);
    this.menu.addEventListener('mapExpandChange', (event) => {
      const state = !event.detail;
      this.toggleSidebar(state);
      this.menu.toggleMapExpand(state);
    });
    this.menu.enableMapExpand = true;
  }
  toggleSidebar(show) {
    if (show !== undefined) {
      this.isSidebarOpen = show;
    }
    else {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
    if (show) {
      this.openSidebar();
    }
    else {
      this.closeSidebar();
    }
    this.navigationToggled.emit(this.isSidebarOpen);
  }
  closeSidebar() {
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
  openSidebar() {
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
  async openOverlay(name, component, icon, color) {
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
  async closeOverlay() {
    anime({
      targets: this.overlay,
      duration: MapNavigation.slowTime,
      backdropFilter: ['blur(1rem)', 0],
      translateX: [0, '-4rem'],
      opacity: [1, 0],
      easing: 'easeInSine',
      complete: () => {
        var _a;
        if (!this.overlay) {
          return;
        }
        (_a = this.overlay.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
        this.overlay.classList.add('d-none');
      },
    });
  }
  render() {
    return (h(Host, null, h("div", { id: "menu-placeholder" }), h("div", { class: "map-nav" }, h("div", { class: "map-nav-sidebar" }, h("div", { class: "map-nav-header" }, h("ix-application-header", { name: this.applicationName, class: "map-nav-header-brand" }, h("slot", { name: "logo" }))), h("div", { class: "map-nav-sidebar-content" }, h("div", { class: "map-nav-sidebar-static-content" }, h("div", { class: "map-nav-title" }, this.navigationTitle), this.hideContextMenu ? ('') : (h("ix-icon-button", { icon: "context-menu", ghost: true, size: "24", variant: "Secondary", onClick: (_) => this.contextMenuClick.emit() }))), h("div", { class: "map-nav-sidebar-user-content" }, h("slot", { name: "sidebar-content" })))), h("div", { class: "content" }, h("div", { class: "map-nav-header-content bg-2" }, h("slot", { name: "content-header" })), h("main", null, h("slot", null), h("slot", { name: "overlay" }))))));
  }
  get hostElement() { return this; }
  static get style() { return mapNavigationCss; }
}, [6, "ix-map-navigation", {
    "applicationName": [1, "application-name"],
    "navigationTitle": [1, "navigation-title"],
    "hideContextMenu": [4, "hide-context-menu"],
    "isSidebarOpen": [32],
    "openOverlay": [64],
    "closeOverlay": [64]
  }]);
MapNavigation.defaultTime = 150;
MapNavigation.slowTime = 500;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-map-navigation", "ix-application-header", "ix-icon", "ix-icon-button", "ix-map-navigation-overlay"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-map-navigation":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MapNavigation);
      }
      break;
    case "ix-application-header":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-map-navigation-overlay":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxMapNavigation = MapNavigation;
const defineCustomElement = defineCustomElement$1;

export { IxMapNavigation, defineCustomElement };

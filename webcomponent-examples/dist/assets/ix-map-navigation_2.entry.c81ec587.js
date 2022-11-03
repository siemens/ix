import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.c7eba843.js";
import { a as anime } from "./anime.es-185e9087.87a18bcc.js";
const mapNavigationCss = ".sc-ix-map-navigation-h{display:flex;position:relative;width:100%;height:100%}.sc-ix-map-navigation-h .map-nav.sc-ix-map-navigation{display:flex;margin-left:4rem;position:relative;height:100%;flex-grow:1;overflow:hidden}.sc-ix-map-navigation-h .map-nav-sidebar.sc-ix-map-navigation{display:flex;flex-direction:column;align-items:center;width:29.75rem;max-width:29.75rem;min-width:29.75rem;height:100%;left:4rem;background-color:var(--theme-color-1);-webkit-border-end:1px solid var(--theme-map-navigation-separator--background);border-inline-end:1px solid var(--theme-map-navigation-separator--background);z-index:99}.sc-ix-map-navigation-h .map-nav-sidebar-content.sc-ix-map-navigation{align-items:center;position:relative;overflow:auto;height:100%;width:100%}.sc-ix-map-navigation-h .map-nav-sidebar-content.sc-ix-map-navigation .map-nav-sidebar-static-content.sc-ix-map-navigation{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;justify-content:space-between;margin-top:0.437rem;margin-bottom:0.812rem;margin-left:1rem;margin-right:1rem}.sc-ix-map-navigation-h .map-nav-header.sc-ix-map-navigation{display:flex;position:relative;align-items:center;height:3.5rem;min-height:3.5rem;width:100%}.sc-ix-map-navigation-h .map-nav-header.sc-ix-map-navigation .map-nav-header-brand.sc-ix-map-navigation{background-color:var(--theme-map-navigation-background);display:flex;align-items:center;height:100%;width:100%;padding:0 1rem}.sc-ix-map-navigation-h .map-nav-header.sc-ix-map-navigation .map-nav-header-brand.sc-ix-map-navigation button.sc-ix-map-navigation{margin-left:1rem}.sc-ix-map-navigation-h .map-nav-header.sc-ix-map-navigation .map-nav-header-brand.sc-ix-map-navigation .map-nav-brand-logo.sc-ix-map-navigation{min-width:4.75rem;-webkit-margin-end:3.5rem;margin-inline-end:3.5rem}.sc-ix-map-navigation-h .map-nav-header.sc-ix-map-navigation .map-nav-header-brand.sc-ix-map-navigation .map-nav-brand-title.sc-ix-map-navigation{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-map-navigation-header--color);flex-grow:1}.sc-ix-map-navigation-h .map-nav-header-content.sc-ix-map-navigation{display:flex;height:3.5rem;align-items:center;overflow:hidden;padding:0 1rem}.sc-ix-map-navigation-h .map-nav-header-content.sc-ix-map-navigation:empty{height:0}.sc-ix-map-navigation-h .map-nav-title.sc-ix-map-navigation{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;align-items:center;flex-grow:1}.sc-ix-map-navigation-h .content.sc-ix-map-navigation{display:block;flex-grow:1;position:relative;height:100%;overflow:hidden;z-index:calc(var(--theme-z-index-sticky) - 1)}.sc-ix-map-navigation-h #overlay.sc-ix-map-navigation{width:100%;height:100%;position:absolute;top:0;z-index:calc(var(--theme-z-index-sticky) + 1)}";
const MapNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navigationToggled = createEvent(this, "navigationToggled", 7);
    this.contextMenuClick = createEvent(this, "contextMenuClick", 7);
    this.hideContextMenu = true;
    this.isSidebarOpen = true;
  }
  get menu() {
    return this.hostElement.querySelector("ix-menu");
  }
  get menuOverlay() {
    return this.hostElement.querySelector("ix-menu-overlay");
  }
  get about() {
    return this.hostElement.querySelector("ix-menu-about");
  }
  get aboutItems() {
    return this.hostElement.querySelector("ix-menu-about-item");
  }
  get settings() {
    return this.hostElement.querySelector("ix-menu-settings");
  }
  get settingsItems() {
    return this.hostElement.querySelector("ix-menu-settings-item");
  }
  get mapNavMenu() {
    return this.hostElement.querySelector(".map-nav-menu");
  }
  get sidebar() {
    return this.hostElement.querySelector(".map-nav-sidebar");
  }
  get overlay() {
    return this.hostElement.querySelector("#overlay");
  }
  componentDidRender() {
    this.appendMenu();
    this.appendAbout();
    this.appendSettings();
    this.closeOverlay();
  }
  appendMenu() {
    this.hostElement.querySelector("#menu-placeholder").appendChild(this.menu);
    this.menu.addEventListener("mapExpandChange", (event) => {
      const state = !event.detail;
      this.toggleSidebar(state);
      this.menu.toggleMapExpand(state);
    });
    this.menu.enableMapExpand = true;
  }
  appendAbout() {
    const about = this.about || document.createElement("ix-menu-about");
    about.append(this.aboutItems);
    this.menu.appendChild(about);
  }
  appendSettings() {
    if (this.menu.enableSettings && this.settings) {
      this.menu.appendChild(this.settings);
      this.settings.append(this.settingsItems);
    }
  }
  toggleSidebar(show) {
    if (show !== void 0) {
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
  closeSidebar() {
    anime({
      targets: this.sidebar,
      duration: MapNavigation.defaultTime,
      marginLeft: [0, "-29.75rem"],
      opacity: [1, 0],
      easing: "easeInSine",
      complete: () => {
        this.sidebar.classList.add("d-none");
      }
    });
  }
  openSidebar() {
    anime({
      targets: this.sidebar,
      duration: MapNavigation.defaultTime,
      marginLeft: ["-29.75rem", 0],
      opacity: [0, 1],
      easing: "easeOutSine",
      begin: () => {
        this.sidebar.classList.remove("d-none");
      }
    });
  }
  async openOverlay(name, component, icon, color) {
    anime({
      targets: this.overlay,
      duration: MapNavigation.slowTime,
      backdropFilter: [0, "blur(1rem)"],
      translateX: ["-4rem", 0],
      opacity: [0, 1],
      easing: "easeOutSine",
      begin: () => {
        this.overlay.classList.remove("d-none");
      }
    });
    const overlayInstance = document.createElement("ix-map-navigation-overlay");
    overlayInstance.setAttribute("color", color);
    overlayInstance.setAttribute("name", name);
    overlayInstance.setAttribute("icon", icon);
    overlayInstance.addEventListener("closeClick", () => this.closeOverlay());
    overlayInstance.appendChild(component);
    this.overlay.appendChild(overlayInstance);
  }
  async closeOverlay() {
    anime({
      targets: this.overlay,
      duration: MapNavigation.slowTime,
      backdropFilter: ["blur(1rem)", 0],
      translateX: [0, "-4rem"],
      opacity: [1, 0],
      easing: "easeInSine",
      complete: () => {
        var _a;
        (_a = this.overlay.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
        this.overlay.classList.add("d-none");
      }
    });
  }
  render() {
    return h(Host, null, h("div", { id: "menu-placeholder" }), h("div", { class: "map-nav" }, h("div", { class: "map-nav-sidebar" }, h("div", { class: "map-nav-header" }, h("div", { class: "map-nav-header-brand" }, h("div", { class: "map-nav-brand-logo" }, h("slot", { name: "logo" })), h("span", { class: "map-nav-brand-title" }, this.applicationName))), h("div", { class: "map-nav-sidebar-content" }, h("div", { class: "map-nav-sidebar-static-content" }, h("div", { class: "map-nav-title" }, this.navigationTitle), this.hideContextMenu ? "" : h("ix-icon-button", { icon: "context-menu", ghost: true, size: "24", variant: "Secondary", onClick: (_) => this.contextMenuClick.emit() })), h("div", { class: "map-nav-sidebar-user-content" }, h("slot", { name: "sidebar-content" })))), h("div", { class: "content" }, h("div", { class: "map-nav-header-content bg-2" }, h("slot", { name: "content-header" })), h("main", null, h("slot", null)), h("div", { id: "overlay" }))));
  }
  get hostElement() {
    return getElement(this);
  }
};
MapNavigation.defaultTime = 150;
MapNavigation.slowTime = 500;
MapNavigation.style = mapNavigationCss;
const mapNavigationOverlayCss = ".text-xs.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-map-navigation-overlay{color:var(--theme-color-primary)}.sc-ix-map-navigation-overlay-h{position:absolute;width:100%;height:100%;z-index:2;background-color:var(--theme-overlay--background)}.sc-ix-map-navigation-overlay-h .overlay-header.sc-ix-map-navigation-overlay{display:flex;position:relative;justify-content:flex-start;align-items:center;height:3.5rem;background-color:var(--theme-overlay-header--background)}.sc-ix-map-navigation-overlay-h .overlay-header-content.sc-ix-map-navigation-overlay{display:flex;align-items:center;min-width:0}.sc-ix-map-navigation-overlay-h .overlay-header-content.sc-ix-map-navigation-overlay ix-icon.sc-ix-map-navigation-overlay{margin-left:1rem;color:var(--theme-overlay-header--color)}.sc-ix-map-navigation-overlay-h .overlay-header-content.sc-ix-map-navigation-overlay .overlay-header-title.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-overlay-header--color);margin-left:1rem}.sc-ix-map-navigation-overlay-h .color-indicator.sc-ix-map-navigation-overlay{display:inline-block;position:relative;width:0.5rem;height:100%;background-color:var(--theme-color-neutral)}.sc-ix-map-navigation-overlay-h .overlay-close.sc-ix-map-navigation-overlay{margin-left:auto;margin-right:1rem}";
const MapNavigationOverlay = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeClick = createEvent(this, "closeClick", 7);
  }
  render() {
    return h(Host, null, h("div", { class: "overlay-header" }, h("div", { class: {
      "color-indicator": true,
      "d-none": this.color === "undefined" || this.color === void 0
    }, style: {
      "background-color": this.color ? `var(--theme-${this.color})` : ""
    } }), h("div", { class: "overlay-header-content" }, h("ix-icon", { size: "32", name: this.icon }), h("span", { class: "overlay-header-title", title: this.name }, this.name)), h("ix-icon-button", { class: "overlay-close", invisible: true, icon: "close", size: "24", onClick: () => this.closeClick.emit() })), h("slot", null));
  }
};
MapNavigationOverlay.style = mapNavigationOverlayCss;
export {
  MapNavigation as ix_map_navigation,
  MapNavigationOverlay as ix_map_navigation_overlay
};

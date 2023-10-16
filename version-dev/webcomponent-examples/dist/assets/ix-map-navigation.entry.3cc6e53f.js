import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.4e547d1f.js";
import { a as anime } from "./anime.es-185e9087.87a18bcc.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-6a3bc77f.0b0e7e06.js";
import "./typed-event-a230184a.ccfb44d2.js";
const mapNavigationCss = ":host{display:flex;position:relative;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .map-nav{display:flex;margin-left:3.25rem;position:relative;height:100%;flex-grow:1;overflow:hidden}:host .map-nav-sidebar{display:flex;flex-direction:column;align-items:center;width:29.75rem;max-width:29.75rem;min-width:29.75rem;height:100%;left:4rem;background-color:var(--theme-map-navigation--background);-webkit-border-end:0.125rem solid var(--theme-map-navigation-separator--background);border-inline-end:0.125rem solid var(--theme-map-navigation-separator--background);z-index:99}:host .map-nav-sidebar-content{align-items:center;position:relative;overflow:auto;height:100%;width:100%}:host .map-nav-sidebar-content .map-nav-sidebar-static-content{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;justify-content:space-between;margin-top:0.437rem;margin-bottom:0.812rem;margin-left:1rem;margin-right:1rem}:host .map-nav-header{display:flex;position:relative;align-items:center;height:3.5rem;min-height:3.5rem;width:100%}:host .map-nav-header .map-nav-header-brand{background-color:var(--theme-map-navigation-background);display:flex;align-items:center;height:100%;width:100%;padding:0 1rem;--theme-app-header--color:var(--theme-map-navigation-header--color);--theme-app-header-logo--color:var(--theme-map-navigation-logo--color)}:host .map-nav-header .map-nav-header-brand button{margin-left:1rem}:host .map-nav-header-content{display:flex;height:3.5rem;align-items:center;overflow:hidden;padding:0 1rem}:host .map-nav-header-content.empty{height:0}:host .map-nav-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;align-items:center;flex-grow:1}:host .content{display:block;flex-grow:1;position:relative;height:100%;overflow:hidden;z-index:calc(var(--theme-z-index-sticky) - 1)}:host ::slotted(ix-menu){position:absolute}";
const MapNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navigationToggled = createEvent(this, "navigationToggled", 7);
    this.contextMenuClick = createEvent(this, "contextMenuClick", 7);
    this.applicationName = void 0;
    this.navigationTitle = void 0;
    this.hideContextMenu = true;
    this.isSidebarOpen = true;
    this.hasContentHeader = false;
  }
  get menu() {
    return this.hostElement.querySelector("ix-menu");
  }
  get menuOverlay() {
    return this.hostElement.querySelector("ix-menu-overlay");
  }
  get mapNavMenu() {
    return this.hostElement.shadowRoot.querySelector(".map-nav-menu");
  }
  get sidebar() {
    return this.hostElement.shadowRoot.querySelector(".map-nav-sidebar");
  }
  get overlay() {
    return this.hostElement.shadowRoot.querySelector("#overlay");
  }
  componentDidRender() {
    this.appendMenu();
    this.closeOverlay();
  }
  componentWillLoad() {
    useContextProvider(this.hostElement, ApplicationLayoutContext, {
      hideHeader: false,
      host: "map-navigation"
    });
  }
  appendMenu() {
    this.menu.addEventListener("mapExpandChange", (event) => {
      const state = !event.detail;
      this.toggleSidebar(state);
    });
    this.menu.enableMapExpand = true;
  }
  async toggleSidebar(show) {
    if (show !== void 0) {
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
    overlayInstance.setAttribute("slot", "overlay");
    overlayInstance.addEventListener("closeClick", () => this.closeOverlay());
    overlayInstance.appendChild(component);
    this.hostElement.appendChild(overlayInstance);
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
        if (!this.overlay) {
          return;
        }
        (_a = this.overlay.firstChild) === null || _a === void 0 ? void 0 : _a.remove();
        this.overlay.classList.add("d-none");
      }
    });
  }
  checkHasContentHeader(e) {
    const nodes = e.currentTarget.assignedNodes({
      flatten: true
    });
    this.hasContentHeader = (nodes === null || nodes === void 0 ? void 0 : nodes.length) !== 0;
  }
  render() {
    return h(Host, null, h("slot", { name: "menu" }), h("div", { class: "map-nav" }, h("div", { class: "map-nav-sidebar" }, h("div", { class: "map-nav-header" }, h("ix-application-header", { name: this.applicationName, class: "map-nav-header-brand" }, h("slot", { slot: "logo", name: "logo" }))), h("div", { class: "map-nav-sidebar-content" }, h("div", { class: "map-nav-sidebar-static-content" }, h("div", { class: "map-nav-title" }, this.navigationTitle), this.hideContextMenu ? "" : h("ix-icon-button", { icon: "context-menu", ghost: true, size: "24", variant: "secondary", onClick: (_) => this.contextMenuClick.emit() })), h("div", { class: "map-nav-sidebar-user-content" }, h("slot", { name: "sidebar-content" })))), h("div", { class: "content" }, h("div", { class: {
      "map-nav-header-content": true,
      "bg-2": true,
      empty: !this.hasContentHeader
    } }, h("slot", { name: "content-header", onSlotchange: (e) => this.checkHasContentHeader(e) })), h("main", null, h("slot", null), h("slot", { name: "overlay" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
MapNavigation.defaultTime = 150;
MapNavigation.slowTime = 500;
MapNavigation.style = mapNavigationCss;
export {
  MapNavigation as ix_map_navigation
};

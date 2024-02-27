import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.ae9ec291.js";
import { a as anime } from "./anime.es-185e9087.87a18bcc.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-c9078420.56584faa.js";
import "./typed-event-ad6484c5.eb731a3b.js";
const mapNavigationCss = ":host{display:flex;position:relative;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .map-nav{display:flex;margin-left:3.25rem;position:relative;height:100%;flex-grow:1;overflow:hidden}:host .map-nav-sidebar{display:flex;flex-direction:column;align-items:center;width:29.75rem;max-width:29.75rem;min-width:29.75rem;height:100%;left:4rem;background-color:var(--theme-map-navigation--background);border-inline-end:0.125rem solid var(--theme-map-navigation-separator--background);z-index:99}:host .map-nav-sidebar-content{align-items:center;position:relative;overflow:auto;height:100%;width:100%}:host .map-nav-sidebar-content .map-nav-sidebar-static-content{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;justify-content:space-between;margin-top:0.437rem;margin-bottom:0.812rem;margin-left:1rem;margin-right:1rem}:host .map-nav-header{display:flex;position:relative;align-items:center;height:3.5rem;min-height:3.5rem;width:100%}:host .map-nav-header .map-nav-header-brand{background-color:var(--theme-map-navigation-background);display:flex;align-items:center;height:100%;width:100%;padding:0 1rem;--theme-app-header--color:var(--theme-map-navigation-header--color);--theme-app-header-logo--color:var(--theme-map-navigation-logo--color)}:host .map-nav-header .map-nav-header-brand button{margin-left:1rem}:host .map-nav-header-content{display:flex;height:3.5rem;align-items:center;overflow:hidden;padding:0 1rem}:host .map-nav-header-content.empty{height:0}:host .map-nav-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;align-items:center;flex-grow:1}:host .content{display:block;flex-grow:1;position:relative;height:100%;overflow:hidden;z-index:calc(var(--theme-z-index-sticky) - 1)}:host ::slotted(ix-menu){position:absolute}";
const IxMapNavigationStyle0 = mapNavigationCss;
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
    return h(Host, { key: "12b000aeaa56f3cb4648cf144fb15c8319a35dc3" }, h("slot", { key: "c974e3181eb4921f12bc504f40b18f01ba71a505", name: "menu" }), h("div", { key: "5bf009607ed825e66d006cc4a8d4b10e7410e33d", class: "map-nav" }, h("div", { key: "fba46b9e6554cc5de13b01c1483d36cce1004553", class: "map-nav-sidebar" }, h("div", { key: "e60eeeed1d26d495fee6211a153eb2e590dd276f", class: "map-nav-header" }, h("ix-application-header", { key: "b069ea97a85ba6f07fda9f73a8e21063d9c9d001", name: this.applicationName, class: "map-nav-header-brand" }, h("slot", { key: "9e9a897e90537488a3c41b1af7b569cd4a50ba52", slot: "logo", name: "logo" }))), h("div", { key: "b5fd334d696140158bfd3b2eab7212abd4b2cd56", class: "map-nav-sidebar-content" }, h("div", { key: "e5ab16284a0b64860e894ec9e182c416e85adbdb", class: "map-nav-sidebar-static-content" }, h("div", { key: "b75e1c203da83fd26cfac85216776c23d1ef1bee", class: "map-nav-title" }, this.navigationTitle), this.hideContextMenu ? "" : h("ix-icon-button", { icon: "context-menu", ghost: true, size: "24", variant: "secondary", onClick: (_) => this.contextMenuClick.emit() })), h("div", { key: "a24bfbafad8bce92692077ba50d060a914d99865", class: "map-nav-sidebar-user-content" }, h("slot", { key: "71c13468550e734125f11e5a58e7be66aa2069dd", name: "sidebar-content" })))), h("div", { key: "2ac1a049519acf9d5717468c472195d6662732f8", class: "content" }, h("div", { key: "6a86eeb5eae6df6b33cd006575e03001b19dc1db", class: {
      "map-nav-header-content": true,
      "bg-2": true,
      empty: !this.hasContentHeader
    } }, h("slot", { key: "8938ee92e4faa9d9d49b8c0b0ac91cc85882f4cd", name: "content-header", onSlotchange: (e) => this.checkHasContentHeader(e) })), h("main", { key: "003a1c1bc056ad1f68adeac5d33760ee4768cce6" }, h("slot", { key: "b7d28455b65b3f6d4a2f260d7c872e09019a3f9c" }), h("slot", { key: "c628b4546b1301e1b4c966edf2ed87a8699cd2d9", name: "overlay" })))));
  }
  get hostElement() {
    return getElement(this);
  }
};
MapNavigation.defaultTime = 150;
MapNavigation.slowTime = 500;
MapNavigation.style = IxMapNavigationStyle0;
export {
  MapNavigation as ix_map_navigation
};

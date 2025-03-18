import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./global.78f61b49.js";
import { a as anime } from "./anime.es-Ou74PMQs.d39ae9b1.js";
import { u as useContextProvider, A as ApplicationLayoutContext } from "./context-CKM5pVsv.1bb1e898.js";
import { v as iconContextMenu } from "./index-CrTP-icT.451e0ae2.js";
import "./typed-event-BdCnOrqW.51d2f30a.js";
const mapNavigationCss = ":host{display:flex;position:relative;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .map-nav{display:flex;margin-left:3.25rem;position:relative;height:100%;flex-grow:1;overflow:hidden}:host .map-nav-sidebar{display:flex;flex-direction:column;align-items:center;width:29.75rem;max-width:29.75rem;min-width:29.75rem;height:100%;left:4rem;background-color:var(--theme-map-navigation--background);border-inline-end:0.125rem solid var(--theme-map-navigation-separator--background);z-index:99}:host .map-nav-sidebar.display-none{display:none}:host .map-nav-sidebar-content{align-items:center;position:relative;overflow:auto;height:100%;width:100%}:host .map-nav-sidebar-content .map-nav-sidebar-static-content{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;justify-content:space-between;margin-top:0.437rem;margin-bottom:0.812rem;margin-left:1rem;margin-right:1rem}:host .map-nav-header{display:flex;position:relative;align-items:center;height:3.5rem;min-height:3.5rem;width:100%}:host .map-nav-header .map-nav-header-brand{background-color:var(--theme-map-navigation-background);padding-left:1rem;padding-right:1rem;padding-bottom:0.625rem;height:100%;width:100%;--theme-app-header--color:var(--theme-map-navigation-header--color);--theme-app-header-logo--color:var(--theme-map-navigation-logo--color)}:host .map-nav-header .map-nav-header-brand button{margin-left:1rem}:host .map-nav-header-content{display:flex;height:3.5rem;align-items:center;overflow:hidden;padding:0 1rem}:host .map-nav-header-content.empty{height:0}:host .map-nav-title{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);display:flex;align-items:center;flex-grow:1}:host .content{display:block;flex-grow:1;position:relative;height:100%;overflow:hidden;z-index:calc(var(--theme-z-index-sticky) - 1)}:host ::slotted(ix-menu){position:absolute}";
const MapNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.navigationToggled = createEvent(this, "navigationToggled", 7);
    this.contextMenuClick = createEvent(this, "contextMenuClick", 7);
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
        this.sidebar.classList.add("display-none");
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
        this.sidebar.classList.remove("display-none");
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
        this.overlay.classList.remove("display-none");
      }
    });
    const overlayInstance = document.createElement("ix-map-navigation-overlay");
    overlayInstance.setAttribute("color", color !== null && color !== void 0 ? color : "");
    overlayInstance.setAttribute("name", name);
    overlayInstance.setAttribute("icon", icon !== null && icon !== void 0 ? icon : "");
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
        this.overlay.classList.add("display-none");
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
    return h(Host, { key: "3e3241827aec837fdc348cf5d1213691f5780428" }, h("slot", { key: "5bd3dae6dd41bd53eed1551c8398ca302bab573c", name: "menu" }), h("div", { key: "d6fb088fbedee4cd01cc83b8feedd5017f07060f", class: "map-nav" }, h("div", { key: "0e777bcbf889c0a101f6c4e44363b4d176813d47", class: "map-nav-sidebar" }, h("div", { key: "12de7debb9766ada7f0c5c26378d6cafab118cda", class: "map-nav-header" }, h("ix-application-header", { key: "74c65d9fb6b7be6b522411509fa8a5a71afc2244", name: this.applicationName, class: "map-nav-header-brand" }, h("slot", { key: "3513d27e844f2f5c0ae2052d64fd8f3f9cea70a7", slot: "logo", name: "logo" }))), h("div", { key: "3abae9f99b74404df5cd23f5d0b9715cbdd0b371", class: "map-nav-sidebar-content" }, h("div", { key: "5f62402dc4f5c3743a3fd79d5160b9ab75b132c6", class: "map-nav-sidebar-static-content" }, h("div", { key: "715c115bdf5178a311b04037005efc3230529b0c", class: "map-nav-title" }, this.navigationTitle), this.hideContextMenu ? "" : h("ix-icon-button", { icon: iconContextMenu, ghost: true, size: "24", variant: "secondary", onClick: (_) => this.contextMenuClick.emit() })), h("div", { key: "ea4894c17a372c76fc74680cddfd79a645391a76", class: "map-nav-sidebar-user-content" }, h("slot", { key: "bb86645cbf9f71c710f12f78b68858fab7bdd38d", name: "sidebar-content" })))), h("div", { key: "fbee95f2bac6e72acf639d4e788063e8cf36d528", class: "content" }, h("div", { key: "dbadf99583818d8f62866e5073caa53e09d97a74", class: {
      "map-nav-header-content": true,
      "bg-2": true,
      empty: !this.hasContentHeader
    } }, h("slot", { key: "32fdf4eed811b0bc4b6f043ae98e16b05ed2e267", name: "content-header", onSlotchange: (e) => this.checkHasContentHeader(e) })), h("main", { key: "ef909703d699998939dc77a96c9e2cebae80f300" }, h("slot", { key: "2dc6375d4004990560852d1e0497b6fe9ad6cbc6" }), h("slot", { key: "4f6fc515a05d2ff8feceb0381ffa6d80ea46ae5a", name: "overlay" })))));
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

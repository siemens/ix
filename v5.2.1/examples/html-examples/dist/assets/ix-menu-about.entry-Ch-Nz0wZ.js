import { r as registerInstance, c as createEvent, g as getElement, f as forceUpdate, h, H as Host } from "./global-Do6maBom.js";
import { K as iconClose } from "./index-BeX6RWvV-CXzUIwMU.js";
const menuAboutCss = () => `@charset "UTF-8";.text-xs{font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-s{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption-single{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-h2{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-xl{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}a{color:var(--theme-color-primary)}:host{--ix-menu-about-overlay--background:var(--si-sys-background-3);--ix-menu-about-overlay-header--color:var(--si-sys-text-primary)}:host{display:block;background-color:var(--ix-menu-about-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .about-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}:host .about-header h2{color:var(--ix-menu-about-overlay-header--color);margin-bottom:1rem}:host ix-tabs{margin-bottom:1.5rem}`;
const MenuAbout = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tabChange = createEvent(this, "tabChange", 7);
    this.close = createEvent(this, "close", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Whether to suppress legacy tabs (ix-menu-about-item) and use slotted tabs
   * (ix-tab-item) instead
   *
   * @since 5.0.0
   */
  suppressLegacyTabs = false;
  /**
   * Active tab used for legacy ix-menu-about-item integrations
   *
   * @deprecated since 5.0.0, only used for legacy ix-menu-about-item
   * integrations
   * @since 5.0.0
   */
  activeTabKey;
  /**
   * Content of the header
   */
  label = "About & legal information";
  /**
   * Aria label for close button
   */
  ariaLabelCloseButton = "Close About";
  /** @internal */
  show = false;
  /**
   * Active tab changed
   * @since 3.0.0
   */
  tabChange;
  /**
   * About and Legal closed
   */
  close;
  itemsObserver;
  get items() {
    return Array.from(this.hostElement.querySelectorAll("ix-menu-about-item"));
  }
  componentWillLoad() {
    this.itemsObserver = new MutationObserver(() => this.onItemsChange());
    this.itemsObserver.observe(this.hostElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["label"]
    });
    this.onItemsChange();
  }
  disconnectedCallback() {
    this.itemsObserver?.disconnect();
  }
  onItemsChange() {
    if (this.suppressLegacyTabs) {
      return;
    }
    if (this.activeTabKey === void 0 && this.items.length > 0) {
      this.activeTabKey = this.items[0].tabKey;
    }
  }
  handleLabelChange() {
    if (this.suppressLegacyTabs) {
      return;
    }
    forceUpdate(this);
  }
  render() {
    return h(Host, { key: "29b6e77bebb2ac68eb09a1d1c2b68826cd9c36d2", slot: "ix-menu-about", class: {
      show: this.show,
      ["legacy-tabs"]: !this.suppressLegacyTabs
    } }, h("div", { key: "6548f84d7d7864beadd9d4369d6ec1bc4a9128c9", class: "about-header" }, h("h2", { key: "15a2768a277e92434a406cb9a81ebfbc1df559be", class: "text-h2" }, this.label), h("ix-icon-button", { key: "a3bc593c3ddd546bb26e0efa167bf4d5736cc232", variant: "tertiary", size: "24", icon: iconClose, iconColor: "--si-sys-text-secondary", "aria-label": this.ariaLabelCloseButton, onClick: (e) => this.close.emit({
      name: "ix-menu-about",
      nativeEvent: e
    }) })), !this.suppressLegacyTabs ? h("ix-tab-set", null, h("ix-tabs", { activeTabKey: this.activeTabKey }, this.items.map(({ label, tabKey }) => h("ix-tab-item", { tabKey, selected: tabKey === this.activeTabKey, label }))), h("slot", null)) : h("slot", null));
  }
};
MenuAbout.style = menuAboutCss();
export {
  MenuAbout as ix_menu_about
};

import { a as registerInstance, c as createEvent, g as getElement, f as forceUpdate, h, H as Host } from "./global-DX2OdaCL.js";
import { r as iconClose } from "./index-Cl7fhG1I-C77BCFLW.js";
const menuAboutCss = () => `.text-xs{font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-s{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption-single{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-h2{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-xl{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}a{color:var(--theme-color-primary)}:host{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .about-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}:host .about-header h2{color:var(--theme-nav-overlay-header--color);margin-bottom:1rem}:host ix-tabs{margin-bottom:1.5rem}`;
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
    return h(Host, { key: "befeacebbfd9c216eebe14d53ea4bd7b03df44a6", slot: "ix-menu-about", class: {
      show: this.show,
      ["legacy-tabs"]: !this.suppressLegacyTabs
    } }, h("div", { key: "25e83c90cb17e2875d362c1c44b38914c608d2d8", class: "about-header" }, h("h2", { key: "a2aceb7f222e02261b78cb4bf3ce9faf66220a49", class: "text-h2" }, this.label), h("ix-icon-button", { key: "7d6c7d24d08204b5267edd8c1faa176a7a67703d", variant: "tertiary", size: "24", icon: iconClose, iconColor: "color-soft-text", "aria-label": this.ariaLabelCloseButton, onClick: (e) => this.close.emit({
      name: "ix-menu-about",
      nativeEvent: e
    }) })), !this.suppressLegacyTabs ? h("ix-tab-set", null, h("ix-tabs", { activeTabKey: this.activeTabKey }, this.items.map(({ label, tabKey }) => h("ix-tab-item", { tabKey, selected: tabKey === this.activeTabKey, label }))), h("slot", null)) : h("slot", null));
  }
};
MenuAbout.style = menuAboutCss();
export {
  MenuAbout as ix_menu_about
};

import { r as registerInstance, c as createEvent, g as getElement, f as forceUpdate, h, H as Host } from "./global-Cx3A0XQN.js";
import { y as iconClose } from "./index-DgUGsIlh-CLxQRaVd.js";
const menuSettingsCss = () => `.text-xs{font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-s{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-caption-single{font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-default-title-single{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-l-title-single{font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-h2{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}.text-xl{font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}a{color:var(--theme-color-primary)}:host{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .settings-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}:host .settings-header h2{color:var(--theme-nav-overlay-header--color);margin-bottom:1rem}:host ix-tabs{margin-bottom:1.5rem}`;
const MenuSettings = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.tabChange = createEvent(this, "tabChange", 7);
    this.close = createEvent(this, "close", 7);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Whether to suppress legacy tabs (ix-menu-settings-item) and use slotted
   * tabs (ix-tab-item) instead
   *
   * @since 5.0.0
   */
  suppressLegacyTabs = false;
  /**
   * Active tab used for legacy ix-menu-settings-item integrations
   *
   * @deprecated since 5.0.0, only used for legacy ix-menu-settings-item
   * integrations
   * @since 5.0.0
   */
  activeTabKey;
  /**
   * Label of first tab
   */
  label = "Settings";
  /**
   * Aria label for close button
   */
  ariaLabelCloseButton = "Close Settings";
  /** @internal */
  show = false;
  /**
   * Active tab changed
   * @since 3.0.0
   */
  tabChange;
  /**
   * Popover closed
   */
  close;
  itemsObserver;
  get items() {
    return Array.from(this.hostElement.querySelectorAll("ix-menu-settings-item"));
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
    return h(Host, { key: "00a24a718c2e039d0a270fb34864efcaf0583929", slot: "ix-menu-settings", class: {
      show: this.show,
      ["legacy-tabs"]: !this.suppressLegacyTabs
    } }, h("div", { key: "c6620a2eb581918e4c5f4bbbc5b820a6c246ccbd", class: "settings-header" }, h("h2", { key: "24566d6b8fa946bb03b8f017a2d0af859f4ab8ed", class: "text-h2" }, this.label), h("ix-icon-button", { key: "49bec7b11bd4189c503658bb5f81a3637295ae03", variant: "tertiary", size: "24", icon: iconClose, iconColor: "color-soft-text", "aria-label": this.ariaLabelCloseButton, onClick: (e) => this.close.emit({
      name: "ix-menu-settings",
      nativeEvent: e
    }) })), !this.suppressLegacyTabs ? h("ix-tab-set", null, h("ix-tabs", { activeTabKey: this.activeTabKey }, this.items.map(({ label, tabKey }) => h("ix-tab-item", { tabKey, selected: tabKey === this.activeTabKey, label }))), h("slot", null)) : h("slot", null));
  }
};
MenuSettings.style = menuSettingsCss();
export {
  MenuSettings as ix_menu_settings
};

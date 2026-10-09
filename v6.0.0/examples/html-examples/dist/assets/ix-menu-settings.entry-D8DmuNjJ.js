import { r as registerInstance, c as createEvent, g as getElement, f as forceUpdate, h, H as Host } from "./global-CU4RCWGK.js";
import { K as iconClose } from "./index-BeX6RWvV-CXzUIwMU.js";
const menuSettingsCss = () => `@charset "UTF-8";:host{--ix-menu-settings-overlay--background:var(--si-sys-color-background-4);--ix-menu-settings-overlay-header--color:var(--si-sys-color-text-primary)}:host{--ix-menu-settings--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-60)     var(--si-sys-sizing-spacing-y-60) var(--si-sys-sizing-spacing-x-90);--ix-menu-settings-settings-header--height:var(--si-sys-sizing-size-80);--ix-menu-settings-settings-header--margin-bottom:var(--si-sys-sizing-spacing-y-40);--ix-menu-settings-heading--margin-bottom:var(--si-sys-sizing-spacing-y-60);--ix-menu-settings--margin-bottom:var(--si-sys-sizing-spacing-y-80)}:host{display:block;background-color:var(--ix-menu-settings-overlay--background);padding:var(--ix-menu-settings--padding);flex-grow:1;position:absolute;width:100%;height:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .settings-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:var(--ix-menu-settings-settings-header--height);margin-bottom:var(--ix-menu-settings-settings-header--margin-bottom)}:host .settings-header h2{color:var(--ix-menu-settings-overlay-header--color);margin-bottom:var(--ix-menu-settings-heading--margin-bottom);font:var(--si-sys-typography-h2);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host ix-tabs{margin-bottom:var(--ix-menu-settings--margin-bottom)}`;
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
    return h(Host, { key: "0cb440663679de12c78da54d83f1be044e5d5119", slot: "ix-menu-settings", class: {
      show: this.show,
      ["legacy-tabs"]: !this.suppressLegacyTabs
    } }, h("div", { key: "a99aae146087a7c388b614c675b6811597a0e3bc", class: "settings-header" }, h("h2", { key: "10a24bccd3c920e7e41a16c434e3f5135f47017a", class: "typography-h2" }, this.label), h("ix-icon-button", { key: "0f2924417e352161089ecbae189923920326b928", variant: "tertiary", icon: iconClose, iconColor: "--si-sys-color-text-secondary", "aria-label": this.ariaLabelCloseButton, onClick: (e) => this.close.emit({
      name: "ix-menu-settings",
      nativeEvent: e
    }) })), !this.suppressLegacyTabs ? h("ix-tab-set", null, h("ix-tabs", { activeTabKey: this.activeTabKey }, this.items.map(({ label, tabKey }) => h("ix-tab-item", { tabKey, selected: tabKey === this.activeTabKey, label }))), h("slot", null)) : h("slot", null));
  }
};
MenuSettings.style = menuSettingsCss();
export {
  MenuSettings as ix_menu_settings
};

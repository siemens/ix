import { proxyCustomElement, HTMLElement, createEvent, forceUpdate, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './icon.js';
import { d as defineCustomElement$4 } from './icon-button.js';
import { d as defineCustomElement$3 } from './tab-item.js';
import { d as defineCustomElement$2 } from './tabs.js';

const menuSettingsCss = ".text-xs.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-menu-settings{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-menu-settings{color:var(--theme-color-primary)}.sc-ix-menu-settings-h{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}.sc-ix-menu-settings-h .settings-header.sc-ix-menu-settings{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}.sc-ix-menu-settings-h .settings-header.sc-ix-menu-settings h2.sc-ix-menu-settings{color:var(--theme-nav-overlay-header--color);margin-bottom:0}.sc-ix-menu-settings-h .settings-tabs.sc-ix-menu-settings{margin-bottom:1.5rem}";

const MenuAbout = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.close = createEvent(this, "close", 7);
    this.activeTabLabel = undefined;
    this.label = 'Settings';
    this.show = false;
  }
  get settingsItems() {
    return Array.from(this.el.querySelectorAll('ix-menu-settings-item'));
  }
  setTab(label) {
    this.activeTabLabel = label;
    this.settingsItems.forEach((i) => {
      i.style.display = 'none';
      if (i.label === this.activeTabLabel) {
        i.style.display = 'block';
      }
    });
  }
  componentWillLoad() {
    if (this.settingsItems.length) {
      this.setTab(this.activeTabLabel || this.settingsItems[0].label);
    }
  }
  componentDidLoad() {
    forceUpdate(this.el);
  }
  watchActiveTabLabel(value) {
    this.setTab(value);
  }
  getTabItems() {
    return this.settingsItems.map(({ label }) => {
      return (h("ix-tab-item", { class: {
          active: label === this.activeTabLabel,
        }, onClick: () => this.setTab(label) }, label));
    });
  }
  render() {
    return (h(Host, { class: {
        animate__animated: true,
        animate__fadeInLeft: this.show,
        animate__fadeOutLeft: !this.show,
      } }, h("div", { class: "settings-header" }, h("h2", { class: "text-h2" }, this.label), h("ix-icon-button", { ghost: true, size: "24", icon: "close", onClick: (e) => this.close.emit(e) })), h("ix-tabs", null, this.getTabItems()), h("slot", null)));
  }
  get el() { return this; }
  static get watchers() { return {
    "activeTabLabel": ["watchActiveTabLabel"]
  }; }
  static get style() { return menuSettingsCss; }
}, [6, "ix-menu-settings", {
    "activeTabLabel": [1025, "active-tab-label"],
    "label": [1],
    "show": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-menu-settings", "ix-icon", "ix-icon-button", "ix-tab-item", "ix-tabs"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-menu-settings":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MenuAbout);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ix-tab-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-tabs":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxMenuSettings = MenuAbout;
const defineCustomElement = defineCustomElement$1;

export { IxMenuSettings, defineCustomElement };

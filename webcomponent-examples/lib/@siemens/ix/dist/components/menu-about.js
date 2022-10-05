import { proxyCustomElement, HTMLElement, createEvent, forceUpdate, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './tab-item.js';
import { d as defineCustomElement$1 } from './tabs.js';

const menuAboutCss = ".text-xs.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-menu-about{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-menu-about{color:var(--theme-color-primary)}.sc-ix-menu-about-h{display:block;background-color:var(--theme-nav-overlay--background);padding:0.75rem 1rem 1rem 2rem;flex-grow:1;position:absolute;width:100%;height:100%}.sc-ix-menu-about-h .about-header.sc-ix-menu-about{display:flex;justify-content:space-between;flex-direction:row;align-items:center;height:2rem;margin-bottom:0.5rem}.sc-ix-menu-about-h .about-header.sc-ix-menu-about h2.sc-ix-menu-about{color:var(--theme-nav-overlay-header--color);margin-bottom:0}.sc-ix-menu-about-h .about-tabs.sc-ix-menu-about{margin-bottom:1.5rem}.sc-ix-menu-about-h ix-menu-about-item.sc-ix-menu-about{display:none}";

const MenuAbout = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.close = createEvent(this, "close", 7);
    /**
     *
     */
    this.i18nImprintLabel = 'Imprint';
    /**
     * Active tab
     */
    this.activeTabLabel = this.i18nImprintLabel;
    /**
     * Label of first tab
     */
    this.label = 'About & legal information';
    /**
     * Internal
     */
    this.show = false;
    this.labels = [];
  }
  get aboutItems() {
    return Array.from(this.el.querySelectorAll('ix-menu-about-item'));
  }
  setTab(label) {
    this.activeTabLabel = label;
    this.aboutItems.forEach((i) => {
      i.style.display = 'none';
      if (i.label === this.activeTabLabel) {
        i.style.display = 'block';
      }
    });
  }
  componentWillLoad() {
    var _a;
    this.setTab(this.activeTabLabel || ((_a = this.aboutItems[0]) === null || _a === void 0 ? void 0 : _a.label));
  }
  componentDidLoad() {
    var _a;
    this.setTab(this.activeTabLabel || ((_a = this.aboutItems[0]) === null || _a === void 0 ? void 0 : _a.label));
    forceUpdate(this.el);
  }
  componentWillRender() {
    this.updateLabels();
  }
  updateLabels() {
    this.labels = this.aboutItems.map((i) => i.label);
  }
  watchActiveTabLabel(value) {
    // Wait a DOM render cycle to get changed labels
    setTimeout(() => this.setTab(value));
  }
  getSelectedTabIndex(label) {
    const selectedItem = this.aboutItems.find((item) => item.label === label);
    return this.aboutItems.indexOf(selectedItem);
  }
  render() {
    return (h(Host, { class: {
        animate__animated: true,
        animate__fadeInLeft: this.show,
        animate__fadeOutLeft: !this.show,
      } }, h("div", { class: "about-header" }, h("h2", { class: "text-h2" }, this.label), h("ix-icon-button", { ghost: true, size: "24", icon: "close", onClick: (e) => this.close.emit(e) })), h("ix-tabs", { selected: this.getSelectedTabIndex(this.activeTabLabel), class: "about-tabs" }, this.labels.map((label) => (h("ix-tab-item", { onClick: () => this.setTab(label) }, label)))), h("div", { class: "about-items" }, h("slot", null))));
  }
  get el() { return this; }
  static get watchers() { return {
    "activeTabLabel": ["watchActiveTabLabel"]
  }; }
  static get style() { return menuAboutCss; }
}, [6, "ix-menu-about", {
    "i18nImprintLabel": [513, "i-1-8n-imprint-label"],
    "activeTabLabel": [1537, "active-tab-label"],
    "label": [1],
    "show": [4],
    "labels": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-menu-about", "ix-icon", "ix-icon-button", "ix-tab-item", "ix-tabs"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-menu-about":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MenuAbout);
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
    case "ix-tab-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ix-tabs":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { MenuAbout as M, defineCustomElement as d };

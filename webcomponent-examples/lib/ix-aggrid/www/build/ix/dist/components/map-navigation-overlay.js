import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './icon.js';
import { d as defineCustomElement$1 } from './icon-button.js';

const mapNavigationOverlayCss = ".text-xs.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.625rem;font-weight:400;line-height:1.4em;color:var(--theme-color-std-text)}.text-s.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-caption-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.75rem;font-weight:700;line-height:1em;color:var(--theme-color-std-text)}.text-default.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text)}.text-default-title.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.429em;color:var(--theme-color-std-text)}.text-default-title-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:700;line-height:1.143em;color:var(--theme-color-std-text)}.text-l.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:400;line-height:1.25em;color:var(--theme-color-std-text)}.text-l-title.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}.text-l-title-single.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.25em;color:var(--theme-color-std-text)}.text-h2.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text)}.text-xl.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:400;line-height:1.091em;color:var(--theme-color-std-text)}a.sc-ix-map-navigation-overlay{color:var(--theme-color-primary)}.sc-ix-map-navigation-overlay-h{position:absolute;width:100%;height:100%;z-index:2;background-color:var(--theme-overlay--background)}.sc-ix-map-navigation-overlay-h .overlay-header.sc-ix-map-navigation-overlay{display:flex;position:relative;justify-content:flex-start;align-items:center;height:3.5rem;background-color:var(--theme-overlay-header--background)}.sc-ix-map-navigation-overlay-h .overlay-header-content.sc-ix-map-navigation-overlay{display:flex;align-items:center;min-width:0}.sc-ix-map-navigation-overlay-h .overlay-header-content.sc-ix-map-navigation-overlay ix-icon.sc-ix-map-navigation-overlay{margin-left:1rem;color:var(--theme-overlay-header--color)}.sc-ix-map-navigation-overlay-h .overlay-header-content.sc-ix-map-navigation-overlay .overlay-header-title.sc-ix-map-navigation-overlay{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1.375rem;font-weight:700;line-height:1.455em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--theme-overlay-header--color);margin-left:1rem}.sc-ix-map-navigation-overlay-h .color-indicator.sc-ix-map-navigation-overlay{display:inline-block;position:relative;width:0.5rem;height:100%;background-color:var(--theme-color-neutral)}.sc-ix-map-navigation-overlay-h .overlay-close.sc-ix-map-navigation-overlay{margin-left:auto;margin-right:1rem}";

const MapNavigationOverlay = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.closeClick = createEvent(this, "closeClick", 7);
  }
  render() {
    return (h(Host, null, h("div", { class: "overlay-header" }, h("div", { class: {
        'color-indicator': true,
        'd-none': this.color === 'undefined' || this.color === undefined,
      }, style: {
        'background-color': this.color
          ? `var(--theme-${this.color})`
          : '',
      } }), h("div", { class: "overlay-header-content" }, h("ix-icon", { size: "32", name: this.icon }), h("span", { class: "overlay-header-title", title: this.name }, this.name)), h("ix-icon-button", { class: "overlay-close", invisible: true, icon: "close", size: "24", onClick: () => this.closeClick.emit() })), h("slot", null)));
  }
  static get style() { return mapNavigationOverlayCss; }
}, [6, "ix-map-navigation-overlay", {
    "name": [1],
    "icon": [1],
    "color": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-map-navigation-overlay", "ix-icon", "ix-icon-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-map-navigation-overlay":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MapNavigationOverlay);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { MapNavigationOverlay as M, defineCustomElement as d };

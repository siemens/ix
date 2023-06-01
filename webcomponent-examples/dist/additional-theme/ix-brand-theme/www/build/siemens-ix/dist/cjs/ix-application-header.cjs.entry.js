'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');

const applicationHeaderCss = ":host{display:flex;align-items:center;position:relative;width:100%;height:2.75rem;padding-left:1rem;color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color)}:host .name{margin-left:2.5rem;margin-right:2.5rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color)}";

const ApplicationHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.name = undefined;
  }
  componentDidLoad() {
    this.attachSiemensLogoIfLoaded();
  }
  async attachSiemensLogoIfLoaded() {
    await window.customElements.whenDefined('ix-siemens-logo');
    const logoElement = document.createElement('ix-siemens-logo');
    if (!this.host.querySelector('[slot="logo"]')) {
      this.host.shadowRoot.querySelector('.logo').appendChild(logoElement);
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "logo" }, index.h("slot", { name: "logo" })), index.h("div", { class: "name" }, this.name), index.h("slot", null)));
  }
  get host() { return index.getElement(this); }
};
ApplicationHeader.style = applicationHeaderCss;

exports.ix_application_header = ApplicationHeader;

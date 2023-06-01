import { r as registerInstance, h, H as Host, g as getElement } from './index-6f4f3582.js';

const applicationHeaderCss = ":host{display:flex;align-items:center;position:relative;width:100%;height:2.75rem;padding-left:1rem;color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color)}:host .name{margin-left:2.5rem;margin-right:2.5rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color)}";

const ApplicationHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("div", { class: "logo" }, h("slot", { name: "logo" })), h("div", { class: "name" }, this.name), h("slot", null)));
  }
  get host() { return getElement(this); }
};
ApplicationHeader.style = applicationHeaderCss;

export { ApplicationHeader as ix_application_header };

import { r as registerInstance, h, H as Host } from './index-55cfd20d.js';

const applicationHeaderCss = ":host{display:flex;align-items:center;position:relative;width:100%;height:2.75rem;padding-left:1rem;color:var(--theme-app-header-logo--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color)}:host .name{margin-left:2.5rem;margin-right:2.5rem}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden}";

const ApplicationHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "logo" }, h("slot", { name: "logo" })), h("span", { class: "name" }, this.name), h("slot", null)));
  }
};
ApplicationHeader.style = applicationHeaderCss;

export { ApplicationHeader as ix_application_header };

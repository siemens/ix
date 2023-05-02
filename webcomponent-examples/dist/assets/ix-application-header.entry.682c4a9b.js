import { r as registerInstance, h, H as Host, g as getElement } from "./index.668348d5.js";
import { h as hostContext, i as isBasicNavigationLayout, m as menuController } from "./context-f6a2b727.b0a35cb0.js";
import { s as screenMode } from "./service-fc436c5b.3249cd9f.js";
import "./typed-event-a230184a.ccfb44d2.js";
const applicationHeaderCss = ":host{display:flex;align-items:center;position:relative;width:100%;height:2.75rem;padding-left:1rem;color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color)}:host .name{margin-left:2.5rem;margin-right:2.5rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color)}:host(.mode-mobile){padding-left:0.5rem}:host(.mode-mobile) .logo{margin-left:0.5rem}";
const ApplicationHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = void 0;
    this.mode = "desktop";
    this.menuExpanded = false;
  }
  componentWillLoad() {
    const layout = hostContext("ix-basic-navigation", this.host);
    if (isBasicNavigationLayout(layout)) {
      this.modeDisposable = screenMode.onChange.on((mode) => this.mode = mode);
      this.mode = screenMode.mode;
      this.menuDisposable = menuController.expandChange.on((show) => {
        this.menuExpanded = show;
      });
    }
  }
  componentDidLoad() {
    this.attachSiemensLogoIfLoaded();
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.menuDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
    (_b = this.modeDisposable) === null || _b === void 0 ? void 0 : _b.dispose();
  }
  async attachSiemensLogoIfLoaded() {
    await window.customElements.whenDefined("ix-siemens-logo");
    const logoElement = document.createElement("ix-siemens-logo");
    if (!this.host.querySelector('[slot="logo"]')) {
      this.host.shadowRoot.querySelector(".logo").appendChild(logoElement);
    }
  }
  async onMenuClick() {
    menuController.toggle();
  }
  render() {
    return h(Host, { class: { [`mode-${this.mode}`]: true } }, this.mode === "mobile" ? h("ix-burger-menu", { onClick: () => this.onMenuClick(), expanded: this.menuExpanded }) : null, h("div", { class: "logo" }, h("slot", { name: "logo" })), h("div", { class: "name" }, this.name), h("slot", null));
  }
  get host() {
    return getElement(this);
  }
};
ApplicationHeader.style = applicationHeaderCss;
export {
  ApplicationHeader as ix_application_header
};

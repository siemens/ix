import { r as registerInstance, h, H as Host, g as getElement } from "./index.8f02b398.js";
import { m as menuController } from "./menu-service-b3076949.6e037adc.js";
import "./typed-event-a230184a.ccfb44d2.js";
const applicationHeaderCss = ":host{display:flex;align-items:center;position:relative;width:100%;height:2.75rem;padding-left:1rem;color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color)}:host .name{margin-left:2.5rem;margin-right:2.5rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color)}:host(.mode-small){padding-left:0.5rem}:host(.mode-small) .logo{margin-left:0.5rem}";
const ApplicationHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = void 0;
    this.mode = "large";
    this.menuExpanded = false;
  }
  componentWillLoad() {
    this.menuDisposable = menuController.expandChange.on((show) => {
      this.menuExpanded = show;
    });
  }
  componentDidLoad() {
    this.attachSiemensLogoIfLoaded();
  }
  disconnectedCallback() {
    var _a, _b;
    (_a = this.menuDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
    (_b = this.modeDisposable) === null || _b === void 0 ? void 0 : _b.dispose();
  }
  isLogoSlotted() {
    const slotElement = this.hostElement.shadowRoot.querySelector('slot[name="logo"]');
    const nodes = slotElement.assignedNodes({
      flatten: true
    });
    return nodes.length !== 0;
  }
  async attachSiemensLogoIfLoaded() {
    await window.customElements.whenDefined("ix-siemens-logo");
    const logoElement = document.createElement("ix-siemens-logo");
    if (!this.isLogoSlotted()) {
      this.hostElement.shadowRoot.querySelector(".logo").appendChild(logoElement);
    }
  }
  async onMenuClick() {
    menuController.toggle();
  }
  render() {
    return h(Host, { class: { [`mode-${this.mode}`]: true } }, this.mode === "small" ? h("ix-burger-menu", { onClick: () => this.onMenuClick(), expanded: this.menuExpanded }) : null, h("div", { class: "logo" }, h("slot", { name: "logo" })), h("div", { class: "name" }, this.name), h("slot", null));
  }
  get hostElement() {
    return getElement(this);
  }
};
ApplicationHeader.style = applicationHeaderCss;
export {
  ApplicationHeader as ix_application_header
};

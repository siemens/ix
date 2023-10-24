import { r as registerInstance, h, H as Host, g as getElement } from "./index.1d71f6c6.js";
import { m as menuController, a as applicationLayoutService } from "./menu-service-5555b4fa.dde89574.js";
import { a as useContextConsumer, A as ApplicationLayoutContext } from "./context-6a3bc77f.0b0e7e06.js";
import "./breakpoints-b76e9f27.198519d0.js";
import "./typed-event-a230184a.ccfb44d2.js";
const applicationHeaderCss = ":host{display:flex;align-items:center;position:relative;width:100%;height:2.75rem;min-height:2.75rem;padding-left:1rem;color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color);z-index:var(--theme-z-index-fixed)}:host .name{margin-left:2.5rem;margin-right:2.5rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color)}:host(.breakpoint-sm){padding-left:0.5rem}:host(.breakpoint-sm) .logo{margin-left:0.5rem}";
const ApplicationHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.name = void 0;
    this.breakpoint = "lg";
    this.menuExpanded = false;
    this.suppressResponsive = false;
  }
  componentWillLoad() {
    useContextConsumer(this.hostElement, ApplicationLayoutContext, (ctx) => {
      if ((ctx === null || ctx === void 0 ? void 0 : ctx.host) === "map-navigation") {
        this.suppressResponsive = true;
        this.breakpoint = "md";
        return;
      }
      this.breakpoint = applicationLayoutService.breakpoint;
    });
    this.menuDisposable = menuController.expandChange.on((show) => {
      this.menuExpanded = show;
    });
    this.modeDisposable = applicationLayoutService.onChange.on((mode) => {
      if (this.suppressResponsive) {
        this.breakpoint = "md";
        return;
      }
      this.breakpoint = mode;
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
    return h(Host, { class: { [`breakpoint-${this.breakpoint}`]: true }, slot: "application-header" }, this.breakpoint === "sm" && this.suppressResponsive === false ? h("ix-burger-menu", { onClick: () => this.onMenuClick(), expanded: this.menuExpanded }) : null, h("div", { class: "logo" }, h("slot", { name: "logo" })), h("div", { class: "name" }, this.name), h("slot", null));
  }
  get hostElement() {
    return getElement(this);
  }
};
ApplicationHeader.style = applicationHeaderCss;
export {
  ApplicationHeader as ix_application_header
};

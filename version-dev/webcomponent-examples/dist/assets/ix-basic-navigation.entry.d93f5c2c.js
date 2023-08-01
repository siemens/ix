import { r as registerInstance, h, H as Host, g as getElement } from "./index.0c924a37.js";
import { m as menuController } from "./menu-service-b3076949.6e037adc.js";
import { s as screenMode } from "./service-586129b5.a3143e0d.js";
import "./typed-event-a230184a.ccfb44d2.js";
const basicNavigationCss = ":host{display:flex;position:relative;width:100%;height:100%;flex-direction:column}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ix-application-header{z-index:calc(var(--theme-z-index-sticky) + 1)}:host .logo-wrapper{display:contents}:host .content{display:flex;height:100%;width:100%;position:relative;margin-left:3.25rem;overflow:auto}:host .navigation-content{display:flex;position:relative;flex-direction:row;height:calc(100% - 2.75rem);width:100%}:host(.hide-header) .content{height:100%}:host(.mode-large) .content{margin-left:0rem}:host(.mode-small) .content{margin-left:0px;width:100%}";
const BasicNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.applicationName = void 0;
    this.hideHeader = false;
    this.mode = "large";
  }
  get menu() {
    return this.hostElement.querySelector("ix-menu");
  }
  onContentClick() {
    var _a;
    if (menuController.isPinned) {
      return;
    }
    (_a = this.menu) === null || _a === void 0 ? void 0 : _a.toggleMenu(false);
  }
  componentWillLoad() {
    if (this.hideHeader === false) {
      this.modeDisposable = screenMode.onChange.on((mode) => this.mode = mode);
      this.mode = screenMode.mode;
    }
  }
  componentDidRender() {
    if (this.menu) {
      this.menu.applicationName = this.applicationName;
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.modeDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
  }
  render() {
    return h(Host, { "data-role": "", class: {
      "hide-header": this.hideHeader,
      [`mode-${this.mode}`]: true
    } }, !this.hideHeader ? h("ix-application-header", { name: this.applicationName, mode: this.mode }, h("slot", { name: "logo", slot: "logo" })) : null, h("div", { class: "navigation-content" }, h("slot", { name: "menu" }), h("div", { class: "content", onClick: () => this.onContentClick() }, h("slot", null))));
  }
  get hostElement() {
    return getElement(this);
  }
};
BasicNavigation.style = basicNavigationCss;
export {
  BasicNavigation as ix_basic_navigation
};

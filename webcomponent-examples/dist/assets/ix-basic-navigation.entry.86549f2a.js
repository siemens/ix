import { r as registerInstance, h, H as Host, g as getElement } from "./index.58ccfb29.js";
import { s as screenMode } from "./service-fc436c5b.3249cd9f.js";
import "./typed-event-a230184a.ccfb44d2.js";
const basicNavigationCss = ".sc-ix-basic-navigation-h{display:flex;position:relative;width:100%;height:100%;flex-direction:column}.sc-ix-basic-navigation-h ix-application-header.sc-ix-basic-navigation{z-index:calc(var(--theme-z-index-sticky) + 1)}.sc-ix-basic-navigation-h .content.sc-ix-basic-navigation{display:flex;height:calc(100% - 2.75rem);width:calc(100% - 4rem);position:relative;margin-left:4rem;overflow:auto}.hide-header.sc-ix-basic-navigation-h .content.sc-ix-basic-navigation{height:100%}.mode-mobile.sc-ix-basic-navigation-h .content.sc-ix-basic-navigation{margin-left:0px;width:100%}";
const BasicNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.applicationName = void 0;
    this.hideHeader = false;
    this.mode = "desktop";
  }
  get menu() {
    return this.hostElement.querySelector("ix-menu");
  }
  componentWillLoad() {
    if (this.hideHeader === false) {
      this.modeDisposable = screenMode.onChange.on((mode) => this.mode = mode);
      this.mode = screenMode.mode;
    }
  }
  componentDidRender() {
    if (this.menu) {
      this.appendMenu();
      this.adjustMenuHeight();
      this.menu.applicationName = this.applicationName;
    }
  }
  disconnectedCallback() {
    var _a;
    (_a = this.modeDisposable) === null || _a === void 0 ? void 0 : _a.dispose();
  }
  appendMenu() {
    this.hostElement.querySelector("#menu-placeholder").appendChild(this.menu);
  }
  adjustMenuHeight() {
    if (!this.hideHeader) {
      this.menu.style.height = "calc(100% - 2.75rem)";
    }
  }
  render() {
    return h(Host, { "data-role": "", class: {
      "hide-header": this.hideHeader,
      [`mode-${this.mode}`]: true
    } }, !this.hideHeader ? h("ix-application-header", { name: this.applicationName }, h("slot", { name: "logo" })) : null, h("div", { id: "menu-placeholder" }), h("div", { class: "content", onClick: () => this.menu.toggleMenu(false) }, h("slot", null)));
  }
  get hostElement() {
    return getElement(this);
  }
};
BasicNavigation.style = basicNavigationCss;
export {
  BasicNavigation as ix_basic_navigation
};

import { r as registerInstance, h, H as Host, g as getElement } from "./index.b1292ea0.js";
const basicNavigationCss = ".sc-ix-basic-navigation-h{display:flex;position:relative;width:100%;height:100%;flex-direction:column}.sc-ix-basic-navigation-h ix-application-header.sc-ix-basic-navigation{z-index:calc(var(--theme-z-index-sticky) + 1)}.sc-ix-basic-navigation-h .content.sc-ix-basic-navigation{display:flex;height:calc(100% - 2.75rem);width:calc(100% - 4rem);position:relative;margin-left:4rem;overflow:auto}.hide-header.sc-ix-basic-navigation-h .content.sc-ix-basic-navigation{height:100%}";
const BasicNavigation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.applicationName = void 0;
    this.hideHeader = false;
  }
  get menu() {
    return this.hostElement.querySelector("ix-menu");
  }
  componentDidRender() {
    if (this.menu) {
      this.appendMenu();
      this.adjustMenuHeight();
      this.menu.applicationName = this.applicationName;
    }
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
    return h(Host, { class: {
      "hide-header": this.hideHeader
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

import { r as registerInstance, h, H as Host } from "./index.b8b4baf0.js";
const myComponentCss = ".sc-my-component-h{display:flex;flex-direction:column;width:100vw;height:100vh}.sc-my-component-h main.sc-my-component{width:100%;padding:2rem}.sc-my-component-h ix-chip.sc-my-component{-webkit-margin-after:1rem;margin-block-end:1rem}";
const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("ix-basic-navigation", null, h("ix-menu", null, h("ix-menu-item", null, "123"), h("ix-menu-item", null, "456"), h("ix-menu-item", null, "123"), h("ix-menu-item", null, "456"), h("ix-menu-item", null, "123"), h("ix-menu-item", null, "456"), h("ix-menu-item", null, "123"), h("ix-menu-item", null, "456"), h("ix-menu-item", null, "123"), h("ix-menu-item", null, "456"), h("ix-menu-item", null, "123"), h("ix-menu-item", null, "456"), h("ix-menu-settings", null, h("ix-menu-settings-item", { label: "sett" }, "Test")), h("ix-menu-about", null, h("ix-menu-about-item", { label: "title" }, "Test")))));
  }
};
MyComponent.style = myComponentCss;
export {
  MyComponent as my_component
};

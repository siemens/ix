import { r as registerInstance, h, H as Host } from "./index.47446461.js";
const myComponentCss = ".sc-my-component-h{display:block;position:relative;width:100vw;height:100vh}";
const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("ix-workflow-steps", null, h("ix-workflow-step", null)));
  }
};
MyComponent.style = myComponentCss;
export {
  MyComponent as my_component
};

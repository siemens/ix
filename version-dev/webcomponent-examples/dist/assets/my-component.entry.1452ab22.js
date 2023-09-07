import { r as registerInstance, h, H as Host } from "./index.435ccc59.js";
const myComponentCss = ".sc-my-component-h{display:block;position:relative;width:100vw;height:100vh;padding:0rem 0rem 0rem 0rem}";
const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null);
  }
};
MyComponent.style = myComponentCss;
export {
  MyComponent as my_component
};

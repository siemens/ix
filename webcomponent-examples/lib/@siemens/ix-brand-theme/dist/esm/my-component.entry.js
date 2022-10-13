import { r as registerInstance, h } from './index-f8ce3cbe.js';

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("div", null);
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };

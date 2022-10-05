import { r as registerInstance, h, H as Host } from './index-55cfd20d.js';

const myComponentCss = ".sc-my-component-h{display:flex;flex-direction:column;width:100vw;height:100vh}.sc-my-component-h main.sc-my-component{width:100%;padding:2rem}.sc-my-component-h ix-chip.sc-my-component{-webkit-margin-after:1rem;margin-block-end:1rem}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null);
  }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };

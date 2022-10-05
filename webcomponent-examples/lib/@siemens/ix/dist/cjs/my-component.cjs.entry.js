'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');

const myComponentCss = ".sc-my-component-h{display:flex;flex-direction:column;width:100vw;height:100vh}.sc-my-component-h main.sc-my-component{width:100%;padding:2rem}.sc-my-component-h ix-chip.sc-my-component{-webkit-margin-after:1rem;margin-block-end:1rem}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h(index.Host, null);
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;

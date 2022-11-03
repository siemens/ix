'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-76b8a7e8.js');

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("div", null);
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ae9620b6.js');

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

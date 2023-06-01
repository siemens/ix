'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');

const myComponentCss = ".sc-my-component-h{display:flex;position:relative;width:100vw;height:100vh}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { style: {
        padding: '12rem',
      } }, index.h("ix-button", { "data-tooltip": "Test1", style: { marginRight: '4rem' } }, "Long text"), index.h("ix-button", { "data-tooltip": "Test2", style: { marginRight: '4rem' } }, "Short"), index.h("ix-button", { "data-tooltip": "Test3", style: { marginRight: '4rem' } }, "Long text short words"), index.h("ix-button", { "data-tooltip": "with-title", style: { marginRight: '4rem' } }, "With title"), index.h("ix-tooltip", { for: '[data-tooltip="Test3"]', interactive: false, titleIcon: "rocket", titleContent: "test title" }, "Very very very very very very long long long text"), index.h("ix-tooltip", { for: '[data-tooltip="Test2"]', interactive: false }, "1"), index.h("ix-tooltip", { for: '[data-tooltip="Test1"]', interactive: true, titleIcon: "rocket", titleContent: "test title" }, "Very very very very very very looooooooooooooooooooooooooooooooooooooooong text"), index.h("ix-tooltip", { for: '[data-tooltip="with-title"]', interactive: true, titleIcon: "rocket", titleContent: "test title" }, "Some Content"), index.h("div", { style: {
        display: 'flex',
        flexDirection: 'column',
      } }, [
      'h2',
      'display-large',
      'large',
      'large-single',
      'default-title',
      'default-title-single',
      'default',
      'default-single',
      'caption',
      'caption-single',
      'small',
      'x-small',
    ].map((v) => (index.h("div", null, index.h("ix-typography", { variant: v }, v)))))));
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');

const inputGroupCss = ".sc-ix-input-group-h{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.sc-ix-input-group-h .group.sc-ix-input-group{display:flex;position:absolute;align-items:center;height:100%}.sc-ix-input-group-h .group-start.sc-ix-input-group{left:0px}.sc-ix-input-group-h .group-end.sc-ix-input-group{right:0px}";

const InputGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidRender() {
    let paddingRight = 15;
    let paddingLeft = 15;
    this.host.querySelectorAll('[slot="input-end"]').forEach((item) => {
      item.classList.add('input-group-label');
      paddingRight += item.getBoundingClientRect().width;
    });
    this.host.querySelectorAll('[slot="input-start"]').forEach((item) => {
      item.classList.add('input-group-label');
      paddingLeft += item.getBoundingClientRect().width;
    });
    const inputElement = this.host.querySelector('input.form-control');
    if (inputElement) {
      inputElement.style.paddingRight = paddingRight + 'px';
      inputElement.style.paddingLeft = paddingLeft + 'px';
    }
    else {
      console.warn('You used the ix-input-group without an input-tag, e.g. <input class="form-control" />');
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "group group-start" }, index.h("slot", { name: "input-start" })), index.h("slot", null), index.h("div", { class: "group group-end" }, index.h("slot", { name: "input-end" }))));
  }
  get host() { return index.getElement(this); }
};
InputGroup.style = inputGroupCss;

exports.ix_input_group = InputGroup;

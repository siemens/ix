import { r as registerInstance, h, H as Host, g as getElement } from "./index.668348d5.js";
const inputGroupCss = ".sc-ix-input-group-h{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.sc-ix-input-group-h .group.sc-ix-input-group{display:flex;position:absolute;align-items:center;height:100%}.sc-ix-input-group-h .group-start.sc-ix-input-group{left:0px}.sc-ix-input-group-h .group-end.sc-ix-input-group{right:0px}.sc-ix-input-group-h .sc-ix-input-group-s>*{display:flex}";
const InputGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidRender() {
    let paddingRight = 15;
    let paddingLeft = 15;
    this.host.querySelectorAll('[slot="input-end"]').forEach((item) => {
      item.classList.add("input-group-label");
      paddingRight += item.getBoundingClientRect().width;
    });
    this.host.querySelectorAll('[slot="input-start"]').forEach((item) => {
      item.classList.add("input-group-label");
      paddingLeft += item.getBoundingClientRect().width;
    });
    const inputElement = this.host.querySelector("input.form-control");
    if (inputElement) {
      inputElement.style.paddingRight = paddingRight + "px";
      inputElement.style.paddingLeft = paddingLeft + "px";
    } else {
      console.warn('You used the ix-input-group without an input-tag, e.g. <input class="form-control" />');
    }
  }
  render() {
    return h(Host, null, h("div", { class: "group group-start" }, h("slot", { name: "input-start" })), h("slot", null), h("div", { class: "group group-end" }, h("slot", { name: "input-end" })));
  }
  get host() {
    return getElement(this);
  }
};
InputGroup.style = inputGroupCss;
export {
  InputGroup as ix_input_group
};

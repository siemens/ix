import { r as registerInstance, h, H as Host, g as getElement } from "./index.85f40dc5.js";
const inputGroupCss = ":host{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}:host *,:host *::after,:host *::before{box-sizing:border-box}:host .group{display:flex;position:absolute;align-items:center;height:100%}:host .group-start{left:0px;height:2rem;margin-left:0.375rem}:host .group-end{right:0px;height:2rem;margin-right:0.375rem}:host ::slotted(*){display:flex}";
const InputGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidRender() {
    let paddingRight = 15;
    let paddingLeft = 15;
    this.hostElement.querySelectorAll('[slot="input-end"]').forEach((item) => {
      item.classList.add("input-group-label");
      paddingRight += item.getBoundingClientRect().width;
    });
    this.hostElement.querySelectorAll('[slot="input-start"]').forEach((item) => {
      item.classList.add("input-group-label");
      paddingLeft += item.getBoundingClientRect().width;
    });
    const inputElement = this.hostElement.querySelector("input.form-control");
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
  get hostElement() {
    return getElement(this);
  }
};
InputGroup.style = inputGroupCss;
export {
  InputGroup as ix_input_group
};

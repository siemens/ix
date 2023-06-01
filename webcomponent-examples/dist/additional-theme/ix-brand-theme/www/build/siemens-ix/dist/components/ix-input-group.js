import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const inputGroupCss = ".sc-ix-input-group-h{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.sc-ix-input-group-h .group.sc-ix-input-group{display:flex;position:absolute;align-items:center;height:100%}.sc-ix-input-group-h .group-start.sc-ix-input-group{left:0px}.sc-ix-input-group-h .group-end.sc-ix-input-group{right:0px}";

const InputGroup = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
    return (h(Host, null, h("div", { class: "group group-start" }, h("slot", { name: "input-start" })), h("slot", null), h("div", { class: "group group-end" }, h("slot", { name: "input-end" }))));
  }
  get host() { return this; }
  static get style() { return inputGroupCss; }
}, [6, "ix-input-group"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-input-group"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-input-group":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InputGroup);
      }
      break;
  } });
}

const IxInputGroup = InputGroup;
const defineCustomElement = defineCustomElement$1;

export { IxInputGroup, defineCustomElement };

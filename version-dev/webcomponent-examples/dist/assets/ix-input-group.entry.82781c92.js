import { r as registerInstance, h, H as Host, g as getElement } from "./index.8f02b398.js";
import { g as getSlottedElements } from "./shadow-dom-6860b1c4.3ef97993.js";
const inputGroupCss = ":host{position:relative;display:flex;width:100%;flex-wrap:wrap;align-items:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host .group{display:flex;position:absolute;align-items:center;height:100%}:host .group-start{left:0px;height:2rem;margin-left:0.375rem;color:var(--theme-color-soft-text)}:host .group-end{right:0px;height:2rem;margin-right:0.375rem;color:var(--theme-color-soft-text)}:host ::slotted(*){display:flex}";
const InputGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputPaddingLeft = 0;
    this.inputPaddingRight = 0;
  }
  get inputElement() {
    return this.hostElement.querySelector("input");
  }
  componentWillLoad() {
    var _a;
    const { valid } = this.inputElement.validity;
    this.inputElement.addEventListener("valid", () => {
      this.onValidInput();
    });
    this.inputElement.addEventListener("invalid", () => {
      this.onInvalidInput();
    });
    this.inputElement.addEventListener("input", () => {
      this.startSlotChanged();
    });
    (_a = this.inputElement.form) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", () => {
      this.startSlotChanged();
    });
    valid ? this.onValidInput() : this.onInvalidInput();
  }
  componentDidRender() {
    this.prepareInputElement();
  }
  onValidInput() {
    this.startSlotChanged();
  }
  onInvalidInput() {
    this.startSlotChanged();
  }
  prepareInputElement() {
    if (this.inputElement) {
      this.inputElement.style.width = "100%";
      if (this.inputPaddingRight !== 0) {
        this.inputElement.style.paddingRight = this.inputPaddingRight + "px";
      } else {
        this.inputElement.style.paddingRight = "none";
      }
      if (this.inputPaddingLeft !== 0) {
        this.inputElement.style.paddingLeft = this.inputPaddingLeft + "px";
      } else {
        this.inputElement.style.paddingLeft = "none";
      }
    } else {
      console.warn('You used the ix-input-group without an input tag, e.g. <input class="form-control" />');
    }
  }
  startSlotChanged() {
    var _a, _b;
    const slot = this.hostElement.shadowRoot.querySelector('slot[name="input-start"]');
    const startPadding = this.getChildrenWidth(slot);
    if (startPadding !== 0) {
      this.inputPaddingLeft = 15 + startPadding;
    }
    if (!this.inputElement) {
      return;
    }
    if ((((_a = this.inputElement.form) === null || _a === void 0 ? void 0 : _a.classList.contains("was-validated")) || ((_b = this.inputElement.form) === null || _b === void 0 ? void 0 : _b.noValidate) === false) && !this.inputElement.validity.valid) {
      this.inputElement.style.backgroundPositionX = `${this.inputPaddingLeft}px`;
      this.inputPaddingLeft += 32;
    }
  }
  endSlotChanged() {
    const slot = this.hostElement.shadowRoot.querySelector('slot[name="input-end"]');
    this.inputPaddingRight = 15 + this.getChildrenWidth(slot);
  }
  getChildrenWidth(slotElement) {
    if (!slotElement) {
      return 0;
    }
    const endElements = getSlottedElements(slotElement);
    if (endElements.length === 0) {
      return 0;
    }
    let width = 0;
    endElements.forEach((element) => {
      width += element.getBoundingClientRect().width;
    });
    return width;
  }
  render() {
    return h(Host, null, h("div", { class: "group group-start" }, h("slot", { name: "input-start", onSlotchange: () => this.startSlotChanged() })), h("slot", null), h("div", { class: "group group-end" }, h("slot", { name: "input-end", onSlotchange: () => this.endSlotChanged() })));
  }
  get hostElement() {
    return getElement(this);
  }
};
InputGroup.style = inputGroupCss;
export {
  InputGroup as ix_input_group
};

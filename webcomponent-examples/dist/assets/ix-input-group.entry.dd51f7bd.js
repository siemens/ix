import { r as registerInstance, h, H as Host, g as getElement } from "./global.00f6d77e.js";
import { g as getSlottedElements } from "./shadow-dom-cc0bc152.fe0cdd32.js";
const inputGroupCss = ":host{position:relative;display:flex;width:100%;flex-wrap:wrap;align-items:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .group{display:flex;position:absolute;align-items:center;height:100%}:host .group-start{left:0px;height:2rem;margin-left:0.5rem;color:var(--theme-color-soft-text)}:host .group-end{right:0px;height:2rem;margin-right:0.5rem;color:var(--theme-color-soft-text)}:host ::slotted(*){display:flex}:host(.disabled){pointer-events:none}:host(.disabled) .group-start ::slotted(*),:host(.disabled) .group-end ::slotted(*){opacity:0.4 !important}";
const IxInputGroupStyle0 = inputGroupCss;
const InputGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.disabled = false;
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
    this.observer = new MutationObserver(() => {
      this.slotChanged();
      this.startSlotChanged();
      this.endSlotChanged();
    });
    this.observer.observe(this.hostElement, {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true
    });
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
        this.inputElement.style.paddingRight = "0.5rem";
      }
      if (this.inputPaddingLeft !== 0) {
        this.inputElement.style.paddingLeft = this.inputPaddingLeft + "px";
      } else {
        this.inputElement.style.paddingLeft = "0.5rem";
      }
    } else {
      console.warn('You used the ix-input-group without an input tag, e.g. <input class="form-control" />');
    }
  }
  slotChanged() {
    var _a;
    this.disabled = (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.disabled;
  }
  startSlotChanged() {
    const slot = this.hostElement.shadowRoot.querySelector('slot[name="input-start"]');
    setTimeout(() => {
      var _a, _b;
      const startPadding = this.getChildrenWidth(slot);
      if (startPadding !== 0) {
        this.inputPaddingLeft = 11 + startPadding;
      } else {
        this.inputPaddingLeft = 0;
      }
      if (!this.inputElement) {
        return;
      }
      const isInputInvalid = !this.inputElement.validity.valid || this.inputElement.classList.contains("is-invalid");
      const formWasValidated = ((_a = this.inputElement.form) === null || _a === void 0 ? void 0 : _a.classList.contains("was-validated")) || ((_b = this.inputElement.form) === null || _b === void 0 ? void 0 : _b.noValidate) === false;
      if (formWasValidated && isInputInvalid) {
        const left = this.inputPaddingLeft !== 0 ? this.inputPaddingLeft : 7;
        this.inputElement.style.backgroundPosition = `left ${left}px center`;
        this.inputPaddingLeft += 26;
      }
    });
  }
  endSlotChanged() {
    const slot = this.hostElement.shadowRoot.querySelector('slot[name="input-end"]');
    setTimeout(() => {
      this.inputPaddingRight = 15 + this.getChildrenWidth(slot);
    });
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
    return h(Host, { key: "604ccecde3e72a8c5ff1eed248433d820ddaca17", class: { disabled: this.disabled } }, h("div", { key: "6ce2ae4b208e39806e1b8c56007284fad21d76f8", class: "group group-start" }, h("slot", { key: "742724f4b4451a95a0703475956958008be8891c", name: "input-start" })), h("slot", { key: "c1bfd62e16fbab1a74ed1c14f2eed18bfdad01f9" }), h("div", { key: "0b7a3a9990f3d8d7575d54dcb9bbadbba7c76ee8", class: "group group-end" }, h("slot", { key: "bae1040ab929585017edcbc77d2e618c688910c8", name: "input-end" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
InputGroup.style = IxInputGroupStyle0;
export {
  InputGroup as ix_input_group
};

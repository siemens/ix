import { r as registerInstance, g as getElement, h, H as Host } from "./global-C_dy4gBz.js";
import { a as getSlottedElements } from "./shadow-dom-T30VMB2R-DtdN3xF2.js";
const inputGroupCss = () => `:host{position:relative;display:flex;width:100%;flex-wrap:wrap;align-items:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .group{display:flex;position:absolute;align-items:center;height:100%}:host .group-start{left:0px;height:2rem;margin-left:0.5rem;color:var(--theme-color-soft-text)}:host .group-end{right:0px;height:2rem;margin-right:0.5rem;color:var(--theme-color-soft-text)}:host ::slotted(*){display:flex}:host(.disabled){pointer-events:none}:host(.disabled) .group-start ::slotted(*),:host(.disabled) .group-end ::slotted(*){opacity:0.4 !important}`;
const InputGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  disabled = false;
  inputPaddingLeft = 0;
  inputPaddingRight = 0;
  startSlotRef;
  endSlotRef;
  get inputElement() {
    return this.hostElement.querySelector("input");
  }
  observer;
  componentWillLoad() {
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
    this.inputElement.form?.addEventListener("submit", () => {
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
      console.warn('You used the ix-input-group without an input tag, e.g. <input class="ix-form-control" />');
    }
  }
  slotChanged() {
    this.disabled = this.inputElement?.disabled;
  }
  startSlotChanged() {
    setTimeout(() => {
      const startPadding = this.getChildrenWidth(this.startSlotRef);
      if (startPadding !== 0) {
        this.inputPaddingLeft = 11 + startPadding;
      } else {
        this.inputPaddingLeft = 0;
      }
      if (!this.inputElement) {
        return;
      }
      const isInputInvalid = !this.inputElement.validity.valid || this.inputElement.classList.contains("is-invalid");
      const formWasValidated = this.inputElement.form?.classList.contains("was-validated") || this.inputElement.form?.noValidate === false;
      if (formWasValidated && isInputInvalid) {
        const left = this.inputPaddingLeft !== 0 ? this.inputPaddingLeft : 7;
        this.inputElement.style.backgroundPosition = `left ${left}px center`;
        this.inputPaddingLeft += 26;
      }
    });
  }
  endSlotChanged() {
    setTimeout(() => {
      this.inputPaddingRight = 15 + this.getChildrenWidth(this.endSlotRef);
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
    return h(Host, { key: "43d119f4a8c2e9637160603f2e54db366dfe5a33", class: { disabled: this.disabled } }, h("div", { key: "8f7d34d76e9468002f68a6eee8506e5ecdaf7e99", class: "group group-start" }, h("slot", { key: "6fe35053f4b884c53a111fa695e64a08e06bbbf3", ref: (el) => this.startSlotRef = el, name: "input-start" })), h("slot", { key: "7102e124ca2b422643db65d18e16af164c299d6a" }), h("div", { key: "fe6b60598f3131efe23a173c122c5e21525a721d", class: "group group-end" }, h("slot", { key: "9f105659aac13b1daf0d0bb5f7bcef4dd068922e", ref: (el) => this.endSlotRef = el, name: "input-end" })));
  }
};
InputGroup.style = inputGroupCss();
export {
  InputGroup as ix_input_group
};

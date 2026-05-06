import { r as registerInstance, g as getElement, h, H as Host } from "./global-Dfa5QLOG.js";
import { a as getSlottedElements } from "./shadow-dom-BIe8Nw9M-C-dhDpq3.js";
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
    return h(Host, { key: "5d6ee21edbe2d25a5b4953b2790a307bc604484a", class: { disabled: this.disabled } }, h("div", { key: "9d5e6457764e14bb26e82580df4dce4a681080a8", class: "group group-start" }, h("slot", { key: "fdb6a3f20612f6f38ba682d681b2aaee5c52eaac", ref: (el) => this.startSlotRef = el, name: "input-start" })), h("slot", { key: "76bf5149618c2abfc59ab306b0a850eeaa11f3de" }), h("div", { key: "329517881a476dbca65a2c96597bf915af19d261", class: "group group-end" }, h("slot", { key: "d1bf31f8c760e8622a85b6de30e6531b7119d156", ref: (el) => this.endSlotRef = el, name: "input-end" })));
  }
};
InputGroup.style = inputGroupCss();
export {
  InputGroup as ix_input_group
};

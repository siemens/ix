import { r as registerInstance, h, H as Host, g as getElement } from "./global.23f98c2e.js";
import { c as createClassMutationObserver, a as checkFieldClasses } from "./validation-C3siDfPQ.31747000.js";
import { r as renderHelperText } from "./helper-text-util-BUSv2nIj.25070e14.js";
import "./index-CrTP-icT.451e0ae2.js";
const helperTextCss = ":host{display:block}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:0.25rem;margin-right:0.25rem}:host .text-icon{margin:0.125rem}:host .text-icon.invalid{color:var(--theme-helper-icon--color--invalid)}:host .text-icon.info{color:var(--theme-helper-icon--color--info)}:host .text-icon.warning{color:var(--theme-helper-icon--color--warning)}:host .text-icon.valid{color:var(--theme-helper-icon--color--valid)}";
const HelperText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.validationResults = {
      isInfo: false,
      isInvalid: false,
      isValid: false,
      isWarning: false,
      isInvalidByRequired: false
    };
    this.observer = new MutationObserver(() => this.checkForRequired());
  }
  connectedCallback() {
    this.observer.observe(window.document, {
      childList: true,
      subtree: true
    });
  }
  disconnectedCallback() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  componentWillRender() {
    this.checkForRequired();
  }
  async checkForRequired() {
    if (!this.htmlFor) {
      return;
    }
    const forElement = document.getElementById(this.htmlFor);
    if (!forElement) {
      return;
    }
    if (this.classObserver) {
      this.classObserver.destroy();
    }
    this.classObserver = createClassMutationObserver(forElement, () => {
      this.validationResults = checkFieldClasses(forElement);
    });
    this.validationResults = checkFieldClasses(forElement);
  }
  render() {
    return h(Host, { key: "f406e4120213d1d6fa4e2e68bb410e368f56942e" }, renderHelperText(Object.assign({ helperText: this.helperText, invalidText: this.invalidText, validText: this.validText, infoText: this.infoText, warningText: this.warningText }, this.validationResults)));
  }
  get hostElement() {
    return getElement(this);
  }
};
HelperText.style = helperTextCss;
export {
  HelperText as ix_helper_text
};

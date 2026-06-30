import { r as registerInstance, g as getElement, h, H as Host } from "./global-F68Qu5y3.js";
import { H as HelperText$1 } from "./helper-text-util-D0LEFZuB-B0XiTlEG.js";
import { c as createClassMutationObserver, a as checkFieldClasses } from "./validation-VVt5EFy0-BbxVucMm.js";
import "./index-DgUGsIlh-CLxQRaVd.js";
import "./a11y-C21npbUc-CU_Bg8RX.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const helperTextCss = () => `:host{display:block}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:0.25rem;margin-right:0.25rem}:host .text-icon{margin:0.125rem}:host .text-icon.invalid{color:var(--theme-helper-icon--color--invalid)}:host .text-icon.info{color:var(--theme-helper-icon--color--info)}:host .text-icon.warning{color:var(--theme-helper-icon--color--warning)}:host .text-icon.valid{color:var(--theme-helper-icon--color--valid)}`;
const HelperText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * The id of the form element that the label is associated with
   */
  htmlFor;
  /**
   * Show text below the field component
   */
  helperText;
  /**
   * Error text for the field component
   */
  invalidText;
  /**
   * Valid text for the field component
   */
  validText;
  /**
   * Info text for the field component
   */
  infoText;
  /**
   * Warning text for the field component
   */
  warningText;
  validationResults = {
    isInfo: false,
    isInvalid: false,
    isValid: false,
    isWarning: false,
    isInvalidByRequired: false
  };
  observer = new MutationObserver(() => this.checkForRequired());
  classObserver;
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
    return h(Host, { key: "5e7b64893860277b8ad4b80eaa17b1f3359a31c9" }, h(HelperText$1, {
      key: "112effb8b61c29899e23c3b43c51af79baef6420",
      helperText: this.helperText,
      invalidText: this.invalidText,
      validText: this.validText,
      infoText: this.infoText,
      warningText: this.warningText,
      ...this.validationResults
    }));
  }
};
HelperText.style = helperTextCss();
export {
  HelperText as ix_helper_text
};

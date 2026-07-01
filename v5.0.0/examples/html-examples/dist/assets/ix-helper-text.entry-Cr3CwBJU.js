import { r as registerInstance, g as getElement, h, H as Host } from "./global-C8IWpzMv.js";
import { H as HelperText$1 } from "./helper-text-util-D0LEFZuB-c5jj-ak1.js";
import { c as createClassMutationObserver, a as checkFieldClasses } from "./validation-VVt5EFy0-BqxSDzD2.js";
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
    return h(Host, { key: "ff40a51734413897b1131b5d49ba7665212b68c1" }, h(HelperText$1, {
      key: "abb7abda8cb7f72d70d1fe674a76634886682b61",
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

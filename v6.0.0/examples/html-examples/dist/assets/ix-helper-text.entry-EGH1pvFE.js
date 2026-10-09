import { r as registerInstance, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
import { H as HelperText$1 } from "./helper-text-util-DdTfMzhc-DpfegIOl.js";
import { c as createClassMutationObserver, a as checkFieldClasses } from "./validation-aas5KJBP-DcF6SYCa.js";
import "./index-BeX6RWvV-CXzUIwMU.js";
import "./a11y-DD206pTM-BiwZPW5s.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const helperTextCss = () => `@charset "UTF-8";:host{--ix-field-wrapper-icon--color--info:var(--si-sys-color-text-information);--ix-field-wrapper-icon--color--invalid:var(--si-sys-color-text-danger);--ix-field-wrapper-icon--color--valid:var(--si-sys-color-text-success);--ix-field-wrapper-icon--color--warning:var(--si-sys-color-text-warning)}:host{--ix-field-wrapper-bottom-text--gap:var(--si-sys-sizing-spacing-y-20);--ix-field-wrapper-bottom-text--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-field-wrapper-slot-wrapper--gap:var(--si-sys-sizing-spacing-y-20);--ix-field-wrapper-field-top--gap:var(--si-sys-sizing-spacing-x-60);--ix-field-wrapper-bottom-text--margin-top:var(--si-sys-sizing-spacing-y-20);--ix-field-wrapper-bottom-text--margin-bottom:var(--si-sys-sizing-spacing-y-20);--ix-field-wrapper-text-icon--margin:var(--si-sys-sizing-spacing-y-10)}:host{display:block}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:var(--ix-field-wrapper-bottom-text--gap);margin-right:var(--ix-field-wrapper-bottom-text--margin-right)}:host .text-icon{margin:var(--ix-field-wrapper-text-icon--margin)}:host .text-icon.invalid{color:var(--ix-field-wrapper-icon--color--invalid)}:host .text-icon.info{color:var(--ix-field-wrapper-icon--color--info)}:host .text-icon.warning{color:var(--ix-field-wrapper-icon--color--warning)}:host .text-icon.valid{color:var(--ix-field-wrapper-icon--color--valid)}`;
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
    return h(Host, { key: "03e1f0fe2d6b4c97d35f47a604462f97ee6ec24c" }, h(HelperText$1, {
      key: "a97f8b3aad8ee59a99e30d63d72bb608a7ac7a15",
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

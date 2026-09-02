import { r as registerInstance, g as getElement, h, H as Host } from "./global-Do6maBom.js";
import { H as HelperText$1 } from "./helper-text-util-BJ-ZMW2J-YHpT7bpD.js";
import { c as createClassMutationObserver, a as checkFieldClasses } from "./validation-DXpftrw5-Bpiv-t_k.js";
import "./index-BeX6RWvV-CXzUIwMU.js";
import "./a11y-DD206pTM-BiwZPW5s.js";
import "./index-XBTykBKS-D8xrYMLu.js";
const helperTextCss = () => `@charset "UTF-8";:host{--ix-field-wrapper-icon--color--info:var(--si-sys-text-information);--ix-field-wrapper-icon--color--invalid:var(--si-sys-text-danger);--ix-field-wrapper-icon--color--valid:var(--si-sys-text-success);--ix-field-wrapper-icon--color--warning:var(--si-sys-text-warning)}:host{display:block}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:0.25rem;margin-right:0.25rem}:host .text-icon{margin:0.125rem}:host .text-icon.invalid{color:var(--ix-field-wrapper-icon--color--invalid)}:host .text-icon.info{color:var(--ix-field-wrapper-icon--color--info)}:host .text-icon.warning{color:var(--ix-field-wrapper-icon--color--warning)}:host .text-icon.valid{color:var(--ix-field-wrapper-icon--color--valid)}`;
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
    return h(Host, { key: "b44c7b8df5a9adb36d44840bba58124bf73a7d3d" }, h(HelperText$1, {
      key: "fccd65f633c84595df1a82ef784c5f368bf988e7",
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

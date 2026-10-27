import { r as registerInstance, g as getElement, h, H as Host } from "./global-Bs2gnYtf.js";
import { H as HelperText$1 } from "./helper-text-util-DHPi0aGz-1nzWZ0g_.js";
import { c as createClassMutationObserver, b as checkFieldClasses } from "./validation-DDxO7z7S-MMAVCY4Q.js";
import "./index-Bj5Kmzp6-B1fOSLOf.js";
import "./a11y-BjBGvZyE-DCMEdep1.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
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
    return h(Host, { key: "56fad49be64f1306a95ff73a234883ce3dbf1559" }, h(HelperText$1, {
      key: "c3629e01f2d9ed5d30b1fd028b198d03a56452b8",
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

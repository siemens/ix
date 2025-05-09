import { r as registerInstance, h, H as Host, g as getElement } from "./global.7dd975c7.js";
import { c as createClassMutationObserver, a as checkFieldClasses } from "./validation-54137eaa.8ba4a3c5.js";
import { r as renderHelperText } from "./helper-text-util-e47b864d.d6cdf1b7.js";
import "./index-2b76ea55.acc6b31e.js";
const helperTextCss = ":host{display:block}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:0.25rem;margin-right:0.25rem}:host .text-icon{margin:0.125rem}:host .text-icon.invalid{color:var(--theme-helper-icon--color--invalid)}:host .text-icon.info{color:var(--theme-helper-icon--color--info)}:host .text-icon.warning{color:var(--theme-helper-icon--color--warning)}:host .text-icon.valid{color:var(--theme-helper-icon--color--valid)}";
const IxHelperTextStyle0 = helperTextCss;
const HelperText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.observer = new MutationObserver(() => this.checkForRequired());
    this.htmlFor = void 0;
    this.helperText = void 0;
    this.invalidText = void 0;
    this.validText = void 0;
    this.infoText = void 0;
    this.warningText = void 0;
    this.validationResults = {
      isInfo: false,
      isInvalid: false,
      isValid: false,
      isWarning: false,
      isInvalidByRequired: false
    };
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
    return h(Host, { key: "26c1e2ad753fca25d4095e38d9fbb646c0305db7" }, renderHelperText(Object.assign({ helperText: this.helperText, invalidText: this.invalidText, validText: this.validText, infoText: this.infoText, warningText: this.warningText }, this.validationResults)));
  }
  get hostElement() {
    return getElement(this);
  }
};
HelperText.style = IxHelperTextStyle0;
export {
  HelperText as ix_helper_text
};

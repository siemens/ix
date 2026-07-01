import { r as registerInstance, g as getElement, h, H as Host, M as Mixin } from "./global-Cx3A0XQN.js";
import { b as a11yHostAttributes } from "./a11y-C21npbUc-CU_Bg8RX.js";
import { i as isIxInputFieldComponent } from "./index-XBTykBKS-D8xrYMLu.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { c as closestPassShadow } from "./shadow-dom-BClJdFQP-DyvnXMi-.js";
import { c as createClassMutationObserver } from "./validation-VVt5EFy0-DT4pnCa-.js";
import { r as resolveTextFromValidationState, h as hasAnyText, H as HelperText$1 } from "./helper-text-util-D0LEFZuB-BIDFr6Nu.js";
import { D as DefaultMixins } from "./component-DqJSHc3A-D5InBSMm.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import "./index-DgUGsIlh-CLxQRaVd.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const fieldLabelCss = () => `:host{display:inline-block;position:relative;margin-top:0.5rem;margin-bottom:0.25rem}:host(.text-overflow-no-wrap){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(.text-overflow-no-wrap) ix-typography{text-overflow:ellipsis;overflow:hidden}`;
const FormFieldLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * A value is required or must be checked for the form to be submittable
   */
  required;
  /**
   * The id of the form element that the label is associated with
   */
  htmlFor;
  /** @internal */
  controlRef;
  /** @internal */
  isInvalid = false;
  textOverflow = "wrap";
  explicitIsInvalid = void 0;
  isInvalidChanged(newValue) {
    this.explicitIsInvalid = newValue;
  }
  htmlForObserver = new MutationObserver(() => this.checkForInternalState());
  htmlForClassObserver;
  controlRefClassObserver;
  a11yAttributes = {};
  labelRef = makeRef();
  connectedCallback() {
    this.registerHtmlForObserver();
    this.registerControlRefObserver();
  }
  disconnectedCallback() {
    if (this.htmlForObserver) {
      this.htmlForObserver.disconnect();
    }
    if (this.htmlForClassObserver) {
      this.htmlForClassObserver.destroy();
    }
    if (this.controlRefClassObserver) {
      this.controlRefClassObserver.destroy();
    }
  }
  componentWillRender() {
    this.checkForInternalState();
    if (closestPassShadow(this.hostElement, "ix-range-field")) {
      this.textOverflow = "no-wrap";
    }
  }
  componentWillLoad() {
    this.a11yAttributes = a11yHostAttributes(this.hostElement);
  }
  registerHtmlForObserver() {
    if (typeof window === "undefined") {
      return;
    }
    if (this.htmlForObserver) {
      this.htmlForObserver.disconnect();
    }
    if (this.htmlFor) {
      this.htmlForObserver.observe(window.document, {
        childList: true,
        subtree: true
      });
    }
  }
  async registerControlRefObserver() {
    if (typeof window === "undefined") {
      return;
    }
    if (this.controlRefClassObserver) {
      this.controlRefClassObserver.destroy();
    }
    if (this.controlRef && !this.htmlFor) {
      const input = await this.controlRef.waitForCurrent();
      this.controlRefClassObserver = createClassMutationObserver(input, () => this.checkForInvalidState(input));
    }
  }
  registerHtmlForClassObserver(forElement) {
    if (this.htmlForClassObserver) {
      this.htmlForClassObserver.destroy();
    }
    this.htmlForClassObserver = createClassMutationObserver(forElement, () => this.checkForInvalidState(forElement));
  }
  checkForInvalidState(elementToCheck) {
    const hasInvalidClass = elementToCheck.classList.contains("is-invalid") || elementToCheck.classList.contains("ix-invalid");
    this.isInvalid = this.explicitIsInvalid ?? hasInvalidClass;
  }
  async checkForInternalState() {
    if (this.htmlFor) {
      const forElement = document.getElementById(this.htmlFor);
      if (forElement) {
        if (typeof forElement.required === "boolean") {
          this.required = forElement.required;
        }
        this.registerHtmlForClassObserver(forElement);
        this.checkForInvalidState(forElement);
        return;
      }
    }
    if (this.controlRef) {
      const input = await this.controlRef.waitForCurrent();
      this.required = input.required;
    }
  }
  async focusOnClick() {
    if (this.htmlFor) {
      const target = document.getElementById(this.htmlFor);
      if (target) {
        let input = null;
        if (isIxInputFieldComponent(target)) {
          input = await target.getNativeInputElement();
        } else {
          input = target;
        }
        if (typeof input.focus === "function") {
          input.focus();
        }
      }
    }
    if (this.controlRef) {
      (await this.controlRef.waitForCurrent()).focus();
    }
  }
  render() {
    return h(Host, { key: "16fc362d5e6d877a5c7b00e98dcdbcf042bbc800", onClick: () => this.focusOnClick(), class: {
      "text-overflow-wrap": this.textOverflow === "wrap",
      "text-overflow-no-wrap": this.textOverflow === "no-wrap"
    } }, h("label", { key: "eca00819ab93bf23894999f43cf3bac2d66b22ce", htmlFor: this.htmlFor, ...this.a11yAttributes, ref: this.labelRef }, h("ix-typography", { key: "ddb96f565db7ab86f5484c7076f1cfb7f0319e1b", textColor: this.isInvalid ? "alarm" : "soft", format: "label" }, h("slot", { key: "7a65409da7bb762422465df9c1094c599bedac20" }), this.required && h("span", { key: "0a773f0ebd6f1a7baca020be8b668340ef06b12c" }, "*"))));
  }
  static get watchers() {
    return {
      "isInvalid": [{
        "isInvalidChanged": 0
      }],
      "htmlFor": [{
        "registerHtmlForObserver": 0
      }],
      "controlRef": [{
        "registerControlRefObserver": 0
      }]
    };
  }
};
FormFieldLabel.style = fieldLabelCss();
const fieldWrapperCss = () => `:host{display:flex;position:relative;flex-direction:column}:host .slot-wrapper{display:flex;position:relative;align-items:center;justify-content:flex-start;gap:0.25rem}:host .field-bottom,:host .field-top{display:flex;flex-direction:row;position:relative;justify-content:space-between;gap:1rem;width:100%;min-width:100%}:host .field-bottom .bottom-right{margin-left:auto;margin-right:0px}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:0.25rem;margin-right:0.25rem}:host .text-icon{margin:0.125rem}:host .text-icon.invalid{color:var(--theme-helper-icon--color--invalid)}:host .text-icon.info{color:var(--theme-helper-icon--color--info)}:host .text-icon.warning{color:var(--theme-helper-icon--color--warning)}:host .text-icon.valid{color:var(--theme-helper-icon--color--valid)}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}`;
const FieldWrapper = class extends Mixin(...DefaultMixins, ComponentIdMixin) {
  constructor(hostRef) {
    super();
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Show text below the field component
   */
  helperText;
  /**
   * Label for the field component
   */
  label;
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
  /**
   * Is the field component invalid
   */
  isInvalid = false;
  /**
   * Is the field component valid
   */
  isValid = false;
  /**
   * Is the field component info
   */
  isInfo = false;
  /**
   * Is the field component warning
   */
  isWarning = false;
  /**
   * Show helper, error, info, warning text as tooltip
   */
  showTextAsTooltip = false;
  /**
   * Show label as required
   */
  required = false;
  /**
   * The control element that the label is associated with
   */
  controlRef;
  slotRef = makeRef();
  hasExplicitAriaLabel = false;
  componentDidLoad() {
    this.syncAriaLabel(true);
  }
  syncAriaLabel(initialSync = false) {
    if (!this.controlRef || this.hasExplicitAriaLabel) {
      return;
    }
    this.controlRef.waitForCurrent().then((el) => {
      if (initialSync && (el.hasAttribute("aria-label") || el.hasAttribute("aria-labelledby"))) {
        this.hasExplicitAriaLabel = true;
        return;
      }
      if (this.label) {
        el.setAttribute("aria-label", this.label);
      } else {
        el.removeAttribute("aria-label");
      }
    });
  }
  componentWillLoad() {
    if (!this.hostElement.querySelector(".error-message-container")) {
      const errorMessageContainer = document.createElement("span");
      errorMessageContainer.classList.add("error-message-container");
      errorMessageContainer.id = `${this.getHostElementId()}-errormessage`;
      errorMessageContainer.hidden = true;
      this.hostElement.appendChild(errorMessageContainer);
    }
    if (!this.hostElement.querySelector(".helper-message-container")) {
      const helperMessageContainer = document.createElement("span");
      helperMessageContainer.classList.add("helper-message-container");
      helperMessageContainer.id = `${this.getHostElementId()}-helpermessage`;
      helperMessageContainer.hidden = true;
      this.hostElement.appendChild(helperMessageContainer);
    }
  }
  componentWillRender() {
    const errorMessageElement = this.hostElement.querySelector(`#${this.getHostElementId()}-errormessage`);
    const helperMessageElement = this.hostElement.querySelector(`#${this.getHostElementId()}-helpermessage`);
    if (this.isInvalid && this.invalidText && errorMessageElement) {
      errorMessageElement.textContent = this.invalidText;
    }
    if (helperMessageElement) {
      helperMessageElement.textContent = resolveTextFromValidationState({
        isInvalid: this.isInvalid,
        invalidText: this.invalidText,
        isWarning: this.isWarning,
        warningText: this.warningText,
        isInfo: this.isInfo,
        infoText: this.infoText,
        isValid: this.isValid,
        validText: this.validText,
        helperText: this.helperText
      });
    }
  }
  /** @internal */
  getAriaErrorMessageElement() {
    return Promise.resolve(this.hostElement.querySelector(`#${this.getHostElementId()}-errormessage`));
  }
  /** @internal */
  getAriaHelperMessageElement() {
    return Promise.resolve(this.hostElement.querySelector(`#${this.getHostElementId()}-helpermessage`));
  }
  render() {
    const textOptions = {
      invalidText: this.invalidText,
      isInvalid: this.isInvalid,
      isValid: this.isValid,
      validText: this.validText,
      isWarning: this.isWarning,
      warningText: this.warningText,
      isInfo: this.isInfo,
      infoText: this.infoText,
      helperText: this.helperText
    };
    let additionalAriaAttributes = {};
    if (this.isInvalid && this.invalidText) {
      additionalAriaAttributes = {
        role: "alert",
        "aria-live": "polite"
      };
    }
    return h(Host, { key: "9a9bdfa46dff5004bf48a2b5c7bb16fa1d2f5854", ...additionalAriaAttributes }, this.label && h("div", { key: "d19fdc7157392bfcefe060293ccaf9aaed086371", class: "field-top" }, h("ix-field-label", { key: "51a1397888302a77a2612d216e12d25f9bb86a8d", required: this.required, controlRef: this.controlRef, isInvalid: this.isInvalid, ariaHidden: true }, this.label)), h("div", { key: "c4ce620437d884f70307555a1904052b330b7b40", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "2f16377fe98dfdb5de19d3031cd34a0a92fd3fe3" })), h("div", { key: "07e602af8a92ab0ea47b3cf0661d88f89b16813d", class: "field-bottom" }, !this.showTextAsTooltip && h(HelperText$1, { key: "f8d9148d63be696a177b91f93d4e40d3123503ec", ...textOptions }), h("div", { key: "68dbe1a7fafb3f118cbc5054ed968568780b5e4f", class: "bottom-right" }, h("slot", { key: "7ab9a181a98964a70b315782fb4dbafae2e28347", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "0270fae20246c5f880b007ced1af67f6595a5cd6", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, h(HelperText$1, { key: "eb93d07fdf4cbd1bf7b61314e215b64c022c6de9", ...textOptions })));
  }
  static get watchers() {
    return {
      "label": [{
        "syncAriaLabel": 0
      }]
    };
  }
};
FieldWrapper.style = fieldWrapperCss();
export {
  FormFieldLabel as ix_field_label,
  FieldWrapper as ix_field_wrapper
};

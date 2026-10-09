import { r as registerInstance, g as getElement, h, H as Host, M as Mixin } from "./global-CU4RCWGK.js";
import { c as a11yHostAttributes } from "./a11y-DD206pTM-BiwZPW5s.js";
import { i as isIxInputFieldComponent } from "./index-XBTykBKS-D8xrYMLu.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { c as closestPassShadow } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import { c as createClassMutationObserver } from "./validation-aas5KJBP-DcF6SYCa.js";
import { r as resolveTextFromValidationState, h as hasAnyText, H as HelperText$1 } from "./helper-text-util-DdTfMzhc-DpfegIOl.js";
import { D as DefaultMixins } from "./component-BP5Ot-Ed-DlnqSJRp.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import "./index-BeX6RWvV-CXzUIwMU.js";
import "./focus-utilities-6ZxKp7Jn-D8qr1Jms.js";
const fieldLabelCss = () => `@charset "UTF-8";:host{--ix-field-label--margin-top:var(--si-sys-sizing-spacing-y-40);--ix-field-label--margin-bottom:var(--si-sys-sizing-spacing-y-20)}:host{display:inline-block;position:relative;margin-top:var(--ix-field-label--margin-top);margin-bottom:var(--ix-field-label--margin-bottom)}:host(.text-overflow-no-wrap){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}:host(.text-overflow-no-wrap) ix-typography{text-overflow:ellipsis;overflow:hidden}`;
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
    return h(Host, { key: "2a48817be559ff6f34ec8235a36652cf8e8f9009", onClick: () => this.focusOnClick(), class: {
      "text-overflow-wrap": this.textOverflow === "wrap",
      "text-overflow-no-wrap": this.textOverflow === "no-wrap"
    } }, h("label", { key: "9dff53d9182bee139c82805897edbca6ef90902a", htmlFor: this.htmlFor, ...this.a11yAttributes, ref: this.labelRef }, h("ix-typography", { key: "9e5f256634e400706743d144384ae07787b6ca5f", textColor: this.isInvalid ? "alarm" : "soft", format: "body" }, h("slot", { key: "b74aa000ff0ec88a495a343177085ab91d889740" }), this.required && h("span", { key: "c3b91d479cd89714b62712438141d14a2bbd9c54" }, "*"))));
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
const fieldWrapperCss = () => `@charset "UTF-8";:host{--ix-field-wrapper-icon--color--info:var(--si-sys-color-text-information);--ix-field-wrapper-icon--color--invalid:var(--si-sys-color-text-danger);--ix-field-wrapper-icon--color--valid:var(--si-sys-color-text-success);--ix-field-wrapper-icon--color--warning:var(--si-sys-color-text-warning)}:host{--ix-field-wrapper-bottom-text--gap:var(--si-sys-sizing-spacing-y-20);--ix-field-wrapper-bottom-text--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-field-wrapper-slot-wrapper--gap:var(--si-sys-sizing-spacing-y-20);--ix-field-wrapper-field-top--gap:var(--si-sys-sizing-spacing-x-60);--ix-field-wrapper-bottom-text--margin-top:var(--si-sys-sizing-spacing-y-20);--ix-field-wrapper-bottom-text--margin-bottom:var(--si-sys-sizing-spacing-y-20);--ix-field-wrapper-text-icon--margin:var(--si-sys-sizing-spacing-y-10)}:host{display:flex;position:relative;flex-direction:column}:host .slot-wrapper{display:flex;position:relative;align-items:center;justify-content:flex-start;gap:var(--ix-field-wrapper-slot-wrapper--gap)}:host .field-bottom,:host .field-top{display:flex;flex-direction:row;position:relative;justify-content:space-between;gap:var(--ix-field-wrapper-field-top--gap);width:100%;min-width:100%}:host .field-bottom .bottom-right{margin-left:auto;margin-right:0}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:var(--ix-field-wrapper-bottom-text--gap);margin-right:var(--ix-field-wrapper-bottom-text--margin-right)}:host .text-icon{margin:var(--ix-field-wrapper-text-icon--margin)}:host .text-icon.invalid{color:var(--ix-field-wrapper-icon--color--invalid)}:host .text-icon.info{color:var(--ix-field-wrapper-icon--color--info)}:host .text-icon.warning{color:var(--ix-field-wrapper-icon--color--warning)}:host .text-icon.valid{color:var(--ix-field-wrapper-icon--color--valid)}:host .bottom-text{margin-top:var(--ix-field-wrapper-bottom-text--margin-top);margin-bottom:var(--ix-field-wrapper-bottom-text--margin-bottom)}`;
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
    return h(Host, { key: "433006cd634679b5bb9512368fede3cdedfbe6ee", ...additionalAriaAttributes }, this.label && h("div", { key: "170bc294186028914cc6deb050003e64bedeb0b2", class: "field-top" }, h("ix-field-label", { key: "397f3a158c0ef9fa86410fc3eea63640435621dd", required: this.required, controlRef: this.controlRef, isInvalid: this.isInvalid, ariaHidden: true }, this.label)), h("div", { key: "55fbe3637407fdb12d14debde2a66a25d65edbda", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "77bee91bbfa42fcaa53f76002a77869c1ff339e0" })), h("div", { key: "90e7a41330a4469e529e9fec5d478ed0c473dd23", class: "field-bottom" }, !this.showTextAsTooltip && h(HelperText$1, { key: "b82b2d269b5cfd49fa6627b643fa19658b13bfff", ...textOptions }), h("div", { key: "3f791c827948619e5989e54ad48e39745dffef96", class: "bottom-right" }, h("slot", { key: "907798f6c83096299a7337032e5cc9016146158f", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "1fbe236f6635814079451ac9c13692d8cd1b662b", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, h(HelperText$1, { key: "2a3fe2153678bfd11b9c14e8a85500dfc1306572", ...textOptions })));
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

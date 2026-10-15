import { r as registerInstance, g as getElement, h, H as Host, M as Mixin } from "./global-D3pEBlWT.js";
import { c as a11yHostAttributes } from "./a11y-DD206pTM-BiwZPW5s.js";
import { i as isIxInputFieldComponent } from "./index-XBTykBKS-D8xrYMLu.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { c as closestPassShadow } from "./shadow-dom-C7UpA3Tm-CtINZypD.js";
import { c as createClassMutationObserver } from "./validation-_kfY2Dbc-BdovG2bg.js";
import { r as resolveTextFromValidationState, h as hasAnyText, H as HelperText$1 } from "./helper-text-util--Is-e51g-CBYku5Re.js";
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
    return h(Host, { key: "0afcc3936c25187468d445cc507ed49f12f5a7d1", onClick: () => this.focusOnClick(), class: {
      "text-overflow-wrap": this.textOverflow === "wrap",
      "text-overflow-no-wrap": this.textOverflow === "no-wrap"
    } }, h("label", { key: "3e869bbf19bfa2bfb29bb046ae13846f4bcc531d", htmlFor: this.htmlFor, ...this.a11yAttributes, ref: this.labelRef }, h("ix-typography", { key: "d854b0d78fd4ee21c1662fd4d39e3005ba707c98", textColor: this.isInvalid ? "alarm" : "soft", format: "body" }, h("slot", { key: "cfc61c63e086408313ba138c58fa8b13ed1dece5" }), this.required && h("span", { key: "71c22f6295a187170acb11f05aa8fa200ce7968b" }, "*"))));
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
    return h(Host, { key: "abc0f73f3d51ff6a3feff86428fd697e3d88c459", ...additionalAriaAttributes }, this.label && h("div", { key: "1febbd90e9b3e551e3349ed092c931af85e9b385", class: "field-top" }, h("ix-field-label", { key: "737ad82aebd5011884fec5e9b292b6985d4c0d31", required: this.required, controlRef: this.controlRef, isInvalid: this.isInvalid, ariaHidden: true }, this.label)), h("div", { key: "a7a1c58c0166c8b74af0b5ece5c6d95e84b80806", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "b900bf94888319b1b6d3b4c78534a19fbd132bfe" })), h("div", { key: "ae2af6024579b72c96c19ce9e41b07f71da81c6d", class: "field-bottom" }, !this.showTextAsTooltip && h(HelperText$1, { key: "8232367adbddf332fa372eefa89e2aa94fa3f668", ...textOptions }), h("div", { key: "496e5defa5a461145031bd6147ff1e82d665fccd", class: "bottom-right" }, h("slot", { key: "f57a3d80b2c6b86a3e41b14b49c637dde20ed44b", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "d9436a0c19465ed62645da1d0f15ae7a02233787", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, h(HelperText$1, { key: "5bcd14f0ab826039a2b35f0586325cca44833247", ...textOptions })));
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

import { r as registerInstance, g as getElement, h, H as Host, M as Mixin } from "./index-CgUi6DzV-DGToXfDo.js";
import { b as a11yHostAttributes } from "./a11y-BjBGvZyE-CRtX0AHd.js";
import { i as isIxInputFieldComponent } from "./index-XBTykBKS-D8xrYMLu.js";
import { m as makeRef } from "./make-ref-Djkc69iv-BpP6uHEs.js";
import { c as closestPassShadow } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import { c as createClassMutationObserver } from "./validation-Di-_grhN-DZzKeUmf.js";
import { r as resolveTextFromValidationState, h as hasAnyText, H as HelperText$1 } from "./helper-text-util-CIrNElJk-CurssTMM.js";
import { D as DefaultMixins } from "./component-CxWIPGez-55aCZ0ep.js";
import { C as ComponentIdMixin } from "./id.mixin-CUbYLenp-DR0VgaO1.js";
import "./preload-helper-UZRgTS1n.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./index-CZ_u3Y0s-B1dE3kOK.js";
import "./focus-utilities-6ZxKp7Jn-DqvT-65C.js";
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
    return h(Host, { key: "d40d9f1d213763826324e7afbfc710b87c452d11", onClick: () => this.focusOnClick(), class: {
      "text-overflow-wrap": this.textOverflow === "wrap",
      "text-overflow-no-wrap": this.textOverflow === "no-wrap"
    } }, h("label", { key: "738e003df132d53ab024577fabb9f7665504a36a", htmlFor: this.htmlFor, ...this.a11yAttributes, ref: this.labelRef }, h("ix-typography", { key: "e22c4b1f3edc9d9304a513201defeb2cd041da07", textColor: this.isInvalid ? "danger" : "secondary", format: "body" }, h("slot", { key: "83e7b0603388b1d0fedb793db95bef3cd564990a" }), this.required && h("span", { key: "1ca74020cdc87a334b4610d0111012310f5b5a4e" }, "*"))));
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
const fieldWrapperCss = () => `@charset "UTF-8";:host{--ix-field-wrapper-icon--color--info:var(--si-sys-color-background-information);--ix-field-wrapper-icon--color--invalid:var(--si-sys-color-background-danger);--ix-field-wrapper-icon--color--valid:var(--si-sys-color-background-success);--ix-field-wrapper-icon--color--warning:var(--si-sys-color-background-warning)}:host{--ix-field-wrapper-bottom-text--gap:var(--si-sys-sizing-spacing-y-20);--ix-field-wrapper-bottom-text--margin-right:var(--si-sys-sizing-spacing-x-20);--ix-field-wrapper-slot-wrapper--gap:var(--si-sys-sizing-spacing-y-20);--ix-field-wrapper-field-top--gap:var(--si-sys-sizing-spacing-x-60);--ix-field-wrapper-bottom-text--margin-top:var(--si-sys-sizing-spacing-y-20);--ix-field-wrapper-bottom-text--margin-bottom:var(--si-sys-sizing-spacing-y-20);--ix-field-wrapper-text-icon--margin:var(--si-sys-sizing-spacing-y-10)}:host{display:flex;position:relative;flex-direction:column}:host .slot-wrapper{display:flex;position:relative;align-items:center;justify-content:flex-start;gap:var(--ix-field-wrapper-slot-wrapper--gap)}:host .field-bottom,:host .field-top{display:flex;flex-direction:row;position:relative;justify-content:space-between;gap:var(--ix-field-wrapper-field-top--gap);width:100%;min-width:100%}:host .field-bottom .bottom-right{margin-left:auto;margin-right:0}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:var(--ix-field-wrapper-bottom-text--gap);margin-right:var(--ix-field-wrapper-bottom-text--margin-right)}:host .text-icon{margin:var(--ix-field-wrapper-text-icon--margin)}:host .text-icon.invalid{color:var(--ix-field-wrapper-icon--color--invalid)}:host .text-icon.info{color:var(--ix-field-wrapper-icon--color--info)}:host .text-icon.warning{color:var(--ix-field-wrapper-icon--color--warning)}:host .text-icon.valid{color:var(--ix-field-wrapper-icon--color--valid)}:host .bottom-text{margin-top:var(--ix-field-wrapper-bottom-text--margin-top);margin-bottom:var(--ix-field-wrapper-bottom-text--margin-bottom)}`;
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
  errorMessageElement;
  helperMessageElement;
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
    this.errorMessageElement = this.getOrCreateMessageContainer("error-message-container", "errormessage");
    this.helperMessageElement = this.getOrCreateMessageContainer("helper-message-container", "helpermessage");
  }
  /**
   * Keep direct references to the message containers instead of querying them
   * by ID, because consumer IDs are not valid CSS selectors in general.
   */
  getOrCreateMessageContainer(className, idSuffix) {
    const existing = this.hostElement.querySelector(`.${className}`);
    if (existing) {
      return existing;
    }
    const container = document.createElement("span");
    container.classList.add(className);
    container.id = `${this.getHostElementId()}-${idSuffix}`;
    container.hidden = true;
    this.hostElement.appendChild(container);
    return container;
  }
  componentWillRender() {
    const { errorMessageElement, helperMessageElement } = this;
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
    return Promise.resolve(this.errorMessageElement ?? null);
  }
  /** @internal */
  getAriaHelperMessageElement() {
    return Promise.resolve(this.helperMessageElement ?? null);
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
    return h(Host, { key: "9eeb26e659312669bd36afc063aa771d6897f8c9", ...additionalAriaAttributes }, this.label && h("div", { key: "906817c4cd248b6a544cdafd6afd7592a47d9ecf", class: "field-top" }, h("ix-field-label", { key: "13ff14a5294932deba75e4576231ce94878ab363", required: this.required, controlRef: this.controlRef, isInvalid: this.isInvalid, ariaHidden: true }, this.label)), h("div", { key: "703fa094537918ae37a06ce476c4f8aa2966a0ef", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "b30009d879923e281f5e4777958ba76e6a4f2d95" })), h("div", { key: "11353a381af1f58d6f30b7fd4e6d0c1105c1a897", class: "field-bottom" }, !this.showTextAsTooltip && h(HelperText$1, { key: "3c8fa7cf68359360197c7a1af60d6358d7946698", ...textOptions }), h("div", { key: "c95ddc5137cd2a1dab191475daedb890ff1e449b", class: "bottom-right" }, h("slot", { key: "853d4c394931bc5541a52b57ede41c8ab4f8a0a4", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "8d758204a0feb196b04eaaa72c1934c484c97005", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, h(HelperText$1, { key: "be217eb5528201d29112e064e7eeacfbe734d12e", ...textOptions })));
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

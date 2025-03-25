import { r as registerInstance, h, H as Host, g as getElement } from "./global.23f98c2e.js";
import { b as a11yHostAttributes } from "./a11y-Bb7pDeaQ.1f74cdb9.js";
import { m as makeRef } from "./make-ref-bcj7UEIC.8e199155.js";
import { c as createClassMutationObserver } from "./validation-C3siDfPQ.31747000.js";
import { h as hasAnyText, r as renderHelperText } from "./helper-text-util-BUSv2nIj.25070e14.js";
import "./index-CrTP-icT.451e0ae2.js";
function isIxInputFieldComponent(obj) {
  return obj && "getAssociatedFormElement" in obj && typeof obj.getAssociatedFormElement === "function" && "getNativeInputElement" in obj && typeof obj.getNativeInputElement === "function";
}
const fieldLabelCss = ":host{display:inline-block;position:relative;margin-top:0.5rem;margin-bottom:0.25rem}";
const FormFieldLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isInvalid = false;
    this.htmlForObserver = new MutationObserver(() => this.checkForInternalState());
    this.a11yAttributes = {};
    this.labelRef = makeRef();
  }
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
    if (this.controlRef) {
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
    this.isInvalid = elementToCheck.classList.contains("is-invalid") || elementToCheck.classList.contains("ix-invalid");
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
    return h(Host, { key: "4b00ea62a90eae362b7236d82a08f031c075c10d", onClick: () => this.focusOnClick() }, h("label", Object.assign({ key: "1c3e406baa6b6414cacf17961279bcd7ad1545ca", htmlFor: this.htmlFor }, this.a11yAttributes, { ref: this.labelRef }), h("ix-typography", { key: "54c5e7cbd6c505edbe2c37a20ecbecd91deb441b", textColor: this.isInvalid ? "alarm" : "soft", format: "label" }, h("slot", { key: "9638a38954088cff1cd539f1b49ef70778b4ff21" }), this.required && h("span", { key: "b30063403d1e99121191ce945665781cba7ba34b" }, "\xA0*"))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "htmlFor": ["registerHtmlForObserver"],
      "controlRef": ["registerControlRefObserver"]
    };
  }
};
FormFieldLabel.style = fieldLabelCss;
const fieldWrapperCss = ":host{display:flex;position:relative;flex-direction:column}:host .slot-wrapper{display:flex;position:relative;align-items:center;justify-content:flex-start;gap:0.25rem}:host .field-bottom,:host .field-top{display:flex;flex-direction:row;position:relative;justify-content:space-between;gap:1rem;width:-moz-min-content;width:min-content;min-width:100%}:host .field-bottom .bottom-right{margin-left:auto;margin-right:0px}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:0.25rem;margin-right:0.25rem}:host .text-icon{margin:0.125rem}:host .text-icon.invalid{color:var(--theme-helper-icon--color--invalid)}:host .text-icon.info{color:var(--theme-helper-icon--color--info)}:host .text-icon.warning{color:var(--theme-helper-icon--color--warning)}:host .text-icon.valid{color:var(--theme-helper-icon--color--valid)}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}";
const FieldWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isInvalid = false;
    this.isValid = false;
    this.isInfo = false;
    this.isWarning = false;
    this.showTextAsTooltip = false;
    this.required = false;
    this.slotRef = makeRef();
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
    return h(Host, { key: "2dd925820a3b4fa7529956e90ad8df1268bd59d9" }, this.label && h("div", { key: "f70725574cea826e7c541a95de2a0d373fcb67f7", class: "field-top" }, h("ix-field-label", { key: "b589dc77ba975991962c4e53e6344bc4bf5ececb", required: this.required, htmlFor: this.htmlForLabel, controlRef: this.controlRef, isInvalid: this.isInvalid }, this.label)), h("div", { key: "e79a3c3631908b280521dd9d86cf6e1a2b879b72", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "6ee9b4b8656d366e1792b0eebbcb88968e39dfcf" })), h("div", { key: "0cffa6f40dbcfed07670b2730aeab71d0b2a42fa", class: "field-bottom" }, !this.showTextAsTooltip && renderHelperText(textOptions), h("div", { key: "9ddbc2218a776d6b8a9b0a82ca1903ceca3253f8", class: "bottom-right" }, h("slot", { key: "e03a7d476ea203967beae72fe4f1296d0656da17", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "a735c861da75636163beb5484909b51271a46297", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, renderHelperText(textOptions)));
  }
  get hostElement() {
    return getElement(this);
  }
};
FieldWrapper.style = fieldWrapperCss;
export {
  FormFieldLabel as ix_field_label,
  FieldWrapper as ix_field_wrapper
};

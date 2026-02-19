import { r as registerInstance, h, H as Host, g as getElement } from "./global-Cn4dOqNA.js";
import { b as a11yHostAttributes } from "./a11y-DAzBNVe7-CO1Uj69l.js";
import { m as makeRef } from "./make-ref-bcj7UEIC-BX_OSyqv.js";
import { c as createClassMutationObserver } from "./validation-3877QBzA-DJkD6K4T.js";
import { h as hasAnyText, H as HelperText$1 } from "./helper-text-util-C59I557B-BbAkHvlp.js";
import "./index-8HpPmDK_-DinFJk0z.js";
function isIxInputFieldComponent(obj) {
  return obj && "getAssociatedFormElement" in obj && typeof obj.getAssociatedFormElement === "function" && "getNativeInputElement" in obj && typeof obj.getNativeInputElement === "function";
}
const fieldLabelCss = ":host{display:inline-block;position:relative;margin-top:0.5rem;margin-bottom:0.25rem}";
const FormFieldLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.isInvalid = false;
    this.explicitIsInvalid = void 0;
    this.htmlForObserver = new MutationObserver(() => this.checkForInternalState());
    this.a11yAttributes = {};
    this.labelRef = makeRef();
  }
  isInvalidChanged(newValue) {
    this.explicitIsInvalid = newValue;
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
    var _a;
    const hasInvalidClass = elementToCheck.classList.contains("is-invalid") || elementToCheck.classList.contains("ix-invalid");
    this.isInvalid = (_a = this.explicitIsInvalid) !== null && _a !== void 0 ? _a : hasInvalidClass;
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
    return h(Host, { key: "1a8134a30a1b101f6bfd678f905eb88e927e47d6", onClick: () => this.focusOnClick() }, h("label", Object.assign({ key: "ef6df6072485fb72ea02a0a9800be3be15e84314", htmlFor: this.htmlFor }, this.a11yAttributes, { ref: this.labelRef }), h("ix-typography", { key: "572975edeae54d15932c3b6091ed63dfff8bb231", textColor: this.isInvalid ? "alarm" : "soft", format: "label" }, h("slot", { key: "452847ea7365cefc945bc6166bf2e8fd44d3f530" }), this.required && h("span", { key: "5e85f801d6fe8a01d6595a55bb263d0bcf91a888" }, "*"))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "isInvalid": ["isInvalidChanged"],
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
    return h(Host, { key: "531b08942bf31c36043fb3d7cd3af489f2fe83b0" }, this.label && h("div", { key: "49b9ef124fc2d69fb2528585d7b232b2e3d6d4b6", class: "field-top" }, h("ix-field-label", { key: "20a089a72de7ee3045c048c19d868ff3b4be2706", required: this.required, htmlFor: this.htmlForLabel, controlRef: this.controlRef, isInvalid: this.isInvalid }, this.label)), h("div", { key: "80c8ce58eb73379755757b2cef6b318cdc279b6b", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "f41f0681742e9f783092bad7484c851e2b987c99" })), h("div", { key: "9db46e23621d508e08fe87cae69a3698491347dc", class: "field-bottom" }, !this.showTextAsTooltip && h(HelperText$1, Object.assign({ key: "29802c92675a34cd215740a5df6fae77ed36368f" }, textOptions)), h("div", { key: "b94a1cc2acd5f8379e768fda9f222af6cb85f2b7", class: "bottom-right" }, h("slot", { key: "3c5ba2d9a6d4671b6fadba6e06455ae229894f94", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "890c4a39781fbb14b96660691fd6f6fe96a30e0b", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, h(HelperText$1, Object.assign({ key: "638410fd78282cf38065635a79cceeb064a2a10e" }, textOptions))));
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

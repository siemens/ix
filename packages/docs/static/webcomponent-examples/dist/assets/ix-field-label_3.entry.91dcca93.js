import { r as registerInstance, h, H as Host, g as getElement } from "./global.7dd975c7.js";
import { b as a11yHostAttributes } from "./a11y-b10c12e0.27b6344e.js";
import { m as makeRef } from "./make-ref-4b76e9b5.1c81bb51.js";
import { c as createClassMutationObserver } from "./validation-54137eaa.8ba4a3c5.js";
import { h as hasAnyText, r as renderHelperText } from "./helper-text-util-e47b864d.d6cdf1b7.js";
import { c as computePosition, s as shift, o as offset, b as arrow, f as flip, h as hide, a as autoUpdate } from "./floating-ui.dom.esm-d4ad786a.60f1e3fd.js";
import { O as OnListener } from "./listener-18b29507.c347627d.js";
import { r as resolveSelector } from "./find-element-af8265f7.65e387a1.js";
import "./index-2b76ea55.acc6b31e.js";
function isIxInputFieldComponent(obj) {
  return obj && "getAssociatedFormElement" in obj && typeof obj.getAssociatedFormElement === "function" && "getNativeInputElement" in obj && typeof obj.getNativeInputElement === "function";
}
const fieldLabelCss = ":host{display:inline-block;position:relative;margin-top:0.5rem;margin-bottom:0.25rem}";
const IxFieldLabelStyle0 = fieldLabelCss;
const FormFieldLabel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.htmlForObserver = new MutationObserver(() => this.checkForInternalState());
    this.a11yAttributes = {};
    this.labelRef = makeRef();
    this.required = void 0;
    this.htmlFor = void 0;
    this.controlRef = void 0;
    this.isInvalid = false;
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
    return h(Host, { key: "e20b9e4a647437545261a447bfabae219b79c821", onClick: () => this.focusOnClick() }, h("label", Object.assign({ key: "2a1e377f586175847579db74d63d76718bf372cf", htmlFor: this.htmlFor }, this.a11yAttributes, { ref: this.labelRef }), h("ix-typography", { key: "f3ce54d183798930a542966a7fa640cc40c917fc", color: this.isInvalid ? "alarm" : "soft", format: "label" }, h("slot", { key: "23e03980339f7ba6730ff08864214b8f4134e053" }), this.required && h("span", { key: "720768cbb9d0efbb1137d8b25482900069ca8722" }, "\xA0*"))));
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
FormFieldLabel.style = IxFieldLabelStyle0;
const fieldWrapperCss = ":host{display:flex;position:relative;flex-direction:column}:host .slot-wrapper{display:flex;position:relative;align-items:center;justify-content:flex-start;gap:0.25rem}:host .field-bottom,:host .field-top{display:flex;flex-direction:row;position:relative;justify-content:space-between;gap:1rem;width:-moz-min-content;width:min-content;min-width:100%}:host .field-bottom .bottom-right{margin-left:auto;margin-right:0px}:host .bottom-text{display:flex;position:relative;align-items:flex-start;justify-content:flex-start;gap:0.25rem;margin-right:0.25rem}:host .text-icon{margin:0.125rem}:host .text-icon.invalid{color:var(--theme-helper-icon--color--invalid)}:host .text-icon.info{color:var(--theme-helper-icon--color--info)}:host .text-icon.warning{color:var(--theme-helper-icon--color--warning)}:host .text-icon.valid{color:var(--theme-helper-icon--color--valid)}:host .bottom-text{margin-top:0.25rem;margin-bottom:0.25rem}";
const IxFieldWrapperStyle0 = fieldWrapperCss;
const FieldWrapper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.slotRef = makeRef();
    this.helperText = void 0;
    this.label = void 0;
    this.invalidText = void 0;
    this.validText = void 0;
    this.infoText = void 0;
    this.warningText = void 0;
    this.isInvalid = false;
    this.isValid = false;
    this.isInfo = false;
    this.isWarning = false;
    this.showTextAsTooltip = false;
    this.required = false;
    this.htmlForLabel = void 0;
    this.controlRef = void 0;
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
    return h(Host, { key: "e572687360d706dbe987ecb2552b573fe4c4d5d4" }, this.label && h("div", { key: "c6373751bc6d7d90d7927661332a7ebe07ebe32c", class: "field-top" }, h("ix-field-label", { key: "5c0f33a101ca7fe85307dfb1bcca00583f7af505", required: this.required, htmlFor: this.htmlForLabel, controlRef: this.controlRef, isInvalid: this.isInvalid }, this.label)), h("div", { key: "a0537918a05ae6cdb31fec15593310fe567f7f29", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "9ac61601a8bb8486fb195007affb95efd38a16cc" })), h("div", { key: "a2ce3a990499d4f44e908504e72e8e38ec6f9bf0", class: "field-bottom" }, !this.showTextAsTooltip && renderHelperText(textOptions), h("div", { key: "83e807d409fdc1a85f0b4b5533d3f8925ff35fec", class: "bottom-right" }, h("slot", { key: "87702e1c61e5c242a6085bcc4db7f84ee325dacd", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "66a20de650c5ea67e804f787bd729ac02078ed42", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, renderHelperText(textOptions)));
  }
  get hostElement() {
    return getElement(this);
  }
};
FieldWrapper.style = IxFieldWrapperStyle0;
class OverlayController {
  constructor() {
    this.overlays = /* @__PURE__ */ new Set();
  }
  connected(instance) {
    this.overlays.add(instance);
  }
  disconnected(instance) {
    this.overlays.delete(instance);
  }
  present(instance) {
    if (instance.willPresent && !instance.willPresent()) {
      return;
    }
    this.dismissOthers(instance);
    instance.present();
  }
  dismiss(instance) {
    if (instance.willDismiss && !instance.willDismiss()) {
      return;
    }
    instance.dismiss();
  }
  dismissOthers(instance) {
    this.overlays.forEach((overlay) => {
      if (overlay !== instance) {
        this.dismiss(overlay);
      }
    });
  }
}
class TooltipController extends OverlayController {
}
const tooltipController = new TooltipController();
const tooltipCss = ':host{display:inline-block;position:fixed;left:0;top:0;z-index:var(--theme-z-index-tooltip);max-width:18.25rem;width:-moz-max-content;width:max-content;opacity:0;visibility:collapse !important;overflow-wrap:break-word;border-radius:0.25rem}:host .tooltip-title{display:flex;align-items:center}:host .tooltip-title ::slotted(ix-icon){margin-right:0.35rem}:host .tooltip-container{display:block;position:relative;width:auto;height:100%;background:var(--theme-tootlip--background);color:var(--theme-color-std-text);padding:0.375rem 0.75rem 0.375rem 0.875rem;box-shadow:var(--theme-shadow-4);border-radius:inherit}:host(.visible){opacity:1;visibility:visible !important}:host(.visible) .arrow,:host(.visible) .arrow::before{position:absolute;width:12px;height:12px;background:inherit}:host(.visible) .arrow{visibility:hidden}:host(.visible) .arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}';
const IxTooltipStyle0 = tooltipCss;
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const numberToPixel = (value) => value != null ? `${value}px` : "";
const Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.for = void 0;
    this.titleContent = void 0;
    this.interactive = false;
    this.placement = "top";
    this.showDelay = 0;
    this.hideDelay = 50;
    this.animationFrame = false;
    this.visible = false;
  }
  get arrowElement() {
    return this.hostElement.shadowRoot.querySelector(".arrow");
  }
  destroyAutoUpdate() {
    if (this.disposeAutoUpdate !== void 0) {
      this.disposeAutoUpdate();
    }
  }
  async showTooltip(anchorElement) {
    clearTimeout(this.hideTooltipTimeout);
    await this.applyTooltipPosition(anchorElement);
    this.showTooltipTimeout = setTimeout(() => {
      tooltipController.present(this);
      this.applyTooltipPosition(anchorElement);
    }, this.showDelay);
  }
  async hideTooltip() {
    clearTimeout(this.showTooltipTimeout);
    let hideDelay = 50;
    if (this.interactive && this.hideDelay === hideDelay) {
      hideDelay = 150;
    }
    this.hideTooltipTimeout = setTimeout(() => {
      tooltipController.dismiss(this);
    }, hideDelay);
    this.destroyAutoUpdate();
  }
  computeArrowPosition({ placement, middlewareData }) {
    let { x, y } = middlewareData.arrow;
    const resetPosition = {
      top: "unset",
      right: "unset",
      bottom: "unset",
      left: "unset"
    };
    if (placement.startsWith("top")) {
      return Object.assign(Object.assign({}, resetPosition), { left: numberToPixel(x), top: numberToPixel(y) });
    }
    if (placement.startsWith("right")) {
      return Object.assign(Object.assign({}, resetPosition), { left: numberToPixel(-6), top: numberToPixel(y) });
    }
    if (placement.startsWith("bottom")) {
      return Object.assign(Object.assign({}, resetPosition), { left: numberToPixel(x), top: numberToPixel(-6) });
    }
    if (placement.startsWith("left")) {
      return Object.assign(Object.assign({}, resetPosition), { right: numberToPixel(-6), top: numberToPixel(y) });
    }
  }
  async computeTooltipPosition(target) {
    return computePosition(target, this.hostElement, {
      strategy: "fixed",
      placement: this.placement,
      middleware: [
        shift(),
        offset(12),
        arrow({
          element: this.arrowElement
        }),
        flip({
          fallbackStrategy: "initialPlacement",
          fallbackAxisSideDirection: "end",
          padding: 10
        }),
        hide()
      ]
    });
  }
  applyTooltipArrowPosition(computeResponse) {
    const arrowPosition = this.computeArrowPosition(computeResponse);
    Object.assign(this.arrowElement.style, arrowPosition);
  }
  async applyTooltipPosition(target) {
    if (!target) {
      return;
    }
    return new Promise((resolve) => {
      this.destroyAutoUpdate();
      this.disposeAutoUpdate = autoUpdate(target, this.hostElement, async () => {
        setTimeout(async () => {
          var _a;
          const computeResponse = await this.computeTooltipPosition(target);
          const isHidden = (_a = computeResponse.middlewareData.hide) === null || _a === void 0 ? void 0 : _a.referenceHidden;
          if (isHidden) {
            setTimeout(() => this.hideTooltip());
            resolve(computeResponse);
          }
          if (computeResponse.middlewareData.arrow) {
            this.applyTooltipArrowPosition(computeResponse);
          }
          const { x, y } = computeResponse;
          Object.assign(this.hostElement.style, {
            left: x !== null ? `${x}px` : "",
            top: y !== null ? `${y}px` : ""
          });
          resolve(computeResponse);
        });
      }, {
        ancestorResize: true,
        ancestorScroll: true,
        elementResize: true,
        animationFrame: this.animationFrame
      });
    });
  }
  clearHideTimeout() {
    if (this.interactive) {
      clearTimeout(this.hideTooltipTimeout);
    }
  }
  async queryAnchorElements() {
    if (typeof this.for === "string") {
      return resolveSelector(this.for, this.hostElement);
    }
    if (this.for instanceof HTMLElement) {
      return Promise.resolve([this.for]);
    }
    if (this.for instanceof Promise) {
      const element = await this.for;
      return [element];
    }
  }
  async registerTriggerListener() {
    const triggerElementList = await this.queryAnchorElements();
    if (this.disposeListener) {
      this.disposeListener();
    }
    if (!triggerElementList) {
      return;
    }
    triggerElementList.forEach((element) => {
      const onMouseEnter = () => {
        this.showTooltip(element);
      };
      const onMouseLeave = () => {
        this.hideTooltip();
      };
      const onFocusIn = () => {
        if (this.showTooltipTimeout !== void 0) {
          clearTimeout(this.showTooltipTimeout);
        }
        onMouseEnter();
      };
      const onFocusOut = () => {
        this.hideTooltip();
      };
      element.addEventListener("mouseenter", onMouseEnter);
      element.addEventListener("mouseleave", onMouseLeave);
      element.addEventListener("focusin", onFocusIn);
      element.addEventListener("focusout", onFocusOut);
      this.disposeListener = () => {
        element.removeEventListener("mouseenter", onMouseEnter);
        element.removeEventListener("mouseleave", onMouseLeave);
        element.removeEventListener("focusin", onFocusIn);
        element.removeEventListener("focusout", onFocusOut);
      };
    });
  }
  registerTooltipListener() {
    const { hostElement } = this;
    hostElement.addEventListener("mouseenter", () => this.clearHideTimeout());
    hostElement.addEventListener("focusin", () => this.clearHideTimeout());
    hostElement.addEventListener("mouseleave", () => this.hideTooltip());
    hostElement.addEventListener("focusout", () => this.hideTooltip());
  }
  async onKeydown(event) {
    if (event.code === "Escape") {
      this.hideTooltip();
    }
  }
  componentWillLoad() {
    this.registerTriggerListener();
  }
  componentDidLoad() {
    this.observer = new MutationObserver(() => {
      this.registerTriggerListener();
    });
    this.observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-ix-tooltip"],
      childList: true,
      subtree: true
    });
    this.registerTooltipListener();
  }
  connectedCallback() {
    tooltipController.connected(this);
  }
  disconnectedCallback() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.destroyAutoUpdate();
    tooltipController.disconnected(this);
  }
  isPresent() {
    return this.visible;
  }
  present() {
    this.visible = true;
  }
  dismiss() {
    this.visible = false;
  }
  render() {
    return h(Host, { key: "af2e907e5495a6678ea3ecab24003e98123da838", class: {
      visible: this.visible
    }, role: "tooltip" }, h("div", { key: "ddc44b9d17159259724ca31b95006422edb97c86", class: "tooltip-container" }, h("div", { key: "cdb3297a6f0b3654bfd8086b74e259f639c1a379", class: "tooltip-title" }, h("slot", { key: "04aa3f912afc3fc9e00f292a512ac437b226e54e", name: "title-icon" }), h("ix-typography", { key: "231ffcc29a7d10b63ea503f01d7d5cca7cfd5c88", format: "h5" }, this.titleContent, h("slot", { key: "1935843920eb558cda923a471a6acee19b9d94f3", name: "title-content" }))), h("div", { key: "2c0f633a6db4b53eecabf32b714542d8cfc28301", class: "tooltip-content" }, h("slot", { key: "8eef3e0770147f7f7aa5fd88a564d19bdd8cf84d" })), h("div", { key: "9ebed5328561662759fd9fa763a2bd92cbdba7eb", class: "arrow" })));
  }
  get hostElement() {
    return getElement(this);
  }
};
__decorate([
  OnListener("keydown", (self) => self.visible)
], Tooltip.prototype, "onKeydown", null);
Tooltip.style = IxTooltipStyle0;
export {
  FormFieldLabel as ix_field_label,
  FieldWrapper as ix_field_wrapper,
  Tooltip as ix_tooltip
};

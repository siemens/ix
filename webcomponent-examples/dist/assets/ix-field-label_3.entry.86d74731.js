import { r as registerInstance, h, H as Host, g as getElement } from "./global.2bfd6008.js";
import { b as a11yHostAttributes } from "./a11y-b10c12e0.27b6344e.js";
import { m as makeRef } from "./make-ref-4b76e9b5.1c81bb51.js";
import { c as createClassMutationObserver } from "./validation-45aa490c.d55c4dd8.js";
import { h as hasAnyText, r as renderHelperText } from "./helper-text-util-10896253.8c642af4.js";
import { c as computePosition, s as shift, o as offset, b as arrow, f as flip, h as hide, a as autoUpdate } from "./floating-ui.dom.esm-d4ad786a.60f1e3fd.js";
import { O as OnListener } from "./listener-18b29507.cf1bddf7.js";
import { r as resolveSelector } from "./find-element-af8265f7.65e387a1.js";
import "./index-ad2af369.9c13b45b.js";
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
    return h(Host, { key: "3a62067a0af7847c578459a35bcbd56c54f59bf1", onClick: () => this.focusOnClick() }, h("label", Object.assign({ key: "05aea8c0c5783f8cffb9d3968f1621564203c2ac", htmlFor: this.htmlFor }, this.a11yAttributes, { ref: this.labelRef }), h("ix-typography", { key: "6285d1624065c691d9beb3a1c4c31268e0a6bde9", color: this.isInvalid ? "alarm" : "soft", format: "label" }, h("slot", { key: "cc8185cb40bf055c6f2e29ee09265acc10719657" }), this.required && h("span", { key: "b8c6191b6a0fd1314afd21d555268417292b1201" }, "\xA0*"))));
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
    return h(Host, { key: "3a1885ca13c1de17fdbb33eb6cde695cbdb3469e" }, this.label && h("div", { key: "9e8c0a96fe7014feb6ac76473137183ba92e2ad1", class: "field-top" }, h("ix-field-label", { key: "923dec87ac02cf550400aba0bf929b95d8a271ed", required: this.required, htmlFor: this.htmlForLabel, controlRef: this.controlRef, isInvalid: this.isInvalid }, this.label)), h("div", { key: "a6694ebd1d18d2411565960ff5f1e6ee900491e8", class: {
      "slot-wrapper": true
    }, ref: this.slotRef }, h("slot", { key: "302fcd87bd9cba38a3057b9a6542dbaed9d16bbc" })), h("div", { key: "8f5c9836963e0df796388b8dac20db7289ea067e", class: "field-bottom" }, !this.showTextAsTooltip && renderHelperText(textOptions), h("div", { key: "620bf3f6730971ee840744fce7b8a7de2d2f12a9", class: "bottom-right" }, h("slot", { key: "7cff3c8d8f550a88e4bccacf6b71547edb89b0a7", name: "bottom-right" }))), this.showTextAsTooltip === true && hasAnyText(textOptions) && h("ix-tooltip", { key: "9041af539fd29c6fd2e8e3e4a00daa8e2c15ed22", for: this.slotRef.waitForCurrent(), showDelay: 500, placement: "bottom" }, renderHelperText(textOptions)));
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
    return h(Host, { key: "1f46e4d330357c6f1d8770cfb407d31cc244aa64", class: {
      visible: this.visible
    }, role: "tooltip" }, h("div", { key: "7a7896373a839c25a39fe41331223732ed40959d", class: "tooltip-container" }, h("div", { key: "adb027026f5a668d2dbce4bceacdc1f66b7b7995", class: "tooltip-title" }, h("slot", { key: "183340b03555b6e170f76c38e952ffa2bcad300f", name: "title-icon" }), h("ix-typography", { key: "14f5f8452aeda63a3acba3b577d2ffc81241200f", format: "h5" }, this.titleContent, h("slot", { key: "613335f4965c9e151f82a2e6b1d3f3635702dc1f", name: "title-content" }))), h("div", { key: "c36f41b65c2e21b160bc7eee8dbee0c132d7d803", class: "tooltip-content" }, h("slot", { key: "f17ab01352090365d03a89d2e1c6a56823c74a5c" })), h("div", { key: "617f5fb5598ebd172591170e5400cab0e1d3f0a3", class: "arrow" })));
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

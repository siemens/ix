import { r as registerInstance, h, H as Host, g as getElement } from "./global.00f6d77e.js";
import { c as computePosition, s as shift, o as offset, b as arrow, f as flip, h as hide, a as autoUpdate } from "./floating-ui.dom.esm-d4ad786a.60f1e3fd.js";
import { O as OnListener } from "./listener-2c562054.4c563bf8.js";
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
      return Promise.resolve(Array.from(document.querySelectorAll(this.for)));
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
    return h(Host, { key: "5e39b9dbc226e6a61c11a737a6aebb318827edc3", class: {
      visible: this.visible
    }, role: "tooltip" }, h("div", { key: "4b9be3a9990c9b81425f2dbef9539054d01aa872", class: "tooltip-container" }, h("div", { key: "c80f161df92379d45627338c1a11458948756ca5", class: "tooltip-title" }, h("slot", { key: "9b63297978bd65ecd277eda2205b0639a41c2949", name: "title-icon" }), h("ix-typography", { key: "ff0813c9f2532be81c5248230e057067cd196ae8", variant: "default-title" }, this.titleContent, h("slot", { key: "f25947dac855dfcea0f41d39bbae53a593cfa8b0", name: "title-content" }))), h("div", { key: "7b8dd9351fbea202b9bb36bbd187683a4f2d8753", class: "tooltip-content" }, h("slot", { key: "2b930dcd326294583931e945c1e9de83b17d3953" })), h("div", { key: "d831b2851ec71fee69250d583387ddcac45cdf8e", class: "arrow" })));
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
  Tooltip as ix_tooltip
};

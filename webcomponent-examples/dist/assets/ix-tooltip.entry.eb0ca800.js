import { r as registerInstance, h, H as Host, g as getElement } from "./global.8b5b8f81.js";
import { c as computePosition, s as shift, o as offset, b as arrow, f as flip, a as autoUpdate } from "./floating-ui.dom.esm-6e7c098f.28127179.js";
import { O as OnListener } from "./listener-2d09646e.b9f986e6.js";
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
const tooltipCss = ':host{display:inline-block;position:fixed;left:0px;top:0px;z-index:var(--theme-z-index-tooltip);max-width:18.25rem;opacity:0;visibility:collapse !important;overflow-wrap:break-word;border-radius:0.25rem;background-color:var(--theme-tootlip--background);padding:0.375rem 0.75rem 0.375rem 0.875rem;box-shadow:var(--theme-shadow-4)}:host .tooltip-title{display:flex;align-items:center}:host .tooltip-title ::slotted(ix-icon){margin-right:0.35rem}:host(.visible){opacity:1;visibility:visible !important}:host(.visible) .arrow,:host(.visible) .arrow::before{position:absolute;width:12px;height:12px;background:inherit}:host(.visible) .arrow{visibility:hidden}:host(.visible) .arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}';
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
    if (placement.startsWith("top")) {
      return {
        left: numberToPixel(x),
        top: numberToPixel(y)
      };
    }
    if (placement.startsWith("right")) {
      return {
        left: numberToPixel(-6),
        top: numberToPixel(y)
      };
    }
    if (placement.startsWith("bottom")) {
      return {
        left: numberToPixel(x),
        top: numberToPixel(-6)
      };
    }
    if (placement.startsWith("left")) {
      return {
        right: numberToPixel(-6),
        top: numberToPixel(y)
      };
    }
  }
  async computeTooltipPosition(target) {
    const computeResponse = await computePosition(target, this.hostElement, {
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
          padding: 10
        })
      ]
    });
    return computeResponse;
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
      this.disposeAutoUpdate = autoUpdate(target, this.hostElement, async () => {
        setTimeout(async () => {
          const computeResponse = await this.computeTooltipPosition(target);
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
    return h(Host, { key: "b346dc751648d4aea881b9259bf355bf084e274b", class: {
      visible: this.visible
    }, role: "tooltip" }, h("div", { key: "98e7ee905b9b6d5cb471fe9d3e485a9e8247dab7", class: "tooltip-title" }, h("slot", { key: "1773d36b672687d2771e9a88264a22521300fed1", name: "title-icon" }), h("ix-typography", { key: "fb6fd849899b21de8503ee72dfeba23c3a4172b2", variant: "default-title" }, this.titleContent, h("slot", { key: "2fd6eaa013ab8593ce515f7d14d739d395e2b9a8", name: "title-content" }))), h("div", { key: "3f29a8c3421bf4807541234cc0928ae90d6ac10e", class: "tooltip-content" }, h("slot", { key: "106efcab88de286f1436374e0227ad53cda899cb" })), h("div", { key: "accea2156f90801ba1d5fc549f465494501d71f1", class: "arrow" }));
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

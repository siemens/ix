import { r as registerInstance, h, H as Host, g as getElement } from "./index.918151cc.js";
import { c as computePosition, s as shift, o as offset, b as arrow, f as flip, a as autoUpdate } from "./floating-ui.dom.esm-6e7c098f.28127179.js";
import { O as OnListener } from "./listener-b87c1f3d.3d753bf2.js";
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
const tooltipCss = ':host{display:inline-block;position:fixed;left:0px;top:0px;z-index:var(--theme-z-index-tooltip);max-width:18.25rem;opacity:0;visibility:collapse !important;overflow-wrap:break-word;border-radius:0.25rem;background-color:var(--theme-tootlip--background);padding:0.375rem 0.75rem 0.375rem 0.875rem;box-shadow:var(--theme-shadow-4)}:host .tooltip-title{display:flex;align-items:center}:host .tooltip-title ::slotted(ix-icon){margin-right:0.35rem}:host(.visible){opacity:1;visibility:visible !important}:host(.visible) .arrow,:host(.visible) .arrow::before{position:absolute;width:8px;height:8px;background:inherit}:host(.visible) .arrow{visibility:hidden}:host(.visible) .arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}';
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
        left: numberToPixel(-4),
        top: numberToPixel(y)
      };
    }
    if (placement.startsWith("bottom")) {
      return {
        left: numberToPixel(x),
        top: numberToPixel(-4)
      };
    }
    if (placement.startsWith("left")) {
      return {
        right: numberToPixel(-4),
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
        offset(8),
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
    return h(Host, { key: "5b5aa5093f3c14651905a799f9e81f2f331a1baf", class: {
      visible: this.visible
    }, role: "tooltip" }, h("div", { key: "cacf0b886f54dc3c6acacd6da53bde71339cfc22", class: "tooltip-title" }, h("slot", { key: "67bdcbe0af5ba15cfbb759a0880fbcec72f49e12", name: "title-icon" }), h("ix-typography", { key: "1f4ae24e31a305bc64d5dd5e4a3777c0784bb07b", variant: "default-title" }, this.titleContent, h("slot", { key: "393d395dc48d285b8376db4d315d897951ff6767", name: "title-content" }))), h("div", { key: "d0c78f7201ef524eedd4776b3226b6571d0a6e3f", class: "tooltip-content" }, h("slot", { key: "14b151f19115fb6d301bb6228a681cd3f0f3146e" })), h("div", { key: "927874a1be9fac8e0043fc98faf29af1a08eb374", class: "arrow" }));
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

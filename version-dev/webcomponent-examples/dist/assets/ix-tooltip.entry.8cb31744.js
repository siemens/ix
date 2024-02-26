import { r as registerInstance, h, H as Host, g as getElement } from "./index.b385ac31.js";
import { a as autoUpdate, c as computePosition, s as shift, o as offset, b as arrow, f as flip } from "./floating-ui.dom.esm-cbe44820.60534149.js";
import { O as OnListener } from "./listener-cf8cb0b2.dba5df32.js";
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
    this.onEnterElementBind = this.onTooltipShow.bind(this);
    this.onLeaveElementBind = this.onTooltipHide.bind(this);
    this.tooltipCloseTimeInMS = 50;
    this.for = void 0;
    this.titleContent = void 0;
    this.interactive = false;
    this.placement = "top";
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
  onTooltipShow(e) {
    this.showTooltip(e.target);
  }
  onTooltipHide() {
    this.hideTooltip();
  }
  async showTooltip(anchorElement) {
    clearTimeout(this.hideTooltipTimeout);
    await this.computeTooltipPosition(anchorElement);
    this.visible = true;
  }
  async hideTooltip() {
    this.hideTooltipTimeout = setTimeout(() => {
      this.visible = false;
    }, this.tooltipCloseTimeInMS);
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
    if (!target) {
      return;
    }
    return new Promise((resolve) => {
      this.disposeAutoUpdate = autoUpdate(target, this.hostElement, async () => {
        setTimeout(async () => {
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
          if (computeResponse.middlewareData.arrow) {
            const arrowPosition = this.computeArrowPosition(computeResponse);
            Object.assign(this.arrowElement.style, arrowPosition);
          }
          const { x, y } = computeResponse;
          Object.assign(this.hostElement.style, {
            left: x !== null ? `${x}px` : "",
            top: y !== null ? `${y}px` : ""
          });
          resolve();
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
  queryAnchorElements() {
    return Array.from(document.querySelectorAll(this.for));
  }
  registerTriggerListener() {
    const triggerElementList = this.queryAnchorElements();
    if (this.disposeListener) {
      this.disposeListener();
    }
    triggerElementList.forEach((element) => {
      element.addEventListener("mouseenter", this.onEnterElementBind);
      element.addEventListener("mouseleave", this.onLeaveElementBind);
      element.addEventListener("focusin", this.onEnterElementBind);
      element.addEventListener("focusout", this.onLeaveElementBind);
      this.disposeListener = () => {
        element.removeEventListener("mouseenter", this.onEnterElementBind);
        element.removeEventListener("mouseleave", this.onLeaveElementBind);
        element.removeEventListener("focusin", this.onEnterElementBind);
        element.removeEventListener("focusout", this.onLeaveElementBind);
      };
    });
  }
  registerTooltipListener() {
    const { hostElement } = this;
    hostElement.addEventListener("mouseenter", () => this.clearHideTimeout());
    hostElement.addEventListener("focusin", () => this.clearHideTimeout());
    hostElement.addEventListener("mouseleave", () => this.onTooltipHide());
    hostElement.addEventListener("focusout", () => this.onTooltipHide());
  }
  async onKeydown(event) {
    if (event.code === "Escape") {
      this.onTooltipHide();
    }
  }
  componentWillLoad() {
    this.registerTriggerListener();
  }
  componentDidLoad() {
    if (this.interactive) {
      this.tooltipCloseTimeInMS = 150;
    }
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
  disconnectedCallback() {
    var _a;
    (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
    this.destroyAutoUpdate();
  }
  render() {
    const tooltipContentClass = {
      "tooltip-content": true
    };
    return h(Host, { key: "d215425a33296ea243aa3ac14ef34aaaba8f9c36", class: {
      visible: this.visible
    }, role: "tooltip" }, h("div", { key: "d23c1e7086ee4bd9f6b16f63eeeb378fdcdef2ed", class: "tooltip-title" }, h("slot", { key: "13d1b4dfa1972e54c267ee1a8272f74fd3aac998", name: "title-icon" }), h("ix-typography", { key: "6e84d3b32e4291b1933e07f3d67b39bab3cb17d6", variant: "default-title" }, this.titleContent, h("slot", { key: "3ba4ec48333545f595622c8069d1eece5afdc425", name: "title-content" }))), h("div", { key: "2d770a044a0058c777f0a2d6042c193ca85a0718", class: tooltipContentClass }, h("slot", { key: "893b41992f888b309b7d0a0124f57ee84a4e236f" })), h("div", { key: "c23558d97058e3933a79315c51d2f06ff0aca88f", class: "arrow" }));
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

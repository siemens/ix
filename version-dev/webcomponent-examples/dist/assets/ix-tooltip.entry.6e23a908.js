import { r as registerInstance, h, H as Host, g as getElement } from "./index.ae9ec291.js";
import { a as autoUpdate, c as computePosition, s as shift, o as offset, b as arrow, f as flip } from "./floating-ui.dom.esm-cbe44820.60534149.js";
import { O as OnListener } from "./listener-cf8cb0b2.cb750f6e.js";
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
    return h(Host, { key: "8f85f75338cc78b38c6090fb75c9623123894a19", class: {
      visible: this.visible
    }, role: "tooltip" }, h("div", { key: "875b514167bfe9f7186c86d2a746e16c4425d833", class: "tooltip-title" }, h("slot", { key: "0cd77bf05e8dfd1a37d71b44f66eed1847743856", name: "title-icon" }), h("ix-typography", { key: "50db3d851852796ba8bd247eefd10d7c9d3920a3", variant: "default-title" }, this.titleContent, h("slot", { key: "5b26a7a70f46036fc7f041b7d2f8a6742dc92cf4", name: "title-content" }))), h("div", { key: "6b161d389cae7f6e30ee047d78cfb90bd6f70b4e", class: tooltipContentClass }, h("slot", { key: "3c1b118a9ee09de941547d5171d8201f1d76e739" })), h("div", { key: "269cb211d6c4005e17eb2710f999e8390cd91236", class: "arrow" }));
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

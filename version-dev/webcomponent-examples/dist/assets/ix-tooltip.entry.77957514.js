import { r as registerInstance, h, H as Host, g as getElement } from "./index.18e27e15.js";
import { a as autoUpdate, c as computePosition, s as shift, o as offset, b as arrow, f as flip } from "./floating-ui.dom.esm-cbe44820.60534149.js";
import { O as OnListener } from "./listener-23c93aa7.2b022231.js";
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
let sequentialInstanceId = 0;
const Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.id = ++sequentialInstanceId;
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
  updateAriaDescribedBy(element, describedBy) {
    const oldDescribedBy = element.getAttribute("aria-describedby");
    if ((oldDescribedBy === null || oldDescribedBy === void 0 ? void 0 : oldDescribedBy.indexOf(describedBy)) != -1) {
      return;
    }
    const newDescribedBy = `${oldDescribedBy} ${describedBy}`;
    element.setAttribute("aria-describedby", newDescribedBy);
  }
  getTooltipId() {
    return this.hostElement.id || "ix-tooltip-" + this.id;
  }
  registerTriggerListener() {
    const elements = this.queryAnchorElements();
    elements.forEach((e) => {
      e.addEventListener("mouseenter", this.onEnterElementBind);
      e.addEventListener("mouseleave", this.onLeaveElementBind);
      e.addEventListener("focusin", this.onEnterElementBind);
      e.addEventListener("focusout", this.onLeaveElementBind);
      this.updateAriaDescribedBy(e, this.getTooltipId());
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
    return h(Host, { key: "e6dcf33f7f20aee39db1c84410d3ce3abd57ed48", class: {
      visible: this.visible
    }, id: this.getTooltipId(), role: "tooltip" }, h("div", { key: "6727bfc19825bce46d9f83500f983535dc1d3b1e", class: "tooltip-title" }, h("slot", { key: "6cc626b65de12785b04e36745f55db8e1322fcda", name: "title-icon" }), h("ix-typography", { key: "bd251dacc3f782c8c8c14c4f3a63bb163ce2b4e9", variant: "default-title" }, this.titleContent, h("slot", { key: "904d313907dee764f5a5acbb573c32a8b2b8ab0d", name: "title-content" }))), h("div", { key: "b624bbb84d3263371601beade83fa8e528c9f9db", class: tooltipContentClass }, h("slot", { key: "32dc24936c9311ea8999a733996e0a72d3711aa0" })), h("div", { key: "e604f3c8afce7a0cb07dc03cfa21f7541fd70ff2", class: "arrow" }));
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

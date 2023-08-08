import { r as registerInstance, h, H as Host, g as getElement } from "./index.85f40dc5.js";
import { a as autoUpdate, c as computePosition, s as shift, o as offset, b as arrow, f as flip } from "./floating-ui.dom.esm-9b203a02.33eaf0d2.js";
const tooltipCss = ':host{display:inline-block;position:fixed;left:0px;top:0px;z-index:var(--theme-z-index-tooltip);max-width:18.25rem;opacity:0;visibility:collapse !important;overflow-wrap:break-word;border-radius:0.25rem;background-color:var(--theme-tootlip--background);padding:0.375rem 0.75rem 0.375rem 0.875rem;box-shadow:var(--theme-shadow-4)}:host .tooltip-title{display:flex;align-items:center}:host .tooltip-title ::slotted(ix-icon){margin-right:0.35rem}:host(.visible){opacity:1;visibility:visible !important}:host(.visible) .arrow,:host(.visible) .arrow::before{position:absolute;width:8px;height:8px;background:inherit}:host(.visible) .arrow{visibility:hidden}:host(.visible) .arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}';
const numberToPixel = (value) => value != null ? `${value}px` : "";
const Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onMouseEnterBind = this.showTooltip.bind(this);
    this.onMouseLeaveBind = this.hideTooltip.bind(this);
    this.tooltipCloseTimeInMS = 50;
    this.for = void 0;
    this.titleContent = void 0;
    this.interactive = false;
    this.placement = "top";
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
  showTooltip(e) {
    clearTimeout(this.hideTooltipTimeout);
    this.visible = true;
    this.computeTooltipPosition(e.target);
  }
  hideTooltip() {
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
      });
    }, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true
    });
  }
  queryAnchorElements() {
    return Array.from(document.querySelectorAll(this.for));
  }
  registerTriggerListener() {
    const elements = this.queryAnchorElements();
    elements.forEach((e) => {
      e.addEventListener("mouseenter", this.onMouseEnterBind);
      e.addEventListener("mouseleave", this.onMouseLeaveBind);
    });
  }
  registerTooltipListener() {
    this.hostElement.addEventListener("mouseenter", () => {
      if (this.interactive) {
        clearTimeout(this.hideTooltipTimeout);
      }
    });
    this.hostElement.addEventListener("mouseleave", () => {
      this.hideTooltip();
    });
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
    this.registerTriggerListener();
    this.registerTooltipListener();
  }
  disconnectedCallback() {
    this.observer.disconnect();
    this.destroyAutoUpdate();
  }
  render() {
    const tooltipContentClass = {
      "tooltip-content": true
    };
    return h(Host, { class: {
      visible: this.visible
    } }, h("div", { class: "tooltip-title" }, h("slot", { name: "title-icon" }), h("ix-typography", { variant: "default-title" }, this.titleContent, h("slot", { name: "title-content" }))), h("div", { class: tooltipContentClass }, h("slot", null)), h("div", { class: "arrow" }));
  }
  get hostElement() {
    return getElement(this);
  }
};
Tooltip.style = tooltipCss;
export {
  Tooltip as ix_tooltip
};

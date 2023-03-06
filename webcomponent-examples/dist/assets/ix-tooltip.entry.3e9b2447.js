import { r as registerInstance, h, H as Host, g as getElement } from "./index.352cb90e.js";
import { a as autoUpdate, c as computePosition, s as shift, o as offset, b as arrow, d as autoPlacement } from "./floating-ui.dom.esm-3130eda0.5f933242.js";
const tooltipCss = ':host{display:inline-block;position:absolute;left:0px;top:0px;max-width:18.25rem;opacity:0;visibility:collapse;overflow-wrap:break-word;border-radius:0.25rem;background-color:var(--theme-tootlip--background);padding:0.375rem 0.75rem 0.375rem 0.875rem;box-shadow:var(--theme-shadow-4)}:host .tooltip-title{display:flex;align-items:center}:host .tooltip-title ::slotted(ix-icon){margin-right:0.35rem}:host(.visible){opacity:1;visibility:visible}:host .arrow,:host .arrow::before{position:absolute;width:8px;height:8px;background:inherit}:host .arrow{visibility:hidden}:host .arrow::before{visibility:visible;content:"";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}';
const Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onMouseEnterBind = this.showTooltip.bind(this);
    this.onMouseLeaveBind = this.hideTooltip.bind(this);
    this.tooltipCloseTimeInMS = 50;
    this.for = void 0;
    this.titleContent = void 0;
    this.interactive = false;
    this.visible = false;
  }
  get arrowElement() {
    return this.hostElement.shadowRoot.querySelector(".arrow");
  }
  destroyAutoUpdate() {
    if (this.disposeAutoUpdate) {
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
  async computeTooltipPosition(target) {
    this.disposeAutoUpdate = autoUpdate(target, this.hostElement, async () => {
      const computeResponse = await computePosition(target, this.hostElement, {
        strategy: "absolute",
        placement: "top",
        middleware: [
          shift(),
          offset(8),
          arrow({
            element: this.arrowElement
          }),
          autoPlacement({
            alignment: "start",
            allowedPlacements: ["top", "bottom", "right", "left"]
          })
        ]
      });
      if (computeResponse.middlewareData.arrow) {
        const { x: x2, y: y2 } = computeResponse.middlewareData.arrow;
        Object.assign(this.arrowElement.style, {
          left: x2 != null ? `${x2}px` : "",
          top: y2 != null ? `${y2}px` : ""
        });
      }
      const { x, y } = computeResponse;
      Object.assign(this.hostElement.style, {
        left: x !== null ? `${x}px` : "",
        top: y !== null ? `${y}px` : ""
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

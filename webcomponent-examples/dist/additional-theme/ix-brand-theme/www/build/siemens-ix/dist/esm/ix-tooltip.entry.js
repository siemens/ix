import { r as registerInstance, h, H as Host, g as getElement } from './index-6f4f3582.js';
import { b as autoUpdate, c as computePosition, s as shift, o as offset, d as arrow, a as autoPlacement } from './floating-ui.dom.esm-deda54d2.js';

const tooltipCss = ":host{--tooltip-background:var(--theme-tootlip--background);--tooltip-border-radius:4px}:host{display:inline-block;position:absolute;left:0px;top:0px;max-width:18.25rem;opacity:0;visibility:collapse;overflow-wrap:break-word;border-radius:var(--tooltip-border-radius);background-color:var(--tooltip-background);padding:0.375rem 0.75rem 0.375rem 0.875rem;filter:drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.6)) drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.6)) drop-shadow(0px 0px 2px #000000)}:host .tooltip-title{display:flex;align-items:center}:host .tooltip-title ix-icon{margin-right:0.35rem}:host(.visible){opacity:1;visibility:visible}:host .arrow,:host .arrow::before{position:absolute;width:8px;height:8px;background:inherit}:host .arrow{visibility:hidden}:host .arrow::before{visibility:visible;content:\"\";transform:rotate(45deg);background-color:var(--theme-tootlip--background)}";

const Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onMouseEnterBind = this.showTooltip.bind(this);
    this.onMouseLeaveBind = this.hideTooltip.bind(this);
    this.tooltipCloseTimeInMS = 50;
    this.for = undefined;
    this.interactive = false;
    this.titleContent = undefined;
    this.titleIcon = undefined;
    this.visible = false;
  }
  get arrowElement() {
    return this.hostElement.shadowRoot.querySelector('.arrow');
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
        strategy: 'absolute',
        placement: 'top',
        middleware: [
          shift(),
          offset(8),
          arrow({
            element: this.arrowElement,
          }),
          autoPlacement({
            alignment: 'start',
            allowedPlacements: ['top', 'bottom', 'right', 'left'],
          }),
        ],
      });
      if (computeResponse.middlewareData.arrow) {
        const { x, y } = computeResponse.middlewareData.arrow;
        Object.assign(this.arrowElement.style, {
          left: x != null ? `${x}px` : '',
          top: y != null ? `${y}px` : '',
        });
      }
      const { x, y } = computeResponse;
      Object.assign(this.hostElement.style, {
        left: x !== null ? `${x}px` : '',
        top: y !== null ? `${y}px` : '',
      });
    }, {
      ancestorResize: true,
      ancestorScroll: true,
      elementResize: true,
    });
  }
  queryAnchorElements() {
    return Array.from(document.querySelectorAll(this.for));
  }
  registerTriggerListener() {
    const elements = this.queryAnchorElements();
    elements.forEach((e) => {
      e.addEventListener('mouseenter', this.onMouseEnterBind);
      e.addEventListener('mouseleave', this.onMouseLeaveBind);
    });
  }
  registerTooltipListener() {
    this.hostElement.addEventListener('mouseenter', () => {
      if (this.interactive) {
        clearTimeout(this.hideTooltipTimeout);
      }
    });
    this.hostElement.addEventListener('mouseleave', () => {
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
      attributeFilter: ['data-ix-tooltip'],
      childList: true,
      subtree: true,
    });
    this.registerTriggerListener();
    this.registerTooltipListener();
  }
  disconnectedCallback() {
    this.observer.disconnect();
    this.destroyAutoUpdate();
  }
  render() {
    var _a;
    const tooltipContentClass = {
      'tooltip-content': true,
    };
    return (h(Host, { class: {
        visible: this.visible,
      } }, h("div", { class: 'tooltip-title' }, this.titleIcon ? (h("ix-icon", { size: "12", name: this.titleIcon })) : null, (_a = (h("ix-typography", { variant: "default-title" }, this.titleContent, h("slot", { name: "title" })))) !== null && _a !== void 0 ? _a : null), h("div", { class: tooltipContentClass }, h("slot", null)), h("div", { class: "arrow" })));
  }
  get hostElement() { return getElement(this); }
};
Tooltip.style = tooltipCss;

export { Tooltip as ix_tooltip };

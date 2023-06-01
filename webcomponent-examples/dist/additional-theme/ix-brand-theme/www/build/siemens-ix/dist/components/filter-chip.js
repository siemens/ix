import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './icon.js';

const filterChipCss = ".sc-ix-filter-chip-h{display:flex;align-items:center;justify-content:space-between;height:1.5rem;padding-left:0.5rem;border:var(--theme-focus--border-thickness) solid transparent;border-radius:2rem;background-color:var(--theme-chip--background);color:var(--theme-chip--color)}.sc-ix-filter-chip-h:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-filter-chip-h:not(.disabled):not(:disabled):hover{background-color:var(--theme-chip--background--hover)}.sc-ix-filter-chip-h:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-filter-chip-h:not(.disabled):not(:disabled):active{background-color:var(--theme-chip--background--active)}.sc-ix-filter-chip-h:not(.disabled):not(:disabled):focus-visible{border-color:#199fff}.sc-ix-filter-chip-h .slot-container.sc-ix-filter-chip{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-filter-chip-h .slot-container.sc-ix-filter-chip .disabled.sc-ix-filter-chip-h,.disabled .sc-ix-filter-chip-h{color:var(--theme-chip--color-diabled)}.sc-ix-filter-chip-h .btn-oval.sc-ix-filter-chip{height:1.5rem;width:1.5rem;min-width:1.5rem;margin-left:0.25rem;padding:0;vertical-align:top}.sc-ix-filter-chip-h .btn-oval.sc-ix-filter-chip:not(.disabled):not(:disabled):focus-visible{outline:none;border-color:#199fff}";

const FilterChip = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.closeClick = createEvent(this, "closeClick", 7);
    this.disabled = false;
  }
  onCloseClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.closeClick.emit();
  }
  render() {
    return (h(Host, { class: { disabled: this.disabled }, title: this.el.textContent }, h("div", { class: "slot-container" }, h("slot", null)), h("button", { disabled: this.disabled, class: "btn btn-invisible-secondary btn-oval", onClick: (e) => this.onCloseClick(e) }, h("ix-icon", { name: "close-small", size: "16" }))));
  }
  get el() { return this; }
  static get style() { return filterChipCss; }
}, [6, "ix-filter-chip", {
    "disabled": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-filter-chip", "ix-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-filter-chip":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FilterChip);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { FilterChip as F, defineCustomElement as d };

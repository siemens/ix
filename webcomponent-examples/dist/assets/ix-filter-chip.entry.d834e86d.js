import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.668348d5.js";
const filterChipCss = ".sc-ix-filter-chip-h{display:flex;align-items:center;justify-content:space-between;height:1.5rem;padding-left:0.5rem;border:var(--theme-focus--border-thickness) solid var(--theme-chip-primary-outline--border-color);border-radius:2rem;background-color:var(--theme-color-ghost);color:var(--theme-chip-primary-outline--color)}.sc-ix-filter-chip-h:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-filter-chip-h:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-ghost-primary--hover);border-color:var(--theme-chip-primary-outline--border-color--hover);color:var(--theme-chip-primary-outline--color--hover)}.sc-ix-filter-chip-h:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-filter-chip-h:not(.disabled):not(:disabled):active{background-color:var(--theme-color-ghost-primary--active);border-color:var(--theme-chip-primary-outline--border-color--active);color:var(--theme-chip-primary-outline--color--active)}.sc-ix-filter-chip-h:not(.disabled):not(:disabled):focus-visible{outline:var(--theme-color-focus-bdr) solid var(--theme-focus--border-thickness);outline-offset:-0.125rem}.sc-ix-filter-chip-h .slot-container.sc-ix-filter-chip{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-filter-chip-h .slot-container.sc-ix-filter-chip .disabled.sc-ix-filter-chip-h,.disabled .sc-ix-filter-chip-h{background-color:var(--theme-color-ghost);border-color:var(--theme-color-component-4);color:var(--theme-color-weak-text)}.sc-ix-filter-chip-h .btn-oval.sc-ix-filter-chip{height:1.5rem;width:1.5rem;min-width:1.5rem;margin-left:0.25rem;padding:0;vertical-align:top}.sc-ix-filter-chip-h .btn-oval.sc-ix-filter-chip:not(.disabled):not(:disabled):focus-visible{outline:none;border-color:#199fff}";
const FilterChip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeClick = createEvent(this, "closeClick", 7);
    this.disabled = false;
  }
  onCloseClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.closeClick.emit();
  }
  render() {
    return h(Host, { class: { disabled: this.disabled }, title: this.el.textContent }, h("div", { class: "slot-container" }, h("slot", null)), h("button", { disabled: this.disabled, class: "btn btn-invisible-primary btn-oval", onClick: (e) => this.onCloseClick(e) }, h("ix-icon", { name: "close-small", size: "16" })));
  }
  get el() {
    return getElement(this);
  }
};
FilterChip.style = filterChipCss;
export {
  FilterChip as ix_filter_chip
};

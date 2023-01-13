import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.bb42fc32.js";
const filterChipCss = ".sc-ix-filter-chip-h{display:flex;align-items:center;justify-content:space-between;height:1.5rem;padding-left:0.5rem;border:var(--theme-focus--border-thickness) solid transparent;border-radius:2rem;background-color:var(--theme-chip--background);color:var(--theme-chip--color)}.sc-ix-filter-chip-h:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-filter-chip-h:not(.disabled):not(:disabled):hover{background-color:var(--theme-chip--background--hover)}.sc-ix-filter-chip-h:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-filter-chip-h:not(.disabled):not(:disabled):active{background-color:var(--theme-chip--background--active)}.sc-ix-filter-chip-h:not(.disabled):not(:disabled):focus-visible{border-color:#199fff}.sc-ix-filter-chip-h .slot-container.sc-ix-filter-chip{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-filter-chip-h .slot-container.sc-ix-filter-chip .disabled.sc-ix-filter-chip-h,.disabled .sc-ix-filter-chip-h{color:var(--theme-chip--color-diabled)}.sc-ix-filter-chip-h .btn-oval.sc-ix-filter-chip{height:1.5rem;width:1.5rem;min-width:1.5rem;margin-left:0.25rem;padding:0;vertical-align:top}.sc-ix-filter-chip-h .btn-oval.sc-ix-filter-chip:not(.disabled):not(:disabled):focus-visible{outline:none;border-color:#199fff}";
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
    return h(Host, { class: { disabled: this.disabled }, title: this.el.textContent }, h("div", { class: "slot-container" }, h("slot", null)), h("button", { disabled: this.disabled, class: "btn btn-invisible-secondary btn-oval", onClick: (e) => this.onCloseClick(e) }, h("ix-icon", { name: "close-small", size: "16" })));
  }
  get el() {
    return getElement(this);
  }
};
FilterChip.style = filterChipCss;
export {
  FilterChip as ix_filter_chip
};

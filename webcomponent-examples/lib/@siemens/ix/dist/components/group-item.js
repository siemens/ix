import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './icon.js';

const groupItemCss = ".sc-ix-group-item-h{display:flex;min-height:2.25rem;height:2.25rem;align-items:center;justify-content:space-between;padding:0.5rem 1.5rem 0.5rem 2.5rem;position:relative;margin-top:0.0625rem;border:1px solid var(--theme-group-item--border-color);outline:none;background-color:var(--theme-group-item--background)}.last.sc-ix-group-item-h{border-bottom-left-radius:0.25rem;border-bottom-right-radius:0.25rem}.sc-ix-group-item-h ix-icon.sc-ix-group-item{margin-right:0.25rem;margin-top:-0.125rem}.sc-ix-group-item-h .group-entry-selection-indicator.sc-ix-group-item{position:absolute;left:0;height:100%;width:0.25rem}.sc-ix-group-item-h .group-entry-text.sc-ix-group-item{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1}.sc-ix-group-item-h .group-entry-text-secondary.sc-ix-group-item{display:flex;justify-content:flex-end;flex-grow:1;white-space:nowrap;color:var(--theme-color-soft-text);font-size:0.875rem}.sc-ix-group-item-h .group-entry-text-secondary.sc-ix-group-item,.sc-ix-group-item-h .group-entry-text-secondary.sc-ix-group-item span.sc-ix-group-item{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled){cursor:pointer}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled):hover{background-color:var(--theme-group-item--background--hover);border-color:var(--theme-group-item--border-color--hover)}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled){cursor:pointer}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled):active{background-color:var(--theme-group-item--background--active);border-color:var(--theme-group-item--border-color--active)}.selected.sc-ix-group-item-h{border-top-width:0.062rem !important;border-color:var(--theme-group-item--border-color--selected);background-color:var(--theme-group-item--background--selected)}.selected.sc-ix-group-item-h .group-entry-selection-indicator.sc-ix-group-item{background-color:var(--theme-color-input-focus)}.sc-ix-group-item-h:not(.disabled):not(:disabled):focus-visible{border-color:var(--focus--border-color) !important}";

const GroupItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.selectedChanged = createEvent(this, "selectedChanged", 7);
    /**
     * Supress the selection of the group
     */
    this.suppressSelection = false;
    /**
     * The elements tabindex attribute will get set accordingly.
     * If true tabindex will be 0, -1 otherwise.
     */
    this.focusable = true;
  }
  clickListen() {
    if (this.suppressSelection) {
      return;
    }
    this.selectedChanged.emit(this.hostElement);
  }
  render() {
    return (h(Host, { class: {
        selected: this.selected && !this.suppressSelection,
        'suppress-selection': this.suppressSelection,
      }, tabindex: this.focusable ? 0 : -1 }, h("div", { class: "group-entry-selection-indicator" }), this.icon ? h("ix-icon", { size: "16", name: this.icon }) : null, this.text ? (h("span", { class: "group-entry-text" }, h("span", { title: this.text }, this.text))) : null, this.secondaryText ? (h("span", { class: "group-entry-text-secondary" }, h("span", { title: this.secondaryText }, this.secondaryText))) : null, h("slot", null)));
  }
  get hostElement() { return this; }
  static get style() { return groupItemCss; }
}, [6, "ix-group-item", {
    "icon": [1],
    "text": [1],
    "secondaryText": [1, "secondary-text"],
    "suppressSelection": [4, "suppress-selection"],
    "selected": [4],
    "focusable": [4],
    "index": [2]
  }, [[1, "click", "clickListen"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-group-item", "ix-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-group-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GroupItem);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { GroupItem as G, defineCustomElement as d };

import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.8b470164.js";
import { g as getButtonClasses } from "./base-button-5bfeb71c.437bbfe2.js";
const splitButtonCss = ".sc-ix-split-button-h{display:inline-block}.sc-ix-split-button-h .btn-group.sc-ix-split-button{width:100%}.sc-ix-split-button-h .btn-group.sc-ix-split-button>button.sc-ix-split-button:nth-child(1){width:calc(100% - 2rem)}.sc-ix-split-button-h .btn-group.sc-ix-split-button>button.sc-ix-split-button:nth-child(2){width:2rem}.sc-ix-split-button-h .middle-gap.sc-ix-split-button{gap:0.125rem}.sc-ix-split-button-h .left-button-border.sc-ix-split-button{border-top-width:0.125rem;border-right-width:0;border-left-width:0.125rem;border-bottom-width:0.125rem}";
const SplitButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buttonClick = createEvent(this, "buttonClick", 7);
    this.variant = "Primary";
    this.outline = false;
    this.invisible = false;
    this.ghost = false;
    this.label = void 0;
    this.icon = "";
    this.splitIcon = "context-menu";
    this.disabled = false;
    this.placement = "bottom-start";
    this.toggle = false;
  }
  get splitItems() {
    return Array.from(this.hostElement.querySelectorAll("ix-split-button-item"));
  }
  linkTriggerRef() {
    if (this.triggerElement && this.dropdownElement) {
      this.dropdownElement.trigger = this.triggerElement;
    }
  }
  componentDidLoad() {
    this.linkTriggerRef();
  }
  render() {
    return h(Host, null, h("div", { class: { "btn-group": true, "middle-gap": !this.outline } }, h("button", { class: Object.assign(Object.assign({}, getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, !this.label, false, false, this.disabled)), {
      "left-button-border": !this.outline
    }), onClick: (e) => this.buttonClick.emit(e) }, this.icon ? h("ix-icon", { name: this.icon }) : null, " ", this.label), h("button", { ref: (r) => this.triggerElement = r, class: Object.assign(Object.assign({}, getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, false, false, this.disabled)), {
      anchor: true
    }) }, h("ix-icon", { name: this.splitIcon }))), h("ix-dropdown", { ref: (r) => this.dropdownElement = r }, h("slot", null)));
  }
  get hostElement() {
    return getElement(this);
  }
};
SplitButton.style = splitButtonCss;
const splitButtonItemCss = ".sc-ix-split-button-item-h{display:block}";
const SplitButtonItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.itemClick = createEvent(this, "itemClick", 7);
    this.icon = void 0;
    this.label = void 0;
  }
  render() {
    return h("ix-dropdown-item", { icon: this.icon, label: this.label, onClick: (e) => this.itemClick.emit(e) });
  }
  get hostElement() {
    return getElement(this);
  }
};
SplitButtonItem.style = splitButtonItemCss;
export {
  SplitButton as ix_split_button,
  SplitButtonItem as ix_split_button_item
};

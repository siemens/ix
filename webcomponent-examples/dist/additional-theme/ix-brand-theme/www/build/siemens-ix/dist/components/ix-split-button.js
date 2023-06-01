import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { g as getButtonClasses } from './base-button.js';
import { d as defineCustomElement$3 } from './dropdown.js';
import { d as defineCustomElement$2 } from './icon.js';

const splitButtonCss = ".sc-ix-split-button-h{display:inline-block}.sc-ix-split-button-h .middle-gap.sc-ix-split-button{gap:0.125rem}.sc-ix-split-button-h .left-button-border.sc-ix-split-button{border-top-width:0.125rem;border-right-width:0;border-left-width:0.125rem;border-bottom-width:0.125rem}";

const SplitButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.buttonClick = createEvent(this, "buttonClick", 7);
    this.variant = 'Primary';
    this.outline = false;
    this.invisible = false;
    this.ghost = false;
    this.label = undefined;
    this.icon = '';
    this.splitIcon = 'context-menu';
    this.disabled = false;
    this.placement = 'bottom-start';
    this.toggle = false;
  }
  get splitItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-split-button-item'));
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
    return (h(Host, null, h("div", { class: { 'btn-group': true, 'middle-gap': !this.outline } }, h("button", { class: Object.assign(Object.assign({}, getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, !this.label, false, false, this.disabled)), {
        'left-button-border': !this.outline,
      }), onClick: (e) => this.buttonClick.emit(e) }, this.icon ? h("ix-icon", { name: this.icon }) : null, " ", this.label), h("button", { ref: (r) => (this.triggerElement = r), class: Object.assign(Object.assign({}, getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, false, false, this.disabled)), {
        anchor: true,
      }) }, h("ix-icon", { name: this.splitIcon }))), h("ix-dropdown", { ref: (r) => (this.dropdownElement = r) }, h("slot", null))));
  }
  get hostElement() { return this; }
  static get style() { return splitButtonCss; }
}, [6, "ix-split-button", {
    "variant": [1],
    "outline": [4],
    "invisible": [4],
    "ghost": [4],
    "label": [1],
    "icon": [1],
    "splitIcon": [1, "split-icon"],
    "disabled": [4],
    "placement": [1],
    "toggle": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-split-button", "ix-dropdown", "ix-icon"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-split-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SplitButton);
      }
      break;
    case "ix-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxSplitButton = SplitButton;
const defineCustomElement = defineCustomElement$1;

export { IxSplitButton, defineCustomElement };

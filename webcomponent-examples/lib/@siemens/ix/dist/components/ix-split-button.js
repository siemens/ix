import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { g as getButtonClasses } from './base-button.js';
import { d as defineCustomElement$3 } from './dropdown.js';
import { d as defineCustomElement$2 } from './icon.js';
import { c as createPopper } from './popper.js';

const splitButtonCss = ".sc-ix-split-button-h{display:block}";

const SplitButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.buttonClick = createEvent(this, "buttonClick", 7);
    /**
     * Color variant of button
     */
    this.variant = 'Primary';
    /**
     * Button outline variant
     */
    this.outline = false;
    /**
     * Button invisible
     *
     * @deprecated use ghost property
     */
    this.invisible = false;
    /**
     * Button invisible
     */
    this.ghost = false;
    /**
     * Button icon
     */
    this.icon = '';
    /**
     * Splitbutton icon
     */
    this.splitIcon = 'context-menu';
    /**
     * Disabled
     */
    this.disabled = false;
    /**
     * Placement of the dropdown
     */
    this.placement = 'bottom-start';
    this.toggle = false;
  }
  get splitItems() {
    return Array.from(this.hostElement.querySelectorAll('ix-split-button-item'));
  }
  clickOutside(e) {
    if (!this.hostElement.contains(e.target)) {
      this.toggle = false;
    }
  }
  componentDidLoad() {
    const element = this.hostElement.querySelector('.anchor');
    this.popover = this.hostElement.querySelector('ix-dropdown');
    this.popperInstance = createPopper(element, this.popover, {
      strategy: 'fixed',
      placement: this.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 0],
          },
        },
        {
          name: 'flip',
          options: {
            padding: 8,
          },
        },
      ],
    });
    window.addEventListener('click', this.clickOutside.bind(this));
  }
  disconnectedCallback() {
    var _a;
    (_a = this.popperInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    window.removeEventListener('click', this.clickOutside.bind(this));
  }
  toggleDropdown() {
    this.toggle = !this.toggle;
  }
  render() {
    return (h(Host, { class: "btn-group" }, h("button", { class: getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, !this.label, false, false, this.disabled), onClick: (e) => this.buttonClick.emit(e) }, this.icon ? h("ix-icon", { name: this.icon }) : null, " ", this.label), h("button", { class: Object.assign(Object.assign({}, getButtonClasses(this.variant, this.outline, this.ghost || this.invisible, true, false, false, this.disabled)), {
        anchor: true,
      }), onClick: () => this.toggleDropdown() }, h("ix-icon", { name: this.splitIcon }), h("ix-dropdown", { show: this.toggle }, h("slot", null)))));
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

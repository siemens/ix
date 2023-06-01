import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './button.js';
import { d as defineCustomElement$4 } from './dropdown.js';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './icon-button.js';

const dropdownButtonCss = ".sc-ix-dropdown-button-h{display:inline-block;position:relative;height:2rem}.sc-ix-dropdown-button-h .dropdown-button.sc-ix-dropdown-button{position:relative}.sc-ix-dropdown-button-h .hide.sc-ix-dropdown-button{display:none}.sc-ix-dropdown-button-h .triangle.sc-ix-dropdown-button{position:absolute;-webkit-margin-start:1.5625rem;margin-inline-start:1.5625rem;-webkit-margin-before:-0.4375rem;margin-block-start:-0.4375rem;border-right:0 solid transparent;border-left:4px solid transparent;border-top:0 solid transparent;border-bottom:4px solid;color:var(--theme-btn-primary--color)}.sc-ix-dropdown-button-h .triangle.primary.ghost.sc-ix-dropdown-button{color:var(--theme-btn-invisible-primary--color)}.sc-ix-dropdown-button-h .triangle.primary.outline.sc-ix-dropdown-button{color:var(--theme-btn-outline-primary--color)}.sc-ix-dropdown-button-h .triangle.primary.ghost.disabled.sc-ix-dropdown-button{color:var(--theme-btn-invisible-primary--color--disabled)}.sc-ix-dropdown-button-h .triangle.primary.outline.disabled.sc-ix-dropdown-button{color:var(--theme-btn-outline-primary--color--disabled)}.sc-ix-dropdown-button-h .triangle.primary.disabled.sc-ix-dropdown-button{color:var(--theme-btn-primary--color--disabled)}.sc-ix-dropdown-button-h .triangle.secondary.ghost.sc-ix-dropdown-button{color:var(--theme-btn-invisible-secondary--color)}.sc-ix-dropdown-button-h .triangle.secondary.outline.sc-ix-dropdown-button{color:var(--theme-btn-outline-secondary--color)}.sc-ix-dropdown-button-h .triangle.secondary.ghost.disabled.sc-ix-dropdown-button{color:var(--theme-btn-invisible-secondary--color--disabled)}.sc-ix-dropdown-button-h .triangle.secondary.outline.disabled.sc-ix-dropdown-button{color:var(--theme-btn-outline-secondary--color--disabled)}.sc-ix-dropdown-button-h .triangle.secondary.disabled.sc-ix-dropdown-button{color:var(--theme-btn-secondary--color--disabled)}.sc-ix-dropdown-button-h .hide.sc-ix-dropdown-button{display:none}.sc-ix-dropdown-button-h .dropdown.sc-ix-dropdown-button{width:auto !important;inset:auto !important;transform:unset !important}";

const DropdownButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.variant = 'Primary';
    this.outline = false;
    this.ghost = false;
    this.active = false;
    this.disabled = false;
    this.label = '';
    this.icon = undefined;
    this.dropdownAnchor = undefined;
  }
  getTriangle() {
    return (h("div", { class: {
        triangle: true,
        hide: this.label !== '',
        primary: this.variant === 'Primary',
        secondary: this.variant === 'Secondary',
        ghost: this.ghost,
        outline: this.outline,
        disabled: this.disabled,
      } }));
  }
  render() {
    return (h(Host, null, h("div", { class: "dropdown-button", ref: (ref) => {
        this.dropdownAnchor = ref;
      } }, h("ix-button", { variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled, class: { hide: this.label === '' } }, h("ix-icon", { name: this.icon, size: "24", class: { hide: this.icon === '' || this.icon === undefined } }), this.label, h("ix-icon", { name: "chevron-down-small", size: "24" })), h("ix-icon-button", { icon: this.icon, variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled, class: { hide: this.label !== '' } }), this.getTriangle()), h("ix-dropdown", { class: "dropdown", trigger: this.dropdownAnchor, placement: "bottom", positioningStrategy: 'fixed', adjustDropdownWidthToReferenceWidth: true }, h("slot", null))));
  }
  static get style() { return dropdownButtonCss; }
}, [6, "ix-dropdown-button", {
    "variant": [1],
    "outline": [4],
    "ghost": [4],
    "active": [4],
    "disabled": [4],
    "label": [1],
    "icon": [1],
    "dropdownAnchor": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-dropdown-button", "ix-button", "ix-dropdown", "ix-icon", "ix-icon-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-dropdown-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DropdownButton);
      }
      break;
    case "ix-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "ix-dropdown":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxDropdownButton = DropdownButton;
const defineCustomElement = defineCustomElement$1;

export { IxDropdownButton, defineCustomElement };

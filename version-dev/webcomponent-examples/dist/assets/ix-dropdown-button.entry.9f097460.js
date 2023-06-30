import { r as registerInstance, h, H as Host } from "./index.fceb1a46.js";
const dropdownButtonCss = ".sc-ix-dropdown-button-h{display:inline-block;position:relative;height:2rem;width:auto}.disabled.sc-ix-dropdown-button-h{pointer-events:none}.sc-ix-dropdown-button-h .hide.sc-ix-dropdown-button{display:none}.sc-ix-dropdown-button-h .dropdown-button.sc-ix-dropdown-button{display:block;position:relative;width:100%;height:100%}.sc-ix-dropdown-button-h .dropdown-button.sc-ix-dropdown-button>ix-button.sc-ix-dropdown-button{width:100%;height:100%}.sc-ix-dropdown-button-h .dropdown-button.sc-ix-dropdown-button .button-label.sc-ix-dropdown-button{margin-right:auto}.sc-ix-dropdown-button-h .triangle.sc-ix-dropdown-button{position:absolute;-webkit-margin-start:1.5625rem;margin-inline-start:1.5625rem;-webkit-margin-before:-0.4375rem;margin-block-start:-0.4375rem;border-right:0 solid transparent;border-left:4px solid transparent;border-top:0 solid transparent;border-bottom:4px solid;color:var(--theme-btn-primary--color)}.sc-ix-dropdown-button-h .triangle.primary.ghost.sc-ix-dropdown-button{color:var(--theme-btn-invisible-primary--color)}.sc-ix-dropdown-button-h .triangle.primary.outline.sc-ix-dropdown-button{color:var(--theme-btn-outline-primary--color)}.sc-ix-dropdown-button-h .triangle.primary.ghost.disabled.sc-ix-dropdown-button{color:var(--theme-btn-invisible-primary--color--disabled)}.sc-ix-dropdown-button-h .triangle.primary.outline.disabled.sc-ix-dropdown-button{color:var(--theme-btn-outline-primary--color--disabled)}.sc-ix-dropdown-button-h .triangle.primary.disabled.sc-ix-dropdown-button{color:var(--theme-btn-primary--color--disabled)}.sc-ix-dropdown-button-h .triangle.secondary.ghost.sc-ix-dropdown-button{color:var(--theme-btn-invisible-secondary--color)}.sc-ix-dropdown-button-h .triangle.secondary.outline.sc-ix-dropdown-button{color:var(--theme-btn-outline-secondary--color)}.sc-ix-dropdown-button-h .triangle.secondary.ghost.disabled.sc-ix-dropdown-button{color:var(--theme-btn-invisible-secondary--color--disabled)}.sc-ix-dropdown-button-h .triangle.secondary.outline.disabled.sc-ix-dropdown-button{color:var(--theme-btn-outline-secondary--color--disabled)}.sc-ix-dropdown-button-h .triangle.secondary.disabled.sc-ix-dropdown-button{color:var(--theme-btn-secondary--color--disabled)}.sc-ix-dropdown-button-h .dropdown.sc-ix-dropdown-button{width:auto !important;inset:auto !important;transform:unset !important}";
const DropdownButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "Primary";
    this.outline = false;
    this.ghost = false;
    this.active = false;
    this.disabled = false;
    this.label = void 0;
    this.icon = void 0;
    this.dropdownAnchor = void 0;
  }
  getTriangle() {
    return h("div", { class: {
      triangle: true,
      hide: this.label !== "",
      primary: this.variant === "Primary",
      secondary: this.variant === "Secondary",
      ghost: this.ghost,
      outline: this.outline,
      disabled: this.disabled
    } });
  }
  render() {
    return h(Host, { class: {
      disabled: this.disabled
    } }, h("div", { class: "dropdown-button", ref: (ref) => {
      this.dropdownAnchor = ref;
    } }, this.label ? h("ix-button", { variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled }, h("ix-icon", { name: this.icon, size: "24", class: { hide: this.icon === "" || this.icon === void 0 } }), h("div", { class: "button-label" }, this.label), h("ix-icon", { name: "chevron-down-small", size: "24" })) : h("div", null, h("ix-icon-button", { icon: this.icon, variant: this.variant, outline: this.outline, ghost: this.ghost, disabled: this.disabled }), this.getTriangle())), h("ix-dropdown", { class: "dropdown", trigger: this.dropdownAnchor, placement: "bottom", positioningStrategy: "fixed", adjustDropdownWidthToReferenceWidth: true }, h("slot", null)));
  }
};
DropdownButton.style = dropdownButtonCss;
export {
  DropdownButton as ix_dropdown_button
};

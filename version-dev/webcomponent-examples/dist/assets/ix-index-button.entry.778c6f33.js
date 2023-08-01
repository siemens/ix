import { r as registerInstance, h, H as Host } from "./index.0c924a37.js";
const indexButtonCss = ".sc-ix-index-button-h{max-height:2rem}.sc-ix-index-button-h .btn.sc-ix-index-button{min-width:2rem;height:2rem}.sc-ix-index-button-h .btn.selected.sc-ix-index-button{background-color:var(--theme-btn-invisible-secondary--background--selected);color:var(--theme-btn-invisible-secondary--color--selected)}";
const IxIndexButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.variant = "primary";
    this.selected = void 0;
  }
  render() {
    return h(Host, null, h("button", { class: {
      btn: true,
      "btn-invisible-primary": this.variant === "primary",
      "btn-invisible-secondary": this.variant === "secondary",
      selected: this.selected
    } }, h("slot", null)));
  }
};
IxIndexButton.style = indexButtonCss;
export {
  IxIndexButton as ix_index_button
};

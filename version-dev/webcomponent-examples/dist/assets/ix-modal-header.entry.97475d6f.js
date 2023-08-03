import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.7e8ea20d.js";
const modalHeaderCss = ":host{display:flex;padding:2px 16px 16px 10px;align-items:center;align-self:stretch}:host *,:host *::after,:host *::before{box-sizing:border-box}:host .modal-close{margin-left:auto;margin-right:-20px}:host .modal-icon{margin-right:1rem}";
const ModalHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeClick = createEvent(this, "closeClick", 7);
    this.hideClose = false;
    this.icon = void 0;
    this.iconColor = void 0;
  }
  onIconChange(icon) {
    if (icon) {
      this.parentDialog.classList.add("with-icon");
    } else {
      this.parentDialog.classList.remove("with-icon");
    }
  }
  componentDidLoad() {
    this.parentDialog = this.hostElement.closest("ix-modal");
    this.onIconChange(this.icon);
  }
  onCloseClick(event) {
    const ce = this.closeClick.emit(event);
    if (ce.defaultPrevented || event.defaultPrevented) {
      return;
    }
    this.parentDialog.dismissModal();
  }
  render() {
    return h(Host, null, this.icon ? h("ix-icon", { class: "modal-icon", name: this.icon, color: this.iconColor }) : null, h("ix-typography", { variant: "default-title" }, h("slot", null)), !this.hideClose ? h("ix-icon-button", { onClick: (event) => this.onCloseClick(event), ghost: true, icon: "close", class: "modal-close" }) : null);
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "icon": ["onIconChange"]
    };
  }
};
ModalHeader.style = modalHeaderCss;
export {
  ModalHeader as ix_modal_header
};

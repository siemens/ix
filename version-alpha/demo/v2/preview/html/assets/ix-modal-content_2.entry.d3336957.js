import { r as registerInstance, h, H as Host, c as createEvent, g as getElement } from "./global.bff64ac3.js";
import { a as closestPassShadow } from "./shadow-dom-i60z1FJC.6f08a0ce.js";
import { l as iconClose } from "./index-CrTP-icT.451e0ae2.js";
const modalContentCss = ":host{display:block;position:relative;overflow:auto;padding:0 0.5rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";
const ModalContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "966dfdf390ee974c55f0a1c05e63b1b0480826ad" }, h("slot", { key: "ef9e15cdce6192604d87cafc83caad2b73e820d9" }));
  }
};
ModalContent.style = modalContentCss;
const modalHeaderCss = ":host{display:flex;padding:0.5rem 0 0.5rem 0.5rem;align-items:center;gap:1rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .modal-title{flex-grow:1}:host .modal-close{align-self:flex-start}";
const ModalHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeClick = createEvent(this, "closeClick", 7);
    this.hideClose = false;
  }
  onIconChange(icon) {
    if (this.parentDialog) {
      if (icon) {
        this.parentDialog.classList.add("with-icon");
      } else {
        this.parentDialog.classList.remove("with-icon");
      }
    }
  }
  componentDidLoad() {
    this.parentDialog = closestPassShadow(this.hostElement, "ix-modal");
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
    return h(Host, { key: "6b75c891d3e4d19ce6f8692e73d1aa03c04b0cc4" }, this.icon ? h("ix-icon", { name: this.icon, color: this.iconColor, size: "32" }) : null, h("div", { key: "34e9e7683b1c4b9c800442c6b587cb2a6e58349e", class: "modal-title" }, h("ix-typography", { key: "f98c534d57ecebaa2201e3cfbaa697e42b728774", format: "h5" }, h("slot", { key: "bd2904a4745d9e695d4e91aef8225a268a8ee2b5" }))), !this.hideClose ? h("ix-icon-button", { class: "modal-close", onClick: (event) => this.onCloseClick(event), ghost: true, icon: iconClose }) : null);
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
  ModalContent as ix_modal_content,
  ModalHeader as ix_modal_header
};

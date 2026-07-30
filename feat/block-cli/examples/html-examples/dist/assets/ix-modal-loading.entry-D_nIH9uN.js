import { r as registerInstance, h, H as Host } from "./global-J1r-v9CX.js";
const modalLoadingCss = () => `:host{display:flex;justify-content:flex-start;align-items:center;gap:0.5rem;overflow:hidden}:host .loading-text{display:block;position:relative;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}`;
const ModalLoading = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, { key: "2948fa50eb8b89f42de86e296a9bd806d876ac0b" }, h("ix-spinner", { key: "2eaddad215bfd175fcd9947a984ef01f9f876326", variant: "primary" }), h("span", { key: "8f9b42ebf3e81c83540acd27114fd62aea122f47", class: "loading-text" }, h("slot", { key: "d7c724c37d8e0c83686c95826c9f9066c1bb23fc" })));
  }
};
ModalLoading.style = modalLoadingCss();
export {
  ModalLoading as ix_modal_loading
};

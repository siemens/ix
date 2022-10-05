'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1e4a348f.js');
const modalUtils = require('./modal-utils-5d7bb217.js');

const ModalExample = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  dismiss() {
    modalUtils.dismissModal(this.host);
  }
  close() {
    modalUtils.closeModal(this.host, 'Done!');
  }
  render() {
    return (index.h(index.Host, null, index.h("div", null, index.h("div", { class: "modal-header" }, "Message headline", index.h("ix-icon-button", { "data-close-button": true, ghost: true, icon: "close", onClick: () => this.dismiss() })), index.h("div", { class: "modal-body" }, "Message text lorem ipsum"), index.h("div", { class: "modal-footer" }, index.h("ix-button", { outline: true, onClick: () => this.dismiss() }, "Cancel"), index.h("ix-button", { onClick: () => this.close() }, "OK")))));
  }
  get host() { return index.getElement(this); }
};

exports.ix_modal_example = ModalExample;

import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as TypedEvent } from './typed-event.js';
import { d as defineCustomElement$2 } from './icon.js';
import { d as defineCustomElement$1 } from './modal.js';

const modalContainerCss = ".sc-ix-modal-container-h{position:absolute;top:0;left:0;z-index:9999}";

/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __rest = (undefined && undefined.__rest) || function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const ModalContainer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  /**
   * Display modal dialog
   *
   * @param config
   */
  async showModal(config) {
    const onClose = new TypedEvent();
    const onDismiss = new TypedEvent();
    const modal = document.createElement('ix-modal');
    let { title, content } = config, modifiedConfig = __rest(config, ["title", "content"]);
    Object.assign(modal, Object.assign({ headerTitle: title }, modifiedConfig));
    if (typeof content === 'string') {
      const template = document.createElement('template');
      content = content.trim();
      template.innerHTML = content;
      modal.appendChild(template.content.firstChild);
    }
    else {
      modal.appendChild(content);
    }
    this.hostElement.appendChild(modal);
    modal.addEventListener('closed', (event) => {
      this.hostElement.removeChild(modal);
      onClose.emit(event.detail);
    });
    modal.addEventListener('dismissed', (event) => {
      this.hostElement.removeChild(modal);
      onDismiss.emit(event.detail);
    });
    return {
      onClose,
      onDismiss,
    };
  }
  render() {
    return h(Host, null);
  }
  get hostElement() { return this; }
  static get style() { return modalContainerCss; }
}, [2, "ix-modal-container", {
    "showModal": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-modal-container", "ix-icon", "ix-modal"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-modal-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ModalContainer);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "ix-modal":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { ModalContainer as M, defineCustomElement as d };

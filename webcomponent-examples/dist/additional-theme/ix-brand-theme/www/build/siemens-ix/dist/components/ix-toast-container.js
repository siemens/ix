import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { T as TypedEvent } from './typed-event.js';
import { d as defineCustomElement$4 } from './icon.js';
import { d as defineCustomElement$3 } from './icon-button.js';
import { d as defineCustomElement$2 } from './toast.js';

const ToastContainer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.containerId = 'toast-container';
    this.containerClass = 'toast-container';
    this.position = 'bottom-right';
  }
  get hostContainer() {
    return document.getElementById(this.containerId);
  }
  componentDidLoad() {
    if (!document.getElementById(this.containerId)) {
      const toastContainer = document.createElement('div');
      toastContainer.id = this.containerId;
      toastContainer.classList.add(this.containerClass);
      toastContainer.classList.add(`toast-container--${this.position}`);
      document.body.appendChild(toastContainer);
    }
  }
  /**
   * Display a toast message
   * @param config
   */
  async showToast(config) {
    const toast = document.createElement('ix-toast');
    const onClose = new TypedEvent();
    function removeToast(result) {
      toast.remove();
      onClose.emit(result);
    }
    toast.toastTitle = config.title;
    toast.type = config.type;
    toast.autoClose = config.autoClose;
    toast.autoCloseDelay = config.autoCloseDelay;
    toast.icon = config.icon;
    toast.iconColor = config.iconColor;
    toast.addEventListener('closeToast', (event) => {
      const { detail } = event;
      removeToast(detail);
    });
    if (typeof config.message === 'string') {
      toast.innerText = config.message;
    }
    else {
      toast.appendChild(config.message);
    }
    this.hostContainer.appendChild(toast);
    return {
      onClose,
      close: (result) => {
        removeToast(result);
      },
    };
  }
  render() {
    return h(Host, null);
  }
  get host() { return this; }
}, [2, "ix-toast-container", {
    "containerId": [1, "container-id"],
    "containerClass": [1, "container-class"],
    "position": [1],
    "showToast": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-toast-container", "ix-icon", "ix-icon-button", "ix-toast"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-toast-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ToastContainer);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-toast":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxToastContainer = ToastContainer;
const defineCustomElement = defineCustomElement$1;

export { IxToastContainer, defineCustomElement };

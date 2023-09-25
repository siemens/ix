import { r as registerInstance, h, H as Host } from "./index.f81d923f.js";
import { T as TypedEvent } from "./typed-event-a230184a.ccfb44d2.js";
const ToastContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.PREFIX_POSITION_CLASS = "toast-container--";
    this.containerId = "toast-container";
    this.containerClass = "toast-container";
    this.position = "bottom-right";
  }
  get hostContainer() {
    return document.getElementById(this.containerId);
  }
  componentDidLoad() {
    if (!document.getElementById(this.containerId)) {
      const toastContainer = document.createElement("div");
      toastContainer.id = this.containerId;
      toastContainer.classList.add(this.containerClass);
      toastContainer.classList.add(`${this.PREFIX_POSITION_CLASS}${this.position}`);
      document.body.appendChild(toastContainer);
    }
  }
  onPositionChange(newPosition, oldPosition) {
    const toastContainer = document.getElementById(this.containerId);
    toastContainer.classList.remove(`${this.PREFIX_POSITION_CLASS}${oldPosition}`);
    toastContainer.classList.add(`${this.PREFIX_POSITION_CLASS}${newPosition}`);
  }
  async showToast(config) {
    const toast = document.createElement("ix-toast");
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
    toast.addEventListener("closeToast", (event) => {
      const { detail } = event;
      removeToast(detail);
    });
    if (typeof config.message === "string") {
      toast.innerText = config.message;
    } else {
      toast.appendChild(config.message);
    }
    this.hostContainer.appendChild(toast);
    return {
      onClose,
      close: (result) => {
        removeToast(result);
      }
    };
  }
  render() {
    return h(Host, null);
  }
  static get watchers() {
    return {
      "position": ["onPositionChange"]
    };
  }
};
export {
  ToastContainer as ix_toast_container
};

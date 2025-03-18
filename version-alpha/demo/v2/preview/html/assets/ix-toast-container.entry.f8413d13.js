import { r as registerInstance, h, H as Host } from "./global.78f61b49.js";
import { T as TypedEvent } from "./typed-event-BdCnOrqW.51d2f30a.js";
const toastContainerCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}#toast-container>:not(:last-child){margin-block-end:1rem}.toast-container{display:block;position:fixed}.toast-container--top-right{right:1rem;top:2rem}.toast-container--bottom-right{right:1rem;bottom:2rem}";
const ToastContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.containerId = "toast-container";
    this.containerClass = "toast-container";
    this.position = "bottom-right";
    this.PREFIX_POSITION_CLASS = "toast-container--";
  }
  get hostContainer() {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        const containerElement = document.getElementById(this.containerId);
        if (containerElement) {
          clearInterval(interval);
          resolve(containerElement);
        }
      });
    });
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
    if (!toastContainer) {
      console.warn("No toast container found, cannot configure toast position");
      return;
    }
    toastContainer.classList.remove(`${this.PREFIX_POSITION_CLASS}${oldPosition}`);
    toastContainer.classList.add(`${this.PREFIX_POSITION_CLASS}${newPosition}`);
  }
  async showToast(config) {
    var _a, _b, _c;
    const toast = document.createElement("ix-toast");
    const onClose = new TypedEvent();
    function removeToast(result) {
      toast.remove();
      onClose.emit(result);
    }
    toast.toastTitle = config.title;
    toast.type = (_a = config.type) !== null && _a !== void 0 ? _a : "info";
    toast.autoClose = (_b = config.autoClose) !== null && _b !== void 0 ? _b : true;
    toast.autoCloseDelay = (_c = config.autoCloseDelay) !== null && _c !== void 0 ? _c : 5e3;
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
    (await this.hostContainer).appendChild(toast);
    return {
      onClose,
      close: (result) => {
        removeToast(result);
      }
    };
  }
  render() {
    return h(Host, { key: "3f9091aca4d2ab34d13af048ddfb7511fb73c9fb", class: {
      "toast-container--bottom-right": this.position === "bottom-right",
      "toast-container--top-right": this.position === "top-right"
    } }, h("slot", { key: "796838eafe6fc9a1a76b406a1f3840d1fb1ae7a4" }));
  }
  static get watchers() {
    return {
      "position": ["onPositionChange"]
    };
  }
};
ToastContainer.style = toastContainerCss;
export {
  ToastContainer as ix_toast_container
};

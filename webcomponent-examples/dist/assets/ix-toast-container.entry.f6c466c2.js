import { r as registerInstance, h, H as Host } from "./global.2bfd6008.js";
import { T as TypedEvent } from "./typed-event-ad6484c5.eb731a3b.js";
const toastContainerCss = ":host{}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}#toast-container>:not(:last-child){margin-block-end:1rem}.toast-container{display:block;position:fixed}.toast-container--top-right{right:1rem;top:2rem}.toast-container--bottom-right{right:1rem;bottom:2rem}";
const IxToastContainerStyle0 = toastContainerCss;
const ToastContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.PREFIX_POSITION_CLASS = "toast-container--";
    this.containerId = "toast-container";
    this.containerClass = "toast-container";
    this.position = "bottom-right";
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
    toastContainer.classList.remove(`${this.PREFIX_POSITION_CLASS}${oldPosition}`);
    toastContainer.classList.add(`${this.PREFIX_POSITION_CLASS}${newPosition}`);
  }
  async showToast(config) {
    var _a, _b;
    const toast = document.createElement("ix-toast");
    const onClose = new TypedEvent();
    function removeToast(result) {
      toast.remove();
      onClose.emit(result);
    }
    toast.toastTitle = config.title;
    toast.type = config.type;
    toast.autoClose = (_a = config.autoClose) !== null && _a !== void 0 ? _a : true;
    toast.autoCloseDelay = (_b = config.autoCloseDelay) !== null && _b !== void 0 ? _b : 5e3;
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
    return h(Host, { key: "0bfccf7c84f68735f44d9b7fb79eddd5cc9f7720", class: {
      "toast-container--bottom-right": this.position === "bottom-right",
      "toast-container--top-right": this.position === "top-right"
    } }, h("slot", { key: "936e1593293b6c445651a9838a676b9412dfb648" }));
  }
  static get watchers() {
    return {
      "position": ["onPositionChange"]
    };
  }
};
ToastContainer.style = IxToastContainerStyle0;
export {
  ToastContainer as ix_toast_container
};

import { r as registerInstance, h, H as Host } from "./global-DXu0UsM0.js";
import { T as TypedEvent } from "./typed-event-BdCnOrqW-CWsLM0S_.js";
const toastContainerCss = ":host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}#toast-container>:not(:last-child){margin-block-end:1rem}.toast-container{display:block;position:fixed;z-index:var(--theme-z-index-toast)}.toast-container--top-right{right:1rem;top:2rem}.toast-container--bottom-right{right:1rem;bottom:2rem}";
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
  /**
   * Display a toast message
   * @param config
   */
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
    toast.preventAutoClose = config.autoClose === false;
    toast.autoCloseDelay = (_b = config.autoCloseDelay) !== null && _b !== void 0 ? _b : 5e3;
    toast.icon = config.icon;
    toast.iconColor = config.iconColor;
    toast.hideIcon = (_c = config.hideIcon) !== null && _c !== void 0 ? _c : false;
    toast.addEventListener("closeToast", (event) => {
      const { detail } = event;
      removeToast(detail);
    });
    if (config.message) {
      if (typeof config.message === "string") {
        toast.innerText = config.message;
      } else {
        toast.appendChild(config.message);
      }
    }
    if (config.action && config.action instanceof HTMLElement) {
      config.action.slot = "action";
      toast.appendChild(config.action);
    }
    (await this.hostContainer).appendChild(toast);
    return {
      onClose,
      close: (result) => {
        removeToast(result);
      },
      pause: () => {
        toast.pause();
      },
      resume: () => {
        toast.resume();
      },
      isPaused: () => {
        return toast.isPaused();
      }
    };
  }
  render() {
    return h(Host, { key: "7afdcfbb2392cc6da11fa5c4e08eca88f2a1274a", class: {
      "toast-container--bottom-right": this.position === "bottom-right",
      "toast-container--top-right": this.position === "top-right"
    } }, h("slot", { key: "e9c58b5682aecadcf2c22eb87a9bfd1994b7e674" }));
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

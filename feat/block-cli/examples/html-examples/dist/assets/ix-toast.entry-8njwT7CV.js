import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-CRrZCTD3.js";
import { y as iconClose, c as iconWarning, a as iconSuccess, b as iconError, d as iconInfo } from "./index-DgUGsIlh-CLxQRaVd.js";
const toastCss = () => `:host{display:flex;flex-direction:column;position:relative;min-width:17.5rem;max-width:17.5rem;min-height:3.5rem;pointer-events:all;background-color:var(--theme-toast--background);border:var(--theme-toast--border-thickness) solid var(--theme-toast--border-color);border-radius:var(--theme-toast--border-radius, var(--theme-toast--border-radus));box-shadow:var(--theme-toast--box-shadow);--animate-duration:var(--theme-medium-time)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .toast-body{display:flex;position:relative;min-height:3.5rem;width:100%;flex-grow:1;padding:0.75rem 0.75rem 0.25rem}:host .toast-body .toast-icon{display:flex;align-items:flex-start;padding:0.25rem}:host .toast-body .toast-content{overflow:hidden;min-width:0;width:100%;padding:0.25rem}:host .toast-body .toast-content .toast-title{min-width:0;margin:0.25rem 0px;overflow-wrap:break-word;word-break:break-word}:host .toast-body .toast-content .toast-message{min-width:0;overflow-wrap:break-word;word-break:break-word;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .toast-body .toast-content .toast-action{margin-top:0.5rem}:host .toast-close{display:flex;position:relative;pointer-events:all;margin-left:auto;margin-right:0px;opacity:0.6}:host .toast-close:hover{opacity:1}:host .toast-progress-bar{position:absolute;bottom:0;height:0.125rem;width:100%;background-color:var(--theme-toast-timer-value--background);transform-origin:left}:host .toast-progress-bar--animated{animation:trackProgress linear 1 forwards}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}`;
const Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeToast = createEvent(this, "closeToast", 7);
  }
  /**
   * Toast type
   */
  type = "info";
  /**
   * Toast title
   */
  toastTitle;
  /**
   * Autoclose title after delay
   */
  autoCloseDelay = 5e3;
  /**
   * Autoclose behavior
   */
  preventAutoClose = false;
  /**
   * Icon of toast
   */
  icon;
  /**
   * Icon color of toast
   */
  iconColor;
  /**
   * Allows to hide the icon in the toast.
   */
  hideIcon = false;
  /**
   * ARIA label for the close icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelCloseIconButton = "Close toast";
  /**
   * Toast closed
   */
  closeToast;
  progress = 0;
  touched = false;
  paused = false;
  get hostElement() {
    return getElement(this);
  }
  getIcon() {
    if (this.icon) {
      return h("ix-icon", { "data-testid": "toast-icon", name: this.icon, color: this.iconColor, size: "24" });
    }
    switch (this.type) {
      case "info":
        return h("ix-icon", { "data-testid": "toast-icon", name: iconInfo, size: "24", color: "color-std-text" });
      case "error":
        return h("ix-icon", { "data-testid": "toast-icon", name: iconError, size: "24", color: "color-alarm" });
      case "success":
        return h("ix-icon", { "data-testid": "toast-icon", name: iconSuccess, size: "24", color: "color-success" });
      case "warning":
        return h("ix-icon", { "data-testid": "toast-icon", name: iconWarning, size: "24", color: "color-warning-text" });
      default:
        return "";
    }
  }
  close() {
    if (this.hostElement) {
      this.hostElement.classList.add("animate__fadeOut");
    }
    setTimeout(() => {
      this.closeToast.emit();
    }, 250);
  }
  /**
   * Pause the toast's auto-close progress bar and timer.
   */
  async pause() {
    this.paused = true;
  }
  /**
   * Resume the toast's auto-close progress bar and timer if previously paused.
   */
  async resume() {
    this.paused = false;
  }
  /**
   * Returns whether the toast is currently paused (auto-close is paused).
   */
  async isPaused() {
    return this.paused || this.touched;
  }
  render() {
    let progressBarStyle = {};
    const progressBarClass = ["toast-progress-bar"];
    progressBarStyle = {
      animationDuration: `${this.autoCloseDelay}ms`,
      animationPlayState: this.touched || this.paused ? "paused" : "running"
    };
    progressBarClass.push("toast-progress-bar--animated");
    return h(Host, { key: "189ee2f8995cef3ebcd6cf204f5ec1a49743a64b", role: "alert", "aria-live": "polite", "aria-atomic": "true", class: "animate__animated animate__fadeIn" }, h("div", { key: "c929498ec36f6b37bc9f76e5dd795428fd897bca", class: "toast-body", onPointerLeave: () => {
      this.touched = false;
    }, onPointerEnter: () => {
      this.touched = true;
    } }, (this.type || this.icon) && !this.hideIcon ? h("div", { class: "toast-icon" }, this.getIcon()) : null, h("div", { key: "4a7136c6520d2318204c5e1253dff009d5834b16", class: "toast-content" }, this.toastTitle ? h("ix-typography", { class: "toast-title", format: "h5" }, this.toastTitle) : null, h("div", { key: "aeebcd7de3692ccba1d7664c863c8c66a25d804e", class: "toast-message" }, h("slot", { key: "9e01a68848c89927f77193304e2ea6233cbc8531" })), h("div", { key: "89e0bd8dd073b7bc8b289c57a72d715a298dd38d", class: "toast-action" }, h("slot", { key: "b79858198bd418bc5fc523a1178fd265e0784e77", name: "action" }))), h("div", { key: "bbcb0a1eea0aadc16f3a2b29b617529e0ce461e7", class: "toast-close" }, h("ix-icon-button", { key: "6a1ec7d600b010d977c4121ee69bb092b41b7146", icon: iconClose, iconColor: "color-soft-text", size: "24", variant: "tertiary", onClick: () => this.closeToast.emit(), "aria-label": this.ariaLabelCloseIconButton }))), !this.preventAutoClose && h("div", { key: "3521536a7d0111cb127fc7658e134c671736a136", class: progressBarClass.join(" "), style: progressBarStyle, onAnimationEnd: () => {
      this.close();
    }, onTransitionEnd: () => {
      if (this.progress === 0) {
        this.close();
      }
    } }));
  }
};
Toast.style = toastCss();
export {
  Toast as ix_toast
};

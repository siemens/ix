import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./global-BRajFsjN.js";
import { b as iconError, a as iconSuccess, s as iconWarningOctagon, d as iconInfo, n as iconWarningRhomb, c as iconWarning, v as iconAlarm, R as iconClose } from "./index-DwLtFbui-Caa0eG-T.js";
const toastCss = () => `@charset "UTF-8";:host{--ix-toast--background:var(--si-sys-color-background-1);--ix-toast--border-color:rgba(0, 0, 0, 0);--ix-toast--box-shadow:var(--si-sys-color-effects-shadow-4);--ix-toast-timer-value--background:var(--si-sys-color-border-3)}:host{--ix-toast--animation-duration:var(--theme-medium-time);--ix-toast--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-toast--border-width:var(--si-sys-sizing-border-width-none);--ix-toast--min-width:var(--si-sys-sizing-size-170);--ix-toast--max-width:var(--si-sys-sizing-size-170);--ix-toast--min-height:var(--si-sys-sizing-size-100);--ix-toast-body--min-height:var(--si-sys-sizing-size-100);--ix-toast-body--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-50)     var(--si-sys-sizing-spacing-y-20);--ix-toast-icon--padding:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-20);--ix-toast-content--padding:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-20);--ix-toast-title--margin:var(--si-sys-sizing-spacing-y-20) 0;--ix-toast-action--margin-top:var(--si-sys-sizing-spacing-y-40);--ix-toast-close--opacity:0.6;--ix-toast-progress-bar--height:var(--si-sys-sizing-size-10)}:host{display:flex;flex-direction:column;position:relative;min-width:var(--ix-toast--min-width);max-width:var(--ix-toast--max-width);min-height:var(--ix-toast--min-height);pointer-events:all;background-color:var(--ix-toast--background);border:var(--ix-toast--border-width) solid var(--ix-toast--border-color);border-radius:var(--ix-toast--border-radius);box-shadow:var(--ix-toast--box-shadow);animation-name:toast-fade-in;animation-duration:var(--ix-toast--animation-duration);animation-fill-mode:both}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .toast-body{display:flex;position:relative;min-height:var(--ix-toast-body--min-height);width:100%;flex-grow:1;padding:var(--ix-toast-body--padding)}:host .toast-body .toast-icon{display:flex;align-items:flex-start;padding:var(--ix-toast-icon--padding)}:host .toast-body .toast-content{overflow:hidden;min-width:0;width:100%;padding:var(--ix-toast-content--padding)}:host .toast-body .toast-content .toast-title{min-width:0;margin:var(--ix-toast-title--margin);overflow-wrap:break-word;word-break:break-word}:host .toast-body .toast-content .toast-message{min-width:0;overflow-wrap:break-word;word-break:break-word;font:var(--si-sys-typography-body-paragraph);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .toast-body .toast-content .toast-action{margin-top:var(--ix-toast-action--margin-top)}:host .toast-close{display:flex;position:relative;pointer-events:all;margin-left:auto;margin-right:0px;opacity:var(--ix-toast-close--opacity)}:host .toast-close:hover{opacity:1}:host .toast-progress-bar{position:absolute;bottom:0;height:var(--ix-toast-progress-bar--height);width:100%;background-color:var(--ix-toast-timer-value--background);transform-origin:left}:host .toast-progress-bar--animated{animation:trackProgress linear 1 forwards}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}:host(.toast-fade-out){animation-name:toast-fade-out}@keyframes toast-fade-in{from{opacity:0}to{opacity:1}}@keyframes toast-fade-out{from{opacity:1}to{opacity:0}}`;
const Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeToast = createEvent(this, "closeToast", 7);
  }
  /**
   * Toast type
   */
  type = "information";
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
   * Icon color as a CSS custom property name, for example
   * `--si-sys-color-text-primary`.
   */
  iconColor;
  /**
   * Allows to hide the icon in the toast.
   */
  hideIcon = false;
  /**
   * ARIA label for the close icon button.
   * Will be set as aria-label on the nested HTML button element.
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
  static toastTypeConfigs = {
    danger: {
      icon: iconAlarm,
      color: "--si-sys-color-border-danger"
    },
    warning: {
      icon: iconWarning,
      color: "--si-sys-color-border-warning"
    },
    caution: {
      icon: iconWarningRhomb,
      color: "--si-sys-color-border-caution"
    },
    information: {
      icon: iconInfo,
      color: "--si-sys-color-border-information"
    },
    critical: {
      icon: iconWarningOctagon,
      color: "--si-sys-color-border-critical"
    },
    success: {
      icon: iconSuccess,
      color: "--si-sys-color-border-success"
    },
    error: {
      icon: iconError,
      color: "--si-sys-color-border-danger"
    }
  };
  getIcon() {
    if (this.icon) {
      return h("ix-icon", { "data-testid": "toast-icon", "aria-hidden": "true", name: this.icon, color: this.iconColor });
    }
    const config = Toast.toastTypeConfigs[this.type];
    if (!config) {
      return "";
    }
    return h("ix-icon", { "data-testid": "toast-icon", "aria-hidden": "true", name: config.icon, color: config.color });
  }
  isClosing = false;
  close() {
    if (this.isClosing) {
      return;
    }
    this.isClosing = true;
    let closed = false;
    const emitClose = () => {
      if (closed) {
        return;
      }
      closed = true;
      this.hostElement.removeEventListener("animationend", onAnimationEnd);
      this.closeToast.emit();
    };
    const onAnimationEnd = (event) => {
      if (event.target === this.hostElement && event.animationName === "toast-fade-out") {
        emitClose();
      }
    };
    this.hostElement.addEventListener("animationend", onAnimationEnd);
    this.hostElement.classList.add("toast-fade-out");
    const fallbackMs = this.getAnimationDurationMs() + 50;
    setTimeout(emitClose, fallbackMs);
  }
  getAnimationDurationMs() {
    const { animationDuration } = window.getComputedStyle(this.hostElement);
    const value = parseFloat(animationDuration);
    if (!Number.isFinite(value)) {
      return 0;
    }
    return animationDuration.trim().endsWith("ms") ? value : value * 1e3;
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
    return h(Host, { key: "e407e56d2b2c2cfbffc938d19d1ce31f06370658", role: "alert", "aria-live": "polite", "aria-atomic": "true" }, h("div", { key: "cfa288d36d27f0bf1448a8150110c19bcb80e389", class: "toast-body", onPointerLeave: () => {
      this.touched = false;
    }, onPointerEnter: () => {
      this.touched = true;
    } }, (this.type || this.icon) && !this.hideIcon ? h("div", { class: "toast-icon" }, this.getIcon()) : null, h("div", { key: "84e875f6977aaa2ec1d0e75839f25252070f6837", class: "toast-content" }, this.toastTitle ? h("ix-typography", { class: "toast-title", format: "h5" }, this.toastTitle) : null, h("div", { key: "b958c39f1f2c0ea6494855ea301e4e0eb46d5584", class: "toast-message" }, h("slot", { key: "348ed99f77618330617ab0cec77650cfb4acac43" })), h("div", { key: "d7945b4485e8e57e254e3c475feefbfe60eaa65a", class: "toast-action" }, h("slot", { key: "5ef228589634ba4d1105a4e65c09a4d210d58f26", name: "action" }))), h("div", { key: "640e01bd1a90bc910cb12f01f7eebd3c337c4449", class: "toast-close" }, h("ix-icon-button", { key: "a1830523eb2e64c216f5dc4d2fdaae99f9552497", icon: iconClose, iconColor: "--si-sys-color-text-secondary", variant: "tertiary", onClick: () => this.closeToast.emit(), "aria-label": this.ariaLabelCloseIconButton }))), !this.preventAutoClose && h("div", { key: "dbd4edd9ba79c199832aa701f0c6c20ecd6a3565", class: progressBarClass.join(" "), style: progressBarStyle, onAnimationEnd: () => {
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

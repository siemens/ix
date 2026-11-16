import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from "./index-CgUi6DzV-17Qxv5n9.js";
import { h as hasSlottedContent } from "./shadow-dom-cGv1zHOb-DvI9lJZX.js";
import { a as iconError, b as iconSuccess, c as iconWarningOctagon, d as iconInfo, e as iconWarningRhomb, f as iconWarning, g as iconAlarm, G as iconClose } from "./index-CZ_u3Y0s-B1dE3kOK.js";
import "./preload-helper-UZRgTS1n.js";
const toastCss = () => `@charset "UTF-8";:host{--ix-toast--background:var(--si-sys-color-background-1);--ix-toast--border-color:rgba(0, 0, 0, 0);--ix-toast--box-shadow:var(--si-sys-color-effects-shadow-40);--ix-toast-timer-value--background:var(--si-sys-color-border-3);--ix-toast-status-color:transparent;--ix-toast--strip-width:var(--si-sys-sizing-border-width-emphasis)}:host([type=danger]){--ix-toast-status-color:var(--si-sys-color-border-danger)}:host([type=warning]){--ix-toast-status-color:var(--si-sys-color-border-warning)}:host([type=caution]){--ix-toast-status-color:var(--si-sys-color-border-caution)}:host([type=information]){--ix-toast-status-color:var(--si-sys-color-border-information)}:host([type=critical]){--ix-toast-status-color:var(--si-sys-color-border-critical)}:host([type=success]){--ix-toast-status-color:var(--si-sys-color-border-success)}:host([type=error]){--ix-toast-status-color:var(--si-sys-color-border-danger)}:host{--ix-toast--animation-duration:var(--theme-medium-time);--ix-toast--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-toast--border-width:var(--si-sys-sizing-border-width-none);--ix-toast--min-width:var(--si-sys-sizing-size-170);--ix-toast--max-width:var(--si-sys-sizing-size-170);--ix-toast--min-height:var(--si-sys-sizing-size-100);--ix-toast-body--min-height:var(--si-sys-sizing-size-100);--ix-toast-body--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-50)     calc(       var(--si-sys-sizing-spacing-y-40) + var(--ix-toast-progress-bar--height)     );--ix-toast-icon--padding:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-20);--ix-toast-content--padding:var(--si-sys-sizing-spacing-y-20) var(--si-sys-sizing-spacing-x-20);--ix-toast-title--margin:0;--ix-toast-action--margin-top:var(--si-sys-sizing-spacing-y-40);--ix-toast-close--opacity:0.6;--ix-toast-progress-bar--height:var(--si-sys-sizing-size-10)}:host{display:flex;flex-direction:column;position:relative;min-width:var(--ix-toast--min-width);max-width:var(--ix-toast--max-width);min-height:var(--ix-toast--min-height);pointer-events:all;background-color:var(--ix-toast--background);border:var(--ix-toast--border-width) solid var(--ix-toast--border-color);border-radius:var(--ix-toast--border-radius);box-shadow:var(--ix-toast--box-shadow);overflow:hidden;animation-name:toast-fade-in;animation-duration:var(--ix-toast--animation-duration);animation-fill-mode:both}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .toast-body{display:flex;position:relative;min-height:var(--ix-toast-body--min-height);width:100%;flex-grow:1;padding:var(--ix-toast-body--padding)}:host .toast-body .toast-icon{display:flex;align-items:flex-start;padding:var(--ix-toast-icon--padding)}:host .toast-body .toast-content{overflow:hidden;min-width:0;width:100%;padding:var(--ix-toast-content--padding)}:host .toast-body .toast-content .toast-title{min-width:0;margin:var(--ix-toast-title--margin);overflow-wrap:break-word;word-break:break-word}:host .toast-body .toast-content .toast-message{min-width:0;overflow-wrap:break-word;word-break:break-word;font:var(--si-sys-typography-body-paragraph);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .toast-body .toast-content .toast-action{margin-top:var(--ix-toast-action--margin-top)}:host .toast-body .toast-content .toast-action--empty{margin-top:0}:host .toast-close{display:flex;position:relative;pointer-events:all;margin-left:auto;margin-right:0px;opacity:var(--ix-toast-close--opacity)}:host .toast-close:hover{opacity:1}:host .toast-progress-bar{position:absolute;bottom:0;height:var(--ix-toast-progress-bar--height);width:100%;background-color:var(--ix-toast-timer-value--background);transform-origin:left}:host .toast-progress-bar--animated{animation:trackProgress linear 1 forwards}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}:host::before{content:"";position:absolute;top:0;bottom:0;left:0;width:var(--ix-toast--strip-width);border-radius:var(--ix-toast--border-radius) 0 0 var(--ix-toast--border-radius);z-index:1;pointer-events:none;background-color:var(--ix-toast-status-color)}:host(.toast-fade-out){animation-name:toast-fade-out}@keyframes toast-fade-in{from{opacity:0}to{opacity:1}}@keyframes toast-fade-out{from{opacity:1}to{opacity:0}}`;
const Toast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closeToast = createEvent(this, "closeToast", 7);
  }
  /**
   * Toast type, determining the status icon and left-side status strip color.
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
  hasAction = false;
  get hostElement() {
    return getElement(this);
  }
  static toastTypeIcons = {
    danger: iconAlarm,
    warning: iconWarning,
    caution: iconWarningRhomb,
    information: iconInfo,
    critical: iconWarningOctagon,
    success: iconSuccess,
    error: iconError
  };
  getIcon() {
    if (this.icon) {
      return h("ix-icon", { "data-testid": "toast-icon", "aria-hidden": "true", name: this.icon, color: this.iconColor });
    }
    const icon = Toast.toastTypeIcons[this.type];
    if (!icon) {
      return "";
    }
    return h("ix-icon", { "data-testid": "toast-icon", "aria-hidden": "true", name: icon, color: "--ix-toast-status-color" });
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
    let progressBarStyle;
    const progressBarClass = ["toast-progress-bar"];
    progressBarStyle = {
      animationDuration: `${this.autoCloseDelay}ms`,
      animationPlayState: this.touched || this.paused ? "paused" : "running"
    };
    progressBarClass.push("toast-progress-bar--animated");
    return h(Host, { key: "19ada8790aa46f1a2bba592f71e05719d87b67bf", role: "alert", "aria-live": "polite", "aria-atomic": "true" }, h("div", { key: "b14210ad2e6664f866634f522dd207c6f7160d17", class: "toast-body", onPointerLeave: () => {
      this.touched = false;
    }, onPointerEnter: () => {
      this.touched = true;
    } }, (this.type || this.icon) && !this.hideIcon ? h("div", { class: "toast-icon", "aria-hidden": "true" }, this.getIcon()) : null, h("div", { key: "38a152f8b00db10d25b8bf0daa1f1462fd8a6d99", class: "toast-content" }, this.toastTitle ? h("ix-typography", { class: "toast-title", format: "h5" }, this.toastTitle) : null, h("div", { key: "734cbec87fba8ef6c39996d1551e127d1e20eebe", class: "toast-message" }, h("slot", { key: "1fcb884a3096291aca6c5cf60c54264d1384c6d7" })), h("div", { key: "f67b7162f54b92778f0e345e5978711e30564eb1", class: {
      "toast-action": true,
      "toast-action--empty": !this.hasAction
    } }, h("slot", { key: "bdbbd94ecc6633fbd19b47b3cca806c56f98c10e", name: "action", onSlotchange: (event) => {
      this.hasAction = hasSlottedContent(event.target);
    } }))), h("div", { key: "d391c3cec891918c5c02c0af408c90f251293d56", class: "toast-close" }, h("ix-icon-button", { key: "aed1fe3322e15dee9cf25608ce153e8a4cd86d38", icon: iconClose, iconColor: "--si-sys-color-text-secondary", variant: "tertiary", onClick: () => this.closeToast.emit(), "aria-label": this.ariaLabelCloseIconButton }))), !this.preventAutoClose && h("div", { key: "7af1eb17fa6688dbabbe6182254d48e580f0e84e", class: progressBarClass.join(" "), style: progressBarStyle, onAnimationEnd: () => {
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

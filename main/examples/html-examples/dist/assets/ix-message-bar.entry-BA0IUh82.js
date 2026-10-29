import { r as registerInstance, c as createEvent, h, H as Host } from "./global-DV2yP7rM.js";
import { a as a11yBoolean } from "./a11y-BjBGvZyE-DCMEdep1.js";
import { a as animate, E as Easing } from "./animate-BQARm6pw-B-wfC2r4.js";
import { c as iconWarningOctagon, U as iconNotification, d as iconInfo, b as iconSuccess, e as iconWarningRhomb, f as iconWarning, g as iconAlarm, a as iconError, R as iconClose } from "./index-Bj5Kmzp6-B1fOSLOf.js";
import "./condition-checks-B3dDrNFs-BiqvZF_l.js";
import "./animation-C2bTHF7D-HeOCyL6m.js";
const messageBarCss = () => `@charset "UTF-8";:host{--ix-message-bar--border-color--error:var(--si-sys-color-border-danger);--ix-message-bar--border-color--danger:var(--si-sys-color-border-danger);--ix-message-bar--border-color--warning:var(--si-sys-color-border-warning);--ix-message-bar--border-color--caution:var(--si-sys-color-border-caution);--ix-message-bar--border-color--success:var(--si-sys-color-border-success);--ix-message-bar--border-color--information:var(--si-sys-color-border-information);--ix-message-bar--border-color--neutral:var(--si-sys-color-border-neutral);--ix-message-bar--border-color--accent:var(--si-sys-color-border-accent);--ix-message-bar--border-color--critical:var(--si-sys-color-border-critical);--ix-message-bar--background:var(--si-sys-color-background-accent-secondary)}:host{--ix-message-bar--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-message-bar--border-width:var(--si-sys-sizing-border-width-selected);--ix-message-bar--margin:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40)     0 var(--si-sys-sizing-spacing-x-40);--ix-message-bar-message-container--min-height:var(--si-sys-sizing-size-100);--ix-message-bar-message-container--padding:calc(       var(--si-sys-sizing-spacing-y-50) - var(--ix-message-bar--border-width)     )     var(--si-sys-sizing-spacing-x-50) calc(       var(--si-sys-sizing-spacing-y-50) - var(--ix-message-bar--border-width)     ) var(--si-sys-sizing-spacing-x-60);--ix-message-bar-message-content--min-height:var(--si-sys-sizing-size-60);--ix-message-bar-message-content--padding:0 var(--si-sys-sizing-spacing-x-60);--ix-message-bar-icon--icon-size:var(--si-sys-sizing-icon-md);--ix-message-bar-icon--margin-top:var(--si-sys-sizing-spacing-y-30)}:host{margin:var(--ix-message-bar--margin)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:var(--ix-message-bar-message-container--min-height);padding:var(--ix-message-bar-message-container--padding);border-radius:var(--ix-message-bar--border-radius);background-color:var(--ix-message-bar--background)}:host .error{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--error)}:host .danger{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--danger)}:host .warning{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--warning)}:host .caution{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--caution)}:host .success{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--success)}:host .information{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--information)}:host .neutral{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--neutral)}:host .accent{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--accent)}:host .critical{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--critical)}:host .message-content{flex-grow:1;align-self:center;min-height:var(--ix-message-bar-message-content--min-height);padding:var(--ix-message-bar-message-content--padding);white-space:normal;font:var(--si-sys-typography-body-paragraph);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host ix-icon{block-size:var(--ix-message-bar-icon--icon-size);inline-size:var(--ix-message-bar-icon--icon-size);margin-top:var(--ix-message-bar-icon--margin-top);min-block-size:var(--ix-message-bar-icon--icon-size);min-inline-size:var(--ix-message-bar-icon--icon-size)}:host .message-bar-hidden{display:none}`;
const MessageBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closedChange = createEvent(this, "closedChange", 7);
    this.closeAnimationCompleted = createEvent(this, "closeAnimationCompleted", 7);
  }
  /**
   * Specifies the type of the alert.
   */
  type = "information";
  /**
   * If true, close button is disabled and alert cannot be dismissed by the user
   */
  persistent = false;
  /**
   * An event emitted when the close button is clicked
   */
  closedChange;
  /**
   * An event emitted when the close animation is completed
   */
  closeAnimationCompleted;
  icon;
  color;
  static duration = 300;
  static messageTypeConfigs = {
    error: { icon: iconError, color: "--si-sys-color-text-danger" },
    danger: { icon: iconAlarm, color: "--si-sys-color-text-danger" },
    warning: { icon: iconWarning, color: "--si-sys-color-text-warning" },
    caution: { icon: iconWarningRhomb, color: "--si-sys-color-text-caution" },
    success: { icon: iconSuccess, color: "--si-sys-color-text-success" },
    information: {
      icon: iconInfo,
      color: "--si-sys-color-text-information"
    },
    neutral: {
      icon: iconNotification,
      color: "--si-sys-color-text-secondary"
    },
    accent: { icon: iconNotification, color: "--si-sys-color-text-accent" },
    critical: {
      icon: iconWarningOctagon,
      color: "--si-sys-color-text-critical"
    }
  };
  divElement;
  componentWillRender() {
    const config = MessageBar.messageTypeConfigs[this.type];
    if (config) {
      this.icon = config.icon;
      this.color = config.color;
    }
  }
  closeAlert(el) {
    const { defaultPrevented } = this.closedChange.emit();
    if (!defaultPrevented) {
      animate(el, [{ opacity: 1 }, { opacity: 0 }], {
        duration: MessageBar.duration,
        easing: Easing.easeOutQuad,
        onComplete: () => {
          el.classList.add("message-bar-hidden");
          this.closeAnimationCompleted.emit();
        }
      });
    }
  }
  render() {
    return h(Host, { key: "ae29b7b39a68f25f7d2f50f8d832579eba1d4d81" }, h("div", { key: "aa552e0fc6809eb5ef70351461ceb1ac7df274da", class: { "message-container": true, [this.type]: true }, role: "alert", ref: (el) => this.divElement = el }, h("ix-icon", { key: "722525a23c8e9066902de22ba1093a97da11e224", color: this.color, name: this.icon, "aria-hidden": a11yBoolean(true) }), h("div", { key: "f7e084c528198de7fb7ca9a246c75252ff2cae0d", class: "message-content" }, h("slot", { key: "f8a285752366ed5b2de3bc44d279bf3dd4a7a633" })), !this.persistent && h("ix-icon-button", { key: "2454fa318496fd02a08eb24594cfbe39ea293ab6", icon: iconClose, iconColor: "--si-sys-color-text-secondary", variant: "tertiary", onClick: () => {
      if (this.divElement) {
        this.closeAlert(this.divElement);
      }
    }, "data-testid": "close-btn" })));
  }
};
MessageBar.style = messageBarCss();
export {
  MessageBar as ix_message_bar
};

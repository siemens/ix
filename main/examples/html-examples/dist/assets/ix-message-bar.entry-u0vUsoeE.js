import { r as registerInstance, c as createEvent, h, H as Host } from "./global-CU4RCWGK.js";
import { a as animate } from "./anime.esm-DhE1t8Qh-cS95-bBh.js";
import { N as iconNotification, d as iconInfo, a as iconSuccess, c as iconWarning, o as iconWarningRhomb, b as iconError, K as iconClose } from "./index-BeX6RWvV-CXzUIwMU.js";
const messageBarCss = () => `@charset "UTF-8";:host{--ix-message-bar--border-color--alarm:var(--si-sys-color-border-danger);--ix-message-bar--border-color--critical:var(--si-sys-color-border-critical);--ix-message-bar--border-color--warning:var(--si-sys-color-border-warning);--ix-message-bar--border-color--success:var(--si-sys-color-border-success);--ix-message-bar--border-color--info:var(--si-sys-color-border-information);--ix-message-bar--border-color--neutral:var(--si-sys-color-border-neutral);--ix-message-bar--border-color--primary:var(--si-sys-color-border-accent);--ix-message-bar--background:var(--si-sys-color-background-accent-secondary)}:host{--ix-message-bar--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-message-bar--border-width:var(--si-sys-sizing-border-width-selected);--ix-message-bar--margin:var(--si-sys-sizing-spacing-y-40) var(--si-sys-sizing-spacing-x-40)     0 var(--si-sys-sizing-spacing-x-40);--ix-message-bar-message-container--min-height:calc(     var(--si-sys-sizing-size-100) + var(--si-sys-sizing-spacing-y-30)   );--ix-message-bar-message-container--padding:calc(       var(--si-sys-sizing-spacing-y-50) - var(--ix-message-bar--border-width)     )     var(--si-sys-sizing-spacing-x-50) calc(       var(--si-sys-sizing-spacing-y-50) - var(--ix-message-bar--border-width)     ) var(--si-sys-sizing-spacing-x-60);--ix-message-bar-message-content--min-height:var(--si-sys-sizing-size-60);--ix-message-bar-message-content--padding:0 var(--si-sys-sizing-spacing-x-60);--ix-message-bar-icon--icon-size:var(--si-sys-sizing-icon-md);--ix-message-bar-icon--margin-top:var(--si-sys-sizing-spacing-y-30)}:host{margin:var(--ix-message-bar--margin)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:var(--ix-message-bar-message-container--min-height);padding:var(--ix-message-bar-message-container--padding);border-radius:var(--ix-message-bar--border-radius);background-color:var(--ix-message-bar--background)}:host .alarm{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--alarm)}:host .danger{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--alarm)}:host .critical{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--critical)}:host .warning{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--warning)}:host .success{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--success)}:host .info{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--info)}:host .neutral{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--neutral)}:host .primary{border:solid var(--ix-message-bar--border-width) var(--ix-message-bar--border-color--primary)}:host .message-content{flex-grow:1;align-self:center;min-height:var(--ix-message-bar-message-content--min-height);padding:var(--ix-message-bar-message-content--padding);white-space:normal;font:var(--si-sys-typography-body-paragraph);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host ix-icon{block-size:var(--ix-message-bar-icon--icon-size);inline-size:var(--ix-message-bar-icon--icon-size);margin-top:var(--ix-message-bar-icon--margin-top);min-block-size:var(--ix-message-bar-icon--icon-size);min-inline-size:var(--ix-message-bar-icon--icon-size)}:host .message-bar-hidden{display:none}`;
const MessageBar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.closedChange = createEvent(this, "closedChange", 7);
    this.closeAnimationCompleted = createEvent(this, "closeAnimationCompleted", 7);
  }
  /**
   * Specifies the type of the alert.
   */
  type = "info";
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
    alarm: { icon: iconError, color: "--si-sys-color-text-danger" },
    critical: { icon: iconWarningRhomb, color: "--si-sys-color-text-critical" },
    warning: { icon: iconWarning, color: "--si-sys-color-text-warning" },
    success: { icon: iconSuccess, color: "--si-sys-color-text-success" },
    info: { icon: iconInfo, color: "--si-sys-color-text-information" },
    neutral: { icon: iconNotification, color: "--si-sys-color-text-secondary" },
    primary: { icon: iconNotification, color: "--si-sys-color-text-accent" }
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
      animate(el, {
        duration: MessageBar.duration,
        opacity: [1, 0],
        easing: "easeOutSine",
        onComplete: () => {
          el.classList.add("message-bar-hidden");
          this.closeAnimationCompleted.emit();
        }
      });
    }
  }
  render() {
    return h(Host, { key: "f3033536145cc26b7e932fe765acf30406fa7569" }, h("div", { key: "d5c7fd4ccb5eef338d79fb29c6cc24eb7f0b6aa4", class: { "message-container": true, [this.type]: true }, role: "alert", ref: (el) => this.divElement = el }, h("ix-icon", { key: "7df99770da162822f9e95e510799959b49cc9614", color: this.color, name: this.icon }), h("div", { key: "881604a2d05d64af40838325b264ec9ca73c7c87", class: "message-content" }, h("slot", { key: "e36b2469f40d4ae0efe67582cc0317dcbb2de688" })), !this.persistent && h("ix-icon-button", { key: "0ea2fbc7c6ff436c0d3777c81deae4ed470f0761", icon: iconClose, iconColor: "--si-sys-color-text-secondary", variant: "tertiary", onClick: () => {
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

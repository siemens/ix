import { a as registerInstance, c as createEvent, h, H as Host } from "./global-DX2OdaCL.js";
import { m as modulesExports } from "./index-DCm5XQXq-CfBgwJIC.js";
import { J as iconNotification, E as iconInfo, Q as iconSuccess, S as iconWarning, T as iconWarningRhomb, A as iconError, r as iconClose } from "./index-Cl7fhG1I-C77BCFLW.js";
const messageBarCss = () => `:host{margin:0.5rem 0.5rem 0rem 0.5rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .message-container{display:flex;flex-direction:row;align-items:flex-start;flex-wrap:nowrap;justify-content:space-between;min-height:3.375rem;padding:calc(0.75rem - var(--theme-message-bar--border-thickness)) 0.75rem calc(0.75rem - var(--theme-message-bar--border-thickness)) 1rem;border-radius:var(--theme-message-bar--border-radius);background-color:var(--theme-messagebar--background)}:host .alarm{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .danger{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-alarm)}:host .critical{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-critical)}:host .warning{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-warning)}:host .success{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-success)}:host .info{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-info)}:host .neutral{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-neutral)}:host .primary{border:solid var(--theme-message-bar--border-thickness) var(--theme-color-primary)}:host .message-content{flex-grow:1;align-self:center;min-height:1.25rem;padding:0 1rem;font-weight:normal;white-space:normal}:host ix-icon{margin-top:0.25rem}:host .message-bar-hidden{display:none}`;
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
    //TODO(IX-3400): Replace icon colors with proper CSS variables when available
    alarm: { icon: iconError, color: "color-alarm" },
    critical: { icon: iconWarningRhomb, color: "color-critical" },
    warning: { icon: iconWarning, color: "color-warning-text" },
    success: { icon: iconSuccess, color: "color-success" },
    info: { icon: iconInfo, color: "color-info" },
    neutral: { icon: iconNotification, color: "color-neutral" },
    primary: { icon: iconNotification, color: "color-primary" }
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
      modulesExports.animate(el, {
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
    return h(Host, { key: "0bcb3921edb5725eb5cde03ba1d1c6d9f6cc3583" }, h("div", { key: "dfcbfe7614588ab39770897c6dc70429d4a75989", class: { "message-container": true, [this.type]: true }, role: "alert", ref: (el) => this.divElement = el }, h("ix-icon", { key: "12f4dd489bd1ae81a93d3a06aad8b2d9befd2236", color: this.color, name: this.icon }), h("div", { key: "f7a07fe9e07f1b6f00afeeac327175e9649660d4", class: "message-content" }, h("slot", { key: "21a3149814d2402f78bde9393e1b46d299171ac1" })), !this.persistent && h("ix-icon-button", { key: "b1036b77e4684abc552b06c12c99696110b8613b", icon: iconClose, iconColor: "color-soft-text", size: "24", variant: "tertiary", onClick: () => {
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

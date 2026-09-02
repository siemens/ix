import { r as registerInstance, g as getElement, h, H as Host } from "./global-Do6maBom.js";
const chatUserMessageCss = () => `@charset "UTF-8";:host{--ix-chat-user-message--background:var(--si-sys-background-4);--ix-chat-user-message--color:var(--si-sys-text-primary);--ix-chat-user-message--outline-color--focus:var(--si-sys-effects-focus)}:host{display:flex;flex-direction:column;align-items:flex-end;width:100%;min-width:0;box-sizing:border-box}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .message{width:-moz-fit-content;width:fit-content;min-width:max(15.375rem, 45%);max-width:80%;box-sizing:border-box;padding:var(--theme-space-2) var(--theme-space-3);border-radius:var(--theme-default-border-radius);background-color:var(--ix-chat-user-message--background);color:var(--ix-chat-user-message--color)}:host .attachments{display:none;justify-content:flex-end;flex-wrap:wrap;gap:var(--theme-space-1) 0;width:100%;max-width:75%;margin-bottom:var(--theme-space-1);overflow:hidden}:host .attachments ::slotted(ix-chat-attachment){flex:0 1 6.375rem;padding-left:var(--theme-space-1)}:host .attachment-overflow{margin-bottom:var(--theme-space-1);--ix-dropdown-button-border-radius-left:var(--theme-small-border-radius);--ix-dropdown-button-border-radius-right:var(--theme-small-border-radius)}:host .message-text{display:block;overflow-wrap:anywhere;white-space:pre-wrap}:host .actions{display:flex;align-items:center;justify-content:flex-end;gap:var(--theme-space-1);min-height:2rem;margin-top:var(--theme-space-1);opacity:0;transition:opacity 0.2s ease-in-out}:host .actions ::slotted(ix-icon-button){flex:0 0 auto}:host(.has-attachments) .attachments{display:flex}:host(:focus-visible){outline:none}:host(:focus-visible) .message{outline:1px solid var(--ix-chat-user-message--outline-color--focus);outline-offset:var(--theme-focus-outline-offset)}:host(.has-actions:focus) .actions,:host(.has-actions:hover) .actions,:host(.has-actions:focus-within) .actions{opacity:1}`;
const ChatUserMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Text displayed in the user message bubble.
   */
  message;
  hasActions = false;
  hasAttachments = false;
  hasMessageContent = false;
  componentWillLoad() {
    this.updateHasMessageContent();
  }
  handleActionsSlotChange(event) {
    const slot = event.target;
    this.hasActions = slot.assignedElements({
      flatten: true
    }).length > 0;
  }
  handleAttachmentsSlotChange(event) {
    const slot = event.target;
    this.hasAttachments = slot.assignedElements({
      flatten: true
    }).length > 0;
  }
  handleMessageSlotChange(event) {
    this.updateHasMessageContent(event.target);
  }
  hasAssignedMessageContent(slot) {
    if (slot) {
      return slot.assignedNodes({ flatten: true }).some((node) => {
        return node.nodeType === 1 || !!node.textContent?.trim();
      });
    }
    return Array.from(this.hostElement.childNodes).some((node) => {
      if (node.nodeType === 1) {
        return node.slot === "";
      }
      return !!node.textContent?.trim();
    });
  }
  updateHasMessageContent(slot) {
    this.hasMessageContent = this.hasAssignedMessageContent(slot);
  }
  render() {
    return h(Host, { key: "e9376e0015376ada61acab85f71f2e4ecd6352ef", class: {
      "has-actions": this.hasActions,
      "has-attachments": this.hasAttachments
    }, tabIndex: this.hasActions ? 0 : void 0 }, h("div", { key: "89f8e746ec79a7ec1e8489a7ea658055c807e37b", class: "attachments" }, h("slot", { key: "7d8162d206e2fa2f55d14982b78ae97e975f5bf4", name: "attachments", onSlotchange: (event) => this.handleAttachmentsSlotChange(event) })), h("div", { key: "2169c12123fa3e36933274dcdc79a55a87533f29", class: "message" }, h("ix-typography", { key: "8b502f9e39d9eba42cbe39919eb88388d0d4fbac", class: "message-text", format: "body", textColor: "std" }, this.message, h("span", { key: "3d8a626592b4ccdcbb4ad60025b10fba74882e70", style: {
      display: this.hasMessageContent ? void 0 : "none"
    } }, h("slot", { key: "4030806fcddb274fa0dd35dc89367ecf75cf2868", onSlotchange: (event) => this.handleMessageSlotChange(event) })))), h("div", { key: "3f740a55deaaa178d8939730d2553c7b32b1f21d", class: "actions", "aria-hidden": !this.hasActions ? "true" : void 0 }, h("slot", { key: "465edf12f452fe3c88f910e0d657b4c76894878c", name: "actions", onSlotchange: (event) => this.handleActionsSlotChange(event) })));
  }
};
ChatUserMessage.style = chatUserMessageCss();
export {
  ChatUserMessage as ix_chat_user_message
};

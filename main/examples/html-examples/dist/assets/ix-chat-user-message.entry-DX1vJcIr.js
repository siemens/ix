import { r as registerInstance, g as getElement, h, H as Host } from "./global-CU4RCWGK.js";
const chatUserMessageCss = () => `@charset "UTF-8";:host{--ix-chat-user-message--background:var(--si-sys-color-background-4);--ix-chat-user-message--color:var(--si-sys-color-text-primary);--ix-chat-user-message--outline-color--focus:var(--si-sys-color-effects-focus)}:host{--ix-chat-user-message-message--min-width:max(     calc(var(--si-sys-sizing-size-160) + var(--si-sys-sizing-spacing-x-30)),     45%   );--ix-chat-user-message-attachments--flex:0 1     calc(var(--si-sys-sizing-size-130) + var(--si-sys-sizing-spacing-x-30));--ix-chat-user-message-actions--min-height:var(--si-sys-sizing-size-80);--ix-chat-user-message-message--max-width:80%;--ix-chat-user-message-message--padding:var(--si-sys-sizing-spacing-y-50) var(--si-sys-sizing-spacing-x-60);--ix-chat-user-message-message--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-chat-user-message-attachments--gap:var(--si-sys-sizing-spacing-y-40);--ix-chat-user-message-attachments--max-width:75%;--ix-chat-user-message-attachments--margin-bottom:var(--si-sys-sizing-spacing-y-40);--ix-chat-user-message-attachments--padding-left:var(--si-sys-sizing-spacing-x-40);--ix-chat-user-message-attachment-overflow--margin-bottom:var(--si-sys-sizing-spacing-y-40);--ix-chat-user-message-attachment-overflow--dropdown-button-border-radius-left:var(--si-sys-sizing-border-radius-xs);--ix-chat-user-message-attachment-overflow--dropdown-button-border-radius-right:var(--si-sys-sizing-border-radius-xs);--ix-chat-user-message-actions--gap:var(--si-sys-sizing-spacing-x-40);--ix-chat-user-message-actions--margin-top:var(--si-sys-sizing-spacing-y-40);--ix-chat-user-message--outline-width--focus:var(--si-sys-sizing-border-width-default);--ix-chat-user-message-message--outline-offset:var(--si-sys-sizing-focus-ring-offset);--ix-chat-user-message-action--transition-duration:0.2s}:host{display:flex;flex-direction:column;align-items:flex-end;width:100%;min-width:0;box-sizing:border-box}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .message{width:-moz-fit-content;width:fit-content;min-width:var(--ix-chat-user-message-message--min-width);max-width:var(--ix-chat-user-message-message--max-width);box-sizing:border-box;padding:var(--ix-chat-user-message-message--padding);border-radius:var(--ix-chat-user-message-message--border-radius);background-color:var(--ix-chat-user-message--background);color:var(--ix-chat-user-message--color)}:host .attachments{display:none;justify-content:flex-end;flex-wrap:wrap;gap:var(--ix-chat-user-message-attachments--gap) 0;width:100%;max-width:var(--ix-chat-user-message-attachments--max-width);margin-bottom:var(--ix-chat-user-message-attachments--margin-bottom);overflow:hidden}:host .attachments ::slotted(ix-chat-attachment){flex:var(--ix-chat-user-message-attachments--flex);padding-left:var(--ix-chat-user-message-attachments--padding-left)}:host .attachment-overflow{margin-bottom:var(--ix-chat-user-message-attachment-overflow--margin-bottom);--ix-dropdown-button-border-radius-left:var(     --ix-chat-user-message-attachment-overflow--dropdown-button-border-radius-left   );--ix-dropdown-button-border-radius-right:var(     --ix-chat-user-message-attachment-overflow--dropdown-button-border-radius-right   )}:host .message-text{display:block;overflow-wrap:anywhere;white-space:pre-wrap}:host .actions{display:flex;align-items:center;justify-content:flex-end;gap:var(--ix-chat-user-message-actions--gap);min-height:var(--ix-chat-user-message-actions--min-height);margin-top:var(--ix-chat-user-message-actions--margin-top);opacity:0;transition:opacity var(--ix-chat-user-message-action--transition-duration) ease-in-out}:host .actions ::slotted(ix-icon-button){flex:0 0 auto}:host(.has-attachments) .attachments{display:flex}:host(:focus-visible){outline:none}:host(:focus-visible) .message{outline:var(--ix-chat-user-message--outline-width--focus) solid var(--ix-chat-user-message--outline-color--focus);outline-offset:var(--ix-chat-user-message-message--outline-offset)}:host(.has-actions:focus) .actions,:host(.has-actions:hover) .actions,:host(.has-actions:focus-within) .actions{opacity:1}`;
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
    return h(Host, { key: "726b546f4cbcdedf463c2b2b660ac9bd7619f9c5", class: {
      "has-actions": this.hasActions,
      "has-attachments": this.hasAttachments
    }, tabIndex: this.hasActions ? 0 : void 0 }, h("div", { key: "c289798f42b05d85e1ae596b4bd5e4d8b17f95a5", class: "attachments" }, h("slot", { key: "8170d45859cd4f4dd7435337183011541b283742", name: "attachments", onSlotchange: (event) => this.handleAttachmentsSlotChange(event) })), h("div", { key: "860ba06ba8173ffd1d2d75363f004c3ffe84e6ab", class: "message" }, h("ix-typography", { key: "85ac9cf38b07fdf374868a32656b382f42c3f507", class: "message-text", format: "body", textColor: "std" }, this.message, h("span", { key: "6e7ff6b4ac8685bc7fc1848cde517f19bb4c61b4", style: {
      display: this.hasMessageContent ? void 0 : "none"
    } }, h("slot", { key: "bbedc0d28fcab6fd35ed706ac16ed43174727e04", onSlotchange: (event) => this.handleMessageSlotChange(event) })))), h("div", { key: "2c0c2b9cffcec2761b3a447aa65a46c5a0a3ec2a", class: "actions", "aria-hidden": !this.hasActions ? "true" : void 0 }, h("slot", { key: "200290fa2680a34307e941d91c09d3e9da36eb46", name: "actions", onSlotchange: (event) => this.handleActionsSlotChange(event) })));
  }
};
ChatUserMessage.style = chatUserMessageCss();
export {
  ChatUserMessage as ix_chat_user_message
};

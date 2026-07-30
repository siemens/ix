import { r as registerInstance, g as getElement, h, H as Host } from "./global-J1r-v9CX.js";
const chatUserMessageCss = () => `:host{display:flex;flex-direction:column;align-items:flex-end;width:100%;min-width:0;box-sizing:border-box}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .message{width:-moz-fit-content;width:fit-content;min-width:max(15.375rem, 45%);max-width:80%;box-sizing:border-box;padding:var(--theme-space-2) var(--theme-space-3);border-radius:var(--theme-default-border-radius);background-color:var(--theme-color-component-8);color:var(--theme-color-std-text)}:host .attachments{display:none;justify-content:flex-end;flex-wrap:wrap;gap:var(--theme-space-1) 0;width:100%;max-width:75%;margin-bottom:var(--theme-space-1);overflow:hidden}:host .attachments ::slotted(ix-chat-attachment){flex:0 1 6.375rem;padding-left:var(--theme-space-1)}:host .attachment-overflow{margin-bottom:var(--theme-space-1);--ix-dropdown-button-border-radius-left:var(--theme-small-border-radius);--ix-dropdown-button-border-radius-right:var(--theme-small-border-radius)}:host .message-text{display:block;overflow-wrap:anywhere;white-space:pre-wrap}:host .actions{display:flex;align-items:center;justify-content:flex-end;gap:var(--theme-space-1);min-height:2rem;margin-top:var(--theme-space-1);opacity:0;transition:opacity 0.2s ease-in-out}:host .actions ::slotted(ix-icon-button){flex:0 0 auto}:host(.has-attachments) .attachments{display:flex}:host(:focus-visible){outline:none}:host(:focus-visible) .message{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-focus-outline-offset)}:host(.has-actions:focus) .actions,:host(.has-actions:hover) .actions,:host(.has-actions:focus-within) .actions{opacity:1}`;
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
    return h(Host, { key: "b4500d01213cf210838fb08bc332ed37802f31b2", class: {
      "has-actions": this.hasActions,
      "has-attachments": this.hasAttachments
    }, tabIndex: this.hasActions ? 0 : void 0 }, h("div", { key: "35dac8ff4d349eb09c8b5aaa1c2e4e4d7766557c", class: "attachments" }, h("slot", { key: "89a207e3cac7aede2adc938b8bd84046ff93ad1e", name: "attachments", onSlotchange: (event) => this.handleAttachmentsSlotChange(event) })), h("div", { key: "f359812276e87d3dc643efb89fa1bbdea2ac34ab", class: "message" }, h("ix-typography", { key: "e64c35b4dfa6ff3d76c0ce25edba8a55337f2942", class: "message-text", format: "body", textColor: "std" }, this.message, h("span", { key: "3f45d94b99e4f7297a56402064907ee166864075", style: {
      display: this.hasMessageContent ? void 0 : "none"
    } }, h("slot", { key: "8c0531e565490d5db20a9e8a30e1f1e45d176876", onSlotchange: (event) => this.handleMessageSlotChange(event) })))), h("div", { key: "5fabc7299edf47f52f1719f6004fe7e2de6848d5", class: "actions", "aria-hidden": !this.hasActions ? "true" : void 0 }, h("slot", { key: "79f6896d87b9f9848bdad48c2402b67f0c30d748", name: "actions", onSlotchange: (event) => this.handleActionsSlotChange(event) })));
  }
};
ChatUserMessage.style = chatUserMessageCss();
export {
  ChatUserMessage as ix_chat_user_message
};

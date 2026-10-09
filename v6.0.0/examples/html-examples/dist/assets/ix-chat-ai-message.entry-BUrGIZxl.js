import { r as registerInstance, h, H as Host } from "./global-CU4RCWGK.js";
const chatAiMessageCss = () => `@charset "UTF-8";:host{--ix-chat-ai-message--color:var(--si-sys-color-text-primary)}:host{--ix-chat-ai-message-meta--min-height:var(--si-sys-sizing-size-80);--ix-chat-ai-message-actions--gap:var(--si-sys-sizing-spacing-x-20);--ix-chat-ai-message--gap:var(--si-sys-sizing-spacing-y-60);--ix-chat-ai-message-message--gap:var(--si-sys-sizing-spacing-y-60);--ix-chat-ai-message-message--font:var(--si-sys-typography-body-lg);--ix-chat-ai-message-message--font-weight:var(     --si-ref-typography-font-weight-bold   );--ix-chat-ai-message-meta--gap:var(--si-sys-sizing-spacing-x-60)}:host{display:flex;flex-direction:column;align-items:flex-start;width:100%;min-width:0;gap:var(--ix-chat-ai-message--gap);box-sizing:border-box;color:var(--ix-chat-ai-message--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .message{display:flex;flex-direction:column;align-items:stretch;width:100%;min-width:0;gap:var(--ix-chat-ai-message-message--gap);font:var(--ix-chat-ai-message-message--font);overflow-wrap:anywhere}:host .message ::slotted(*){margin:0;color:inherit;overflow-wrap:anywhere}:host .message ::slotted(h1),:host .message ::slotted(h2),:host .message ::slotted(h3),:host .message ::slotted(h4),:host .message ::slotted(h5),:host .message ::slotted(h6){font:var(--ix-chat-ai-message-message--font);font-weight:var(--ix-chat-ai-message-message--font-weight)}:host .meta{display:none;align-items:center;gap:var(--ix-chat-ai-message-meta--gap);width:100%;min-height:var(--ix-chat-ai-message-meta--min-height)}:host .actions{display:none;align-items:center;gap:var(--ix-chat-ai-message-actions--gap)}:host .sources{display:none;align-items:center}:host .actions ::slotted(ix-icon-button),:host .sources ::slotted(*){flex:0 0 auto}:host(.has-meta) .meta{display:flex}:host(.has-actions) .actions{display:flex}:host(.has-sources) .sources{display:flex}`;
const ChatAiMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  hasActions = false;
  hasSources = false;
  hasAssignedContent(slot) {
    return slot.assignedNodes({ flatten: true }).some((node) => {
      return node.nodeType === 1 || !!node.textContent?.trim();
    });
  }
  handleActionsSlotChange(event) {
    this.hasActions = this.hasAssignedContent(event.target);
  }
  handleSourcesSlotChange(event) {
    this.hasSources = this.hasAssignedContent(event.target);
  }
  render() {
    const hasMeta = this.hasActions || this.hasSources;
    return h(Host, { key: "0251c33761dd22f1e1b6f27000b73e7a4fa957c6", class: {
      "has-actions": this.hasActions,
      "has-sources": this.hasSources,
      "has-meta": hasMeta
    } }, h("div", { key: "be0f634a3a8fc5d4975cfd50359047e501f4a272", class: "message" }, h("slot", { key: "018db20337290737e78161f56ad4f3a2bac15fda" })), h("div", { key: "75c57273787d1236c04ba31cbd8fddad5803304b", class: "meta", "aria-hidden": !hasMeta ? "true" : void 0 }, h("div", { key: "62c10281b1fc9c99cfb351cf33deda814c481cbd", class: "actions" }, h("slot", { key: "8d815148968a442b2efbd334a246dbf7ba15740b", name: "actions", onSlotchange: (event) => this.handleActionsSlotChange(event) })), h("div", { key: "4126f2764be9a7dfae88125fb7d7701680e14b32", class: "sources" }, h("slot", { key: "5859108b4028d6be9ad5595749275e5ec5d0c5ce", name: "sources", onSlotchange: (event) => this.handleSourcesSlotChange(event) }))));
  }
};
ChatAiMessage.style = chatAiMessageCss();
export {
  ChatAiMessage as ix_chat_ai_message
};

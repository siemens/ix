import { r as registerInstance, h, H as Host } from "./global-DzKOIL47.js";
const chatAiMessageCss = () => `@charset "UTF-8";:host{--ix-chat-ai-message--color:var(--si-sys-color-text-primary)}:host{--ix-chat-ai-message-meta--min-height:var(--si-sys-sizing-size-80);--ix-chat-ai-message-actions--gap:var(--si-sys-sizing-spacing-x-20);--ix-chat-ai-message--gap:var(--si-sys-sizing-spacing-y-60);--ix-chat-ai-message-message--gap:var(--si-sys-sizing-spacing-y-60);--ix-chat-ai-message-message--font:var(--si-sys-typography-body-paragraph);--ix-chat-ai-message-message--font-weight:var(     --si-ref-typography-font-weight-bold   );--ix-chat-ai-message-meta--gap:var(--si-sys-sizing-spacing-x-60)}:host{display:flex;flex-direction:column;align-items:flex-start;width:100%;min-width:0;gap:var(--ix-chat-ai-message--gap);box-sizing:border-box;color:var(--ix-chat-ai-message--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .message{display:flex;flex-direction:column;align-items:stretch;width:100%;min-width:0;gap:var(--ix-chat-ai-message-message--gap);font:var(--ix-chat-ai-message-message--font);overflow-wrap:anywhere}:host .message ::slotted(*){margin:0;color:inherit;overflow-wrap:anywhere}:host .message ::slotted(h1),:host .message ::slotted(h2),:host .message ::slotted(h3),:host .message ::slotted(h4),:host .message ::slotted(h5),:host .message ::slotted(h6){font:var(--ix-chat-ai-message-message--font);font-weight:var(--ix-chat-ai-message-message--font-weight)}:host .meta{display:none;align-items:center;gap:var(--ix-chat-ai-message-meta--gap);width:100%;min-height:var(--ix-chat-ai-message-meta--min-height)}:host .actions{display:none;align-items:center;gap:var(--ix-chat-ai-message-actions--gap)}:host .sources{display:none;align-items:center}:host .actions ::slotted(ix-icon-button),:host .sources ::slotted(*){flex:0 0 auto}:host(.has-meta) .meta{display:flex}:host(.has-actions) .actions{display:flex}:host(.has-sources) .sources{display:flex}`;
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
    return h(Host, { key: "0759daa2f77b6ce951c44033b30e641fe831d856", class: {
      "has-actions": this.hasActions,
      "has-sources": this.hasSources,
      "has-meta": hasMeta
    } }, h("div", { key: "68209dd14a648f23d1a40ffe2b10181925e880fd", class: "message" }, h("slot", { key: "861bd929e4aabe7f992b2652c32a5861652e77b1" })), h("div", { key: "26c9ba77b53484f1b7d76be2af00eef237a304c6", class: "meta", "aria-hidden": !hasMeta ? "true" : void 0 }, h("div", { key: "feea93d21f7969eb9fb45d4095336805af26648b", class: "actions" }, h("slot", { key: "9d1036c3a159093d933b128be3d58720661fa273", name: "actions", onSlotchange: (event) => this.handleActionsSlotChange(event) })), h("div", { key: "69450ca653afec0b288a8380c791e2cfb7641306", class: "sources" }, h("slot", { key: "2ef3ee7607a127c08452d64be7d3b52fa0d0e2da", name: "sources", onSlotchange: (event) => this.handleSourcesSlotChange(event) }))));
  }
};
ChatAiMessage.style = chatAiMessageCss();
export {
  ChatAiMessage as ix_chat_ai_message
};

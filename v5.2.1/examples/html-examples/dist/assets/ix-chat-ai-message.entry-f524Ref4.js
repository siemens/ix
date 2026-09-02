import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
const chatAiMessageCss = () => `@charset "UTF-8";:host{--ix-chat-ai-message--color:var(--si-sys-text-primary)}:host{display:flex;flex-direction:column;align-items:flex-start;width:100%;min-width:0;gap:var(--theme-space-3);box-sizing:border-box;color:var(--ix-chat-ai-message--color)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .message{display:flex;flex-direction:column;align-items:stretch;width:100%;min-width:0;gap:var(--theme-space-3);font-size:var(--theme-font-size-l);line-height:1.5;overflow-wrap:anywhere}:host .message ::slotted(*){margin:0;color:inherit;overflow-wrap:anywhere}:host .message ::slotted(h1),:host .message ::slotted(h2),:host .message ::slotted(h3),:host .message ::slotted(h4),:host .message ::slotted(h5),:host .message ::slotted(h6){font-size:var(--theme-font-size-l);font-weight:var(--theme-font-weight-bold);line-height:1.2}:host .meta{display:none;align-items:center;gap:var(--theme-space-3);width:100%;min-height:2rem}:host .actions{display:none;align-items:center;gap:0.25rem}:host .sources{display:none;align-items:center}:host .actions ::slotted(ix-icon-button),:host .sources ::slotted(*){flex:0 0 auto}:host(.has-meta) .meta{display:flex}:host(.has-actions) .actions{display:flex}:host(.has-sources) .sources{display:flex}`;
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
    return h(Host, { key: "7551fd7bf696992eff30a21efd2c6a1ad6934f05", class: {
      "has-actions": this.hasActions,
      "has-sources": this.hasSources,
      "has-meta": hasMeta
    } }, h("div", { key: "4ae0ca33bb6f1575d802f081436f9b64cc84a860", class: "message" }, h("slot", { key: "f9a97d3043c533da53c0a09335a0660ff2fc11ba" })), h("div", { key: "3ea7b4f8a3002c1b70ab6fc3f0038fd3d099a0cc", class: "meta", "aria-hidden": !hasMeta ? "true" : void 0 }, h("div", { key: "dc13ff30a44ddbde25a9b984ecf534bd99c5f959", class: "actions" }, h("slot", { key: "e0c8db109a43c9431c9684105b0576a1513f22ce", name: "actions", onSlotchange: (event) => this.handleActionsSlotChange(event) })), h("div", { key: "748966a8345e8dbdf9e4d8c3302577660ba6ec1b", class: "sources" }, h("slot", { key: "0457bbd2d685b6c0fd59251172a8e2fcef82daef", name: "sources", onSlotchange: (event) => this.handleSourcesSlotChange(event) }))));
  }
};
ChatAiMessage.style = chatAiMessageCss();
export {
  ChatAiMessage as ix_chat_ai_message
};

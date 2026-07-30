import { r as registerInstance, h, H as Host } from "./global-J1r-v9CX.js";
const chatAiMessageCss = () => `:host{display:flex;flex-direction:column;align-items:flex-start;width:100%;min-width:0;gap:var(--theme-space-3);box-sizing:border-box;color:var(--theme-color-std-text)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host *::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host *::-webkit-scrollbar-corner{display:none}:host .message{display:flex;flex-direction:column;align-items:stretch;width:100%;min-width:0;gap:var(--theme-space-3);font-size:var(--theme-font-size-l);line-height:1.5;overflow-wrap:anywhere}:host .message ::slotted(*){margin:0;color:inherit;overflow-wrap:anywhere}:host .message ::slotted(h1),:host .message ::slotted(h2),:host .message ::slotted(h3),:host .message ::slotted(h4),:host .message ::slotted(h5),:host .message ::slotted(h6){font-size:var(--theme-font-size-l);font-weight:var(--theme-font-weight-bold);line-height:1.2}:host .meta{display:none;align-items:center;gap:var(--theme-space-3);width:100%;min-height:2rem}:host .actions{display:none;align-items:center;gap:0.25rem}:host .sources{display:none;align-items:center}:host .actions ::slotted(ix-icon-button),:host .sources ::slotted(*){flex:0 0 auto}:host(.has-meta) .meta{display:flex}:host(.has-actions) .actions{display:flex}:host(.has-sources) .sources{display:flex}`;
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
    return h(Host, { key: "70e234f8cbd2260c6142555eb2fd7a8135262596", class: {
      "has-actions": this.hasActions,
      "has-sources": this.hasSources,
      "has-meta": hasMeta
    } }, h("div", { key: "2fdcfc7eaf01302c0de24ed63abc7f63129ab676", class: "message" }, h("slot", { key: "4b365421d7542afd216b0d12a265b58a1a7d301b" })), h("div", { key: "fada497863c995b6cdc6e383c81591c9a267cb78", class: "meta", "aria-hidden": !hasMeta ? "true" : void 0 }, h("div", { key: "bf1cc2871f733d990c4fe355e0c9a279239c2135", class: "actions" }, h("slot", { key: "d56dd8233787071c427aa253b024fadf8f297a67", name: "actions", onSlotchange: (event) => this.handleActionsSlotChange(event) })), h("div", { key: "05541a76f74d9a471467debf0ef169b9fccd177e", class: "sources" }, h("slot", { key: "db5a30a5a389f80994856ade3e60589aa83ec644", name: "sources", onSlotchange: (event) => this.handleSourcesSlotChange(event) }))));
  }
};
ChatAiMessage.style = chatAiMessageCss();
export {
  ChatAiMessage as ix_chat_ai_message
};

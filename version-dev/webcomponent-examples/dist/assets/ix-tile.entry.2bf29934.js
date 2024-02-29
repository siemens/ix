import { r as registerInstance, h, H as Host, g as getElement } from "./index.063f6e33.js";
const tileCss = ":host{min-width:11.937rem;max-width:11.937rem;width:11.937rem;display:flex;flex-direction:column;border:1px solid var(--theme-tile--border);border-radius:var(--theme-tile--border-radius);background-color:var(--theme-color-2);color:var(--theme-color-std-text);box-shadow:var(--theme-tile--box-shadow)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tile-header{display:flex;align-items:center;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text)}:host .tile-header,:host .tile-subheader,:host .tile-content,:host .tile-footer{padding:0 1rem}:host .tile-header,:host .tile-content{flex-grow:1}:host .tile-header.has-content{display:flex;height:2.5rem;max-height:2.5rem;padding-inline-end:0.5rem}:host .tile-subheader{color:var(--theme-btn-invisible-secondary--color);flex-grow:0}:host .tile-footer.has-content{border-block-start:1px solid var(--theme-color-1);height:2.5rem}:host(.tile-small){height:2.5rem;min-height:2.5rem;max-height:2.5rem}:host(.tile-medium){height:5rem;min-height:5rem;max-height:5rem}:host(.tile-big){height:10rem;min-height:10rem;max-height:10rem}:host(:active),:host(:focus-visible),:host(:visited){outline:none}";
const IxTileStyle0 = tileCss;
const Tile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.size = "medium";
    this.hasHeaderSlot = false;
    this.hasFooterSlot = false;
  }
  handleHeaderSlotChange() {
    this.hasHeaderSlot = !!this.hostElement.querySelector('[slot="header"]');
  }
  handleFooterSlotChange() {
    this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
  }
  render() {
    return h(Host, { key: "65e1277cf4b5ccc449dabc26c7216b13dd2c2aa3", class: {
      "tile-small": this.size === "small",
      "tile-medium": this.size === "medium",
      "tile-big": this.size === "big"
    } }, h("div", { key: "69f1d82f28fb8d345bbaae2624114298c3c1c879", class: {
      "tile-header": true,
      "has-content": this.hasHeaderSlot
    } }, h("slot", { key: "9f0cd992a9ea408da4cc7756f8d9ce0c61a0fd8c", name: "header", onSlotchange: () => this.handleHeaderSlotChange() })), h("div", { key: "da541a2a3ba69eeba1a4421915f75d700050c5f8", class: "tile-subheader" }, h("slot", { key: "a498169a21e53e3abf332461e2b1ef8eaad4910b", name: "subheader" })), h("div", { key: "4caacfbc6cad0e7432f8c53be2f2785c4d76cc5d", class: "tile-content" }, h("slot", { key: "59e81a46d10307f93e1bb50735a9b05f106d7dd6" })), h("div", { key: "1455303a22aff7c91392946de8f3b87d0d401b45", class: {
      "tile-footer": true,
      "has-content": this.hasFooterSlot
    } }, h("slot", { key: "e498be21e2041b2689ebe5689e846668a556bb1e", name: "footer", onSlotchange: () => this.handleFooterSlotChange() })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Tile.style = IxTileStyle0;
export {
  Tile as ix_tile
};

import { r as registerInstance, h, H as Host, g as getElement } from "./global-DXu0UsM0.js";
const tileCss = ":host{min-width:11.937rem;max-width:11.937rem;width:11.937rem;display:flex;flex-direction:column;border:1px solid var(--theme-tile--border);border-radius:var(--theme-tile--border-radius);background-color:var(--theme-color-2);color:var(--theme-color-std-text);box-shadow:var(--theme-tile--box-shadow)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host{}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host{}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host{}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host{}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tile-header{display:flex;align-items:center;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .tile-header,:host .tile-subheader,:host .tile-content,:host .tile-footer{padding:0 1rem}:host .tile-header,:host .tile-content{flex-grow:1}:host .tile-header.has-content{display:flex;height:2.5rem;max-height:2.5rem;padding-inline-end:0.5rem}:host .tile-subheader{color:var(--theme-btn-invisible-secondary--color);flex-grow:0}:host .tile-footer.has-content{border-block-start:1px solid var(--theme-color-1);height:2.5rem}:host(.tile-small){height:2.5rem;min-height:2.5rem;max-height:2.5rem}:host(.tile-medium){height:5rem;min-height:5rem;max-height:5rem}:host(.tile-big){height:10rem;min-height:10rem;max-height:10rem}:host(:active),:host(:focus-visible),:host(:visited){outline:none}";
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
    return h(Host, { key: "e83288ffd19003daa839793dc42743e82ea329d9", class: {
      "tile-small": this.size === "small",
      "tile-medium": this.size === "medium",
      "tile-big": this.size === "big"
    } }, h("div", { key: "1a173c431e38679b031acca5b4438c584026febb", class: {
      "tile-header": true,
      "has-content": this.hasHeaderSlot
    } }, h("slot", { key: "28034f20ea8db8ff4970016bfd256fa66cc16f3b", name: "header", onSlotchange: () => this.handleHeaderSlotChange() })), h("div", { key: "f4c023a760604efb2adac88255e78d7d2817afa5", class: "tile-subheader" }, h("slot", { key: "270f8cde05e6242cac0c0220f94e7e10ae52aab0", name: "subheader" })), h("div", { key: "c0d2126d53cc8f5f2b27adc06be4dfc8ebaddcc8", class: "tile-content" }, h("slot", { key: "240a6aa40351076e285f5c886d0d8e79cfcb232d" })), h("div", { key: "481e82564382337eaa4efdb6d50a372d78647519", class: {
      "tile-footer": true,
      "has-content": this.hasFooterSlot
    } }, h("slot", { key: "67d6809eeeafb51103b40557f1c056f9815c6bdc", name: "footer", onSlotchange: () => this.handleFooterSlotChange() })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Tile.style = tileCss;
export {
  Tile as ix_tile
};

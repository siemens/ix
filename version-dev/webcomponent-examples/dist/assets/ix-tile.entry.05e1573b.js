import { r as registerInstance, h, H as Host, g as getElement } from "./index.18e27e15.js";
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
    return h(Host, { key: "8b25843f8b7bcd40e7c384a2b9d04bc301b3c769", class: {
      "tile-small": this.size === "small",
      "tile-medium": this.size === "medium",
      "tile-big": this.size === "big"
    } }, h("div", { key: "1434bb938d68e0fc27fbfc204facba1ac26fd5ac", class: {
      "tile-header": true,
      "has-content": this.hasHeaderSlot
    } }, h("slot", { key: "e714b4106ea457f1e3f643b52dbbb4d3c5604e28", name: "header", onSlotchange: () => this.handleHeaderSlotChange() })), h("div", { key: "cb84d966fb0249b3e18d05326d48fdb5d6165acf", class: "tile-subheader" }, h("slot", { key: "e7d847460338d9ce454f3b1a66fbc8e05273aed7", name: "subheader" })), h("div", { key: "25e512148d19c253ab1c6604c1cc46179f53ebca", class: "tile-content" }, h("slot", { key: "0b5cf4a56846bfe91603c55917009d056b40bb35" })), h("div", { key: "c10c8b4350bd1bdc838c90c156102a7f8f5c0944", class: {
      "tile-footer": true,
      "has-content": this.hasFooterSlot
    } }, h("slot", { key: "35315aa374339c8a7ff5b6c3ee42e9aa8e57bded", name: "footer", onSlotchange: () => this.handleFooterSlotChange() })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Tile.style = IxTileStyle0;
export {
  Tile as ix_tile
};

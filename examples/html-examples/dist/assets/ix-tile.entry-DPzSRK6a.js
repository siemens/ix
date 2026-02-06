import { r as registerInstance, h, H as Host, g as getElement } from "./global-wi9VneMU.js";
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
    return h(Host, { key: "e1166a8b4e348942b7ed4258f88f8be64de05933", class: {
      "tile-small": this.size === "small",
      "tile-medium": this.size === "medium",
      "tile-big": this.size === "big"
    } }, h("div", { key: "a6bd9158342ed546d51c55685afe3d75c2bf31b8", class: {
      "tile-header": true,
      "has-content": this.hasHeaderSlot
    } }, h("slot", { key: "c24c054f14e378dc126472b4086b4be4a245cbac", name: "header", onSlotchange: () => this.handleHeaderSlotChange() })), h("div", { key: "975744cdd6f42661636fc382a2f2e3c256ccdc9f", class: "tile-subheader" }, h("slot", { key: "a867a5e2e3cb8958c819d5d936bf955cb51e808b", name: "subheader" })), h("div", { key: "8ab40a481b778384e6773a6318545e1d0001e669", class: "tile-content" }, h("slot", { key: "c013dd68db8ce80c3b4cfac26acf9c690fcb2439" })), h("div", { key: "00b012d9f4bce4b623fc30b1f750f4319f4144f9", class: {
      "tile-footer": true,
      "has-content": this.hasFooterSlot
    } }, h("slot", { key: "fc565c7344dadeb70cf0002392a0ee98774843df", name: "footer", onSlotchange: () => this.handleFooterSlotChange() })));
  }
  get hostElement() {
    return getElement(this);
  }
};
Tile.style = tileCss;
export {
  Tile as ix_tile
};

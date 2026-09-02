import { r as registerInstance, g as getElement, h, H as Host } from "./global-Do6maBom.js";
const tileCss = () => `@charset "UTF-8";:host{--ix-tile--background:var(--si-sys-background-1);--ix-tile--color:var(--si-sys-text-primary);--ix-tile-subheader--color:var(--si-sys-text-secondary);--ix-tile-footer--border-color:var(--si-sys-background-0);--ix-tile--border-color:rgba(0, 0, 0, 0);--ix-tile--border-radius:var(--theme-default-border-radius);--ix-tile--border-width:var(--theme-border-width-none);--ix-tile--box-shadow:none}:host{min-width:11.937rem;max-width:11.937rem;width:11.937rem;display:flex;flex-direction:column;border:var(--ix-tile--border-width) solid var(--ix-tile--border-color);border-radius:var(--ix-tile--border-radius);background-color:var(--ix-tile--background);color:var(--ix-tile--color);box-shadow:var(--ix-tile--box-shadow)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .tile-header{display:flex;align-items:center;font-family:Siemens Sans, sans-serif;font-size:1rem;font-weight:700;line-height:1.5em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .tile-header,:host .tile-subheader,:host .tile-content,:host .tile-footer{padding:0 1rem}:host .tile-header,:host .tile-content{flex-grow:1}:host .tile-header.has-content{display:flex;height:2.5rem;max-height:2.5rem;padding-inline-end:0.5rem}:host .tile-subheader{color:var(--ix-tile-subheader--color);flex-grow:0}:host .tile-footer.has-content{border-block-start:1px solid var(--ix-tile-footer--border-color);height:2.5rem}:host(.tile-small){height:2.5rem;min-height:2.5rem;max-height:2.5rem}:host(.tile-medium){height:5rem;min-height:5rem;max-height:5rem}:host(.tile-big){height:10rem;min-height:10rem;max-height:10rem}:host(:active),:host(:focus-visible),:host(:visited){outline:none}`;
const Tile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  get hostElement() {
    return getElement(this);
  }
  /**
   * Size of the tile - one of 'small', 'medium' or 'large'
   */
  size = "medium";
  hasHeaderSlot = false;
  hasFooterSlot = false;
  handleHeaderSlotChange() {
    this.hasHeaderSlot = !!this.hostElement.querySelector('[slot="header"]');
  }
  handleFooterSlotChange() {
    this.hasFooterSlot = !!this.hostElement.querySelector('[slot="footer"]');
  }
  render() {
    return h(Host, { key: "86577dd6059a15099a30f9992c86532d487cf93c", class: {
      "tile-small": this.size === "small",
      "tile-medium": this.size === "medium",
      "tile-big": this.size === "big"
    } }, h("div", { key: "f3e0aead10d4d9cac364b1e93eb3080364503c31", class: {
      "tile-header": true,
      "has-content": this.hasHeaderSlot
    } }, h("slot", { key: "4379c1cd724a64946306400a8529dae614a4203b", name: "header", onSlotchange: () => this.handleHeaderSlotChange() })), h("div", { key: "542b7a5ad5acdf8f316bc436d744eb7d819870bc", class: "tile-subheader" }, h("slot", { key: "e8a4b215eb83d9078f80ccb3b77c95baab9a4c08", name: "subheader" })), h("div", { key: "dfdfe941c291aa84512b41b2d94873c05dfc269b", class: "tile-content" }, h("slot", { key: "469a974153394b34efa2b68f27f3748944feaea2" })), h("div", { key: "5e86e7db223d499f99975bb553224337a619740a", class: {
      "tile-footer": true,
      "has-content": this.hasFooterSlot
    } }, h("slot", { key: "18caff14c8a01a0b9403d63790221cc65c2c55fd", name: "footer", onSlotchange: () => this.handleFooterSlotChange() })));
  }
};
Tile.style = tileCss();
export {
  Tile as ix_tile
};

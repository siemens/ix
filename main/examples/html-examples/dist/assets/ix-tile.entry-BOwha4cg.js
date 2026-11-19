import { r as registerInstance, g as getElement, h, H as Host } from "./index-CgUi6DzV-C-hoZ9qs.js";
import "./preload-helper-UZRgTS1n.js";
const tileCss = () => `@charset "UTF-8";:host{--ix-tile--background:var(--si-sys-color-background-1);--ix-tile--color:var(--si-sys-color-text-primary);--ix-tile-subheader--color:var(--si-sys-color-text-secondary);--ix-tile-footer--border-color:var(--si-sys-color-background-0);--ix-tile--border-color:rgba(0, 0, 0, 0);--ix-tile--box-shadow:none}:host{--ix-tile--border-radius:var(--si-sys-sizing-border-radius-sm);--ix-tile--border-width:var(--si-sys-sizing-border-width-none);--ix-tile--height--small:var(--si-sys-sizing-size-90);--ix-tile--height--medium:var(--si-sys-sizing-size-120);--ix-tile--height--big:var(--si-sys-sizing-size-150);--ix-tile--width:calc(var(--si-sys-sizing-size-150) + var(--si-sys-sizing-spacing-x-100));--ix-tile-footer--padding:0 var(--si-sys-sizing-spacing-x-60);--ix-tile-has-content--height:var(--si-sys-sizing-size-90);--ix-tile-has-content--max-height:var(--si-sys-sizing-size-90);--ix-tile-has-content--padding-inline-end:var(--si-sys-sizing-spacing-x-40);--ix-tile-footer--border-width:var(--si-sys-sizing-border-width-default)}:host{min-width:var(--ix-tile--width);max-width:var(--ix-tile--width);width:var(--ix-tile--width);display:flex;flex-direction:column;border:var(--ix-tile--border-width) solid var(--ix-tile--border-color);border-radius:var(--ix-tile--border-radius);background-color:var(--ix-tile--background);color:var(--ix-tile--color);box-shadow:var(--ix-tile--box-shadow)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-color-border-4);--ix-scrollbar-background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-color-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-color-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-color-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-color-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .tile-header{display:flex;align-items:center;font:var(--si-sys-typography-body-lg-sbold);font-feature-settings:"clig" off, "liga" off;font-style:normal;letter-spacing:var(--si-ref-typography-letter-spacing-normal);text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale}:host .tile-header,:host .tile-subheader,:host .tile-content,:host .tile-footer{padding:var(--ix-tile-footer--padding)}:host .tile-header,:host .tile-content{flex-grow:1}:host .tile-header.has-content{display:flex;height:var(--ix-tile-has-content--height);max-height:var(--ix-tile-has-content--max-height);padding-inline-end:var(--ix-tile-has-content--padding-inline-end)}:host .tile-subheader{color:var(--ix-tile-subheader--color);flex-grow:0}:host .tile-footer.has-content{border-block-start:var(--ix-tile-footer--border-width) solid var(--ix-tile-footer--border-color);height:var(--ix-tile-has-content--height)}:host(.tile-small){height:var(--ix-tile--height--small);min-height:var(--ix-tile--height--small);max-height:var(--ix-tile--height--small)}:host(.tile-medium){height:var(--ix-tile--height--medium);min-height:var(--ix-tile--height--medium);max-height:var(--ix-tile--height--medium)}:host(.tile-big){height:var(--ix-tile--height--big);min-height:var(--ix-tile--height--big);max-height:var(--ix-tile--height--big)}:host(:active),:host(:focus-visible),:host(:visited){outline:none}`;
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
    return h(Host, { key: "37eb8864599f9e38c379c80cc524c59617281501", class: {
      "tile-small": this.size === "small",
      "tile-medium": this.size === "medium",
      "tile-big": this.size === "big"
    } }, h("div", { key: "9f7fc231accafd71a0a6d5d8de5eac81e98411c3", class: {
      "tile-header": true,
      "has-content": this.hasHeaderSlot
    } }, h("slot", { key: "8fd76b84fb25cb13a4ee4d64f39cc8451b1f70d5", name: "header", onSlotchange: () => this.handleHeaderSlotChange() })), h("div", { key: "6b348974f9095e2bdb389236efcde86b2d905b9a", class: "tile-subheader" }, h("slot", { key: "67bbc6e2bcfd74787f2a324f575af5a301282aad", name: "subheader" })), h("div", { key: "fb9f1b974de05c0db6ddceb6e3a25ef6ddd21fe9", class: "tile-content" }, h("slot", { key: "27b11518fd4cdd2813c22505f405cd844d4fdc1b" })), h("div", { key: "c5713fe9a6ab63d6497c9708b1999ad37722f709", class: {
      "tile-footer": true,
      "has-content": this.hasFooterSlot
    } }, h("slot", { key: "614918523df42cccb1fa76e96ae9e1e9f4fb3b30", name: "footer", onSlotchange: () => this.handleFooterSlotChange() })));
  }
};
Tile.style = tileCss();
export {
  Tile as ix_tile
};

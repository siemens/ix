'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-17eb8998.js');

const tileCss = ".sc-ix-tile-h{min-width:11.937rem;max-width:11.937rem;width:11.937rem;display:flex;flex-direction:column;border:1px solid var(--theme-tile--border);border-radius:var(--theme-tile--border-radius);background-color:var(--theme-color-2);color:var(--theme-color-std-text);box-shadow:var(--theme-tile--box-shadow)}.tile-small.sc-ix-tile-h{height:2.5rem;min-height:2.5rem;max-height:2.5rem}.tile-medium.sc-ix-tile-h{height:5rem;min-height:5rem;max-height:5rem}.tile-big.sc-ix-tile-h{height:10rem;min-height:10rem;max-height:10rem}.sc-ix-tile-h:active,.sc-ix-tile-h:focus-visible,.sc-ix-tile-h:visited{outline:none}.sc-ix-tile-h .tile-header.sc-ix-tile{display:flex;align-items:center}.sc-ix-tile-h .tile-header.sc-ix-tile:not(:empty),.sc-ix-tile-h .tile-subheader.sc-ix-tile:not(:empty),.sc-ix-tile-h .tile-content.sc-ix-tile:not(:empty),.sc-ix-tile-h .tile-footer.sc-ix-tile:not(:empty){padding:0 1rem}.sc-ix-tile-h .tile-header.sc-ix-tile,.sc-ix-tile-h .tile-subheader.sc-ix-tile,.sc-ix-tile-h .tile-content.sc-ix-tile{flex-grow:1}.sc-ix-tile-h .tile-header.sc-ix-tile:not(:empty){display:flex;height:2.5rem;max-height:2.5rem;-webkit-padding-end:0.5rem;padding-inline-end:0.5rem}.sc-ix-tile-h .tile-subheader.sc-ix-tile{color:var(--theme-btn-invisible-secondary--color);flex-grow:0}.sc-ix-tile-h .tile-content.sc-ix-tile{flex-grow:1}.sc-ix-tile-h .tile-footer.sc-ix-tile:not(:empty){-webkit-border-before:1px solid var(--theme-color-1);border-block-start:1px solid var(--theme-color-1);height:2.5rem}";

const Tile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.size = 'medium';
  }
  render() {
    return (index.h(index.Host, { class: {
        'tile-small': this.size === 'small',
        'tile-medium': this.size === 'medium',
        'tile-big': this.size === 'big',
      } }, index.h("div", { class: "tile-header text-l-title" }, index.h("slot", { name: "header" })), index.h("div", { class: "tile-subheader" }, index.h("slot", { name: "subheader" })), index.h("div", { class: "tile-content" }, index.h("slot", null)), index.h("div", { class: "tile-footer" }, index.h("slot", { name: "footer" }))));
  }
};
Tile.style = tileCss;

exports.ix_tile = Tile;

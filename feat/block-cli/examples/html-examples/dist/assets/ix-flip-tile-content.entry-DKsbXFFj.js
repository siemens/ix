import { r as registerInstance, h, H as Host } from "./global-BlVZeLef.js";
const flipTileContentCss = ":host{display:block}";
const FlipTileContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contentVisible = false;
  }
  render() {
    return h(Host, { key: "08ee2d43aae8b13a3fe73ae6be4616e469795731" }, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = flipTileContentCss;
export {
  FlipTileContent as ix_flip_tile_content
};

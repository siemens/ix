import { r as registerInstance, h, H as Host } from "./global-wi9VneMU.js";
const flipTileContentCss = ":host{display:block}";
const FlipTileContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contentVisible = false;
  }
  render() {
    return h(Host, { key: "002fbfde1a46839d622af7fb2be6dff5ca99aa87" }, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = flipTileContentCss;
export {
  FlipTileContent as ix_flip_tile_content
};

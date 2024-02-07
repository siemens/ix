import { r as registerInstance, h, H as Host } from "./index.18e27e15.js";
const flipTileContentCss = ":host{display:block}";
const IxFlipTileContentStyle0 = flipTileContentCss;
const FlipTileContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contentVisible = false;
  }
  render() {
    return h(Host, { key: "7c5c057d04d081bef9e40edd53d9bd652da1e64d" }, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = IxFlipTileContentStyle0;
export {
  FlipTileContent as ix_flip_tile_content
};

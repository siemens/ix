import { r as registerInstance, h, H as Host } from "./index.691fb79b.js";
const flipTileContentCss = ":host{display:block}";
const IxFlipTileContentStyle0 = flipTileContentCss;
const FlipTileContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contentVisible = false;
  }
  render() {
    return h(Host, null, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = IxFlipTileContentStyle0;
export {
  FlipTileContent as ix_flip_tile_content
};

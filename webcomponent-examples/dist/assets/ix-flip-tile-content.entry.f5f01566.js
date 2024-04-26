import { r as registerInstance, h, H as Host } from "./index.918151cc.js";
const flipTileContentCss = ":host{display:block}";
const IxFlipTileContentStyle0 = flipTileContentCss;
const FlipTileContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contentVisible = false;
  }
  render() {
    return h(Host, { key: "42fe2007b429b2791c5f0a43758d55d4429c3255" }, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = IxFlipTileContentStyle0;
export {
  FlipTileContent as ix_flip_tile_content
};

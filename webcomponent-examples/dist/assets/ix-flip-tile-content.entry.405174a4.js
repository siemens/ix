import { r as registerInstance, h, H as Host } from "./global.2bfd6008.js";
const flipTileContentCss = ":host{display:block}";
const IxFlipTileContentStyle0 = flipTileContentCss;
const FlipTileContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.contentVisible = false;
  }
  render() {
    return h(Host, { key: "80b53319120d77c589bdd273d29999df685e9aa9" }, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = IxFlipTileContentStyle0;
export {
  FlipTileContent as ix_flip_tile_content
};

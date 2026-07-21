import { r as registerInstance, h, H as Host } from "./global-CRrZCTD3.js";
const flipTileContentCss = () => `:host{display:block}`;
const FlipTileContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  /**
   * Controls the visibility of the content
   *
   * @internal
   */
  contentVisible = false;
  render() {
    return h(Host, { key: "c03f9b853ba18651507f169236c2a7f71cef48b1" }, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = flipTileContentCss();
export {
  FlipTileContent as ix_flip_tile_content
};

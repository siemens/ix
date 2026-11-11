import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-DSXWMbmA.js";
import "./preload-helper-UZRgTS1n.js";
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
    return h(Host, { key: "6ce0ba7a443ff41c7fb0cffa0fb04a1f9a6908b7" }, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = flipTileContentCss();
export {
  FlipTileContent as ix_flip_tile_content
};

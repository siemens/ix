import { r as registerInstance, h, H as Host } from "./index-CgUi6DzV-BfsU3hSZ.js";
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
    return h(Host, { key: "4a9ec4e5be2c2703859853c7ce8eb8e7900de833" }, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = flipTileContentCss();
export {
  FlipTileContent as ix_flip_tile_content
};

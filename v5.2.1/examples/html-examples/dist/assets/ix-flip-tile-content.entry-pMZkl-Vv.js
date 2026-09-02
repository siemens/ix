import { r as registerInstance, h, H as Host } from "./global-Do6maBom.js";
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
    return h(Host, { key: "d5c5aa3629c112a911c379f506483384962178d7" }, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = flipTileContentCss();
export {
  FlipTileContent as ix_flip_tile_content
};

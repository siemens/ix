import { r as registerInstance, h, H as Host } from "./global-43rhC1fd.js";
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
    return h(Host, { key: "98afa5a4b2fa31bcb407c40867063d7abc9f3edf" }, this.contentVisible ? h("slot", null) : null);
  }
};
FlipTileContent.style = flipTileContentCss();
export {
  FlipTileContent as ix_flip_tile_content
};

import { r as registerInstance, h, H as Host, g as getElement } from "./index.a2eb3be9.js";
import { F as FlipTileState } from "./flip-tile-state-db31345f.fa15ac0c.js";
const flipTileCss = "@keyframes flip-animation{0%{transform:rotateY(0)}50%{transform:rotateY(90deg)}51%{transform:rotateY(270deg)}100%{transform:rotateY(360deg)}}.sc-ix-flip-tile-h{display:flex;flex-direction:column;perspective:1000px}.sc-ix-flip-tile-h .flip-tile-header.sc-ix-flip-tile{display:flex;align-items:center;height:2.5rem;padding:0 0.5rem 0 1rem}.sc-ix-flip-tile-h .flip-tile-header.sc-ix-flip-tile .header-slot-container.sc-ix-flip-tile{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;min-width:0}.sc-ix-flip-tile-h .content-container.sc-ix-flip-tile{flex-grow:1;margin:1rem}.sc-ix-flip-tile-h .flip-tile-container.sc-ix-flip-tile{display:flex;flex-direction:column;height:100%;background-color:var(--theme-blind-base--background);border:solid 1px var(--theme-blind-base--border-color);border-radius:var(--theme-flip-tile--border-radius) var(--theme-flip-tile--border-radius) 0 0;transform-style:preserve-3d}.sc-ix-flip-tile-h .flip-tile-container.flip-animation-active.sc-ix-flip-tile{animation:flip-animation 300ms, ease-in-out}.sc-ix-flip-tile-h .flip-tile-container.sc-ix-flip-tile .footer.sc-ix-flip-tile{display:flex;height:3rem;align-items:center;justify-content:center;padding:0 0.5rem;color:var(--theme-flip-footer--color);background-color:var(--theme-blind-base--background)}.sc-ix-flip-tile-h .flip-tile-container.sc-ix-flip-tile .footer.sc-ix-flip-tile .sc-ix-flip-tile:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:100%}.sc-ix-flip-tile-h .flip-tile-container .sc-ix-flip-tile-s>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;align-items:center;min-width:0}.sc-ix-flip-tile-h .flip-tile-container.primary.sc-ix-flip-tile{border-color:var(--theme-color-primary)}.sc-ix-flip-tile-h .flip-tile-container.primary.sc-ix-flip-tile .footer.sc-ix-flip-tile{background-color:var(--theme-color-primary);color:var(--theme-color-primary--contrast)}.sc-ix-flip-tile-h .flip-tile-container.info.sc-ix-flip-tile{border-color:var(--theme-color-info)}.sc-ix-flip-tile-h .flip-tile-container.info.sc-ix-flip-tile .footer.sc-ix-flip-tile{background-color:var(--theme-color-info);color:var(--theme-color-info--contrast)}.sc-ix-flip-tile-h .flip-tile-container.warning.sc-ix-flip-tile{border-color:var(--theme-color-warning)}.sc-ix-flip-tile-h .flip-tile-container.warning.sc-ix-flip-tile .footer.sc-ix-flip-tile{background-color:var(--theme-color-warning);color:var(--theme-color-warning--contrast)}.sc-ix-flip-tile-h .flip-tile-container.alarm.sc-ix-flip-tile{border-color:var(--theme-color-alarm)}.sc-ix-flip-tile-h .flip-tile-container.alarm.sc-ix-flip-tile .footer.sc-ix-flip-tile{background-color:var(--theme-color-alarm);color:var(--theme-color-alarm--contrast)}.sc-ix-flip-tile-h:hover .flip-tile-container.sc-ix-flip-tile .footer.sc-ix-flip-tile ix-icon.sc-ix-flip-tile{color:var(--theme-color-std-text)}";
const FlipTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ANIMATION_DURATION = 150;
    this.index = 0;
    this.isFlipAnimationActive = void 0;
    this.state = void 0;
    this.footer = void 0;
    this.height = 15.125;
    this.width = 16;
  }
  componentDidLoad() {
    this.contentItems = this.contentContainerElement.querySelectorAll("ix-flip-tile-content");
    this.contentItems.forEach((_, index) => {
      if (index !== this.index) {
        this.toggleContentItem(index);
      }
    });
  }
  toggleIndex() {
    this.doFlipAnimation();
  }
  toggleContentItem(index) {
    const item = this.contentItems[index];
    item.classList.toggle("d-none");
  }
  doFlipAnimation() {
    this.isFlipAnimationActive = true;
    setTimeout(() => {
      this.toggleContentItem(this.index);
      if (this.index >= this.contentItems.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
      this.toggleContentItem(this.index);
    }, this.ANIMATION_DURATION);
    setTimeout(() => {
      this.isFlipAnimationActive = false;
    }, 2 * this.ANIMATION_DURATION);
  }
  render() {
    return h(Host, { style: {
      height: `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "min-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      "max-height": `${this.height}${this.height === "auto" ? "" : "rem"}`,
      width: `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "min-width": `${this.width}${this.width === "auto" ? "" : "rem"}`,
      "max-width": `${this.width}${this.width === "auto" ? "" : "rem"}`
    } }, h("div", { class: {
      "flip-tile-container": true,
      info: this.state === FlipTileState.Info,
      warning: this.state === FlipTileState.Warning,
      alarm: this.state === FlipTileState.Alarm,
      primary: this.state === FlipTileState.Primary,
      "flip-animation-active": this.isFlipAnimationActive
    } }, h("div", { class: "flip-tile-header" }, h("div", { class: "header-slot-container text-l-title" }, h("slot", { name: "header" })), h("ix-icon-button", { icon: "eye", variant: "primary", ghost: true, onClick: () => this.toggleIndex() })), h("div", { class: "content-container", ref: (el) => this.contentContainerElement = el }, h("slot", null)), h("div", { class: {
      footer: true,
      "contrast-light": this.state === FlipTileState.Warning,
      "contrast-dark": this.state === FlipTileState.Info || this.state === FlipTileState.Alarm
    } }, h("slot", { name: "footer" }))));
  }
  get hostElement() {
    return getElement(this);
  }
};
FlipTile.style = flipTileCss;
const flipTileContentCss = ":host{display:block}";
const FlipTileContent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("slot", null));
  }
};
FlipTileContent.style = flipTileContentCss;
export {
  FlipTile as ix_flip_tile,
  FlipTileContent as ix_flip_tile_content
};

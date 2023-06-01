import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './icon.js';
import { d as defineCustomElement$2 } from './icon-button.js';

/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FlipTileState;
(function (FlipTileState) {
  FlipTileState["None"] = "None";
  FlipTileState["Info"] = "Info";
  FlipTileState["Warning"] = "Warning";
  FlipTileState["Alarm"] = "Alarm";
  FlipTileState["Primary"] = "Primary";
})(FlipTileState || (FlipTileState = {}));

const flipTileCss = "@keyframes flip-animation{0%{transform:rotateY(0)}50%{transform:rotateY(90deg)}51%{transform:rotateY(270deg)}100%{transform:rotateY(360deg)}}.sc-ix-flip-tile-h{display:flex;flex-direction:column;width:16rem;min-width:16rem;max-width:16rem;height:15.125rem;perspective:1000px}.sc-ix-flip-tile-h .flip-tile-header.sc-ix-flip-tile{display:flex;align-items:center;height:2.5rem;padding:0 0.5rem 0 1rem}.sc-ix-flip-tile-h .flip-tile-header.sc-ix-flip-tile .header-slot-container.sc-ix-flip-tile{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1;min-width:0}.sc-ix-flip-tile-h .content-container.sc-ix-flip-tile{flex-grow:1;margin:1rem}.sc-ix-flip-tile-h .flip-tile-container.sc-ix-flip-tile{display:flex;flex-direction:column;height:100%;background-color:var(--theme-blind-base--background);border:solid 1px var(--theme-blind-base--border-color);border-radius:var(--theme-flip-tile--border-radius) var(--theme-flip-tile--border-radius) 0 0;transform-style:preserve-3d}.sc-ix-flip-tile-h .flip-tile-container.flip-animation-active.sc-ix-flip-tile{animation:flip-animation 300ms, ease-in-out}.sc-ix-flip-tile-h .flip-tile-container.sc-ix-flip-tile .footer.sc-ix-flip-tile{display:flex;height:3rem;align-items:center;justify-content:center;padding:0 0.5rem;color:var(--theme-flip-footer--color);background-color:var(--theme-blind-base--background)}.sc-ix-flip-tile-h .flip-tile-container.sc-ix-flip-tile .footer.sc-ix-flip-tile .sc-ix-flip-tile:first-child{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:100%}.sc-ix-flip-tile-h .flip-tile-container .sc-ix-flip-tile-s>*{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;align-items:center;min-width:0}.sc-ix-flip-tile-h .flip-tile-container.primary.sc-ix-flip-tile{border-color:var(--theme-color-primary)}.sc-ix-flip-tile-h .flip-tile-container.primary.sc-ix-flip-tile .footer.sc-ix-flip-tile{background-color:var(--theme-color-primary);color:var(--theme-color-primary--contrast)}.sc-ix-flip-tile-h .flip-tile-container.info.sc-ix-flip-tile{border-color:var(--theme-color-info)}.sc-ix-flip-tile-h .flip-tile-container.info.sc-ix-flip-tile .footer.sc-ix-flip-tile{background-color:var(--theme-color-info);color:var(--theme-color-info--contrast)}.sc-ix-flip-tile-h .flip-tile-container.warning.sc-ix-flip-tile{border-color:var(--theme-color-warning)}.sc-ix-flip-tile-h .flip-tile-container.warning.sc-ix-flip-tile .footer.sc-ix-flip-tile{background-color:var(--theme-color-warning);color:var(--theme-color-warning--contrast)}.sc-ix-flip-tile-h .flip-tile-container.alarm.sc-ix-flip-tile{border-color:var(--theme-color-alarm)}.sc-ix-flip-tile-h .flip-tile-container.alarm.sc-ix-flip-tile .footer.sc-ix-flip-tile{background-color:var(--theme-color-alarm);color:var(--theme-color-alarm--contrast)}.sc-ix-flip-tile-h:hover .flip-tile-container.sc-ix-flip-tile .footer.sc-ix-flip-tile ix-icon.sc-ix-flip-tile{color:var(--theme-color-std-text)}";

const FlipTile = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.ANIMATION_DURATION = 150;
    this.index = 0;
    this.isFlipAnimationActive = undefined;
    this.state = undefined;
    this.footer = undefined;
  }
  componentDidLoad() {
    this.contentItems = this.contentContainerElement.querySelectorAll('ix-flip-tile-content');
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
    item.classList.toggle('d-none');
  }
  doFlipAnimation() {
    this.isFlipAnimationActive = true;
    setTimeout(() => {
      this.toggleContentItem(this.index);
      if (this.index >= this.contentItems.length - 1) {
        this.index = 0;
      }
      else {
        this.index++;
      }
      this.toggleContentItem(this.index);
    }, this.ANIMATION_DURATION);
    setTimeout(() => {
      this.isFlipAnimationActive = false;
    }, 2 * this.ANIMATION_DURATION);
  }
  render() {
    return (h(Host, null, h("div", { class: {
        'flip-tile-container': true,
        info: this.state === FlipTileState.Info,
        warning: this.state === FlipTileState.Warning,
        alarm: this.state === FlipTileState.Alarm,
        primary: this.state === FlipTileState.Primary,
        'flip-animation-active': this.isFlipAnimationActive,
      } }, h("div", { class: "flip-tile-header" }, h("div", { class: "header-slot-container text-l-title" }, h("slot", { name: "header" })), h("ix-icon-button", { icon: "eye", variant: "Primary", ghost: true, onClick: () => this.toggleIndex() })), h("div", { class: "content-container", ref: (el) => (this.contentContainerElement = el) }, h("slot", null)), h("div", { class: {
        footer: true,
        'contrast-light': this.state === FlipTileState.Warning,
        'contrast-dark': this.state === FlipTileState.Info ||
          this.state === FlipTileState.Alarm,
      } }, h("slot", { name: "footer" })))));
  }
  get hostElement() { return this; }
  static get style() { return flipTileCss; }
}, [6, "ix-flip-tile", {
    "state": [1],
    "footer": [1],
    "index": [32],
    "isFlipAnimationActive": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ix-flip-tile", "ix-icon", "ix-icon-button"];
  components.forEach(tagName => { switch (tagName) {
    case "ix-flip-tile":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, FlipTile);
      }
      break;
    case "ix-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "ix-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IxFlipTile = FlipTile;
const defineCustomElement = defineCustomElement$1;

export { FlipTileState as F, IxFlipTile, defineCustomElement };

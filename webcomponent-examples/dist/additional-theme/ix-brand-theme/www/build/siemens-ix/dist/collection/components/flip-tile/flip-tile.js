/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
import { FlipTileState } from './flip-tile-state';
export class FlipTile {
  constructor() {
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
  static get is() { return "ix-flip-tile"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["flip-tile.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["flip-tile.css"]
    };
  }
  static get properties() {
    return {
      "state": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "FlipTileState",
          "resolved": "FlipTileState.Alarm | FlipTileState.Info | FlipTileState.None | FlipTileState.Primary | FlipTileState.Warning",
          "references": {
            "FlipTileState": {
              "location": "import",
              "path": "./flip-tile-state"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Variation of the Flip"
        },
        "attribute": "state",
        "reflect": false
      },
      "footer": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Tmp property name"
        },
        "attribute": "footer",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "index": {},
      "isFlipAnimationActive": {}
    };
  }
  static get elementRef() { return "hostElement"; }
}

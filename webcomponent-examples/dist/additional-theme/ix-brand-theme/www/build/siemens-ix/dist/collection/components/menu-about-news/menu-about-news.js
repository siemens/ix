/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
export class MenuAboutNews {
  constructor() {
    this.show = false;
    this.label = undefined;
    this.i18nShowMore = 'Show more';
    this.aboutItemLabel = undefined;
    this.offsetBottom = 0;
    this.expanded = false;
  }
  render() {
    return (h(Host, { class: {
        expanded: this.expanded,
        show: !this.show,
      } }, h("div", { class: "banner-container" }, h("ix-icon", { color: "color-inv-contrast-text", name: "shout", size: "32" }), h("svg", { viewBox: "0 0 48 56", xmlns: "http://www.w3.org/2000/svg" }, h("polygon", { points: "0 0 48 0 48 56 24 48 0 56" }))), h("div", { class: "cui-popover-news-header" }, h("span", { class: "text-l-title" }, this.label)), h("ix-icon-button", { size: "24", icon: "close-small", ghost: true, onClick: () => {
        this.show = false;
        this.closePopover.emit();
      } }), h("slot", null), this.aboutItemLabel ? (h("div", { class: "cui-popover-news-footer" }, h("button", { class: "btn btn-primary", onClick: (e) => {
        this.show = false;
        this.showMore.emit(e);
      } }, this.i18nShowMore))) : null, h("div", { id: "arrow" })));
  }
  static get is() { return "ix-menu-about-news"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["menu-about-news.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["menu-about-news.css"]
    };
  }
  static get properties() {
    return {
      "show": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Show about news"
        },
        "attribute": "show",
        "reflect": true,
        "defaultValue": "false"
      },
      "label": {
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
          "text": "Title of the about news"
        },
        "attribute": "label",
        "reflect": false
      },
      "i18nShowMore": {
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
          "text": ""
        },
        "attribute": "i-1-8n-show-more",
        "reflect": false,
        "defaultValue": "'Show more'"
      },
      "aboutItemLabel": {
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
          "text": "Subtitle of the about news"
        },
        "attribute": "about-item-label",
        "reflect": false
      },
      "offsetBottom": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Bottom offset"
        },
        "attribute": "offset-bottom",
        "reflect": false,
        "defaultValue": "0"
      },
      "expanded": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Internal"
        },
        "attribute": "expanded",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get events() {
    return [{
        "method": "showMore",
        "name": "showMore",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Show More button is pressed"
        },
        "complexType": {
          "original": "MouseEvent",
          "resolved": "MouseEvent",
          "references": {
            "MouseEvent": {
              "location": "global"
            }
          }
        }
      }, {
        "method": "closePopover",
        "name": "closePopover",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Popover closed"
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
}

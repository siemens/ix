/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, } from '@stencil/core';
export class EventListItem {
  constructor() {
    this.color = undefined;
    this.selected = undefined;
    this.disabled = undefined;
    this.chevron = undefined;
    this.opacity = 1;
  }
  handleItemClick() {
    this.itemClick.emit();
  }
  render() {
    return (h("div", { class: {
        'ix-event-list-item': true,
        selected: this.selected,
        disabled: this.disabled,
      } }, h("div", { class: `indicator ${!this.color ? 'indicator-empty' : ''}`, style: {
        'background-color': this.color
          ? `var(--theme-${this.color})`
          : 'inherit',
        opacity: `${this.disabled ? 0.4 : this.opacity}`,
      } }), h("div", { class: "event-list-item-container" }, h("div", { class: "event-content" }, h("slot", null)), this.chevron ? (h("i", { class: "glyph glyph-16 glyph-chevron-right chevron-icon" })) : (''))));
  }
  static get is() { return "ix-event-list-item"; }
  static get originalStyleUrls() {
    return {
      "$": ["event-list-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["event-list-item.css"]
    };
  }
  static get properties() {
    return {
      "color": {
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
          "text": "Color of the status indicator.\nAllowed values are all Core UI color names."
        },
        "attribute": "color",
        "reflect": false
      },
      "selected": {
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
          "text": "Show event list item as selected"
        },
        "attribute": "selected",
        "reflect": false
      },
      "disabled": {
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
          "text": "Disable event list item"
        },
        "attribute": "disabled",
        "reflect": false
      },
      "chevron": {
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
          "text": "Show chevron on right side of the event list item"
        },
        "attribute": "chevron",
        "reflect": false
      },
      "opacity": {
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
          "tags": [{
              "name": "deprecated",
              "text": "Will be removed in 2.0.0"
            }],
          "text": "Opacity of the status indicator.\nDefaults to 1.0"
        },
        "attribute": "opacity",
        "reflect": false,
        "defaultValue": "1"
      }
    };
  }
  static get events() {
    return [{
        "method": "itemClick",
        "name": "itemClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event list item click"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get listeners() {
    return [{
        "name": "click",
        "method": "handleItemClick",
        "target": undefined,
        "capture": false,
        "passive": true
      }];
  }
}

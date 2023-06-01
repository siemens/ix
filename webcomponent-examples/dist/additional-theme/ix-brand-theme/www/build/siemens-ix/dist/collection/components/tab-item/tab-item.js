/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host } from '@stencil/core';
export class TabItem {
  constructor() {
    this.selected = false;
    this.disabled = false;
    this.small = false;
    this.icon = false;
    this.rounded = false;
    this.counter = undefined;
    this.layout = 'auto';
    this.placement = 'bottom';
  }
  tabItemClasses(props) {
    return {
      selected: props.selected,
      disabled: props.disabled,
      'small-tab': props.small,
      icon: props.small,
      stretched: props.layout === 'stretched',
      bottom: props.placement === 'bottom',
      top: props.placement === 'top',
      circle: props.circle,
    };
  }
  render() {
    return (h(Host, { class: this.tabItemClasses({
        selected: this.selected,
        disabled: this.disabled,
        small: this.small,
        icon: this.icon,
        layout: this.layout,
        placement: this.placement,
        circle: this.rounded,
      }), tabIndex: 0 }, h("div", { class: {
        circle: this.rounded,
        text: !this.rounded,
        selected: this.selected,
        disabled: this.disabled,
      } }, h("slot", null)), h("div", { class: {
        counter: true,
        selected: this.selected,
        hidden: !(this.rounded && this.counter !== undefined),
        disabled: this.disabled,
      } }, this.counter)));
  }
  static get is() { return "ix-tab-item"; }
  static get originalStyleUrls() {
    return {
      "$": ["tab-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tab-item.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Set selected tab"
        },
        "attribute": "selected",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "Set disabled tab"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "small": {
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
          "text": "Set small size tab"
        },
        "attribute": "small",
        "reflect": false,
        "defaultValue": "false"
      },
      "icon": {
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
          "text": "Set icon only tab"
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "false"
      },
      "rounded": {
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
          "text": "Set rounded tab"
        },
        "attribute": "rounded",
        "reflect": false,
        "defaultValue": "false"
      },
      "counter": {
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
          "text": "Set counter value"
        },
        "attribute": "counter",
        "reflect": false
      },
      "layout": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'auto' | 'stretched'",
          "resolved": "\"auto\" | \"stretched\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set layout width style"
        },
        "attribute": "layout",
        "reflect": false,
        "defaultValue": "'auto'"
      },
      "placement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'bottom' | 'top'",
          "resolved": "\"bottom\" | \"top\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Set selected placement"
        },
        "attribute": "placement",
        "reflect": false,
        "defaultValue": "'bottom'"
      }
    };
  }
}

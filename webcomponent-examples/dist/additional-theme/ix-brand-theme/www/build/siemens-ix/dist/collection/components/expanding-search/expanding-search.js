/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
export class ExpandingSearch {
  constructor() {
    this.icon = 'search';
    this.placeholder = 'Enter text here';
    this.value = '';
    this.isFieldChanged = false;
    this.expanded = false;
    this.hasFocus = false;
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  expandInput() {
    setTimeout(this.focusTextInput, 300);
    this.expanded = true;
  }
  collapseInput() {
    if (!this.isFieldChanged && this.expanded) {
      this.expanded = false;
    }
  }
  clearInput() {
    this.value = '';
    this.isFieldChanged = false;
  }
  onChange(e) {
    this.value = e.target.value;
    if (this.isFieldChanged && this.value === '') {
      this.isFieldChanged = false;
    }
    else {
      this.isFieldChanged = true;
    }
    this.valueChange.emit(this.value);
  }
  focusTextInput() {
    var _a;
    (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
  }
  clearClicked() {
    var _a;
    this.clearInput();
    (_a = this.textInput) === null || _a === void 0 ? void 0 : _a.focus();
    this.valueChange.emit(this.value);
  }
  render() {
    return (h(Host, { class: {
        expanded: this.expanded,
        'right-position': this.expanded,
      } }, h("button", { class: {
        btn: true,
        'btn-invisible-primary': true,
        'btn-icon': true,
        'btn-search': true,
        'disable-pointer': this.expanded,
      }, "data-testid": "button", onClick: () => this.expandInput(), tabindex: this.expanded ? -1 : 0 }, h("ix-icon", { class: "btn-search-icon", name: this.icon, size: this.expanded ? '16' : '24', color: this.hasFocus ? 'input-search-icon--color--focus' : undefined })), h("div", { class: {
        expanded: this.expanded,
        collapsed: !this.expanded,
        'disable-pointer': !this.expanded,
        'input-container': true,
      }, "data-testid": "input-wrapper" }, h("input", { class: {
        'form-control': true,
        input: this.expanded,
        'disable-pointer': !this.expanded,
        'opacity-before': !this.expanded,
        'opacity-after': this.expanded,
      }, ref: (el) => (this.textInput = el), "data-testid": "input", placeholder: this.placeholder, type: "text", value: this.value, onBlur: () => {
        this.collapseInput();
        this.hasFocus = false;
      }, onFocus: () => (this.hasFocus = true), onInput: (e) => this.onChange(e), tabindex: this.expanded ? 0 : -1 }), this.isFieldChanged ? (h("ix-icon-button", { class: "btn-clear", icon: "clear", ghost: true, size: "16", "data-testid": "clear-button", onClick: () => this.clearClicked() })) : null)));
  }
  static get is() { return "ix-expanding-search"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["expanding-search.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["expanding-search.css"]
    };
  }
  static get properties() {
    return {
      "icon": {
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
          "text": "Search icon"
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "'search'"
      },
      "placeholder": {
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
          "text": "Placeholder text"
        },
        "attribute": "placeholder",
        "reflect": false,
        "defaultValue": "'Enter text here'"
      },
      "value": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Default value"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get states() {
    return {
      "isFieldChanged": {},
      "expanded": {},
      "hasFocus": {}
    };
  }
  static get events() {
    return [{
        "method": "valueChange",
        "name": "valueChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Value changed"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
}

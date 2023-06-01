/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
export class Select {
  constructor() {
    this.selectedIndices = [];
    this.allowClear = false;
    this.mode = 'single';
    this.editable = false;
    this.disabled = false;
    this.readonly = false;
    this.i18nPlaceholder = 'Select an option';
    this.i18nPlaceholderEditable = 'Type of select option';
    this.i18nSelectListHeader = 'Please select an option';
    this.dropdownShow = false;
    this.value = undefined;
    this.dropdownWrapperRef = undefined;
    this.dropdownAnchor = undefined;
    this.isDropdownEmpty = false;
    this.hasFocus = false;
    this.navigationItem = undefined;
    this.inputFilterText = undefined;
    this.inputValue = undefined;
  }
  get items() {
    return Array.from(this.hostElement.querySelectorAll('ix-select-item'));
  }
  get selectedItems() {
    return this.items.filter((item) => item.selected);
  }
  get addItemButton() {
    return this.hostElement.querySelector('.add-item');
  }
  get isSingleMode() {
    return this.mode === 'single';
  }
  get isMultipleMode() {
    return this.mode === 'multiple';
  }
  watchSelectedIndices(newId) {
    if (!newId) {
      this.selectValue([]);
      return;
    }
    if (Array.isArray(newId)) {
      this.selectValue([...newId]);
      return;
    }
    this.selectValue([newId]);
  }
  onItemClicked(event) {
    const newId = event.detail;
    this.emitItemClick(newId);
  }
  watchInputText(newValue) {
    if (!this.editable) {
      return;
    }
    if (this.itemExists(newValue)) {
      return;
    }
  }
  emitItemClick(newId) {
    if (this.isMultipleMode && Array.isArray(this.selectedIndices)) {
      if (this.selectedIndices.includes(newId)) {
        this.selectedIndices = this.selectedIndices.filter((i) => i !== newId);
      }
      else {
        this.selectedIndices = [...this.selectedIndices, newId];
      }
    }
    else {
      this.selectedIndices = [newId];
    }
    this.selectValue(this.selectedIndices);
    this.itemSelectionChange.emit(this.selectedIndices);
  }
  emitAddItem(value) {
    if (value.trim() === '') {
      return;
    }
    const test = document.createElement('ix-select-item');
    test.value = value;
    test.label = value;
    this.addItemRef.appendChild(test);
    this.clearInput();
    this.emitItemClick(value);
    this.addItem.emit(value);
  }
  selectValue(ids) {
    var _a;
    this.items.forEach((item) => {
      item.selected = ids.some((i) => i === item.value);
    });
    this.value = this.selectedItems.map((item) => item.label);
    if (this.isSingleMode) {
      this.inputValue = ((_a = this.value) === null || _a === void 0 ? void 0 : _a.length) ? this.value[0] : null;
      return;
    }
    this.inputValue = null;
  }
  componentWillLoad() {
    if (this.selectedIndices) {
      this.selectValue(Array.isArray(this.selectedIndices)
        ? this.selectedIndices
        : [this.selectedIndices]);
    }
  }
  onLabelChange(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.selectValue(Array.isArray(this.selectedIndices)
      ? this.selectedIndices
      : [this.selectedIndices]);
  }
  disconnectedCallback() {
    if (this.labelMutationObserver) {
      this.labelMutationObserver.disconnect();
    }
  }
  itemExists(item) {
    return this.items.find((i) => i.label === item);
  }
  dropdownVisibilityChanged(event) {
    this.dropdownShow = event.detail;
    if (event.detail) {
      this.inputRef.focus();
      this.inputRef.select();
      this.navigationItem = this.items[0];
      this.setHoverEffectForNavigatedSelectItem();
      this.removeHiddenFromItems();
    }
    this.hasFocus = event.detail;
  }
  async onKeyDown(event) {
    if (!this.dropdownShow) {
      return;
    }
    if (event.code === 'ArrowDown' || event.code === 'ArrowUp') {
      this.onArrowNavigation(event);
    }
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      await this.onEnterNavigation();
    }
    if (event.code === 'Escape') {
      this.dropdownShow = false;
    }
  }
  async onEnterNavigation() {
    var _a, _b;
    if (this.isMultipleMode) {
      return;
    }
    if (this.editable && !this.itemExists(this.inputFilterText)) {
      this.emitAddItem(this.inputFilterText);
      this.navigationItem = this.items[this.items.length - 1];
    }
    (_a = this.navigationItem) === null || _a === void 0 ? void 0 : _a.onItemClick();
    await ((_b = this.dropdownRef) === null || _b === void 0 ? void 0 : _b.updatePosition());
    if (this.isSingleMode && !this.editable) {
      this.dropdownShow = false;
    }
  }
  onArrowNavigation(event) {
    event.stopPropagation();
    event.preventDefault();
    const selectItems = this.items.filter((i) => !i.classList.contains('d-none'));
    const index = selectItems.indexOf(this.navigationItem);
    if (event.code === 'ArrowDown' && index < selectItems.length - 1) {
      this.navigationItem = selectItems[index + 1];
    }
    else if (event.code === 'ArrowUp' && index > 0) {
      this.navigationItem = selectItems[index - 1];
    }
    this.setHoverEffectForNavigatedSelectItem();
  }
  setHoverEffectForNavigatedSelectItem() {
    this.items.forEach((item) => {
      item.hover = item === this.navigationItem;
    });
  }
  filterItemsWithTypeahead() {
    this.inputFilterText = this.inputRef.value;
    if (this.inputFilterText) {
      this.items.forEach((item) => {
        item.classList.remove('d-none');
        if (!item.label.toLowerCase().includes(this.inputFilterText.toLowerCase())) {
          item.classList.add('d-none');
        }
      });
    }
    else {
      this.removeHiddenFromItems();
    }
    this.isDropdownEmpty = this.items.every((item) => item.classList.contains('d-none'));
  }
  removeHiddenFromItems() {
    this.items.forEach((item) => {
      item.classList.remove('d-none');
    });
  }
  clearInput() {
    this.inputRef.value = '';
    this.inputFilterText = '';
  }
  clear() {
    this.clearInput();
    this.value = [];
    this.selectedIndices = [];
    this.itemSelectionChange.emit(null);
    this.dropdownShow = false;
  }
  render() {
    var _a, _b, _c;
    return (h(Host, null, h("div", { class: {
        'form-control': true,
        select: true,
        focus: this.hasFocus,
        editable: this.editable,
        disabled: this.disabled,
        readonly: this.readonly,
      }, ref: (ref) => {
        this.dropdownAnchor = ref;
        if (!this.editable)
          this.dropdownWrapperRef = ref;
      } }, h("div", { class: "input-container" }, h("div", { class: "chips" }, this.isMultipleMode
      ? (_a = this.selectedItems) === null || _a === void 0 ? void 0 : _a.map((item) => (h("ix-filter-chip", { disabled: this.disabled || this.readonly, onCloseClick: (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.emitItemClick(item.value);
        } }, item.label)))
      : '', h("div", { class: "trigger" }, h("input", { "data-testid": "input", disabled: this.disabled, readOnly: this.readonly, type: "text", class: {
        'allow-clear': this.allowClear && !!((_b = this.value) === null || _b === void 0 ? void 0 : _b.length),
      }, placeholder: this.editable
        ? this.i18nPlaceholderEditable
        : this.i18nPlaceholder, value: this.inputValue, ref: (ref) => (this.inputRef = ref), onInput: () => this.filterItemsWithTypeahead() }), this.isMultipleMode &&
      this.allowClear &&
      (((_c = this.value) === null || _c === void 0 ? void 0 : _c.length) || this.inputFilterText) ? (h("ix-icon-button", { class: "clear", icon: "clear", ghost: true, oval: true, size: "24", onClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.clear();
      } })) : null, this.disabled || this.readonly ? null : (h("div", { class: "chevron-down-container", ref: (ref) => {
        if (this.editable)
          this.dropdownWrapperRef = ref;
      } }, h("ix-icon", { class: "chevron", name: "chevron-down-small" }))))))), h("ix-dropdown", { ref: (ref) => (this.dropdownRef = ref), show: this.dropdownShow, style: {
        width: '100%',
      }, class: {
        'd-none': this.disabled ||
          this.readonly ||
          (this.isDropdownEmpty && !this.editable),
      }, anchor: this.dropdownAnchor, trigger: this.dropdownWrapperRef, onShowChanged: (e) => this.dropdownVisibilityChanged(e), placement: "bottom-start", positioningStrategy: 'absolute' }, h("div", { class: "select-list-header", title: this.i18nSelectListHeader }, this.i18nSelectListHeader), h("slot", null), h("div", { ref: (ref) => (this.addItemRef = ref), class: "d-contents" }), this.itemExists(this.inputFilterText) ? ('') : (h("ix-dropdown-item", { "data-testid": "add-item", icon: "plus", class: {
        'add-item': true,
        'd-none': !(this.editable && this.inputFilterText),
      }, label: this.inputFilterText, onItemClick: (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.emitAddItem(this.inputFilterText);
      } })))));
  }
  static get is() { return "ix-select"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["select.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["select.css"]
    };
  }
  static get properties() {
    return {
      "selectedIndices": {
        "type": "string",
        "mutable": true,
        "complexType": {
          "original": "string | string[]",
          "resolved": "string | string[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Indices of selected items"
        },
        "attribute": "selected-indices",
        "reflect": false,
        "defaultValue": "[]"
      },
      "allowClear": {
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
          "text": "Show clear button"
        },
        "attribute": "allow-clear",
        "reflect": false,
        "defaultValue": "false"
      },
      "mode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'single' | 'multiple'",
          "resolved": "\"multiple\" | \"single\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Selection mode"
        },
        "attribute": "mode",
        "reflect": false,
        "defaultValue": "'single'"
      },
      "editable": {
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
          "text": "Select is extendable"
        },
        "attribute": "editable",
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
          "text": "If true the select will be in disabled state"
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "readonly": {
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
          "text": "If true the select will be in readonly mode"
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
      },
      "i18nPlaceholder": {
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
          "text": "Input field placeholder"
        },
        "attribute": "i-1-8n-placeholder",
        "reflect": false,
        "defaultValue": "'Select an option'"
      },
      "i18nPlaceholderEditable": {
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
          "text": "Input field placeholder for editable select"
        },
        "attribute": "i-1-8n-placeholder-editable",
        "reflect": false,
        "defaultValue": "'Type of select option'"
      },
      "i18nSelectListHeader": {
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
          "text": "Select list header"
        },
        "attribute": "i-1-8n-select-list-header",
        "reflect": false,
        "defaultValue": "'Please select an option'"
      }
    };
  }
  static get states() {
    return {
      "dropdownShow": {},
      "value": {},
      "dropdownWrapperRef": {},
      "dropdownAnchor": {},
      "isDropdownEmpty": {},
      "hasFocus": {},
      "navigationItem": {},
      "inputFilterText": {},
      "inputValue": {}
    };
  }
  static get events() {
    return [{
        "method": "itemSelectionChange",
        "name": "itemSelectionChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Item selection changed"
        },
        "complexType": {
          "original": "string | string[]",
          "resolved": "string | string[]",
          "references": {}
        }
      }, {
        "method": "addItem",
        "name": "addItem",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Item added to selection"
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "selectedIndices",
        "methodName": "watchSelectedIndices"
      }, {
        "propName": "inputFilterText",
        "methodName": "watchInputText"
      }];
  }
  static get listeners() {
    return [{
        "name": "itemClick",
        "method": "onItemClicked",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "ix-select-item:labelChange",
        "method": "onLabelChange",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "keydown",
        "method": "onKeyDown",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}

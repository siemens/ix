/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { h, Host, } from '@stencil/core';
import { convertToRemString } from '../utils/rwd.util';
import { InputState } from './input-state';
import { LogicalFilterOperator } from './logical-filter-operator';
export class CategoryFilter {
  constructor() {
    this.ID_CUSTOM_FILTER_VALUE = 'CW_CUSTOM_FILTER_VALUE';
    this.documentClickCallback = this.handleDocumentClick.bind(this);
    this.hasFocus = undefined;
    this.showCategorySelection = undefined;
    this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
    this.inputValue = undefined;
    this.category = undefined;
    this.filterTokens = [];
    this.offsetDropdownX = undefined;
    this.offsetDropdownY = undefined;
    this.maxHeightDropdown = undefined;
    this.maxWidthDropdown = undefined;
    this.initialState = undefined;
    this.filterState = undefined;
    this.placeholder = undefined;
    this.categories = undefined;
    this.nonSelectableCategories = {};
    this.suggestions = undefined;
    this.icon = 'search';
    this.hideIcon = undefined;
    this.repeatCategories = true;
    this.tmpDisableScrollIntoView = true;
    this.labelCategories = 'Categories';
    this.i18nPlainText = 'Filter by text';
  }
  watchFilterState(newValue) {
    this.setFilterState(newValue);
  }
  watchShowCategorySelection(newValue) {
    if (newValue) {
      document.addEventListener('click', this.documentClickCallback);
    }
    else {
      document.removeEventListener('click', this.documentClickCallback);
    }
  }
  setDropdownOffset() {
    const height = this.calculateDropdownHeight();
    this.maxHeightDropdown = convertToRemString(height);
  }
  componentDidLoad() {
    var _a, _b;
    if (this.initialState !== undefined) {
      this.setFilterState(this.initialState);
    }
    else if (this.filterState !== undefined) {
      this.setFilterState(this.filterState);
    }
    (_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', this.handleFormElementKeyDown.bind(this));
    (_b = this.formElement) === null || _b === void 0 ? void 0 : _b.addEventListener('submit', (e) => e.preventDefault());
    if (this.textInput == null) {
      console.warn('Core UI category filter - unable to add event listeners to native input element');
      return;
    }
    this.textInput.addEventListener('click', () => (this.showCategorySelection = true));
    this.textInput.addEventListener('focusin', () => {
      this.hasFocus = true;
    });
    this.textInput.addEventListener('focusout', () => (this.hasFocus = false));
    this.textInput.addEventListener('input', () => {
      this.inputValue = this.textInput.value;
      const inputState = new InputState(this.inputValue, this.category);
      this.inputChanged.emit(inputState);
      this.showCategorySelection = true;
    });
    this.textInput.addEventListener('keydown', this.handleInputElementKeyDown.bind(this));
  }
  setFilterState(state) {
    this.filterTokens = [];
    for (const token of state.tokens) {
      this.addToken(token, this.ID_CUSTOM_FILTER_VALUE, this.categoryLogicalOperator, false);
    }
    for (const category of state.categories) {
      this.addToken(category.value, category.id, category.operator, false);
    }
    this.emitFilterEvent();
  }
  handleDocumentClick(ev) {
    const target = ev.target;
    if (!this.hostElement.contains(target)) {
      this.closeDropdown();
    }
  }
  closeDropdown() {
    this.showCategorySelection = false;
    this.category = undefined;
  }
  handleFormElementKeyDown(e) {
    switch (e.code) {
      case 'Enter':
      case 'NumpadEnter':
        if (this.category ||
          document.activeElement.classList.contains('plain-text-suggestion')) {
          const token = document.activeElement.getAttribute('data-id');
          this.addToken(token, this.category);
        }
        else if (document.activeElement.classList.contains('category-item-id')) {
          this.selectCategory(document.activeElement.getAttribute('data-id'));
        }
        e.preventDefault();
        break;
      case 'ArrowUp':
        this.focusPreviousItem();
        e.preventDefault();
        break;
      case 'ArrowDown':
        this.focusNextItem();
        e.preventDefault();
        break;
      case 'Escape':
        this.closeDropdown();
        break;
    }
  }
  focusPreviousItem() {
    const sibling = document.activeElement.previousSibling;
    if (sibling instanceof HTMLElement) {
      sibling.focus();
    }
  }
  focusNextItem() {
    const sibling = document.activeElement.nextSibling;
    if (sibling instanceof HTMLElement) {
      sibling.focus();
    }
  }
  handleInputElementKeyDown(e) {
    var _a;
    switch (e.code) {
      case 'ArrowDown':
        const selector = `.category-item-${this.category ? 'value' : 'id'}`;
        let item = this.hostElement.querySelector(selector);
        if (item instanceof HTMLElement) {
          item.focus();
          e.stopPropagation();
        }
        else if ((_a = this.suggestions) === null || _a === void 0 ? void 0 : _a.length) {
          item = this.hostElement.querySelector('.category-item');
          if (item instanceof HTMLElement) {
            item.focus();
            e.stopPropagation();
          }
        }
        break;
      case 'Backspace':
        if (this.textInput.value !== '') {
          return;
        }
        if (this.category) {
          this.category = undefined;
          return;
        }
        const tokenCount = this.filterTokens.length;
        if (tokenCount > 0) {
          this.removeToken(tokenCount - 1);
        }
        break;
      case 'Enter':
      case 'NumpadEnter':
        this.addToken(this.inputValue, this.category);
        e.preventDefault();
        break;
    }
  }
  emitFilterEvent() {
    const tokens = this.filterTokens
      .filter((item) => item.id === this.ID_CUSTOM_FILTER_VALUE)
      .map((item) => item.value);
    const categories = this.filterTokens.filter((item) => item.id !== this.ID_CUSTOM_FILTER_VALUE);
    const filterState = {
      tokens,
      categories,
    };
    this.filterChanged.emit(filterState);
  }
  addToken(token, category = this.ID_CUSTOM_FILTER_VALUE, operator = this.categoryLogicalOperator, emitEvent = true) {
    if (token === undefined || token === null) {
      return;
    }
    const newToken = token.trim();
    if (newToken === '') {
      return;
    }
    if (this.filterTokens.find((value) => (value === null || value === void 0 ? void 0 : value.value) === newToken)) {
      return;
    }
    const pair = { id: category, value: newToken, operator };
    this.filterTokens = [...this.filterTokens, pair];
    this.textInput.value = '';
    this.inputValue = '';
    this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
    this.isScrollStateDirty = true;
    this.textInput.focus();
    if (emitEvent) {
      this.emitFilterEvent();
    }
    this.closeDropdown();
  }
  removeToken(index) {
    this.filterTokens = this.filterTokens.filter((_, i) => i !== index);
    this.emitFilterEvent();
  }
  getCategoryIds() {
    const ids = [];
    for (const id in this.categories) {
      if (Object.prototype.hasOwnProperty.call(this.categories, id)) {
        ids.push(id);
      }
    }
    return ids;
  }
  getCategoryLables() {
    return this.getCategoryIds().map((id) => this.categories[id].label);
  }
  selectCategory(category) {
    this.category = category;
    this.textInput.value = '';
    this.inputValue = '';
    this.textInput.focus();
  }
  openCategorySelection() {
    this.showCategorySelection = true;
  }
  resetFilter() {
    this.closeDropdown();
    this.filterTokens = [];
    this.emitFilterEvent();
  }
  calculateDropdownX() {
    var _a;
    if (!this.textInput) {
      return 0;
    }
    const xInput = this.textInput.getBoundingClientRect().x;
    const xFrom = (_a = this.formElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().x;
    return xInput - xFrom;
  }
  calculateDropdownY() {
    if (!this.textInput) {
      return 32;
    }
    return this.hostElement.getBoundingClientRect().height;
  }
  calculateDropdownHeight(top = 32) {
    const hostTop = this.hostElement.getBoundingClientRect().top;
    const offset = hostTop + top;
    return window.innerHeight - offset;
  }
  filterMultiples(value) {
    if (this.repeatCategories) {
      return true;
    }
    const isCategoryAlreadySet = this.filterTokens.find((token) => token.id === value);
    return !isCategoryAlreadySet;
  }
  filterDuplicateTokens(value) {
    const isTokenAlreadySet = this.filterTokens.some((token) => token.value === value);
    return !isTokenAlreadySet;
  }
  filterByInput(value) {
    if (this.inputValue === undefined || this.inputValue === '') {
      return true;
    }
    return value.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1;
  }
  toggleCategoryOperator() {
    switch (this.categoryLogicalOperator) {
      case LogicalFilterOperator.EQUAL:
        this.categoryLogicalOperator = LogicalFilterOperator.NOT_EQUAL;
        break;
      case LogicalFilterOperator.NOT_EQUAL:
        this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
        break;
    }
  }
  getFilterChipLabel(value) {
    var _a, _b, _c;
    if (value.id === this.ID_CUSTOM_FILTER_VALUE) {
      return value.value;
    }
    const operatorString = value.operator === LogicalFilterOperator.EQUAL ? '=' : '!=';
    const label = (_c = (_b = (_a = this.categories[value.id]) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : this.nonSelectableCategories[value.id]) !== null && _c !== void 0 ? _c : value.id;
    return `${label} ${operatorString} ${value.value}`;
  }
  componentDidRender() {
    const newOffsetX = this.calculateDropdownX();
    const newOffsetY = this.calculateDropdownY();
    const newOffsetXRem = convertToRemString(newOffsetX);
    const newOffsetYRem = convertToRemString(newOffsetY);
    const maxWidthDropdown = this.hostElement.getBoundingClientRect().width - newOffsetX;
    const maxHeightDropdown = this.calculateDropdownHeight(newOffsetY);
    this.maxWidthDropdown = convertToRemString(maxWidthDropdown);
    this.maxHeightDropdown = convertToRemString(maxHeightDropdown);
    // This will throw a warning
    if (newOffsetXRem !== this.offsetDropdownX) {
      this.offsetDropdownX = newOffsetXRem;
    }
    // This will throw a warning
    if (newOffsetYRem !== this.offsetDropdownY) {
      this.offsetDropdownY = newOffsetYRem;
    }
    if (this.isScrollStateDirty) {
      if (!this.tmpDisableScrollIntoView) {
        this.textInput.scrollIntoView();
      }
      this.isScrollStateDirty = false;
    }
  }
  getResetButton() {
    return (h("ix-icon-button", { onClick: () => this.resetFilter(), class: {
        'reset-button': true,
        'hide-reset-button': !this.filterTokens.length && !this.category,
      }, variant: "Secondary", ghost: true, oval: true, icon: "clear", size: "16", tabindex: "1" }));
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    return (h(Host, null, h("form", { ref: (el) => (this.formElement = el) }, h("div", { class: {
        'form-control': true,
        'input-container': true,
        focus: this.hasFocus,
        'no-icon': this.hideIcon,
      } }, h("ix-icon", { class: { 'd-none': this.hideIcon }, name: this.icon, size: "16" }), h("div", { class: "token-container" }, h("ul", { class: "list-unstyled" }, this.filterTokens.map((value, index) => (h("li", { class: {
        animate__animated: true,
        animate__fadein: true,
      } }, h("ix-filter-chip", { onCloseClick: () => this.removeToken(index) }, this.getFilterChipLabel(value))))), this.categories === undefined ? ('') : (h("li", { class: {
        'category-preview': true,
        'd-none': !this.category,
      } }, (_a = this.categories[this.category]) === null || _a === void 0 ? void 0 : _a.label)), h("input", { class: {
        'text-input': true,
        'hide-placeholder': this.category !== undefined,
      }, ref: (el) => (this.textInput = el), type: "text", placeholder: this.placeholder, onFocus: () => this.openCategorySelection() }))), this.getResetButton())), h("div", { class: {
        'category-selection-container': true,
        'd-none': !this.showCategorySelection && this.category === undefined,
      }, style: {
        left: this.offsetDropdownX,
        top: this.offsetDropdownY,
        'max-width': this.maxWidthDropdown,
        'max-height': this.maxHeightDropdown,
      } }, h("div", { class: {
        'd-none': !this.showCategorySelection || this.category !== undefined,
      } }, h("div", { class: {
        'category-item-header': true,
        'd-none': this.getCategoryLables().filter((value) => this.filterByInput(value)).length === 0,
      } }, this.labelCategories), (_b = this.getCategoryIds()) === null || _b === void 0 ? void 0 :
      _b.filter((id) => this.filterByInput(this.categories[id].label)).filter((id) => this.filterMultiples(id)).map((id) => {
        var _a;
        return (h("div", { "data-id": id, title: id, class: "category-item category-item-id", onClick: () => this.selectCategory(id), tabindex: "0" }, (_a = this.categories[id]) === null || _a === void 0 ? void 0 : _a.label));
      })), h("div", { class: {
        'd-none': this.category === undefined,
      } }, h("button", { class: "btn btn-invisible-secondary btn-icon", onClick: () => this.toggleCategoryOperator(), tabindex: "-1" }, this.categoryLogicalOperator === LogicalFilterOperator.NOT_EQUAL
      ? '='
      : '!='), this.categories === undefined ? ('') : (h("div", { class: "category-item-header" }, (_c = this.categories[this.category]) === null || _c === void 0 ? void 0 : _c.label)), this.categories === undefined
      ? ''
      : (_d = this.categories[this.category]) === null || _d === void 0 ? void 0 : _d.options.filter((value) => this.filterByInput(value)).filter((value) => this.filterDuplicateTokens(value)).map((id) => (h("div", { "data-id": id, title: id, class: "category-item category-item-value", onClick: () => this.addToken(id, this.category), tabindex: "0" }, `${this.categoryLogicalOperator ===
        LogicalFilterOperator.EQUAL
        ? '='
        : '!='} ${id}`)))), h("div", { class: {
        'category-item-header': true,
        'd-none': this.category !== undefined ||
          this.getCategoryIds().filter((value) => this.filterByInput(value)).length > 0,
      } }, this.i18nPlainText), h("div", { class: {
        'd-none': !((_e = this.suggestions) === null || _e === void 0 ? void 0 : _e.length) || this.category !== undefined,
      } }, (_f = this.suggestions) === null || _f === void 0 ? void 0 : _f.filter((value) => this.filterByInput(value)).filter((value) => this.filterDuplicateTokens(value)).map((suggestion) => (h("div", { "data-id": suggestion, class: "category-item plain-text-suggestion", onClick: () => this.addToken(suggestion), tabindex: "0" }, suggestion)))))));
  }
  static get is() { return "ix-category-filter"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "$": ["category-filter.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["category-filter.css"]
    };
  }
  static get properties() {
    return {
      "initialState": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "FilterState",
          "resolved": "FilterState",
          "references": {
            "FilterState": {
              "location": "import",
              "path": "./filter-state"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "deprecated",
              "text": "Will be removed with 2.0.0. Use the member filterState instead."
            }],
          "text": "When set this will initially populate the component with the provided search criteria.\nThis will trigger all input events accordingly."
        }
      },
      "filterState": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "FilterState",
          "resolved": "FilterState",
          "references": {
            "FilterState": {
              "location": "import",
              "path": "./filter-state"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "A set of search criteria to populate the component with."
        }
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
          "text": "Placeholder text to be displayed in an empty input field."
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "categories": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "{\n    [id: string]: {\n      label: string;\n      options: string[];\n    };\n  }",
          "resolved": "{ [id: string]: { label: string; options: string[]; }; }",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Configuration object hash used to populate the dropwdown menu for typeahead and quick selection functionality.\nEach ID maps to an object with a label and an array of options to select from."
        }
      },
      "nonSelectableCategories": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "{\n    [id: string]: string;\n  }",
          "resolved": "{ [id: string]: string; }",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "In certain use cases some categories are not available for selection any more.\nTo allow proper display of set filters with these categories this ID to label mapping can be populated.\nConfiguration object hash used to supply labels to the filter chips in the input field.\nEach ID maps to a string representing the label to display."
        },
        "defaultValue": "{}"
      },
      "suggestions": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "string[]",
          "resolved": "string[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "A list of strings that will be supplied as typeahead suggestions not tied to any categories."
        }
      },
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
          "text": "The icon next to the actual text input\nDefaults to 'search'"
        },
        "attribute": "icon",
        "reflect": false,
        "defaultValue": "'search'"
      },
      "hideIcon": {
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
          "text": "Allows to hide the icon inside the text input.\nDefaults to false"
        },
        "attribute": "hide-icon",
        "reflect": false
      },
      "repeatCategories": {
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
          "text": "If set to true allows that a single category can be set more than once.\nAn already set category will not appear in the category dropdown if set to false.\n\nDefaults to true"
        },
        "attribute": "repeat-categories",
        "reflect": false,
        "defaultValue": "true"
      },
      "tmpDisableScrollIntoView": {
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
          "tags": [{
              "name": "internal",
              "text": "For debugging purposes only!"
            }],
          "text": ""
        },
        "attribute": "tmp-disable-scroll-into-view",
        "reflect": false,
        "defaultValue": "true"
      },
      "labelCategories": {
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
          "text": "i18n"
        },
        "attribute": "label-categories",
        "reflect": false,
        "defaultValue": "'Categories'"
      },
      "i18nPlainText": {
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
          "text": "i18n"
        },
        "attribute": "i-1-8n-plain-text",
        "reflect": false,
        "defaultValue": "'Filter by text'"
      }
    };
  }
  static get states() {
    return {
      "hasFocus": {},
      "showCategorySelection": {},
      "categoryLogicalOperator": {},
      "inputValue": {},
      "category": {},
      "filterTokens": {},
      "offsetDropdownX": {},
      "offsetDropdownY": {},
      "maxHeightDropdown": {},
      "maxWidthDropdown": {}
    };
  }
  static get events() {
    return [{
        "method": "inputChanged",
        "name": "inputChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event dispatched whenever the text input changes."
        },
        "complexType": {
          "original": "InputState",
          "resolved": "InputState",
          "references": {
            "InputState": {
              "location": "import",
              "path": "./input-state"
            }
          }
        }
      }, {
        "method": "filterChanged",
        "name": "filterChanged",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event dispatched whenever the filter state changes."
        },
        "complexType": {
          "original": "FilterState",
          "resolved": "FilterState",
          "references": {
            "FilterState": {
              "location": "import",
              "path": "./filter-state"
            }
          }
        }
      }];
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "filterState",
        "methodName": "watchFilterState"
      }, {
        "propName": "showCategorySelection",
        "methodName": "watchShowCategorySelection"
      }];
  }
  static get listeners() {
    return [{
        "name": "resize",
        "method": "setDropdownOffset",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}

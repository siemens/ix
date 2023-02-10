import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.0928911b.js";
import { c as convertToRemString } from "./rwd.util-4a61a4b8.a45b2830.js";
import { L as LogicalFilterOperator, I as InputState } from "./logical-filter-operator-1bf83315.1b3b3530.js";
const categoryFilterCss = ".sc-ix-category-filter-h{display:block;position:relative}.sc-ix-category-filter-h .focus.sc-ix-category-filter{border-color:var(--theme-color-primary);box-shadow:0 0 0.25rem 0 var(--theme-color-primary) !important}.sc-ix-category-filter-h .reset-button.sc-ix-category-filter{position:absolute;top:0.25rem;right:0.25rem}.sc-ix-category-filter-h .reset-button.hide-reset-button.sc-ix-category-filter{display:none}.sc-ix-category-filter-h .input-container.sc-ix-category-filter{display:flex;height:100%;max-height:3.75rem;padding:1px 1.5rem 1px 2rem}.sc-ix-category-filter-h .input-container.no-icon.sc-ix-category-filter{padding-left:0.25rem}.sc-ix-category-filter-h .token-container.sc-ix-category-filter{flex-grow:1;overflow:hidden}.sc-ix-category-filter-h .text-input.sc-ix-category-filter{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);background:transparent;flex-grow:1;height:1.75rem}.sc-ix-category-filter-h .text-input.sc-ix-category-filter,.sc-ix-category-filter-h .text-input.sc-ix-category-filter:hover,.sc-ix-category-filter-h .text-input.sc-ix-category-filter:focus-visible{border:none;outline:none}.sc-ix-category-filter-h .text-input.hide-placeholder.sc-ix-category-filter::-moz-placeholder{opacity:0}.sc-ix-category-filter-h .text-input.hide-placeholder.sc-ix-category-filter::placeholder{opacity:0}.sc-ix-category-filter-h .list-unstyled.sc-ix-category-filter{display:flex;flex-wrap:wrap;list-style:none;padding:0;margin:0;overflow-y:auto}.sc-ix-category-filter-h ix-icon.sc-ix-category-filter{position:absolute;top:0.5rem;left:0.5rem}.sc-ix-category-filter-h ix-filter-chip.sc-ix-category-filter{margin-right:0.5rem}.sc-ix-category-filter-h .category-preview.sc-ix-category-filter{display:flex;align-items:center;height:1.5rem;background-color:var(--theme-bg-3);border-top-left-radius:1rem;border-bottom-left-radius:1rem;padding:0.5rem;margin:2px 0}.sc-ix-category-filter-h .category-selection-container.sc-ix-category-filter{box-shadow:var(--theme-box-shadow-level-1);background:var(--theme-color-1);position:absolute;top:2rem;overflow-y:auto;min-width:10rem;border:var(--theme-std-bdr-1);border-radius:0.25rem;padding:0.5rem;z-index:1}.sc-ix-category-filter-h .category-selection-container.sc-ix-category-filter .category-item.sc-ix-category-filter,.sc-ix-category-filter-h .category-selection-container.sc-ix-category-filter .category-item-header.sc-ix-category-filter{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:2rem;padding:0.5rem}.sc-ix-category-filter-h .category-selection-container.sc-ix-category-filter .category-item-header.sc-ix-category-filter{color:var(--theme-color-soft-text)}.sc-ix-category-filter-h .category-selection-container.sc-ix-category-filter .category-item-id.sc-ix-category-filter{border-top-left-radius:1rem;border-bottom-left-radius:1rem}.sc-ix-category-filter-h .category-selection-container.sc-ix-category-filter .category-item-value.sc-ix-category-filter{border-top-right-radius:1rem;border-bottom-right-radius:1rem}.sc-ix-category-filter-h .category-selection-container.sc-ix-category-filter .category-item.sc-ix-category-filter{cursor:pointer}.sc-ix-category-filter-h .category-selection-container.sc-ix-category-filter .category-item.sc-ix-category-filter:focus{background-color:var(--theme-generic-bg-active);outline:none}.sc-ix-category-filter-h .category-selection-container.sc-ix-category-filter .plain-text-suggestion.sc-ix-category-filter{border-radius:1rem}.sc-ix-category-filter-h ul.sc-ix-category-filter{height:100%}.sc-ix-category-filter-h ul.sc-ix-category-filter>li.sc-ix-category-filter,.sc-ix-category-filter-h input.sc-ix-category-filter{padding-top:2px;padding-bottom:2px}";
const CategoryFilter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputChanged = createEvent(this, "inputChanged", 7);
    this.filterChanged = createEvent(this, "filterChanged", 7);
    this.ID_CUSTOM_FILTER_VALUE = "CW_CUSTOM_FILTER_VALUE";
    this.documentClickCallback = this.handleDocumentClick.bind(this);
    this.hasFocus = void 0;
    this.showCategorySelection = void 0;
    this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
    this.inputValue = void 0;
    this.category = void 0;
    this.filterTokens = [];
    this.offsetDropdownX = void 0;
    this.offsetDropdownY = void 0;
    this.maxHeightDropdown = void 0;
    this.maxWidthDropdown = void 0;
    this.initialState = void 0;
    this.filterState = void 0;
    this.placeholder = void 0;
    this.categories = void 0;
    this.nonSelectableCategories = {};
    this.suggestions = void 0;
    this.icon = "search";
    this.hideIcon = void 0;
    this.repeatCategories = true;
    this.tmpDisableScrollIntoView = true;
    this.labelCategories = "Categories";
    this.i18nPlainText = "Filter by text";
  }
  watchFilterState(newValue) {
    this.setFilterState(newValue);
  }
  watchShowCategorySelection(newValue) {
    if (newValue) {
      document.addEventListener("click", this.documentClickCallback);
    } else {
      document.removeEventListener("click", this.documentClickCallback);
    }
  }
  setDropdownOffset() {
    const height = this.calculateDropdownHeight();
    this.maxHeightDropdown = convertToRemString(height);
  }
  componentDidLoad() {
    var _a, _b;
    if (this.initialState !== void 0) {
      this.setFilterState(this.initialState);
    } else if (this.filterState !== void 0) {
      this.setFilterState(this.filterState);
    }
    (_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", this.handleFormElementKeyDown.bind(this));
    (_b = this.formElement) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", (e) => e.preventDefault());
    if (this.textInput == null) {
      console.warn("Core UI category filter - unable to add event listeners to native input element");
      return;
    }
    this.textInput.addEventListener("click", () => this.showCategorySelection = true);
    this.textInput.addEventListener("focusin", () => {
      this.hasFocus = true;
    });
    this.textInput.addEventListener("focusout", () => this.hasFocus = false);
    this.textInput.addEventListener("input", () => {
      this.inputValue = this.textInput.value;
      const inputState = new InputState(this.inputValue, this.category);
      this.inputChanged.emit(inputState);
      this.showCategorySelection = true;
    });
    this.textInput.addEventListener("keydown", this.handleInputElementKeyDown.bind(this));
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
    this.category = void 0;
  }
  handleFormElementKeyDown(e) {
    switch (e.code) {
      case "Enter":
      case "NumpadEnter":
        if (this.category || document.activeElement.classList.contains("plain-text-suggestion")) {
          const token = document.activeElement.getAttribute("data-id");
          this.addToken(token, this.category);
        } else if (document.activeElement.classList.contains("category-item-id")) {
          this.selectCategory(document.activeElement.getAttribute("data-id"));
        }
        e.preventDefault();
        break;
      case "ArrowUp":
        this.focusPreviousItem();
        e.preventDefault();
        break;
      case "ArrowDown":
        this.focusNextItem();
        e.preventDefault();
        break;
      case "Escape":
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
      case "ArrowDown":
        const selector = `.category-item-${this.category ? "value" : "id"}`;
        let item = this.hostElement.querySelector(selector);
        if (item instanceof HTMLElement) {
          item.focus();
          e.stopPropagation();
        } else if ((_a = this.suggestions) === null || _a === void 0 ? void 0 : _a.length) {
          item = this.hostElement.querySelector(".category-item");
          if (item instanceof HTMLElement) {
            item.focus();
            e.stopPropagation();
          }
        }
        break;
      case "Backspace":
        if (this.textInput.value !== "") {
          return;
        }
        if (this.category) {
          this.category = void 0;
          return;
        }
        const tokenCount = this.filterTokens.length;
        if (tokenCount > 0) {
          this.removeToken(tokenCount - 1);
        }
        break;
      case "Enter":
      case "NumpadEnter":
        this.addToken(this.inputValue, this.category);
        e.preventDefault();
        break;
    }
  }
  emitFilterEvent() {
    const tokens = this.filterTokens.filter((item) => item.id === this.ID_CUSTOM_FILTER_VALUE).map((item) => item.value);
    const categories = this.filterTokens.filter((item) => item.id !== this.ID_CUSTOM_FILTER_VALUE);
    const filterState = {
      tokens,
      categories
    };
    this.filterChanged.emit(filterState);
  }
  addToken(token, category = this.ID_CUSTOM_FILTER_VALUE, operator = this.categoryLogicalOperator, emitEvent = true) {
    if (token === void 0 || token === null) {
      return;
    }
    const newToken = token.trim();
    if (newToken === "") {
      return;
    }
    if (this.filterTokens.find((value) => (value === null || value === void 0 ? void 0 : value.value) === newToken)) {
      return;
    }
    const pair = { id: category, value: newToken, operator };
    this.filterTokens = [...this.filterTokens, pair];
    this.textInput.value = "";
    this.inputValue = "";
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
    this.textInput.value = "";
    this.inputValue = "";
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
    if (this.inputValue === void 0 || this.inputValue === "") {
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
    const operatorString = value.operator === LogicalFilterOperator.EQUAL ? "=" : "!=";
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
    if (newOffsetXRem !== this.offsetDropdownX) {
      this.offsetDropdownX = newOffsetXRem;
    }
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
    return h("ix-icon-button", { onClick: () => this.resetFilter(), class: {
      "reset-button": true,
      "hide-reset-button": !this.filterTokens.length && !this.category
    }, variant: "Secondary", ghost: true, oval: true, icon: "clear", size: "16", tabindex: "1" });
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    return h(Host, null, h("form", { ref: (el) => this.formElement = el }, h("div", { class: {
      "form-control": true,
      "input-container": true,
      focus: this.hasFocus,
      "no-icon": this.hideIcon
    } }, h("ix-icon", { class: { "d-none": this.hideIcon }, name: this.icon, size: "16" }), h("div", { class: "token-container" }, h("ul", { class: "list-unstyled" }, this.filterTokens.map((value, index) => h("li", { class: {
      animate__animated: true,
      animate__fadein: true
    } }, h("ix-filter-chip", { onCloseClick: () => this.removeToken(index) }, this.getFilterChipLabel(value)))), this.categories === void 0 ? "" : h("li", { class: {
      "category-preview": true,
      "d-none": !this.category
    } }, (_a = this.categories[this.category]) === null || _a === void 0 ? void 0 : _a.label), h("input", { class: {
      "text-input": true,
      "hide-placeholder": this.category !== void 0
    }, ref: (el) => this.textInput = el, type: "text", placeholder: this.placeholder, onFocus: () => this.openCategorySelection() }))), this.getResetButton())), h("div", { class: {
      "category-selection-container": true,
      "d-none": !this.showCategorySelection && this.category === void 0
    }, style: {
      left: this.offsetDropdownX,
      top: this.offsetDropdownY,
      "max-width": this.maxWidthDropdown,
      "max-height": this.maxHeightDropdown
    } }, h("div", { class: {
      "d-none": !this.showCategorySelection || this.category !== void 0
    } }, h("div", { class: {
      "category-item-header": true,
      "d-none": this.getCategoryLables().filter((value) => this.filterByInput(value)).length === 0
    } }, this.labelCategories), (_b = this.getCategoryIds()) === null || _b === void 0 ? void 0 : _b.filter((id) => this.filterByInput(this.categories[id].label)).filter((id) => this.filterMultiples(id)).map((id) => {
      var _a2;
      return h("div", { "data-id": id, title: id, class: "category-item category-item-id", onClick: () => this.selectCategory(id), tabindex: "0" }, (_a2 = this.categories[id]) === null || _a2 === void 0 ? void 0 : _a2.label);
    })), h("div", { class: {
      "d-none": this.category === void 0
    } }, h("button", { class: "btn btn-invisible-secondary btn-icon", onClick: () => this.toggleCategoryOperator(), tabindex: "-1" }, this.categoryLogicalOperator === LogicalFilterOperator.NOT_EQUAL ? "=" : "!="), this.categories === void 0 ? "" : h("div", { class: "category-item-header" }, (_c = this.categories[this.category]) === null || _c === void 0 ? void 0 : _c.label), this.categories === void 0 ? "" : (_d = this.categories[this.category]) === null || _d === void 0 ? void 0 : _d.options.filter((value) => this.filterByInput(value)).filter((value) => this.filterDuplicateTokens(value)).map((id) => h("div", { "data-id": id, title: id, class: "category-item category-item-value", onClick: () => this.addToken(id, this.category), tabindex: "0" }, `${this.categoryLogicalOperator === LogicalFilterOperator.EQUAL ? "=" : "!="} ${id}`))), h("div", { class: {
      "category-item-header": true,
      "d-none": this.category !== void 0 || this.getCategoryIds().filter((value) => this.filterByInput(value)).length > 0
    } }, this.i18nPlainText), h("div", { class: {
      "d-none": !((_e = this.suggestions) === null || _e === void 0 ? void 0 : _e.length) || this.category !== void 0
    } }, (_f = this.suggestions) === null || _f === void 0 ? void 0 : _f.filter((value) => this.filterByInput(value)).filter((value) => this.filterDuplicateTokens(value)).map((suggestion) => h("div", { "data-id": suggestion, class: "category-item plain-text-suggestion", onClick: () => this.addToken(suggestion), tabindex: "0" }, suggestion)))));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "filterState": ["watchFilterState"],
      "showCategorySelection": ["watchShowCategorySelection"]
    };
  }
};
CategoryFilter.style = categoryFilterCss;
export {
  CategoryFilter as ix_category_filter
};

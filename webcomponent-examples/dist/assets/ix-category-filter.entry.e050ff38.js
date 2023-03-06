import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.352cb90e.js";
import { L as LogicalFilterOperator, I as InputState } from "./logical-filter-operator-15696001.d3e8ce6a.js";
const categoryFilterCss = ".sc-ix-category-filter-h{display:block;position:relative}.sc-ix-category-filter-h .focus.sc-ix-category-filter{border-color:var(--theme-color-primary);box-shadow:0 0 0.25rem 0 var(--theme-color-primary) !important}.sc-ix-category-filter-h .reset-button.sc-ix-category-filter{position:absolute;top:0.25rem;right:0.25rem}.sc-ix-category-filter-h .reset-button.hide-reset-button.sc-ix-category-filter{display:none}.sc-ix-category-filter-h .input-container.sc-ix-category-filter{display:flex;height:100%;max-height:3.75rem;padding:1px 1.5rem 1px 2rem}.sc-ix-category-filter-h .input-container.no-icon.sc-ix-category-filter{padding-left:0.25rem}.sc-ix-category-filter-h .token-container.sc-ix-category-filter{flex-grow:1;overflow:hidden}.sc-ix-category-filter-h .text-input.sc-ix-category-filter{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);background:transparent;flex-grow:1;height:1.75rem}.sc-ix-category-filter-h .text-input.sc-ix-category-filter,.sc-ix-category-filter-h .text-input.sc-ix-category-filter:hover,.sc-ix-category-filter-h .text-input.sc-ix-category-filter:focus-visible{border:none;outline:none}.sc-ix-category-filter-h .text-input.hide-placeholder.sc-ix-category-filter::-moz-placeholder{opacity:0}.sc-ix-category-filter-h .text-input.hide-placeholder.sc-ix-category-filter::placeholder{opacity:0}.sc-ix-category-filter-h .list-unstyled.sc-ix-category-filter{display:flex;flex-wrap:wrap;list-style:none;padding:0;margin:0;overflow-y:auto}.sc-ix-category-filter-h ix-icon.sc-ix-category-filter{position:absolute;top:0.5rem;left:0.5rem}.sc-ix-category-filter-h ix-filter-chip.sc-ix-category-filter{margin-right:0.5rem}.sc-ix-category-filter-h .category-preview.sc-ix-category-filter{display:flex;align-items:center;height:1.5rem;background-color:var(--theme-bg-3);border-top-left-radius:1rem;border-bottom-left-radius:1rem;padding:0.5rem;margin:2px 0}.sc-ix-category-filter-h ul.sc-ix-category-filter{height:100%}.sc-ix-category-filter-h ul.sc-ix-category-filter>li.sc-ix-category-filter,.sc-ix-category-filter-h input.sc-ix-category-filter{padding-top:2px;padding-bottom:2px}.sc-ix-category-filter-h ix-dropdown.sc-ix-category-filter{min-width:10rem !important}.sc-ix-category-filter-h ix-dropdown.sc-ix-category-filter .dropdown-item-container.sc-ix-category-filter{display:flex;flex-direction:column}.sc-ix-category-filter-h ix-dropdown.sc-ix-category-filter .dropdown-item-container.sc-ix-category-filter .dropdown-item.sc-ix-category-filter{-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.143em;color:var(--theme-color-std-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:2.5rem;margin:0.25rem 0.5rem;padding-inline:0.5rem;border-radius:100rem;width:auto}.sc-ix-category-filter-h ix-dropdown.sc-ix-category-filter .dropdown-item-container.sc-ix-category-filter .category-item.sc-ix-category-filter{border-end-end-radius:0;border-start-end-radius:0}.sc-ix-category-filter-h ix-dropdown.sc-ix-category-filter .dropdown-item-container.sc-ix-category-filter .category-item-value.sc-ix-category-filter{border-start-start-radius:0;border-end-start-radius:0}.sc-ix-category-filter-h ix-dropdown.sc-ix-category-filter .btn-toggle-operator.sc-ix-category-filter{margin-inline:0.5rem}";
const CategoryFilter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputChanged = createEvent(this, "inputChanged", 7);
    this.filterChanged = createEvent(this, "filterChanged", 7);
    this.ID_CUSTOM_FILTER_VALUE = "CW_CUSTOM_FILTER_VALUE";
    this.textInput = void 0;
    this.hasFocus = void 0;
    this.categoryLogicalOperator = LogicalFilterOperator.EQUAL;
    this.inputValue = void 0;
    this.category = void 0;
    this.filterTokens = [];
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
  componentDidLoad() {
    var _a, _b;
    if (this.initialState !== void 0) {
      this.setFilterState(this.initialState);
    } else if (this.filterState !== void 0) {
      setTimeout(() => this.setFilterState(this.filterState));
    }
    (_a = this.hostElement) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", this.handleFormElementKeyDown.bind(this));
    (_b = this.formElement) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", (e) => e.preventDefault());
    if (this.textInput == null) {
      console.warn("Core UI category filter - unable to add event listeners to native input element");
      return;
    }
    this.textInput.addEventListener("focusin", () => {
      this.hasFocus = true;
    });
    this.textInput.addEventListener("focusout", () => this.hasFocus = false);
    this.textInput.addEventListener("input", () => {
      this.inputValue = this.textInput.value;
      const inputState = new InputState(this.inputValue, this.category);
      this.inputChanged.emit(inputState);
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
  closeDropdown() {
    this.hostElement.querySelector("ix-dropdown").show = false;
  }
  handleFormElementKeyDown(e) {
    switch (e.code) {
      case "Enter":
      case "NumpadEnter":
        if (!document.activeElement.classList.contains("dropdown-item")) {
          return;
        }
        const token = document.activeElement.getAttribute("data-id");
        if (this.hasCategorySelection()) {
          if (this.category) {
            this.addToken(token, this.category);
          } else if (document.activeElement.classList.contains("category-item-id")) {
            this.selectCategory(token);
          }
        } else {
          this.addToken(token);
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
    if (this.category) {
      this.category = void 0;
    }
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
  selectCategory(category) {
    this.category = category;
    this.textInput.value = "";
    this.inputValue = "";
    this.textInput.focus();
  }
  resetFilter() {
    this.closeDropdown();
    this.filterTokens = [];
    this.emitFilterEvent();
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
  getFilteredSuggestions() {
    var _a, _b;
    if (!((_a = this.suggestions) === null || _a === void 0 ? void 0 : _a.length)) {
      return [];
    }
    return (_b = this.suggestions) === null || _b === void 0 ? void 0 : _b.filter((value) => this.filterByInput(value)).filter((value) => this.filterDuplicateTokens(value));
  }
  hasCategorySelection() {
    return this.categories !== void 0;
  }
  displayDropdown() {
    if (this.hasCategorySelection()) {
      return true;
    }
    if (this.suggestions !== void 0) {
      return this.getFilteredSuggestions().length > 0;
    }
    return false;
  }
  renderPlainSuggestions() {
    return h("div", { class: "dropdown-item-container" }, this.getFilteredSuggestions().map((suggestion) => h("button", { class: "dropdown-item", "data-id": suggestion, onClick: () => this.addToken(suggestion), key: suggestion, title: suggestion }, suggestion)));
  }
  renderCategoryValues() {
    var _a, _b;
    return h("div", { class: "dropdown-item-container" }, h("button", { class: "btn btn-invisible-secondary btn-icon btn-toggle-operator", onClick: () => this.toggleCategoryOperator(), tabindex: "-1" }, this.categoryLogicalOperator === LogicalFilterOperator.NOT_EQUAL ? "=" : "!="), h("div", { class: "dropdown-header" }, (_a = this.categories[this.category]) === null || _a === void 0 ? void 0 : _a.label), (_b = this.categories[this.category]) === null || _b === void 0 ? void 0 : _b.options.filter((value) => this.filterByInput(value)).filter((value) => this.filterDuplicateTokens(value)).map((id) => h("button", { class: "dropdown-item category-item-value", "data-id": id, title: id, key: id, onClick: () => this.addToken(id, this.category) }, `${this.categoryLogicalOperator === LogicalFilterOperator.EQUAL ? "=" : "!="} ${id}`)));
  }
  renderDropdownContent() {
    if (this.hasCategorySelection()) {
      if (this.category) {
        return this.renderCategoryValues();
      } else {
        return this.renderCategorySelection();
      }
    } else
      return this.renderPlainSuggestions();
  }
  renderCategorySelection() {
    var _a;
    return h("div", { class: "dropdown-item-container" }, (_a = this.getCategoryIds()) === null || _a === void 0 ? void 0 : _a.filter((id) => this.filterByInput(this.categories[id].label)).filter((id) => this.filterMultiples(id)).map((id) => {
      var _a2;
      return h("button", { class: "dropdown-item category-item category-item-id", "data-id": id, title: this.categories[id].label, key: id, onClick: () => this.selectCategory(id), tabindex: "0" }, (_a2 = this.categories[id]) === null || _a2 === void 0 ? void 0 : _a2.label);
    }));
  }
  getDropdownHeader() {
    if (this.categories) {
      if (this.category) {
        return null;
      } else {
        return this.labelCategories;
      }
    }
    return this.i18nPlainText;
  }
  componentDidRender() {
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
    var _a;
    return h(Host, null, h("form", { ref: (el) => this.formElement = el }, h("div", { class: {
      "form-control": true,
      "input-container": true,
      focus: this.hasFocus,
      "no-icon": this.hideIcon
    } }, h("ix-icon", { class: { "d-none": this.hideIcon }, name: this.icon, size: "16" }), h("div", { class: "token-container" }, h("ul", { class: "list-unstyled" }, this.filterTokens.map((value, index) => h("li", { key: value.toString(), class: {
      animate__animated: true,
      animate__fadein: true
    } }, h("ix-filter-chip", { onCloseClick: () => this.removeToken(index) }, this.getFilterChipLabel(value)))), this.categories === void 0 ? "" : h("li", { class: {
      "category-preview": true,
      "d-none": !this.category
    } }, (_a = this.categories[this.category]) === null || _a === void 0 ? void 0 : _a.label), h("input", { class: {
      "text-input": true,
      "hide-placeholder": this.category !== void 0
    }, ref: (el) => this.textInput = el, type: "text", placeholder: this.placeholder }))), this.getResetButton())), h("ix-dropdown", { closeBehavior: "outside", trigger: this.textInput, triggerEvent: ["click", "focus"], header: this.getDropdownHeader(), class: { "d-none": !this.displayDropdown() } }, this.renderDropdownContent()));
  }
  get hostElement() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "filterState": ["watchFilterState"]
    };
  }
};
CategoryFilter.style = categoryFilterCss;
export {
  CategoryFilter as ix_category_filter
};

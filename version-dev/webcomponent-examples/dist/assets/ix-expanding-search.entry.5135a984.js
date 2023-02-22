import { r as registerInstance, c as createEvent, h, H as Host } from "./index.6063163d.js";
const expandingSearchCss = ".sc-ix-expanding-search-h{display:inline-flex;width:auto;height:2rem;align-items:center;justify-content:space-between}.right-position.sc-ix-expanding-search-h{width:11.5625rem !important}.sc-ix-expanding-search-h .input-container.sc-ix-expanding-search{transition:all 0.3s ease-in-out}.sc-ix-expanding-search-h .disable-pointer.sc-ix-expanding-search{pointer-events:none}.sc-ix-expanding-search-h input.sc-ix-expanding-search{box-shadow:var(--theme-input--box-shadow)}.sc-ix-expanding-search-h .expanded.sc-ix-expanding-search{width:11.5625rem}.sc-ix-expanding-search-h .collapsed.sc-ix-expanding-search{width:1.5rem;border:none}.sc-ix-expanding-search-h .btn-search-icon.sc-ix-expanding-search{align-self:center;margin:auto;position:relative}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search{display:flex;max-width:2rem;max-height:2rem;border-radius:var(--theme-input--border-radius);transition:all 0.15s ease-in-out;z-index:1;align-items:center;position:relative;border:none}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:not(.disabled):not(:disabled):hover{border-color:transparent}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:not(.disabled):not(:disabled):active{border-color:transparent}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:not(.disabled):not(:disabled):focus-visible{outline:none}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:not(.disabled):not(:disabled):focus-visible{outline:var(--focus--border-color);outline-width:1px;outline-style:solid}.sc-ix-expanding-search-h .btn-search.sc-ix-expanding-search:active{width:2rem;height:2rem;border-radius:var(--theme-input--border-radius);border:var(--theme-std-bdr-1) !important}.sc-ix-expanding-search-h .input-container.sc-ix-expanding-search{display:flex;position:absolute;align-items:center;flex-wrap:nowrap}.sc-ix-expanding-search-h .btn-clear.sc-ix-expanding-search{position:absolute;border-radius:var(--theme-input--border-radius);right:0px;margin-right:0.25rem}.sc-ix-expanding-search-h .input.sc-ix-expanding-search{padding-left:2rem !important;padding-right:2.5rem !important}.sc-ix-expanding-search-h .opacity-before.sc-ix-expanding-search{opacity:0}.sc-ix-expanding-search-h .opacity-after.sc-ix-expanding-search{opacity:1}";
const ExpandingSearch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.icon = "search";
    this.placeholder = "Enter text here";
    this.value = "";
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
    this.value = "";
    this.isFieldChanged = false;
  }
  onChange(e) {
    this.value = e.target.value;
    if (this.isFieldChanged && this.value === "") {
      this.isFieldChanged = false;
    } else {
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
    return h(Host, { class: {
      expanded: this.expanded,
      "right-position": this.expanded
    } }, h("button", { class: {
      btn: true,
      "btn-invisible-primary": true,
      "btn-icon": true,
      "btn-search": true,
      "disable-pointer": this.expanded
    }, "data-testid": "button", onClick: () => this.expandInput(), tabindex: this.expanded ? -1 : 0 }, h("ix-icon", { class: "btn-search-icon", name: this.icon, size: this.expanded ? "16" : "24", color: this.hasFocus ? "input-search-icon--color--focus" : void 0 })), h("div", { class: {
      expanded: this.expanded,
      collapsed: !this.expanded,
      "disable-pointer": !this.expanded,
      "input-container": true
    }, "data-testid": "input-wrapper" }, h("input", { class: {
      "form-control": true,
      input: this.expanded,
      "disable-pointer": !this.expanded,
      "opacity-before": !this.expanded,
      "opacity-after": this.expanded
    }, ref: (el) => this.textInput = el, "data-testid": "input", placeholder: this.placeholder, type: "text", value: this.value, onBlur: () => {
      this.collapseInput();
      this.hasFocus = false;
    }, onFocus: () => this.hasFocus = true, onInput: (e) => this.onChange(e), tabindex: this.expanded ? 0 : -1 }), this.isFieldChanged ? h("ix-icon-button", { class: "btn-clear", icon: "clear", ghost: true, size: "16", "data-testid": "clear-button", onClick: () => this.clearClicked() }) : null));
  }
};
ExpandingSearch.style = expandingSearchCss;
export {
  ExpandingSearch as ix_expanding_search
};

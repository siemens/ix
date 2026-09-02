import { r as registerInstance, c as createEvent, h, H as Host } from "./global-Do6maBom.js";
import { D as iconClear, E as iconSearch } from "./index-BeX6RWvV-CXzUIwMU.js";
const expandingSearchCss = () => `@charset "UTF-8";:host{--ix-expanding-search-input-container--transition-duration:var(     --theme-medium-time   );--ix-expanding-search-button--transition-duration:var(--theme-default-time);--ix-expanding-search-button--border--active:var(--theme-std-bdr-1);--ix-expanding-search--border-radius:var(--theme-small-border-radius);--ix-expanding-search--box-shadow:none}:host{display:inline-flex;width:auto;height:2rem;align-items:center;justify-content:space-between;position:relative}:host *,:host *::after,:host *::before{box-sizing:border-box}:host *{--ix-scrollbar-border:var(--si-sys-border-4);--ix-scrollbar-background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--ix-scrollbar-border) var(--ix-scrollbar-background);scrollbar-width:thin}}:host *{}:host *::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host *{}:host *::-webkit-scrollbar-track{border-radius:5px;background:var(--si-sys-background-1)}:host *::-webkit-scrollbar-track:hover{background:var(--si-sys-background-1)}:host *{}:host *::-webkit-scrollbar-thumb{border-radius:5px;background:var(--si-sys-border-4)}:host *{}:host *::-webkit-scrollbar-thumb:hover{background:var(--si-sys-border-2)}:host *::-webkit-scrollbar-corner{display:none}:host .input-container{transition:all var(--ix-expanding-search-input-container--transition-duration) ease-in-out}:host input{color:var(--ix-input--color, var(--theme-color-std-text));border-radius:var(--ix-input--border-radius, var(--theme-small-border-radius));height:2rem;min-height:2rem;min-width:2rem;background-color:var(--ix-input--background, var(--theme-color-component-8));border:solid 1px var(--ix-input--border-color, var(--theme-color-std-bdr));box-shadow:var(--ix-input--box-shadow, var(--theme-inset-shadow-1));padding-inline-start:0.5rem;padding-inline-end:0.5rem}:host input{font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host input::-moz-placeholder{color:var(--ix-input-hint--color, var(--theme-color-soft-text))}:host input::placeholder{color:var(--ix-input-hint--color, var(--theme-color-soft-text))}:host input:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}:host input:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled){cursor:pointer}:host input:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,:host input:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled).hover{background-color:var(--ix-input--background--hover, var(--theme-color-component-8--hover));border-color:var(--ix-input--border-color--hover, var(--theme-color-dynamic));cursor:auto}:host input:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):hover,:host input:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled).hover{background-color:var(--ix-input--background--hover, var(--theme-color-component-8--hover));border-color:var(--ix-input--border-color--hover, var(--theme-color-dynamic));cursor:auto}:host input:not(:-moz-read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--ix-input--background--focus, var(--theme-color-component-8--hover));border-color:var(--ix-input--border-color--focus, var(--theme-color-dynamic));outline-offset:var(--ix-input--focus--outline-offset, var(--theme-focus-outline-offset));box-shadow:var(--ix-input--box-shadow, var(--theme-inset-shadow-1));outline:1px solid var(--theme-color-focus-bdr)}:host input:not(:read-only):not([readonly]):not([readOnly]):not(.readonly):not(.disabled):not(:disabled):focus-visible{background-color:var(--ix-input--background--focus, var(--theme-color-component-8--hover));border-color:var(--ix-input--border-color--focus, var(--theme-color-dynamic));outline-offset:var(--ix-input--focus--outline-offset, var(--theme-focus-outline-offset));box-shadow:var(--ix-input--box-shadow, var(--theme-inset-shadow-1));outline:1px solid var(--theme-color-focus-bdr)}:host input:focus-visible{color:var(--ix-input--color, var(--theme-color-std-text))}:host input[type=number]{text-align:right}:host input[type=number]::-webkit-inner-spin-button{margin-right:-2px;margin-left:2px;display:none}:host input.readonly,:host input[readonly]{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem}:host input:-moz-read-only{box-shadow:none !important;outline:none !important;border-color:var(--ix-input--border-color, var(--theme-color-std-bdr));cursor:default !important}:host input:read-only,:host input[readonly],:host input[readOnly],:host input.readonly{box-shadow:none !important;outline:none !important;border-color:var(--ix-input--border-color, var(--theme-color-std-bdr));cursor:default !important}:host input:read-only::-moz-placeholder,:host input[readonly]::-moz-placeholder,:host input[readOnly]::-moz-placeholder,:host input.readonly::-moz-placeholder{color:transparent}:host input:-moz-read-only::placeholder{color:transparent}:host input:read-only::placeholder,:host input[readonly]::placeholder,:host input[readOnly]::placeholder,:host input.readonly::placeholder{color:transparent}:host input:disabled,:host input.disabled{background:transparent !important;border-block-start:none !important;border-inline-start:none !important;border-inline-end:none !important;border-radius:0rem;color:var(--theme-color-weak-text);border-color:var(--ix-input--border-color-bottom--disabled, var(--theme-color-weak-bdr))}:host input:disabled::-moz-placeholder,:host input.disabled::-moz-placeholder{color:transparent}:host input:disabled::placeholder,:host input.disabled::placeholder{color:transparent}:host input{box-shadow:var(--ix-expanding-search--box-shadow);cursor:auto !important;width:100%}:host .expanded{width:11.5625rem}:host .expanded.fullWidth{width:100%}:host .collapsed{width:1.5rem;border:none}:host{}:host .btn-search-icon{align-self:center;margin:auto;position:relative}:host .btn-search{display:flex;max-width:2rem;max-height:2rem;border-radius:var(--ix-expanding-search--border-radius);transition:all var(--ix-expanding-search-button--transition-duration) ease-in-out;z-index:1;align-items:center;position:relative;border:none}:host .btn-search:not(.disabled):not(:disabled){cursor:pointer}:host .btn-search:not(.disabled):not(:disabled):hover,:host .btn-search:not(.disabled):not(:disabled).hover{border-color:transparent}:host .btn-search:not(.disabled):not(:disabled){cursor:pointer}:host .btn-search:not(.disabled):not(:disabled):active,:host .btn-search:not(.disabled):not(:disabled).active{border-color:transparent}:host .btn-search:not(.disabled):not(:disabled):focus-visible{outline:none}:host .btn-search:not(.disabled):not(:disabled):focus-visible{outline:var(--focus--border-color);outline-width:1px;outline-style:solid}:host .btn-search.btn-search--expanded{margin-left:0.25rem;pointer-events:none}:host .btn-search:active{width:2rem;height:2rem;border-radius:var(--ix-expanding-search--border-radius);border:var(--ix-expanding-search-button--border--active) !important}:host{}:host .input-container{display:flex;position:absolute;align-items:center;flex-wrap:nowrap}:host .btn-clear{position:absolute;border-radius:var(--ix-expanding-search--border-radius);right:0px;margin-right:0.25rem}:host .input{padding-left:2rem !important;padding-right:2.5rem !important}:host .opacity-before{opacity:0}:host .opacity-after{opacity:1}:host(.right-position){width:11.5625rem !important}:host(.right-position.fullWidth){width:100% !important}:host(.right-position.fullWidth) .fullWidth{width:100% !important}`;
const ExpandingSearch = class {
  /**
   * Search icon
   */
  icon;
  /**
   * Placeholder text
   */
  placeholder = "Enter text here";
  /**
   * Default value
   */
  value = "";
  /**
   * If true the search field will fill all available horizontal space of it's parent container when expanded.
   */
  fullWidth = false;
  /**
   * button variant
   */
  variant = "tertiary";
  /**
   * ARIA label for the search icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelSearchIconButton;
  /**
   * ARIA label for the clear icon button
   * Will be set as aria-label on the nested HTML button element
   *
   * @since 3.2.0
   */
  ariaLabelClearIconButton = "Clear search";
  /**
   * ARIA label for the search input
   * Will be set as aria-label on the nested HTML input element
   *
   * @since 3.2.0
   */
  ariaLabelSearchInput = "Search input";
  isFieldChanged = false;
  expanded = false;
  hasFocus = false;
  /**
   * Value changed
   */
  valueChange;
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
  textInput;
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    this.textInput?.focus();
  }
  clearClicked() {
    this.clearInput();
    this.textInput?.focus();
    this.valueChange.emit(this.value);
  }
  render() {
    return h(Host, { key: "e107e2978ec8e25e7c45b4cfa57b835acca6dc2a", class: {
      expanded: this.expanded,
      "right-position": this.expanded,
      fullWidth: this.fullWidth
    } }, h("ix-icon-button", { key: "35f34a3ffe007c8dd30cda77df38960c7c022be6", size: this.expanded ? "16" : "24", icon: this.icon ?? iconSearch, variant: this.expanded ? "tertiary" : this.variant, "data-testid": "button", onClick: () => this.expandInput(), tabindex: this.expanded ? -1 : 0, iconColor: this.hasFocus ? "--si-sys-text-accent" : void 0, class: {
      "btn-search": true,
      "btn-search--expanded": this.expanded
    }, "aria-label": this.ariaLabelSearchIconButton ?? (this.expanded ? "Close search" : "Open search") }), h("div", { key: "466d0a6d5e476fab3581e675a30717088f7c12cb", class: {
      expanded: this.expanded,
      fullWidth: this.fullWidth,
      collapsed: !this.expanded,
      "disable-pointer": !this.expanded,
      "input-container": true
    }, "data-testid": "input-wrapper" }, h("input", { key: "116b7f0538e6ed9ebc1dacdd413e179a867afed3", class: {
      input: this.expanded,
      "disable-pointer": !this.expanded,
      "opacity-before": !this.expanded,
      "opacity-after": this.expanded
    }, ref: (el) => this.textInput = el, "data-testid": "input", placeholder: this.placeholder, type: "text", value: this.value, onBlur: () => {
      this.collapseInput();
      this.hasFocus = false;
    }, onFocus: () => this.hasFocus = true, onInput: (e) => this.onChange(e), tabindex: this.expanded ? 0 : -1, "aria-label": this.ariaLabelSearchInput }), this.isFieldChanged ? h("ix-icon-button", { class: "btn-clear", icon: iconClear, variant: "subtle-tertiary", size: "16", "data-testid": "clear-button", onClick: () => this.clearClicked(), "aria-label": this.ariaLabelClearIconButton }) : null));
  }
};
ExpandingSearch.style = expandingSearchCss();
export {
  ExpandingSearch as ix_expanding_search
};
